/* Números del negocio para la calculadora (de la planilla de cálculo de ganancias).
   Si cambia el valor del punto, alcanza con cambiar precioPublico: el resto se calcula solo.
   factor = la parte del precio de catálogo que paga cada categoría por punto. */
const PUNTO = 20999;              // 1 punto = $20.999 a precio de catálogo
const ESENCIAL_240 = 12499;       // Esencial 240 ml a precio de catálogo (el de 500 ml vale 1 punto)
const compra = factor => Math.round(PUNTO * factor * 100) / 100;
window.NEGOCIO = {
  precioPublico: PUNTO,
  diasCiclo: 21,
  distribuidoras: [               // compra = lo que paga ella por cada punto
    {nombre: "Bronce", desde: 5, hasta: 9, descuento: 20, promo: 10, compra: compra(0.80)},
    {nombre: "Plata", desde: 10, hasta: 19, descuento: 30, promo: 20, compra: compra(0.70)},
    {nombre: "Oro", desde: 20, hasta: Infinity, descuento: 30, promo: 20, compra: compra(0.70)}
  ],
  // premios por productividad: según la venta personal del ciclo (distribuidoras y líderes)
  premiosVigencia: "Desafío de venta personal · ciclos 16, 17 y 01",
  premios: [
    {desde: 20, hasta: 29.99, premio: "1 Capullos de Lino 500 ml", valor: PUNTO},
    {desde: 30, hasta: 39.99, premio: "1 Capullos de Lino 500 ml + 1 Esencial 240 ml", valor: PUNTO + ESENCIAL_240},
    {desde: 40, hasta: 59.99, premio: "1 Capullos de Lino 500 ml + 1 Esencial 500 ml", valor: PUNTO * 2},
    {desde: 60, hasta: Infinity, premio: "1 Capullos de Lino 500 ml + 1 Esencial 500 ml + 1 Esencial 240 ml", valor: PUNTO * 2 + ESENCIAL_240}
  ],
  lideres: [                       // por puntos totales del ciclo (tu venta + la de tu equipo)
    // bti = comisión cuando alguien de tu equipo compra directo a Biogreen, sobre lo que paga ella (tabla BTI)
    {nombre: "Líder Plata", desde: 50, hasta: 99, compra: compra(0.644), bti: {bronce: 10, plataOro: 5, liderPlata: 0}, extra: "Si sos directa de la empresa: bono de $60.000 por 3 ciclos consecutivos."},
    {nombre: "Líder Oro", desde: 100, hasta: 249, compra: compra(0.616), bti: {bronce: 14, plataOro: 9, liderPlata: 3}, extra: "Si sos directa de la empresa: bono de $60.000 por 3 ciclos consecutivos."},
    {nombre: "Coordinadora Oro", desde: 250, hasta: 499, compra: compra(0.581), bti: {bronce: 19, plataOro: 14, liderPlata: 7}},
    {nombre: "Directora Plata", desde: 500, hasta: 749, compra: compra(0.525), bti: {bronce: 25, plataOro: 20, liderPlata: 14}},
    {nombre: "Directora Oro", desde: 750, hasta: 1499, compra: compra(0.504), bti: {bronce: 27, plataOro: 22, liderPlata: 17}},
    {nombre: "Directora Platino", desde: 1500, hasta: Infinity, compra: compra(0.49), bti: {bronce: 27, plataOro: 22, liderPlata: 18}}
  ]
};
