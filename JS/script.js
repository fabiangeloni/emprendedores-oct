
        // Esperar a que cargue el DOM
        document.addEventListener('DOMContentLoaded', function () {

            /* === MEN� HAMBURGUESA === */
            const btnHamburger = document.getElementById('btnHamburger');
            const headerNav = document.getElementById('headerNav');
            const menuOverlay = document.getElementById('menuOverlay');

            // Abrir/cerrar men�
            if (btnHamburger) {
                btnHamburger.addEventListener('click', function () {
                    btnHamburger.classList.toggle('active');
                    headerNav.classList.toggle('active');
                    menuOverlay.classList.toggle('active');
                    document.body.classList.toggle('menu-open');
                });
            }

            // Cerrar al hacer clic en overlay
            if (menuOverlay) {
                menuOverlay.addEventListener('click', function () {
                    btnHamburger.classList.remove('active');
                    headerNav.classList.remove('active');
                    menuOverlay.classList.remove('active');
                    document.body.classList.remove('menu-open');
                });
            }

            // Cerrar al hacer clic en un link
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function () {
                    btnHamburger.classList.remove('active');
                    headerNav.classList.remove('active');
                    menuOverlay.classList.remove('active');
                    document.body.classList.remove('menu-open');
                });
            });

            /* === B�SQUEDA M�VIL === */
            const btnSearchMobile = document.getElementById('btnSearchMobile');
            const searchMobile = document.getElementById('searchMobile');
            const btnCloseMobile = document.getElementById('btnCloseMobile');

            // Abrir b�squeda m�vil
            if (btnSearchMobile) {
                btnSearchMobile.addEventListener('click', function () {
                    searchMobile.classList.add('active');
                    setTimeout(() => {
                        document.querySelector('.search-input-mobile').focus();
                    }, 300);
                });
            }

            // Cerrar b�squeda m�vil
            if (btnCloseMobile) {
                btnCloseMobile.addEventListener('click', function () {
                    searchMobile.classList.remove('active');
                });
            }

            /* === HEADER STICKY CON EFECTO SCROLL === */
            const header = document.querySelector('.header-profesional');
            let lastScroll = 0;

            window.addEventListener('scroll', function () {
                const currentScroll = window.pageYOffset;

                // Agregar clase cuando se hace scroll
                if (currentScroll > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }

                lastScroll = currentScroll;
            });

            /* === REALIZAR B�SQUEDA === */
            function realizarBusqueda(input) {
                const termino = input.value.trim();
                if (termino !== '') {
                    console.log('Buscando:', termino);
                    // Aqu� puedes redirigir o filtrar
                    window.location.href = `index2.html?buscar=${encodeURIComponent(termino)}`;
                }
            }

            // B�squeda desktop
            const searchBtnDesktop = document.querySelector('.header-search-desktop .search-btn');
            const searchInputDesktop = document.querySelector('.header-search-desktop .search-input');

            if (searchBtnDesktop && searchInputDesktop) {
                searchBtnDesktop.addEventListener('click', () => realizarBusqueda(searchInputDesktop));
                searchInputDesktop.addEventListener('keypress', function (e) {
                    if (e.key === 'Enter') realizarBusqueda(searchInputDesktop);
                });
            }

            // B�squeda m�vil
            const searchBtnMobile = document.querySelector('.search-btn-mobile');
            const searchInputMobile = document.querySelector('.search-input-mobile');

            if (searchBtnMobile && searchInputMobile) {
                searchBtnMobile.addEventListener('click', () => realizarBusqueda(searchInputMobile));
                searchInputMobile.addEventListener('keypress', function (e) {
                    if (e.key === 'Enter') realizarBusqueda(searchInputMobile);
                });
            }
        });
  