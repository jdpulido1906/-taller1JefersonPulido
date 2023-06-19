// Reglas de Validacion
const number = /[0-9]{1,5}/;
const text1 = /[a-zA-ZñÑá-úÁ-Ú ]{10,50}/;
const text2 =/^(19[5-9][0-9]|20[0-2][0-9])-([0][1-9]|1[0-2])-([0-2][1-9]|[1-3]0|31)$/;
const text3 = /^[a-zA-Z0-9._%+-]+@misena\.edu\.co$/;
const text4 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;

// Acceder a los elementos que se van a alterar
const form = document.getElementById("frmvalidacion");
const nombre = form.nombre.value;
const Nodoc = form.Nodoc.value;
const apellido = form.apellido.value;
const fecha_nacimiento = form.fecha_nacimiento.value;
const email = form.email.value;
const comprobar_password = form.comprobar_password.value;
const aceptar_terminos_checkbox = form.aceptar_terminos_checkbox.value;

const f1 = document.querySelector("#campoNoDoc .feedback");
form.Nodoc.addEventListener("input", (e) => {
  e.preventDefault();
  console.log("Se está escribiendo sobre el input");

  if (number.test(e.target.value)) {
    // Regla pasa la validacion
    form.Nodoc.setAttribute("class", "success");
    f1.style.setProperty("visibility", "hidden");
    f1.style.setProperty("opacity", "0");
    flag = true;
  } else {
    // Regla No pasa la validacion
    form.Nodoc.setAttribute("class", "error");
    f1.textContent =
      "Solo se puede digitar  valores numericos con una logintud maximo de 1 caracter maximo 15";
    f1.style.setProperty("visibility", "visible");
    f1.style.setProperty("opacity", "1");
    flag = false;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if ((form.Nodoc.value = null || form.Nodoc.value == 0 || flag == false)) {
    alert("Debe ingrear un numero de documento");
    form.Nodoc.focus();
    form.Nodoc.setAttribute("class", "error");
  } else {
    form.onsubmit();
  }
});

//Nombre
const f2 = document.querySelector("#campoNombre .feedback");
form.nombre.addEventListener("input", (e) => {
  e.preventDefault();
  console.log("Se está escribiendo sobre el input");

  if (text1.test(e.target.value)) {
    // Regla pasa la validacion
    form.nombre.setAttribute("class", "success");
    f2.style.setProperty("visibility", "hidden");
    f2.style.setProperty("opacity", "0");
    flag = true;
  } else {
    // Regla No pasa la validacion
    form.nombre.setAttribute("class", "error");
    f2.textContent = "Solo se puede digitar  valores alfanumericos";
    f2.style.setProperty("visibility", "visible");
    f2.style.setProperty("opacity", "1");
    flag = false;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if ((form.nombre.value = null || form.nombre.value == 0 || flag == false)) {
    alert("Debe Ingresar el nombre");
    form.nombre.focus();
    form.nombre.setAttribute("class", "error");
  } else {
    form.onsubmit();
  }
});

//Apellido
const f3 = document.querySelector("#campoApellido .feedback");
form.apellido.addEventListener("input", (e) => {
  e.preventDefault();
  console.log("Se está escribiendo sobre el input");

  if (text1.test(e.target.value)) {
    // Regla pasa la validacion
    form.apellido.setAttribute("class", "success");
    f3.style.setProperty("visibility", "hidden");
    f3.style.setProperty("opacity", "0");
    flag = true;
  } else {
    // Regla No pasa la validacion
    form.apellido.setAttribute("class", "error");
    f3.textContent = "Solo se puede digitar  valores alfanumericos";
    f3.style.setProperty("visibility", "visible");
    f3.style.setProperty("opacity", "1");
    flag = false;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    (form.apellido.value = null || form.apellido.value == 0 || flag == false)
  ) {
    alert("Debe ingrear el apellido");
    form.apellido.focus();
    form.apellido.setAttribute("class", "error");
  } else {
    form.onsubmit();
  }
});

//Fecha
const f4 = document.querySelector("#campoFecha .feedback");
form.fecha_nacimiento.addEventListener("input", (e) => {
  e.preventDefault();
  console.log("Se está escribiendo sobre el input");

  if (text2.test(e.target.value)) {
    // Regla pasa la validacion
    form.fecha_nacimiento.setAttribute("class", "success");
    f4.style.setProperty("visibility", "hidden");
    f4.style.setProperty("opacity", "0");
    flag = true;
  } else {
    // Regla No pasa la validacion
    form.fecha_nacimiento.setAttribute("class", "error");
    f4.textContent = "Debe ser mayor de 18 años para registrarse";
    f4.style.setProperty("visibility", "visible");
    f4.style.setProperty("opacity", "1");
    flag = false;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    (form.fecha_nacimiento.value =
      null || form.fecha_nacimiento.value == 0 || flag == false)
  ) {
    alert("Debe ingrear la fecha de nacimiento");
    form.fecha_nacimiento.focus();
    form.fecha_nacimiento.setAttribute("class", "error");
  } else {
    form.onsubmit();
  }
});

//Correo Electronico
const f5 = document.querySelector("#campoEmail .feedback");
form.email.addEventListener("input", (e) => {
  e.preventDefault();
  console.log("Se está escribiendo sobre el input");

  if (text3.test(e.target.value)) {
    // Regla pasa la validacion
    form.email.setAttribute("class", "success");
    f5.style.setProperty("visibility", "hidden");
    f5.style.setProperty("opacity", "0");
    flag = true;
  } else {
    // Regla No pasa la validacion
    form.email.setAttribute("class", "error");
    f5.textContent =
      "El campo Correo Electrónico solo permite correos con el dominio @misena.edu.co";
    f5.style.setProperty("visibility", "visible");
    f5.style.setProperty("opacity", "1");
    flag = false;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if ((form.email.value = null || form.email.value == 0 || flag == false)) {
    alert("Debe ingrear el correo electronico");
    form.email.focus();
    form.email.setAttribute("class", "error");
  } else {
    form.onsubmit();
  }
});

//Passworrd
const f6 = document.querySelector("#campoPassword .feedback");
form.password.addEventListener("input", (e) => {
  e.preventDefault();
  console.log("Se está escribiendo sobre el input");

  if (text4.test(e.target.value)) {
    // Regla pasa la validacion
    form.password.setAttribute("class", "success");
    f6.style.setProperty("visibility", "hidden");
    f6.style.setProperty("opacity", "0");
    flag = true;
  } else {
    // Regla No pasa la validacion
    form.password.setAttribute("class", "error");
    f6.textContent =
      "El campo Contraseña debe incluir al menos una letra mayúscula, una letra minúscula, un número, un carácter especial y tener una longitud mínima de 10 caracteres.";
    f6.style.setProperty("visibility", "visible");
    f6.style.setProperty("opacity", "1");
    flag = false;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    (form.password.value = null || form.password.value == 0 || flag == false)
  ) {
    alert("Debe ingrear el password");
    form.password.focus();
    form.password.setAttribute("class", "error");
  } else {
    form.onsubmit();
  }
});

//Comprobar Passworrd
const f7 = document.querySelector("#comprobar_password .feedback");
form.comprobar_password.addEventListener("input", (e) => {
  e.preventDefault();
  console.log("Se está escribiendo sobre el input");

  if (text4.test(e.target.value)) {
    // Regla pasa la validacion
    form.comprobar_password.setAttribute("class", "success");
    f7.style.setProperty("visibility", "hidden");
    f7.style.setProperty("opacity", "0");
    flag = true;
  } else {
    // Regla No pasa la validacion
    form.comprobar_password.setAttribute("class", "error");
    f7.textContent =
      "El campo Contraseña debe incluir al menos una letra mayúscula, una letra minúscula, un número, un carácter especial y tener una longitud mínima de 10 caracteres.";
    f7.style.setProperty("visibility", "visible");
    f7.style.setProperty("opacity", "1");
    flag = false;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    (form.comprobar_password.value =
      null || form.comprobar_password.value == 0 || flag == false)
  ) {
    alert("Debe coincidir el password");
    form.comprobar_password.focus();
    form.comprobar_password.setAttribute("class", "error");
  } else {
    form.onsubmit();
  }
});




