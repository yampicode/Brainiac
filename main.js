import { categoriasFiguras } from './categorias.js';
import { dict } from './traducciones.js';

const tablero = document.getElementById("tablero-juego");
const btnReiniciar = document.getElementById("btn-reiniciar");
const btnBorrar = document.getElementById("btn-borrar-historial");
const btnIniciar = document.getElementById("btn-iniciar");

const footer = document.getElementById("footer");

// --- MANEJO DE PANTALLAS ---
const btnJugar = document.getElementById('btn-jugar');
const menuPrincipal = document.getElementById('menu-principal');
const pantallaJuego = document.getElementById('pantalla-juego');
const btnVolverMenu = document.getElementById('btn-volver-menu');
const img = document.getElementById('img');

btnJugar.addEventListener('click', () => {
    reproducirEfectoSonido('voltear');
    menuPrincipal.style.display = 'none';
    footer.style.display = 'none';
    img.style.display = 'none';
    pantallaJuego.style.display = 'block';
});

btnVolverMenu.addEventListener('click', () => {
    reproducirEfectoSonido('voltear');
    pantallaJuego.style.display = 'none';
    footer.style.display = 'block';
    img.style.display = 'block';
    menuPrincipal.style.display = 'flex';
});

const btnSalir = document.getElementById('btn-salir');

if (btnSalir) {
    btnSalir.addEventListener('click', () => {
        reproducirEfectoSonido('voltear');
        window.close();
    });
}

// Cargar idioma guardado o por defecto 'es'
let idiomaActual = localStorage.getItem('idiomaJuego') || 'es';
const selectIdioma = document.getElementById('select-idioma');

if (selectIdioma) {
    selectIdioma.value = idiomaActual;
    selectIdioma.addEventListener('change', (e) => {
        idiomaActual = e.target.value;
        localStorage.setItem('idiomaJuego', idiomaActual);
        actualizarTextosIdioma();
        if (typeof reproducirEfectoSonido === 'function') {
            reproducirEfectoSonido('voltear');
        }
    });
}

function t(key) {
    return dict[idiomaActual][key] || dict['es'][key] || key;
}

function actualizarTextosIdioma() {
    // Menú principal y botones estáticos
    const btnJugarText = document.getElementById('btn-jugar');
    if (btnJugarText) btnJugarText.innerText = t('btnJugar');

    const btnComoJugarText = document.getElementById('btn-como-jugar');
    if (btnComoJugarText) btnComoJugarText.innerText = t('btnComoJugar');

    const btnAjustesText = document.getElementById('btn-ajustes');
    if (btnAjustesText) btnAjustesText.innerText = t('btnAjustes');

    const btnDesarrolladoresText = document.getElementById('btn-desarrolladores');
    if (btnDesarrolladoresText) btnDesarrolladoresText.innerText = t('btnDesarrolladores');

    // Botón de iniciar partida según su estado actual
    if (!juegoIniciado && vidas > 0) {
        btnIniciar.innerText = t('iniciarJuego');
    } else if (juegoIniciado && !bloqueado) {
        btnIniciar.innerText = t('pausar') || "Pausar";
    }

    // Textos dinámicos del panel de estadísticas superior
    const lblTiempo = document.getElementById('lbl-tiempo');
    if (lblTiempo) lblTiempo.innerText = t('tiempo');

    const lblPuntos = document.getElementById('lbl-puntos');
    if (lblPuntos) lblPuntos.innerText = t('puntos');

    const lblVictorias = document.getElementById('lbl-victorias');
    if (lblVictorias) lblVictorias.innerText = t('victorias');

    const lblRecord = document.getElementById('lbl-record');
    if (lblRecord) lblRecord.innerText = t('record');

    const lblScore = document.getElementById('lbl-score');
    if (lblScore) lblScore.innerText = t('score');

    const lblDerrotas = document.getElementById('lbl-derrotas');
    if (lblDerrotas) lblDerrotas.innerText = t('derrotas');
}

// Ejecutar al iniciar la app para aplicar el idioma guardado
actualizarTextosIdioma();

// ==========================================
// CONFIGURACIÓN DE ANIMACIONES
// ==========================================
let animacionesActivadas = localStorage.getItem('animacionesActivadas') !== 'false';
const btnToggleAnimaciones = document.getElementById('btn-toggle-animaciones');

