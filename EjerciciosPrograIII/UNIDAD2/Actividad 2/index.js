/*
Escribe tu código jQuery en el archivo JS
*/

$(document).ready(function(){
    $("#SubForm").submit(function(event){
        event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

        var nombre = $("#NombreImput").val(); // Obtiene el valor del input con el id "NombreImput"
        var apellido = $("#ApellidoImput").val(); // Obtiene el valor del input con el id "ApellidoImput"

        // Muestra un alert con los valores obtenidos
        alert("Nombre: " + nombre + "\nApellido: " + apellido);
    });
});

  
  /*
    $(document).ready(function(){: Esta línea espera a que el documento HTML esté completamente cargado antes de ejecutar cualquier código jQuery. El $(document).ready() es un método de jQuery que se utiliza para asegurarse de que el código dentro de la función se ejecute solo después de que el DOM (Document Object Model) esté listo para ser manipulado.

    $("#SubForm").click(function(){: Esta línea selecciona el elemento HTML con el ID mostrarValores, que es un botón en este caso, y luego le adjunta un evento de clic. Cuando este botón se hace clic, se ejecutará la función anónima que viene después del click(function(){.

    var nombre = $("#nombre").val();: Esta línea selecciona el elemento HTML con el ID nombre, que es un campo de entrada de texto, y luego usa el método val() de jQuery para obtener el valor ingresado en ese campo de entrada. Este valor se almacena en la variable nombre.

    var apellido = $("#apellido").val();: Esta línea hace lo mismo que la anterior, pero selecciona el elemento con el ID apellido y almacena su valor en la variable apellido.

    alert("Nombre: " + nombre + "\nApellido: " + apellido);: Finalmente, esta línea muestra un mensaje de alerta en el navegador. El mensaje de alerta contiene los valores de las variables nombre y apellido, que son los valores ingresados por el usuario en los campos de entrada de texto.
  */