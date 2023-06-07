//Eliminar y almacenar propiedades y métodos de los objetos

//Eliminar propiedades y métodos de los objetos

//Objeto
let usuario = {
	// Propiedades.
	nombre_completo: ['Enrique', 'Barros', 'Fernández'],
	edad: 30,
	telefono: '0467489304',
	pais_residencia: 'Australia',
	idiomas: ['Español', 'Catalán', 'Inglés', 'Portugués', 'Italiano'],

	// Métodos.
	saludar: function() {
		alert('Hola, ' + this.nombre_completo[0] + '.');
	}
};

//Delete nos permite borrar las propiedades y métodos

delete usuario.idiomas;
delete usuario.saludar;

console.log(usuario);

//Almacenar valores de las propiedades en variables
let edad_usuario = usuario.edad;

if (usuario.edad !=30) {
    console.log('Se ha modificado la edad de ' + usuario.nombre_completo[0] + '.');
	console.log('El nuevo valor de edad es ahora ' + usuario.edad + '.');
	console.log('El valor de edad anterior era ' + edad_usuario + '.');
}

//Ejercicio
//Elimina la posición de un array
delete usuario.nombre_completo[1];