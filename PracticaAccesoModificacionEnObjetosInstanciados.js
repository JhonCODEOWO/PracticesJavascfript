//Acceso y modificaciones en objetos instanciados
//Función constructora Usuario

//Para acceder a cualquier propiedad de un objeto ya instanciado se debe de realizar como si se accediera a una propiedad de un objeto

//EJEMPLO

//usuario1.nombre_completo;

//Añadir propiedades a objetos ya instanciados

//Se vuelve a realizar lo mismo que se ha visto antes, únicamente indicamos una propiedad que no existe en el objetovy esta, se creará con lo que le demos de valor.

//EJEMEPLO

//usuario2.Direccion = San Pedro Atmatla;

//Finalmente para eliminar alguna propiedad del objeto se realiza lo mismo que se vió con anterioridad.

//delete usuario1.edad;

//Ejercicio

// Accede y muestra en la consola la propiedad edad del usuario2.
// Accede y muestra en la consola la posición 2 de la propiedad idiomas del usuario2.
// Añade dos nuevas propiedades al objeto usuario1.
// Elimina una propiedad del objeto usuario1 y otra de usuario2.

//Función constructora Usuario
function Usuario(nombre, apellidos, edad, telefono, pais_residencia, idiomas) {
    this.nombre_completo = {
            'nombre' : nombre,
            'apellidos' : apellidos
        }
        this.edad = edad;
        this.telefono = telefono;
        this.pais_residencia = pais_residencia;
        this.idiomas = idiomas;
    }
    
    // Instanciaciones de la clase Usuario
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

console.log(usuario2.edad);
console.log(usuario2.idiomas[2]);

usuario1.carrera = "Informática";
usuario1.casado = "Soltero";

delete usuario1.apellidos;
delete usuario2.telefono;