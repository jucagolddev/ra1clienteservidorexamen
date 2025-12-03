// Cargar producto individual cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("producto-detalle");

  // Obtener el ID del producto de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const productoId = urlParams.get("id");

  if (!productoId) {
    contenedor.innerHTML = `
      <div class="alert alert-warning text-center">
        <h4>No se especificó un producto</h4>
        <a href="productos.html" class="btn btn-primary mt-3">Ver todos los productos</a>
      </div>
    `;
    return;
  }

  try {
    // Obtener el producto específico
    const producto = await obtenerProducto(productoId);

    if (producto.error) {
      contenedor.innerHTML = `
        <div class="alert alert-danger text-center">
          <h4>Producto no encontrado</h4>
          <a href="productos.html" class="btn btn-primary mt-3">Ver todos los productos</a>
        </div>
      `;
      return;
    }

    // Mostrar el detalle del producto
    contenedor.innerHTML = `
      <div class="row">
        <div class="col-md-6">
          <img src="${producto.img}" class="img-fluid rounded" alt="${
      producto.nombre
    }">
        </div>
        <div class="col-md-6">
          <h1>${producto.nombre}</h1>
          <span class="badge bg-success mb-3">${producto.categoria}</span>
          <p class="lead">${producto.descripcion}</p>
          <h3 class="text-primary">${producto.precio.toFixed(2)} €</h3>
          <button id="agregar-carrito" class="btn btn-success btn-lg mt-3">
            <i class="bi bi-cart-plus"></i> Añadir al carrito
          </button>
          <a href="productos.html" class="btn btn-outline-secondary btn-lg mt-3 ms-2">
            Volver a productos
          </a>
        </div>
      </div>
    `;

    // Añadir funcionalidad al botón de agregar al carrito
    document.getElementById("agregar-carrito").addEventListener("click", () => {
      agregarAlCarrito(producto);
    });
  } catch (error) {
    contenedor.innerHTML = `
      <div class="alert alert-danger text-center">
        <h4>Error al cargar el producto</h4>
        <p>${error.message}</p>
        <a href="productos.html" class="btn btn-primary mt-3">Ver todos los productos</a>
      </div>
    `;
  }
});

// Función para agregar producto al carrito
function agregarAlCarrito(producto) {
  // Obtener carrito actual del localStorage
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Agregar el producto al carrito
  carrito.push(producto);

  // Guardar en localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Mostrar mensaje de confirmación
  alert(`${producto.nombre} ha sido añadido al carrito`);

  // Opcional: redirigir al carrito
  // window.location.href = 'carrito.html';
}
