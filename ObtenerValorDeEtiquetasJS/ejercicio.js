let listaTd = document.getElementsByTagName("Td");

console.log("Ejercicio 107: ", listaTd[0].innerHTML);
console.log("Ejercicio 108: ", listaTd[12].innerHTML);
console.log("Ejercicio 108: ", listaTd[19].innerHTML);

console.log("Los países de América en la tabla son: ", listaTd[1].innerHTML + ", " + listaTd[6].innerHTML + ", " + listaTd[11].innerHTML + ", " + listaTd[16].innerHTML);

for(let i = 10; i < 15; i++){
    console.log(listaTd[i].innerHTML);
}