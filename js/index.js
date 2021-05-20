function agregarTarjeta({ id, imagen, nombre, precio }) {
  //const { imagen, nombre, precio } = producto;

  const card = `<div data-id="${id}" class="col-card col mb-4 mt-4">
                      <a class="card-link" href="#">
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

  /*const tarjetaAgregada = document.getElementById(`card-${id}`);

  tarjetaAgregada.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Click en el producto');
  });*/

  $('.col-card').click(function (event) {
    event.preventDefault();

    const id = $(this).attr('data-id');

    console.log('Click producto ' + id);
  });
}

function cargarTarjetas() {
  productos.forEach(agregarTarjeta);

  /*for (let i = 0; i < 2; i++) {
    agregarTarjeta(productos[i]);
  }*/
}

cargarTarjetas();

function limpiarListadoProductos() {
  const productosContainer = document.getElementById('productos-container');

  productosContainer.innerHTML = ''; //Borrar el listado de productos
}

function buscarPorNombre(nombreBuscado) {
  limpiarListadoProductos();

  for (producto of productos) {
    const productoEnMinusuculas = producto.nombre.toLowerCase(); //samsung
    const productoBuscadoEnMinusculas = nombreBuscado.toLowerCase(); //sung

    if (productoEnMinusuculas.indexOf(productoBuscadoEnMinusculas) >= 0) {
      agregarTarjeta(producto);
    }
  }
}

const txtBuscar = document.getElementById('txt-buscar');

txtBuscar.addEventListener('keyup', (event) => {
  const textoBuscado = txtBuscar.value;

  //if (textoBuscado.trim() != '') {
  if (textoBuscado.trim().length > 0) {
    buscarPorNombre(textoBuscado);
  } else {
    limpiarListadoProductos();
  }
});
