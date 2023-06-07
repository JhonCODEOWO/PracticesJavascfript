//Con parentNode.nodeName obtenemos el nombre padre del elemento
//Si se usa solo parentNode obtenemos el div con todas sus características
console.log(document.getElementById("spoiler").parentNode.nodeName);

//nextSibling y previousSibling: es útil para obtener los nodos vecinos de un elemento, no solamente el padre.

console.log(document.head.nextSibling); //Como el siguiente nodo de header es bodý, pero como en DOM cada salto de línea se muestra como #text entonces eso es lo que arrojará.

//Por lo tanto previous sibling hace lo contrario al anterior método, este lo que hace es obtener el nodo anterior.
console.log(document.body.previousSibling);

//NOTA: Los documentos siempre constarán de saltos de línea por lo cual este método no nos servirá mucho, para eso existen otros métodos que se verán a continuación.

//nexElementSibling y previousElementSibling
console.log("Iniciando logs con los otros métodos");
console.log(document.head.nextElementSibling);

console.log(document.body.previousElementSibling);