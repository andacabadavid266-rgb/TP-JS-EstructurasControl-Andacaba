import promptSync from 'prompt-sync';  
const prompt=promptSync();

let rol = prompt("Ingrese su rol (admin, cliente, editor: )");
let estado = prompt("Ingrese su estado (activa, suspendida: )");
let hora = parseInt(prompt("Ingrese la hora actual (0 a 23)"), 10);

let mensaje = "";

if (estado === "suspendida") {
    mensaje = "Acceso denegado: Cuenta suspendida";
} else if (rol === "admin") {
    mensaje = "Acceso concedido: permiso total";
} else if (rol === "editor") {
    /
    if (hora >= 8 && hora <= 18) {
        mensaje = "Acceso concedido: dentro del horario correspondiente";
    } else {
        mensaje = "Acceso denegado: debe estar dentro del horario (8 a 18hs)";
    }
} else if (rol === "cliente") {
    mensaje = "Acceso permitido: cuenta activa";
} else {
    mensaje = "Rol no autorizado";
}


console.log(mensaje);
