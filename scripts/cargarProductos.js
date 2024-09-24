// Función para obtener el id del producto de la URL
function obtenerIdProducto() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get("id"));
}

// Función para mostrar los detalles del producto en el DOM
function mostrarDetalleProducto() {
  const productoId = obtenerIdProducto();
  const producto = productosJSON.productos.find(p => p.id === productoId);

  if (producto) {
    const contenedorProductoDetalle = document.getElementById("producto-detalle");

    // Creamos el carrusel de Bootstrap
    const carrusel = document.createElement("div");
    carrusel.id = "carrusel";
    carrusel.className = "carousel slide";
    carrusel.setAttribute("data-bs-ride", "carousel");

    // Slides del carrusel
    const carruselInner = document.createElement("div");
    carruselInner.className = "carousel-inner";
    carrusel.appendChild(carruselInner);
    producto.imagenes.forEach((imagen, index) => {
      // Slide
      const slide = document.createElement("div");
      slide.className = index === 0 ? "carousel-item active" : "carousel-item";
      carruselInner.appendChild(slide);

      // Imagen en el slide
      const imgSlide = document.createElement("img");
      imgSlide.src = imagen;
      imgSlide.className = "d-block w-100";
      slide.appendChild(imgSlide);
    });

    // Botones de navegación del carrusel
    const btnPrev = document.createElement("button");
    btnPrev.className = "carousel-control-prev";
    btnPrev.setAttribute("type", "button");
    btnPrev.setAttribute("data-bs-target", "#carrusel");
    btnPrev.setAttribute("data-bs-slide", "prev");
    const iconPrev = document.createElement("span");
    iconPrev.className = "carousel-control-prev-icon";
    iconPrev.setAttribute("aria-hidden", "true");
    btnPrev.appendChild(iconPrev);

    const btnNext = document.createElement("button");
    btnNext.className = "carousel-control-next";
    btnNext.setAttribute("type", "button");
    btnNext.setAttribute("data-bs-target", "#carrusel");
    btnNext.setAttribute("data-bs-slide", "next");
    const iconNext = document.createElement("span");
    iconNext.className = "carousel-control-next-icon";
    iconNext.setAttribute("aria-hidden", "true");
    btnNext.appendChild(iconNext);

    // Agregamos los botones de navegación al carrusel
    carrusel.appendChild(btnPrev);
    carrusel.appendChild(btnNext);

    // Agregamos el carrusel al contenedor
    contenedorProductoDetalle.appendChild(carrusel);

    // Mostramos el resto de detalles del producto
    const detalleProducto = document.createElement("div");
    detalleProducto.innerHTML = `<div class="info-product col-sm-12"><h1 class="nom"><strong>${producto.nombre}</strong></h1>
      <h3 class="price"> $${producto.precio.toFixed(3)}</h3><hr>
      <p><strong>Talla:</strong><br><br> ${producto.Talla}</p><hr>
      <p><strong>Descripción:</strong> ${producto.descripcion}</p>
      <p><a target="_blank" href="https://wa.me/3016228195?text=Hola!, Me interesa comprar este producto. ¿Qué metodos de pago tienen?${producto.comprar}" class="boton">Comprar</a></p></div>
     `;

    // Agregamos los detalles del producto al contenedor
    contenedorProductoDetalle.appendChild(detalleProducto);
  } else {
    // Si no se encuentra el producto, mostramos un mensaje de error
    const contenedorProductoDetalle = document.getElementById("producto-detalle");
    contenedorProductoDetalle.textContent = "Producto no encontrado.";
  }
  const carruselMiniaturas = document.createElement("div");
  carruselMiniaturas.className = "carousel-indicators";
  carrusel.appendChild(carruselMiniaturas);

  producto.imagenes.forEach((imagen, index) => {
    // Miniatura
    const miniatura = document.createElement("img");
    miniatura.src = imagen;
    miniatura.className = index === 0 ? "active" : "";
    miniatura.setAttribute("data-bs-target", "#carrusel");
    miniatura.setAttribute("data-bs-slide-to", index.toString());
    carruselMiniaturas.appendChild(miniatura);
  });
}
//filtrado de productos


// Mostramos los detalles del producto al cargar la página
mostrarDetalleProducto();

