/*
    5. Crear una subrutina llamada “Login”, que recibe un nombre de usuario y una contraseña y devuelve Verdadero si el nombre de usuario es “usuario1” y la contraseña es “asdasd”. Además, recibir el número de intentos para hacer login y si no se ha podido hacer login incrementar este valor.
	Crear un programa principal en el que se pida un nombre de usuario y una contraseña y se intente hacer login (solamente hay tres oportunidades para intentarlo).
*/

let user = prompt("Ingrese nombre de usuario registrado.");
let pass = prompt("Ingrese su contrasena 'Intentos maximos 3.'");

if (user === "usuario1" && pass === "asdasd") {
    console.log("User // Pass success \n Bienvenido APrendiz Sena");
} else if (user !== "usuario1") {
    console.log("Usuario no encontrado");
} else {
    console.log("Contraseña incorrecta");
}