const tablero = document.getElementById("tablero-juego");
const btnReiniciar = document.getElementById("btn-reiniciar");
const btnBorrar = document.getElementById("btn-borrar-historial");
const btnIniciar = document.getElementById("btn-iniciar");

// 1. Array anidado con diferentes categorías de figuras (usamos emojis)
const categoriasFiguras = [
    { nombre: "Animales", items: ['🐶', '🐱', '🐰', '🦊', '🐻', '🐼', '🐨', '🦁', '🐯', '🐮'] },
    { nombre: "Frutas", items: ['🍎', '🍌', '🍉', '🍇', '🍓', '🍍', '🥝', '🍑', '🍒', '🍋'] },
    { nombre: "Deportes", items: ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎱', '🏓', '🥊'] },
    { nombre: "Comida", items: ['🍕', '🍔', '🍟', '🌭', '🧀', '🥖', '🍗', '🥪', '🫓', '🎂'] },
    { nombre: "Vehículos", items: ['🚗', '🚕', '🚙', '🚌', '🚎', '🛻', '🚓', '🚑', '🚒', '🚚'] },
    { nombre: "Banderas", items: ['🇦🇷', '🇧🇷', '🇨🇴', '🇪🇸', '🇭🇳', '🇨🇱', '🇪🇨', '🇮🇱', '🇯🇵', '🇻🇪'] },
    { nombre: "Objetos", items: ['🔒', '✂️', '👑', '💡', '✏️', '☎️', '🔑', '💻', '⚓', '🔔'] },
    { nombre: "Caritas", items: ['😀', '😅', '😂', '🥳', '🤓', '🥹', '😋', '😍', '😱', '😎'] },
    { nombre: "Herramientas", items: ['🪏', '⛏️', '🪛', '🔧', '🪚', '🔨', '🪓', '🪜', '🧯', '🔩'] },
    { nombre: "Naturaleza", items: ['⭐', '🔥', '🌛', '🌞', '⚡', '❄️', '🌎', '☁️', '🌪️', '🌈'] },
    { nombre: "Flores", items: ['🌹', '🌻', '🍁', '🍄', '🍀', '🌵', '🌴', '🌲', '🌳', '🌼'] },
    { nombre: "Chucherías", items: ['🍫', '🍬', '🍭', '🍦', '🍨', '🍩', '🍪', '🍧', '🍿', '🍰'] },
    { nombre: "Bebidas", items: ['🧃', '☕', '🍾', '🍹', '🍸', '🍺', '🥛', '🫖', '🧉', '🍷'] },
    { nombre: "Variedad", items: ['🎁', '🎈', '🎉', '🎀', '🎃', '🎄', '🎊', '🎯', '🪁', '🎲'] },
    { nombre: "Ropa", items: ['🧦', '👗', '🩳', '👕', '👖', '🎽', '👚', '🎩', '👔', '🧢'] },
    { nombre: "Manos", items: ['👍🏼', '🫶🏼', '💪🏼', '👊🏼', '🙌🏼', '🫰🏼', '🫵🏼', '🖐🏼', '✍🏼', '👌🏼'] },
    { nombre: "Profesión", items: ['🧑🏼‍🚀', '👷🏼', '👮🏼', '🕵🏼', '🧑🏼‍🍳', '🧑🏼‍⚕️', '🧑🏼‍🚒', '🧑🏼‍🌾', '🧑🏼‍💻', '🧑🏼‍🏫'] },
    { nombre: "Insectos", items: ['🐌', '🐞', '🐛', '🕷️', '🦋', '🐝', '🦂', '🐜', '🦗', '🪰'] },
    { nombre: "Aves", items: ['🦅', '🦆', '🐧', '🐓', '🦚', '🦩', '🦉', '🦜', '🦢', '🕊️'] },
    { nombre: "Otros", items: ['🎮', '🎳', '♟️', '🧩', '🪀', '🕹️', '🎨', '🃏', '📷', '🏹'] },
    { nombre: "Instrumentos", items: ['🎹', '🎷', '🎺', '🪊', '🎸', '🎻', '🪉', '🪇', '🥁', '🪗'] },
    { nombre: "Artefactos", items: ['🎤', '🎧', '🎚️', '🎙️', '📻', '📺', '🎬', '📼', '🔦', '📽️'] },
    { nombre: "Hogar", items: ['🛏️', '🪑', '🚪', '🛋️', '🚿', '🚽', '🛁', '🪞', '🧹', '🧻'] },
    { nombre: "Hobby", items: ['🥋', '⛳', '🛹', '🪃', '🥏', '🤿', '🪡', '🧶', '🧵', '🛼'] },
    { nombre: "Cosas", items: ['💾', '💽', '🖨️', '🛒', '🔌', '🕯️', '💰', '⚖️', '🖥️', '💎'] },
    { nombre: "Mamíferos", items: ['🦓', '🐖', '🐎', '🦒', '🐿️', '🐪', '🐒', '🦘', '🐂', '🐘'] },
    { nombre: "Mar", items: ['🐠', '🫍', '🐬', '🦀', '🦑', '🐙', '🪼', '🦐', '🦈', '🦭'] },
    { nombre: "Transporte", items: ['🚂', '✈️', '🏍️', '🚁', '🚀', '⛵', '🛶', '🛸', '🛳️', '🚤', '🚠'] },
    { nombre: "Vegetables", items: ['🍆', '🫑', '🥦', '🧄', '🫚', '🧅', '🥔', '🥕', '🌶️', '🍅'] },
    { nombre: "Bonus", items: ['📢', '🔍', '🛡️', '⚔️', '📜', '🪤', '⏳', '⏰', '📰', '📦'] }
];

// Recuperar el índice de la categoría actual o empezar en 0 si no existe
let indiceCategoriaActual = parseInt(localStorage.getItem('indiceCategoriaActual')) || 0;

let cartasVolteadas = [];
let bloqueado = true;
let juegoIniciado = false;
let juegoPausado = false;
let puntuacionPartida = 0;
let vidas = 5; 

// Recuperar datos desde localStorage
let victorias = parseInt(localStorage.getItem('victorias')) || 0;
let scoreTotal = parseInt(localStorage.getItem('scoreTotal')) || 0;
let mejorTiempo = parseInt(localStorage.getItem('mejorTiempo')) || null;
let tiempo = 0;
let cronometroInterval;

// Funciones para reproducir efectos de sonido
function reproducirSonido(tipo) {
    let audioSrc = '';

    switch(tipo) {
        case 'voltear': audioSrc = 'voltear.ogg'; break;
        case 'acierto': audioSrc = 'acierto.ogg'; break;
        case 'error': audioSrc = 'error.ogg'; break;
        case 'victoria': audioSrc = 'victoria.ogg'; break;
    }

    if (audioSrc) {
        const audio = new Audio(audioSrc);
        audio.volume = 0.8;
        audio.play().catch(e => console.log("Audio bloqueado:", e));
    }
}

// 1. Crear contenedor de vidas flotante en la esquina superior derecha
const vidasFlotantes = document.createElement('div');
vidasFlotantes.className = 'vidas-flotantes';
vidasFlotantes.innerHTML = `<span></span><strong id="vidas" style="color: #e74c3c;">❤️❤️❤️❤️❤️</strong>`;
document.body.appendChild(vidasFlotantes);

// 2. Crear contenedor de marcadores principal con 5 columnas
const displayInfo = document.createElement('div');
displayInfo.style.cssText = `
    display: grid; 
    grid-template-columns: repeat(5, 1fr); 
    align-items: center; 
    width: 100%; 
    max-width: 600px; 
    margin-bottom: 20px; 
    background-color: #fff; 
    padding: 10px; 
    border-radius: 8px; 
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    text-align: center;
    color: #333;
`;

displayInfo.innerHTML = `
    <div><div class="valores">Tiempo</div><strong id="cronometro">0s</strong></div>
    <div><div class="valores">Récord</div><strong id="mejor-tiempo" style="color: #d9534f;">${mejorTiempo ? mejorTiempo + 's' : '--'}</strong></div>
    <div><div class="valores">Puntos</div><strong id="puntos-partida">0</strong></div>
    <div><div class="valores">Score</div><strong id="score-total" style="color: #0056b3;">${scoreTotal}</strong></div>
    <div><div class="valores">Victorias</div><strong id="victorias" style="color: #28a745;">${victorias}</strong></div>
`;

tablero.parentNode.insertBefore(displayInfo, tablero);

function actualizarUI() {
    document.getElementById('puntos-partida').innerText = puntuacionPartida;
    document.getElementById('score-total').innerText = scoreTotal;
    document.getElementById('victorias').innerText = victorias;
    document.getElementById('cronometro').innerText = `${tiempo}s`;
    document.getElementById('mejor-tiempo').innerText = mejorTiempo ? `${mejorTiempo}s` : '--';
    
    // Actualizar corazones flotantes
    const corazones = '❤️'.repeat(Math.max(0, vidas)) + '🖤'.repeat(Math.max(0, 10 - vidas));
    document.getElementById('vidas').innerText = corazones;
}

// Botón único para Iniciar, Pausar y Reanudar
btnIniciar.onclick = () => {
    if (!juegoIniciado) {
        juegoIniciado = true;
        juegoPausado = false;
        bloqueado = false;
        btnIniciar.innerText = "Pausar";

        cronometroInterval = setInterval(() => {
            tiempo++;
            document.getElementById('cronometro').innerText = `${tiempo}s`;
        }, 1000);

    } else if (!juegoPausado) {
        clearInterval(cronometroInterval);
        juegoPausado = true;
        bloqueado = true;
        btnIniciar.innerText = "Reanudar";
        tablero.style.opacity = "0.5";

    } else {
        cronometroInterval = setInterval(() => {
            tiempo++;
            document.getElementById('cronometro').innerText = `${tiempo}s`;
        }, 1000);
        juegoPausado = false;
        bloqueado = false;
        btnIniciar.innerText = "Pausar";
        tablero.style.opacity = "1";
    }
};

function crearTablero() {
    tablero.innerHTML = '';
    puntuacionPartida = 0;
    vidas = 10; 
    bloqueado = true;
    juegoIniciado = false;
    juegoPausado = false;
    tiempo = 0;
    cartasVolteadas = []; // <--- LIMPIA LAS CARTAS VOLTEADAS AQUÍ
    btnIniciar.innerText = "Iniciar Juego";
    btnIniciar.disabled = false;
    tablero.style.opacity = "1";
    clearInterval(cronometroInterval);
    actualizarUI();

    if (indiceCategoriaActual >= categoriasFiguras.length) {
        indiceCategoriaActual = 0;
    }

    const categoriaActual = categoriasFiguras[indiceCategoriaActual];
    const pares = categoriaActual.items;
    let IDs = [...pares, ...pares];

    for (let i = IDs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [IDs[i], IDs[j]] = [IDs[j], IDs[i]];
    }

    IDs.forEach(id => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = id;
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">?</div>
                <div class="card-back">${id}</div>
            </div>
        `;
        card.onclick = () => flipCard(card);
        tablero.appendChild(card);
    });
}

function flipCard(cardElement) {
    // <--- SE AGREGA "vidas <= 0" AQUÍ PARA BLOQUEAR CLICS SI HUBO GAME OVER
    if (bloqueado || juegoPausado || cardElement.classList.contains('flipped') || vidas <= 0) return;
    
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
        puntuacionPartida += 2;
        reproducirSonido('acierto');
        actualizarUI();
        resetearTurno();
        verificarVictoria();
    } else {
        reproducirSonido('error');
        vidas--; 
        actualizarUI();

        if (vidas <= 0) {
            clearInterval(cronometroInterval);
            juegoIniciado = true;
            btnIniciar.innerText = "¡Game Over!";
            btnIniciar.disabled = true;
            tablero.style.opacity = "0.4";
            bloqueado = true; 
            
            document.querySelectorAll('.card').forEach(card => {
                card.classList.add('flipped');
            });

            setTimeout(() => {
                alert("¡Te has quedado sin vidas! Game Over. Inténtalo de nuevo.");
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
        scoreTotal += puntuacionPartida;
        juegoIniciado = true; 
        btnIniciar.innerText = "¡Ganaste!";
        btnIniciar.disabled = true;

        indiceCategoriaActual++;
        if (indiceCategoriaActual >= categoriasFiguras.length) {
            indiceCategoriaActual = 0;
        }
        localStorage.setItem('indiceCategoriaActual', indiceCategoriaActual);
        localStorage.setItem('victorias', victorias);
        localStorage.setItem('scoreTotal', scoreTotal);

        if (typeof confetti === 'function') {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
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
    if (confirm("¿Borrar todo el historial?")) {
        localStorage.clear();
        victorias = scoreTotal = 0;
        mejorTiempo = null;
        indiceCategoriaActual = 0; 
        actualizarUI();
        crearTablero();
    }
};

btnReiniciar.onclick = () => {
    crearTablero();
};

document.addEventListener("DOMContentLoaded", crearTablero);