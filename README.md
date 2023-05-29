# -taller1JefersonPulido
var nombres = ["Juan", "María", "Carlos"];
var apellidos = ["Gómez", "López", "Pérez"];
var actividades = ["Yoga", "Pilates", "CrossFit"];

// Obtener selecciones del usuario
var nombreSeleccionado = prompt("Seleccione un nombre: " + nombres.join(", "));
var apellidoSeleccionado = prompt("Seleccione un apellido: " + apellidos.join(", "));
var actividadSeleccionada = prompt("Seleccione una actividad: " + actividades.join(", "));

// Comprobar si la selección es correcta
var indice = nombres.indexOf(nombreSeleccionado);
if (indice !== -1 && apellidos[indice] === apellidoSeleccionado && actividades[indice] === actividadSeleccionada) {
    console.log("La respuesta es correcta");
} else {
    console.log("La respuesta es incorrecta");
}
