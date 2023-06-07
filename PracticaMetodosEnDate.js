//Métodos en date

//Obtener el año de una fecha

let fecha = new Date();
let obtenerAño = fecha.getFullYear();

document.write("El año actual es: " + obtenerAño + "<br>");

//Obtener el mes de una fecha
let obtener_mes = fecha.getMonth();
document.write("El mes actual es: " + obtener_mes + "<br>");

//Obtener día del mes
let obtener_dia = fecha.getDate();
document.write("El día actual es: " + obtener_dia + "<br>");

//Obtener la hora, minutos, segundos y milisegundos
let obtener_hora = fecha.getHours();
document.write("La hora actual es: " + obtener_hora + "<br>");

//Obtener minutos
let obtener_minutos = fecha.getMinutes();
document.write("Minutos actuales: " + obtener_minutos + "<br>");

//Obtener segundos
let obtener_seg = fecha.getSeconds();
document.write("Segundos actuales: " + obtener_seg + "<br>");

//Obtener el día de la semana
let obtener_diaSemana = fecha.getDay();
document.write("Dia de la semana: " + obtener_diaSemana + "<br>");