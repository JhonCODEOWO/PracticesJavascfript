//Intrduccion a objetos

//Un objeto es una coleccion de datos relacionados entre sí, formados por variables funciones, propiedades y métodos

//Por tal motivo a las variables que forman parte de un objeto se les llama propiedades y sus funciones son llamadas métodos.

//Ejemplo para declarar un objeto

let objeto = {};

console,console.log(typeof objeto);

//El código anterior nos devolvera "object" pues la variable objeto es del tipo objeto.

//Ejemplo de un objeto con propiedades definidas desde un inicio
let usuario = {
	nombreCompleto: ['Enrique', 'Barros', 'Fernández'],
	edad: 30,
	telefono: '0467489304',
	paisResidencia: 'Australia',
	idiomas: ['Español', 'Catalán', 'Inglés', 'Portugués', 'Italiano'],
};

console.log(usuario);

//Sintaxis de los objetos

// let objeto = {
//     propiedad1: 'valor';
//     propiedad2: 'valor';
// };

//Ejercicio
let vehiculo = {
    marca: 'Renault',
    color: ['Negro', 'Rojo', 'Verde'],
    numeroRuedas: '4',
    numeroPlazas: '10',
    tipo: ['Camion', 'Auto'],
    precio: '399',

    info: function(){
        alert('El vehiculo con marca ' + this.marca + ' de color ' + this.color[0] + ' tiene un costo de ' + this.precio);
    }
};

vehiculo.info();