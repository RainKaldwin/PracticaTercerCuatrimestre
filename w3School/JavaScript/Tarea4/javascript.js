// Definimos la función que multiplica dos números
function multiplicar(a, b) {
    return a * b;
}

// Llamamos a la función y mostramos el resultado en el documento HTML
var resultado = multiplicar(5, 10);
document.getElementById("multiplicacion").innerHTML = "El resultado es: " + resultado;
