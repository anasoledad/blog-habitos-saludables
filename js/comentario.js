const formularioComentario = document.getElementById('formularioComentario');
const listaComentarios = document.getElementById('listaComentarios');
const msjNombre = document.getElementById('msjNombre');
const msjComentario = document.getElementById('msjComentario');
const nombreInput = document.getElementById('nombre');
const comentarioInput = document.getElementById('comentario');


formularioComentario.addEventListener('submit', e => {
  e.preventDefault();
  let sumarioNombre = validacionesNombre(nombreInput.value)
  let sumarioComentario = validacionesComentario(comentarioInput.value);

  if(sumarioNombre.length === 0 && sumarioComentario.length === 0){
    cargarComentario();
    formularioComentario.reset();
  }else{
      msjNombre.className = 'text-danger fst-italic';
      msjNombre.innerHTML = sumarioNombre;
      msjComentario.className = 'text-danger fst-italic';
      msjComentario.innerHTML = sumarioComentario;
  }
});

function cargarComentario() {
    const comentario = document.createElement('li');
  comentario.classList.add('comentario'); 

  const fechaComentario = document.createElement('p');
  fechaComentario.className = 'fw-light text-secondary'
  fechaComentario.innerHTML = new Date().toLocaleString();
  comentario.appendChild(fechaComentario);

  const contenedor = document.createElement('div');
  contenedor.className = 'd-flex'
  comentario.appendChild(contenedor)
  const imgPerfil = document.createElement('img');
  imgPerfil.src = 'https://www.prescriptum.com.br/wp-content/uploads/2015/12/placeholder-usuario-500x500-300x300.jpg';
  imgPerfil.className = 'rounded-circle pe-2 imgPerfil'
  contenedor.appendChild(imgPerfil);

  const nombreUsuario = document.createElement('h5');
  nombreUsuario.innerHTML = nombreInput.value;
  contenedor.appendChild(nombreUsuario);


  const contenedorComentario = document.createElement('p');
  contenedorComentario.innerHTML = comentarioInput.value;
  contenedorComentario.className = 'ms-5'
  comentario.appendChild(contenedorComentario);

  listaComentarios.appendChild(comentario);
 
}

function cantidadCaracteres(texto, min, max){
    if(texto.length >= min && texto.length <= max){
        console.log('cantidad de caracteres correcto');
        return true;
    }else{
        console.log('cantidad de caracteres incorrecto');
        return false;
    }
}

function validacionesNombre(nombre){
    let resumen = '';
    if(!cantidadCaracteres(nombre,2,40)){
        resumen += 'El nombre debe contener entre 2 y 40 caracteres <br>';
    }
    if(resumen.length !== 0){
        return resumen;
    }else{
        msjNombre.className = 'd-none';
        console.log('nombre esta ok');
        return '';
    }
}

function validacionesComentario(comentario){
    let resumen = '';
    if(!cantidadCaracteres(comentario, 3, 250)){
        resumen += 'El comentario debe contener entre 3 y 250 caracteres'
    }
    if(resumen.length !== 0){
        return resumen;
    }else{
        msjComentario.className = 'd-none';
        console.log('el comentario esta ok');
        return '';
    }
}
