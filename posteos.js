/* Posteos para redes. Para sumar uno: guardá la imagen (o el video .mp4) en fotos/posteos
   y agregá una línea en el ciclo o en la línea que corresponda.
   Cada posteo: archivo, formato ("feed", "historia" o "reel") y el texto para copiar
   (el copy con los hashtags). Las listas vacías muestran «Pronto». */
window.POSTEOS = {
  ciclo: {
    titulo: "Posteos de este ciclo",
    vigencia: "Lanzamientos de noviembre y promos del ciclo 2 🌿",
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
      {archivo: "fotos/posteos/historia-bolsas-navidad.jpg", formato: "historia"},
      {archivo: "fotos/posteos/reel-lamparas-cataliticas.mp4", formato: "reel", texto: "Lámpara catalítica paso a paso ✨\nTe muestro cómo prepararla y encenderla para perfumar tu casa.\n\n¿Querés la tuya? Escribime y te cuento los modelos 💚\n\n#Biogreen #LamparaCatalitica #Aromas #Hogar"},
      {archivo: "fotos/promos/arbol-de-higo.jpg", formato: "feed", texto: "Árbol de Higo, de Alma Botánica 🌿\nUn aroma frutado y agreste para tu casa.\nPerfumina repuesto 330 ml a $15.699 y difusor 250 ml a $31.599.\n\nPromo del ciclo 2. ¿Te lo reservo? Escribime 💚\n\n#Biogreen #PromoBiogreen #AlmaBotanica #Aromas"},
      {archivo: "fotos/promos/arbol-de-higo-hornillo.jpg", formato: "feed", texto: "Árbol de Higo en todas sus versiones 🌿\nAromatizante repuesto $15.699 · Para hornillo $11.499 · Difusor $31.599.\n\nPromo del ciclo 2. ¿Te lo reservo? Escribime 💚\n\n#Biogreen #PromoBiogreen #AlmaBotanica #Aromas"},
      {archivo: "fotos/promos/lino.jpg", formato: "feed", texto: "Lino: flores blancas y preciosas maderas 🤍\nTextil repuesto $15.999 · Piedras aromáticas $13.299 · Difusor $39.299.\n\nPromo del ciclo 2. ¿Te lo reservo? Escribime 💚\n\n#Biogreen #PromoBiogreen #ArmoniaTextil #Aromas"},
      {archivo: "fotos/promos/piedras-lino.jpg", formato: "feed", texto: "Piedras aromáticas Lino 🤍\nPara perfumar cajones y placares. 65 g a $13.299.\n\nPromo del ciclo 2. ¿Te lo reservo? Escribime 💚\n\n#Biogreen #PromoBiogreen #PiedrasAromaticas #Hogar"},
      {archivo: "fotos/promos/piedras-aromaticas.jpg", formato: "feed", texto: "Piedras aromáticas: pequeños rincones, grandes aromas ✨\nToque de Sol a $13.299 · Brisa Pura, Frescura Matinal y Capullos de Lino a $16.499 c/u.\n\nPromo del ciclo 2. ¿Te lo reservo? Escribime 💚\n\n#Biogreen #PromoBiogreen #PiedrasAromaticas #Hogar"},
      {archivo: "fotos/promos/piedras-toque-de-sol.jpg", formato: "feed", texto: "Piedras aromáticas Toque de Sol ☀️\nPara perfumar cajones y placares. 65 g a $13.299.\n\nPromo del ciclo 2. ¿Te lo reservo? Escribime 💚\n\n#Biogreen #PromoBiogreen #PiedrasAromaticas #Hogar"},
      {archivo: "fotos/promos/brumas-suenos.jpg", formato: "feed", texto: "Brumas Sueños, un aroma para tu descanso 🌙\nAmor, Calma, Alegría y Abundancia. Desde $9.899.\n\nPromo del ciclo 2. ¿Te lo reservo? Escribime 💚\n\n#Biogreen #PromoBiogreen #Sueños #Descanso"},
      {archivo: "fotos/promos/lavanda.jpg", formato: "feed", texto: "Emulsión corporal Lavanda 💜\nCon aceite puro de lavanda y fórmula vegana. 200 ml a $20.499.\n\nPromo del ciclo 2. ¿Te lo reservo? Escribime 💚\n\n#Biogreen #PromoBiogreen #Lavanda #CuidadoPersonal"},
      {archivo: "fotos/promos/limon.jpg", formato: "feed", texto: "Aceite esencial puro de Limón 🍋\nFrescura cítrica e intenso aroma. 10 ml a $15.699.\n\nPromo del ciclo 2. ¿Te lo reservo? Escribime 💚\n\n#Biogreen #PromoBiogreen #AceitesEsenciales #Aromaterapia"},
      {archivo: "fotos/promos/limon-y-naranja.jpg", formato: "feed", texto: "Aceites esenciales en promo 🍋🍊\nLimón 10 ml a $15.699 y Naranja 10 ml a $19.499.\n\nPromo del ciclo 2. ¿Te lo reservo? Escribime 💚\n\n#Biogreen #PromoBiogreen #AceitesEsenciales #Aromaterapia"},
      {archivo: "fotos/promos/enebro.jpg", formato: "feed", texto: "Enebro, tu momento de bienestar 🌿\nAceite esencial puro 10 ml a $35.999 y ánfora para aromaterapia a $5.299.\n\nPromo del ciclo 2. ¿Te lo reservo? Escribime 💚\n\n#Biogreen #PromoBiogreen #AceitesEsenciales #Aromaterapia"},
      {archivo: "fotos/promos/hamsa-spices.jpg", formato: "feed", texto: "Hamsa Spices, calidez para tu hogar 🧡\nAromatizante repuesto 330 ml a $15.499.\n\nPromo del ciclo 2. ¿Te lo reservo? Escribime 💚\n\n#Biogreen #PromoBiogreen #Hamsa #Aromas"},
      {archivo: "fotos/promos/toscana.jpg", formato: "feed", texto: "Toscana, un viaje irresistible 🌿\nNotas verdes, grosellas negras y cedro. Aromatizante repuesto 330 ml a $14.899.\n\nPromo del ciclo 2. ¿Te lo reservo? Escribime 💚\n\n#Biogreen #PromoBiogreen #Aromas #Hogar"},
      {archivo: "fotos/promos/ambar-y-frutas.jpg", formato: "feed", texto: "Ámbar & Frutas, aromas que viajan con vos 🚗\nAromatizante para auto 100 ml a $7.699.\n\nPromo del ciclo 2. ¿Te lo reservo? Escribime 💚\n\n#Biogreen #PromoBiogreen #AromaParaAuto"},
      {archivo: "fotos/promos/set-para-auto.jpg", formato: "feed", texto: "Set para auto, un regalo para disfrutar el camino 🎁\nFlor de madera + aromatizante para hornillo 10 ml. Rosa Búlgara o Sándalo a $32.499 cada set.\n\nPromo del ciclo 2. ¿Te lo reservo? Escribime 💚\n\n#Biogreen #PromoBiogreen #AromaParaAuto #Regalos"},
      {archivo: "fotos/promos/limpiador-electronicos.jpg", formato: "feed", texto: "Limpiador para electrónicos ✨\nPara pantallas, celulares, tablets y anteojos. Incluye paño. 100 ml a $10.399.\n\nPromo del ciclo 2. ¿Te lo reservo? Escribime 💚\n\n#Biogreen #PromoBiogreen #Limpieza #Hogar"}
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
    {nombre: "Esencias de Armonización", posteos: [
      {archivo: "fotos/posteos/feed-esencias-apertura.jpg", formato: "feed", texto: "Esencias de Armonización 🌿\nSeis aromas para acompañar cada momento: Energía, Equilibrio, Prosperidad, Protección, Purificación y Unión.\n\n¿Cuál es el tuyo? Escribime y te cuento 💚\n\n#Biogreen #EsenciasDeArmonizacion #Aromas #Bienestar"},
      {archivo: "fotos/posteos/feed-esencias-energia.jpg", formato: "feed", texto: "Energía 🍊\nLa señal que te impulsa a empezar.\n\nAromatizante y difusor de la línea Esencias de Armonización. Escribime y te cuento 🌿\n\n#Biogreen #EsenciasDeArmonizacion #Aromas #Bienestar"},
      {archivo: "fotos/posteos/feed-esencias-equilibrio.jpg", formato: "feed", texto: "Equilibrio 🪷\nUn momento que elegís para vos.\n\nAromatizante y difusor de la línea Esencias de Armonización. Escribime y te cuento 🌿\n\n#Biogreen #EsenciasDeArmonizacion #Aromas #Bienestar"},
      {archivo: "fotos/posteos/feed-esencias-prosperidad.jpg", formato: "feed", texto: "Prosperidad 🌾\nAbrí caminos a nuevas posibilidades.\n\nAromatizante y difusor de la línea Esencias de Armonización. Escribime y te cuento 🌿\n\n#Biogreen #EsenciasDeArmonizacion #Aromas #Bienestar"},
      {archivo: "fotos/posteos/feed-esencias-proteccion.jpg", formato: "feed", texto: "Protección 🧿\nSentite firme en vos.\n\nAromatizante y difusor de la línea Esencias de Armonización. Escribime y te cuento 🌿\n\n#Biogreen #EsenciasDeArmonizacion #Aromas #Bienestar"},
      {archivo: "fotos/posteos/feed-esencias-purificacion.jpg", formato: "feed", texto: "Purificación 💧\nHacé lugar para algo nuevo.\n\nAromatizante y difusor de la línea Esencias de Armonización. Escribime y te cuento 🌿\n\n#Biogreen #EsenciasDeArmonizacion #Aromas #Bienestar"},
      {archivo: "fotos/posteos/feed-esencias-union.jpg", formato: "feed", texto: "Unión 🌸\nEspacio para lo que nos hace bien.\n\nAromatizante y difusor de la línea Esencias de Armonización. Escribime y te cuento 🌿\n\n#Biogreen #EsenciasDeArmonizacion #Aromas #Bienestar"}
    ]},
    {nombre: "Línea Hogar", posteos: []},
    {nombre: "Body Splash", posteos: []}
  ]
};
