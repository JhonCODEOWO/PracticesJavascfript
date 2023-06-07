//Para los tipos numéricos existe solo la variable tipo number que engloba a enteros y float

//Suma en javascript
let number1 = 43.5; //Al colocar el punto es de tipo float automáticamente
let number2 = 50; //Al colocar un numero sin punto es de tipo integer

let resultado = number1 + number2; //Se realiza una suma, aunque igualmente sirve para otros operadores aritméticos
console.log(resultado); //Manda la variable resultado al registro de consola

let operacion = 10 + 15 * 3 / 2 - 80; //Igualmente pueden realizarse varias operadciones seguidas.
console.log(operacion);

let operacionConParentesis = (10 + 15) * 3 / 2 - 80; //Los paréntesis dan prioridad de calcular alguna parte de una operación
console.log(operacionConParentesis);

let operacion3 = 46 + 8 * 2 / (2 + 46);
console.log(operacion3);