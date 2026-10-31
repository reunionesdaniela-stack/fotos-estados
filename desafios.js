/* Desafíos vigentes. Para sumar uno, agregá otro bloque con su título, para quién es,
   la vigencia y los niveles (desde cuántos puntos, el premio y cuánto vale).
   El de venta personal usa los premios de negocio.js, así sus valores siguen al punto.
   Opcionales: unidad (si no son puntos), etiqueta en cada nivel, imagen del premio,
   placa (para compartir) y kit (producto del desafío). */
window.DESAFIOS = [
  {
    titulo: "Biogreen +1 · La duplicación en acción",
    para: "Todas las que suman gente nueva a su equipo",
    vigencia: "Ciclos 2, 3 y 4",
    detalle: "Según las incorporaciones que hagas en el triciclo, te llevás kits de verano: cooler + lona playera.",
    unidad: "incorporaciones",
    imagen: "fotos/desafios/biogreen-mas-1-kit-verano.jpg",
    niveles: [
      {etiqueta: "10", premio: "¡Te llevás 1 kit de verano! Cooler + lona playera."},
      {etiqueta: "15", premio: "¡Te llevás 2 kits de verano! Cooler + lona playera."}
    ],
    kit: {
      titulo: "Kit Incorporación Crece Biogreen",
      codigo: "45417",
      precio: 19999,
      puntos: "0,95",
      incluye: ["1 Kit Reposición", "1 Aromatizante Mango & Ananá 240 ml", "1 Gatillo transparente", "1 Tiras olfativas", "1 Bolsa Biogreen gris"],
      nota: "Precio vigente durante los ciclos 2, 3 y 4 o hasta agotar stock.",
      imagen: "fotos/desafios/biogreen-mas-1-kit-incorporacion.jpg"
    },
    placa: "fotos/desafios/biogreen-mas-1-placa.jpg"
  },
  {
    titulo: "Desafío Venta personal",
    para: "Distribuidoras y líderes",
    vigencia: "Ciclos 2, 3 y 4",
    detalle: "Según tu venta personal del ciclo, ganás productos de regalo. Los vendés a precio de catálogo y es todo ganancia.",
    niveles: window.NEGOCIO.premios
  }
];
