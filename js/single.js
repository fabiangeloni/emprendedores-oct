document.addEventListener("DOMContentLoaded", () => {
  // 1️⃣ Obtener el parámetro ?id= de la URL
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    document.body.innerHTML = "<p>No se especificó ningún emprendimiento.</p>";
    return;
  }

  // 2️⃣ Cargar el JSON de empresas
  fetch("json/empresas.json")
    .then(response => response.json())
    .then(data => {
      const empresa = data.find(e => e.id === id);

      if (!empresa) {
        document.body.innerHTML = "<p>Emprendimiento no encontrado.</p>";
        return;
      }

      // 3️⃣ Cargar datos principales
      document.getElementById("fotoPerfil").src = empresa.fotoPerfil;
      document.getElementById("nombre").textContent = empresa.nombre;
      document.getElementById("descripcionCorta").textContent = empresa.descripcionCorta;
      document.getElementById("descripcionLarga").textContent = empresa.descripcionLarga;

      // 4️⃣ Contactos (ocultar si no existen)
      const tel = document.getElementById("tel");
      const mapa = document.getElementById("mapa");
      const insta = document.getElementById("insta");
      const face = document.getElementById("face");
      const wsp = document.getElementById("wsp");

      if (empresa.telefono) {
        tel.href = `tel:${empresa.telefono}`;
        wsp.href = `https://wa.me/54${empresa.telefono}`;
      } else {
        tel.style.display = "none";
        wsp.style.display = "none";
      }

      if (empresa.direccion) {
        const direccionURL = encodeURIComponent(empresa.nombre + " " + empresa.direccion);
        mapa.href = `https://www.google.com/maps?q=${direccionURL}`;
      } else {
        mapa.style.display = "none";
      }

      if (empresa.instagram) {
        insta.href = empresa.instagram;
      } else {
        insta.style.display = "none";
      }

      if (empresa.facebook) {
        face.href = empresa.facebook;
      } else {
        face.style.display = "none";
      }

      // 5️⃣ Cargar carrusel
      const track = document.getElementById("carruselTrack");
      track.innerHTML = "";

      if (empresa.fotos && empresa.fotos.length > 0) {
        empresa.fotos.forEach(foto => {
          const slide = document.createElement("div");
          slide.classList.add("carrusel-slide");
          slide.innerHTML = `<img src="${foto}" alt="${empresa.nombre}">`;
          track.appendChild(slide);
        });
      }
    })
    .catch(error => {
      console.error("Error al cargar los datos:", error);
      document.body.innerHTML = "<p>Error al cargar los datos del emprendimiento.</p>";
    });
});
