import { categoriasFiguras } from './categorias.js';

const tablero = document.getElementById("tablero-juego");
const btnReiniciar = document.getElementById("btn-reiniciar");
const btnBorrar = document.getElementById("btn-borrar-historial");
const btnIniciar = document.getElementById("btn-iniciar");

// --- MANEJO DE PANTALLAS ---
const btnJugar = document.getElementById('btn-jugar');
const menuPrincipal = document.getElementById('menu-principal');
const pantallaJuego = document.getElementById('pantalla-juego');
const btnVolverMenu = document.getElementById('btn-volver-menu');
const img = document.getElementById('img');

btnJugar.addEventListener('click', () => {
    reproducirEfectoSonido('voltear');
    menuPrincipal.style.display = 'none';
    img.style.display = 'none';
    pantallaJuego.style.display = 'block';
    
    // Aquí puedes llamar a tu función de inicializar el tablero del juego
});

btnVolverMenu.addEventListener('click', () => {
    reproducirEfectoSonido('voltear');
    pantallaJuego.style.display = 'none';
       img.style.display = 'block';
    menuPrincipal.style.display = 'flex';
});

// --- MANEJO DE MODALES ---
// Función genérica para abrir modales
function abrirModal(idModal) {
    reproducirEfectoSonido('voltear');
    document.getElementById(idModal).style.display = 'flex';
}

// Asignar eventos a los botones de los modales
document.getElementById('btn-como-jugar').addEventListener('click', () => abrirModal('modal-como-jugar'));
document.getElementById('btn-ajustes').addEventListener('click', () => abrirModal('modal-ajustes'));
document.getElementById('btn-desarrolladores').addEventListener('click', () => abrirModal('modal-desarrolladores'));

// Botones para cerrar cualquier modal
const botonesCerrar = document.querySelectorAll('.btn-cerrar-modal');
botonesCerrar.forEach(boton => {
    boton.addEventListener('click', (e) => {
        reproducirEfectoSonido('voltear');
        // Encuentra el contenedor modal padre y lo oculta
        e.target.closest('.modal-overlay').style.display = 'none';
    });
});


// ==========================================
// CONFIGURACIÓN DE MODO DARK (Con LocalStorage)
// ==========================================

// 1. Verificamos si ya había una preferencia guardada en el navegador
let modoDarkActivado = localStorage.getItem('modoDark') === 'true';

const btnToggleDark = document.getElementById('btn-toggle-dark');

// Función para aplicar el modo oscuro visualmente
function actualizarModoDarkVisual() {
    if (modoDarkActivado) {
        document.body.classList.add('dark-mode');
        if (btnToggleDark) {
            btnToggleDark.innerHTML = `<i class="icofont icofont-sun"></i> Light`;
        }
    } else {
        document.body.classList.remove('dark-mode');
        if (btnToggleDark) {
            btnToggleDark.innerHTML = `<i class="icofont icofont-moon"></i> Dark`;
        }
    }
}

// Ejecutamos al iniciar la página para aplicar el estado guardado de inmediato
actualizarModoDarkVisual();

// 2. Evento al hacer clic en el botón
if (btnToggleDark) {
    btnToggleDark.addEventListener('click', () => {
        modoDarkActivado = !modoDarkActivado; // Invierte el estado

        // Guardamos la preferencia en el navegador
        localStorage.setItem('modoDark', modoDarkActivado);

        // Actualizamos los estilos y el texto/icono del botón
        actualizarModoDarkVisual();
        
        // Opcional: reproducir tu sonido de voltear o un efecto al cambiar
        if (typeof reproducirEfectoSonido === 'function') {
            reproducirEfectoSonido('voltear');
        }
    });
}



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

// ==========================================
// CONFIGURACIÓN DE SONIDO (Con LocalStorage)
// ==========================================

let sonidoActivado = localStorage.getItem('sonidoActivado') !== 'false';

