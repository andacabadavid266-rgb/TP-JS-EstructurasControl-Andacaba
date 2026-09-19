import promptSync from 'prompt-sync';  
const prompt=promptSync();

let sueldoBruto = parseFloat(prompt("Ingrese el Sueldo Bruto: "));


let jubilacion = sueldoBruto * 0.11;
let obraSocial = sueldoBruto * 0.03;
let ley19032 = sueldoBruto * 0.03;

let totalRetenciones = jubilacion + obraSocial + ley19032;
let sueldoNetoProvisorio = sueldoBruto - totalRetenciones;


let ganancias = 0;

if (sueldoNetoProvisorio > 2000000) {
    ganancias = 120000 + ((sueldoNetoProvisorio - 2000000) * 0.25);
} else if (sueldoNetoProvisorio > 1200000) {
    ganancias = (sueldoNetoProvisorio - 1200000) * 0.15;
}


let sueldoNetoFinal = sueldoNetoProvisorio - ganancias;

console.log("Sueldo Bruto: $" + sueldoBruto);
console.log("Jubilacion : $" + jubilacion);
console.log("Obra Social : $" + obraSocial);
console.log("Ley 19.032 : $" + ley19032);
console.log("Total Descuentos Ley: $" + totalRetenciones);
console.log("Retencion Ganancias: $" + ganancias);
console.log("SUELDO NETO FINAL: $" + sueldoNetoFinal);