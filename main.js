const tablero = document.getElementById("tablero-juego");
const btnReiniciar = document.getElementById("btn-reiniciar");
const btnBorrar = document.getElementById("btn-borrar-historial");
const btnIniciar = document.getElementById("btn-iniciar");

// 1. Array anidado con diferentes categorías de figuras
const categoriasFiguras = [
    { nombre: "Animales", items: ['icofont-dog-alt', 'icofont-cat-alt-2', 'icofont-rabbit', 'icofont-fox', 'icofont-bear-face', 'icofont-panda', 'icofont-rhino-head', 'icofont-lion-head', 'icofont-tiger-face', 'icofont-cow-head'] },
    { nombre: "Animals", items: ['icofont-rat', 'icofont-snake', 'icofont-pig', 'icofont-panther', 'icofont-lemur', 'icofont-frog', 'icofont-bat', 'icofont-deer-head', 'icofont-elk', 'icofont-giraffe-head-2'] },
    { nombre: "Frutas", items: ['icofont-apple', 'icofont-banana', 'icofont-watermelon', 'icofont-grapes', 'icofont-strawberry', 'icofont-pineapple', 'icofont-kiwi', 'icofont-mango', 'icofont-cherry', 'icofont-lemon-alt'] },
    { nombre: "Fruts", items: ['icofont-avocado', 'icofont-coconut', 'icofont-corn', 'icofont-fruits', 'icofont-wheat', 'icofont-lemon', 'icofont-honey', 'icofont-cucumber', 'icofont-pear', 'icofont-orange'] },
    { nombre: "Deportes", items: ['icofont-football', 'icofont-basketball', 'icofont-football-american', 'icofont-golf-alt', 'icofont-table-tennis', 'icofont-volleyball', 'icofont-bowling', 'icofont-badminton-birdie', 'icofont-rugby', 'icofont-tennis'] },
    { nombre: "Sport", items: ['icofont-swimmer', 'icofont-steering', 'icofont-padding', 'icofont-hockey', 'icofont-baseballer', 'icofont-racer', 'icofont-skiing-man', 'icofont-runner-alt-1', 'icofont-tracking', 'icofont-climbing'] },
    { nombre: "Comida", items: ['icofont-pizza-slice', 'icofont-burger', 'icofont-french-fries', 'icofont-hot-dog', 'icofont-cheese', 'icofont-bread', 'icofont-chicken-fry', 'icofont-sandwich', 'icofont-taco', 'icofont-croissant'] },
    { nombre: "Vehículos", items: ['icofont-car', 'icofont-car-alt-3', 'icofont-auto-rickshaw', 'icofont-bus-alt-1', 'icofont-truck-alt', 'icofont-truck', 'icofont-taxi', 'icofont-fast-delivery', 'icofont-fire-truck', 'icofont-tractor'] },
    { nombre: "Divisas", items: ['icofont-dollar', 'icofont-euro', 'icofont-peseta', 'icofont-lira', 'icofont-hryvnia', 'icofont-frank', 'icofont-dong', 'icofont-bitcoin', 'icofont-afghani', 'Bs.'] },
    { nombre: "Monedas", items: ['icofont-won', 'icofont-yen', 'icofont-turkish-lira', 'icofont-taka', 'icofont-rupee', 'icofont-rouble', 'icofont-pound', 'icofont-riyal', 'icofont-renminbi', 'icofont-peso'] },
    { nombre: "Pagos", items: ['icofont-western-union', 'icofont-visa-electron', 'icofont-jcb', 'icofont-eway', 'icofont-discover', 'icofont-cash-on-delivery', 'icofont-braintree', 'icofont-bank-transfer', 'icofont-amazon-alt', 'icofont-2checkout'] },
    { nombre: "Payment", items: ['icofont-apple-pay', 'icofont-visa', 'icofont-diners-club', 'icofont-stripe', 'icofont-mastercard', 'icofont-paypal', 'icofont-maestro', 'icofont-payoneer', 'icofont-google-wallet', 'icofont-sage'] },
    { nombre: "Caritas", items: ['icofont-angry', 'icofont-astonished', 'icofont-simple-smile', 'icofont-confused', 'icofont-crying', 'icofont-nerd-smile', 'icofont-expressionless', 'icofont-heart-eyes', 'icofont-laughing', 'icofont-dizzy'] },
    { nombre: "Emoji", items: ['icofont-open-mouth', 'icofont-rage', 'icofont-rolling-eyes', 'icofont-sad', 'icofont-confounded', 'icofont-stuck-out-tongue', 'icofont-smirk', 'icofont-slightly-smile', 'icofont-worried', 'icofont-wink-smile'] },
    { nombre: "Construcción", items: ['icofont-architecture-alt', 'icofont-architecture', 'icofont-barricade', 'icofont-worker', 'icofont-bricks', 'icofont-bolt', 'icofont-cement-mix', 'icofont-calculations', 'icofont-workers-group', 'icofont-danger-zone'] },
    { nombre: "Construction", items: ['icofont-help-robot', 'icofont-cement-mixer', 'icofont-eco-environmen', 'icofont-eco-energy', 'icofont-energy-savings', 'icofont-energy-oil', 'icofont-energy-air', 'icofont-energy-water', 'icofont-energy-solar', 'icofont-radio-active'] },
    { nombre: "Tools", items: ['icofont-drill', 'icofont-fix-tools', 'icofont-hammer', 'icofont-wrench', 'icofont-calculations', 'icofont-paint-brush', 'icofont-screw-driver', 'icofont-saw', 'icofont-trolley', 'icofont-trowel'] },
    { nombre: "Herramientas", items: ['icofont-fire-extinguisher-alt', 'icofont-glue-oil', 'icofont-power-zone', 'icofont-recycle-alt', 'icofont-recycling-man', 'icofont-safety-hat-light', 'icofont-tools-1', 'icofont-tools-bag', 'icofont-under-construction-alt', 'icofont-labour'] },
    { nombre: "Industria", items: ['icofont-mining', 'icofont-pollution', 'icofont-industries', 'icofont-industries-3', 'icofont-industries-1', 'icofont-industries-2', 'icofont-industries-4', 'icofont-industries-5', 'icofont-industries', 'icofont-building-alt'] },
    { nombre: "Maquinaria", items: ['icofont-vehicle-wrecking', 'icofont-vehicle-trucktor', 'icofont-vehicle-excavator', 'icofont-vehicle-dozer', 'icofont-vehicle-delivery-van', 'icofont-vehicle-crane', 'icofont-vehicle-cement', 'icofont-tow-truck', 'icofont-concrete-mixer', 'icofont-fork-lift'] },
    { nombre: "Naturaleza", items: ['icofont-eclipse', 'icofont-forest-fire', 'icofont-night', 'icofont-sun-alt', 'icofont-thunder-light', 'icofont-snow', 'icofont-volcano', 'icofont-clouds', 'icofont-tornado', 'icofont-wave'] },
    { nombre: "Clima", items: ['icofont-sunny-day-temp', 'icofont-wind', 'icofont-sunny', 'icofont-rainy', 'icofont-celsius', 'icofont-fahrenheit', 'icofont-breakdown', 'icofont-rainy-thunder', 'icofont-sun-set', 'icofont-umbrella'] },
    { nombre: "Negocio", items: ['icofont-bank', 'icofont-barcode', 'icofont-briefcase-1', 'icofont-bill-alt', 'icofont-coins', 'icofont-stamp', 'icofont-files-stack', 'icofont-handshake-deal', 'icofont-money-bag', 'icofont-presentation'] },
    { nombre: "Kids", items: ['icofont-baby-milk-bottle', 'icofont-candy', 'icofont-baby', 'icofont-baby-cloth', 'icofont-baby-trolley', 'icofont-toy-horse', 'icofont-toy-lattu', 'icofont-safety-pin', 'icofont-toy-hand', 'icofont-baby-backpack'] },
    { nombre: "Bebidas", items: ['icofont-soft-drinks', 'icofont-coffee-mug', 'icofont-cola', 'icofont-juice', 'icofont-cocktail', 'icofont-beer', 'icofont-milk', 'icofont-tea-pot', 'icofont-coconut-water', 'icofont-coffee-alt'] },
    { nombre: "Interfaz", items: ['icofont-ui-bluetooth', 'icofont-ui-alarm', 'icofont-ui-calendar', 'icofont-ui-camera', 'icofont-ui-clip', 'icofont-ui-video-play', 'icofont-ui-password', 'icofont-ui-music', 'icofont-ui-network', 'icofont-ui-dial-phone'] },
    { nombre: "Interfaz 2", items: ['icofont-ui-game', 'icofont-ui-email', 'icofont-ui-music-player', 'icofont-ui-power', 'icofont-ui-settings', 'icofont-ui-social-link', 'icofont-eraser', 'icofont-ui-search', 'icofont-ui-message', 'icofont-ui-edit'] },
    { nombre: "Buscar", items: ['icofont-search-job', 'icofont-search-folder', 'icofont-search-document', 'icofont-search-property', 'icofont-search-restaurant', 'icofont-search-stock', 'icofont-search-user', 'icofont-search-map', 'icofont-search-2', 'icofont-search-1'] },
    { nombre: "Viajar", items: ['icofont-air-ticket', 'icofont-direction-sign', 'icofont-island-alt', 'icofont-beach', 'icofont-5-star-hotel', 'icofont-camping-vest', 'icofont-hotel', 'icofont-island', 'icofont-sandals-female', 'icofont-sandals-male'] },
    { nombre: "Gym", items: ['icofont-gym-alt-2', 'icofont-muscle-weight', 'icofont-dumbbell', 'icofont-cycling', 'icofont-gym-alt-1', 'icofont-gym', 'icofont-gym-alt-3', 'icofont-dumbbells', 'icofont-cycling-alt', 'icofont-muscle'] },
    { nombre: "Chart", items: ['icofont-chart-flow-2', 'icofont-chart-histogram', 'icofont-chart-flow-1', 'icofont-chart-arrows-axis', 'icofont-chart-flow', 'icofont-chart-pie', 'icofont-chart-line', 'icofont-chart-pie-alt', 'icofont-chart-line-alt', 'icofont-chart-bar-graph'] },
    { nombre: "Aves", items: ['icofont-eagle-head', 'icofont-toy-duck', 'icofont-penguin', 'icofont-rooster', 'icofont-woodpecker', 'icofont-bird-alt', 'icofont-owl', 'icofont-pelican', 'icofont-pigeon-2', 'icofont-parrot'] },
    { nombre: "Education", items: ['icofont-abc', 'icofont-book-alt', 'icofont-globe-alt', 'icofont-instrument', 'icofont-pencil-alt-5', 'icofont-test-tube-alt', 'icofont-microscope-alt', 'icofont-certificate-alt-1', 'icofont-hat', 'icofont-paper'] },
    { nombre: "Educación", items: ['icofont-medal', 'icofont-lamp-light', 'icofont-school-bag', 'icofont-read-book', 'icofont-test-bulb', 'icofont-university', 'icofont-brainstorming', 'icofont-certificate-alt-2', 'icofont-black-board', 'icofont-graduate-alt'] },
    { nombre: "Multimedia", items: ['icofont-music-disk', 'icofont-volume-up', 'icofont-multimedia', 'icofont-record', 'icofont-cassette-player', 'icofont-video-alt', 'icofont-video-clapper', 'icofont-cassette', 'icofont-volume-mute', 'icofont-video-cam'] },
    { nombre: "Thing", items: ['icofont-anchor', 'icofont-binoculars', 'icofont-bomb', 'icofont-box', 'icofont-bucket', 'icofont-bullseye', 'icofont-cart-alt', 'icofont-code', 'icofont-dice', 'icofont-diskette'] },
    { nombre: "Others", items: ['icofont-home', 'icofont-hour-glass', 'icofont-karate', 'icofont-jewlery', 'icofont-letter', 'icofont-life-buoy', 'icofont-lighter', 'icofont-megaphone', 'icofont-mop', 'icofont-print'] },
    { nombre: "Cosas", items: ['icofont-news', 'icofont-newspaper', 'icofont-telescope', 'icofont-space', 'icofont-paint', 'icofont-plugin', 'icofont-puzzle', 'icofont-usb-drive', 'icofont-royal', 'icofont-recycle'] },
    { nombre: "Mamíferos", items: ['icofont-zebra', 'icofont-gorilla', 'icofont-horse-head-2', 'icofont-giraffe', 'icofont-squirrel', 'icofont-camel', 'icofont-monkey-3', 'icofont-kangaroo', 'icofont-bull', 'icofont-elephant-head'] },
    { nombre: "Acuaticos", items: ['icofont-fish', 'icofont-crocodile', 'icofont-dolphin', 'icofont-crab', 'icofont-turtle', 'icofont-octopus', 'icofont-seahorse', 'icofont-shrimp-alt', 'icofont-whale', 'icofont-seal'] },
    { nombre: "Transporte", items: ['icofont-air-balloon', 'icofont-airplane-alt', 'icofont-bicycle', 'icofont-helicopter', 'icofont-rocket-alt-2', 'icofont-motor-biker', 'icofont-sail-boat', 'icofont-train-steam', 'icofont-ship-alt', 'icofont-cable-car'] },
    { nombre: "Vegetables", items: ['icofont-egg-plant', 'icofont-bell-pepper-capsicum', 'icofont-broccoli', 'icofont-pumpkin', 'icofont-mushroom', 'icofont-onion', 'icofont-potato', 'icofont-carrot', 'icofont-pepper', 'icofont-tomato'] },
    { nombre: "Profesión", items: ['icofont-farmer-alt', 'icofont-police', 'icofont-lawyer', 'icofont-legal', 'icofont-nurse-alt', 'icofont-doctor', 'icofont-labour', 'icofont-military', 'icofont-investigator', 'icofont-burglar'] },
    { nombre: "Ley", items: ['icofont-law-order', 'icofont-handcuff', 'icofont-law-alt-1', 'icofont-pistol', 'icofont-thief-alt', 'icofont-jail', 'icofont-cop-badge', 'icofont-lawyer-alt-2', 'icofont-law-scales', 'icofont-law-document'] },
    { nombre: "Persona", items: ['icofont-boy', 'icofont-business-man', 'icofont-girl-alt', 'icofont-kid', 'icofont-woman-in-glasses', 'icofont-hotel-boy-alt', 'icofont-funky-man', 'icofont-girl', 'icofont-man-in-glasses', 'icofont-waiter'] },
    { nombre: "Person", items: ['icofont-support', 'icofont-user-alt-5', 'icofont-user-female', 'icofont-user-suited', 'icofont-users-alt-4', 'icofont-users-alt-6', 'icofont-users-social', 'icofont-users-alt-2', 'icofont-users-alt-1', 'icofont-group'] },
    { nombre: "Marcas", items: ['icofont-brand-cnn', 'icofont-brand-apple', 'icofont-brand-amazon', 'icofont-brand-dell', 'icofont-brand-playstation', 'icofont-brand-ferrari', 'icofont-brand-android-robot', 'icofont-brand-shell', 'icofont-brand-general-electric', 'icofont-brand-nasa'] },
    { nombre: "Brand", items: ['icofont-brand-adidas', 'icofont-brand-blackberry', 'icofont-brand-puma', 'icofont-brand-casio', 'icofont-brand-java', 'icofont-brand-gillette', 'icofont-brand-hp', 'icofont-brand-lg', 'icofont-brand-warnerbros', 'icofont-brand-motorola'] },
    { nombre: "Logos", items: ['icofont-brand-levis', 'icofont-brand-lego', 'icofont-brand-intel', 'icofont-brand-mercedes', 'icofont-brand-linux', 'icofont-brand-nike', 'icofont-brand-mytv', 'icofont-brand-wikipedia', 'icofont-brand-samsung', 'icofont-brand-volkswagen'] },
    { nombre: "Marca de comida", items: ['icofont-brand-nescafe', 'icofont-brand-redbull', 'icofont-brand-mcdonals', 'icofont-brand-cocal-cola', 'icofont-brand-nestle', 'icofont-brand-burger-king', 'icofont-brand-pizza-hut', 'icofont-brand-eleven', 'icofont-brand-pepsi', 'icofont-brand-starbucks'] },
    { nombre: "RRSS", items: ['icofont-facebook', 'icofont-linkedin', 'icofont-tiktok', 'icofont-tinder', 'icofont-instagram', 'icofont-youtube', 'icofont-telegram', 'icofont-wechat', 'icofont-pinterest', 'icofont-whatsapp'] },
    { nombre: "RRSS 2", items: ['icofont-facebook-messenger', 'icofont-spotify', 'icofont-twitch', 'icofont-x', 'icofont-soundcloud', 'icofont-reddit', 'icofont-rss', 'icofont-discord', 'icofont-bbm-messenger', 'icofont-blogger'] }
];

