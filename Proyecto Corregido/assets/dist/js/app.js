document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-item a');
  const content = document.getElementById('content');

  // Función para cargar contenido dinámico
  async function loadContent(page) {
    console.log(`Intentando cargar página: ../assets/pages/${page}.html`); // Ruta corregida
    try {
      const response = await fetch(`../assets/pages/${page}.html`); // Ruta relativa desde js/
      if (!response.ok) {
        console.error(`Error al cargar la página: ${response.status} ${response.statusText}`);
        throw new Error('Página no encontrada');
      }
      const html = await response.text();
      content.innerHTML = html;

      // Cerrar el menú lateral después de cargar el contenido
      closeSidebar();
    } catch (error) {
      console.error(`Error al cargar la página: ${error.message}`);
      content.innerHTML = `<h2>Error</h2><p>${error.message}</p>`;
    }
  }

  // Función para cerrar el menú lateral
  function closeSidebar() {
    const sidebar = document.querySelector('#sidebarMenu');
    const backdrop = document.querySelector('.offcanvas-backdrop');

    if (sidebar && sidebar.classList.contains('show')) {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(sidebar);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }

    if (backdrop) {
      backdrop.remove();
    }
  }

  // Agregar eventos a los enlaces del menú
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Remover clase "active" de todos los enlaces
      navLinks.forEach(navLink => navLink.classList.remove('active'));

      // Añadir clase "active" al enlace seleccionado
      link.classList.add('active');

      // Obtener el atributo data-page del enlace seleccionado
      const page = link.getAttribute('data-page');

      // Cargar el contenido correspondiente
      if (page) {
        loadContent(page);
      } else {
        console.warn('El enlace no tiene un atributo data-page válido.');
      }
    });
  });

  // Cargar el contenido inicial (Dashboard)
  loadContent('Bienvenida');
});