function MostrarUsuario() {
    const varNombre = document.getElementById("NombreImput").value;
    const varApellido = document.getElementById("ApellidoImput").value;

    if (varNombre === "" || varApellido === "") {
        alert("¡Debe llenar los valores de ambos campos!");
    } else {
        alert("El usuario ingresado es: " + varNombre + " , " + varApellido);
    }
}
