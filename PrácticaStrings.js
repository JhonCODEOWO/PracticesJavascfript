//Uso de string y diferencias de creación.
let texto1 = "Esto es un string"; //Forma convencional
let texto2 = 'Esto es un string';
let texto3 = `Esto es un string`;
let texto4 = new String("Esto es un string"); 
let texto5 = "Esto es un 'string'"; //forma de mostrar string con comillas dentro de comillas
let texto6 = "Esto es un \"string\""; //uso del escape de comillas para mostrar comillas dobles dentro de comillas dobles
let texto7 = "Esto es un string\nEste es un salto de linea";  // \n permite el salto de linea
let texto8 = "Esto es un string <br> Este es un salto de linea";
console.log(texto5);
console.log(texto6);

//Escribir texto desde javascript a html
document.write(texto8);

// El método chartAT() con strings
let texto9 = "Estamos viendo los strings.".charAt(1); //Permite acceder a una posición de la cadena y obtener ese valor
console.log(texto9);

let texto10 = "Estamos viendo los strings"
console.log(texto10.charAt(1)); //Otra manera de obtener el mismo resultado