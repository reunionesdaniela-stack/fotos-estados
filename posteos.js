/* Posteos para redes. Para sumar uno: guardá la imagen (o el video .mp4) en fotos/posteos
   y agregá una línea en el grupo del ciclo o en la línea que corresponda.
   Cada posteo: archivo, formato ("feed", "historia" o "reel") y el texto para copiar
   (el copy con los hashtags). Las listas vacías muestran «Pronto». */
window.POSTEOS = {
  ciclo: {
    titulo: "Posteos de este ciclo",
    vigencia: "Lanzamientos del catálogo de noviembre 🌿",
    // cada grupo es un desplegable; el ejemplo de abajo muestra el formato de un posteo
    // {archivo: "fotos/posteos/ejemplo.jpg", formato: "feed", texto: "Texto del posteo 🌿\n\n#Biogreen #Aromas"},
    grupos: [
      {nombre: "Inspira AMO 💜", posteos: [
        {archivo: "fotos/posteos/lanz-amo-portada.jpg", formato: "feed", texto: "¡Nuevo! Inspira AMO 💜\nUna creación floral acuática que revela la esencia de amar.\n\n¿Querés conocerlo? Escribime y te cuento 🌸\n\n#Biogreen #Inspira #Perfume #Fragancias #Lanzamiento"},
        {archivo: "fotos/posteos/lanz-amo-familia.jpg", formato: "feed", texto: "Inspira AMO 💜\nFamilia olfativa floral acuática: flor de nenúfar, flor de iris y flor de heliotropo.\n\nEscribime y te cuento 🌸\n\n#Biogreen #Inspira #Perfume #Fragancias"},
        {archivo: "fotos/posteos/lanz-amo-precio.jpg", formato: "feed", texto: "¡LANZAMIENTO! Inspira AMO 💜\nEau de Parfum 100 ml + perfumero recargable 8 ml: $43.599 (30% OFF).\n\nPedímelo 🌸\n\n#Biogreen #Inspira #Perfume #Fragancias #Lanzamiento"},
        {archivo: "fotos/posteos/feed-amo-inspira.jpg", formato: "feed", texto: "¡LANZAMIENTO! AMO de Inspira by Biogreen 💜\nUna creación floral acuática que revela la esencia de amar.\n\n¿Querés conocerlo? Escribime y te cuento 🌸\n\n#Biogreen #Inspira #Perfume #Fragancias #Lanzamiento"},
        {archivo: "fotos/posteos/historia-amo-inspira.jpg", formato: "historia"}
      ]},
      {nombre: "Color: esmaltes y labiales 💅", posteos: [
        {archivo: "fotos/posteos/lanz-color-tendencias.jpg", formato: "feed", texto: "Tendencias Primavera Verano 💅💋\nLlegaron los nuevos esmaltes en gel y labiales gloss de Biogreen.\n\n¿Cuál es tu color? Escribime 💚\n\n#Biogreen #EsmaltesEnGel #LabialesGloss #LookVerano"},
        {archivo: "fotos/posteos/lanz-color-esmaltes.jpg", formato: "feed", texto: "¡NUEVOS! Esmaltes en Gel 💅\nRed Tomato, Pink Silk, Passion Pink, Light Blue, Buttercream y Green Mood: $11.599 c/u (31% OFF).\n\n¿Cuál es el tuyo? Pedímelo 💚\n\n#Biogreen #EsmaltesEnGel #Uñas #LookVerano"},
        {archivo: "fotos/posteos/feed-esmaltes-en-gel.jpg", formato: "feed", texto: "¡NUEVOS! Esmaltes en Gel 💅\nSeis colores para tus uñas de verano: Light Blue, Red Tomato, Passion Pink, Pink Silk, Buttercream y Green Mood.\n\n¿Cuál es el tuyo? Pedímelo 💚\n\n#Biogreen #EsmaltesEnGel #Uñas #LookVerano"},
        {archivo: "fotos/posteos/historia-esmaltes-en-gel.jpg", formato: "historia"},
        {archivo: "fotos/posteos/lanz-color-gloss.jpg", formato: "feed", texto: "¡NUEVOS! Labiales Gloss 💋\nSparkling Stars, Soft Caramel, Apple Candy y Pink Bomb: $16.599 c/u (31% OFF).\n\nEscribime y elegí el tuyo ✨\n\n#Biogreen #LabialesGloss #Makeup #LookVerano"},
        {archivo: "fotos/posteos/feed-labiales-gloss.jpg", formato: "feed", texto: "¡NUEVOS! Labiales Gloss 💋\nBrillo e hidratación en cuatro tonos, para tu look de primavera verano.\n\nEscribime y elegí el tuyo ✨\n\n#Biogreen #LabialesGloss #Makeup #LookVerano"},
        {archivo: "fotos/posteos/historia-labiales-gloss.jpg", formato: "historia"}
      ]},
      {nombre: "Lámparas Catalíticas ✨", posteos: [
        {archivo: "fotos/posteos/lanz-cata-portada.jpg", formato: "feed", texto: "¡NUEVAS! Lámparas Catalíticas ✨\nUn aire más limpio, perfumado y elegante, todos los días.\n\nConsultame por los modelos 🌿\n\n#Biogreen #LamparaCatalitica #Aromas #Hogar"},
        {archivo: "fotos/posteos/lanz-cata-blanca.jpg", formato: "feed", texto: "Lámpara Catalítica Blanca ✨\nCon 4 aromatizantes esenciales x 240 ml: $83.999 el set (30% OFF).\n\nUn regalo que sorprende. Pedímela 🎁\n\n#Biogreen #LamparaCatalitica #Regalos #Hogar"},
        {archivo: "fotos/posteos/lanz-cata-negra.jpg", formato: "feed", texto: "Lámpara Catalítica Negra ✨\nCon 4 aromatizantes esenciales x 240 ml: $83.999 el set (30% OFF).\n\nUn regalo que sorprende. Pedímela 🎁\n\n#Biogreen #LamparaCatalitica #Regalos #Hogar"},
        {archivo: "fotos/posteos/lanz-cata-modo-de-uso.jpg", formato: "feed", texto: "¿Cómo se usa la lámpara catalítica? ✨\nTe dejo el paso a paso para que perfumes tu casa de forma segura.\n\n¿Tenés dudas? Escribime 💚\n\n#Biogreen #LamparaCatalitica #Aromas #Hogar"},
        {archivo: "fotos/posteos/feed-lamparas-cataliticas.jpg", formato: "feed", texto: "¡NUEVAS! Lámparas Catalíticas ✨\nUn aire más limpio, perfumado y elegante. Un regalo que sorprende.\n\nConsultame por los modelos 🌿\n\n#Biogreen #LamparaCatalitica #Aromas #Regalos #Hogar"},
        {archivo: "fotos/posteos/historia-lamparas-cataliticas.jpg", formato: "historia"},
        {archivo: "fotos/posteos/reel-lamparas-cataliticas.mp4", formato: "reel", texto: "Lámpara catalítica paso a paso ✨\nTe muestro cómo prepararla y encenderla para perfumar tu casa.\n\n¿Querés la tuya? Escribime y te cuento los modelos 💚\n\n#Biogreen #LamparaCatalitica #Aromas #Hogar"}
      ]},
      {nombre: "Línea Premium · Travel Size 🧳", posteos: [
        {archivo: "fotos/posteos/lanz-premium-portada.jpg", formato: "feed", texto: "¡NUEVO REGALABLE! Línea Premium 🧳\nTus fragancias favoritas en miniatura.\n\nPedímelo 🌍\n\n#Biogreen #LineaPremium #TravelSize #Regalos"},
        {archivo: "fotos/posteos/lanz-premium-travel.jpg", formato: "feed", texto: "Travel Size: ideal para llevarlo con vos a todos lados 🧳\nRegalable Premium, set de 4 aromatizantes x 60 ml: $22.999.\n\nPedímelo 🌍\n\n#Biogreen #LineaPremium #TravelSize #Aromas"},
        {archivo: "fotos/posteos/feed-travel-size.jpg", formato: "feed", texto: "¡NUEVO! Travel Size de la Línea Premium 🧳\nUn viaje aromático para llevar a todos lados.\n\nPedímelo y llevá tus aromas favoritos a donde vayas 🌍\n\n#Biogreen #LineaPremium #TravelSize #Aromas"},
        {archivo: "fotos/posteos/historia-travel-size.jpg", formato: "historia"}
      ]},
      {nombre: "Esencias de Armonización · difusores 🌿", posteos: [
        {archivo: "fotos/posteos/lanz-esencias-portada.jpg", formato: "feed", texto: "¡NUEVAS! Esencias de Armonización 🌿\nArmonizar tus espacios es armonizar tu vida.\n\n¿Cuál es la tuya? Escribime y te cuento 💚\n\n#Biogreen #EsenciasDeArmonizacion #DifusorDeAromas #Bienestar"},
        {archivo: "fotos/posteos/lanz-difusores-1.jpg", formato: "feed", texto: "¡LANZAMIENTO! Difusores de aromas 🌿\nPurificación, Equilibrio y Protección. Difusor de aromas 150 ml con varillas negras: $47.999 c/u.\n\nEscribime y te cuento 💚\n\n#Biogreen #DifusorDeAromas #EsenciasDeArmonizacion #Bienestar"},
        {archivo: "fotos/posteos/lanz-difusores-2.jpg", formato: "feed", texto: "¡LANZAMIENTO! Difusores de aromas 🌿\nEnergía, Prosperidad y Unión. Difusor de aromas 150 ml con varillas negras: $47.999 c/u.\n\nEscribime y te cuento 💚\n\n#Biogreen #DifusorDeAromas #EsenciasDeArmonizacion #Bienestar"},
        {archivo: "fotos/posteos/lanz-kit-energia.jpg", formato: "feed", texto: "¡LANZAMIENTO! Kit Energía 🍊\nLa señal que te impulsa a empezar.\n\nAromatizante de ambientes 300 ml + difusor de aromas 150 ml con varillas negras: $61.999 (30% OFF).\n\nDe la línea Esencias de Armonización. Escribime y te cuento 🌿\n\n#Biogreen #DifusorDeAromas #EsenciasDeArmonizacion #Bienestar"},
        {archivo: "fotos/posteos/lanz-kit-equilibrio.jpg", formato: "feed", texto: "¡LANZAMIENTO! Kit Equilibrio 🪷\nUn momento que elegís para vos.\n\nAromatizante de ambientes 300 ml + difusor de aromas 150 ml con varillas negras: $61.999 (30% OFF).\n\nDe la línea Esencias de Armonización. Escribime y te cuento 🌿\n\n#Biogreen #DifusorDeAromas #EsenciasDeArmonizacion #Bienestar"},
        {archivo: "fotos/posteos/lanz-kit-prosperidad.jpg", formato: "feed", texto: "¡LANZAMIENTO! Kit Prosperidad 🌾\nAbrí caminos a nuevas posibilidades.\n\nAromatizante de ambientes 300 ml + difusor de aromas 150 ml con varillas negras: $61.999 (30% OFF).\n\nDe la línea Esencias de Armonización. Escribime y te cuento 🌿\n\n#Biogreen #DifusorDeAromas #EsenciasDeArmonizacion #Bienestar"},
        {archivo: "fotos/posteos/lanz-kit-proteccion.jpg", formato: "feed", texto: "¡LANZAMIENTO! Kit Protección 🧿\nSentite firme en vos.\n\nAromatizante de ambientes 300 ml + difusor de aromas 150 ml con varillas negras: $61.999 (30% OFF).\n\nDe la línea Esencias de Armonización. Escribime y te cuento 🌿\n\n#Biogreen #DifusorDeAromas #EsenciasDeArmonizacion #Bienestar"},
        {archivo: "fotos/posteos/lanz-kit-purificacion.jpg", formato: "feed", texto: "¡LANZAMIENTO! Kit Purificación 💧\nHacé lugar para algo nuevo.\n\nAromatizante de ambientes 300 ml + difusor de aromas 150 ml con varillas negras: $61.999 (30% OFF).\n\nDe la línea Esencias de Armonización. Escribime y te cuento 🌿\n\n#Biogreen #DifusorDeAromas #EsenciasDeArmonizacion #Bienestar"},
        {archivo: "fotos/posteos/lanz-kit-union.jpg", formato: "feed", texto: "¡LANZAMIENTO! Kit Unión 🌸\nEspacio para lo que nos hace bien.\n\nAromatizante de ambientes 300 ml + difusor de aromas 150 ml con varillas negras: $61.999 (30% OFF).\n\nDe la línea Esencias de Armonización. Escribime y te cuento 🌿\n\n#Biogreen #DifusorDeAromas #EsenciasDeArmonizacion #Bienestar"},
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
        {archivo: "fotos/posteos/historia-difusor-union.jpg", formato: "historia"}
      ]},
      {nombre: "Bolsas de Navidad 🎄", posteos: [
        {archivo: "fotos/posteos/feed-bolsas-navidad.jpg", formato: "feed", texto: "¡NUEVAS! Bolsas de Navidad 🎄\nRegalá bienestar, regalá Biogreen.\n\nIdeales para tus regalos de fin de año. Pedímelas 🎁\n\n#Biogreen #Navidad #Regalos #RegalaBienestar"},
        {archivo: "fotos/posteos/historia-bolsas-navidad.jpg", formato: "historia"}
      ]}
    ]
  },
  lineas: [
    {nombre: "Incorporaciones 🤝", posteos: [
      {archivo: "fotos/incorporaciones/casa-oliera-increible.jpg", formato: "historia", texto: "¿Y si tu casa oliera increíble y además te generara ingresos? 🌿\nCon Biogreen comprás a precio de distribuidora productos ecoamigables que la gente ama.\n\nEscribime y te explico cómo 💚\n\n#Biogreen #Emprendimiento #IngresosExtra #Aromas"},
      {archivo: "fotos/incorporaciones/lo-que-ya-amas.jpg", formato: "historia", texto: "Lo que ya amás en tu casa, también puede ser tu negocio ✨\nAromatizantes, fragancias y aromaterapia a precio de distribuidora.\n\nEscribime QUIERO y te cuento 🌿\n\n#Biogreen #Emprendimiento #TuNegocio #Aromas"},
      {archivo: "fotos/incorporaciones/propio-ingreso-verde.jpg", formato: "historia", texto: "Tu propio ingreso, a tu ritmo 🌱\nArrancá sin dejar lo que ya hacés. Vos elegís tus horarios y cuánto tiempo le dedicás.\n\nEscribime QUIERO por mensaje 💚\n\n#Biogreen #Emprendimiento #IngresosExtra #EmpresaB"},
      {archivo: "fotos/incorporaciones/propio-ingreso-claro.jpg", formato: "historia", texto: "Tu propio ingreso, a tu ritmo 🌱\nArrancá sin dejar lo que ya hacés. Vos elegís tus horarios y cuánto tiempo le dedicás.\n\nEscribime QUIERO por mensaje 💚\n\n#Biogreen #Emprendimiento #IngresosExtra #EmpresaB"}
    ]},
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
