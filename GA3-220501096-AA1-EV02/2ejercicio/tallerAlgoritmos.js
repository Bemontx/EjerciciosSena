/*
Crear una función “ConvertirEspaciado”, que reciba como parámetro un texto y devuelve una cadena con un espacio adicional tras cada letra, por ejemplo, “Hola, tú” devolverá “H o l a , t ú”. Crea un programa principal donde se use dicha función.
*/

let txt = prompt("ingrese un texto o palabra para activar funcion '“ConvertirEspaciado”'");

function convertirEspaciado(texto){
    return texto.split("")
};

console.log(convertirEspaciado(txt));