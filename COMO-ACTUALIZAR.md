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
2. Una fila por producto: `linea;producto;presentacion;tipo;Precio público;Líder;Oro;Plata;Bronce;codigo`. En `tipo` va `promo` si el producto está en promoción (si no, vacío).
3. Las columnas de categorías van **de mayor a menor**. Si se suma una categoría nueva, agregá su columna en el lugar que le toca y la página la muestra sola.
4. Los precios van sin signo $ y con punto decimal (por ejemplo `12879.36`). Guardalo como CSV separado por punto y coma (`;`).

## 6. Publicar

Los cambios se publican solos unos segundos después de subirlos a GitHub (repositorio `fotos-estados`).
