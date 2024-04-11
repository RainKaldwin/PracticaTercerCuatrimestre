$(document).ready(function() {
    // Función para cambiar el color del texto a "primary"
    $('#cambiarColorPrimary').click(function() {
        $('label, input, button').removeClass('text-warning').addClass('text-primary');
    });

    // Función para cambiar el color del texto a "warning"
    $('#cambiarColorWarning').click(function() {
        $('label, input, button').removeClass('text-primary').addClass('text-warning');
    });
});

/*

$(document).ready(function() { ... });: Esta línea significa que el código dentro de la función anónima se ejecutará cuando el documento HTML esté completamente cargado y listo para manipularse. Esto asegura que el código jQuery se ejecute una vez que todos los elementos del DOM estén disponibles para ser seleccionados y manipulados.

$('#cambiarColorPrimary').click(function() { ... });: Esto selecciona el elemento con el ID cambiarColorPrimary y agrega un evento de clic a él. Cuando este elemento se hace clic, se ejecutará la función anónima adjunta. Este ID se espera que sea el botón que cambia el color del texto a "primary".

$('label, input, button'): Esto selecciona todos los elementos <label>, <input> y <button> en el documento. Estos son los elementos del formulario que se modificarán para cambiar el color del texto.

.removeClass('text-warning'): Esta función elimina la clase text-warning de los elementos seleccionados. Esto es importante porque queremos cambiar el color del texto a "primary", por lo que debemos asegurarnos de que no tengan la clase text-warning.

.addClass('text-primary'): Esta función agrega la clase text-primary a los elementos seleccionados. Esto cambia el color del texto a "primary" según las reglas de estilo de Bootstrap.

$('#cambiarColorWarning').click(function() { ... });: Este código es similar al primero, pero está asociado al botón con el ID cambiarColorWarning. Este botón cambia el color del texto a "warning".

Dentro de la función del botón "Cambiar color a Warning", se eliminan las clases text-primary y se agregan las clases text-warning a los elementos seleccionados, lo que cambia el color del texto a "warning".




*/