function actualizarBotonAnimacionesVisual() {
    if (!btnToggleAnimaciones) return;

    if (animacionesActivadas) {
        btnToggleAnimaciones.innerHTML = `Activadas`;
        btnToggleAnimaciones.classList.add('activo');
        btnToggleAnimaciones.classList.remove('inactivo');
        document.body.classList.remove('sin-animaciones');
    } else {
        btnToggleAnimaciones.innerHTML = `Desactivadas`;
        btnToggleAnimaciones.classList.add('inactivo');
        btnToggleAnimaciones.classList.remove('activo');
        document.body.classList.add('sin-animaciones');
    }
}

actualizarBotonAnimacionesVisual();

if (btnToggleAnimaciones) {
    btnToggleAnimaciones.addEventListener('click', () => {
        animacionesActivadas = !animacionesActivadas;
        localStorage.setItem('animacionesActivadas', animacionesActivadas);
        actualizarBotonAnimacionesVisual();
        if (typeof reproducirEfectoSonido === 'function') {
            reproducirEfectoSonido('voltear');
        }
    });
}

// --- MANEJO DE MODALES (ESTÁTICOS) ---
function abrirModal(idModal) {
    reproducirEfectoSonido('voltear');
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.classList.add('activo');
    }
}

const btnComoJugar = document.getElementById('btn-como-jugar');
const btnAjustes = document.getElementById('btn-ajustes');
const btnDesarrolladores = document.getElementById('btn-desarrolladores');

if (btnComoJugar) btnComoJugar.addEventListener('click', () => abrirModal('modal-como-jugar'));
if (btnAjustes) btnAjustes.addEventListener('click', () => abrirModal('modal-ajustes'));
if (btnDesarrolladores) btnDesarrolladores.addEventListener('click', () => abrirModal('modal-desarrolladores'));

const botonesCerrar = document.querySelectorAll('.btn-cerrar-modal');
botonesCerrar.forEach(boton => {
    boton.addEventListener('click', (e) => {
        reproducirEfectoSonido('voltear');
        const modalOverlay = e.target.closest('.modal-overlay');
        if (modalOverlay) {
            modalOverlay.classList.remove('activo');
        }
    });
});

// --- Lógica del Sistema de Modales Dinámicos ---
const modalOverlay = document.getElementById('modal-sistema');
const modalTitulo = document.getElementById('modal-titulo');
const modalMensaje = document.getElementById('modal-mensaje');
const modalBotonPrincipal = document.getElementById('modal-boton-principal');
const modalBotonSecundario = document.getElementById('modal-boton-secundario');

function mostrarModal(titulo, mensaje, opciones = {}) {
    modalTitulo.textContent = titulo;
    modalMensaje.innerHTML = mensaje;

    modalBotonPrincipal.textContent = opciones.textoBotonPrincipal || 'Aceptar';
    modalBotonPrincipal.onclick = null; 
    modalBotonPrincipal.onclick = () => {
        ocultarModal();
        if (opciones.callbackPrincipal) opciones.callbackPrincipal();
    };

    if (opciones.textoBotonSecundario) {
        modalBotonSecundario.style.display = 'inline-block';
        modalBotonSecundario.textContent = opciones.textoBotonSecundario;
        modalBotonSecundario.onclick = null;
        modalBotonSecundario.onclick = () => {
            ocultarModal();
            if (opciones.callbackSecundario) opciones.callbackSecundario();
        };
    } else {
        modalBotonSecundario.style.display = 'none';
    }

    modalOverlay.classList.add('activo');
}

function ocultarModal() {
    modalOverlay.classList.remove('activo');
}

// ==========================================
// CONFIGURACIÓN DE MODO DARK
// ==========================================
let modoDarkActivado = localStorage.getItem('modoDark') === 'true';
const btnToggleDark = document.getElementById('btn-toggle-dark');

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

actualizarModoDarkVisual();

