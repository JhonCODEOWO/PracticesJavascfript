//Introduccion a las fechas

//Objeto date: Nos permite trabajar con fechas

//Instanciar objetos de este tipo
let ahora = new Date();

//Fechas personalizadas.
let fecha = new Date("2022-09-29");
console.log(fecha);

//Argumentos en la fecha

//Ejemplo de año y mes
let fecha2 = new Date(2022, 11); //Nota: javascript cuenta los meses de 0 a 11
console.log(fecha2);

//Ejemolo con año mes y dia
let fecha3 = new Date(2022, 11, 25);
console.log(fecha3);

//Ejemplo con año mes dia y hora
let fecha4 = new Date(2022,11,25,19);
console.log(fecha4);

//Ejemolo con año mes dia hora y minutos
let fecha5 = new Date(2022,11,25,19,37);
console.log(fecha5);

//Ejemplo con año mes dia hora minutos y segundos
let fecha6 = new Date(2022,11,25,19,37,15);
console.log(fecha6);

//Ejercicio
let fecha7 = new Date(1667, 7, 17, 8, 45, 28);
console.log(fecha7);

