document.addEventListener('DOMContentLoaded', function() {
    // Datos de noticias (simulando un archivo JSON externo)
    const noticiasData = [
        {
            titulo: "Nueva actualización de servicios",
            fecha: "2024-01-15",
            contenido: "Hemos mejorado nuestros servicios con las últimas tecnologías del mercado."
        },
        {
            titulo: "Lanzamiento de nueva plataforma",
            fecha: "2024-01-10",
            contenido: "Presentamos nuestra nueva plataforma digital con funcionalidades avanzadas."
        },
        {
            titulo: "Reconocimiento internacional",
            fecha: "2024-01-05",
            contenido: "Recibimos el premio a la innovación tecnológica 2024."
        },
        {
            titulo: "Nuevos miembros en el equipo",
            fecha: "2024-01-01",
            contenido: "Damos la bienvenida a nuevos talentos que fortalecerán nuestro equipo."
        }
    ];

    const noticiasContainer = document.getElementById('noticias-container');
    
    noticiasData.forEach(noticia => {
        const noticiaCard = document.createElement('div');
        noticiaCard.className = 'noticia-card';
        
        const fecha = new Date(noticia.fecha).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        noticiaCard.innerHTML = `
            <h3>${noticia.titulo}</h3>
            <p class="fecha">${fecha}</p>
            <p>${noticia.contenido}</p>
        `;
        
        noticiasContainer.appendChild(noticiaCard);
    });

    // Cargar servicios
    const serviciosContainer = document.getElementById('servicios');
    const servicios = [
        { icono: '💻', titulo: 'Desarrollo Web', descripcion: 'Sitios web modernos y responsivos' },
        { icono: '📱', titulo: 'Apps Móviles', descripcion: 'Aplicaciones nativas y multiplataforma' },
        { icono: '🎨', titulo: 'Diseño UX/UI', descripcion: 'Experiencias de usuario únicas' },
        { icono: '📊', titulo: 'Marketing Digital', descripcion: 'Estrategias para hacer crecer tu negocio' }
    ];

    servicios.forEach(servicio => {
        const servicioDiv = document.createElement('div');
        servicioDiv.className = 'servicio-item';
        servicioDiv.innerHTML = `
            <i>${servicio.icono}</i>
            <h3>${servicio.titulo}</h3>
            <p>${servicio.descripcion}</p>
        `;
        serviciosContainer.appendChild(servicioDiv);
    });
});