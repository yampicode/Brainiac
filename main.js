import { categoriasFiguras } from './categorias.js';
import { t, traducciones } from './traducciones.js';

// ==========================================
// SISTEMA DE INTERNACIONALIZACIÓN (i18n)
// ==========================================
let idiomaActual = localStorage.getItem('idioma') || 'es';

function actualizarTextosEstaticos() {
    // Actualizar textos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(elemento => {
        const clave = elemento.getAttribute('data-i18n');
        if (clave) {
            elemento.textContent = t(clave, idiomaActual);
        }
    });
    
    // Actualizar títulos con data-i18n-title
    document.querySelectorAll('[data-i18n-title]').forEach(elemento => {
        const clave = elemento.getAttribute('data-i18n-title');
        if (clave) {
            elemento.title = t(clave, idiomaActual);
        }
    });
}

function actualizarPanelEstadisticas() {
    const panelStats = document.getElementById('panel-estadisticas');
    if (!panelStats) return;
    
    // Reconstruir el panel con las traducciones actuales
    panelStats.innerHTML = `
        <div class="grid-stats" style="display: grid; grid-template-columns: repeat(3, 1fr); text-align: center; gap: 10px;">
            <div><div>${t('tiempo', idiomaActual)}</div><strong id="cronometro">${tiempo}s</strong></div>
            <div><div>${t('puntos', idiomaActual)}</div><strong id="puntos-partida">${puntuacionPartida}</strong></div>
            <div><div>${t('victorias_label', idiomaActual)}</div><strong id="victorias" style="color: #28a745;">${victorias}</strong></div>
            <div><div>${t('record', idiomaActual)}</div><strong id="mejor-tiempo" style="color: #d9534f;">${mejorTiempo ? mejorTiempo + 's' : '--'}</strong></div>
            <div><div>${t('score', idiomaActual)}</div><strong id="score-total" style="color: #0056b3;">${scoreTotal}</strong></div>
            <div><div>${t('derrotas', idiomaActual)}</div><strong id="derrotas" style="color: #e74c3c;">${derrotas}</strong></div>
        </div>
    `;
}

function actualizarBotonesJuego() {
    if (!btnIniciar) return;
    
    if (vidas <= 0 && juegoIniciado) {
        btnIniciar.textContent = t('game_over', idiomaActual);
    } else if (!juegoIniciado) {
        btnIniciar.textContent = t('iniciar_juego', idiomaActual);
    } else if (bloqueado) {
        btnIniciar.textContent = t('reanudar', idiomaActual);
    } else {
        btnIniciar.textContent = t('pausar', idiomaActual);
    }
}

function cambiarIdioma(nuevoIdioma) {
    idiomaActual = nuevoIdioma;
    localStorage.setItem('idioma', idiomaActual);
    
    // Actualizar textos estáticos del HTML
    actualizarTextosEstaticos();
    
    // Actualizar panel de estadísticas si el juego está en pantalla
    if (pantallaJuego.style.display !== 'none') {
        actualizarPanelEstadisticas();
        actualizarBotonesJuego();
    }
    
    // Actualizar botones de sonido, animaciones y dark mode
    actualizarBotonSonidoVisual();
    actualizarBotonAnimacionesVisual();
    actualizarModoDarkVisual();
    
    // Actualizar textos del modal sistema si está abierto
    // (se maneja dinámicamente cuando se llama a mostrarModal)
}

// ==========================================
// CONFIGURACIÓN DE SONIDO
// ==========================================
let sonidoActivado = localStorage.getItem('sonidoActivado') !== 'false';
const btnToggleSonido = document.getElementById('btn-toggle-sonido');

