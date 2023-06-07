//Crear métodos en objetos, usar sus propiedad y ¿que es this?

//Ejemplo de como acceder a las propiedades de un objeto
let usuario = {
	nombre_completo: ['Enrique', 'Barros', 'Fernández'],
	edad: 30,
	telefono: '0467489304',
	pais_residencia: 'Australia',
	idiomas: ['Español', 'Catalán', 'Inglés', 'Portugués', 'Italiano'],
};

console.log(usuario.nombre_completo); //Nos devolverá un array, si se quiere mostrar de manera limpia es necesario hacer un recorrido o bien unicamente acceder a cada posición por corchetes

//Cómo crear un método en un objeto
let usuarioConMetodo = {
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
}

//Para usar el método
usuario.saludar();