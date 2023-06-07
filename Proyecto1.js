//Primer proyecto
let usuario = "bucleAdmin";
let contraseña = "cursojs";
let prompUsu;
let prompContra;

prompUsu = prompt("Ingresa el nombre de usuario");
prompContra = prompt("Ingresa la contraseña");

if (usuario == prompUsu && contraseña == prompContra) {
    alert("El bucle va a comenzar");

    for(i=10; i >= -19; i--){
        if (i == 0) {
            continue;
        }

        document.write("El valor del bucle es: " + i + "<br>");

        if (i == -10) {
            break;
        }
    }

    document.write("El bucle ha terminado");
} else {
    alert("El usuario y/o contraseña son incorrectos");
}