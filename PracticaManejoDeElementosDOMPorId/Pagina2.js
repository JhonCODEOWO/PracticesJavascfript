//documentElement es el contenido raíz del documento y corresponde a la etiqueta <html>

//Para acceder a cada nodo o hijos de elemento se debe ir accediendo por el desde document ejemplo: document.body, document.head
let documento = document.head;
console.log(documento);

//Que es childNodes(): es una propiedad node que devuelve una colección de nodos hijos a partir de un elemento dado

//Ejemplo
let documento2 = document.head.childNodes;
console.log(documento2);

//Una iteración que realiza lo mismo que lo escrito en el anterior ejemplo
for(let i = 0; i<document.head.childNodes.length; i++){
    console.log(document.head.childNodes[i]);
}