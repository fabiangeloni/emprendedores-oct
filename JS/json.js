document.addEventListener("DOMContentLoaded", () => {

  const contenedor = document.getElementById("tarjetas-container");
  const buscador = document.getElementById("buscador");
  const form = document.getElementById("form-buscador");
  const botones = document.querySelectorAll(".filtro-btn");

  let empresas = [];
  let filtroCategoria = "todas";

  function mostrarTarjetas(empresasFiltradas) {
  contenedor.innerHTML = "";

  // Mezclar aleatoriamente
  const mezcladas = [...empresasFiltradas];
  for (let i = mezcladas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mezcladas[i], mezcladas[j]] = [mezcladas[j], mezcladas[i]];
  }

  // Mostrar las tarjetas
  mezcladas.forEach(empresa => {
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

  // Cargar JSON externo
  fetch("json/empresas.json")
    .then(response => response.json())
    .then(data => {
      empresas = data;

      // Mostrar todas las tarjetas al inicio
      mostrarTarjetas(empresas);

      // Escucha de botones de categoría (ahora dentro de .then para tener 'empresas')
      botones.forEach(btn => {
        btn.addEventListener("click", e => {
          e.preventDefault();
          filtroCategoria = btn.dataset.categoria.toLowerCase();
          aplicarFiltros();
        });
      });
    })
    .catch(error => console.error("Error al cargar el JSON:", error));

});
