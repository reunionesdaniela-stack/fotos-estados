/* Posteos para redes. Para sumar uno: guardá la imagen (o el video .mp4) en fotos/posteos
   y agregá una línea en el ciclo o en la línea que corresponda.
   Cada posteo: archivo, formato ("feed", "historia" o "reel") y el texto para copiar
   (el copy con los hashtags). Las listas vacías muestran «Pronto». */
window.POSTEOS = {
  ciclo: {
    titulo: "Posteos de este ciclo",
    vigencia: "Lanzamientos del catálogo de noviembre 🌿",
    posteos: [
      // {archivo: "fotos/posteos/ejemplo.jpg", formato: "feed", texto: "Texto del posteo 🌿\n\n#Biogreen #Aromas"},
      {archivo: "fotos/posteos/feed-amo-inspira.jpg", formato: "feed", texto: "¡LANZAMIENTO! AMO de Inspira by Biogreen 💜\nUna creación floral acuática que revela la esencia de amar.\n\n¿Querés conocerlo? Escribime y te cuento 🌸\n\n#Biogreen #Inspira #Perfume #Fragancias #Lanzamiento"},
      {archivo: "fotos/posteos/historia-amo-inspira.jpg", formato: "historia"},
      {archivo: "fotos/posteos/feed-esmaltes-en-gel.jpg", formato: "feed", texto: "¡NUEVOS! Esmaltes en Gel 💅\nSeis colores para tus uñas de verano: Light Blue, Red Tomato, Passion Pink, Pink Silk, Buttercream y Green Mood.\n\n¿Cuál es el tuyo? Pedímelo 💚\n\n#Biogreen #EsmaltesEnGel #Uñas #LookVerano"},
      {archivo: "fotos/posteos/historia-esmaltes-en-gel.jpg", formato: "historia"},
      {archivo: "fotos/posteos/feed-labiales-gloss.jpg", formato: "feed", texto: "¡NUEVOS! Labiales Gloss 💋\nBrillo e hidratación en cuatro tonos, para tu look de primavera verano.\n\nEscribime y elegí el tuyo ✨\n\n#Biogreen #LabialesGloss #Makeup #LookVerano"},
      {archivo: "fotos/posteos/historia-labiales-gloss.jpg", formato: "historia"},
      {archivo: "fotos/posteos/feed-lamparas-cataliticas.jpg", formato: "feed", texto: "¡NUEVAS! Lámparas Catalíticas ✨\nUn aire más limpio, perfumado y elegante. Un regalo que sorprende.\n\nConsultame por los modelos 🌿\n\n#Biogreen #LamparaCatalitica #Aromas #Regalos #Hogar"},
      {archivo: "fotos/posteos/historia-lamparas-cataliticas.jpg", formato: "historia"},
      {archivo: "fotos/posteos/feed-travel-size.jpg", formato: "feed", texto: "¡NUEVO! Travel Size de la Línea Premium 🧳\nUn viaje aromático para llevar a todos lados.\n\nPedímelo y llevá tus aromas favoritos a donde vayas 🌍\n\n#Biogreen #LineaPremium #TravelSize #Aromas"},
      {archivo: "fotos/posteos/historia-travel-size.jpg", formato: "historia"},
      {archivo: "fotos/posteos/feed-difusor-energia.jpg", formato: "feed", texto: "¡NUEVO! Difusor de aromas Energía 🍊\nLa señal que te impulsa a empezar.\n\nDe la línea Esencias de Armonización. Escribime y te cuento 🌿\n\n#Biogreen #DifusorDeAromas #EsenciasDeArmonizacion #Bienestar"},
      {archivo: "fotos/posteos/historia-difusor-energia.jpg", formato: "historia"},
      {archivo: "fotos/posteos/feed-difusor-equilibrio.jpg", formato: "feed", texto: "¡NUEVO! Difusor de aromas Equilibrio 🪷\nUn momento que elegís para vos.\n\nDe la línea Esencias de Armonización. Escribime y te cuento 🌿\n\n#Biogreen #DifusorDeAromas #EsenciasDeArmonizacion #Bienestar"},
      {archivo: "fotos/posteos/historia-difusor-equilibrio.jpg", formato: "historia"},
      {archivo: "fotos/posteos/feed-difusor-prosperidad.jpg", formato: "feed", texto: "¡NUEVO! Difusor de aromas Prosperidad 🌾\nAbrí caminos a nuevas posibilidades.\n\nDe la línea Esencias de Armonización. Escribime y te cuento 🌿\n\n#Biogreen #DifusorDeAromas #EsenciasDeArmonizacion #Bienestar"},
      {archivo: "fotos/posteos/historia-difusor-prosperidad.jpg", formato: "historia"},
      {archivo: "fotos/posteos/feed-difusor-proteccion.jpg", formato: "feed", texto: "¡NUEVO! Difusor de aromas Protección 🧿\nSentite firme en vos.\n\nDe la línea Esencias de Armonización. Escribime y te cuento 🌿\n\n#Biogreen #DifusorDeAromas #EsenciasDeArmonizacion #Bienestar"},
      {archivo: "fotos/posteos/historia-difusor-proteccion.jpg", formato: "historia"},
      {archivo: "fotos/posteos/feed-difusor-purificacion.jpg", formato: "feed", texto: "¡NUEVO! Difusor de aromas Purificación 💧\nHacé lugar para algo nuevo.\n\nDe la línea Esencias de Armonización. Escribime y te cuento 🌿\n\n#Biogreen #DifusorDeAromas #EsenciasDeArmonizacion #Bienestar"},
      {archivo: "fotos/posteos/historia-difusor-purificacion.jpg", formato: "historia"},
      {archivo: "fotos/posteos/feed-difusor-union.jpg", formato: "feed", texto: "¡NUEVO! Difusor de aromas Unión 🌸\nEspacio para lo que nos hace bien.\n\nDe la línea Esencias de Armonización. Escribime y te cuento 🌿\n\n#Biogreen #DifusorDeAromas #EsenciasDeArmonizacion #Bienestar"},
      {archivo: "fotos/posteos/historia-difusor-union.jpg", formato: "historia"},
      {archivo: "fotos/posteos/feed-bolsas-navidad.jpg", formato: "feed", texto: "¡NUEVAS! Bolsas de Navidad 🎄\nRegalá bienestar, regalá Biogreen.\n\nIdeales para tus regalos de fin de año. Pedímelas 🎁\n\n#Biogreen #Navidad #Regalos #RegalaBienestar"},
      {archivo: "fotos/posteos/historia-bolsas-navidad.jpg", formato: "historia"}
    ]
  },
  lineas: [
    {nombre: "Línea Esenciales", posteos: []},
    {nombre: "Botica Natural", posteos: []},
    {nombre: "Fragancias BE", posteos: []},
    {nombre: "Fragancias Inspira", posteos: []},
    {nombre: "Alma Botánica", posteos: []},
    {nombre: "Armonía Textil", posteos: []},
    {nombre: "Agua de Ropa", posteos: []},
    {nombre: "Línea Premium", posteos: []},
    {nombre: "Esencias de Armonización", posteos: []},
    {nombre: "Línea Hogar", posteos: []},
    {nombre: "Body Splash", posteos: []}
  ]
};