// Carga de datos base desde localStorage
let scoreTotal = parseInt(localStorage.getItem('scoreTotal')) || 0;
let vidas = parseInt(localStorage.getItem('vidas')) || 7;
let victorias = parseInt(localStorage.getItem('victorias')) || 0;
let derrotas = parseInt(localStorage.getItem('derrotas')) || 0;
let mejorTiempo = parseInt(localStorage.getItem('mejorTiempo')) || null;
let indiceCategoriaActual = parseInt(localStorage.getItem('indiceCategoriaActual')) || 0;

let cartasVolteadas = [];
let bloqueado = false;
let juegoIniciado = false;
let puntuacionPartida = 0;
let tiempo = 0;
let cronometroInterval = null;

function guardarDatosLocales() {
    localStorage.setItem('scoreTotal', scoreTotal);
    localStorage.setItem('vidas', vidas);
    localStorage.setItem('victorias', victorias);
    localStorage.setItem('derrotas', derrotas);
    localStorage.setItem('indiceCategoriaActual', indiceCategoriaActual);
}

function reproducirSonido(tipo) {
    let audioSrc = '';
    switch(tipo) {
        case 'voltear': audioSrc = 'voltear.ogg'; break;
        case 'acierto': audioSrc = 'acierto.ogg'; break;
        case 'error': audioSrc = 'error.ogg'; break;
        case 'victoria': audioSrc = 'victoria.ogg'; break;
        case 'derrota': audioSrc = 'derrota.ogg'; break;
    }
    if (audioSrc) {
        const audio = new Audio(audioSrc);
        audio.volume = 0.8;
        audio.play().catch(e => console.log("Audio bloqueado:", e));
    }
}

