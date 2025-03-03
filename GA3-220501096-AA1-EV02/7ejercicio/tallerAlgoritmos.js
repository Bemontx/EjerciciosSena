/*
Programa que muestre un saludo por pantalla, utilizar un procedimiento.
*/
let txt = prompt("Ingrese su nombre");

function saludo(x){
    return "<h3>Bienvenido</h3>" + x;
};

console.log(saludo(txt));
document.write(saludo(txt));