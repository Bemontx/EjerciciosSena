/*
Crear un programa que pida dos números enteros al usuario y diga si alguno de ellos es múltiplo del otro. Crear una función “EsMultiplo” que reciba los dos números, y devuelve si el primero es múltiplo del segundo. 
*/


let texto = parseInt(prompt("Ingrese algun numero"));
let texto1 = parseInt(prompt("Ingrese otro numero"));
let suma = texto + texto1;

function sumar(numero) {
    return numero;
}

function multiplo(suma, numero) {
    return suma % numero === 0;
}

console.log(sumar(suma)); 
console.log(multiplo("el resultado de la suma es multiplo del segundo digito " + suma, texto1));