document.addEventListener('DOMContentLoaded', async () => {
  const contenedor = document.getElementById('contenedor-productos-categorias');
  const productos = await obtenerProductosCategorias("blusa");

const productosArray=JSON.parse(productos);

for (const p of productosArray) {
    
const card = document.createElement('div');
    card.className = "col-md-4";
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <h5 class="card-title">${p.img}</h5>
          <h5 class="card-title">${p.nombre}</h5>
          <h6 class="card-title">${p.categoria}</h5>
          <p class="card-text">${p.descripcion}</p>
          <p class="fw-bold">${p.precio.toFixed(2)} €</p>
          <a href="producto.html?id=${p.id}" class="btn btn-primary">Ver detalle</a>
        </div>
      </div>
    `;

    //Añadir el elemento al html
    contenedor.appendChild(card);


}



   Document.getElementsByClass("card").style="color:red";
   Document.getElementsByClass("card-text").style="color:green";
   Document.getElementsByClass("card-text").style="color:green";


});
