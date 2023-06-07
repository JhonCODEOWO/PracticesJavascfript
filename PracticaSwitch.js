//Condicional switch

//Ejemplo incial
let estacion = prompt("Escribe una estación en minúsculas: ");

switch (estacion) {
    case "invierno":
        alert("Todo es frío");
        break;

    case "primavera":
        alert("Se colorea el mundo");
        break;

    case "verano":
        alert("Las noches se hacen largas");
        break;

    case "otoño":
        alert("Donde había color ya no queda más");
        break;
        
    default:
        alert("Eso no es una estación");
        break;
}