//Proyecto 3 Dividir string en caracteres y conversor de texto a unicode

//El método split() divide un objeto de tipo string en array realizabdo una división según un patrón proporcionado.

//Pseudocódigo: string.split('patrón', 'número de repeticiones')

//Ejemplo
// let sitioWeb = "www.programacionfacil.org";
// let divide = sitioWeb.split('');
// console.log(divide);

// console.log(divide[0]);

//Limitar el máximo de divisiones de split(), se puede indicar el máximo de divisores que hace split() con un segundo parámetro que es opcional

//Ejemplo
// let cadena = "hola soy una cadena";
// let guardarDivision = cadena.split('', 7);
// console.log(guardarDivision);

//Conversor de texto a unicode
let texto_a_dividir = prompt("Introduce un texto a convertir en unicode");
let divideTexto = texto_a_dividir.split(' ');
console.log(divideTexto);

for(let i = 0; i < divideTexto.length; i++){
    document.write(divideTexto[i] + " ---------> ");
    document.write(divideTexto[i].charCodeAt() + "<br>");
}