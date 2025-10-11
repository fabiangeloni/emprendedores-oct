document.addEventListener("DOMContentLoaded", () => {
    const btnSearch = document.getElementById("btnSearchMobile");
    const mobileSearch = document.getElementById("mobileSearch");
    const buscador = document.querySelector("#mobileSearch input");

    // Slide toggle del buscador móvil
    btnSearch.addEventListener("click", () => {
        mobileSearch.classList.toggle("show");

        // Si se muestra, hacemos focus en el input
        if (mobileSearch.classList.contains("show")) {
            setTimeout(() => buscador.focus(), 400);
        }
    });
});
