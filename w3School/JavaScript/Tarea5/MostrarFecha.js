
function MostrarFecha(){
    var hoy = new Date();
    var opciones = { 
        weekday: 'long', // Nombre completo del día de la semana (ejemplo: "lunes")
        year: 'numeric', // Año con 4 dígitos (ejemplo: "2024")
        month: 'long', // Nombre completo del mes (ejemplo: "marzo")
        day: 'numeric' // Día del mes (ejemplo: "13")
    };
    var FechaFormato = hoy.toLocaleDateString('es-ES', opciones);
    document.getElementById("fecha").innerHTML =
    "La fecha de hoy es " + FechaFormato;
}
