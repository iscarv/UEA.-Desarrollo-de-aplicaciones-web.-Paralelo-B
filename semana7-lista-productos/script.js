// Lista inicial de productos
let productos = [
  {
    nombre: "Vestido",
    precio: "$25.00",
    descripcion: "Vestido ligero y fresco, perfecto para ocasiones casuales o formales."
  },
  {
    nombre: "Abrigo",
    precio: "$45.00",
    descripcion: "Abrigo de lana ideal para climas fríos, con diseño clásico y elegante."
  },
  {
    nombre: "Zapatillas deportivas",
    precio: "$40.00",
    descripcion: "Zapatillas cómodas para correr o caminar."
  }
];

// Función para renderizar los productos en el <ul>
function renderizarProductos() {
  const lista = document.getElementById("product-list");
  lista.innerHTML = ""; // Limpia la lista actual

  productos.forEach((producto) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${producto.nombre}</strong><br>
                    Precio: ${producto.precio}<br>
                    <em>${producto.descripcion}</em>`;
    lista.appendChild(li);
  });
}

// Evento para agregar un nuevo producto
document.getElementById("add-product").addEventListener("click", () => {
  const nuevoProducto = {
    nombre: "Nuevo Producto",
    precio: "$00.00",
    descripcion: "Descripción del nuevo producto."
  };
  productos.push(nuevoProducto);
  renderizarProductos();
});

// Renderizar productos al cargar la página
window.addEventListener("DOMContentLoaded", renderizarProductos);
