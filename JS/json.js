
document.addEventListener("DOMContentLoaded", () => {

    // Cargar datos desde el archivo JSON
  

  const contenedor = document.getElementById("tarjetas-container");
  const buscador = document.getElementById("buscador");
  const form = document.getElementById("form-buscador");
  const botones = document.querySelectorAll(".filtro-btn");

  let filtroCategoria = "todas";

  function mostrarTarjetas(empresasFiltradas) {
    contenedor.innerHTML = "";
    empresasFiltradas.forEach(empresa => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta");
      tarjeta.dataset.categoria = empresa.categoria.toLowerCase();

      const img = document.createElement("img");
      img.src = empresa.fotoPerfil;
      img.alt = empresa.nombre;

      const tag = document.createElement("span");
      tag.classList.add("categoria-tag");
      tag.textContent = empresa.categoria;

      const titulo = document.createElement("h2");
      titulo.classList.add("titulo");
      titulo.textContent = empresa.nombre;

      const desc = document.createElement("p");
      desc.textContent = empresa.descripcionCorta;

      const boton = document.createElement("button");
      boton.textContent = "Ver Más";
      boton.addEventListener("click", () => alert(empresa.descripcionLarga));

      tarjeta.appendChild(img);
      tarjeta.appendChild(tag);
      tarjeta.appendChild(titulo);
      tarjeta.appendChild(desc);
      tarjeta.appendChild(boton);

      contenedor.appendChild(tarjeta);
    });
  }

  function aplicarFiltros() {
    const texto = buscador.value.toLowerCase();
    const filtradas = empresas.filter(emp => {
      const coincideCategoria = filtroCategoria === "todas" || emp.categoria.toLowerCase() === filtroCategoria;
      const coincideTexto = Object.values(emp).some(valor => {
        if (typeof valor === "string" || typeof valor === "number" || typeof valor === "boolean") {
          return valor.toString().toLowerCase().includes(texto);
        }
        return false;
      });
      return coincideCategoria && coincideTexto;
    });
    mostrarTarjetas(filtradas);
  }

  // Prevenir submit del formulario
  form.addEventListener("submit", e => e.preventDefault());

  // Escucha del buscador
  buscador.addEventListener("input", aplicarFiltros);

  // Escucha de botones de categoría
  botones.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      filtroCategoria = btn.dataset.categoria.toLowerCase();
      aplicarFiltros();
    });
  });

  // Mostrar todas al inicio
  mostrarTarjetas(empresas);
});

