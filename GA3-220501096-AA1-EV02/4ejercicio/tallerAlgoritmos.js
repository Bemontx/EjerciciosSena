/*
Diseñar una función que calcule el área y el perímetro de una circunferencia. Utilizar dicha función en un programa principal que lea el radio de una circunferencia y muestre su área y perímetro.*/

let radio = parseFloat(prompt("Ingrese el radio de la circunferencia"));

function calcularAreaPerimetro(r) {
    let area = Math.PI * Math.pow(r, 2);
    let perimetro = 2 * Math.PI * r;
    return { area, perimetro };
}

let resultado = calcularAreaPerimetro(radio);

console.log("Radio ingresado:", radio);
console.log("Área de la circunferencia:", resultado.area);
console.log("Perímetro de la circunferencia:", resultado.perimetro);