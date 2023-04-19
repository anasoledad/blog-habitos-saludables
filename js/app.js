class Articulo{
  #imagen;
  #titulo;
  #descripcion;

  constructor(imagen, titulo, descripcion){
    this.#imagen = imagen;
    this.#titulo = titulo;
    this.#descripcion = descripcion;
  }

  getImagen() {
    return this.#imagen;
  }
  getTitulo() {
    return this.#titulo;
  }
  getDescripcion() {
    return this.#descripcion;
  }
  setTitulo(titulo) {
    this.#titulo = titulo;
}
setDescripcion(descripcion) {
    this.#descripcion = descripcion;
}
setImagen(imagen) {
    this.#imagen = imagen;
}
}


const searchInput = document.getElementById('searchInput');

const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', function(event) {
  const searchText = event.target.value.toLowerCase();
  
  cards.forEach(card => {
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    const description = card.querySelector('.card-text').textContent.toLowerCase();
    
    if (title.includes(searchText) || description.includes(searchText)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});



const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', agregarComentario);

const inputComentario = document.getElementById('inputComentario');
const listaDeComentarios = document.getElementById('listaDeComentarios');

function agregarComentario(e) {
  e.preventDefault();

  const comentario = inputComentario.value;

  if (comentario !== '') {

    const elementoLista = document.createElement('li');
    elementoLista.classList = 'list-group-item list-group-item-success d-flex justify-content-between pt-2';
    const textocomentario = document.createTextNode(comentario);


    elementoLista.appendChild(textocomentario);

    listaDeComentarios.appendChild(elementoLista);

    inputComentario.value = '';

  }
}

