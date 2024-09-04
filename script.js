const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const iframe = document.getElementById('iframe');
const tabs = document.querySelectorAll('.tab');

// Al hacer clic en el botón de buscar
searchBtn.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        iframe.src = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});

// Cambiar entre pestañas simuladas
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Lógica básica para cambiar el contenido según la pestaña
        if (tab.textContent === 'Inicio') {
            iframe.src = 'https://www.example.com';
        } else if (tab.textContent === 'Juegos') {
            iframe.src = 'https://store.steampowered.com/';
        } else if (tab.textContent === 'Twitch') {
            iframe.src = 'https://www.twitch.tv/';
        } else if (tab.textContent === 'Discord') {
           
