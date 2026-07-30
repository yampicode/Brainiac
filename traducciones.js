// traducciones.js - Sistema de internacionalización para Memoria

export const traducciones = {
    es: {
        // Menú principal
        jugar_ahora: "Jugar Ahora",
        como_jugar: "¿Cómo Jugar?",
        ajustes: "Ajustes",
        desarrollador: "Desarrollador",
        salir: "Salir",
        
        // Pantalla de juego
        iniciar_juego: "Iniciar Juego",
        pausar: "Pausar",
        reanudar: "Reanudar",
        revolver_cartas: "Revolver Cartas",
        resetear_valores: "Resetear Valores",
        
        // Panel de estadísticas
        tiempo: "Tiempo",
        puntos: "Puntos",
        victorias_label: "Victorias",
        record: "Récord",
        score: "Score",
        derrotas: "Derrotas",
        
        // Estados del juego
        game_over: "¡Game Over!",
        ganaste: "¡Ganaste!",
        nuevo_record: "¡Nuevo Récord!",
        victoria: "¡Victoria!",
        
        // Modal ¿Cómo Jugar?
        como_jugar_titulo: "¿Cómo Jugar?",
        como_jugar_subtitulo: "¡Pon a prueba tu memoria, acumula aciertos y mantén tus vidas a salvo!",
        como_jugar_paso1: "Voltea las cartas: Haz clic en dos cartas para descubrir los iconos ocultos en el tablero.",
        como_jugar_paso2: "Haz parejas y gana vidas: Cada vez que encuentres una pareja correcta, ganarás vidas como recompensa para seguir jugando.",
        como_jugar_paso3: "Cuidado con los errores: Si las cartas no coinciden, perderás una vida. Tienes un límite inicial de 7 vidas. Si te quedas a cero, podrás ver un anuncio rápido para recuperarlas y continuar exactamente donde ibas.",
        como_jugar_paso4: "Objetivo: Voltea las cartas de dos en dos para encontrar las parejas idénticas antes de que se te acaben las 7 vidas.",
        cerrar: "Cerrar",
        
        // Modal Ajustes
        ajustes_titulo: "Ajustes",
        sonido: "Sonido:",
        activado: "Activado",
        silenciado: "Silenciado",
        modo: "Modo:",
        dark: "Dark",
        light: "Light",
        animaciones: "Animaciones",
        animaciones_activadas: "Activadas",
        animaciones_desactivadas: "Desactivadas",
        idioma: "Idioma",
        
        // Modal Desarrollador
        desarrollador_titulo: "Desarrollador",
        desarrollador_texto: "Hola, soy Yampiero Mujica, creé Memoria con mucho cariño, HTML, CSS y Javascript para que pases un buen rato entrenando tu memoria sin anuncios molestos. Si te gusta el proyecto y quieres apoyarme a mantenerlo activo, invítame un café haciendo clic en la tacita",
        
        // Modal sistema (Game Over)
        game_over_mensaje: "¡Lástima! Te has quedado sin vidas.",
        ir_menu: "Ir al menú",
        reintentar_nivel: "Reintentar Nivel",
        
        // Modal victoria
        victoria_mensaje: "¡Felicitaciones, has completado el nivel con éxito!",
        siguiente_nivel: "Siguiente Nivel",
        
        // Footer y otros
        invitar_cafe: "Invítame un café",
        version: "2026 © | V 2.5",
        confirmar_borrar: "¿Borrar todo el historial y reiniciar puntuaciones?",
        sin_vidas_titulo: "¡Te has quedado sin vidas!",
        sin_vidas_mensaje: "¿Qué deseas hacer para continuar?",
        ver_anuncio: "🎬 Ver anuncio y recuperar 7 vidas (Continuar partida)",
        reiniciar_partida: "🔄 Reiniciar partida (Perder progreso)",
        
        // Tooltips
        titulo_iniciar: "Iniciar el Juego",
        titulo_revolver: "Remover las cartas",
        titulo_resetear: "Reiniciar los Marcadores",
        titulo_volver: "Volver",
        
        // Textos dinámicos (funciones)
        tiempo_record: (tiempo) => `¡Nuevo Récord! Tiempo: ${tiempo}s`,
        tiempo_victoria: (tiempo, puntos) => `¡Victoria! Tiempo: ${tiempo}s. Puntos: ${puntos}`,
    },
    
    en: {
        // Main menu
        jugar_ahora: "Play Now",
        como_jugar: "How to Play?",
        ajustes: "Settings",
        desarrollador: "Developer",
        salir: "Exit",
        
        // Game screen
        iniciar_juego: "Start Game",
        pausar: "Pause",
        reanudar: "Resume",
        revolver_cartas: "Shuffle Cards",
        resetear_valores: "Reset Values",
        
        // Stats panel
        tiempo: "Time",
        puntos: "Points",
        victorias_label: "Wins",
        record: "Record",
        score: "Score",
        derrotas: "Losses",
        
        // Game states
        game_over: "Game Over!",
        ganaste: "You Won!",
        nuevo_record: "New Record!",
        victoria: "Victory!",
        
        // How to Play modal
        como_jugar_titulo: "How to Play?",
        como_jugar_subtitulo: "Test your memory, accumulate hits and keep your lives safe!",
        como_jugar_paso1: "Flip cards: Click on two cards to reveal the hidden icons on the board.",
        como_jugar_paso2: "Make pairs and earn lives: Every time you find a correct pair, you'll earn lives as a reward to keep playing.",
        como_jugar_paso3: "Beware of mistakes: If the cards don't match, you'll lose a life. You start with 7 lives. If you run out, you can watch a quick ad to recover them and continue right where you left off.",
        como_jugar_paso4: "Objective: Flip cards two at a time to find identical pairs before you run out of 7 lives.",
        cerrar: "Close",
        
        // Settings modal
        ajustes_titulo: "Settings",
        sonido: "Sound:",
        activado: "On",
        silenciado: "Off",
        modo: "Mode:",
        dark: "Dark",
        light: "Light",
        animaciones: "Animations",
        animaciones_activadas: "Enabled",
        animaciones_desactivadas: "Disabled",
        idioma: "Language",
        
        // Developer modal
        desarrollador_titulo: "Developer",
        desarrollador_texto: "Hi, I'm Yampiero Mujica. I created Memoria with love using HTML, CSS and JavaScript so you can have a good time training your memory without annoying ads. If you like the project and want to support me to keep it active, buy me a coffee by clicking on the cup",
        
        // System modal (Game Over)
        game_over_mensaje: "Too bad! You've run out of lives.",
        ir_menu: "Go to menu",
        reintentar_nivel: "Retry Level",
        
        // Victory modal
        victoria_mensaje: "Congratulations, you've completed the level successfully!",
        siguiente_nivel: "Next Level",
        
        // Footer and others
        invitar_cafe: "Buy me a coffee",
        version: "2026 © | V 2.5",
        confirmar_borrar: "Delete all history and reset scores?",
        sin_vidas_titulo: "You've run out of lives!",
        sin_vidas_mensaje: "What do you want to do to continue?",
        ver_anuncio: "🎬 Watch ad and recover 7 lives (Continue game)",
        reiniciar_partida: "🔄 Restart game (Lose progress)",
        
        // Tooltips
        titulo_iniciar: "Start Game",
        titulo_revolver: "Shuffle Cards",
        titulo_resetear: "Reset Values",
        titulo_volver: "Back",
        
        // Dynamic texts (functions)
        tiempo_record: (tiempo) => `New Record! Time: ${tiempo}s`,
        tiempo_victoria: (tiempo, puntos) => `Victory! Time: ${tiempo}s. Points: ${puntos}`,
    },
    
    pt: {
        // Menu principal
        jugar_ahora: "Jogar Agora",
        como_jugar: "Como Jogar?",
        ajustes: "Configurações",
        desarrollador: "Desenvolvedor",
        salir: "Sair",
        
        // Tela do jogo
        iniciar_juego: "Iniciar Jogo",
        pausar: "Pausar",
        reanudar: "Retomar",
        revolver_cartas: "Embaralhar Cartas",
        resetear_valores: "Resetar Valores",
        
        // Painel de estatísticas
        tiempo: "Tempo",
        puntos: "Pontos",
        victorias_label: "Vitórias",
        record: "Recorde",
        score: "Pontuação",
        derrotas: "Derrotas",
        
        // Estados do jogo
        game_over: "Fim de Jogo!",
        ganaste: "Você Ganhou!",
        nuevo_record: "Novo Recorde!",
        victoria: "Vitória!",
        
        // Modal Como Jogar
        como_jugar_titulo: "Como Jogar?",
        como_jugar_subtitulo: "Teste sua memória, acumule acertos e mantenha suas vidas seguras!",
        como_jugar_paso1: "Vire as cartas: Clique em duas cartas para descobrir os ícones ocultos no tabuleiro.",
        como_jugar_paso2: "Faça pares e ganhe vidas: Cada vez que encontrar um par correto, você ganhará vidas como recompensa para continuar jogando.",
        como_jugar_paso3: "Cuidado com os erros: Se as cartas não coincidirem, você perderá uma vida. Você começa com 7 vidas. Se ficar sem, pode assistir a um anúncio rápido para recuperá-las e continuar de onde parou.",
        como_jugar_paso4: "Objetivo: Vire as cartas de duas em duas para encontrar pares idênticos antes que suas 7 vidas acabem.",
        cerrar: "Fechar",
        
        // Modal Configurações
        ajustes_titulo: "Configurações",
        sonido: "Som:",
        activado: "Ativado",
        silenciado: "Silenciado",
        modo: "Modo:",
        dark: "Escuro",
        light: "Claro",
        animaciones: "Animações",
        animaciones_activadas: "Ativadas",
        animaciones_desactivadas: "Desativadas",
        idioma: "Idioma",
        
        // Modal Desenvolvedor
        desarrollador_titulo: "Desenvolvedor",
        desarrollador_texto: "Olá, sou Yampiero Mujica. Criei o Memória com muito carinho usando HTML, CSS e JavaScript para que você possa se divertir treinando sua memória sem anúncios irritantes. Se você gosta do projeto e quer me apoiar para mantê-lo ativo, me pague um café clicando na xícara",
        
        // Modal do sistema (Game Over)
        game_over_mensaje: "Que pena! Você ficou sem vidas.",
        ir_menu: "Ir ao menu",
        reintentar_nivel: "Tentar Novamente",
        
        // Modal de vitória
        victoria_mensaje: "Parabéns, você completou o nível com sucesso!",
        siguiente_nivel: "Próximo Nível",
        
        // Footer e outros
        invitar_cafe: "Me pague um café",
        version: "2026 © | V 2.5",
        confirmar_borrar: "Apagar todo o histórico e redefinir pontuações?",
        sin_vidas_titulo: "Você ficou sem vidas!",
        sin_vidas_mensaje: "O que você deseja fazer para continuar?",
        ver_anuncio: "🎬 Ver anúncio e recuperar 7 vidas (Continuar partida)",
        reiniciar_partida: "🔄 Reiniciar partida (Perder progresso)",
        
        // Tooltips
        titulo_iniciar: "Iniciar Jogo",
        titulo_revolver: "Embaralhar Cartas",
        titulo_resetear: "Resetar Valores",
        titulo_volver: "Voltar",
        
        // Textos dinâmicos (funções)
        tiempo_record: (tiempo) => `Novo Recorde! Tempo: ${tiempo}s`,
        tiempo_victoria: (tiempo, puntos) => `Vitória! Tempo: ${tiempo}s. Pontos: ${puntos}`,
    }
};

// Función helper para obtener traducción
export function t(clave, idioma, ...params) {
    const traduccion = traducciones[idioma]?.[clave] || traducciones['es'][clave] || clave;
    return typeof traduccion === 'function' ? traduccion(...params) : traduccion;
}