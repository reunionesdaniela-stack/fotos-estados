/* Números del negocio para la calculadora (de la planilla de cálculo de ganancias).
   Si cambian los precios, se actualizan acá. Valores por punto, en pesos. */
window.NEGOCIO = {
  precioPublico: 19999,          // 1 punto = $19.999 a precio de catálogo
  diasCiclo: 21,
  distribuidoras: [               // compra = lo que paga ella por cada punto
    {nombre: "Bronce", desde: 5, hasta: 9, descuento: 20, compra: 15999.20},
    {nombre: "Plata", desde: 10, hasta: 19, descuento: 30, compra: 13999.20},
    {nombre: "Oro", desde: 20, hasta: Infinity, descuento: 30, compra: 13999.20, extra: "+ premios por productividad (20, 30, 40 y 60 pts)"}
  ],
  lideres: [                       // por puntos totales del ciclo (tu venta + la de tu equipo)
    {nombre: "Líder Plata", desde: 50, hasta: 99, compra: 12879.36, extra: "Si sos directa de la empresa: bono de $60.000 por 3 ciclos consecutivos."},
    {nombre: "Líder Oro", desde: 100, hasta: 249, compra: 12319.38, extra: "Si sos directa de la empresa: bono de $60.000 por 3 ciclos consecutivos."},
    {nombre: "Coordinadora", desde: 250, hasta: 499, compra: 11619.42},
    {nombre: "Directora Plata", desde: 500, hasta: 749, compra: 10499.40},
    {nombre: "Directora Oro", desde: 750, hasta: Infinity, compra: 10079.50}
  ]
};
