/*
Crear una función “calcularMaxMin” que recibe un arreglo con valores numéricos y devuelve el valor máximo y el mínimo. Crear un programa que pida números por teclado y muestre el máximo y el mínimo, utilizando la función anterior.
*/

let input = prompt("Ingrese números aleatorios, separándolos con una coma ','");
let vector = input.split(",");

for (let i = 0; i < vector.length; i++) {
    vector[i] = Number(vector[i].trim()); 
}

function calcularMaxMin(numeros) {
    let maximos = Math.max(...numeros); 
    let minimos = Math.min(...numeros); 
    return { maximos, minimos }; 
}

let resultadoFinal = calcularMaxMin(vector);

console.log("Este sería el array:", vector);
console.log("Máximo:", resultadoFinal.maximos);
console.log("Mínimo:", resultadoFinal.minimos);