// Elementos visuales flotantes y estadísticas
const vidasFlotantes = document.createElement('div');
vidasFlotantes.className = 'vidas-flotantes';
vidasFlotantes.innerHTML = `<strong id="vidas" style="color: #e74c3c;"><i class="icofont-heart" style="color: #e74c3c;"></i> ${vidas}</strong>`;
document.body.appendChild(vidasFlotantes);

const displayInfo = document.createElement('div');
displayInfo.id = 'panel-estadisticas'; 
displayInfo.style.cssText = `
    width: 100%; max-width: 600px; margin-bottom: 20px; 
    background-color: #fff; padding: 12px; border-radius: 8px; 
    box-shadow: 0 2px 4px rgba(0,0,0,0.1); color: #333;
`;
displayInfo.innerHTML = `
    <div class="grid-stats" style="display: grid; grid-template-columns: repeat(3, 1fr); text-align: center; gap: 10px;">
        <div><div>Tiempo</div><strong id="cronometro">0s</strong></div>
        <div><div>Puntos</div><strong id="puntos-partida">0</strong></div>
        <div><div>Victorias</div><strong id="victorias" style="color: #28a745;">${victorias}</strong></div>
        <div><div>Récord</div><strong id="mejor-tiempo" style="color: #d9534f;">${mejorTiempo ? mejorTiempo + 's' : '--'}</strong></div>
        <div><div>Score</div><strong id="score-total" style="color: #0056b3;">${scoreTotal}</strong></div>
        <div><div>Derrotas</div><strong id="derrotas" style="color: #e74c3c;">${derrotas}</strong></div>
    </div>
`;
tablero.parentNode.insertBefore(displayInfo, tablero);

