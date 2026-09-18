const ingresoMensual = parseFloat(prompt("Ingreso mensual neto: "));
const antiguedad = parseFloat(prompt("Antigüedad laboral en años: "));
const tieneDeudas = prompt("¿Tiene deudas pendientes? (si/no): ");
const montoSolicitado = parseFloat(prompt("Monto del crédito solicitado: "));


const cuotaMensual = (montoSolicitado * 1.30) / 12;


if (tieneDeudas === "si") {
  alert("Solicitud Rechazada. Motivo: Posee deudas pendientes.");
} else if (antiguedad < 1) {
  alert("Solicitud Rechazada. Motivo: La antigüedad laboral debe ser de al menos 1 año.");
} else if (cuotaMensual > ingresoMensual * 0.30) {
  alert("Solicitud Rechazada. Motivo: La cuota supera el 30% de sus ingresos.");
} else {
  alert("¡Solicitud Pre-Aprobada!");
}