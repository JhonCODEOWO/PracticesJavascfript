//¿Cómo se añaden métodos a las funciones constructoras?

//Función constructora Usuario
function Usuario(nombre, apellidos, edad, telefono, pais_residencia, idiomas) {
	// Propiedades
this.nombre_completo = {
		'nombre' : nombre,
		'apellidos' : apellidos
	}
	this.edad = edad;
	this.telefono = telefono;
	this.pais_residencia = pais_residencia;
	this.idiomas = idiomas;

	// Métodos
	this.saludar = function() {
		alert('Hola, ' + this.nombre_completo.nombre + '.');
	}

    this.muestraIdioma = function(){
        alert(this.nombre_completo.nombre + ' habla ' + this.idiomas + '.');
    }
}

//Instanciaciones de la clase Usuario
let usuario1 = new Usuario(
	'Enrique',
	'Barros Fernández',
	30,
	'0467489304',
	'Australia',
	['español', 'catalán', 'inglés', 'portugués', 'italiano']
);

let usuario2 = new Usuario(
	'Andrea',
	'Gomila Venegas',
	24,
	'5565784356',
	'México',
	['español', 'portugués', 'inglés', 'chino', 'francés']
);

// Saludos
usuario1.saludar();
usuario2.saludar();

//El método create

//El método create() de JavaScript es muy curioso y de lo más práctico, ya que permite crear un nuevo objeto a partir de otro ya existente. Creamos una función constructora y después, hacemos algunas instanciaciones. A estas instanciaciones les podemos añadir otros métodos y propiedades. Por lo que podremos crear un nuevo objeto derivado de un objeto que deriva de una función constructora. Esto es mucho más fácil de lo que parece.

//En el siguiente ejemplo, se especifican dos propiedades nuevas para usuario1. Sin utilizar una función constructora, podemos instanciar un objeto nuevo a partir de otro ya creado. En el ejemplo de abajo, este nuevo objeto es usuario3.

/* Se definen nuevas propiedades para usuario1 que no están en
  la función constructora */
  usuario1.direccion = "937 Beer Trafficway";
  usuario1.aniversario = "29/09/1991";
  
  // El nuevo objeto, gracias al método create() hereda todo de usuario1
  let usuario3 = Object.create(usuario1);
  console.log(usuario3);

//Uso del método create() con objetosliterales


//Hay ocasiones en las que queremos crear un grupo pequeño de objetos. En estas ocasiones, podrías crear un objeto literal y utilizar el método create() para crear algunos objetos derivados, con el siguiente ejemplo, serás capaz de instanciar también de objetos literales.

//Creamos el objeto literal Usuario con valores null, así no tenemos datos duplicados como en el ejemplo anterior. Si no indicamos nada a las propiedades de los nuevos objetos, por defecto quedan con valores null. De esta forma, evitamos que por ejemplo si el objeto literal fuese 'Enrique' de los ejemplos anteriores, que se queden todos los nuevos objetos con el valor de 'Enrique' por defecto en la propiedad nombre y lo mismo para el resto de propiedades.

//NOTA: el nombre de let usuario no esta relacionado al de arriba solo se usó asi para no tener errores en el código
let usuario = {
    nombre: null,
	edad: null,
	telefono: null,
	paisResidencia: null,
	idiomas: [],
};

//Al crear el objeto en base a usuario todos los demás heredan sus propiedades
let usuario4 = Object.create(usuario);
let usuario5 = Object.create(usuario);
let usuario6 = Object.create(usuario);

usuario1.nombre = 'Enrique';
usuario1.edad = 30;

console.log(usuario1);
console.log(usuario2);
console.log(usuario3);

//Crear objetos vacíos con constructor object()

let objeto1 = new Object();

console.log(objeto1);

//Podremos observar que se ha creao un objeto vacío

//A partir de este objeto, puedes ir asignando propiedades y métodos. Por cierto, no había explicado aún la forma de añadir un método desde fuera a un objeto, aquí lo tienes:

// usuario1.nombre = "Enrique";
// usuario1.edad = 30;
// usuario1.saludar = function() {
// 	alert('Hola, ' + usuario.nombre + '.');
// }

// console.log(usuario1);