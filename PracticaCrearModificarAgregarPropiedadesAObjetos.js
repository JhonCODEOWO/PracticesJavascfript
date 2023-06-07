//Como añadir y modificar propiedades de los objetos

//Ejemplo de modificación de edad del siguiente objeto

//Objeto
let usuario = {
	nombre_completo: ['Enrique', 'Barros', 'Fernández'],
	edad: 30,
	telefonos : {
		telefono1: '0467489304',
		telefono2: '0446395860'
		},
	pais_residencia: 'Australia',
	idiomas: ['Español', 'Catalán', 'Inglés', 'Portugués', 'Italiano'],
};

//Modificación de una propiedad
usuario.edad = 27;

console.log(usuario.edad);

//Esto nos permite hacer uso de esas propiedades para condicionales, por ejemplo

if (usuario.edad != 30) {
    console.log('Se ha modificado la edad de ' + usuario.nombre_completo[0] + '.');
	console.log('El nuevo valor de edad es ahora ' + usuario.edad + '.');
}

//Agregar propiedades a los objetos
//Se debe de declarar igual que al modificar una propiedad, en cambio, se coloca una propiedad que no exista, si ya existe esta se va a amodificar, en caso contrario se agrega.

usuario.direccion = "933 beer trafficway";


//Ejercicios

//Añadir al objeto usuario un tercer telefono
usuario.telefonos.telefono3 =  "7971153240";

//Modificando el nombre_completo
usuario.nombre_completo[0] = "Jonathan";
usuario.nombre_completo[1] = "Juárez";
usuario.nombre_completo[2] = "Valera";

//O

usuario.nombre_completo = ['Jonathan', 'Juárez', 'Valera'];