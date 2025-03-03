/*
Programa que muestre un menú con las opciones sumar, restar, multiplicar y dividir, el programa solicitará una opción y realizará la tarea elegida, se debe usar un procedimiento para mostrar el menú, pedir los datos en el main y después usar funciones para realizar los cálculos. 
*/

let menu = ["1-Hamburguesa combo $30","2-salchipapa combo $20","3-pizza combo $10"];
let costos = [30,20,10];


function mostrarMenu() {
    for (let i = 0; i < menu.length; i++) {
        console.log(menu[i]);
    }
};

mostrarMenu();

let escogerCombo = prompt("Selecciona la opcion deseada del menu (1, 2 o 3): ");
let pagar = parseInt(prompt("De que cantidad es el billete con el que va a cancelar?? "));
let cambio;

    if (escogerCombo === "1") {
        if (pagar >= costos[0]) {
            cambio = pagar - costos[0];
            console.log("Escogiste el combo 1. Tu cambio es: $" + cambio);
        } else {
            console.log("Dinero insuficiente para comprar el combo 1.");
        }
    } else if (escogerCombo === "2") {
        if (pagar >= costos[1]) {
            cambio = pagar - costos[1];
            console.log("Escogiste el combo 2. Tu cambio es: $" + cambio);
        } else {
            console.log("Dinero insuficiente para comprar el combo 2.");
        }
    } else if (escogerCombo === "3") {
        if (pagar >= costos[2]) {
            cambio = pagar - costos[2];
            console.log("Escogiste el combo 3. Tu cambio es: $" + cambio);
        } else {
            console.log("Dinero insuficiente para comprar el combo 3.");
        }
    } else {
        console.log("Opción no valida. Por favor selecciona 1, 2 o 3.");
    }

mostrarMenu();