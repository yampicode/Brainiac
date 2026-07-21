const tablero = document.getElementById("tablero-juego");
const btnReiniciar = document.getElementById("btn-reiniciar");

const btnBorrar = document.getElementById("btn-borrar-historial");
const btnIniciar = document.getElementById("btn-iniciar");

let cartasVolteadas = [];
let bloqueado = true; // El juego inicia bloqueado hasta presionar "Iniciar[span_3](start_span)"[span_3](end_span)
let puntuacionPartida = 0;

// Recuperar datos desde localStorage[span_4](start_span)[span_4](end_span)
let victorias = parseInt(localStorage.getItem('victorias')) || 0;
let scoreTotal = parseInt(localStorage.getItem('scoreTotal')) || 0;
let mejorTiempo = parseInt(localStorage.getItem('mejorTiempo')) || null;
let tiempo = 0;
let cronometroInterval;

// Crear contenedor de marcadores con 5 columnas[span_5](start_span)[span_5](end_span)
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
    <div><div style="font-size: 1em; font-weight: 900; color: #001f54">Tiempo</div><strong id="cronometro">0s</strong></div>
    <div><div style="font-size: 1em; color: #001f54; font-weight: 900;">Récord</div><strong id="mejor-tiempo" style="color: #001f54;">${mejorTiempo ? mejorTiempo + 's' : '--'}</strong></div>
    <div><div style="font-size: 1em; font-weight: 900; color: #001f54;">Puntos</div><strong id="puntos-partida">0</strong></div>
    <div><div style="font-size: 1em; font-weight: 900; color: #001f54">Score</div><strong id="score-total" style="color: #0056b3;">${scoreTotal}</strong></div>
    <div><div style="font-size: 1em; font-weight: 900; color: #001f54;">Victorias</div><strong id="victorias" style="color: #28a745;">${victorias}</strong></div>
`;

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
    
    const pares = ['🚗', '🏍️', '💡', '👑', '✂️', '✏️', '🔔', '🔑', '🔒', '🚀'];
    let IDs = [...pares, ...pares];
    
    // Algoritmo de Fisher-Yates para barajar[span_6](start_span)[span_6](end_span)
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