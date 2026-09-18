let saldo = 250000;

const opcion = prompt("1: Consultar Saldo | 2: Extraer | 3: Depositar | 4: Salir: ");

switch (opcion) {
  case "1":
    alert(`Saldo actual: `,saldo);
    break;

  case "2":
    const extraer = parseFloat(prompt("Monto a extraer: "));
    if (extraer % 1000 !== 0) {
      alert("Error: Debe ser múltiplo de $1.000.");
    } else if (extraer > saldo) {
      alert("Error: Saldo insuficiente.");
    } else {
      saldo = saldo - extraer;
      alert("Retiraste "+extraer,"Nuevo saldo: "+saldo);
    }
    break;

  case "3":
    const depositar = parseFloat(prompt("Monto a depositar: "));
    saldo = saldo + depositar;
    alert("Depositaste: "+depositar,"Nuevo saldo: "+saldo);
    break;

  case "4":
    alert("Gracias por usar el cajero.");
    break;

  default:
    alert("Opción inválida.");
}