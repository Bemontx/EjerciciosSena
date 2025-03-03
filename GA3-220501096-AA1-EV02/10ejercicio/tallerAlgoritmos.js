/*
Programa que pida un nombre, un apellido y un lugar y a raíz de ahí muestre en pantalla una pequeña historia, se debe usar un procedimiento. 
*/

let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
let lugar = prompt("Ingrese un lugar: ");

function cuento(a,b,c){
    return("Erase una vez un brujo llamado " + a + " " + b + " que ensenaba magia negra en la secta de " +  c);

};

console.log(cuento(nombre,apellido,lugar));