//Objetos dentro de objetos

//Ejemplo
let usuario = {
	nombre_completo: ['Enrique', 'Barros', 'Fernández'],
	edad: 30,
	telefonos : { //Indicamosq ue será un objeto dentro de otro objeto
		telefono1: '0467489304',
		telefono2: '0446395860'
		}, //Finaliza ese objeto
	pais_residencia: 'Australia',
	idiomas: ['Español', 'Catalán', 'Inglés', 'Portugués', 'Italiano'],
};

console.log(usuario.telefonos.telefono1); //Accediento con dot notation
console.log(usuario['telefonos']['telefono2']); //Accediendo con corchetes