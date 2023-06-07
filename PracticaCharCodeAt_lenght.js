//Uso de string charCodeAt y lenght

//Método charCodeAt()

//El método charCodeAt() es parecido al método charAt() que vimos en el capítulo 9 de este curso. Este indica como argumento la posición de un caracter como el método charAt(), solo que en lugar de devolvernos el propio caracter, nos devuelve el valor Unicode.

//Ejemplo
let sitioWeb = "www.programacionfacil.org";

console.log(sitioWeb.charCodeAt(4));
console.log(sitioWeb.charCodeAt(3));
console.log(sitioWeb.charCodeAt(10));

//Nos devuelve un valor de 112 para la letra "p" en minúsculas, que es el valor Unicode correspondiente. El número 46 para el "." y el 109 para la letra "m".

//Cómo acceder a la última posición de un string en javascript

//Lenght nos sirve para obtener el valor total de dígitos de un string si queremos obtener el último dígito habra que apoyarnos de charCodeAt()

let sitioWeb2 = "www.programacionfacil.org";

console.log(sitioWeb.charCodeAt(sitioWeb.length - 1));