function actualizarUI() {
    document.getElementById('puntos-partida').innerText = puntuacionPartida;
    document.getElementById('score-total').innerText = scoreTotal;
    document.getElementById('victorias').innerText = victorias;
    document.getElementById('derrotas').innerText = derrotas; 
    document.getElementById('cronometro').innerText = `${tiempo}s`;
    document.getElementById('mejor-tiempo').innerText = mejorTiempo ? `${mejorTiempo}s` : '--';

    const claseIcono = vidas > 0 ? 'icofont-heart' : 'icofont-heart-alt';
    document.getElementById('vidas').innerHTML = `<i class="${claseIcono}" style="color: #e74c3c;"></i> ${Math.max(0, vidas)}`;
}

// Botón de Iniciar / Pausar controlado
btnIniciar.onclick = () => {
        reproducirSonido('voltear');
    if (vidas <= 0) return;

    if (!juegoIniciado) {
        juegoIniciado = true;
        bloqueado = false;
        btnIniciar.innerText = "Pausar";

        if (cronometroInterval) clearInterval(cronometroInterval);
        cronometroInterval = setInterval(() => {
            tiempo++;
            document.getElementById('cronometro').innerText = `${tiempo}s`;
        }, 1000);

    } else {
        if (bloqueado) {
            bloqueado = false;
            btnIniciar.innerText = "Pausar";
            tablero.style.opacity = "1";
            cronometroInterval = setInterval(() => {
                tiempo++;
                document.getElementById('cronometro').innerText = `${tiempo}s`;
            }, 1000);
        } else {
            clearInterval(cronometroInterval);
            bloqueado = true;
            btnIniciar.innerText = "Reanudar";
            tablero.style.opacity = "0.5";
        }
    }
};

