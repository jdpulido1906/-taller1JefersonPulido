function openModal(figura, operacion) {
  let modalId = `modal${operacion.charAt(0).toUpperCase() + operacion.slice(1)}`;
  let modal = document.getElementById(modalId);
  modal.style.display = "block";

  let calcularButton = modal.querySelector("button");
  calcularButton.setAttribute("onclick", `calculate('${figura}', '${operacion}')`);

  let resultadoDiv = modal.querySelector(`#resultado${operacion.charAt(0).toUpperCase() + operacion.slice(1)}`);
  resultadoDiv.style.display = "none";
}

function closeModal(modalId) {
  let modal = document.getElementById(modalId);
  modal.style.display = "none";
}

function calculate(figura, operacion) {
  let modalId = `modal${operacion.charAt(0).toUpperCase() + operacion.slice(1)}`;
  let modal = document.getElementById(modalId);
  let input = modal.querySelector(`#input${operacion.charAt(0).toUpperCase() + operacion.slice(1)}`);
  let resultadoDiv = modal.querySelector(`#resultado${operacion.charAt(0).toUpperCase() + operacion.slice(1)}`);
  let resultadoP = modal.querySelector(`#${operacion}Result`);

  let valor = parseFloat(input.value);

  let resultado;

  switch (figura) {
    case "circle":
      if (operacion === "perimeter") {
        resultado = calcularCirculoPerimetro(valor);
      } else {
        resultado = calcularCirculoArea(valor);
      }
      break;
    case "triangle":
      if (operacion === "perimeter") {
        resultado = calcularTrianguloPerimetro(valor);
      } else {
        resultado = calcularTrianguloArea(valor);
      }
      break;
    case "rectangle":
      if (operacion === "perimeter") {
        resultado = calcularRectanguloPerimetro(valor);
      } else {
        resultado = calcularRectanguloArea(valor);
      }
      break;
    case "square":
      if (operacion === "perimeter") {
        resultado = calcularCuadradoPerimetro(valor);
      } else {
        resultado = calcularCuadradoArea(valor);
      }
      break;
  }

  resultadoP.innerText = resultado;
  resultadoDiv.style.display = "block";
}

function calcularCirculoPerimetro(radio) {
  return 2 * Math.PI * radio;
}

function calcularCirculoArea(radio) {
  return Math.PI * radio * radio;
}

function calcularTrianguloPerimetro(lado) {
  return 3 * lado;
}

function calcularTrianguloArea(base) {
  return (Math.sqrt(3) / 4) * base * base;
}

function calcularRectanguloPerimetro(base, altura) {
  return 2 * (base + altura);
}

function calcularRectanguloArea(base, altura) {
  return base * altura;
}

function calcularCuadradoPerimetro(lado) {
  return 4 * lado;
}

function calcularCuadradoArea(lado) {
  return lado * lado;
}
