



// === JSON embebido ===
const empresas = [
  {
    "nombre": "Onplot",
    "empresa": "Onplot",
    "direccion": "51 N°362",
    "telefono": "2473409044",
    "fotoPerfil": "https://picsum.photos/200/200?random=22",
    "fotos": [
      "https://picsum.photos/200/200?random=23",
      "https://picsum.photos/200/200?random=24",
      "https://picsum.photos/200/200?random=25",
      "https://picsum.photos/200/200?random=26",
      "https://picsum.photos/200/200?random=27"
    ],
    "facebook": "https://www.facebook.com/dymcalcos",
    "instagram": "https://www.instagram.com/onplotgrafica/",
    "descripcionCorta": "Gráfica integral y cartelería",
    "descripcionLarga": "En Onplot Colón realizamos trabajos integrales de diseño, cartelería, ploteos e impresiones de gran formato. Trabajamos para empresas, comercios y particulares con atención personalizada.",
    "categoria": "comerciantes"
  },
  {
    "nombre": "La Estrella",
    "empresa": "La Estrella",
    "direccion": "51 N°362",
    "telefono": "2473467675",
    "fotoPerfil": "https://picsum.photos/200/200?random=31",
    "fotos": [
      "https://picsum.photos/200/200?random=32",
      "https://picsum.photos/200/200?random=33",
      "https://picsum.photos/200/200?random=34",
      "https://picsum.photos/200/200?random=35",
      "https://picsum.photos/200/200?random=36"
    ],
    "facebook": "https://www.facebook.com/laestrella",
    "instagram": "https://www.instagram.com/laestrella.colon/",
    "descripcionCorta": "Artículos de limpieza, bazar y blanquería",
    "descripcionLarga": "Venta de artículos de limpieza sueltos y de marca, productos probados de gran calidad. También bazar y blanquería: manteles, mantas, cortinas, decoración y más.",
    "categoria": "comerciantes"
  },
  {
    "nombre": "Panadería Delicias",
    "empresa": "Panadería Delicias",
    "direccion": "Calle 10 N°120",
    "telefono": "2473123456",
    "fotoPerfil": "https://picsum.photos/200/200?random=41",
    "fotos": [
      "https://picsum.photos/200/200?random=42",
      "https://picsum.photos/200/200?random=43",
      "https://picsum.photos/200/200?random=44",
      "https://picsum.photos/200/200?random=45",
      "https://picsum.photos/200/200?random=46"
    ],
    "facebook": "https://www.facebook.com/panaderiadelicias",
    "instagram": "https://www.instagram.com/panaderiadelicias/",
    "descripcionCorta": "Panadería y repostería artesanal",
    "descripcionLarga": "Elaboramos pan, facturas y tortas con recetas caseras. Ingredientes frescos y atención personalizada.",
    "categoria": "gastronomicos"
  },
  {
    "nombre": "Café Central",
    "empresa": "Café Central",
    "direccion": "Plaza Principal N°5",
    "telefono": "2473987654",
    "fotoPerfil": "https://picsum.photos/200/200?random=51",
    "fotos": [
      "https://picsum.photos/200/200?random=52",
      "https://picsum.photos/200/200?random=53",
      "https://picsum.photos/200/200?random=54",
      "https://picsum.photos/200/200?random=55",
      "https://picsum.photos/200/200?random=56"
    ],
    "facebook": "https://www.facebook.com/cafecentral",
    "instagram": "https://www.instagram.com/cafecentral/",
    "descripcionCorta": "Café y pastelería",
    "descripcionLarga": "Café Central ofrece desayunos, brunch y pastelería artesanal. Un lugar ideal para disfrutar de un buen café y repostería.",
    "categoria": "gastronomicos"
  },
  {
    "nombre": "Artesanías del Río",
    "empresa": "Artesanías del Río",
    "direccion": "Calle 7 N°45",
    "telefono": "2473678901",
    "fotoPerfil": "https://picsum.photos/200/200?random=61",
    "fotos": [
      "https://picsum.photos/200/200?random=62",
      "https://picsum.photos/200/200?random=63",
      "https://picsum.photos/200/200?random=64",
      "https://picsum.photos/200/200?random=65",
      "https://picsum.photos/200/200?random=66"
    ],
    "facebook": "https://www.facebook.com/artesaniasdelrio",
    "instagram": "https://www.instagram.com/artesaniasdelrio/",
    "descripcionCorta": "Artesanías locales y decorativas",
    "descripcionLarga": "Productos hechos a mano en madera, cerámica y tejidos. Artesanía única y personalizada.",
    "categoria": "artesanos"
  },
  {
    "nombre": "Servicios Eléctricos Ríos",
    "empresa": "Servicios Eléctricos Ríos",
    "direccion": "Calle 15 N°78",
    "telefono": "2473344556",
    "fotoPerfil": "https://picsum.photos/200/200?random=71",
    "fotos": [
      "https://picsum.photos/200/200?random=72",
      "https://picsum.photos/200/200?random=73",
      "https://picsum.photos/200/200?random=74",
      "https://picsum.photos/200/200?random=75",
      "https://picsum.photos/200/200?random=76"
    ],
    "facebook": "https://www.facebook.com/servicioselectricosrios",
    "instagram": "https://www.instagram.com/servicioselectricosrios/",
    "descripcionCorta": "Electricistas certificados",
    "descripcionLarga": "Brindamos servicios eléctricos para hogares y comercios, instalaciones, mantenimiento y reparaciones urgentes.",
    "categoria": "servicios"
  },
  {
    "nombre": "La Casa del Pan",
    "empresa": "La Casa del Pan",
    "direccion": "Av. 9 N°101",
    "telefono": "2473981234",
    "fotoPerfil": "https://picsum.photos/200/200?random=81",
    "fotos": [
      "https://picsum.photos/200/200?random=82",
      "https://picsum.photos/200/200?random=83",
      "https://picsum.photos/200/200?random=84",
      "https://picsum.photos/200/200?random=85",
      "https://picsum.photos/200/200?random=86"
    ],
    "facebook": "https://www.facebook.com/lacasadelpan",
    "instagram": "https://www.instagram.com/lacasadelpan/",
    "descripcionCorta": "Panadería artesanal y cafetería",
    "descripcionLarga": "Panadería y cafetería con panes integrales, dulces y pastelería fresca todos los días.",
    "categoria": "gastronomicos",
    "link": "https://lacasadelpan.com",
  },
  {
    "nombre": "Taller Creativo Mía",
    "empresa": "Taller Creativo Mía",
    "direccion": "Calle 12 N°23",
    "telefono": "2473123987",
    "fotoPerfil": "https://picsum.photos/200/200?random=91",
    "fotos": [
      "https://picsum.photos/200/200?random=92",
      "https://picsum.photos/200/200?random=93",
      "https://picsum.photos/200/200?random=94",
      "https://picsum.photos/200/200?random=95",
      "https://picsum.photos/200/200?random=96"
    ],
    "facebook": "https://www.facebook.com/tallercreativomia",
    "instagram": "https://www.instagram.com/tallercreativomia/",
    "descripcionCorta": "Taller de manualidades y diseño",
    "descripcionLarga": "Clases y productos de manualidades, scrapbooking, y talleres de creatividad para todas las edades.",
    "categoria": "artesanos"
  },
  {
    "nombre": "Servicios de Limpieza Total",
    "empresa": "Servicios de Limpieza Total",
    "direccion": "Av. 5 N°77",
    "telefono": "2473567890",
    "fotoPerfil": "https://picsum.photos/200/200?random=101",
    "fotos": [
      "https://picsum.photos/200/200?random=102",
      "https://picsum.photos/200/200?random=103",
      "https://picsum.photos/200/200?random=104",
      "https://picsum.photos/200/200?random=105",
      "https://picsum.photos/200/200?random=106"
    ],
    "facebook": "https://www.facebook.com/limpiezatotal",
    "instagram": "https://www.instagram.com/limpiezatotal/",
    "descripcionCorta": "Limpieza profesional de hogares y comercios",
    "descripcionLarga": "Ofrecemos limpieza integral de oficinas, casas y locales comerciales, con productos ecológicos y servicio confiable.",
    "categoria": "servicios"
  },
  {
    "nombre": "Gastronomía El Buen Sabor",
    "empresa": "Gastronomía El Buen Sabor",
    "direccion": "Calle 8 N°54",
    "telefono": "2473121122",
    "fotoPerfil": "https://picsum.photos/200/200?random=111",
    "fotos": [
      "https://picsum.photos/200/200?random=112",
      "https://picsum.photos/200/200?random=113",
      "https://picsum.photos/200/200?random=114",
      "https://picsum.photos/200/200?random=115",
      "https://picsum.photos/200/200?random=116"
    ],
    "facebook": "https://www.facebook.com/elbuenesabor",
    "instagram": "https://www.instagram.com/elbuenesabor/",
    "descripcionCorta": "Comida casera y delivery",
    "descripcionLarga": "Platos caseros, menú diario, tortas y catering para eventos. Comida de calidad con servicio rápido y cordial.",
    "categoria": "gastronomicos"
  }
];

// === ELEMENTOS BASE ===
const contenedor = document.getElementById("tarjetas-container");
const titulo = document.getElementById("titulo-tarjetas");

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






