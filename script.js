// Elementos del DOM
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const iframe = document.getElementById('iframe');
const tabs = document.querySelectorAll('.tab');

// Función para actualizar el contenido del iframe
function updateIframe(url) {
    iframe.src = url;
}

// Función para gestionar la búsqueda
searchBtn.addEventListener('click', () => {
    const query = searchInput.value;
    if (query.startsWith('http://') || query.startsWith('https://')) {
        // Si el usuario introduce una URL completa
        updateIframe(query);
    } else if (query.includes('.')) {
        // Si el usuario introduce algo que parece un dominio
        updateIframe(`https://${query}`);
    } else {
        // Realizar una búsqueda en Google si no es una URL
        updateIframe(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
    }
});

// Detectar "Enter" en el campo de búsqueda
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        searchBtn.click();
    }
});

// Cambiar el contenido del iframe cuando se seleccionan pestañas
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Eliminar la clase 'active' de todas las pestañas
        tabs.forEach(t => t.classList.remove('active'));
        // Añadir la clase 'active' a la pestaña seleccionada
        tab.classList.add('active');

        // Cambiar el contenido del iframe basado en la pestaña
        switch (tab.textContent) {
            case 'Inicio':
                updateIframe('https://www.example.com');
                break;
            case 'Juegos':
                updateIframe('https://store.steampowered.com/');
                break;
            case 'Twitch':
                updateIframe('https://www.twitch.tv/');
                break;
            case 'Discord':
                updateIframe('https://discord.com/');
                break;
            default:
                updateIframe('https://www.example.com');
                break;
        }
    });
});

// Inicializar la pestaña "Inicio" como activa
updateIframe('https://www.example.com');