function crearTablero() {
    const cartasExistentes = document.querySelectorAll('.card.flipped');
    
    if (cartasExistentes.length > 0) {
        // 1. Quitamos la clase 'flipped' para que se desvolteen con la animación CSS
        cartasExistentes.forEach(card => card.classList.remove('flipped'));
        
        // 2. Esperamos a que termine la animación (ej. 400ms) antes de limpiar y regenerar el tablero
        setTimeout(() => {
            inicializarNuevaPartida();
        }, 400); // Este tiempo debe coincidir o ser cercano al 'transition' de tu CSS
    } else {
        inicializarNuevaPartida();
    }
}

function inicializarNuevaPartida() {
    tablero.innerHTML = '';
    puntuacionPartida = 0;
     if (vidas <= 0) {
        vidas = 7;
    }
    bloqueado = false;
    juegoIniciado = false;
    tiempo = 0;
    cartasVolteadas = []; 
    btnIniciar.innerText = "Iniciar Juego";
    btnIniciar.disabled = false;
    tablero.style.opacity = "1";
    if (cronometroInterval) clearInterval(cronometroInterval);
    guardarDatosLocales();
    actualizarUI();

    if (indiceCategoriaActual >= categoriasFiguras.length) {
        indiceCategoriaActual = 0;
    }

    const categoriaActual = categoriasFiguras[indiceCategoriaActual];
    const pares = categoriaActual.items;
    let IDs = [...pares, ...pares];

    // Mezclar cartas
    for (let i = IDs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [IDs[i], IDs[j]] = [IDs[j], IDs[i]];
    }

    IDs.forEach(id => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = id;

        const contenidoCarta = id.startsWith('icofont-') ? `<i class="${id}"></i>` : id;

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">?</div>
                <div class="card-back">${contenidoCarta}</div>
            </div>
        `;
        card.onclick = () => flipCard(card);
        tablero.appendChild(card);
    });
}

function flipCard(cardElement) {
    if (!juegoIniciado || bloqueado || cardElement.classList.contains('flipped') || vidas <= 0) return;

    cardElement.classList.add('flipped');
    cartasVolteadas.push(cardElement);
    reproducirSonido('voltear');

    if (cartasVolteadas.length === 2) {
        verificarCoincidencia();
    }
}

function verificarCoincidencia() {
    bloqueado = true;
    const [primera, segunda] = cartasVolteadas;

    if (primera.dataset.id === segunda.dataset.id) {
        // Sumamos los 2 puntos y la vida extra por acierto
        puntuacionPartida += 2;
        scoreTotal += 2;
        vidas++; 
        
        reproducirSonido('acierto');
        guardarDatosLocales();
        actualizarUI(); // Refresca los contadores en pantalla inmediatamente
        
        resetearTurno();
        verificarVictoria();
    } else {
        reproducirSonido('error');
        vidas--; 
        guardarDatosLocales();
        actualizarUI();

        if (vidas <= 0) {
            clearInterval(cronometroInterval);
            btnIniciar.innerText = "¡Game Over!";
            btnIniciar.disabled = true;
            tablero.style.opacity = "0.4";
            bloqueado = true;

            reproducirSonido('derrota');
            derrotas++;
            guardarDatosLocales();
            actualizarUI(); 

            document.querySelectorAll('.card').forEach(card => card.classList.add('flipped'));

            setTimeout(() => {
                alert("¡Te has quedado sin vidas! Game Over.");
            }, 300);
            return;
        }

        setTimeout(() => {
            primera.classList.remove('flipped');
            segunda.classList.remove('flipped');
            resetearTurno();
        }, 1000);
    }
}


function verificarVictoria() {
    const todasLasCartas = document.querySelectorAll('.card');
    if (Array.from(todasLasCartas).every(card => card.classList.contains('flipped'))) {
        clearInterval(cronometroInterval);
        victorias++;
        btnIniciar.innerText = "¡Ganaste!";
        btnIniciar.disabled = true;

        scoreTotal += puntuacionPartida;
        indiceCategoriaActual++;
        if (indiceCategoriaActual >= categoriasFiguras.length) {
            indiceCategoriaActual = 0;
        }

        guardarDatosLocales();

        if (typeof confetti === 'function') {
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        }

        if (mejorTiempo === null || tiempo < mejorTiempo) {
            mejorTiempo = tiempo;
            localStorage.setItem('mejorTiempo', mejorTiempo);
            reproducirSonido('victoria');
            alert(`¡Nuevo Récord! Tiempo: ${tiempo}s`);
        } else {
            reproducirSonido('victoria');
            alert(`¡Victoria! Tiempo: ${tiempo}s. Puntos: ${puntuacionPartida}`);
        }
        actualizarUI();
    }
}

function resetearTurno() {
    cartasVolteadas = [];
    bloqueado = false;
}

btnBorrar.onclick = () => {
        reproducirSonido('voltear');
    if (confirm("¿Borrar todo el historial y reiniciar puntuaciones?")) {
        localStorage.clear();
        scoreTotal = 0;
        vidas = 7;
        victorias = 0;
        derrotas = 0;
        mejorTiempo = null;
        indiceCategoriaActual = 0; 
        actualizarUI();
        crearTablero();
    }
};

btnReiniciar.onclick = () => {
    reproducirSonido('voltear');
    crearTablero();
};

document.addEventListener("DOMContentLoaded", crearTablero);