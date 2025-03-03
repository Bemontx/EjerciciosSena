/*
Programa que mediante un procedimiento calcule el cuadrado de un número cualquiera y lo muestre en pantalla. 
*/

let txt = parseInt(prompt("ingrese un numero: "));
let txt2 = parseInt(prompt("ingrese otro numero: "));

function calcularCuadrado(a,b){
    return("el cuadrado de un numero es " + a * b);

};

console.log(calcularCuadrado(txt,txt2));