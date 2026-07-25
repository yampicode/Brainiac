import { categoriasFiguras } from './categorias.js';

// A partir de aquí, tu código del juego funciona exactamente igual, 
// ya que 'categoriasFiguras' estará disponible con todos tus arrays.
//;console.log(categoriasFiguras);

const tablero = document.getElementById("tablero-juego");
const btnReiniciar = document.getElementById("btn-reiniciar");
const btnBorrar = document.getElementById("btn-borrar-historial");
const btnIniciar = document.getElementById("btn-iniciar");


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