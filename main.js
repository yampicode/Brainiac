const tablero = document.getElementById("tablero-juego");
const btnReiniciar = document.getElementById("btn-reiniciar");
const btnBorrar = document.getElementById("btn-borrar-historial");
const btnIniciar = document.getElementById("btn-iniciar");

// 1. Array anidado con diferentes categorías de figuras (emojis e icofont)
const categoriasFiguras = [
    { nombre: "Animales", items: ['🐶', '🐱', '🐰', '🦊', '🐻', '🐼', '🐨', '🦁', '🐯', '🐮'] },
    { nombre: "Frutas", items: ['🍎', '🍌', '🍉', '🍇', '🍓', '🍍', '🥝', '🍑', '🍒', '🍋'] },
    { nombre: "Deportes", items: ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎱', '🏓', '🥊'] },
    { nombre: "Comida", items: ['🍕', '🍔', '🍟', '🌭', '🧀', '🥖', '🍗', '🥪', '🫓', '🎂'] },
    { nombre: "Vehículos", items: ['🚗', '🚕', '🚙', '🚌', '🚎', '🛻', '🚓', '🚑', '🚒', '🚚'] },
    { nombre: "Banderas de América del Sur", items: ['🇦🇷', '🇧🇷', '🇨🇴', '🇺🇾', '🇵🇪', '🇨🇱', '🇪🇨', '🇧🇴', '🇵🇾', '🇻🇪', '🇸🇷', '🇬🇾'] },
    { nombre: "Objetos", items: ['🔒', '✂️', '👑', '💡', '✏️', '☎️', '🔑', '💻', '⚓', '🔔'] },
    { nombre: "Caritas", items: ['😀', '😅', '😂', '🥳', '🤓', '🥹', '😋', '😍', '😱', '😎'] },
    { nombre: "Herramientas", items: ['🪏', '⛏️', '🪛', '🔧', '🪚', '🔨', '🪓', '🪜', '🧯', '🔩'] },
    { nombre: "Naturaleza", items: ['⭐', '🔥', '🌛', '🌞', '⚡', '❄️', '🌎', '☁️', '🌪️', '🌈'] },
    { nombre: "Flores", items: ['🌹', '🌻', '🌸', '🌺', '🪷', '🏵️', '🪻', '🌼', '🌷', '💮'] },
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
    { nombre: "Transporte", items: ['🚂', '✈️', '🏍️', '🚁', '🚀', '⛵', '🛶', '🛸', '🛳️', '🚠'] },
    { nombre: "Vegetables", items: ['🍆', '🫑', '🥦', '🧄', '🫚', '🧅', '🥔', '🥕', '🌶️', '🍅'] },
    { nombre: "Bonus", items: ['📢', '🔍', '🛡️', '⚔️', '📜', '🪤', '⏳', '⏰', '📰', '📦'] },
    { nombre: "Arbustos", items: ['🍄', '🌵', '🌴', '🪴', '🍀', '🌾', '🌳', '🌲', '🍁', '🍂', '🪾', '🌿'] },
    { nombre: "Elementos", items: ['🚨', '🚧', '⛽', '🛢️', '🧭', '🛟', '♻️', '🛞', '🚦', '🗺️', '🧳', '🌐'] },
    { nombre: "Marcas", items: ['icofont-brand-cnn', 'icofont-brand-apple', 'icofont-brand-amazon', 'icofont-brand-dell', 'icofont-brand-disney', 'icofont-brand-ferrari', 'icofont-brand-android-robot', 'icofont-brand-coca-cola', 'icofont-brand-general-electric', 'icofont-brand-nasa', 'icofont-warner-bros', 'icofont-brand-motorola'] }
];

// Recuperar el índice de la categoría actual o empezar en 0 si no existe
let indiceCategoriaActual = parseInt(localStorage.getItem('indiceCategoriaActual')) || 0;

let cartasVolteadas = [];
let bloqueado = true;
let juegoIniciado = false;
let juegoPausado = false;
let puntuacionPartida = 0;
let vidas = 7;
let scoreAcumuladoParaVida = 0; 
let maxVidas = 7; 

// Recuperar datos desde localStorage
let victorias = parseInt(localStorage.getItem('victorias')) || 0;
let derrotas = parseInt(localStorage.getItem('derrotas')) || 0;
let scoreTotal = parseInt(localStorage.getItem('scoreTotal')) || 0;
let mejorTiempo = parseInt(localStorage.getItem('mejorTiempo')) || null;
let tiempo = 0;
let cronometroInterval; 

function animarVidaExtra() {
    const corazonAnimado = document.createElement('div');
    corazonAnimado.innerHTML = '❤️+1';
    corazonAnimado.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2rem;
        font-weight: bold;
        color: #e74c3c;
        z-index: 9999;
        pointer-events: none;
        transition: all 1.2s cubic-bezier(0.25, 1, 0.5, 1);
        opacity: 1;
    `;
    document.body.appendChild(corazonAnimado);

    setTimeout(() => {
        corazonAnimado.style.top = '15px';
        corazonAnimado.style.left = 'calc(100vw - 60px)';
        corazonAnimado.style.fontSize = '1rem';
        corazonAnimado.style.opacity = '0';
    }, 50);

    setTimeout(() => {
        corazonAnimado.remove();
    }, 1250);
}

// Funciones para reproducir efectos de sonido
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

// 1. Crear contenedor de vidas flotante en la esquina superior derecha
const vidasFlotantes = document.createElement('div');
vidasFlotantes.className = 'vidas-flotantes';
vidasFlotantes.innerHTML = `<span></span><strong id="vidas" style="color: #e74c3c;"><i class="icofont-heart" style="color: #e74c3c;"></i> 7</strong>`;
document.body.appendChild(vidasFlotantes);

// 2. Crear contenedor de marcadores principal
const displayInfo = document.createElement('div');
displayInfo.id = 'panel-estadisticas'; 
displayInfo.style.cssText = `
    width: 100%; 
    max-width: 600px; 
    margin-bottom: 20px; 
    background-color: #fff; 
    padding: 12px; 
    border-radius: 8px; 
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    color: #333;
`;

displayInfo.innerHTML = `
    <div class="grid-stats">
        <div><div class="valores">Tiempo</div><strong id="cronometro">0s</strong></div>
        <div><div class="valores">Puntos</div><strong id="puntos-partida">0</strong></div>
        <div><div class="valores">Victorias</div><strong id="victorias" style="color: #28a745;">${victorias}</strong></div>
        <div><div class="valores">Récord</div><strong id="mejor-tiempo" style="color: #d9534f;">${mejorTiempo ? mejorTiempo + 's' : '--'}</strong></div>
        <div><div class="valores">Score</div><strong id="score-total" style="color: #0056b3;">${scoreTotal}</strong></div>
        <div><div class="valores">Derrotas</div><strong id="derrotas" style="color: #e74c3c;">${derrotas}</strong></div>
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

    // Aseguramos que pinte el icono y luego el número de vidas
    const claseIcono = vidas > 0 ? 'icofont-heart' : 'icofont-heart-alt';
    const colorIcono = vidas > 0 ? '#e74c3c' : '#333';
    
    document.getElementById('vidas').innerHTML = `<i class="${claseIcono}" style="color: ${colorIcono};"></i> ${Math.max(0, vidas)}`;
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
}; // <--- LLAVE DE CIERRE DE btnIniciar.onclick AÑADIDA CORRECTAMENTE

function crearTablero() {
    tablero.innerHTML = '';
    puntuacionPartida = 0;
    maxVidas = 7;                
    vidas = maxVidas;             
    scoreAcumuladoParaVida = 0;   
    bloqueado = true;
    juegoIniciado = false;
    juegoPausado = false;
    tiempo = 0;
    cartasVolteadas = []; 
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
        
        // Soporte tanto para Emojis como para clases de Icofont automáticamente
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
        scoreTotal += 2; 
        scoreAcumuladoParaVida += 2;

        if (scoreAcumuladoParaVida >= 100) {
            scoreAcumuladoParaVida -= 100; 
            maxVidas++; 
            vidas = maxVidas; 
            animarVidaExtra(); 
        } else {
            if (vidas < maxVidas) {
                vidas++;
            }
        }

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

            reproducirSonido('derrota');
            
            derrotas++;
            localStorage.setItem('derrotas', derrotas);
            actualizarUI(); 
            
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
        victorias = scoreTotal = derrotas = 0;
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