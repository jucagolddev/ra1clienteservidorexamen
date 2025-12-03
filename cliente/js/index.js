document.addEventListener('DOMContentLoaded', async () => {
  const contenedor = document.getElementById('contenedor-productos');
  const productos = await obtenerProductos();

  // EJERCICIO 3: Mostrar solo 3 productos en la página de inicio
  var contador = 0;
  productos.forEach((p) => {
    // Solo mostrar los primeros 3 productos
    if (contador <= 2) {
      const card = document.createElement("div");
      card.className = "col-md-4";
      card.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${p.img}" class="card-img-top" alt="${
        p.nombre
      }" style="height: 200px; object-fit: cover;">
          <div class="card-body text-center">
            <span class="badge bg-success mb-2">${p.categoria}</span>
            <h5 class="card-title">${p.nombre}</h5>
            <p class="card-text">${p.descripcion}</p>
            <p class="fw-bold">${p.precio.toFixed(2)} €</p>
            <a href="producto.html?id=${
              p.id
            }" class="btn btn-primary">Ver detalle</a>
          </div>
        </div>
      `;

      // Añadir el elemento al DOM
      contenedor.appendChild(card);
    }
    contador++;
  });
});
