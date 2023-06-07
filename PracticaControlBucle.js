//Control de bucles

//Uso de break para salir de un bucle
let i = 1;
while (i<=10) {
    document.write(i);
    i++;
    if (i==7) {
        document.write("Se ha detenido el bucle porque entró en un if con un break");
        break;
    }
}

//Se puede usar continue para omitir alguna parte de un bucle
while(i < 10){
    i++;
    if (i>=5 && i<=7) {
        continue;
    }
    document.write("El valor es: " + i + "<br>");
}

//Ejercicio

let y = 10;

while ( i <= 30) {
    document.write("El valor es: " + i);
    if (i == 20) {
        break;
    }
    i++;
}