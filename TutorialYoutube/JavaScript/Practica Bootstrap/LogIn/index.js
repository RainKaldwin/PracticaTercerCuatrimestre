


function ValidatePassword() {
    const userInput = document.getElementById("user").value;
    const passwordInput = document.getElementById("password").value;

    if (passwordInput.length < 8) {
        alert("La Contraseña debe ser mayor a 8 caracteres");
        document.getElementById("password").focus();
        return;
    }

    if (!/[A-Z]/.test(passwordInput)) {
        alert("La Contraseña debe contener al menos una letra mayuscula");
        document.getElementById("password").focus();
        return;
    }

    if (!/\d/.test(passwordInput)) {
        alert("La Contraseña debe contener al menos un dígito");
        document.getElementById("password").focus();
        return;
    }

    else{
        alert("Contra valida!");
    }
  
}
