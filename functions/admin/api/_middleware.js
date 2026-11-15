/* Candado del panel de administradoras.
   Cloudflare Access deja pasar solo los mails autorizados y manda una firma (un "JWT")
   en cada pedido. Acá se comprueba esa firma, así nadie puede saltearse el login.
   Variables que hay que cargar en Cloudflare Pages (Settings › Variables):
     ACCESS_TEAM_DOMAIN  ej. biogreen.cloudflareaccess.com
     ACCESS_AUD          el "Application Audience (AUD) Tag" de la aplicación de Access */

const json = (obj, status = 200) => new Response(JSON.stringify(obj), {status, headers: {"content-type": "application/json; charset=utf-8", "cache-control": "no-store"}});
const b64u = s => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(s.length / 4) * 4, "=")), c => c.charCodeAt(0));
const leer = s => JSON.parse(new TextDecoder().decode(b64u(s)));

async function verificar(token, env){
  const [h, p, firma] = token.split(".");
  const cab = leer(h), datos = leer(p);
  const equipo = "https://" + env.ACCESS_TEAM_DOMAIN.trim().replace(/^https?:\/\//, "").replace(/\/+$/, "");
  const audEsperado = env.ACCESS_AUD.replace(/\s+/g, "");
  const certs = await (await fetch(equipo + "/cdn-cgi/access/certs")).json();
  const jwk = (certs.keys || []).find(k => k.kid === cab.kid);
  if(!jwk) throw new Error("firma desconocida (equipo " + equipo + ")");
  const clave = await crypto.subtle.importKey("jwk", jwk, {name: "RSASSA-PKCS1-v1_5", hash: "SHA-256"}, false, ["verify"]);
  const ok = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", clave, b64u(firma), new TextEncoder().encode(h + "." + p));
  if(!ok) throw new Error("firma inválida");
  if(![].concat(datos.aud).includes(audEsperado)) throw new Error("ACCESS_AUD no coincide");
  if(datos.iss !== equipo) throw new Error("equipo distinto: " + datos.iss);
  if(datos.exp * 1000 < Date.now()) throw new Error("sesión vencida");
  if(!datos.email) throw new Error("sin mail");
  return datos.email.toLowerCase();
}

export async function onRequest({request, env, next, data}){
  if(!env.ACCESS_TEAM_DOMAIN || !env.ACCESS_AUD || !env.GITHUB_TOKEN)
    return json({error: "El panel todavía no está activado. Falta configurar el login en Cloudflare."}, 503);
  const galleta = (request.headers.get("cookie") || "").match(/(?:^|;\s*)CF_Authorization=([^;]+)/);
  const token = request.headers.get("Cf-Access-Jwt-Assertion") || (galleta && galleta[1]);
  let email = null, motivo = token ? "" : "falta el login";
  try{ if(token) email = await verificar(token, env); }catch(e){ motivo = e.message; }
  if(!email) return json({error: "No tenés acceso. Entrá con tu mail desde la página de administración. (" + motivo + ")"}, 401);
  data.email = email;
  return next();
}
