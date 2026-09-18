const montoCarrito = parseFloat(prompt("Monto del carrito: "));
const categoria = prompt("Categoría (Bronce, Plata, Oro): ");
const cupon = prompt("Cupón (DESC10, SUPER20 o ninguno): ");


let descuentoMembresia = 0;
if (categoria === "plata") {
  descuentoMembresia = 0.05;
} else if (categoria === "oro") {
  descuentoMembresia = 0.15;
}


let descuentoCupon = 0;
switch (cupon) {
  case "DESC10":
    descuentoCupon = 0.10;
    break;
  case "SUPER20":
    if (montoCarrito > 50000) {
      descuentoCupon = 0.20;
    }
    break;
}
const totalDescuento = montoCarrito * (descuentoMembresia + descuentoCupon);
const subtotal = montoCarrito - totalDescuento;

let envio = 4500;
if (subtotal > 100000) {
  envio = 0;
}

const totalPagar = subtotal + envio;

// Muestra de resultados
console.log("Descuento aplicado: "+totalDescuento);
console.log("Costo de envío: "+envio);
console.log("Total a pagar:"+totalPagar);