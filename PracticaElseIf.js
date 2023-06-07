//Else if
// let edad = prompt("Ingresa tu edad: ");

// if (edad < 0 || edad == 0) {
//     alert("Coloca datos reales pendejo");
// } else if (edad > 0 && edad < 18) {
//     alert("Eres un menor de edad");
// } else if (edad >=18 && edad < 100){
//     alert("Sos mayor de edad");
// } else{
//     alert("A mi no me engañas :v");
// }


//EJEMPLO CON LOS COLORES

let color = prompt("Escribe un color: ");

if (color == "Rojo" || color == "ROJO" || color == "rojo"){
    alert("El color escrito fué: " + color);
} else if (color == "Azul" || color == "AZUL" || color == "azul"){
    alert("El color escrito fué: " + color);
} else if (color == "Amarillo" || color == "AMARILLO" || color == "amarillo"){
    alert("El color escrito fué: " + color);
} else{
    alert("Ese color no es válido");
}