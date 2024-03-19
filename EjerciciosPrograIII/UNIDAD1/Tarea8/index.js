let buttonControl = document.querySelector("button");
let responsaControl = document.getElementById("resultado");

//validacion de usuario y contrasenia

let condicion = false;
let programResponse;
let giveResponse;

buttonControl.addEventListener("click", () => {
    let user = document.getElementById('user').value; // Obtener el valor del usuario
    let password = document.getElementById('password').value; // Obtener el valor de la contraseña

    if (user === "Rain" && password === "Rain") { // Verificar el usuario y la contraseña
        condicion = true;
        responsaControl.value = ShowProfile(user, password); // Mostrar el perfil
    } else {
        alert("Usuario o contraseña incorrectos"); // Mostrar un mensaje de error
    }
});

function ShowProfile(user, password) {
    let response = "Usuario de nombre: " + user + "\n" + "Contraseña: " + password;
    return response; // Retornar el perfil
}
