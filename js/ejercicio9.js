
const respiracion = prompt("¿Tiene dificultad para respirar? (si/no): ");
const dolor = parseInt(prompt("Nivel de dolor (1 al 10): "));
const presion = parseFloat(prompt("Presión arterial sistólica (mm Hg): "));


if (respiracion === "si" || presion > 180) {
  alert("Triaje: ROJO (Atención Inmediata)Tiempo máximo de espera: 0 minutos");
} else if (dolor >= 7 || (presion >= 140 && presion <= 180)) {
  alert("Triaje: AMARILLO (Urgencia Media)Tiempo máximo de espera: 30 a 60 minutos");
} else {
  alert("Triaje: VERDE (Consulta Baja Prioridad)Tiempo máximo de espera: hasta 120 minutos");
}