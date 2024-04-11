document.getElementById('Registrar').addEventListener('click', function(event) {
  // Evitar que el formulario se envíe y la página se actualice
  event.preventDefault();

  // Mostrar ventana modal para ingresar el correo electrónico
  Swal.fire({
      title: 'Ingrese su correo electrónico',
      input: 'email',
      inputPlaceholder: 'Correo electrónico',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      preConfirm: (email) => {
          // No es necesario hacer nada aquí
      }
  }).then((result) => {
      // Verificar si se confirmó el botón y si el valor del correo electrónico es válido
      if (result.isConfirmed) {
          const email = result.value;
          if (isValidEmail(email)) {
              // Si el correo electrónico es válido, mostrar mensaje de confirmación
              Swal.fire(
                  '¡Registro exitoso!',
                  'Gracias por registrarte.',
                  'success'
              );
          } else {
              // Si el correo electrónico no es válido, mostrar mensaje de error
              Swal.fire(
                  'Error',
                  'Por favor ingresa un correo electrónico válido.',
                  'error'
              );
          }
      }
  });
});

// Función para validar el correo electrónico
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
