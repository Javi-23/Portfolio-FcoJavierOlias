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