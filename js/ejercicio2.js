import promptSync from 'prompt-sync';  
const prompt=promptSync();

const tarifaTercero = 45000;
const tarifaTerceroCompleto = 70000;
const tarifaTodoRiesgo = 110000;

let edadConductor = parseInt(prompt("Ingrese la edad: "));
let tipoCobertura = prompt("Ingrese la cobertura (terceros, terceroscompleto, todoriesgo): ");
let accidentes = parseInt(prompt("Ingrese la cantidad de accidentes en el último año: "));

let tarifaBase = 0;

if (tipoCobertura === "terceros") {
    tarifaBase = tarifaTercero;
} else if (tipoCobertura === "terceroscompleto") {
    tarifaBase = tarifaTerceroCompleto;
} else if (tipoCobertura === "todoriesgo") {
    tarifaBase = tarifaTodoRiesgo;
} else {
    console.log("Tipo de cobertura inválido.");
}

if (tarifaBase > 0) {
    if (accidentes >= 3 && tipoCobertura === "todo_riesgo") {
        console.log("Contratación denegada");
    } else {
        let precioFinal = tarifaBase;

         if (edadConductor < 25) {
            precioFinal += tarifaBase * 0.20;
        }

        if (accidentes === 0) {
            precioFinal -= tarifaBase * 0.10; 
        } else if (accidentes >= 3) {
            precioFinal += tarifaBase * 0.30; 
        }

        console.log("El valor final es: $" + precioFinal + " ARS");
    }
}