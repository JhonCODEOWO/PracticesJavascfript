// document.body.style.background = "black";
// let parrafo = document.getElementById('parrafo');
// parrafo.style.color  = "white";

//¿Que es window en javascript: window es un objeto global de JavaScript que representa la ventana del navegador. Este objeto nos proporciona métodos para manejarla.

// window.alert("Hola");

//¿Que es BOOM de javascript?

//BOM es el modelo de objetos del navegador (Browser Object Model). Lo que hacemos con el BOM es trabajar con la ventana (window) y con el propio navegador (navigator). Tenemos diversos tipos en el BOM como window, navigator, location, etc. Vamos a probar de manejar el navegador con algo simple. Otra pequeña prueba para que vayas tomando mayor interés en continuar el curso. En la siguiente página html tengo un botón con un evento, onclick, el cual, cuando se presiona hace la llamada a la función que tienes en el código JavaScript.

//Ejemplo de DOM con evento onclik
let ventana;
let ancho;
let alto;

function abreVentana(){
    ancho = window.prompt("Digite el ancho de la ventana");
    alto = window.prompt("Digite el alto");
    ventana = window.open("https://www.programacionfacil.org/cursos/javascript/capitulo-48-dom-bom.html", "", `width=${ancho}, height=${alto}`);
}