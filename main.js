const tablero = document.getElementById("tablero-juego");
const btnReiniciar = document.getElementById("btn-reiniciar");
const btnBorrar = document.getElementById("btn-borrar-historial");
const btnIniciar = document.getElementById("btn-iniciar");
const btnPausar = document.getElementById("btn-pausar");

let cartasVolteadas = [];
let bloqueado = true;
let juegoPausado = false;
let puntuacionPartida = 0;

// Recuperar datos desde localStorage
let victorias = parseInt(localStorage.getItem('victorias')) || 0;
let scoreTotal = parseInt(localStorage.getItem('scoreTotal')) || 0;
let mejorTiempo = parseInt(localStorage.getItem('mejorTiempo')) || null;
let tiempo = 0;
let cronometroInterval;

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

// Iniciar Juego
btnIniciar.onclick = () => {
    btnIniciar.disabled = true;
    btnPausar.disabled = false;
    bloqueado = false;
    juegoPausado = false;
    btnPausar.innerText = "Pausar";
    
    cronometroInterval = setInterval(() => {
        tiempo++;
        document.getElementById('cronometro').innerText = `${tiempo}s`;
    }, 1000);
};

// Pausar / Reanudar Juego
btnPausar.onclick = () => {
    if (!juegoPausado) {
        // Pausar
        clearInterval(cronometroInterval);
        juegoPausado = true;
        bloqueado = true;
        btnPausar.innerText = "Reanudar";
        tablero.style.opacity = "0.5"; // Efecto visual de pausa
    } else {
        // Reanudar
        cronometroInterval = setInterval(() => {
            tiempo++;
            document.getElementById('cronometro').innerText = `${tiempo}s`;
        }, 1000);
        juegoPausado = false;
        bloqueado = false;
        btnPausar.innerText = "Pausar";
        tablero.style.opacity = "1";
    }
};

function crearTablero() {
    tablero.innerHTML = '';
    puntuacionPartida = 0;
    bloqueado = true;
    juegoPausado = false;
    tiempo = 0;
    btnIniciar.disabled = false;
    btnPausar.disabled = true;
    btnPausar.innerText = "Pausar";
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

    if (cartasVolteadas.length === 2) {
        verificarCoincidencia();
    }
}

function verificarCoincidencia() {
    bloqueado = true;
    const [primera, segunda] = cartasVolteadas;
    
    if (primera.dataset.id === segunda.dataset.id) {
        puntuacionPartida += 2;
        actualizarUI();
        resetearTurno();
        verificarVictoria();
    } else {
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
        btnPausar.disabled = true;
        
        localStorage.setItem('victorias', victorias);
        localStorage.setItem('scoreTotal', scoreTotal);
        
        if (mejorTiempo === null || tiempo < mejorTiempo) {
            mejorTiempo = tiempo;
            localStorage.setItem('mejorTiempo', mejorTiempo);
            alert(`¡Nuevo Récord! Tiempo: ${tiempo}s`);
        } else {
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

btnReiniciar.onclick = crearTablero;
document.addEventListener("DOMContentLoaded", crearTablero);
