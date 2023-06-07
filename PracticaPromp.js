//Entrada de datos con prompt
let nombre;

nombre = prompt("Ingresa tú nombre"); //Prompt permite enviar una ventana emergente que además va a permitir ingresar datos dentro de ella

//Si el usuario ingresa texto se almacenará en la variable, en cambio simplementa va a existir ubn vallor null, podemos usar ese valor apra cualquier tipo de cosas, a continuación se muestra un ejemplo

if(nombre != null){
    document.write("No se ha ingresado un nombre en la ventana");
}else{
    document.write("Bienvenido "+ nombre);
}


//Ejemplo solicitando una edad
let edad;
edad = prompt("Ingresa tu edad");

if (edad < 18) {
    document.write("Eres menor de edad");
} else {
    document.write("Eres mayor de edad");
}