// Cargar productos cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("contenedor-productos");
  const productos = await obtenerProductos();

  // Renderizar cada producto
  productos.forEach((p) => {
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
  });

  // EJERCICIO 1: Modificar estilos de las tarjetas mediante JavaScript
  modificarEstilosTarjetas();
});

// EJERCICIO 1: Función para modificar los estilos de las tarjetas
function modificarEstilosTarjetas() {
  // Seleccionar todas las tarjetas
  const cards = document.querySelectorAll(".card");
  const cardTitles = document.querySelectorAll(".card-title");
  const cardTexts = document.querySelectorAll(".card-text");

  // Modificar el estilo de las tarjetas
  cards.forEach((card) => {
    card.style.backgroundColor = "#f8f9fa";
    card.style.border = "2px solid #007bff";
    card.style.borderRadius = "10px";
    card.style.transition = "transform 0.3s ease";

    // Añadir efecto hover
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 8px 16px rgba(0,123,255,0.3)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "";
    });
  });

  // Modificar el estilo de los títulos
  cardTitles.forEach((title) => {
    title.style.color = "#007bff";
    title.style.fontSize = "1.5rem";
    title.style.fontWeight = "bold";
    title.style.textTransform = "uppercase";
  });

  // Modificar el estilo de los textos
  cardTexts.forEach((text) => {
    text.style.color = "#6c757d";
    text.style.fontSize = "0.95rem";
    text.style.fontStyle = "italic";
  });
}
