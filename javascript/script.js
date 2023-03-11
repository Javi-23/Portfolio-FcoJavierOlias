//1

document.getElementById('rojo').addEventListener('click', cambiarRojo);
document.getElementById('azul').addEventListener('click', cambiarAzul);
document.getElementById('verde').addEventListener('click', cambiarVerde);
document.getElementById('reset').addEventListener('click', Reseteo);

function cambiarRojo() {
    document.body.style.backgroundColor = 'red';
    document.body.style.color = '#bd2130';
  }

  function cambiarAzul() {
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'lightblue';
  }

  function cambiarVerde() {
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'lightgreen';
  }

  function Reseteo() {
    document.body.style.backgroundColor = '#171717';
    document.body.style.color = 'white';
  }


  //2

  function filtrarcards() {
    var tecnologiaSeleccionada = document.getElementById("cardselec").value;
    var proyectos = document.getElementById("box-container").children;
    for (var i = 0; i < proyectos.length; i++) {
      var tec = proyectos[i];
      var tecnologias = tec.getAttribute("data-tecnologia");
      if (tecnologiaSeleccionada === "all" || tecnologias.indexOf(tecnologiaSeleccionada) !== -1) {
        tec.style.display = "block";
      } else {
        tec.style.display = "none";
      }
    }
  }

  