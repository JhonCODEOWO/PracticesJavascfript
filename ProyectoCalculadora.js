//Calculadora
let operacion = prompt("Escribe la operación que deseas realizar con minúsculas");
let operacion1;
let operacion2;
let resultado;

function suma (numero1, numero2){
    return numero1 + numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function dividir(numero1, numero2){
    return numero1 / numero2;
}

switch (operacion) {
    case "suma":
        operacion1 = parseInt(prompt("Introduce el primer número"));
        operacion2 = parseInt(prompt("Introduce el segundo número"));
        resultado = suma(operacion1, operacion2);
        console.log(resultado);
        break;

    case "multiplicacion":
        operacion1 = parseInt(prompt("Introduce el primer número"));
        operacion2 = parseInt(prompt("Introduce el segundo número"));
        resultado = multiplicar(operacion1, operacion2);
        console.log(resultado);
        break;
    
    case "division":
        operacion1 = parseInt(prompt("Introduce el primer número"));
        operacion2 = parseInt(prompt("Introduce el segundo número"));
        resultado = dividir(operacion1, operacion2);
        console.log(resultado);
        
    default:
        alert("Esa no es una operación que pueda realizar");
        break;
}