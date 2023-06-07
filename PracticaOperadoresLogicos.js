//Operadores lógicos.

//Comparador and, permite comparar más de una cosa a la vez

let color = "rojo";
let objeto = "mesa";

if(color == "rojo" && objeto == "mesa"){
    alert("se cumplen ambas condiciones");
}

//Operador lógivo or, permite hacer condiciones en las que solo se cumpla una de las dos cpmaraciones, excluyendo a las demás en cuanto se cumpla alguna

let color2 = "rojo";
let objeto2 = "silla";

if (color2 == "rojo" || objeto2 == "mesa") {
	alert("Se cumple la condición.");
}

//Operador lógico NOT, devuelve un valor booleano contrario a lo que esté dentro de los paréntesis de un if, en otra palabras negamos lo que pasa

let color3 = "azul";
let objeto3 = "silla";

if (!(color3 == "rojo" && objeto3 == "mesa")) {
	alert("Se cumple la condición.");
}

//Como se ve en el if debería devolvernos originalmente un valor false puesto que no se cumplen ambas condiciones, sin embargo, al colocarle el not básicamente niega este resultado y devuleve un valor true.

