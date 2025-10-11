document.addEventListener("DOMContentLoaded", () => {
  // Referencias DOM
  const contenedor = document.getElementById("tarjetas-container");
  const buscador = document.getElementById("buscador");
  const form = document.getElementById("form-buscador");
  const botones = document.querySelectorAll(".filtro-btn");
  const tituloTarjetas = document.getElementById("titulo-tarjetas");

  // Validación de elementos DOM
  if (!contenedor || !buscador || !form || !tituloTarjetas) {
    console.error('Faltan elementos clave en el DOM');
    return;
  }
  console.log('Todos los elementos DOM existen');

  // Variables globales
  let empresas = [];
  let filtroCategoria = "todas";

  // Función que muestra las tarjetas
  function mostrarTarjetas(empresasFiltradas) {
    console.log('Empresas a mostrar:', empresasFiltradas.length, empresasFiltradas);
    contenedor.innerHTML = "";

    // Actualizar contador
    if (tituloTarjetas) {
      tituloTarjetas.textContent = `Mostrando ${empresasFiltradas.length} emprendedor${empresasFiltradas.length !== 1 ? "es" : ""}`;
    }

    // Mezclar aleatoriamente
    const mezcladas = [...empresasFiltradas];
    for (let i = mezcladas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [mezcladas[i], mezcladas[j]] = [mezcladas[j], mezcladas[i]];
    }

    mezcladas.forEach(empresa => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta");
      tarjeta.dataset.categoria = empresa.categoria ? empresa.categoria.toLowerCase() : "";

      const img = document.createElement("img");
      img.src = empresa.fotoPerfil || 'img/default.jpg';
      img.alt = empresa.nombre || 'Sin nombre';

      const tag = document.createElement("span");
      tag.classList.add("categoria-tag");
      tag.textContent = empresa.categoria || 'Sin categoría';

      const titulo = document.createElement("h2");
      titulo.classList.add("titulo");
      titulo.textContent = empresa.nombre || 'Sin nombre';

      const desc = document.createElement("p");
      desc.textContent = empresa.descripcionCorta || '';

      const boton = document.createElement("button");
      boton.textContent = "Ver Más";
      boton.addEventListener("click", () => {
        window.location.href = `empresa.html?id=${empresa.id}`;
      });

      tarjeta.append(img, tag, titulo, desc, boton);
      contenedor.appendChild(tarjeta);
    });
  }

  // Función de filtrado
  function aplicarFiltros() {
    const texto = buscador.value.toLowerCase();
    console.log('Texto a buscar:', texto, 'Categoría:', filtroCategoria);
    const filtradas = empresas.filter(emp => {
      const coincideCategoria = filtroCategoria === "todas" || (emp.categoria && emp.categoria.toLowerCase() === filtroCategoria);
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

  // Cargar JSON y luego inicializar todo
  fetch("json/empresas.json")
    .then(response => {
      if (!response.ok) throw new Error("No se pudo cargar el JSON");
      return response.json();
    })
    .then(data => {
      empresas = data;
      console.log('Empresas cargadas del JSON:', empresas.length, empresas);

      // Mostrar todas las tarjetas al inicio
      mostrarTarjetas(empresas);

      // Submit del formulario
      form.addEventListener("submit", e => {
        e.preventDefault();
        console.log('Formulario enviado');
        aplicarFiltros();
      });

      // Filtrado al escribir
      buscador.addEventListener("input", () => {
        console.log('Input en buscador');
        aplicarFiltros();
      });

      // Botones de categoría
      botones.forEach(btn => {
        btn.addEventListener("click", e => {
          e.preventDefault();
          filtroCategoria = btn.dataset.categoria ? btn.dataset.categoria.toLowerCase() : "todas";
          console.log('Botón de categoría clickeado:', filtroCategoria);
          aplicarFiltros();
        });
      });
    })
    .catch(error => {
      console.error("Error al cargar el JSON:", error);
      tituloTarjetas.textContent = "No se pudieron cargar los emprendedores.";
    });
});