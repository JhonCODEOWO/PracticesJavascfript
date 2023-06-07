//Creamos variables con un valor
let texto1 = "Esto es Programación Fácil.";
let texto2 = " Estás en el curso de";
let texto3 = " JavaScript.";
//Se concatenan con la operación de suma
let textoCompleto = texto1 + texto2 + texto3;

console.log(textoCompleto);

//Es posible concatenar texto contenido en un array
let datosUsuario = ["Jonathan", "Juarez", "Valera"];
let guardarConcat = datosUsuario[0] + " " + datosUsuario[1] + " " + datosUsuario[2] + "<br>";

document.write(guardarConcat);

let frase = ["posiciones", "se cuentan", "Las", "array", "cero.", "a partir", "del"];
let concatenarFrase = frase[2] + " " + frase[0] + " " + frase[6] + " " + frase[3] + " " +frase[1] + " " + frase[5] + " " + frase[6] + " " + frase[4];
document.write(concatenarFrase);