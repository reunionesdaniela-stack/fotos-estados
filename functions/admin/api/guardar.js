/* Publica lo que guardó una administradora: sube las fotos nuevas y reescribe semana.js
   y/o posteos.js en un solo commit de GitHub. Cloudflare Pages publica solo en ~1 minuto.
   Las fotos que se quitan de la lista no se borran del repositorio. */

const json = (obj, status = 200) => new Response(JSON.stringify(obj), {status, headers: {"content-type": "application/json; charset=utf-8", "cache-control": "no-store"}});

const CAB_SEMANA = `/* Fotos de la semana. Para actualizar: cambiar el título y la lista de fotos.
   Cada foto: archivo (dentro de /fotos) y un texto corto que se muestra debajo.
   También se puede editar desde el panel de administradoras (/admin/). */
`;
const CAB_POSTEOS = `/* Posteos para redes. Para sumar uno: guardá la imagen (o el video .mp4) en fotos/posteos
   y agregá una línea en el ciclo o en la línea que corresponda.
   Cada posteo: archivo, formato ("feed", "historia" o "reel") y el texto para copiar
   (el copy con los hashtags). Las listas vacías muestran «Pronto».
   También se puede editar desde el panel de administradoras (/admin/). */
`;

const NUEVA = /^fotos\/(semana|posteos)\/[a-z0-9-]+\.(jpg|png|mp4)$/;
const ARCHIVO = /^fotos\/[A-Za-z0-9_\/-]+\.(jpe?g|png|webp|mp4)$/i;
const FORMATOS = ["feed", "historia", "reel"];

class Invalido extends Error {}
const txt = (v, max = 2000) => { if(v == null) return ""; if(typeof v !== "string" || v.length > max) throw new Invalido("texto inválido"); return v; };
const lista = v => { if(!Array.isArray(v) || v.length > 200) throw new Invalido("lista inválida"); return v; };
const archivo = v => { if(typeof v !== "string" || !ARCHIVO.test(v) || v.includes("..")) throw new Invalido("archivo inválido: " + v); return v; };

function limpiarSemana(s){
  if(!s || typeof s !== "object") throw new Invalido("semana inválida");
  const desde = txt(s.desde, 10);
  if(desde && !/^\d{4}-\d{2}-\d{2}$/.test(desde)) throw new Invalido("fecha inválida");
  return {mostrar: s.mostrar !== false, titulo: txt(s.titulo, 120), desde,
    fotos: lista(s.fotos).map(f => ({archivo: archivo(f && f.archivo), texto: txt(f.texto, 500)}))};
}

function limpiarPosteo(p){
  if(!p || !FORMATOS.includes(p.formato)) throw new Invalido("formato inválido");
  const o = {archivo: archivo(p.archivo), formato: p.formato}, t = txt(p.texto, 3000);
  if(t) o.texto = t;
  return o;
}

function limpiarPosteos(p){
  if(!p || !p.ciclo || !Array.isArray(p.lineas)) throw new Invalido("posteos inválidos");
  return {
    ciclo: {titulo: txt(p.ciclo.titulo, 120), vigencia: txt(p.ciclo.vigencia, 200), posteos: lista(p.ciclo.posteos).map(limpiarPosteo)},
    lineas: lista(p.lineas).map(l => ({nombre: txt(l && l.nombre, 120), posteos: lista(l.posteos).map(limpiarPosteo)}))
  };
}

export async function onRequestPost({request, env, data}){
  let cuerpo, cambios = [];
  try{
    cuerpo = await request.json();
    for(const a of lista(cuerpo.archivos || [])){
      if(!a || typeof a.ruta !== "string" || !NUEVA.test(a.ruta) || typeof a.base64 !== "string" || !a.base64) throw new Invalido("foto nueva inválida");
      cambios.push({path: a.ruta, base64: a.base64});
    }
    if(cuerpo.semana) cambios.push({path: "semana.js", content: CAB_SEMANA + "window.SEMANA = " + JSON.stringify(limpiarSemana(cuerpo.semana), null, 2) + ";\n"});
    if(cuerpo.posteos) cambios.push({path: "posteos.js", content: CAB_POSTEOS + "window.POSTEOS = " + JSON.stringify(limpiarPosteos(cuerpo.posteos), null, 2) + ";\n"});
  }catch(e){
    return json({error: "Los datos no son válidos: " + (e instanceof Invalido ? e.message : "no se pudieron leer")}, 400);
  }
  if(!cambios.length) return json({error: "No hay nada para publicar."}, 400);

  const repo = env.GITHUB_REPO || "reunionesdaniela-stack/fotos-estados";
  const gh = async (ruta, metodo = "GET", body) => {
    const r = await fetch(`https://api.github.com/repos/${repo}/${ruta}`, {method: metodo, body: body && JSON.stringify(body), headers: {
      "authorization": "Bearer " + env.GITHUB_TOKEN, "accept": "application/vnd.github+json", "user-agent": "biogreen-admin", "content-type": "application/json"}});
    if(!r.ok){ const e = new Error(`GitHub ${metodo} ${ruta.split("/").slice(0, 2).join("/")}: ${r.status}`); e.status = r.status; throw e; }
    return r.json();
  };

  try{
    // las fotos se suben una vez; si el commit choca con otro cambio simultáneo, se reintenta solo el commit
    const blobs = [];
    for(const c of cambios)
      blobs.push(c.base64 ? {path: c.path, mode: "100644", type: "blob", sha: (await gh("git/blobs", "POST", {content: c.base64, encoding: "base64"})).sha}
                          : {path: c.path, mode: "100644", type: "blob", content: c.content});
    for(let intento = 0; ; intento++){
      const ref = await gh("git/ref/heads/main"), padre = await gh("git/commits/" + ref.object.sha);
      const arbol = await gh("git/trees", "POST", {base_tree: padre.tree.sha, tree: blobs});
      const nuevo = await gh("git/commits", "POST", {message: "Panel: cambios de " + data.email, tree: arbol.sha, parents: [ref.object.sha],
        author: {name: data.email, email: data.email, date: new Date().toISOString()}});
      try{ await gh("git/refs/heads/main", "PATCH", {sha: nuevo.sha}); return json({ok: true, commit: nuevo.sha}); }
      catch(e){ if(e.status !== 422 || intento >= 1) throw e; }
    }
  }catch(e){
    return json({error: "No se pudo publicar (" + e.message + "). Probá de nuevo en un rato."}, 502);
  }
}
