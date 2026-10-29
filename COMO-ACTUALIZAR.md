# Cómo actualizar la página cada semana

La forma más fácil: abrí Claude en la carpeta `biogreen-estados` y escribí algo como:

> Actualizá las fotos de esta semana con estas fotos: (arrastrá las fotos) y publicalo.

Claude hace todo lo de abajo por vos. Si lo querés hacer a mano, estos son los pasos.

## 1. Fotos de esta semana

1. Guardá las fotos nuevas (en formato .jpg) dentro de la carpeta `fotos/semana` (si no existe, creala).
2. Abrí el archivo `semana.js` y cambiá:
   - `desde`: la fecha del lunes de esta semana, así: `"2026-11-02"` (año-mes-día).
   - `fotos`: una línea por foto, con el nombre del archivo y el texto que aparece debajo.

```js
window.SEMANA = {
  titulo: "Fotos de esta semana",
  desde: "2026-11-02",
  fotos: [
    {archivo: "fotos/semana/promo-1.jpg", texto: "Texto que va debajo de la foto 🌿"},
    {archivo: "fotos/semana/promo-2.jpg", texto: "Otro texto"}
  ]
};
```

Las fotos de la semana anterior las podés borrar de la carpeta.

## 2. Fotos por línea (cuando salga el catálogo nuevo)

1. Guardá las fotos en `fotos/lineas/<nombre-de-la-línea>`, por ejemplo `fotos/lineas/botica`.
2. En `lineas.js`, buscá la línea (por ejemplo `Botica Natural`) y agregá las fotos dentro de `fotos: [ ]`, igual que en la Línea Esenciales.
3. Las líneas sin fotos siguen mostrando «Pronto».

## 3. Posteos para redes

1. Guardá la imagen (o el video `.mp4`) en `fotos/posteos`.
2. En `posteos.js`, agregala en `ciclo` (los del ciclo actual) o en la línea que corresponda, con su formato y el texto para copiar:

```js
{archivo: "fotos/posteos/difusor-union.jpg", formato: "feed", texto: "Texto del posteo 🌿\n\n#Biogreen #Aromas"}
```

El formato es `"feed"`, `"historia"` o `"reel"`. `\n` es un salto de línea en el texto. Las líneas sin posteos muestran «Pronto».

## 4. Precios de la calculadora

Si cambia el valor del punto, se cambia el número `PUNTO` al principio de `negocio.js` (por ejemplo `20999`) y la calculadora se recalcula sola. Acordate de cambiar también el texto «1 punto = $…» en Primeros pasos (`index.html`).

Los **premios por productividad** también están en `negocio.js` (`premios` y `premiosVigencia`). Sus valores salen del punto y de `ESENCIAL_240` (el precio del Esencial 240 ml): si cambia ese precio, actualizalo ahí. Cuando termine el desafío, cambiá la vigencia o los premios. Los desafíos que se ven en la sección **Desafíos** están en `desafios.js`: para sumar uno nuevo, agregá otro bloque con título, para quién es, vigencia y niveles.

## 5. Tus precios (cada vez que cambia la lista de precios)

Los precios por categoría están en `precios.csv`. Se puede abrir con Excel o Google Sheets.

1. Cambiá la fecha de la primera línea: `# Lista de precios por categoría. Vigente desde: 2026-11-01` (año-mes-día).
2. Una fila por producto: `linea;producto;presentacion;tipo;Precio público;` las categorías de mayor a menor (`Directora Platino` … `Bronce`) y al final `codigo;puntos`. En `tipo` va `promo` si el producto está en promoción (si no, vacío). Los `puntos` son los de la lista (precio público dividido el valor del punto) y los usa **Mi pedido** para sumar los puntos de cada distribuidora.
3. Las columnas de categorías van **de mayor a menor**. Si se suma una categoría nueva, agregá su columna en el lugar que le toca y la página la muestra sola.
4. Los precios van sin signo $ y con punto decimal (por ejemplo `12879.36`). Guardalo como CSV separado por punto y coma (`;`).

## 6. Publicar

Los cambios se publican solos unos segundos después de subirlos a GitHub (repositorio `fotos-estados`).

## 7. Panel de administradoras (/admin/)

Las administradoras autorizadas pueden cambiar las **Fotos de esta semana** y los **Posteos** desde
`https://recursos-biogreen.pages.dev/admin/`, sin tocar archivos. Entran con su mail y un código que les llega
al correo. Cada vez que publican, el cambio queda en GitHub con su mail y la página se actualiza en ~1 minuto.
Las fotos que se quitan de la lista no se borran del repositorio.

Mientras no esté activado, el panel muestra «El panel todavía no está activado» y no deja cambiar nada.

### Activarlo (una sola vez)

1. **Login (Cloudflare Access)**
   - En Cloudflare, entrá a **Zero Trust** y elegí el plan **Free**. Elegí un nombre de equipo
     (por ejemplo `biogreen`): queda `biogreen.cloudflareaccess.com`.
   - **Settings › Authentication**: dejá activado **One-time PIN**.
   - **Access › Applications › Add an application › Self-hosted**:
     - Domain: `recursos-biogreen.pages.dev`, path: `admin`.
     - Policy: Action **Allow**, Include **Emails** y cargá los mails de las administradoras.
   - Guardá y copiá el **Application Audience (AUD) Tag** de la aplicación.
2. **Llave de GitHub**
   - En GitHub: **Settings › Developer settings › Fine-grained tokens › Generate new token**.
   - Repository access: **Only select repositories › fotos-estados**.
   - Permissions › Repository › **Contents: Read and write**.
   - Expiración: la más larga posible, y anotá cuándo vence.
3. **Variables en Cloudflare Pages** (proyecto `recursos-biogreen` › Settings › Variables and Secrets, en Production):
   - `GITHUB_TOKEN` (tipo **Secret**): la llave de GitHub.
   - `ACCESS_TEAM_DOMAIN`: `biogreen.cloudflareaccess.com` (el tuyo).
   - `ACCESS_AUD`: el AUD Tag del paso 1.
4. **Volvé a publicar**: Deployments › el último › **Retry deployment**, para que tome las variables.

### Sumar o sacar administradoras
Zero Trust › Access › Applications › la aplicación del panel › Policies: agregá o borrá el mail. No hace falta tocar nada más.

### Si la llave de GitHub vence
El panel va a decir «No se pudo publicar». Generá una nueva (paso 2) y reemplazá `GITHUB_TOKEN` (paso 3 y 4).
