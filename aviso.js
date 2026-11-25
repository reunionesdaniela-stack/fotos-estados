/* Aviso destacado: aparece como ventana al abrir la página y como tarjeta llamativa arriba de todo en el inicio.
   cada: "semana" → la ventana sale una vez por semana en cada celular (si no, una vez por día).
   boton: {texto, ir: "#seccion", abrir: "id de la parte a desplegar"} → en lugar de COMPARTIR, lleva a esa sección.
   Para sacarlo: mostrar: false. Se oculta solo después de la fecha «hasta» (vacía = sin fecha de fin). */
window.AVISO = {
  mostrar: true,
  etiqueta: "Combos navideños",
  titulo: "¿Ya viste los combos navideños?",
  texto: "Regalos listos para compartir en tu estado 🎁",
  imagen: "fotos/promos/be-jr4c.jpg",
  cada: "semana",
  boton: {texto: "Ver los combos", ir: "#fotos", abrir: "sec-semana"},
  hasta: ""
};
