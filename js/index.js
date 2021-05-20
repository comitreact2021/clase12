function agregarTarjeta({ imagen, nombre, precio }) {
  //const { imagen, nombre, precio } = producto;

  const card = `<div class="col mb-4 mt-4">
                      <a class="card-link" href="http://www.google.com.ar">
                          <div class="card h-100">
                          <img src="images/${imagen}" class="card-img-top" alt="Producto 1" />
  
                          <div class="card-body">
                              <h5 class="card-title">${nombre}</h5>
  
                              <p class="card-text">
                              Some quick example text to build on the card title and make up
                              the bulk of the card's content.
                              </p>
                          </div>
  
                          <div class="card-footer">
                              <small class="text-muted">$ ${precio}</small>
                          </div>
                          </div>
                      </a>
                  </div>`;

  const productosContainer = document.getElementById('productos-container');

  productosContainer.innerHTML += card;
}

function cargarTarjetas() {
  productos.forEach(agregarTarjeta);
}

cargarTarjetas();

function buscarPorNombre(nombreBuscado) {
  const productosContainer = document.getElementById('productos-container');

  productosContainer.innerHTML = ''; //Borrar el listado de productos

  for (producto of productos) {
    const productoEnMinusuculas = producto.nombre.toLowerCase(); //samsung
    const productoBuscadoEnMinusculas = nombreBuscado.toLowerCase(); //sung

    if (productoEnMinusuculas.indexOf(productoBuscadoEnMinusculas) >= 0) {
      agregarTarjeta(producto);
    }
  }
}

const btnBuscar = document.getElementById('btn-buscar');
btnBuscar.addEventListener('click', (event) => {
  event.preventDefault();

  const txtBuscar = document.getElementById('txt-buscar');
  const textoBuscado = txtBuscar.value;

  //if (textoBuscado.trim() != '') {
  if (textoBuscado.trim().length > 0) {
    buscarPorNombre(textoBuscado);
  } else {
    alert('Debe ingresar un texto a buscar');
  }
});