function actualizarBotonSonidoVisual() {
    if (!btnToggleSonido) return;

    if (sonidoActivado) {
        btnToggleSonido.innerHTML = `<i class="icofont-volume-up"></i> ${t('activado', idiomaActual)}`;
        btnToggleSonido.classList.add('activo');
        btnToggleSonido.classList.remove('inactivo');
    } else {
        btnToggleSonido.innerHTML = `<i class="icofont-volume-mute"></i> ${t('silenciado', idiomaActual)}`;
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
    if (tipo === 'clic') rutaAudio = 'clic.ogg';
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

// --- MANEJO DE PANTALLAS ---
const btnJugar = document.getElementById('btn-jugar');
const menuPrincipal = document.getElementById('menu-principal');
const pantallaJuego = document.getElementById('pantalla-juego');
const btnVolverMenu = document.getElementById('btn-volver-menu');
const img = document.getElementById('img');

btnJugar.addEventListener('click', () => {
    reproducirEfectoSonido('clic');
    menuPrincipal.style.display = 'none';
    footer.style.display = 'none';
    img.style.display = 'none';
    pantallaJuego.style.display = 'block';
    actualizarPanelEstadisticas(); // Actualizar con el idioma actual
    actualizarBotonesJuego();
});

btnVolverMenu.addEventListener('click', () => {
    reproducirEfectoSonido('clic');
    pantallaJuego.style.display = 'none';
    footer.style.display = 'block';
    img.style.display = 'block';
    menuPrincipal.style.display = 'flex';
});

const btnSalir = document.getElementById('btn-salir');

if (btnSalir) {
    btnSalir.addEventListener('click', () => {
        reproducirEfectoSonido('clic');
        window.close();
    });
}

// ==========================================
// CONFIGURACIÓN DE ANIMACIONES
// ==========================================
let animacionesActivadas = localStorage.getItem('animacionesActivadas') !== 'false';
const btnToggleAnimaciones = document.getElementById('btn-toggle-animaciones');

function actualizarBotonAnimacionesVisual() {
    if (!btnToggleAnimaciones) return;

    if (animacionesActivadas) {
        btnToggleAnimaciones.innerHTML = t('animaciones_activadas', idiomaActual);
        btnToggleAnimaciones.classList.add('activo');
        btnToggleAnimaciones.classList.remove('inactivo');
        document.body.classList.remove('sin-animaciones');
    } else {
        btnToggleAnimaciones.innerHTML = t('animaciones_desactivadas', idiomaActual);
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
            reproducirEfectoSonido('clic');
        }
    });
}

// --- MANEJO DE MODALES (ESTÁTICOS) ---
function abrirModal(idModal) {
    reproducirEfectoSonido('clic');
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
        reproducirEfectoSonido('clic');
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

    modalBotonPrincipal.textContent = opciones.textoBotonPrincipal || t('cerrar', idiomaActual);
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
            btnToggleDark.innerHTML = `<i class="icofont icofont-sun"></i> ${t('light', idiomaActual)}`;
        }
    } else {
        document.body.classList.remove('dark-mode');
        if (btnToggleDark) {
            btnToggleDark.innerHTML = `<i class="icofont icofont-moon"></i> ${t('dark', idiomaActual)}`;
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
            reproducirEfectoSonido('clic');
        }
    });
}

// ==========================================
// INICIALIZACIÓN DEL SISTEMA DE IDIOMAS
// ==========================================
const selectIdioma = document.getElementById('btn-toggle-idioma');

selectIdioma.addEventListener('click', () => {
    reproducirEfectoSonido('clic');
});
if (selectIdioma) {
    selectIdioma.value = idiomaActual;
    selectIdioma.addEventListener('change', (e) => {
        reproducirEfectoSonido('clic');
        cambiarIdioma(e.target.value);
    });
}

// Inicializar traducciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cambiarIdioma(idiomaActual);
});

// ==========================================
// LÓGICA DEL JUEGO
// ==========================================

const tablero = document.getElementById("tablero-juego");
const btnReiniciar = document.getElementById("btn-reiniciar");
const btnBorrar = document.getElementById("btn-borrar-historial");
const btnIniciar = document.getElementById("btn-iniciar");

const footer = document.getElementById("footer");

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
tablero.parentNode.insertBefore(displayInfo, tablero);

// Inicializar panel con traducciones
actualizarPanelEstadisticas();

