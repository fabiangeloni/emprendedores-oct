// === CARGA JSON EXTERNO ===
let empresas = [];

fetch("./json/empresas.json")
  .then(response => {
    if (!response.ok) throw new Error("No se pudo cargar el archivo JSON");
    return response.json();
  })
  .then(data => {
    empresas = data;
    inicializar(); // Llama a la función principal cuando los datos están listos
  })
  .catch(error => console.error("Error al cargar empresas:", error));


// === FUNCIÓN PRINCIPAL ===
function inicializar() {
  // --- ELEMENTOS BASE ---
  const contenedor = document.getElementById("tarjetas-container");
  const titulo = document.getElementById("titulo-tarjetas");

  // Limpia contenedor antes de renderizar (por si se vuelve a ejecutar)
  contenedor.innerHTML = "";
console.log(empresas);
  // --- RENDER DE TARJETAS ---
  empresas.forEach(empresa => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="tarjeta">
        <img src="${empresa.fotos?.[0] || 'img/default.jpg'}" alt="${empresa.nombre}">
        <span class="categoria-tag">${empresa.categoria || 'Sin categoría'}</span>
        <h2 class="titulo">${empresa.nombre}</h2>
        <p>${empresa.descripcionCorta || ''}</p>
        ${empresa.delivery ? '<span class="delivery-tag">🚚 Hace envíos</span>' : ''}
        <button>Ver Más</button>
      </div>
    `;

    contenedor.appendChild(card);
  });

  titulo.textContent = "Todos los emprendedores";


  // --- FUNCIONES AUXILIARES ---
  function mostrarTodas() {
    contenedor.querySelectorAll(".card").forEach(card => (card.style.display = "block"));
    titulo.textContent = "Todos los emprendedores";
  }


  // --- FILTRO POR ICONOS ---
  const botonesFiltro = document.querySelectorAll(".sidebar-filtros-iconos .filtro-btn");

  botonesFiltro.forEach(boton => {
    boton.addEventListener("click", e => {
      e.preventDefault();
      botonesFiltro.forEach(b => b.classList.remove("activo"));
      boton.classList.add("activo");

      const categoriaSeleccionada = boton.getAttribute("data-categoria");
      const cards = contenedor.querySelectorAll(".card");

      if (categoriaSeleccionada === "todas") {
        mostrarTodas();
        return;
      }

      cards.forEach(card => {
        const categoria = card.querySelector(".categoria-tag").textContent.trim().toLowerCase();
        card.style.display =
          categoria === categoriaSeleccionada.toLowerCase() ? "block" : "none";
      });

      const nombreCat =
        categoriaSeleccionada.charAt(0).toUpperCase() + categoriaSeleccionada.slice(1);
      titulo.textContent = `Mostrando categoría: ${nombreCat}`;
    });
  });


  // --- BUSCADOR ---
  const formBuscar = document.getElementById("form-buscar");
  const buscador = document.getElementById("buscador");

  formBuscar.addEventListener("submit", e => {
    e.preventDefault();
    const texto = buscador.value.toLowerCase().trim();
    const cards = contenedor.querySelectorAll(".card");
    let huboCoincidencia = false;

    cards.forEach(card => {
      const textoCard = card.textContent.toLowerCase();
      if (textoCard.includes(texto)) {
        card.style.display = "block";
        huboCoincidencia = true;
      } else {
        card.style.display = "none";
      }
    });

    if (!texto) {
      mostrarTodas();
    } else if (huboCoincidencia) {
      titulo.textContent = `Resultados para: "${texto}"`;
    } else {
      titulo.textContent = `No se encontraron resultados para: "${texto}"`;
    }
  });


  // --- ALEATORIAS Y CATEGORÍAS ---
  function mostrarAleatorias(contenedorId, cantidad) {
    const cont = document.getElementById(contenedorId);
    if (!cont) return;
    cont.innerHTML = "";

    const aleatorias = [...empresas].sort(() => 0.5 - Math.random()).slice(0, cantidad);

    aleatorias.forEach(empresa => {
      const card = document.createElement("div");
      card.classList.add("cardchica");
      card.innerHTML = `
        <div class="img-cardchica"><img src="${empresa.fotos?.[0] || 'img/default.jpg'}" alt="${empresa.nombre}"></div>
        <div class="cardchica-perfil"><img src="${empresa.fotoPerfil || 'img/perfil-default.png'}" alt="Perfil"></div>
        <div class="cardchica-content">
          <h3>${empresa.nombre}</h3>
          <a href="#" class="btn">Ver más</a>
        </div>
      `;
      cont.appendChild(card);
    });
  }

  function mostrarCategoria(contenedorId, categoria) {
    const cont = document.getElementById(contenedorId);
    if (!cont) return;
    cont.innerHTML = "";

    const filtradas = empresas.filter(e => e.categoria?.toLowerCase() === categoria.toLowerCase());
    filtradas.forEach(empresa => {
      const card = document.createElement("div");
      card.classList.add("cardchica");
      card.innerHTML = `
        <div class="img-cardchica"><img src="${empresa.fotos?.[0] || 'img/default.jpg'}" alt="${empresa.nombre}"></div>
        <div class="cardchica-perfil"><img src="${empresa.fotoPerfil || 'img/perfil-default.png'}" alt="Perfil"></div>
        <div class="cardchica-content">
          <h3>${empresa.nombre}</h3>
          <a href="#" class="btn">Ver más</a>
        </div>
      `;
      cont.appendChild(card);
    });
  }

  // --- LLAMADAS INICIALES ---
  mostrarAleatorias("aleatorias", 10);
  mostrarCategoria("gastronomia", "gastronomicos");
  mostrarCategoria("servicios", "servicios");
  mostrarCategoria("artesanos", "artesanos");
}
