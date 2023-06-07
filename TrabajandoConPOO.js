//¿Cómo se crea una función constructora de objetos?

//Objeto inicial (No permite su replicación)
// let usuario = {
//     nombre_completo: ['Enrique', 'Barros', 'Fernández'],
//     edad: 30,
//     telefono: '0467489304',
//     pais_residencia: 'Australia',
//     idiomas: ['español', 'catalán', 'inglés', 'portugués', 'italiano'],
    
// };

//Creando la función constructora
//Se debe de empezar usando la palabra function y su primera letra de esta función debe de ser mayúscula

let usuarioConConstructor = {
    nombre_completo: ['Enrique', 'Barros', 'Fernández'],
    edad: 30,
    telefono: '0467489304',
    pais_residencia: 'Australia',
    idiomas: ['español', 'catalán', 'inglés', 'portugués', 'italiano'],

    
};

function usuario(nombre, apellidos, edad, telefono, pais_residencia, idiomas) {   
    this.nombre_completo = {
        'nombre': nombre,
        'apellidos' : apellidos
    }
    this.edad = edad;
    this.telefono = telefono;
    this.pais_residencia = pais_residencia;
    this.idiomas = idiomas;
}

//Instanciar un nuevo objeto derivado de usuarioConConstructor
let usuario1 = new usuarioConConstructor(
    'Jonathan',
    'Juárez Valera',
    20,
    '7971153240',
    'México',
    ['español', 'inglés']
)