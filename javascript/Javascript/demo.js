//EVENTO CLICK
function handleClick() {
  alert("Se hizo clic en el elemento");
}

window.onload = function() {
  var button = document.getElementById("myButton");
  button.addEventListener("click", handleClick);
};

//mouseover
const image = document.querySelector('.rotate-image');

    image.addEventListener('mouseover', function() {
      this.style.transform = 'rotate(180deg)';
    });

    image.addEventListener('mouseout', function() {
      this.style.transform = 'rotate(0deg)';
    });

    //Focus
    function agregarEventoEnfoque() {
      var imagenes = document.getElementsByTagName('img');
      for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].onfocus = function() {
          this.style.border = '2px solid green';
        };
        imagenes[i].onblur = function() {
          this.style.border = 'none';
        };
      }
    }

    //EVENTO kEYDOWN
    function handleKeyDown(event) {
      var key = event.key;
      var keyCode = event.keyCode;
      
      document.getElementById("keyInfo").textContent = "Tecla presionada: " + key + " (código: " + keyCode + ")";
    }
    //contextmenu
    function handleContextMenu(event) {
      event.preventDefault();
       alert("Se activó el evento contextmenu");
      return false;
    }
    ///keyup
    function handleKeyup(event) {
      var inputText = event.target.value;  // Obtener el texto ingresado en el campo de texto
      document.getElementById("output").textContent = "Texto ingresado: " + inputText;
    }
    

    ///mouseup
    function handleMouseUp() {
      // Acción a realizar cuando se suelta el botón del mouse
      alert("Se soltó el botón del mouse");
    }

    //hashchange
    window.addEventListener("hashchange", function(event) {
      var newHash = location.hash;
      console.log("Hash cambiado: " + newHash);
      
      // Aquí puedes realizar acciones adicionales en respuesta al cambio de hash
    });
    
    
    //dragstart

    function dragStart(event) {
      // Obtén una referencia al elemento arrastrado
      var element = event.target;
    
      // Guarda el ID del elemento arrastrado en el objeto de transferencia de datos
      event.dataTransfer.setData("text/plain", element.id);
    
      // Muestra una alerta al ejecutarse el evento
      alert("Se está ejecutando el evento dragstart");
    }

    //beforeprint
    function handleBeforePrint() {
      alert("Se está ejecutando el evento beforeprint");
    }
  
    function simularBeforePrint() {
      handleBeforePrint();
    }

    