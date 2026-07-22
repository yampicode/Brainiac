const tablero = document.getElementById("tablero-juego");
const btnReiniciar = document.getElementById("btn-reiniciar");
const btnBorrar = document.getElementById("btn-borrar-historial");
const btnIniciar = document.getElementById("btn-iniciar");

let cartasVolteadas = [];
let bloqueado = true;
let juegoIniciado = false;
let juegoPausado = false;
let puntuacionPartida = 0;

// Recuperar datos desde localStorage
let victorias = parseInt(localStorage.getItem('victorias')) || 0;
let scoreTotal = parseInt(localStorage.getItem('scoreTotal')) || 0;
let mejorTiempo = parseInt(localStorage.getItem('mejorTiempo')) || null;
let tiempo = 0;
let cronometroInterval;

// Funciones para reproducir efectos de sonido
/* function reproducirSonido(tipo) {
    let audioSrc = '';
    
    switch(tipo) {
        case 'voltear':
            audioSrc = 'https://www.soundjay.com/buttons/sounds/button-29.mp3'; // Sonido corto de clic
            break;
        case 'acierto':
            audioSrc = 'https://www.soundjay.com/buttons/sounds/button-3.mp3'; // Sonido de éxito
            break;
        case 'error':
            audioSrc = 'https://www.soundjay.com/buttons/sounds/button-10.mp3'; // Sonido de error/fallo
            break;
        case 'victoria':
            audioSrc = 'https://www.soundjay.com/buttons/sounds/button-bachata-1.mp3'; // O un sonido de triunfo
            break;
    }

    if (audioSrc) {
        const audio = new Audio(audioSrc);
        audio.volume = 0.3; // Volumen moderado para que no sea molesto
        audio.play().catch(e => console.log("El navegador bloqueó el audio hasta que haya interacción:", e));
    }
}
*/

// Sintetizador nativo para generar efectos de sonido

function reproducirSonido(tipo) {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        let frecuencia = 600;
        let duracion = 0.1;
        let tipoOnda = 'sine';

        if (tipo === 'voltear') {
            frecuencia = 600;
            duracion = 0.08;
            tipoOnda = 'triangle';
        } else if (tipo === 'acierto') {
            frecuencia = 600;
            duracion = 0.15;
            tipoOnda = 'sine';
        } else if (tipo === 'error') {
            frecuencia = 500;
            duracion = 0.2;
            tipoOnda = 'sawtooth';
        } else if (tipo === 'victoria') {
            // Pequeña melodía ascendente para la victoria
            const now = audioCtx.currentTime;
            osc.frequency.setValueAtTime(400, now);
            osc.frequency.setValueAtTime(600, now + 0.8);
            osc.frequency.setValueAtTime(800, now + 0.9);
            osc.type = 'sine';
            gain.gain.setValueAtTime(0.9, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
            osc.start(now);
            osc.stop(now + 0.4);
            return;
        }

        const now = audioCtx.currentTime;
        osc.frequency.setValueAtTime(frecuencia, now);
        osc.type = tipoOnda;
        gain.gain.setValueAtTime(0.9, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duracion);
        osc.start(now);
        osc.stop(now + duracion);
    } catch (e) {
        // Por si el navegador bloquea el contexto de audio antes de la primera interacción
        console.log("Audio no disponible aún", e);
    }
}


// 1. Array anidado con diferentes categorías de figuras (usamos emojis)
const categoriasFiguras = [
    { nombre: "Animales", items: ['🐶', '🐱', '🐰', '🦊', '🐻', '🐼', '🐨', '🦁', '🐯', '🐮'] },
    { nombre: "Frutas", items: ['🍎', '🍌', '🍉', '🍇', '🍓', '🍍', '🥝', '🍑', '🍒', '🍋'] },
    { nombre: "Deportes", items: ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎱', '🏓', '🥊'] },
    { nombre: "Comida", items: ['🍕', '🍔', '🍟', '🌭', '🧀', '🥖', '🍗', '🥪', '🫓', '🎂'] },
    { nombre: "Vehículos", items: ['🚗', '🚕', '🚙', '🚌', '🚎', '🏍️', '🚓', '🚑', '🚒', '🚚'] },
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
{ nombre: "Hogar", items: ['🛏️', '🪑', '🚪', '🛋️', '🚿', '🚽', '🛁', '🪞', '🧹', '🧻'] }
];


// Crear contenedor de marcadores con 5 columnas
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
`;

displayInfo.innerHTML = `
    <div class="separador"><div class="valores">Tiempo</div><strong id="cronometro">0s</strong></div>
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
}

// Botón único para Iniciar, Pausar y Reanudar
btnIniciar.onclick = () => {
    // <--- PONLO AQUÍ AL INICIO DE LA FUNCIÓN --->
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
    } catch (e) {}
    
    if (!juegoIniciado) {
        // --- ACCIÓN 1: INICIAR ---
        juegoIniciado = true;
        juegoPausado = false;
        bloqueado = false;
        btnIniciar.innerText = "Pausar";
        
        cronometroInterval = setInterval(() => {
            tiempo++;
            document.getElementById('cronometro').innerText = `${tiempo}s`;
        }, 1000);

    } else if (!juegoPausado) {
        // --- ACCIÓN 2: PAUSAR ---
        clearInterval(cronometroInterval);
        juegoPausado = true;
        bloqueado = true;
        btnIniciar.innerText = "Reanudar";
        tablero.style.opacity = "0.5";

    } else {
        // --- ACCIÓN 3: REANUDAR ---
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
    bloqueado = true;
    juegoIniciado = false;
    juegoPausado = false;
    tiempo = 0;
    btnIniciar.innerText = "Iniciar Juego";
    tablero.style.opacity = "1";
    clearInterval(cronometroInterval);
    actualizarUI();
    
    const categoriaAleatoria = categoriasFiguras[Math.floor(Math.random() * categoriasFiguras.length)];
    const pares = categoriaAleatoria.items;
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
    if (bloqueado || juegoPausado || cardElement.classList.contains('flipped')) return;
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
        juegoIniciado = true; // Bloquea para que no altere el botón tras ganar
        btnIniciar.innerText = "¡Ganaste!";
        btnIniciar.disabled = true;
        
        localStorage.setItem('victorias', victorias);
        localStorage.setItem('scoreTotal', scoreTotal);
        
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
        actualizarUI();
    }
};

btnReiniciar.onclick = () => {
    btnIniciar.disabled = false;
    crearTablero();
};

document.addEventListener("DOMContentLoaded", crearTablero);
