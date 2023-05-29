# -taller1JefersonPulido
var nombres = ["Juan", "María", "Carlos"];
var apellidos = ["Gómez", "López", "Pérez"];
var actividades = ["Yoga", "Pilates", "CrossFit"];
function comprobarRespuesta() {
  var nombreSeleccionado = document.getElementById("nombres").value;
  var apellidoSeleccionado = document.getElementById("apellidos").value;

  var indiceNombre = nombres.indexOf(nombreSeleccionado);
  var indiceApellido = apellidos.indexOf(apellidoSeleccionado);
  var indiceActividad = actividades.indexOf(actividadSeleccionada);

  // Comprobar si la selección es correcta
  if (indiceNombre !== -1 && indiceApellido !== -1 && indiceActividad !== -1) {
    if (indiceNombre === indiceApellido && indiceApellido === indiceActividad) {
      alert("La respuesta es correcta");
    } else {
      alert("La respuesta es incorrecta");
    }
  } else {
    alert("La respuesta es incorrecta");
  }
}