if (btnToggleDark) {
    btnToggleDark.addEventListener('click', () => {
        modoDarkActivado = !modoDarkActivado;
        localStorage.setItem('modoDark', modoDarkActivado);
        actualizarModoDarkVisual();
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
// CONFIGURACIÓN DE SONIDO
// ==========================================
let sonidoActivado = localStorage.getItem('sonidoActivado') !== 'false';
const btnToggleSonido = document.getElementById('btn-toggle-sonido');

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

actualizarBotonSonidoVisual();

if (btnToggleSonido) {
    btnToggleSonido.addEventListener('click', () => {
        sonidoActivado = !sonidoActivado;
        localStorage.setItem('sonidoActivado', sonidoActivado);
        actualizarBotonSonidoVisual();
    });
}

function reproducirEfectoSonido(tipo) {
    if (!sonidoActivado) return;

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

// Elementos visuales flotantes y estadísticas (Con IDs para traducción)
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
        <div><div id="lbl-tiempo">${t('tiempo')}</div><strong id="cronometro">0s</strong></div>
        <div><div id="lbl-puntos">${t('puntos')}</div><strong id="puntos-partida">0</strong></div>
        <div><div id="lbl-victorias">${t('victorias')}</div><strong id="victorias" style="color: #28a745;">${victorias}</strong></div>
        <div><div id="lbl-record">${t('record')}</div><strong id="mejor-tiempo" style="color: #d9534f;">${mejorTiempo ? mejorTiempo + 's' : '--'}</strong></div>
        <div><div id="lbl-score">${t('score')}</div><strong id="score-total" style="color: #0056b3;">${scoreTotal}</strong></div>
        <div><div id="lbl-derrotas">${t('derrotas')}</div><strong id="derrotas" style="color: #e74c3c;">${derrotas}</strong></div>
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

// Botón de Iniciar / Pausar
btnIniciar.onclick = () => {
    reproducirEfectoSonido('voltear');
    if (vidas <= 0) return;

    if (!juegoIniciado) {
        juegoIniciado = true;
        bloqueado = false;
        btnIniciar.innerText = t('pausar') || "Pausar";

        if (cronometroInterval) clearInterval(cronometroInterval);
        cronometroInterval = setInterval(() => {
            tiempo++;
            document.getElementById('cronometro').innerText = `${tiempo}s`;
        }, 1000);

    } else {
        if (bloqueado) {
            bloqueado = false;
            btnIniciar.innerText = t('pausar') || "Pausar";
            tablero.style.opacity = "1";
            cronometroInterval = setInterval(() => {
                tiempo++;
                document.getElementById('cronometro').innerText = `${tiempo}s`;
            }, 1000);
        } else {
            clearInterval(cronometroInterval);
            bloqueado = true;
            btnIniciar.innerText = t('reanudar') || "Reanudar";
            tablero.style.opacity = "0.5";
        }
    }
};

function crearTablero() {
    const cartasExistentes = document.querySelectorAll('.card.flipped');

    if (cartasExistentes.length > 0) {
        cartasExistentes.forEach(card => card.classList.remove('flipped'));
        setTimeout(() => {
            inicializarNuevaPartida();
        }, 400);
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
    btnIniciar.innerText = t('iniciarJuego');
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
        puntuacionPartida += 2;
        scoreTotal += 2;
        vidas++; 

        reproducirEfectoSonido('acierto');
        guardarDatosLocales();
        actualizarUI();

        resetearTurno();
        verificarVictoria();
    } else {
        reproducirEfectoSonido('error');
        vidas--; 
        guardarDatosLocales();
        actualizarUI();

        if (vidas <= 0) {
            clearInterval(cronometroInterval);
            btnIniciar.innerText = t('gameOverTitulo');
            btnIniciar.disabled = true;
            tablero.style.opacity = "0.4";
            bloqueado = true;

            reproducirEfectoSonido('derrota');
            derrotas++;
            guardarDatosLocales();
            actualizarUI(); 

            document.querySelectorAll('.card').forEach(card => card.classList.add('flipped'));

            setTimeout(() => {
                mostrarModal(
                    t('gameOverTitulo'),
                    t('gameOverMsg'),
                    {
                        textoBotonPrincipal: t('btnIrMenu'),
                        callbackPrincipal: () => {
                            pantallaJuego.style.display = 'none';
                            img.style.display = 'block';
                            menuPrincipal.style.display = 'flex';
                        },
                        textoBotonSecundario: t('btnReintentar'),
                        callbackSecundario: () => {
                            vidas = 7;
                            crearTablero();
                        }
                    }
                );
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
        btnIniciar.innerText = t('victoriaTitulo');
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

            mostrarModal(
                `${t('victoriaTitulo')} (${tiempo}s)`,
                t('victoriaMsg'),
                {
                    textoBotonPrincipal: t('btnSiguiente'),
                    callbackPrincipal: () => {
                        crearTablero();
                    }
                }
            );
        } else {
            reproducirEfectoSonido('victoria');

            mostrarModal(
                `${t('victoriaTitulo')} (${tiempo}s)`,
                t('victoriaMsg'),
                {
                    textoBotonPrincipal: t('btnSiguiente'),
                    callbackPrincipal: () => {
                        crearTablero();
                    }
                }
            );
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
    tablero.classList.toggle('revolviendo');
    crearTablero();
}

document.addEventListener("DOMContentLoaded", crearTablero);