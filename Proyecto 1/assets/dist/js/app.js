document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-item a');
  const content = document.getElementById('content');

  // Función para cargar contenido dinámico
  async function loadContent(page) {
    console.log(`Intentando cargar página: ../assets/pages/${page}.html`);
    try {
      const response = await fetch(`../assets/pages/${page}.html`);
      if (!response.ok) {
        throw new Error('Página no encontrada');
      }
      const html = await response.text();
      content.innerHTML = html;

      // Llamar a la función para mostrar el nombre de usuario
      showUsername();

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

  // Función para mostrar el nombre de usuario
  function showUsername() {
    const username = localStorage.getItem("username");
    const usernameElement = document.getElementById("username");
    if (usernameElement) {
      usernameElement.textContent = username || "Invitado";
    } else {
      console.warn("El elemento con ID 'username' no existe en el DOM.");
    }
  }

  
  // Agregar eventos a los enlaces del menú
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.classList.contains('logout-link')) {
        e.preventDefault(); // Evitar la redirección inmediata

        // Mostrar SweetAlert2 con diseño personalizado
        Swal.fire({
          title: "¿Estás seguro de que deseas salir?",
          text: "Serás redirigido a la página de inicio de sesión.",
          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff url(/images/trees.png)",
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `,
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí, salir",
          cancelButtonText: "Cancelar"
        }).then((result) => {
          if (result.isConfirmed) {
            // Limpiar el nombre de usuario del localStorage
            localStorage.removeItem("username");

            // Redirigir al login
            window.location.href = '../Login.html';
          }
        });
        return;
      }

      e.preventDefault();
      navLinks.forEach(navLink => navLink.classList.remove('active'));
      link.classList.add('active');
      const page = link.getAttribute('data-page');
      if (page) {
        loadContent(page);
      } else {
        console.warn('El enlace no tiene un atributo data-page válido.');
      }
    });
  });

  // Cargar el contenido inicial
  loadContent('Bienvenida');
});