const btnToggleSonido = document.getElementById('btn-toggle-sonido');

// Función auxiliar para actualizar la apariencia visual del botón
function actualizarBotonSonidoVisual() {
    if (!btnToggleSonido) return;
    
    if (sonidoActivado) {
        btnToggleSonido.innerHTML = `<i class="icofont-volume-up"></i> Activado`;
        btnToggleSonido.classList.add('activo');
        btnToggleSonido.classList.remove('inactivo');
    } else {
        btnToggleSonido.innerHTML = `<i class="icofont-volume-mute"></i> Silenciado`;
        btnToggleSonido.classList.add('inactivo');
        btnToggleSonido.classList.remove('activo');
    }
}

// Ejecutamos al iniciar la página para mostrar el estado correcto de inmediato
actualizarBotonSonidoVisual();

// Evento al hacer clic en el botón de ajustes
if (btnToggleSonido) {
    btnToggleSonido.addEventListener('click', () => {
        sonidoActivado = !sonidoActivado; // Cambia entre true y false

        // Guardamos la preferencia en el navegador
        localStorage.setItem('sonidoActivado', sonidoActivado);

        // Actualizamos el aspecto visual del botón
        actualizarBotonSonidoVisual();
    });
}

// Función central para reproducir efectos de audio respetando el ajuste
function reproducirEfectoSonido(tipo) {
    if (!sonidoActivado) return; // Si está silenciado, no hace nada

    let rutaAudio = '';
    if (tipo === 'acierto') rutaAudio = 'acierto.ogg';
    if (tipo === 'error') rutaAudio = 'error.ogg';
    if (tipo === 'voltear') rutaAudio = 'voltear.ogg';
    if (tipo === 'derrota') rutaAudio = 'derrota.ogg';
    if (tipo === 'victoria') rutaAudio = 'victoria.ogg';

    if (rutaAudio) {
        const sonido = new Audio(rutaAudio);
        sonido.play().catch(error => {
            console.log("El navegador bloqueó el audio o no se encontró el archivo", error);
        });
    }
}

// Elementos visuales flotantes y estadísticas
const vidasFlotantes = document.createElement('div');
vidasFlotantes.className = 'vidas-flotantes';
vidasFlotantes.innerHTML = `<strong id="vidas" style="color: #e74c3c;"><i class="icofont-heart" style="color: #e74c3c;"></i> ${vidas}</strong>`;
pantallaJuego.appendChild(vidasFlotantes);

const displayInfo = document.createElement('div');
displayInfo.id = 'panel-estadisticas'; 
displayInfo.style.cssText = `
    width: 100%; max-width: 600px; margin-bottom: 20px; 
    background-color: #fff; padding: 10px; border-radius: 8px; 
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
        reproducirEfectoSonido('voltear');
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
    reproducirEfectoSonido('voltear');

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
        
        reproducirEfectoSonido('acierto');
        guardarDatosLocales();
        actualizarUI(); // Refresca los contadores en pantalla inmediatamente
        
        resetearTurno();
        verificarVictoria();
    } else {
        reproducirEfectoSonido('error');
        vidas--; 
        guardarDatosLocales();
        actualizarUI();

        if (vidas <= 0) {
            clearInterval(cronometroInterval);
            btnIniciar.innerText = "¡Game Over!";
            btnIniciar.disabled = true;
            tablero.style.opacity = "0.4";
            bloqueado = true;

            reproducirEfectoSonido('derrota');
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
            reproducirEfectoSonido('victoria');
            alert(`¡Nuevo Récord! Tiempo: ${tiempo}s`);
        } else {
            reproducirEfectoSonido('victoria');
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
        reproducirEfectoSonido('voltear');
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
    reproducirEfectoSonido('voltear');
    tablero.classList.toggle('revolviendo')
    
    crearTablero();
}

document.addEventListener("DOMContentLoaded", crearTablero);