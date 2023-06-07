//Método slice: permite devolver un string a partir de un fragmento de otro

//Ejemplo
let string = "Hola soy un string";

let fragmento = string.slice(4); //uso de slice con un parámetro

console.log(fragmento); //Devuelve el string sin los primeros 4 carácteres

let fragmento2 = string.slice(4, 21); //El segundo árámetro permite dar un rango de caracteres

//Igualmente se pueden usar posiciones negativas con slice()

let fragmento3 = string.slice(-4);
console.log(fragmento3); //Ahora devuelve una cadena que empieza desde la derecha a izquierda

//Contar el máximo de caracteres con slice

let entrada = prompt("Escribe un nombre (Se permiten únicamente 10 caracteres)");

let fragmento4 = entrada.slice(0,10);

if (fragmento4.length >= entrada.length) {
    alert("Hola " + fragmento4 + ".");
}else{
    alert("Has escrito más de los caracteres permitidos");
}