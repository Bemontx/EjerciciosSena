/*
Programa que realice la media de dos números, utilizando una función.*/


let txt = parseInt(prompt("ingrese un numero: "));
let txt2 = parseInt(prompt("ingrese otro numero: "));

function media(a,b){
    return (a + b) / 2;

};

console.log(media(txt,txt2));