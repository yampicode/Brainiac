const tablero = document.getElementById("tablero-juego");
const btnReiniciar = document.getElementById("btn-reiniciar");
const btnBorrar = document.getElementById("btn-borrar-historial");
const btnIniciar = document.getElementById("btn-iniciar");

let cartasVolteadas = [];
let bloqueado = true;
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
    { nombre: "Comida", items: ['🍕', '🍔', '🍟', '🌭', '🍿', '🥓', '🍣', '🍩', '🍪', '🎂'] },
    { nombre: "Vehículos", items: ['🚗', '🚕', '🚙', '🚌', '🚎', '🏍️', '🚓', '🚑', '🚒', '🚚'] },
 { nombre: "Banderas", items: ['🇦🇷', '🇧🇷', '🇨🇴', '🇪🇸', '🇨🇺', '🇨🇱', '🇪🇨', '🇮🇱', '🇯🇵', '🇻🇪'] },
{ nombre: "Objetos", items: ['🔒', '✂️', '👑', '💡', '✏️', '☎️', '🔑', '💻', '⚓', '🔔'] },
{ nombre: "Caritas", items: ['😀', '😅', '😂', '🥳', '🤓', '🥹', '😋', '😍', '😱', '😎'] },
{ nombre: "Herramientas", items: ['🪏', '⛏️', '🪛', '🔧', '🪚', '🔨', '🪓', '🪜', '🧯', '🔩'] },
{ nombre: "Naturaleza", items: ['⭐', '🔥', '🌛', '🌞', '⚡', '❄️', '🌎', '☁️', '🌪️', '🌈'] }
];

// Variable para guardar la categoría actual de la partida
let paresActuales = [];

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

// Insertar la barra de información de forma segura antes del tablero
tablero.parentNode.insertBefore(displayInfo, tablero);

function actualizarUI() {
    document.getElementById('puntos-partida').innerText = puntuacionPartida;
    document.getElementById('score-total').innerText = scoreTotal;
    document.getElementById('victorias').innerText = victorias;
    document.getElementById('cronometro').innerText = `${tiempo}s`;
    document.getElementById('mejor-tiempo').innerText = mejorTiempo ? `${mejorTiempo}s` : '--';
}

btnIniciar.onclick = () => {
    btnIniciar.disabled = true;
    bloqueado = false;
    tiempo = 0;
    cronometroInterval = setInterval(() => {
        tiempo++;
        document.getElementById('cronometro').innerText = `${tiempo}s`;
    }, 1000);
};

function crearTablero() {
    tablero.innerHTML = '';
    puntuacionPartida = 0;
    bloqueado = true;
    btnIniciar.disabled = false;
    clearInterval(cronometroInterval);
    actualizarUI();
    
    // 1. Seleccionar una categoría aleatoria del array anidado
    const categoriaAleatoria = categoriasFiguras[Math.floor(Math.random() * categoriasFiguras.length)];
    const itemsCategoria = categoriaAleatoria.items; // Ej: 10 emojis disponibles
    
    // 2. Si quieres usar, por ejemplo, 10 pares (20 cartas en total) o menos:
    // Asegurémonos de tomar los elementos y duplicarlos estrictamente
    let pares = [...itemsCategoria]; // Tomamos todos los elementos de la categoría
    let IDs = [...pares, ...pares]; // Los duplicamos para que cada uno tenga su pareja exacta
    
    // 3. Algoritmo de Fisher-Yates corregido para barajar el array completo de forma aleatoria
    for (let i = IDs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [IDs[i], IDs[j]] = [IDs[j], IDs[i]];
    }

    // 4. Crear los elementos en el DOM
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
    if (bloqueado || cardElement.classList.contains('flipped')) return;
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
