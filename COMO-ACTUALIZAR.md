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

## 3. Precios de la calculadora

Si cambian los precios por punto, se actualizan en `negocio.js`.

## 4. Publicar

Los cambios se publican solos unos segundos después de subirlos a GitHub (repositorio `fotos-estados`).
