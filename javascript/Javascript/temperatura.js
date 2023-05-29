function convertirTemperatura() {
    // Obtener los valores ingresados por el usuario
    var temperatura = parseFloat(document.getElementById("temperatura").value);
    var convertirDe = document.getElementById("convertirDe").value;
    var convertirA = document.getElementById("convertirA").value;

    // Realizar la conversión
    var resultado;
    if (convertirDe === "celsius") {
      if (convertirA === "fahrenheit") {
        resultado = temperatura * 9/5 + 32;
      } else if (convertirA === "kelvin") {
        resultado = temperatura + 273.15;
      }
    } else if (convertirDe === "fahrenheit") {
      if (convertirA === "celsius") {
        resultado = (temperatura - 32) * 5/9;
      } else if (convertirA === "kelvin") {
        resultado = (temperatura - 32) * 5/9 + 273.15;
      }
    } else if (convertirDe === "kelvin") {
      if (convertirA === "celsius") {
        resultado = temperatura - 273.15;
      } else if (convertirA === "fahrenheit") {
        resultado = (temperatura - 273.15) * 9/5 + 32;
      }
    }

    // Mostrar el resultado en una alerta
    alert("El resultado de la conversión es: " + resultado.toFixed(2));
  }