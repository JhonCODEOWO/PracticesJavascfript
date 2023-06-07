//getElementsByTagName: obtiene elementos por nombre de etiqueta.
console.log(document.getElementsByTagName("li")); //Obtendrá todos los elementos que contengan la etiqueta li

//¿Qué es HTMLCollection?: es una colección como nodeList, pero para elementos HTML y no todos los nodos como #text

//Ejemplo: se almacena lo anterior hecho en una variable, como se sabe esa variable será un arreglo con todos los elementos que contengan el nombre li, con htmlcollection podemos seleccionar cuales queremos devolver en base a su indice

console.log("Usando HTMLCollections");
let elementosLi = document.getElementsByTagName("li");
console.log(elementosLi[0]);

//Obtener el contenido de un elemento HTML con innerHTML: con innerHTML puedes obtener o establecer (get, set) el contenido de un elemento HTML

//EJEMPLO: Obtendremos el texto de los elementos li
//NOTA ENCONTRADA: Para poder meter htmlCollection en un string ha d eusarse una coma normal
console.log("Los colores primarios RGB son",
elementosLi[0].innerHTML + ", " + 
elementosLi[1].innerHTML + ", " +
elementosLi[2].innerHTML + ".");
