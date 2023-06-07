let mostrado = false;
//El elemento con id "spoiler" queda oculto por defecto
document.querySelector(".spoiler").style.display = "none";

//Si se llama a esta función, se muestra el elemento con id spoiler
function muestraSpoiler(){
    if (mostrado == true) {
        document.querySelector(".spoiler").style.display = "none";
    }else{
        mostrado = true;
        document.querySelector(".spoiler").style.display = "block";
    }
    
}