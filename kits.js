/* Kits vigentes, en la sección Incorporaciones. Para actualizar: cambiar la vigencia y los kits.
   Cada kit: nombre, codigo, imagen (dentro de fotos/kits), puntos y precio (un solo precio)
   o precios por categoría (DBRO = Bronce, DPLA/DOR = Plata y Oro, LIDP = Líder) con lo que recuperás.
   "trae" es la lista de lo que incluye, por grupos. Un kit con pronto: true muestra «Pronto».
   Un grupo puede tener imagen: una placa que se muestra arriba de sus kits, para compartir. */
window.KITS = {
  vigencia: "Ciclos 2, 3 y 4 o hasta agotar stock",
  grupos: [
    {titulo: "Kit Inicio Perfecto, en 4 pasos", imagen: "fotos/kits/inicio-perfecto-resumen.jpg", kits: [
      {nombre: "Primer paso: Conectar con la esencia", codigo: "X00301", imagen: "fotos/kits/inicio-perfecto-1.jpg", puntos: "4",
       precios: {bronce: "$81.899,10", plataOro: "$72.799,20", lider: "$67.703,26"}, recuperas: "$80.996",
       trae: [
         {grupo: "Para vender", items: ["Aromatizante Capullos de Lino 500 ml", "Aromatizante Té Verde & Cedrón 500 ml", "Aromatizante Rosa Búlgara 330 ml", "Aromatizante Lemongrass 330 ml"]},
         {grupo: "Para hacer probar", items: ["Aromatizantes de 100 ml: Capullos de Lino, Té Verde & Cedrón, Rosa Búlgara y Lemongrass", "Un perfumero de cada fragancia: Asarina, Jengibre, Limón & Rosas, Vainilla & Caramelo, Peonias & Oud, Mango & Ananá, Jazmín del Cabo, Canela de Ceylán, Tangerina, Árbol de Higo y Flore de Cerezo", "Tiras olfativas"]},
         {grupo: "Para arrancar", items: ["Folleto de bienvenida", "Catálogo", "Bolsa ecológica Biogreen"]}
       ], nota: "No incluye gatillos."},
      {nombre: "Segundo paso: Inspirar con tu mejor versión", codigo: "X00302", imagen: "fotos/kits/inicio-perfecto-2.jpg", puntos: "4",
       precios: {bronce: "$73.259,10", plataOro: "$65.119,20", lider: "$60.560,86"}, recuperas: "$71.998",
       trae: [
         {grupo: "Para vender", items: ["be by biogreen inspiración Libre", "be by biogreen inspiración H. Boss Bottled Absolu"]},
         {grupo: "Para hacer probar", items: ["Un plumín de cada fragancia: 212 Vip, Good Girl, Olympea, La Vie Est Belle, Olympea Intense, L'Interdit, My Way, Fame, Libre, Invictus, One Million, Invictus Intense, One, One Million Lucky, Sauvage, Bad Boy, Phantom, Acqua Di Gio Profondo, Y YSL, Siento, Conecto, Vibro y Creo", "Un perfumero de cada fragancia: Algodón, Lino, Seda, Organza, Alerces, Serrana, Parisina y Andalucía", "Estuche para plumines y perfumeros", "Tiras olfativas"]},
         {grupo: "Formación", items: ["Capacitación en perfumería"]}
       ]},
      {nombre: "Tercer paso: Crecer con la experiencia", codigo: "X00303", imagen: "fotos/kits/inicio-perfecto-3.jpg", puntos: "2",
       precios: {bronce: "$30.509,10", plataOro: "$27.119,20", lider: "$25.220,86"}, recuperas: "$53.998",
       trae: [
         {grupo: "Para vender", items: ["Aceite esencial Óleo 35+ 10 ml", "Emulsión corporal Almendras 200 ml"]},
         {grupo: "Para hacer probar", items: ["Aceite esencial Óleo 35+ 10 ml", "Emulsión corporal Almendras 200 ml"]},
         {grupo: "Formación", items: ["Capacitación en aromaterapia"]}
       ]},
      {nombre: "Cuarto paso: Expandir el ser Biogreen", codigo: "X00304", imagen: "fotos/kits/inicio-perfecto-4.jpg", puntos: "2",
       precios: {bronce: "$44.729,10", plataOro: "$39.759,20", lider: "$36.976,06"}, recuperas: "$30.998",
       trae: [
         {grupo: "Para vender", items: ["Limpiador multiuso 300 ml", "Piedras aromáticas Toque de Sol 65 g"]},
         {grupo: "Para hacer probar", items: ["Un perfumero de cada fragancia: Hamsa, Hamsa Flowers, Hamsa Woods, Frescura Matinal, Toque de Sol, Brisa Pura, Lemon Pie, Cookies, Apple Crumble y Crème Brûlée"]},
         {grupo: "Para usar vos", items: ["Muestra de jabón líquido para ropa", "Limpiador multiuso 300 ml", "Piedras aromáticas Frescura Matinal 65 g"]},
         {grupo: "Reconocimiento", items: ["Carta de reconocimiento", "Mochila Biogreen", "Cuaderno Biogreen"]}
       ]}
    ]},
    {titulo: "Kits de incorporación", kits: [
      {nombre: "Kit Incorporación Crece Biogreen", codigo: "45417", imagen: "fotos/kits/crece-biogreen.jpg", puntos: "0,95", precio: "$19.999",
       trae: [{grupo: "Incluye", items: ["Kit Reposición (catálogo y plumín AMO)", "Aromatizante Mango & Ananá 240 ml", "Gatillo transparente", "Tiras olfativas", "Bolsa Biogreen gris"]}]},
      {nombre: "Kit promocional", pronto: true}
    ]},
    {titulo: "Para tener a mano", kits: [
      {nombre: "Kit Reposición", codigo: "X00269", imagen: "fotos/kits/reposicion.jpg", precio: "$5.599",
       trae: [{grupo: "Incluye", items: ["Catálogo", "Plumín AMO"]}]},
      {nombre: "Muestrario Ambientales Argentina", codigo: "X00338", imagen: "fotos/kits/muestrario-ambientales.jpg", puntos: "2,24", precio: "$46.999",
       trae: [{grupo: "Incluye", items: ["Muestrario de tela de ambientales", "Aromatizante Glicinas & Violetas 240 ml con gatillo", "Aromatizante Premium Arabia 330 ml con gatillo", "Pack de 50 tiras olfativas"]}]},
      {nombre: "Muestrario Fragancias Argentina", codigo: "X00340", imagen: "fotos/kits/muestrario-fragancias.jpg", puntos: "3,12", precio: "$65.499",
       trae: [{grupo: "Incluye", items: ["Muestrario de tela de fragancias", "Inspiración Boss The Scent Elixir 60 ml", "Body Splash Coconut Bliss 150 ml", "Pack de 50 tiras olfativas"]}]}
    ]}
  ]
};
