import promptSync from 'prompt-sync';  
const prompt=promptSync();
let ingresos=parseInt(prompt("Ingrese los ingresos brutos anuales: "));
let superficie=parseFloat(prompt("Ingrese la superficie en m2: "));

if(ingresos<= 6000000 && superficie <=30){
    alert("Categoria=Categoria A");
}else if(ingresos<=12000000 && superficie<=45){
    alert("Categoria B");
}else if(ingresos <=18000000 && superficie<=85){
    alert("Categoria C");
}else{
    alert("Regimen General");
}