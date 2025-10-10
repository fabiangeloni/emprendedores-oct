document.addEventListener("DOMContentLoaded", () => {

  // Obtener el ID de la empresa desde la URL
  const params = new URLSearchParams(window.location.search);
  const empresaId = params.get("id");

  if (!empresaId) return; // Si no hay id, no hacemos nada

  // Seleccionamos los elementos HTML
  const logo = document.querySelector(".perfil .logo img");
  const nombreElem = document.querySelector(".nombre-emprendimiento h2");
  const telefonoLink = document.querySelector(".iconos-contacto a[href^='tel:']");
  const mapLink = document.querySelector(".iconos-contacto a[href*='maps']");
  const instagramLink = document.querySelector(".iconos-contacto a[href*='instagram']");
  const facebookLink = document.querySelector(".iconos-contacto a[href*='facebook']");
  const contactoWsp = document.querySelector(".boton-wsp a");
  const breve = document.querySelector(".descripcion .breve");
  const larga = document.querySelector(".descripcion .larga");
  const carruselTrack = document.getElementById("carruselTrack");

  // Cargar JSON
  fetch("json/empresas.json")
    .then(res => res.json())
    .then(empresas => {
      // Buscar empresa por id
      const empresa = empresas.find(e => e.id === empresaId);
      if (!empresa) return console.error("Empresa no encontrada");

      // Datos básicos
      logo.src = empresa.fotoPerfil;
      logo.alt = empresa.nombre;
      nombreElem.textContent = empresa.nombre;

      // Redes y contacto (ocultar si no existe)
      if (empresa.telefono) {
        telefonoLink.href = `tel:${empresa.telefono}`;
        telefonoLink.style.display = "inline-block";
      } else telefonoLink.style.display = "none";

      if (empresa.direccion) {
        mapLink.href = `https://www.google.com/maps?q=${encodeURIComponent(empresa.direccion)}`;
        mapLink.style.display = "inline-block";
      } else mapLink.style.display = "none";

      if (empresa.instagram) {
        instagramLink.href = empresa.instagram;
        instagramLink.style.display = "inline-block";
      } else instagramLink.style.display = "none";

      if (empresa.facebook) {
        facebookLink.href = empresa.facebook;
        facebookLink.style.display = "inline-block";
      } else facebookLink.style.display = "none";

      if (empresa.telefono) {
        contactoWsp.href = `https://wa.me/${empresa.telefono.replace(/\D/g, '')}`;
        contactoWsp.style.display = "inline-block";
      } else contactoWsp.style.display = "none";

      // Descripciones
      breve.textContent = empresa.descripcionCorta;
      larga.textContent = empresa.descripcionLarga;

      // Carrusel de imágenes
      carruselTrack.innerHTML = "";
      empresa.fotos.forEach((foto, i) => {
        const slide = document.createElement("div");
        slide.classList.add("carrusel-slide");
        const img = document.createElement("img");
        img.src = foto;
        img.alt = `Imagen ${i+1}`;
        slide.appendChild(img);
        carruselTrack.appendChild(slide);
      });

    })
    .catch(err => console.error("Error al cargar JSON:", err));

});
