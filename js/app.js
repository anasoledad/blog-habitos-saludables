const buscarInput = document.getElementById('buscarInput');
const cards = document.querySelectorAll('.card');
const sinResultados = document.getElementById('sinResultados');

buscarInput.addEventListener('input', function(e) {
  const buscarTexto = e.target.value.toLowerCase();

  let resultado = false;
  cards.forEach(card => {
    const titulo = card.querySelector('.card-title').textContent.toLowerCase();
    const description = card.querySelector('.card-text').textContent.toLowerCase();

    if (titulo.includes(buscarTexto) || description.includes(buscarTexto)) {
      card.style.display = '';
      resultado = true;
    } else {
      card.style.display = 'none';
    }
  });

  if (resultado=== true) {
    sinResultados.className = 'd-none';
  } else {
    sinResultados.className = 'text-center text-secondary fs-2';
  }
});