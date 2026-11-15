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
        {archivo: "fotos/posteos/lanz-cata-blanca.jpg", formato: "feed", texto: "Lámpara Catalítica Blanca ✨\nCon 1 aromatizante Esenciales de 240 ml a elección: Papaya & Frambuesa, Glicinas & Violetas o Verbena & Petitgrain. $83.999 el set (30% OFF).\n\nUn regalo que sorprende. Pedímela 🎁\n\n#Biogreen #LamparaCatalitica #Regalos #Hogar"},
        {archivo: "fotos/posteos/lanz-cata-negra.jpg", formato: "feed", texto: "Lámpara Catalítica Negra ✨\nCon 1 aromatizante Esenciales de 240 ml a elección: Lima & Menta, Cedro & Jazmín o Praliné & Rosa China. $83.999 el set (30% OFF).\n\nUn regalo que sorprende. Pedímela 🎁\n\n#Biogreen #LamparaCatalitica #Regalos #Hogar"},
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
      {archivo: "fotos/incorporaciones/emprende-marca-que-hace-bien.jpg", formato: "historia", texto: "Emprendé con una marca que hace las cosas bien 🌿\nBiogreen es Empresa B Certificada: productos veganos, de calidad y con impacto positivo.\n\nSumate a mi equipo, escribime y te cuento 💚\n\n#Biogreen #EmpresaB #Emprendimiento #IngresosExtra"},
      {archivo: "fotos/incorporaciones/productos-que-se-regalan-solos.jpg", formato: "historia", texto: "Productos que se regalan solos 🎁\nAromas, brumas y fragancias que todos quieren recibir. Vendelos vos.\n\nSumate a Biogreen: escribime y te cuento 🌿\n\n#Biogreen #Emprendimiento #IngresosExtra #Regalos"},
      {archivo: "fotos/incorporaciones/recomenda-marca-verificable.jpg", formato: "historia", texto: "Recomendá una marca que podés verificar 🌿\nBiogreen es Empresa B Certificada: hace las cosas bien y se puede comprobar.\n\nSumate a mi equipo, escribime y te cuento 💚\n\n#Biogreen #EmpresaB #Emprendimiento #IngresosExtra"},
      {archivo: "fotos/incorporaciones/mas-facil-vender.jpg", formato: "historia", texto: "Es más fácil vender lo que vos misma usás 💚\nSi ya te encantan los productos Biogreen, recomendarlos te sale solo.\n\nSumate a mi equipo Biogreen: escribime y te cuento 🌿\n\n#Biogreen #Emprendimiento #IngresosExtra #Inspira"},
      {archivo: "fotos/incorporaciones/casa-oliera-increible.jpg", formato: "historia", texto: "¿Y si tu casa oliera increíble y además te generara ingresos? 🌿\nCon Biogreen comprás a precio de distribuidora productos ecoamigables que la gente ama.\n\nEscribime y te explico cómo 💚\n\n#Biogreen #Emprendimiento #IngresosExtra #Aromas"},
      {archivo: "fotos/incorporaciones/lo-que-ya-amas-asarina.jpg", formato: "historia", texto: "Lo que ya amás en tu casa, también puede ser tu negocio 🌿\nUsalos, recomendalos y vendelos: productos ecoamigables a precio de distribuidora.\n\nEscribime y te cuento 💚\n\n#Biogreen #Emprendimiento #TuNegocio #Aromas"},
      {archivo: "fotos/incorporaciones/consumo-consciente.jpg", formato: "historia", texto: "Tu consumo consciente, convertido en tu emprendimiento 🌿\nLos productos de limpieza y hogar que ya usás, ahora a precio de distribuidora para usar y vender.\n\nEscribime QUIERO y te cuento 💚\n\n#Biogreen #ConsumoConsciente #Emprendimiento #IngresosExtra"}
    ]},
    {nombre: "Navidad 🎄", posteos: [
      {archivo: "fotos/posteos/lineas/navidad-aromas-bienestar.jpg", formato: "feed", texto: "Los aromas traen bienestar a tu vida 🎄✨\nEsta Navidad, regalá Biogreen.\n\n#Biogreen #Navidad #RegalosConPropósito"},
      {archivo: "fotos/posteos/lineas/navidad-esta-navidad.jpg", formato: "feed", texto: "Esta Navidad… que tu casa huela a encuentro 🎄\n\n#Biogreen #Navidad"},
      {archivo: "fotos/posteos/lineas/navidad-regalo.jpg", formato: "feed", texto: "Regalos que se eligen con el corazón 🎁\nEscribime y armamos el tuyo.\n\n#Biogreen #Navidad #RegalosConPropósito"},
      {archivo: "fotos/posteos/lineas/navidad-arbol.jpg", formato: "feed", texto: "Biogreen en tu arbolito 🎄💚\n\n#Biogreen #Navidad"},
      {archivo: "fotos/posteos/lineas/nochebuena-en-el-aire.jpg", formato: "historia", texto: "La Nochebuena también se empieza a sentir en el aire ✨\nUn aroma puede cambiar por completo la energía de esta noche especial. ¿Qué tan lista está tu casa?\n\n#Biogreen #Nochebuena"},
      {archivo: "fotos/posteos/lineas/nochebuena-que-elegis.jpg", formato: "historia", texto: "Cada aroma crea una sensación distinta para esta noche única.\nPara esta Nochebuena, ¿qué elegís: cálido y envolvente o fresco y liviano? 👇\n\n#Biogreen #Nochebuena"},
      {archivo: "fotos/posteos/lineas/nochebuena-feliz.jpg", formato: "historia", texto: "Que esta noche tu casa huela a calma, encuentro y bienestar 🤍\nRespirá profundo. Lo importante está ahí.\n\n¡Feliz Nochebuena! 🎄\n\n#Biogreen #Nochebuena"}
    ]},
    {nombre: "Verano ☀️", posteos: [
      {archivo: "fotos/posteos/lineas/verano-biofree.jpg", formato: "feed", texto: "Infaltable del verano: repelente Biofree 🦟☀️\nCon aceite de citronella.\n\n#Biogreen #Verano #Biofree"},
      {archivo: "fotos/posteos/lineas/verano-premium-citricos.jpg", formato: "feed", texto: "Aromas cítricos para el verano 🍊\nAndalucía y Toscana, de la Línea Premium.\n\n#Biogreen #Verano #LíneaPremium"},
      {archivo: "fotos/posteos/lineas/verano-agua-para-ropa.jpg", formato: "feed", texto: "¡La liviandad del verano! 👕☀️\nAgua para Ropa para toallas, almohadas y todo tipo de telas.\n\n#Biogreen #Verano #AguaParaRopa"},
      {archivo: "fotos/posteos/lineas/verano-perfumado.jpg", formato: "feed", texto: "Verano perfumado 🌴\nCoco & Avellanas, Lima & Menta, Mango & Ananá y Papaya: los aromas de la temporada.\n\n#Biogreen #Verano #LíneaEsenciales"},
      {archivo: "fotos/posteos/lineas/verano-post-playa.jpg", formato: "feed", texto: "¡Ideal post playa! 🥥\nCoconut Bliss, coco y praliné.\n\n#Biogreen #Verano #BodySplash"},
      {archivo: "fotos/posteos/lineas/verano-post-solar.jpg", formato: "feed", texto: "Post-solar 🌞\nEmulsiones corporales Lavanda y Enebro: nutren, alivian y revitalizan.\n\n#Biogreen #Verano #BoticaNatural"},
      {archivo: "fotos/posteos/lineas/verano-energia.jpg", formato: "feed", texto: "Te pone en acción y aleja la pereza 🍊\nEsencia de Armonización Energía.\n\n#Biogreen #Verano #EsenciasDeArmonización"},
      {archivo: "fotos/posteos/lineas/verano-tea-tree.jpg", formato: "feed", texto: "Tea Tree y Óleo 35+ 🌿\nPlus de energía cítrica y alivio para el malestar general, también en vacaciones.\n\n#Biogreen #Verano #AceitesEsenciales"}
    ]},
    {nombre: "Línea Esenciales", posteos: [
      {archivo: "fotos/posteos/lineas/esenciales-mango-anana.jpg", formato: "historia", texto: "Mango & Ananá 🥭🍍\nUn aroma que llena tu hogar de sol, frescura y buena energía.\n\nPedímelo por mensaje 💚\n\n#Biogreen #LíneaEsenciales #AromasParaTuHogar"},
      {archivo: "fotos/posteos/lineas/esenciales-nardos-magnolias.jpg", formato: "feed", texto: "Nardos & Magnolias 🌸\nUna fragancia floral, delicada y envolvente para perfumar tus espacios con la frescura de la temporada.\n\n#Biogreen #LíneaEsenciales #AromasParaTuHogar"},
      {archivo: "fotos/posteos/lineas/esenciales-te-verde-cedron.jpg", formato: "historia", texto: "Té Verde & Cedrón 🍃\nUn ligero soplo cítrico entre frescas hojas verdes. Ideal para renovar cualquier ambiente.\n\n#Biogreen #LíneaEsenciales #AromasParaTuHogar"},
      {archivo: "fotos/posteos/lineas/esenciales-verbena-petitgrain.jpg", formato: "historia", texto: "Verbena & Petitgrain 🌿\nUna combinación cítrica y verde que despierta tus espacios.\n\n#Biogreen #LíneaEsenciales #AromasParaTuHogar"},
      {archivo: "fotos/posteos/lineas/esenciales-praline-rosa-china.jpg", formato: "historia", texto: "Praliné & Rosa China 🌺\nEl equilibrio perfecto entre dulzura y flores.\n\n#Biogreen #LíneaEsenciales #AromasParaTuHogar"},
      {archivo: "fotos/posteos/lineas/esenciales-asarina.jpg", formato: "historia", texto: "Asarina 🤍\nUn delicado bouquet de flores blancas: azahares y enredaderas fragantes en un aroma floral y luminoso.\n\n#Biogreen #LíneaEsenciales #AromasParaTuHogar"},
      {archivo: "fotos/posteos/lineas/esenciales-gatillos-reutilizables.jpg", formato: "feed", texto: "¡Nuestros gatillos son reutilizables! ♻️\nUn pequeño detalle que hace que uses menos plástico: comprás el repuesto y listo.\n\n#Biogreen #LíneaEsenciales #ConsumoConsciente #EmpresaB"}
    ]},
    {nombre: "Botica Natural", posteos: [
      {archivo: "fotos/posteos/lineas/botica-emulsion-enebro.jpg", formato: "historia", texto: "Emulsión Corporal Enebro 💪\nAyuda a preparar los músculos antes de la actividad física y alivia las tensiones después del ejercicio.\n\n#Biogreen #BoticaNatural #Bienestar"},
      {archivo: "fotos/posteos/lineas/botica-enebro-circulacion.jpg", formato: "historia", texto: "Emulsión Corporal Enebro 🌿\nAlivia, nutre y revitaliza al instante. Rica en vitaminas, antioxidantes y minerales.\n\n#Biogreen #BoticaNatural #Bienestar"},
      {archivo: "fotos/posteos/lineas/botica-enebro-musculos.jpg", formato: "historia", texto: "Emulsión Corporal Enebro 🌿\nCalienta los músculos y es ideal para contracturas, rigidez y cansancio muscular.\n\n#Biogreen #BoticaNatural #Bienestar"},
      {archivo: "fotos/posteos/lineas/botica-biofeet.jpg", formato: "feed", texto: "Spray desodorante Biofeet 👣\nFrescura, confort y cuidado para acompañar tus pies todos los días.\n\n#Biogreen #BoticaNatural #Biofeet"},
      {archivo: "fotos/posteos/lineas/botica-biofeet-rutina.jpg", formato: "feed", texto: "¿En qué momento del día sumarías Biofeet a tu rutina? 👣\nContame en los comentarios 👇\n\n#Biogreen #BoticaNatural #Biofeet"},
      {archivo: "fotos/posteos/lineas/botica-biofree-repelente.jpg", formato: "feed", texto: "Repelente Biofree 🦟\nProtección natural contra insectos para disfrutar más del aire libre.\n\n#Biogreen #BoticaNatural #Biofree"},
      {archivo: "fotos/posteos/lineas/botica-biofree-aire-libre.jpg", formato: "historia", texto: "Biofree, el repelente natural que te acompaña al aire libre 🌳🦟\n\n#Biogreen #BoticaNatural #Biofree"},
      {archivo: "fotos/posteos/lineas/botica-roll-on-claridad.jpg", formato: "historia", texto: "Roll-on con aceite puro de jojoba ✨\nUsalo en muñecas, sienes y nuca: ayuda a mejorar la concentración.\n\n#Biogreen #AceitesEsenciales #Bienestar"},
      {archivo: "fotos/posteos/lineas/botica-oleo-35.jpg", formato: "historia", texto: "Óleo 35+ 🌿\nMás de 35 aceites esenciales puros. Aplicalo en sienes, muñecas o detrás de las orejas.\n\n#Biogreen #AceitesEsenciales #Bienestar"}
    ]},
    {nombre: "Fragancias BE", posteos: [
      {archivo: "fotos/posteos/lineas/be-the-scent-elixir.jpg", formato: "historia", texto: "be The Scent Elixir 🖤\nPimienta rosa, flor de belladona y ámbar gris: una creación magnética, elegante y especiada.\n\n#BeByBiogreen #Perfumes #EauDeParfum"},
      {archivo: "fotos/posteos/lineas/be-al-noble-wazeer.jpg", formato: "feed", texto: "be inspirado en Al Noble Wazeer ✨\nEau de Parfum by Biogreen.\n\n#BeByBiogreen #Perfumes #EauDeParfum"},
      {archivo: "fotos/posteos/lineas/be-pitaya.jpg", formato: "historia", texto: "be by Biogreen 💗\nFragancias que dejan huella.\n\n#BeByBiogreen #Perfumes #EauDeParfum"},
      {archivo: "fotos/posteos/lineas/be-la-bomba.jpg", formato: "historia", texto: "be inspirado en La Bomba 🌸\nFuerte, fabulosa y explosiva: una fragancia oriental floral para dejar huella.\n\n#BeByBiogreen #Perfumes #EauDeParfum"},
      {archivo: "fotos/posteos/lineas/be-perfumes.jpg", formato: "feed", texto: "Perfumes be ✨\nDistintas opciones y perfiles olfativos inspirados en los best sellers de la perfumería internacional.\n\n#BeByBiogreen #Perfumes #EauDeParfum"}
    ]},
    {nombre: "Fragancias Inspira", posteos: [
      {archivo: "fotos/posteos/lineas/inspira-creo.jpg", formato: "historia", texto: "Un perfume no es solo una combinación de notas 🤍\nDetrás de cada fragancia hay una búsqueda: traducir recuerdos, emociones e ideas en aroma.\n\nInspira Creo · Eau de Parfum\n\n#InspiraByBiogreen #Perfumes"},
      {archivo: "fotos/posteos/lineas/inspira-creo-citrico.jpg", formato: "feed", texto: "Inspira Creo 🍋\nCítrica y sin género. Un perfume para todos los días.\n\n#InspiraByBiogreen #Perfumes"},
      {archivo: "fotos/posteos/lineas/inspira-descubro.jpg", formato: "historia", texto: "El pistacho también se lleva en la piel 💚\nPistacho + sal marina + sándalo. Cremoso, sofisticado y absolutamente adictivo.\n\nInspira Descubro · Eau de Parfum\n\n#InspiraByBiogreen #Perfumes"},
      {archivo: "fotos/posteos/lineas/inspira-descubro-caracter.jpg", formato: "historia", texto: "Si te gusta que tu perfume se note, pero sin invadir… Descubro es para vos ✨\n\n#InspiraByBiogreen #Perfumes"}
    ]},
    {nombre: "Alma Botánica", posteos: [
      {archivo: "fotos/posteos/lineas/alma-aroma-ideal.jpg", formato: "historia", texto: "Encontrá tu aroma ideal 🌿\nDescubrí las fragancias de Alma Botánica y elegí la indicada para cada espacio de tu hogar.\n\n#Biogreen #AlmaBotánica #AromasParaTuHogar"},
      {archivo: "fotos/posteos/lineas/alma-jazmin-habitacion.jpg", formato: "historia", texto: "Tu habitación puede sentirse como un jazmín en primavera 🤍\nDifusor de aromas Jazmín del Cabo.\n\n#Biogreen #AlmaBotánica #AromasParaTuHogar"},
      {archivo: "fotos/posteos/lineas/alma-lemongras.jpg", formato: "historia", texto: "Perfumá tus espacios con Alma Botánica 🌿\nDifusor de aromas Lemongras.\n\n#Biogreen #AlmaBotánica #AromasParaTuHogar"},
      {archivo: "fotos/posteos/lineas/alma-problema-solucion.jpg", formato: "historia", texto: "¿Espacios sin personalidad o ambientes que necesitan renovarse? 🤔\nUn difusor de Alma Botánica perfuma al instante y le da otra energía a tu casa.\n\n#Biogreen #AlmaBotánica #AromasParaTuHogar"},
      {archivo: "fotos/posteos/lineas/alma-jazmin-del-cabo.jpg", formato: "feed", texto: "Jazmín del Cabo 🌼\nUna fragancia floral, delicada y envolvente para transformar tus espacios.\n\n#Biogreen #AlmaBotánica #AromasParaTuHogar"},
      {archivo: "fotos/posteos/lineas/alma-jazmin-sonrisa.jpg", formato: "feed", texto: "Jazmín del Cabo, de Alma Botánica 🤍\nEl aroma que hace sentir a tu casa como un abrazo.\n\n#Biogreen #AlmaBotánica #AromasParaTuHogar"}
    ]},
    {nombre: "Armonía Textil", posteos: [
      {archivo: "fotos/posteos/lineas/textil-organza-compostable.jpg", formato: "historia", texto: "Un producto que cuida el planeta 🌍\nEstuche compostable en 180 días e impreso con tintas vegetales.\n\nPiedras Aromáticas Organza · Armonía Textil\n\n#Biogreen #ArmoníaTextil #ConsumoConsciente"},
      {archivo: "fotos/posteos/lineas/textil-seda-piedras.jpg", formato: "feed", texto: "¿Sabías que nuestras piedras aromáticas son compostables? 🌱\nSe convierten en abono a los 180 días. Y perfuman delicadamente tus cajones.\n\n#Biogreen #ArmoníaTextil #ConsumoConsciente"},
      {archivo: "fotos/posteos/lineas/textil-seda.jpg", formato: "historia", texto: "Seda, de Armonía Textil 🤍\nAromatizante textil para tus prendas y tu cama.\n\n#Biogreen #ArmoníaTextil"},
      {archivo: "fotos/posteos/lineas/textil-seda-aroma.jpg", formato: "historia", texto: "Un aroma que combina flores rosadas con una estela de flores blancas 🌸\nSuave y reconfortante en tus textiles.\n\nSeda · Armonía Textil\n\n#Biogreen #ArmoníaTextil"},
      {archivo: "fotos/posteos/lineas/textil-seda-prendas.jpg", formato: "historia", texto: "Hacé que tus prendas y textiles se sientan suaves y perfumados ✨\nDescubrí Seda de Armonía Textil.\n\n#Biogreen #ArmoníaTextil"}
    ]},
    {nombre: "Agua de Ropa", posteos: [
      {archivo: "fotos/posteos/lineas/ropa-abrazo-de-suavidad.jpg", formato: "feed", texto: "Abrazo de Suavidad 🤍\nUn aroma floral, envolvente y reconfortante para todos tus textiles.\n\nAgua para Ropa · 500 ml\n\n#Biogreen #AguaParaRopa"},
      {archivo: "fotos/posteos/lineas/ropa-prenda-perfumada.jpg", formato: "historia", texto: "Hay aromas que hacen que ponerse una prenda recién perfumada se sienta todavía mejor 👕✨\n\n#Biogreen #AguaParaRopa"},
      {archivo: "fotos/posteos/lineas/ropa-que-buscas.jpg", formato: "historia", texto: "Abrazo de Suavidad es floral, envolvente y reconfortante.\nPero queremos saber… ¿qué buscás cuando elegís una fragancia para tu ropa? 👇\n\n#Biogreen #AguaParaRopa"},
      {archivo: "fotos/posteos/lineas/ropa-extra-de-aroma.jpg", formato: "historia", texto: "Hay prendas que piden un extra de aroma 👗\n¿En cuál usarías Abrazo de Suavidad?\n\n#Biogreen #AguaParaRopa"}
    ]},
    {nombre: "Línea Premium", posteos: [
      {archivo: "fotos/posteos/lineas/premium-alerces.jpg", formato: "feed", texto: "Alerces 🌲\nUn bosque patagónico: notas frescas con el espíritu del pino y los legendarios alerces.\n\n#Biogreen #LíneaPremium #AromasDelMundo"},
      {archivo: "fotos/posteos/lineas/premium-andalucia.jpg", formato: "feed", texto: "Andalucía 🍊\nUn patio de naranjos: un aroma deliciosamente cítrico que evoca la alegría y el arte del sur español.\n\n#Biogreen #LíneaPremium #AromasDelMundo"},
      {archivo: "fotos/posteos/lineas/premium-indonesia.jpg", formato: "feed", texto: "Indonesia 🌾\nCampos de vetiver: una fragancia fresca y sofisticada.\n\n#Biogreen #LíneaPremium #AromasDelMundo"},
      {archivo: "fotos/posteos/lineas/premium-ipanema.jpg", formato: "feed", texto: "Ipanema 🌴\nLa frescura tropical de Brasil en tu casa.\n\n#Biogreen #LíneaPremium #AromasDelMundo"},
      {archivo: "fotos/posteos/lineas/premium-parisina.jpg", formato: "feed", texto: "Parisina 🗼\nLa sofisticación de París: romántica y bohemia, una fragancia que inspira al amor y la libertad.\n\n#Biogreen #LíneaPremium #AromasDelMundo"},
      {archivo: "fotos/posteos/lineas/premium-serrana.jpg", formato: "feed", texto: "Serrana ⛰️\nUn sereno remanso natural: hierbas aromáticas y maderas desde un rincón en la sierra.\n\n#Biogreen #LíneaPremium #AromasDelMundo"},
      {archivo: "fotos/posteos/lineas/premium-toscana.jpg", formato: "feed", texto: "Toscana 🍇\nUn viaje irresistible: la brisa perfumada de la campiña italiana con hojas de grosella negra.\n\n#Biogreen #LíneaPremium #AromasDelMundo"}
    ]},
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
    {nombre: "Body Splash", posteos: [
      {archivo: "fotos/posteos/lineas/splash-primavera.jpg", formato: "feed", texto: "Body Splash 💗\nFresco, liviano e ideal para perfumarte durante el día y llevarlo siempre con vos.\n\n#Biogreen #BodySplash"},
      {archivo: "fotos/posteos/lineas/splash-best-celebration.jpg", formato: "historia", texto: "Best Celebration 🍐\nCon notas de pera y vainilla: una fragancia dulce, sensual y femenina.\n\n#Biogreen #BodySplash"},
      {archivo: "fotos/posteos/lineas/splash-en-tu-bolso.jpg", formato: "historia", texto: "¡Que no falten en tu bolso! 👜\nIdeales para usar todos los días y para regalar.\n\n#Biogreen #BodySplash"},
      {archivo: "fotos/posteos/lineas/splash-gym.jpg", formato: "historia", texto: "¡Tu rutina no termina en el gym! 🏋️‍♀️\nSumá un body splash para que un aroma dulce y fresco te acompañe todo el día.\n\nCoconut Bliss · Coco & Praliné\n\n#Biogreen #BodySplash"}
    ]},
    {nombre: "Cuidado de la piel ✨", posteos: [
      {archivo: "fotos/posteos/lineas/piel-serum-antioxidante.jpg", formato: "historia", texto: "Protección antioxidante ✨\nSerum Antioxidante Dermaelia: protege y renueva tu piel.\n\n#Biogreen #Dermaelia #Skincare"},
      {archivo: "fotos/posteos/lineas/piel-serum-gotero.jpg", formato: "historia", texto: "Tu piel también merece un momento para vos 💧\nConseguí Dermaelia en nuestro catálogo. Escribime y te cuento.\n\n#Biogreen #Dermaelia #Skincare"},
      {archivo: "fotos/posteos/lineas/piel-rutina-portada.jpg", formato: "feed", texto: "Tu rutina de skincare en 3 pasos ✨\nLimpieza, hidratación y tratamiento con Dermaelia.\n\n#Biogreen #Dermaelia #Skincare"},
      {archivo: "fotos/posteos/lineas/piel-paso-1-limpieza.jpg", formato: "feed", texto: "Paso 1: Limpieza 🫧\nDesmaquillante bifásico, emulsión de limpieza, agua micelar o gel sin sulfatos.\n\n#Biogreen #Dermaelia #Skincare"},
      {archivo: "fotos/posteos/lineas/piel-paso-2-hidratacion.jpg", formato: "feed", texto: "Paso 2: Hidratación 💧\nSérum & Contorno de Ojos con ácido hialurónico.\n\n#Biogreen #Dermaelia #Skincare"},
      {archivo: "fotos/posteos/lineas/piel-paso-3-tratamiento.jpg", formato: "feed", texto: "Paso 3: Tratamiento 🌙\nHidratantes de día con FPS 25 y de noche, según tu tipo de piel.\n\n#Biogreen #Dermaelia #Skincare"},
      {archivo: "fotos/posteos/lineas/piel-desmaquillante-bifasico.jpg", formato: "feed", texto: "Desmaquillante Bifásico Dermaelia 💦\nRemueve eficazmente el maquillaje de ojos, labios y rostro, con aceite de almendras dulces y ácido hialurónico.\n\n#Biogreen #Dermaelia #Skincare"},
      {archivo: "fotos/posteos/lineas/piel-desmaquillante-fases.jpg", formato: "feed", texto: "Dos fases, un solo gesto ✨\nLa fase oleosa remueve el maquillaje y la acuosa limpia, hidrata y refresca. Agitá antes de usar.\n\n#Biogreen #Dermaelia #Skincare"}
    ]},
    {nombre: "Nuestra marca 🌿", posteos: [
      {archivo: "fotos/posteos/lineas/marca-pequenas-decisiones.jpg", formato: "feed", texto: "En lo que usamos, en lo que hacemos y en el impacto que generamos cada día 🌿\nSon las pequeñas decisiones las que hablan de nosotros y del mundo que queremos construir.\n\n#Biogreen #ConsumoConsciente #EmpresaB"},
      {archivo: "fotos/posteos/lineas/marca-empresa-b.jpg", formato: "historia", texto: "Recertificamos como Empresa B 💚\nReafirmamos nuestro compromiso con las personas y el planeta.\n\n#Biogreen #EmpresaB"},
      {archivo: "fotos/posteos/lineas/marca-volvimos-a-hacerlo.jpg", formato: "historia", texto: "Volvimos a hacerlo: ¡recertificamos como Empresa B! 💚\n\n#Biogreen #EmpresaB"},
      {archivo: "fotos/posteos/lineas/marca-certificada.jpg", formato: "historia", texto: "Somos una Empresa B Certificada 🌍\nCreemos en cuidar el planeta y a las personas en cada producto.\n\n#Biogreen #EmpresaB #Sustentabilidad"},
      {archivo: "fotos/posteos/lineas/marca-huella-de-carbono.jpg", formato: "historia", texto: "¿Sabías que medimos nuestra huella de carbono? 🌱\nCada año analizamos nuestras emisiones para reducirlas.\n\n#Biogreen #EmpresaB #Sustentabilidad"},
      {archivo: "fotos/posteos/lineas/marca-co2.jpg", formato: "historia", texto: "Cuidar el clima también es cuidarnos 🌿\n\n#Biogreen #EmpresaB #Sustentabilidad"}
    ]}
  ]
};
