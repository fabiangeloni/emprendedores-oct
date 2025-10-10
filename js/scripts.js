



fetch('json/empresas.json')
  .then(response => response.json())
  .then(empresas => {

// === ELEMENTOS BASE ===
const contenedor = document.getElementById("tarjetas-container");
const titulo = document.getElementById("titulo-tarjetas");});

// === RENDER DE TARJETAS ===
empresas.forEach(empresa => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="tarjeta">
      <img src="${empresa.fotos[0]}" alt="${empresa.nombre}">
      <span class="categoria-tag">${empresa.categoria}</span>
      <h2 class="titulo">${empresa.nombre}</h2>
      <p>${empresa.descripcionCorta}</p>
      <button>Ver Más</button>
    </div>
  `;
  contenedor.appendChild(card);
});
  
// === FUNCIONES ===
function mostrarTodas() {
  contenedor.querySelectorAll(".card").forEach(card => card.style.display = "block");
  titulo.textContent = "Todos los emprendedores";
}

// === FILTRO POR ICONOS DEL MENÚ ===
const botonesFiltro = document.querySelectorAll(".sidebar-filtros-iconos .filtro-btn");

botonesFiltro.forEach(boton => {
  boton.addEventListener("click", (e) => {
    e.preventDefault();

    // Quitar estado activo a todos
    botonesFiltro.forEach(b => b.classList.remove("activo"));
    // Agregar al actual
    boton.classList.add("activo");

    const categoriaSeleccionada = boton.getAttribute("data-categoria");
    const cards = contenedor.querySelectorAll(".card");

    if (categoriaSeleccionada === "todas") {
      mostrarTodas();
      return;
    }

    cards.forEach(card => {
      const categoria = card.querySelector(".categoria-tag").textContent.trim().toLowerCase();
      card.style.display = (categoria === categoriaSeleccionada.toLowerCase()) ? "block" : "none";
    });

    // Actualizar título
    const nombreCat = categoriaSeleccionada.charAt(0).toUpperCase() + categoriaSeleccionada.slice(1);
    titulo.textContent = `Mostrando categoría: ${nombreCat}`;
  });
});

// === BUSCADOR POR TEXTO ===
const formBuscar = document.getElementById("form-buscar");
const buscador = document.getElementById("buscador");

formBuscar.addEventListener("submit", (e) => {
  e.preventDefault();
  const texto = buscador.value.toLowerCase().trim();
  const cards = contenedor.querySelectorAll(".card");
  let huboCoincidencia = false;

  cards.forEach(card => {
  const textoCard = card.textContent.toLowerCase(); // todo el contenido dentro de .card

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

// === TARJETAS ALEATORIAS Y POR CATEGORÍA ===
function mostrarAleatorias(contenedorId, cantidad) {
  const cont = document.getElementById(contenedorId);
  const aleatorias = [...empresas].sort(() => 0.5 - Math.random()).slice(0, cantidad);

  aleatorias.forEach(empresa => {
    const card = document.createElement("div");
    card.classList.add("cardchica");
    card.innerHTML = `
      <div class="img-cardchica"><img src="${empresa.fotos[0]}" alt="${empresa.nombre}"></div>
      <div class="cardchica-perfil"><img src="${empresa.fotoPerfil}" alt="Perfil"></div>
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
  const filtradas = empresas.filter(e => e.categoria === categoria);
  filtradas.forEach(empresa => {
    const card = document.createElement("div");
    card.classList.add("cardchica");
    card.innerHTML = `
      <div class="img-cardchica"><img src="${empresa.fotos[0]}" alt="${empresa.nombre}"></div>
      <div class="cardchica-perfil"><img src="${empresa.fotoPerfil}" alt="Perfil"></div>
      <div class="cardchica-content">
        <h3>${empresa.nombre}</h3>
        <a href="#" class="btn">Ver más</a>
      </div>
    `;
    cont.appendChild(card);
  });
}

// Ejecutar las secciones
mostrarAleatorias("aleatorias", 10);
mostrarCategoria("gastronomia", "gastronomicos");
mostrarCategoria("servicios", "servicios");
mostrarCategoria("artesanos", "artesanos");

// Texto inicial
titulo.textContent = "Todos los emprendedores";






