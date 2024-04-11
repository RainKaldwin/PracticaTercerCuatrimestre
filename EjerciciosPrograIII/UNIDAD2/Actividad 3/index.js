$(document).ready(function(){
  $("#SubForm").submit(function(event){
      event.preventDefault(); // Evitar que el formulario se envíe y la página se recargue

      var nombre = $("#NombreImput").val(); // Obtener el valor del input con el id "NombreImput"
      var apellido = $("#ApellidoImput").val(); // Obtener el valor del input con el id "ApellidoImput"

      // Mostrar SweetAlert con los valores obtenidos
      Swal.fire({
          title: 'Resultado del formulario:',
          html: '<b>Nombre:</b> ' + nombre + '<br><b>Apellido:</b> ' + apellido,
          icon: 'success',
          confirmButtonText: 'Aceptar'
      });

      /*
        title: Este es el título que aparecerá en la ventana modal de SweetAlert. En este caso, el título es 'Valores del formulario:'.

        html: Esta es la parte del cuerpo del mensaje que permite HTML. Aquí puedes definir cómo se mostrará el contenido dentro de la ventana modal. En este caso, se usa HTML para formatear los valores del formulario. El <b> se utiliza para hacer que los textos 'Nombre:' y 'Apellido:' estén en negrita, y se concatenan con los valores de las variables nombre y apellido, respectivamente. Además, <br> se utiliza para agregar un salto de línea entre el nombre y el apellido.

        icon: Este es el icono que se mostrará junto al título en la ventana modal. En este caso, se establece como 'info', lo que mostrará un icono de información.

        confirmButtonText: Este es el texto que aparecerá en el botón de confirmación en la ventana modal. En este caso, se establece como 'Aceptar'.


      */
  });
});
