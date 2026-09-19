import promptSync from 'prompt-sync';  
const prompt=promptSync();

const bajadaBandera = 800;
const costoPorKM = 350;
const costoPorMinuto = 80;
const recargoPeajeDistancia = 1500;
const distanciaLimite = 20;


const distanciaKm = parseFloat(prompt("Ingrese la distancia del viaje en kilómetros: "));
const tiempoMinutos = parseFloat(prompt("Ingrese el tiempo estimado del viaje en minutos: "));
const nivelDemanda = prompt("Ingrese el nivel de demanda (\"baja\", \"media\", \"alta\"): ");


let multiplicadorDemanda;

switch (nivelDemanda) {
  case "baja":
    multiplicadorDemanda = 1.0;
    break;
  case "media":
    multiplicadorDemanda = 1.3;
    break;
  case "alta":
    multiplicadorDemanda = 1.8;
    break;
  default:
    multiplicadorDemanda = 1.0;
    console.log("Nivel de demanda no reconocido. Se aplicará el factor por defecto (1.0).");
}


const costoDistancia = distanciaKm * costoPorKM;
const costoTiempo = tiempoMinutos * costoPorMinuto;
const subtotalBase =bajadaBandera + costoDistancia + costoTiempo;


let costoTotal = subtotalBase * multiplicadorDemanda;


if (distanciaKm > distanciaLimite) {
  costoTotal += recargoPeajeDistancia;
}


console.log("El costo estimado total del viaje es: $ ARS"+costoTotal);