function actualizarUI() {
    document.getElementById('puntos-partida').innerText = puntuacionPartida;
    document.getElementById('score-total').innerText = scoreTotal;
    document.getElementById('victorias').innerText = victorias;
    document.getElementById('derrotas').innerText = derrotas;
    document.getElementById('cronometro').innerText = `${tiempo}s`;
    document.getElementById('mejor-tiempo').innerText = mejorTiempo ? `${mejorTiempo}s` : '--';

    const claseIcono = vidas > 0 ? 'icofont-heart' : 'icofont-heart-alt';
    document.getElementById('vidas').innerHTML = `<i class="${claseIcono}" style="color: #e74c3c;"></i> ${Math.max(0, vidas)}`;
    
    actualizarBotonesJuego();
}

// Botón de Iniciar / Pausar
btnIniciar.onclick = () => {
    reproducirEfectoSonido('clic');
    if (vidas <= 0) return;

    if (!juegoIniciado) {
        juegoIniciado = true;
        bloqueado = false;
        actualizarBotonesJuego();

        if (cronometroInterval) clearInterval(cronometroInterval);
        cronometroInterval = setInterval(() => {
            tiempo++;
            document.getElementById('cronometro').innerText = `${tiempo}s`;
        }, 1000);

    } else {
        if (bloqueado) {
            bloqueado = false;
            actualizarBotonesJuego();
            tablero.style.opacity = "1";
            cronometroInterval = setInterval(() => {
                tiempo++;
                document.getElementById('cronometro').innerText = `${tiempo}s`;
            }, 1000);
        } else {
            clearInterval(cronometroInterval);
            bloqueado = true;
            actualizarBotonesJuego();
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
    tablero.style.backgroundColor = 'transparent';
    tablero.style.background = 'transparent';
    puntuacionPartida = 0;
    if (vidas <= 0) {
        vidas = 7;
    }
    bloqueado = false;
    juegoIniciado = false;
    tiempo = 0;
    cartasVolteadas = [];
    actualizarBotonesJuego();
    btnIniciar.disabled = false;
    tablero.style.opacity = "1";
    if (cronometroInterval) clearInterval(cronometroInterval);
    guardarDatosLocales();
    actualizarUI();
    actualizarPanelEstadisticas();

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
    reproducirEfectoSonido('clic');

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
            actualizarBotonesJuego();
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
                    t('game_over', idiomaActual),
                    t('game_over_mensaje', idiomaActual),
                    {
                        textoBotonPrincipal: t('ir_menu', idiomaActual),
                        callbackPrincipal: () => {
                            pantallaJuego.style.display = 'none';
                            img.style.display = 'block';
                            menuPrincipal.style.display = 'flex';
                            footer.style.display = 'block';
                        },
                        textoBotonSecundario: t('reintentar_nivel', idiomaActual),
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
        actualizarBotonesJuego();
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
                t('tiempo_record', idiomaActual, tiempo),
                t('victoria_mensaje', idiomaActual),
                {
                    textoBotonPrincipal: t('siguiente_nivel', idiomaActual),
                    callbackPrincipal: () => {
                        crearTablero();
                    }
                }
            );
        } else {
            reproducirEfectoSonido('victoria');

            mostrarModal(
                t('tiempo_victoria', idiomaActual, tiempo, puntuacionPartida),
                t('victoria_mensaje', idiomaActual),
                {
                    textoBotonPrincipal: t('siguiente_nivel', idiomaActual),
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
    reproducirEfectoSonido('clic');
    if (confirm(t('confirmar_borrar', idiomaActual))) {
        localStorage.clear();
        scoreTotal = 0;
        vidas = 7;
        victorias = 0;
        derrotas = 0;
        mejorTiempo = null;
        indiceCategoriaActual = 0;
        actualizarUI();
        crearTablero();
        actualizarPanelEstadisticas();
    }
};

btnReiniciar.onclick = () => {
    reproducirEfectoSonido('clic');
    tablero.classList.toggle('revolviendo');
    crearTablero();
}

document.addEventListener("DOMContentLoaded", crearTablero);