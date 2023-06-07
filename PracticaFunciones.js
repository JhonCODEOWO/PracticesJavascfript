//Funciones
//Para definir o expresar una funcion se hace con la palabra function desoues de darle un nombre con la nomenclatura y entre sus paréntesis se pueden dar parámetros separados por comas.

//Ejemplo
function suma (numero1, numero2){
    return numero1 + numero2;
}

let guardarSuma = suma(10, 10);
document.write("El valor de la suma es: " + guardarSuma);

function numAlCuadrado(num1) {
    return num1 * num1;
}

let guardar = numAlCuadrado(5);
document.write("El valor de la exponenciación es: " + guardar);