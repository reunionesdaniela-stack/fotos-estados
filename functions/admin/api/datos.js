/* Devuelve al panel las fotos de la semana y los posteos tal como están hoy en GitHub
   (la página publicada puede tardar un minuto en ponerse al día). */

const json = (obj, status = 200) => new Response(JSON.stringify(obj), {status, headers: {"content-type": "application/json; charset=utf-8", "cache-control": "no-store"}});

export async function onRequestGet({env, data}){
  const repo = env.GITHUB_REPO || "reunionesdaniela-stack/fotos-estados";
  const leer = async ruta => {
    const r = await fetch(`https://api.github.com/repos/${repo}/contents/${ruta}?ref=main`, {headers: {
      "authorization": "Bearer " + env.GITHUB_TOKEN, "accept": "application/vnd.github.raw+json", "user-agent": "biogreen-admin"}});
    if(!r.ok) throw new Error(ruta + ": " + r.status);
    return r.text();
  };
  try{
    const [semana, posteos] = await Promise.all([leer("semana.js"), leer("posteos.js")]);
    return json({email: data.email, semana, posteos});
  }catch(e){
    return json({error: "No se pudieron leer los datos de GitHub (" + e.message + "). Revisá la llave GITHUB_TOKEN."}, 502);
  }
}
