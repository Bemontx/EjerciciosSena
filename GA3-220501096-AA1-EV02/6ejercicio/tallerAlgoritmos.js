/*
Crear una calculadora que en el programa principal pida dos números y una función llamada sumarNumeros, que debe recibir dos números enteros y devolver el resultado; una función restarNumeros, que debe recibir los dos números y devolver la diferencia; una función multiplicarNumeros, que debe recibir dos números y devolver el resultado y la función dividirNumeros, que debe recibir dos números y devuelve el resultado.
*/

let txt = parseInt(prompt("Ingrese un numero"));
let txt2 = parseInt(prompt("Ingrese otro numero"));

function sumar(txt,txt2){
    let suma = txt + txt2;
    return suma
};

function restar(txt,txt2){
    let resta = txt - txt2;
    return resta
};

function multiplicar(txt,txt2){
    let multiplica = txt * txt2;
    return multiplica
};

function division(txt,txt2){
    let dividir = txt / txt2;
    return dividir
};

function calculadora(txt,txt2){
    console.log(sumar(txt,txt2));
    console.log(restar(txt,txt2));
    console.log(multiplicar(txt,txt2));
    console.log(division(txt,txt2));
};

console.log(calculadora(txt,txt2));


