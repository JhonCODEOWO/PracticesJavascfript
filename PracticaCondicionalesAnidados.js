//Anidación de if
let gameover = false;
let vidas = 3;
let respuestas;

if (vidas == 0) { //Si las vidas llegan a 0 muestra...
    gameover = true;
    alert("Juego terminado");
}

if(gameover == true){ //Si game over es verdadero...
    respuestas = prompt("¿Volver a intentar?");
}

if(respuestas == "Si"){ //Si obtenemosnun si como respuesta...
    vidas = 3;
    gameover = false;
    alert("Buen intento");
}else{
    alert("Hasta la próxima");
}