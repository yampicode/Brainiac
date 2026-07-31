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
       version: "2026 © | V 2.8",
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
      version: "2026 © | V 2.8",
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
        version: "2026 © | V 2.8",
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
    },
    fr: {
    // Menu principal
    jugar_ahora: "Jouer Maintenant",
    como_jugar: "Comment Jouer?",
    ajustes: "Paramètres",
    desarrollador: "Développeur",
    salir: "Quitter",
    
    // Écran de jeu
    iniciar_juego: "Démarrer le Jeu",
    pausar: "Pause",
    reanudar: "Reprendre",
    revolver_cartas: "Mélanger les Cartes",
    resetear_valores: "Réinitialiser",
    
    // Panneau de statistiques
    tiempo: "Temps",
    puntos: "Points",
    victorias_label: "Victoires",
    record: "Record",
    score: "Score",
    derrotas: "Défaites",
    
    // États du jeu
    game_over: "Partie Terminée!",
    ganaste: "Tu as Gagné!",
    nuevo_record: "Nouveau Record!",
    victoria: "Victoire!",
    
    // Modal Comment Jouer
    como_jugar_titulo: "Comment Jouer?",
    como_jugar_subtitulo: "Testez votre mémoire, accumulez des points et gardez vos vies en sécurité!",
    como_jugar_paso1: "Retournez les cartes: Cliquez sur deux cartes pour découvrir les icônes cachées sur le plateau.",
    como_jugar_paso2: "Faites des paires et gagnez des vies: Chaque fois que vous trouvez une paire correcte, vous gagnerez des vies en récompense pour continuer à jouer.",
    como_jugar_paso3: "Attention aux erreurs: Si les cartes ne correspondent pas, vous perdrez une vie. Vous commencez avec 7 vies. Si vous n'en avez plus, vous pouvez regarder une courte pub pour les récupérer et continuer exactement là où vous étiez.",
    como_jugar_paso4: "Objectif: Retournez les cartes deux par deux pour trouver des paires identiques avant d'épuiser vos 7 vies.",
    cerrar: "Fermer",
    
    // Modal Paramètres
    ajustes_titulo: "Paramètres",
    sonido: "Son:",
    activado: "Activé",
    silenciado: "Désactivé",
    modo: "Mode:",
    dark: "Sombre",
    light: "Clair",
    animaciones: "Animations",
    animaciones_activadas: "Activées",
    animaciones_desactivadas: "Désactivées",
    idioma: "Langue",
    
    // Modal Développeur
    desarrollador_titulo: "Développeur",
    desarrollador_texto: "Bonjour, je suis Yampiero Mujica. J'ai créé Memoria avec amour en utilisant HTML, CSS et JavaScript pour que vous puissiez passer un bon moment à entraîner votre mémoire sans publicités ennuyeuses. Si vous aimez le projet et voulez me soutenir pour le maintenir actif, offrez-moi un café en cliquant sur la tasse",
    
    // Modal système (Game Over)
    game_over_mensaje: "Dommage! Vous n'avez plus de vies.",
    ir_menu: "Aller au menu",
    reintentar_nivel: "Réessayer le Niveau",
    
    // Modal victoire
    victoria_mensaje: "Félicitations, vous avez terminé le niveau avec succès!",
    siguiente_nivel: "Niveau Suivant",
    
    // Footer et autres
    invitar_cafe: "Offrez-moi un café",
    version: "2026 © | V 2.8",
    confirmar_borrar: "Effacer tout l'historique et réinitialiser les scores?",
    sin_vidas_titulo: "Vous n'avez plus de vies!",
    sin_vidas_mensaje: "Que voulez-vous faire pour continuer?",
    ver_anuncio: "🎬 Voir une pub et récupérer 7 vies (Continuer la partie)",
    reiniciar_partida: "🔄 Recommencer la partie (Perdre la progression)",
    
    // Tooltips
    titulo_iniciar: "Démarrer le Jeu",
    titulo_revolver: "Mélanger les Cartes",
    titulo_resetear: "Réinitialiser les Valeurs",
    titulo_volver: "Retour",
    
    // Textes dynamiques (fonctions)
    tiempo_record: (tiempo) => `Nouveau Record! Temps: ${tiempo}s`,
    tiempo_victoria: (tiempo, puntos) => `Victoire! Temps: ${tiempo}s. Points: ${puntos}`,
},

it: {
    // Menu principale
    jugar_ahora: "Gioca Ora",
    como_jugar: "Come Giocare?",
    ajustes: "Impostazioni",
    desarrollador: "Sviluppatore",
    salir: "Esci",
    
    // Schermata di gioco
    iniciar_juego: "Inizia Gioco",
    pausar: "Pausa",
    reanudar: "Riprendi",
    revolver_cartas: "Mescola Carte",
    resetear_valores: "Resetta Valori",
    
    // Pannello statistiche
    tiempo: "Tempo",
    puntos: "Punti",
    victorias_label: "Vittorie",
    record: "Record",
    score: "Punteggio",
    derrotas: "Sconfitte",
    
    // Stati del gioco
    game_over: "Game Over!",
    ganaste: "Hai Vinto!",
    nuevo_record: "Nuovo Record!",
    victoria: "Vittoria!",
    
    // Modal Come Giocare
    como_jugar_titulo: "Come Giocare?",
    como_jugar_subtitulo: "Metti alla prova la tua memoria, accumula punti e mantieni le tue vite al sicuro!",
    como_jugar_paso1: "Gira le carte: Clicca su due carte per scoprire le icone nascoste sul tabellone.",
    como_jugar_paso2: "Fai coppie e guadagna vite: Ogni volta che trovi una coppia corretta, guadagnerai vite come ricompensa per continuare a giocare.",
    como_jugar_paso3: "Attenzione agli errori: Se le carte non corrispondono, perderai una vita. Inizi con 7 vite. Se le esaurisci, puoi guardare una breve pubblicità per recuperarle e continuare esattamente da dove eri.",
    como_jugar_paso4: "Obiettivo: Gira le carte due alla volta per trovare coppie identiche prima di esaurire le 7 vite.",
    cerrar: "Chiudi",
    
    // Modal Impostazioni
    ajustes_titulo: "Impostazioni",
    sonido: "Audio:",
    activado: "Attivo",
    silenciado: "Disattivo",
    modo: "Modalità:",
    dark: "Scura",
    light: "Chiara",
    animaciones: "Animazioni",
    animaciones_activadas: "Attivate",
    animaciones_desactivadas: "Disattivate",
    idioma: "Lingua",
    
    // Modal Sviluppatore
    desarrollador_titulo: "Sviluppatore",
    desarrollador_texto: "Ciao, sono Yampiero Mujica. Ho creato Memoria con amore usando HTML, CSS e JavaScript per farti passare del buon tempo allenando la tua memoria senza pubblicità fastidiose. Se ti piace il progetto e vuoi supportarmi per mantenerlo attivo, offrimi un caffè cliccando sulla tazzina",
    
    // Modal di sistema (Game Over)
    game_over_mensaje: "Peccato! Hai esaurito le vite.",
    ir_menu: "Vai al menu",
    reintentar_nivel: "Riprova Livello",
    
    // Modal vittoria
    victoria_mensaje: "Congratulazioni, hai completato il livello con successo!",
    siguiente_nivel: "Livello Successivo",
    
    // Footer e altri
    invitar_cafe: "Offrimi un caffè",
    version: "2026 © | V 2.8",
    confirmar_borrar: "Cancellare tutta la cronologia e reimpostare i punteggi?",
    sin_vidas_titulo: "Hai esaurito le vite!",
    sin_vidas_mensaje: "Cosa vuoi fare per continuare?",
    ver_anuncio: "🎬 Guarda pubblicità e recupera 7 vite (Continua partita)",
    reiniciar_partida: "🔄 Ricomincia partita (Perdi progressi)",
    
    // Tooltips
    titulo_iniciar: "Inizia Gioco",
    titulo_revolver: "Mescola Carte",
    titulo_resetear: "Resetta Valori",
    titulo_volver: "Indietro",
    
    // Testi dinamici (funzioni)
    tiempo_record: (tiempo) => `Nuovo Record! Tempo: ${tiempo}s`,
    tiempo_victoria: (tiempo, puntos) => `Vittoria! Tempo: ${tiempo}s. Punti: ${puntos}`,
},

de: {
    // Hauptmenü
    jugar_ahora: "Jetzt Spielen",
    como_jugar: "Spielanleitung",
    ajustes: "Einstellungen",
    desarrollador: "Entwickler",
    salir: "Beenden",
    
    // Spielbildschirm
    iniciar_juego: "Spiel Starten",
    pausar: "Pause",
    reanudar: "Fortsetzen",
    revolver_cartas: "Karten Mischen",
    resetear_valores: "Werte Zurücksetzen",
    
    // Statistik-Panel
    tiempo: "Zeit",
    puntos: "Punkte",
    victorias_label: "Siege",
    record: "Rekord",
    score: "Punktzahl",
    derrotas: "Niederlagen",
    
    // Spielzustände
    game_over: "Game Over!",
    ganaste: "Du hast Gewonnen!",
    nuevo_record: "Neuer Rekord!",
    victoria: "Sieg!",
    
    // Modal Spielanleitung
    como_jugar_titulo: "Spielanleitung",
    como_jugar_subtitulo: "Teste dein Gedächtnis, sammle Treffer und schütze deine Leben!",
    como_jugar_paso1: "Karten umdrehen: Klicke auf zwei Karten, um die versteckten Symbole auf dem Brett aufzudecken.",
    como_jugar_paso2: "Paare finden und Leben verdienen: Jedes Mal, wenn du ein richtiges Paar findest, erhältst du Leben als Belohnung zum Weiterspielen.",
    como_jugar_paso3: "Vorsicht vor Fehlern: Wenn die Karten nicht übereinstimmen, verlierst du ein Leben. Du beginnst mit 7 Leben. Wenn du keine mehr hast, kannst du eine kurze Werbung ansehen, um sie wiederherzustellen und genau dort weiterzumachen.",
    como_jugar_paso4: "Ziel: Drehe zwei Karten gleichzeitig um, um identische Paare zu finden, bevor dir die 7 Leben ausgehen.",
    cerrar: "Schließen",
    
    // Modal Einstellungen
    ajustes_titulo: "Einstellungen",
    sonido: "Ton:",
    activado: "Ein",
    silenciado: "Aus",
    modo: "Modus:",
    dark: "Dunkel",
    light: "Hell",
    animaciones: "Animationen",
    animaciones_activadas: "Aktiviert",
    animaciones_desactivadas: "Deaktiviert",
    idioma: "Sprache",
    
    // Modal Entwickler
    desarrollador_titulo: "Entwickler",
    desarrollador_texto: "Hallo, ich bin Yampiero Mujica. Ich habe Memoria mit Liebe mit HTML, CSS und JavaScript erstellt, damit du eine gute Zeit damit verbringen kannst, dein Gedächtnis ohne nervige Werbung zu trainieren. Wenn dir das Projekt gefällt und du mich unterstützen möchtest, es aktiv zu halten, lade mich auf einen Kaffee ein, indem du auf die Tasse klickst",
    
    // System-Modal (Game Over)
    game_over_mensaje: "Schade! Du hast keine Leben mehr.",
    ir_menu: "Zum Menü",
    reintentar_nivel: "Level Wiederholen",
    
    // Sieges-Modal
    victoria_mensaje: "Herzlichen Glückwunsch, du hast das Level erfolgreich abgeschlossen!",
    siguiente_nivel: "Nächstes Level",
    
    // Footer und Andere
    invitar_cafe: "Lade mich auf einen Kaffee ein",
    version: "2026 © | V 2.8",
    confirmar_borrar: "Gesamten Verlauf löschen und Punktzahlen zurücksetzen?",
    sin_vidas_titulo: "Du hast keine Leben mehr!",
    sin_vidas_mensaje: "Was möchtest du tun, um fortzufahren?",
    ver_anuncio: "🎬 Werbung ansehen und 7 Leben wiederherstellen (Spiel fortsetzen)",
    reiniciar_partida: "🔄 Spiel neu starten (Fortschritt verlieren)",
    
    // Tooltips
    titulo_iniciar: "Spiel Starten",
    titulo_revolver: "Karten Mischen",
    titulo_resetear: "Werte Zurücksetzen",
    titulo_volver: "Zurück",
    
    // Dynamische Texte (Funktionen)
    tiempo_record: (tiempo) => `Neuer Rekord! Zeit: ${tiempo}s`,
    tiempo_victoria: (tiempo, puntos) => `Sieg! Zeit: ${tiempo}s. Punkte: ${puntos}`,
},

ar: {
    // القائمة الرئيسية
    jugar_ahora: "العب الآن",
    como_jugar: "كيف تلعب؟",
    ajustes: "الإعدادات",
    desarrollador: "المطور",
    salir: "خروج",
    
    // شاشة اللعبة
    iniciar_juego: "ابدأ اللعبة",
    pausar: "إيقاف مؤقت",
    reanudar: "استئناف",
    revolver_cartas: "خلط البطاقات",
    resetear_valores: "إعادة تعيين القيم",
    
    // لوحة الإحصائيات
    tiempo: "الوقت",
    puntos: "النقاط",
    victorias_label: "الانتصارات",
    record: "الرقم القياسي",
    score: "النتيجة",
    derrotas: "الهزائم",
    
    // حالات اللعبة
    game_over: "انتهت اللعبة!",
    ganaste: "لقد فزت!",
    nuevo_record: "رقم قياسي جديد!",
    victoria: "انتصار!",
    
    // Modal كيف تلعب
    como_jugar_titulo: "كيف تلعب؟",
    como_jugar_subtitulo: "اختبر ذاكرتك، واجمع النقاط وحافظ على أرواحك بأمان!",
    como_jugar_paso1: "اقلب البطاقات: انقر على بطاقتين لاكتشاف الأيقونات المخفية على اللوح.",
    como_jugar_paso2: "كون أزواجًا واربح أرواحًا: في كل مرة تجد فيها زوجًا صحيحًا، ستربح أرواحًا كمكافأة لمواصلة اللعب.",
    como_jugar_paso3: "احذر من الأخطاء: إذا لم تتطابق البطاقات، ستفقد روحًا. تبدأ بـ 7 أرواح. إذا نفدت، يمكنك مشاهدة إعلان سريع لاستعادتها والمتابعة من حيث توقفت بالضبط.",
    como_jugar_paso4: "الهدف: اقلب البطاقات اثنتين في كل مرة للعثور على أزواج متطابقة قبل أن تنفد أرواحك السبعة.",
    cerrar: "إغلاق",
    
    // Modal الإعدادات
    ajustes_titulo: "الإعدادات",
    sonido: "الصوت:",
    activado: "مفعل",
    silenciado: "مكتوم",
    modo: "الوضع:",
    dark: "داكن",
    light: "فاتح",
    animaciones: "الحركات",
    animaciones_activadas: "مفعلة",
    animaciones_desactivadas: "معطلة",
    idioma: "اللغة",
    
    // Modal المطور
    desarrollador_titulo: "المطور",
    desarrollador_texto: "مرحبًا، أنا يامبيرو موخيكا. لقد صنعت لعبة الذاكرة بحب باستخدام HTML وCSS وJavaScript لتقضي وقتًا ممتعًا في تدريب ذاكرتك بدون إعلانات مزعجة. إذا أعجبك المشروع وتريد دعمي لإبقائه نشطًا، ادعمني بفنجان قهوة بالضغط على الفنجان",
    
    // Modal النظام (Game Over)
    game_over_mensaje: "للأسف! لقد نفدت أرواحك.",
    ir_menu: "الذهاب إلى القائمة",
    reintentar_nivel: "إعادة المحاولة",
    
    // Modal النصر
    victoria_mensaje: "تهانينا، لقد أكملت المستوى بنجاح!",
    siguiente_nivel: "المستوى التالي",
    
    // التذييل وأخرى
    invitar_cafe: "ادعمني بفنجان قهوة",
    version: "2026 © | V 2.8",
    confirmar_borrar: "مسح كل السجل وإعادة تعيين النتائج؟",
    sin_vidas_titulo: "لقد نفدت أرواحك!",
    sin_vidas_mensaje: "ماذا تريد أن تفعل للمتابعة؟",
    ver_anuncio: "🎬 مشاهدة إعلان واستعادة 7 أرواح (متابعة اللعبة)",
    reiniciar_partida: "🔄 إعادة بدء اللعبة (فقدان التقدم)",
    
    // Tooltips
    titulo_iniciar: "ابدأ اللعبة",
    titulo_revolver: "خلط البطاقات",
    titulo_resetear: "إعادة تعيين القيم",
    titulo_volver: "رجوع",
    
    // نصوص ديناميكية (دوال)
    tiempo_record: (tiempo) => `رقم قياسي جديد! الوقت: ${tiempo} ثانية`,
    tiempo_victoria: (tiempo, puntos) => `انتصار! الوقت: ${tiempo} ثانية. النقاط: ${puntos}`,
},

ja: {
    // メインメニュー
    jugar_ahora: "今すぐプレイ",
    como_jugar: "遊び方",
    ajustes: "設定",
    desarrollador: "開発者",
    salir: "終了",
    
    // ゲーム画面
    iniciar_juego: "ゲーム開始",
    pausar: "一時停止",
    reanudar: "再開",
    revolver_cartas: "カードをシャッフル",
    resetear_valores: "値をリセット",
    
    // 統計パネル
    tiempo: "時間",
    puntos: "ポイント",
    victorias_label: "勝利",
    record: "記録",
    score: "スコア",
    derrotas: "敗北",
    
    // ゲーム状態
    game_over: "ゲームオーバー!",
    ganaste: "あなたの勝ち!",
    nuevo_record: "新記録!",
    victoria: "勝利!",
    
    // 遊び方モーダル
    como_jugar_titulo: "遊び方",
    como_jugar_subtitulo: "記憶力をテストして、ポイントを貯めて、ライフを守ろう!",
    como_jugar_paso1: "カードをめくる: 2枚のカードをクリックして、ボードに隠されたアイコンを見つけよう。",
    como_jugar_paso2: "ペアを作ってライフを獲得: 正しいペアを見つけるたびに、ライフを獲得してゲームを続けられます。",
    como_jugar_paso3: "ミスに注意: カードが一致しないと、ライフを1つ失います。最初は7つのライフがあります。なくなったら、短い広告を見て回復し、続きから再開できます。",
    como_jugar_paso4: "目的: 7つのライフがなくなる前に、2枚ずつカードをめくって同じペアを見つけよう。",
    cerrar: "閉じる",
    
    // 設定モーダル
    ajustes_titulo: "設定",
    sonido: "サウンド:",
    activado: "オン",
    silenciado: "オフ",
    modo: "モード:",
    dark: "ダーク",
    light: "ライト",
    animaciones: "アニメーション",
    animaciones_activadas: "有効",
    animaciones_desactivadas: "無効",
    idioma: "言語",
    
    // 開発者モーダル
    desarrollador_titulo: "開発者",
    desarrollador_texto: "こんにちは、ヤンピエロ・ムヒカです。HTML、CSS、JavaScriptを使って、迷惑な広告なしで記憶力をトレーニングできるよう、心を込めてMemoriaを作りました。プロジェクトを気に入って、継続的にサポートしたい場合は、カップをクリックしてコーヒーをおごってください",
    
    // システムモーダル (ゲームオーバー)
    game_over_mensaje: "残念! ライフがなくなりました。",
    ir_menu: "メニューへ",
    reintentar_nivel: "レベルを再挑戦",
    
    // 勝利モーダル
    victoria_mensaje: "おめでとうございます、レベルをクリアしました!",
    siguiente_nivel: "次のレベル",
    
    // フッターとその他
    invitar_cafe: "コーヒーをおごる",
    version: "2026 © | V 2.8",
    confirmar_borrar: "履歴をすべて削除してスコアをリセットしますか?",
    sin_vidas_titulo: "ライフがなくなりました!",
    sin_vidas_mensaje: "続行するにはどうしますか?",
    ver_anuncio: "🎬 広告を見て7ライフ回復 (ゲームを続ける)",
    reiniciar_partida: "🔄 ゲームを再開 (進行状況を失う)",
    
    // ツールチップ
    titulo_iniciar: "ゲーム開始",
    titulo_revolver: "カードをシャッフル",
    titulo_resetear: "値をリセット",
    titulo_volver: "戻る",
    
    // 動的テキスト (関数)
    tiempo_record: (tiempo) => `新記録! 時間: ${tiempo}秒`,
    tiempo_victoria: (tiempo, puntos) => `勝利! 時間: ${tiempo}秒. ポイント: ${puntos}`,
},

zh: {
    // 主菜单
    jugar_ahora: "开始游戏",
    como_jugar: "游戏说明",
    ajustes: "设置",
    desarrollador: "开发者",
    salir: "退出",
    
    // 游戏画面
    iniciar_juego: "开始游戏",
    pausar: "暂停",
    reanudar: "继续",
    revolver_cartas: "洗牌",
    resetear_valores: "重置数值",
    
    // 统计面板
    tiempo: "时间",
    puntos: "分数",
    victorias_label: "胜利",
    record: "记录",
    score: "总分",
    derrotas: "失败",
    
    // 游戏状态
    game_over: "游戏结束!",
    ganaste: "你赢了!",
    nuevo_record: "新纪录!",
    victoria: "胜利!",
    
    // 游戏说明模态框
    como_jugar_titulo: "游戏说明",
    como_jugar_subtitulo: "测试你的记忆力，积累分数，保护你的生命!",
    como_jugar_paso1: "翻牌：点击两张卡片，发现板上隐藏的图标。",
    como_jugar_paso2: "配对并赢得生命：每次找到正确的配对，你将获得生命作为继续游戏的奖励。",
    como_jugar_paso3: "小心错误：如果卡片不匹配，你将失去一条生命。你从7条生命开始。如果用完了，可以观看短视频广告来恢复并从之前的位置继续。",
    como_jugar_paso4: "目标：在7条生命用完之前，一次翻两张牌，找到相同的配对。",
    cerrar: "关闭",
    
    // 设置模态框
    ajustes_titulo: "设置",
    sonido: "声音:",
    activado: "开启",
    silenciado: "关闭",
    modo: "模式:",
    dark: "深色",
    light: "浅色",
    animaciones: "动画",
    animaciones_activadas: "已开启",
    animaciones_desactivadas: "已关闭",
    idioma: "语言",
    
    // 开发者模态框
    desarrollador_titulo: "开发者",
    desarrollador_texto: "你好，我是Yampiero Mujica。我用心使用HTML、CSS和JavaScript创建了Memoria，让你可以在没有烦人广告的情况下愉快地训练记忆力。如果你喜欢这个项目并想支持我保持它活跃，请点击杯子请我喝杯咖啡",
    
    // 系统模态框 (游戏结束)
    game_over_mensaje: "太可惜了! 你的生命用完了。",
    ir_menu: "返回菜单",
    reintentar_nivel: "重试关卡",
    
    // 胜利模态框
    victoria_mensaje: "恭喜你，你成功完成了关卡!",
    siguiente_nivel: "下一关",
    
    // 页脚和其他
    invitar_cafe: "请我喝杯咖啡",
    version: "2026 © | V 2.8",
    confirmar_borrar: "删除所有历史记录并重置分数?",
    sin_vidas_titulo: "你的生命用完了!",
    sin_vidas_mensaje: "你想怎么做来继续?",
    ver_anuncio: "🎬 观看广告恢复7条生命 (继续游戏)",
    reiniciar_partida: "🔄 重新开始游戏 (失去进度)",
    
    // 工具提示
    titulo_iniciar: "开始游戏",
    titulo_revolver: "洗牌",
    titulo_resetear: "重置数值",
    titulo_volver: "返回",
    
    // 动态文本 (函数)
    tiempo_record: (tiempo) => `新纪录! 时间: ${tiempo}秒`,
    tiempo_victoria: (tiempo, puntos) => `胜利! 时间: ${tiempo}秒. 分数: ${puntos}`,
},

ru: {
    // Главное меню
    jugar_ahora: "Играть Сейчас",
    como_jugar: "Как Играть?",
    ajustes: "Настройки",
    desarrollador: "Разработчик",
    salir: "Выйти",
    
    // Игровой экран
    iniciar_juego: "Начать Игру",
    pausar: "Пауза",
    reanudar: "Продолжить",
    revolver_cartas: "Перемешать Карты",
    resetear_valores: "Сбросить Значения",
    
    // Панель статистики
    tiempo: "Время",
    puntos: "Очки",
    victorias_label: "Победы",
    record: "Рекорд",
    score: "Счёт",
    derrotas: "Поражения",
    
    // Состояния игры
    game_over: "Игра Окончена!",
    ganaste: "Вы Выиграли!",
    nuevo_record: "Новый Рекорд!",
    victoria: "Победа!",
    
    // Модальное окно Как Играть
    como_jugar_titulo: "Как Играть?",
    como_jugar_subtitulo: "Проверьте свою память, накапливайте очки и сохраняйте свои жизни!",
    como_jugar_paso1: "Переворачивайте карты: Нажмите на две карты, чтобы открыть скрытые значки на доске.",
    como_jugar_paso2: "Составляйте пары и зарабатывайте жизни: Каждый раз, когда вы находите правильную пару, вы получаете жизни в награду для продолжения игры.",
    como_jugar_paso3: "Остерегайтесь ошибок: Если карты не совпадают, вы теряете жизнь. Вы начинаете с 7 жизней. Если они закончатся, вы можете посмотреть короткую рекламу, чтобы восстановить их и продолжить именно с того места, где остановились.",
    como_jugar_paso4: "Цель: Переворачивайте по две карты за раз, чтобы найти одинаковые пары, пока не закончились 7 жизней.",
    cerrar: "Закрыть",
    
    // Модальное окно Настройки
    ajustes_titulo: "Настройки",
    sonido: "Звук:",
    activado: "Вкл",
    silenciado: "Выкл",
    modo: "Режим:",
    dark: "Тёмный",
    light: "Светлый",
    animaciones: "Анимации",
    animaciones_activadas: "Включены",
    animaciones_desactivadas: "Отключены",
    idioma: "Язык",
    
    // Модальное окно Разработчик
    desarrollador_titulo: "Разработчик",
    desarrollador_texto: "Привет, я Ямпьеро Мухика. Я создал Memoria с любовью, используя HTML, CSS и JavaScript, чтобы вы могли хорошо провести время, тренируя свою память без надоедливой рекламы. Если вам нравится проект и вы хотите поддержать меня, чтобы он оставался активным, угостите меня кофе, нажав на чашку",
    
    // Системное модальное окно (Game Over)
    game_over_mensaje: "Жаль! У вас закончились жизни.",
    ir_menu: "В меню",
    reintentar_nivel: "Повторить Уровень",
    
    // Модальное окно победы
    victoria_mensaje: "Поздравляем, вы успешно завершили уровень!",
    siguiente_nivel: "Следующий Уровень",
    
    // Подвал и прочее
    invitar_cafe: "Угостить меня кофе",
    version: "2026 © | V 2.8",
    confirmar_borrar: "Удалить всю историю и сбросить счета?",
    sin_vidas_titulo: "У вас закончились жизни!",
    sin_vidas_mensaje: "Что вы хотите сделать, чтобы продолжить?",
    ver_anuncio: "🎬 Посмотреть рекламу и восстановить 7 жизней (Продолжить игру)",
    reiniciar_partida: "🔄 Перезапустить игру (Потерять прогресс)",
    
    // Подсказки
    titulo_iniciar: "Начать Игру",
    titulo_revolver: "Перемешать Карты",
    titulo_resetear: "Сбросить Значения",
    titulo_volver: "Назад",
    
    // Динамические тексты (функции)
    tiempo_record: (tiempo) => `Новый Рекорд! Время: ${tiempo}с`,
    tiempo_victoria: (tiempo, puntos) => `Победа! Время: ${tiempo}с. Очки: ${puntos}`,
},

he: {
    // תפריט ראשי
    jugar_ahora: "שחק עכשיו",
    como_jugar: "איך לשחק?",
    ajustes: "הגדרות",
    desarrollador: "מפתח",
    salir: "יציאה",
    
    // מסך משחק
    iniciar_juego: "התחל משחק",
    pausar: "השהה",
    reanudar: "המשך",
    revolver_cartas: "ערבב קלפים",
    resetear_valores: "אפס ערכים",
    
    // לוח סטטיסטיקות
    tiempo: "זמן",
    puntos: "נקודות",
    victorias_label: "ניצחונות",
    record: "שיא",
    score: "ניקוד",
    derrotas: "הפסדים",
    
    // מצבי משחק
    game_over: "המשחק נגמר!",
    ganaste: "ניצחת!",
    nuevo_record: "שיא חדש!",
    victoria: "ניצחון!",
    
    // חלונית איך לשחק
    como_jugar_titulo: "איך לשחק?",
    como_jugar_subtitulo: "בחן את הזיכרון שלך, צבור נקודות ושמור על חייך!",
    como_jugar_paso1: "הפוך קלפים: לחץ על שני קלפים כדי לגלות את הסמלים המוסתרים בלוח.",
    como_jugar_paso2: "צור זוגות והרווח חיים: בכל פעם שתמצא זוג נכון, תרוויח חיים כפרס להמשך המשחק.",
    como_jugar_paso3: "היזהר מטעויות: אם הקלפים אינם תואמים, תאבד חיים. אתה מתחיל עם 7 חיים. אם נגמרים לך, תוכל לצפות בפרסומת קצרה כדי לשחזר אותם ולהמשיך בדיוק מאיפה שהפסקת.",
    como_jugar_paso4: "מטרה: הפוך קלפים שניים בכל פעם כדי למצוא זוגות זהים לפני שייגמרו לך 7 החיים.",
    cerrar: "סגור",
    
    // חלונית הגדרות
    ajustes_titulo: "הגדרות",
    sonido: "צליל:",
    activado: "פעיל",
    silenciado: "מושתק",
    modo: "מצב:",
    dark: "כהה",
    light: "בהיר",
    animaciones: "אנימציות",
    animaciones_activadas: "מופעלות",
    animaciones_desactivadas: "מכובות",
    idioma: "שפה",
    
    // חלונית מפתח
    desarrollador_titulo: "מפתח",
    desarrollador_texto: "שלום, אני יאמפיירו מוחיקה. יצרתי את Memoria באהבה באמצעות HTML, CSS ו-JavaScript כדי שתוכל לבלות זמן טוב באימון הזיכרון שלך ללא פרסומות מעצבנות. אם אתה אוהב את הפרויקט ורוצה לתמוך בי כדי להשאיר אותו פעיל, תזמין אותי לקפה בלחיצה על הספל",
    
    // חלונית מערכת (Game Over)
    game_over_mensaje: "חבל! נגמרו לך החיים.",
    ir_menu: "עבור לתפריט",
    reintentar_nivel: "נסה שוב",
    
    // חלונית ניצחון
    victoria_mensaje: "ברכות, השלמת את השלב בהצלחה!",
    siguiente_nivel: "שלב הבא",
    
    // תחתית ונוספים
    invitar_cafe: "הזמן אותי לקפה",
    version: "2026 © | V 2.8",
    confirmar_borrar: "למחוק את כל ההיסטוריה ולאפס ניקודים?",
    sin_vidas_titulo: "נגמרו לך החיים!",
    sin_vidas_mensaje: "מה תרצה לעשות כדי להמשיך?",
    ver_anuncio: "🎬 צפה בפרסומת ושחזר 7 חיים (המשך משחק)",
    reiniciar_partida: "🔄 הפעל מחדש משחק (אובדן התקדמות)",
    
    // Tooltips
    titulo_iniciar: "התחל משחק",
    titulo_revolver: "ערבב קלפים",
    titulo_resetear: "אפס ערכים",
    titulo_volver: "חזור",
    
    // טקסטים דינמיים (פונקציות)
    tiempo_record: (tiempo) => `שיא חדש! זמן: ${tiempo} שניות`,
    tiempo_victoria: (tiempo, puntos) => `ניצחון! זמן: ${tiempo} שניות. נקודות: ${puntos}`,
},

gn: { // Guaraní
    // Menú principal - Tenda ñepyrũ
    jugar_ahora: "Juga Ko'ág̃a",
    como_jugar: "Mba'éichapa Juga?",
    ajustes: "Mbohekoporã",
    desarrollador: "Apohára",
    salir: "Sẽ",
    
    // Pantalla de juego - Ta'anga ñembosarái
    iniciar_juego: "Ñepyrũ Ñembosarái",
    pausar: "Pytu'u",
    reanudar: "Joko'ỹ",
    revolver_cartas: "Kárta Mbojehe'a",
    resetear_valores: "Mbojehe'a Papapy",
    
    // Panel de estadísticas - Papapykuéra
    tiempo: "Ára",
    puntos: "Puntu",
    victorias_label: "Pu'aka",
    record: "Tuvicha",
    score: "Score",
    derrotas: "Ñehundí",
    
    // Estados del juego
    game_over: "Ñembosarái Opa!",
    ganaste: "Reñeha'ã!",
    nuevo_record: "Tuvicha Pyahu!",
    victoria: "Pu'aka!",
    
    // Modal Cómo Jugar
    como_jugar_titulo: "Mba'éichapa Juga?",
    como_jugar_subtitulo: "Eñeha'ã ne mandu'á rehe, embyaty ha eñangareko ne rekove rehe!",
    como_jugar_paso1: "Embojere kárta: Eikutu mokõi kártare reikuaa hag̃ua mba'épa oĩ kañyhápe.",
    como_jugar_paso2: "Ejapo joaju ha egana tekove: Opa jey rejuhúvo peteĩ joaju oĩporãva, reganáta tekove repu'akáramo rejuga jey.",
    como_jugar_paso3: "Eñangareko jejavy rehe: Umi kárta ndojojuhúiramo, reganáta peteĩ tekove. Reñepyrũ 7 tekove ndive. Opáramo, ikatu rehecha peteĩ ñemurã mbyky ha egana jey tekovekuéra ha reho mboyve gueteri.",
    como_jugar_paso4: "Objetivo: Embojere mokõi kárta rehecha hag̃ua joaju ojueheguáva 7 tekove ndaopái mboyve.",
    cerrar: "Mboty",
    
    // Modal Ajustes
    ajustes_titulo: "Mbohekoporã",
    sonido: "Pu:",
    activado: "Hendúva",
    silenciado: "Ikirirĩva",
    modo: "Modo:",
    dark: "Ñypytũ",
    light: "Tesape",
    animaciones: "Mýi",
    animaciones_activadas: "Oñemýiva",
    animaciones_desactivadas: "Nomýiriva",
    idioma: "Ñe'ẽ",
    
    // Modal Desarrollador
    desarrollador_titulo: "Apohára",
    desarrollador_texto: "Maitei, che Yampiero Mujica. Ajapo Memoria mborayhúpe HTML, CSS ha JavaScript rupive ikatu hag̃uáicha revy'a entrena nde mandu'á ãga ñemurã vai'ỹre. Iporãramo ndéve ko proyecto ha reipytyvõse chéve, eipay café peteĩve",
    
    // Modal sistema
    game_over_mensaje: "Vy'apá! Nderekovévéima tekove.",
    ir_menu: "Tenda ñepyrũme",
    reintentar_nivel: "Eñeha'ã jey",
    
    // Modal victoria
    victoria_mensaje: "Vy'apavẽ, remohu'ã porãite ko nivel!",
    siguiente_nivel: "Nivel Oseguíva",
    
    // Footer y otros
    invitar_cafe: "Eipay café",
    version: "2026 © | V 2.8",
    confirmar_borrar: "Emboguete opaite tembiasakue ha embojevy papapykuéra?",
    sin_vidas_titulo: "Nderekovévéima tekove!",
    sin_vidas_mensaje: "Mba'épa rejapose reho hag̃ua tenonde?",
    ver_anuncio: "🎬 Ehecha ñemurã ha egana jey 7 tekove (Reho tenonde)",
    reiniciar_partida: "🔄 Eñepyrũ jey ñembosarái (Reho mboyve)",
    
    // Tooltips
    titulo_iniciar: "Ñepyrũ Ñembosarái",
    titulo_revolver: "Kárta Mbojehe'a",
    titulo_resetear: "Mbojehe'a Papapy",
    titulo_volver: "Jevy",
    
    // Textos dinámicos
    tiempo_record: (tiempo) => `Tuvicha Pyahu! Ára: ${tiempo}s`,
    tiempo_victoria: (tiempo, puntos) => `Pu'aka! Ára: ${tiempo}s. Puntu: ${puntos}`,
},

guc: { // Wayuunaiki
    // Menú principal
    jugar_ahora: "Jüküjainjachia",
    como_jugar: "¿Jamüshi Jüküjain?",
    ajustes: "Anaatirü",
    desarrollador: "Aashajaka",
    salir: "Jüpüle",
    
    // Pantalla de juego
    iniciar_juego: "Ajalajaa Jüküjain",
    pausar: "Jüpüla",
    reanudar: "Jütanü",
    revolver_cartas: "Jüchajünaa Karta",
    resetear_valores: "Jüpülaajünaa",
    
    // Panel de estadísticas
    tiempo: "Kara",
    puntos: "Puntu",
    victorias_label: "Aalayaa",
    record: "Anüiki",
    score: "Score",
    derrotas: "Müliayaa",
    
    // Estados del juego
    game_over: "¡Jamaa Jüküjain!",
    ganaste: "¡Aalayaashi!",
    nuevo_record: "¡Anüiki Jekü!",
    victoria: "¡Aalayaa!",
    
    // Modal Cómo Jugar
    como_jugar_titulo: "¿Jamüshi Jüküjain?",
    como_jugar_subtitulo: "¡Aja'itaaka pünüiki, akumajaa puntu je müliain püküa!",
    como_jugar_paso1: "Jüchajünaa karta: Ajakütaa piama karta jüpüla jüchajünaa tü icono müliaka sulu'u.",
    como_jugar_paso2: "Akumajaa pareja je antiraa kakuuna: Wattamüin jüpüla antüin pareja anasü, antiraashi kakuuna jüpüla jüküjainjatüin.",
    como_jugar_paso3: "Müliashi jüpüla error: Nnojolüin jütüjüin karta, müshirüin pünülia kakuuna. Jüshajüin akatsa'a 7 kakuuna. Nnojolüinjee, püleejeerü wane anuncio jüpüla akumajünaajatü jukuwa'ipa.",
    como_jugar_paso4: "Objetivo: Jüchajünaa karta piama jüpüla antüin pareja jümüin jüpüla nnojoluinjachin 7 kakuuna.",
    cerrar: "Jüpütü",
    
    // Modal Ajustes
    ajustes_titulo: "Anaatirü",
    sonido: "Akuwai:",
    activado: "Jütanü",
    silenciado: "Jüpüla",
    modo: "Modo:",
    dark: "Jouutsü",
    light: "Jouchon",
    animaciones: "Jüküjain Animado",
    animaciones_activadas: "Jütanü",
    animaciones_desactivadas: "Jüpüla",
    idioma: "Anüiki",
    
    // Modal Desarrollador
    desarrollador_titulo: "Aashajaka",
    desarrollador_texto: "Jamiaa, taya Yampiero Mujica. Tajüin Memoria jümüin asakaa HTML, CSS je JavaScript jüpüla püleejeerü jüküjain pünüiki. Jüpüla pünekiire proyecto je püliitüinjatüin, pükaaliijüin café",
    
    // Modal sistema
    game_over_mensaje: "¡Aishii! Nnojolüin püküa kakuuna.",
    ir_menu: "Jüpüle menú",
    reintentar_nivel: "Jüküjain jekü",
    
    // Modal victoria
    victoria_mensaje: "¡Anasü, ajutuushi nivel!",
    siguiente_nivel: "Nivel jekü",
    
    // Footer y otros
    invitar_cafe: "Pükaaliijüin café",
    version: "2026 © | V 2.8",
    confirmar_borrar: "¿Jüpülaajünaa sukuwa'ipa je jüpülaajünaa puntu?",
    sin_vidas_titulo: "¡Nnojolüin püküa kakuuna!",
    sin_vidas_mensaje: "¿Kasa püleejeerü jüpüla jütanüin?",
    ver_anuncio: "🎬 Jüchajünaa anuncio je antiraa 7 kakuuna (Jütanü jüküjain)",
    reiniciar_partida: "🔄 Jüpülaajünaa jüküjain (Müshirüin jütanü)",
    
    // Tooltips
    titulo_iniciar: "Ajalajaa Jüküjain",
    titulo_revolver: "Jüchajünaa Karta",
    titulo_resetear: "Jüpülaajünaa",
    titulo_volver: "Jüpüle",
    
    // Textos dinámicos
    tiempo_record: (tiempo) => `¡Anüiki Jekü! Kara: ${tiempo}s`,
    tiempo_victoria: (tiempo, puntos) => `¡Aalayaa! Kara: ${tiempo}s. Puntu: ${puntos}`,
},

wau: { // Warao
    // Menú principal
    jugar_ahora: "Jükü Jainako",
    como_jugar: "¿Jine Jükü?",
    ajustes: "Moinikane",
    desarrollador: "Araunaka",
    salir: "Jüpore",
    
    // Pantalla de juego
    iniciar_juego: "Jükü Jakore",
    pausar: "Jotoro",
    reanudar: "Jükü Jakore Jisaka",
    revolver_cartas: "Karta Jeburatu",
    resetear_valores: "Moinibunatu",
    
    // Panel de estadísticas
    tiempo: "Jiara",
    puntos: "Puntu",
    victorias_label: "Winata",
    record: "Rekor",
    score: "Score",
    derrotas: "Derota",
    
    // Estados del juego
    game_over: "¡Jükü Jebu!",
    ganaste: "¡Winataya!",
    nuevo_record: "¡Rekor Jobaji!",
    victoria: "¡Winata!",
    
    // Modal Cómo Jugar
    como_jugar_titulo: "¿Jine Jükü?",
    como_jugar_subtitulo: "¡A jüna siko, akumaja punto, je akore jebuna!",
    como_jugar_paso1: "Karta jeburatu: A jakore manamo karta a wabatu jokore jokore.",
    como_jugar_paso2: "A pareja akumaja je a jebuna winata: Jese orowai a pareja a wabatu, a winataya jebuna.",
    como_jugar_paso3: "Erroro a konae: Karta najorokitane, a jobajitaya jebu. A jakore 7 jebu. Najorokitane jebu, a wabatu anuncio a jobaji jebu je a jükü jisaka.",
    como_jugar_paso4: "Objetivo: Karta jeburatu manamo a wabatu pareja jokore 7 jebu najoroyakore.",
    cerrar: "Jüpore",
    
    // Modal Ajustes
    ajustes_titulo: "Moinikane",
    sonido: "Kuirida:",
    activado: "Ajukuka",
    silenciado: "Najoro",
    modo: "Modo:",
    dark: "Dimara",
    light: "Jarata",
    animaciones: "Animasion",
    animaciones_activadas: "Ajukuka",
    animaciones_desactivadas: "Najoro",
    idioma: "Ñe'ẽ",
    
    // Modal Desarrollador
    desarrollador_titulo: "Araunaka",
    desarrollador_texto: "Jamia, ine Yampiero Mujica. Ine Memoria akumaja HTML, CSS je JavaScript a siko entrena a jükü. A konae proyecto je a wabatu apoyo, ine café",
    
    // Modal sistema
    game_over_mensaje: "¡Jebu najoro! A jebu najorokitane.",
    ir_menu: "Menú a wabatu",
    reintentar_nivel: "Jükü Jisaka",
    
    // Modal victoria
    victoria_mensaje: "¡Winata, a nivel jobaji!",
    siguiente_nivel: "Nivel Jisaka",
    
    // Footer y otros
    invitar_cafe: "Ine café",
    version: "2026 © | V 2.8",
    confirmar_borrar: "¿Moinibunatu score je historia?",
    sin_vidas_titulo: "¡A jebu najorokitane!",
    sin_vidas_mensaje: "¿Jine a wabatu jisaka?",
    ver_anuncio: "🎬 Anuncio a wabatu je 7 jebu jobaji (Jükü jisaka)",
    reiniciar_partida: "🔄 Jükü jobaji (Progreso najoro)",
    
    // Tooltips
    titulo_iniciar: "Jükü Jakore",
    titulo_revolver: "Karta Jeburatu",
    titulo_resetear: "Moinibunatu",
    titulo_volver: "Jüpore",
    
    // Textos dinámicos
    tiempo_record: (tiempo) => `¡Rekor Jobaji! Jiara: ${tiempo}s`,
    tiempo_victoria: (tiempo, puntos) => `¡Winata! Jiara: ${tiempo}s. Puntu: ${puntos}`,
},

pex: { // Pemón
    // Menú principal
    jugar_ahora: "Eserenkare Iaré",
    como_jugar: "¿Eneken Eserenka?",
    ajustes: "Enepaik",
    desarrollador: "Enekapuei",
    salir: "Enechi",
    
    // Pantalla de juego
    iniciar_juego: "Eserenka Enetoi",
    pausar: "Enechitöi",
    reanudar: "Enetoi Pé",
    revolver_cartas: "Karta Enatöika",
    resetear_valores: "Enepaik Pé",
    
    // Panel de estadísticas
    tiempo: "Kareta",
    puntos: "Puntu",
    victorias_label: "Enetoi",
    record: "Rekor",
    score: "Score",
    derrotas: "Enapaika",
    
    // Estados del juego
    game_over: "¡Eserenka Enapa!",
    ganaste: "¡Enetoi Pé!",
    nuevo_record: "¡Rekor Enetoi!",
    victoria: "¡Enetoi!",
    
    // Modal Cómo Jugar
    como_jugar_titulo: "¿Eneken Eserenka?",
    como_jugar_subtitulo: "¡Eserenka ene enupa, akumaja puntu je enetoi enapai!",
    como_jugar_paso1: "Karta enatöika: Eserek manamo karta ena enupa kareta.",
    como_jugar_paso2: "Pareja akumaja je enapai enetoi: Orowai pareja enetoi, enapai enetoi enapa.",
    como_jugar_paso3: "Error enapaika: Karta nenetoi, enapaika enapai. Eserenka 7 enapai. Nenapaika, ene anuncio enetoi.",
    como_jugar_paso4: "Objetivo: Karta enatöika manamo pareja enetoi 7 enapai nenapaika.",
    cerrar: "Enechi",
    
    // Modal Ajustes
    ajustes_titulo: "Enepaik",
    sonido: "Enupa:",
    activado: "Enetoi",
    silenciado: "Enapaika",
    modo: "Modo:",
    dark: "Enupun",
    light: "Enukare",
    animaciones: "Enemöika",
    animaciones_activadas: "Enetoi",
    animaciones_desactivadas: "Enapaika",
    idioma: "Eneken",
    
    // Modal Desarrollador
    desarrollador_titulo: "Enekapuei",
    desarrollador_texto: "Enapai, Yampiero Mujica. Memoria akumaja HTML, CSS je JavaScript ene eserenka enupa. Enetoi proyecto, ene café enapa",
    
    // Modal sistema
    game_over_mensaje: "¡Enapaika! Enapai nenapaika.",
    ir_menu: "Menú enapa",
    reintentar_nivel: "Eserenka Pé",
    
    // Modal victoria
    victoria_mensaje: "¡Enetoi, nivel akumaja!",
    siguiente_nivel: "Nivel Pé",
    
    // Footer y otros
    invitar_cafe: "Ene café",
    version: "2026 © | V 2.8",
    confirmar_borrar: "¿Enepaik pé score je historia?",
    sin_vidas_titulo: "¡Enapai nenapaika!",
    sin_vidas_mensaje: "¿Eneken enapa pé?",
    ver_anuncio: "🎬 Anuncio enapa je 7 enapai enetoi (Eserenka pé)",
    reiniciar_partida: "🔄 Eserenka pé (Progreso enapaika)",
    
    // Tooltips
    titulo_iniciar: "Eserenka Enetoi",
    titulo_revolver: "Karta Enatöika",
    titulo_resetear: "Enepaik Pé",
    titulo_volver: "Enechi",
    
    // Textos dinámicos
    tiempo_record: (tiempo) => `¡Rekor Enetoi! Kareta: ${tiempo}s`,
    tiempo_victoria: (tiempo, puntos) => `¡Enetoi! Kareta: ${tiempo}s. Puntu: ${puntos}`,
},

jiv: { // Jivi (Hiwi/Guajibo)
    // Menú principal
    jugar_ahora: "Jiwita Jume",
    como_jugar: "¿Jume Jiwita?",
    ajustes: "Jiwakajü",
    desarrollador: "Jiwapajü",
    salir: "Jüpüna",
    
    // Pantalla de juego
    iniciar_juego: "Jiwita Jüpünajü",
    pausar: "Jüpünaka",
    reanudar: "Jiwita Jüme",
    revolver_cartas: "Karta Jiwakota",
    resetear_valores: "Jiwakajü Jüme",
    
    // Panel de estadísticas
    tiempo: "Jume",
    puntos: "Puntu",
    victorias_label: "Jiwita",
    record: "Rekor",
    score: "Score",
    derrotas: "Jiwapana",
    
    // Estados del juego
    game_over: "¡Jiwita Jüpana!",
    ganaste: "¡Jiwita Jü!",
    nuevo_record: "¡Rekor Jüme!",
    victoria: "¡Jiwita!",
    
    // Modal Cómo Jugar
    como_jugar_titulo: "¿Jume Jiwita?",
    como_jugar_subtitulo: "¡Jiwita jü jume, akumaja puntu je jiwita jüpüna!",
    como_jugar_paso1: "Karta jiwakota: Jiwita manamo karta jü jume kareta.",
    como_jugar_paso2: "Pareja akumaja je jiwita jüme: Orowai pareja jiwita, jiwita jüme.",
    como_jugar_paso3: "Error jiwapana: Karta najiwita, jiwapana jüme. Jiwita 7 jüme. Najiwapana, jü anuncio jiwita.",
    como_jugar_paso4: "Objetivo: Karta jiwakota manamo pareja jiwita 7 jüme najiwapana.",
    cerrar: "Jüpüna",
    
    // Modal Ajustes
    ajustes_titulo: "Jiwakajü",
    sonido: "Jüme:",
    activado: "Jiwita",
    silenciado: "Jiwapana",
    modo: "Modo:",
    dark: "Jüpünü",
    light: "Jükare",
    animaciones: "Jiwamöika",
    animaciones_activadas: "Jiwita",
    animaciones_desactivadas: "Jiwapana",
    idioma: "Jüme",
    
    // Modal Desarrollador
    desarrollador_titulo: "Jiwapajü",
    desarrollador_texto: "Jüme, Yampiero Mujica. Memoria akumaja HTML, CSS je JavaScript jü jiwita jume. Jiwita proyecto, jü café",
    
    // Modal sistema
    game_over_mensaje: "¡Jiwapana! Jüme najiwapana.",
    ir_menu: "Menú jü",
    reintentar_nivel: "Jiwita Jüme",
    
    // Modal victoria
    victoria_mensaje: "¡Jiwita, nivel akumaja!",
    siguiente_nivel: "Nivel Jüme",
    
    // Footer y otros
    invitar_cafe: "Jü café",
    version: "2026 © | V 2.8",
    confirmar_borrar: "¿Jiwakajü jüme score je historia?",
    sin_vidas_titulo: "¡Jüme najiwapana!",
    sin_vidas_mensaje: "¿Jume jü jüme?",
    ver_anuncio: "🎬 Anuncio jü je 7 jüme jiwita (Jiwita jüme)",
    reiniciar_partida: "🔄 Jiwita jüme (Progreso jiwapana)",
    
    // Tooltips
    titulo_iniciar: "Jiwita Jüpünajü",
    titulo_revolver: "Karta Jiwakota",
    titulo_resetear: "Jiwakajü Jüme",
    titulo_volver: "Jüpüna",
    
    // Textos dinámicos
    tiempo_record: (tiempo) => `¡Rekor Jüme! Jume: ${tiempo}s`,
    tiempo_victoria: (tiempo, puntos) => `¡Jiwita! Jume: ${tiempo}s. Puntu: ${puntos}`,
},

wot: { // Wottuja (Piaroa)
    // Menú principal
    jugar_ahora: "Jükü Jainako",
    como_jugar: "¿Jine Jükü?",
    ajustes: "Moinikane",
    desarrollador: "Araunaka",
    salir: "Jüpore",
    
    // Pantalla de juego
    iniciar_juego: "Jükü Jakore",
    pausar: "Jotoro",
    reanudar: "Jükü Jakore Jisaka",
    revolver_cartas: "Karta Jeburatu",
    resetear_valores: "Moinibunatu",
    
    // Panel de estadísticas
    tiempo: "Jiara",
    puntos: "Puntu",
    victorias_label: "Winata",
    record: "Rekor",
    score: "Score",
    derrotas: "Derota",
    
    // Estados del juego
    game_over: "¡Jükü Jebu!",
    ganaste: "¡Winataya!",
    nuevo_record: "¡Rekor Jobaji!",
    victoria: "¡Winata!",
    
    // Modal Cómo Jugar
    como_jugar_titulo: "¿Jine Jükü?",
    como_jugar_subtitulo: "¡A jüna siko, akumaja punto, je akore jebuna!",
    como_jugar_paso1: "Karta jeburatu: A jakore manamo karta a wabatu jokore jokore.",
    como_jugar_paso2: "A pareja akumaja je a jebuna winata: Jese orowai a pareja a wabatu, a winataya jebuna.",
    como_jugar_paso3: "Erroro a konae: Karta najorokitane, a jobajitaya jebu. A jakore 7 jebu. Najorokitane jebu, a wabatu anuncio a jobaji jebu je a jükü jisaka.",
    como_jugar_paso4: "Objetivo: Karta jeburatu manamo a wabatu pareja jokore 7 jebu najoroyakore.",
    cerrar: "Jüpore",
    
    // Modal Ajustes
    ajustes_titulo: "Moinikane",
    sonido: "Kuirida:",
    activado: "Ajukuka",
    silenciado: "Najoro",
    modo: "Modo:",
    dark: "Dimara",
    light: "Jarata",
    animaciones: "Animasion",
    animaciones_activadas: "Ajukuka",
    animaciones_desactivadas: "Najoro",
    idioma: "Ñe'ẽ",
    
    // Modal Desarrollador
    desarrollador_titulo: "Araunaka",
    desarrollador_texto: "Jamia, ine Yampiero Mujica. Ine Memoria akumaja HTML, CSS je JavaScript a siko entrena a jükü. A konae proyecto je a wabatu apoyo, ine café",
    
    // Modal sistema
    game_over_mensaje: "¡Jebu najoro! A jebu najorokitane.",
    ir_menu: "Menú a wabatu",
    reintentar_nivel: "Jükü Jisaka",
    
    // Modal victoria
    victoria_mensaje: "¡Winata, a nivel jobaji!",
    siguiente_nivel: "Nivel Jisaka",
    
    // Footer y otros
    invitar_cafe: "Ine café",
    version: "2026 © | V 2.8",
    confirmar_borrar: "¿Moinibunatu score je historia?",
    sin_vidas_titulo: "¡A jebu najorokitane!",
    sin_vidas_mensaje: "¿Jine a wabatu jisaka?",
    ver_anuncio: "🎬 Anuncio a wabatu je 7 jebu jobaji (Jükü jisaka)",
    reiniciar_partida: "🔄 Jükü jobaji (Progreso najoro)",
    
    // Tooltips
    titulo_iniciar: "Jükü Jakore",
    titulo_revolver: "Karta Jeburatu",
    titulo_resetear: "Moinibunatu",
    titulo_volver: "Jüpore",
    
    // Textos dinámicos
    tiempo_record: (tiempo) => `¡Rekor Jobaji! Jiara: ${tiempo}s`,
    tiempo_victoria: (tiempo, puntos) => `¡Winata! Jiara: ${tiempo}s. Puntu: ${puntos}`,
},
nl: { // Holandés (Neerlandés)
    // Hoofdmenu
    jugar_ahora: "Nu Spelen",
    como_jugar: "Hoe Spelen?",
    ajustes: "Instellingen",
    desarrollador: "Ontwikkelaar",
    salir: "Afsluiten",
    
    // Spelscherm
    iniciar_juego: "Spel Starten",
    pausar: "Pauzeren",
    reanudar: "Hervatten",
    revolver_cartas: "Kaarten Schudden",
    resetear_valores: "Waarden Resetten",
    
    // Statistiekenpaneel
    tiempo: "Tijd",
    puntos: "Punten",
    victorias_label: "Overwinningen",
    record: "Record",
    score: "Score",
    derrotas: "Nederlagen",
    
    // Spelstatussen
    game_over: "Game Over!",
    ganaste: "Je hebt Gewonnen!",
    nuevo_record: "Nieuw Record!",
    victoria: "Overwinning!",
    
    // Modal Hoe Spelen
    como_jugar_titulo: "Hoe Spelen?",
    como_jugar_subtitulo: "Test je geheugen, verzamel punten en bescherm je levens!",
    como_jugar_paso1: "Kaarten omdraaien: Klik op twee kaarten om de verborgen pictogrammen op het bord te ontdekken.",
    como_jugar_paso2: "Paren maken en levens verdienen: Elke keer dat je een correct paar vindt, verdien je levens als beloning om door te spelen.",
    como_jugar_paso3: "Pas op voor fouten: Als de kaarten niet overeenkomen, verlies je een leven. Je begint met 7 levens. Als ze op zijn, kun je een korte advertentie bekijken om ze te herstellen en verder te gaan waar je was.",
    como_jugar_paso4: "Doel: Draai twee kaarten tegelijk om om identieke paren te vinden voordat je 7 levens op zijn.",
    cerrar: "Sluiten",
    
    // Modal Instellingen
    ajustes_titulo: "Instellingen",
    sonido: "Geluid:",
    activado: "Aan",
    silenciado: "Uit",
    modo: "Modus:",
    dark: "Donker",
    light: "Licht",
    animaciones: "Animaties",
    animaciones_activadas: "Ingeschakeld",
    animaciones_desactivadas: "Uitgeschakeld",
    idioma: "Taal",
    
    // Modal Ontwikkelaar
    desarrollador_titulo: "Ontwikkelaar",
    desarrollador_texto: "Hallo, ik ben Yampiero Mujica. Ik heb Memoria met liefde gemaakt met HTML, CSS en JavaScript zodat jij je geheugen kunt trainen zonder vervelende advertenties. Als je het project leuk vindt en me wilt steunen om het actief te houden, trakteer me dan op een koffie door op het kopje te klikken",
    
    // Systeemmodal (Game Over)
    game_over_mensaje: "Jammer! Je hebt geen levens meer.",
    ir_menu: "Naar menu",
    reintentar_nivel: "Level Opnieuw Proberen",
    
    // Overwinningsmodal
    victoria_mensaje: "Gefeliciteerd, je hebt het level succesvol voltooid!",
    siguiente_nivel: "Volgend Level",
    
    // Footer en overige
    invitar_cafe: "Trakteer me op een koffie",
    version: "2026 © | V 2.8",
    confirmar_borrar: "Alle geschiedenis wissen en scores resetten?",
    sin_vidas_titulo: "Je hebt geen levens meer!",
    sin_vidas_mensaje: "Wat wil je doen om door te gaan?",
    ver_anuncio: "🎬 Bekijk advertentie en herstel 7 levens (Spel voortzetten)",
    reiniciar_partida: "🔄 Spel herstarten (Voortgang verliezen)",
    
    // Tooltips
    titulo_iniciar: "Spel Starten",
    titulo_revolver: "Kaarten Schudden",
    titulo_resetear: "Waarden Resetten",
    titulo_volver: "Terug",
    
    // Dynamische teksten (functies)
    tiempo_record: (tiempo) => `Nieuw Record! Tijd: ${tiempo}s`,
    tiempo_victoria: (tiempo, puntos) => `Overwinning! Tijd: ${tiempo}s. Punten: ${puntos}`,
},

ko: { // Coreano
    // 메인 메뉴
    jugar_ahora: "지금 플레이",
    como_jugar: "게임 방법",
    ajustes: "설정",
    desarrollador: "개발자",
    salir: "나가기",
    
    // 게임 화면
    iniciar_juego: "게임 시작",
    pausar: "일시정지",
    reanudar: "다시 시작",
    revolver_cartas: "카드 섞기",
    resetear_valores: "값 초기화",
    
    // 통계 패널
    tiempo: "시간",
    puntos: "점수",
    victorias_label: "승리",
    record: "기록",
    score: "스코어",
    derrotas: "패배",
    
    // 게임 상태
    game_over: "게임 오버!",
    ganaste: "승리했습니다!",
    nuevo_record: "새 기록!",
    victoria: "승리!",
    
    // 게임 방법 모달
    como_jugar_titulo: "게임 방법",
    como_jugar_subtitulo: "기억력을 테스트하고 점수를 쌓고 생명을 지키세요!",
    como_jugar_paso1: "카드 뒤집기: 카드 두 장을 클릭하여 보드에 숨겨진 아이콘을 발견하세요.",
    como_jugar_paso2: "짝을 맞추고 생명 획득: 올바른 짝을 찾을 때마다 보상으로 생명을 획득하여 계속 플레이할 수 있습니다.",
    como_jugar_paso3: "실수 주의: 카드가 일치하지 않으면 생명을 하나 잃습니다. 7개의 생명으로 시작합니다. 모두 소진되면 짧은 광고를 보고 회복하고 중단한 곳에서 계속할 수 있습니다.",
    como_jugar_paso4: "목표: 7개의 생명이 소진되기 전에 두 장씩 카드를 뒤집어 동일한 짝을 찾으세요.",
    cerrar: "닫기",
    
    // 설정 모달
    ajustes_titulo: "설정",
    sonido: "소리:",
    activado: "켜짐",
    silenciado: "꺼짐",
    modo: "모드:",
    dark: "다크",
    light: "라이트",
    animaciones: "애니메이션",
    animaciones_activadas: "활성화됨",
    animaciones_desactivadas: "비활성화됨",
    idioma: "언어",
    
    // 개발자 모달
    desarrollador_titulo: "개발자",
    desarrollador_texto: "안녕하세요, 저는 Yampiero Mujica입니다. 성가신 광고 없이 기억력을 훈련하며 즐거운 시간을 보낼 수 있도록 HTML, CSS, JavaScript로 정성을 담아 Memoria를 만들었습니다. 프로젝트가 마음에 들고 계속 유지되도록 지원하고 싶다면 컵을 클릭하여 커피 한 잔 사주세요",
    
    // 시스템 모달 (게임 오버)
    game_over_mensaje: "안타깝습니다! 생명을 모두 소진했습니다.",
    ir_menu: "메뉴로 이동",
    reintentar_nivel: "레벨 다시 시도",
    
    // 승리 모달
    victoria_mensaje: "축하합니다, 레벨을 성공적으로 완료했습니다!",
    siguiente_nivel: "다음 레벨",
    
    // 푸터 및 기타
    invitar_cafe: "커피 한 잔 사주기",
    version: "2026 © | V 2.8",
    confirmar_borrar: "모든 기록을 삭제하고 점수를 초기화하시겠습니까?",
    sin_vidas_titulo: "생명을 모두 소진했습니다!",
    sin_vidas_mensaje: "계속하려면 어떻게 하시겠습니까?",
    ver_anuncio: "🎬 광고 보고 생명 7개 회복 (게임 계속)",
    reiniciar_partida: "🔄 게임 재시작 (진행 상황 손실)",
    
    // 툴팁
    titulo_iniciar: "게임 시작",
    titulo_revolver: "카드 섞기",
    titulo_resetear: "값 초기화",
    titulo_volver: "뒤로",
    
    // 동적 텍스트 (함수)
    tiempo_record: (tiempo) => `새 기록! 시간: ${tiempo}초`,
    tiempo_victoria: (tiempo, puntos) => `승리! 시간: ${tiempo}초. 점수: ${puntos}`,
},

el: { // Griego
    // Κύριο μενού
    jugar_ahora: "Παίξε Τώρα",
    como_jugar: "Πώς Παίζω;",
    ajustes: "Ρυθμίσεις",
    desarrollador: "Προγραμματιστής",
    salir: "Έξοδος",
    
    // Οθόνη παιχνιδιού
    iniciar_juego: "Έναρξη Παιχνιδιού",
    pausar: "Παύση",
    reanudar: "Συνέχεια",
    revolver_cartas: "Ανακάτεμα Καρτών",
    resetear_valores: "Επαναφορά Τιμών",
    
    // Πίνακας στατιστικών
    tiempo: "Χρόνος",
    puntos: "Πόντοι",
    victorias_label: "Νίκες",
    record: "Ρεκόρ",
    score: "Σκορ",
    derrotas: "Ήττες",
    
    // Καταστάσεις παιχνιδιού
    game_over: "Τέλος Παιχνιδιού!",
    ganaste: "Κέρδισες!",
    nuevo_record: "Νέο Ρεκόρ!",
    victoria: "Νίκη!",
    
    // Modal Πώς Παίζω
    como_jugar_titulo: "Πώς Παίζω;",
    como_jugar_subtitulo: "Δοκίμασε τη μνήμη σου, συγκέντρωσε πόντους και κράτησε τις ζωές σου ασφαλείς!",
    como_jugar_paso1: "Γύρνα κάρτες: Κάνε κλικ σε δύο κάρτες για να ανακαλύψεις τα κρυμμένα εικονίδια στον πίνακα.",
    como_jugar_paso2: "Φτιάξε ζευγάρια και κέρδισε ζωές: Κάθε φορά που βρίσκεις ένα σωστό ζευγάρι, κερδίζεις ζωές ως ανταμοιβή για να συνεχίσεις να παίζεις.",
    como_jugar_paso3: "Πρόσεχε τα λάθη: Αν οι κάρτες δεν ταιριάζουν, χάνεις μια ζωή. Ξεκινάς με 7 ζωές. Αν τελειώσουν, μπορείς να δεις μια σύντομη διαφήμιση για να τις ανακτήσεις και να συνεχίσεις από εκεί που σταμάτησες.",
    como_jugar_paso4: "Στόχος: Γύρνα δύο κάρτες κάθε φορά για να βρεις πανομοιότυπα ζευγάρια πριν τελειώσουν οι 7 ζωές.",
    cerrar: "Κλείσιμο",
    
    // Modal Ρυθμίσεις
    ajustes_titulo: "Ρυθμίσεις",
    sonido: "Ήχος:",
    activado: "Ενεργό",
    silenciado: "Σίγαση",
    modo: "Λειτουργία:",
    dark: "Σκοτεινό",
    light: "Φωτεινό",
    animaciones: "Κινούμενα Σχέδια",
    animaciones_activadas: "Ενεργοποιημένα",
    animaciones_desactivadas: "Απενεργοποιημένα",
    idioma: "Γλώσσα",
    
    // Modal Προγραμματιστής
    desarrollador_titulo: "Προγραμματιστής",
    desarrollador_texto: "Γεια σου, είμαι ο Yampiero Mujica. Δημιούργησα το Memoria με αγάπη χρησιμοποιώντας HTML, CSS και JavaScript για να περνάς καλά εκπαιδεύοντας τη μνήμη σου χωρίς ενοχλητικές διαφημίσεις. Αν σου αρέσει το έργο και θέλεις να με υποστηρίξεις να το κρατήσω ενεργό, κέρασέ με έναν καφέ κάνοντας κλικ στο φλιτζάνι",
    
    // Modal συστήματος (Game Over)
    game_over_mensaje: "Κρίμα! Σου τελείωσαν οι ζωές.",
    ir_menu: "Μετάβαση στο μενού",
    reintentar_nivel: "Επανάληψη Επιπέδου",
    
    // Modal νίκης
    victoria_mensaje: "Συγχαρητήρια, ολοκλήρωσες το επίπεδο με επιτυχία!",
    siguiente_nivel: "Επόμενο Επίπεδο",
    
    // Υποσέλιδο και άλλα
    invitar_cafe: "Κέρασέ με έναν καφέ",
    version: "2026 © | V 2.8",
    confirmar_borrar: "Διαγραφή όλου του ιστορικού και επαναφορά βαθμολογιών;",
    sin_vidas_titulo: "Σου τελείωσαν οι ζωές!",
    sin_vidas_mensaje: "Τι θέλεις να κάνεις για να συνεχίσεις;",
    ver_anuncio: "🎬 Δες διαφήμιση και ανάκτησε 7 ζωές (Συνέχεια παιχνιδιού)",
    reiniciar_partida: "🔄 Επανεκκίνηση παιχνιδιού (Απώλεια προόδου)",
    
    // Tooltips
    titulo_iniciar: "Έναρξη Παιχνιδιού",
    titulo_revolver: "Ανακάτεμα Καρτών",
    titulo_resetear: "Επαναφορά Τιμών",
    titulo_volver: "Πίσω",
    
    // Δυναμικά κείμενα (συναρτήσεις)
    tiempo_record: (tiempo) => `Νέο Ρεκόρ! Χρόνος: ${tiempo}δ`,
    tiempo_victoria: (tiempo, puntos) => `Νίκη! Χρόνος: ${tiempo}δ. Πόντοι: ${puntos}`,
},

pap: { // Papiamento (Aruba, Curazao, Bonaire)
    // Menú prinsipal
    jugar_ahora: "Juga Awor",
    como_jugar: "Kon Juga?",
    ajustes: "Ajuste",
    desarrollador: "Desaroyadó",
    salir: "Salí",
    
    // Pantaya di wega
    iniciar_juego: "Kuminsá Wega",
    pausar: "Pousa",
    reanudar: "Kontinuá",
    revolver_cartas: "Bati Karta",
    resetear_valores: "Reset Valornan",
    
    // Panel di estadístika
    tiempo: "Tempu",
    puntos: "Punto",
    victorias_label: "Viktoria",
    record: "Rèkòrt",
    score: "Skor",
    derrotas: "Derota",
    
    // Estado di wega
    game_over: "Wega A Kaba!",
    ganaste: "Bo A Gana!",
    nuevo_record: "Rèkòrt Nobo!",
    victoria: "Viktoria!",
    
    // Modal Kon Juga
    como_jugar_titulo: "Kon Juga?",
    como_jugar_subtitulo: "Purba bo memoria, akumulá punto i tene bo bidanan salbo!",
    como_jugar_paso1: "Bira karta: Klik riba dos karta pa deskubrí e ikononan skondí riba e tablero.",
    como_jugar_paso2: "Traha par i gana bida: Kada biaha ku bo haña un par korekto, bo ta gana bida komo rekompensa pa sigui juga.",
    como_jugar_paso3: "Kuidou ku eror: Si e kartanan no ta igual, bo ta pèrdè un bida. Bo ta kuminsá ku 7 bida. Si bo ta keda sin, bo por mira un anunsio kòrtiku pa rekuperá nan i sigui eksaktamente kaminda bo a keda.",
    como_jugar_paso4: "Meta: Bira karta di dos den dos pa haña par igual promé ku bo 7 bidanan kaba.",
    cerrar: "Sera",
    
    // Modal Ajuste
    ajustes_titulo: "Ajuste",
    sonido: "Zonido:",
    activado: "Activá",
    silenciado: "Silensiá",
    modo: "Modo:",
    dark: "Skur",
    light: "Klaru",
    animaciones: "Animashon",
    animaciones_activadas: "Activá",
    animaciones_desactivadas: "Desactivá",
    idioma: "Idioma",
    
    // Modal Desaroyadó
    desarrollador_titulo: "Desaroyadó",
    desarrollador_texto: "Bon dia, mi ta Yampiero Mujica. Mi a krea Memoria ku amor usando HTML, CSS i JavaScript pa bo pasa un bon ratu entrenando bo memoria sin anunsio molestoso. Si bo gusta e proyecto i ke apoyá mi pa mantené aktivo, invitá mi un kòfi klikando riba e taza",
    
    // Modal di sistema (Game Over)
    game_over_mensaje: "Lástima! Bo a keda sin bida.",
    ir_menu: "Bai na menú",
    reintentar_nivel: "Purba Nivel Atrobe",
    
    // Modal viktoria
    victoria_mensaje: "Pabien, bo a kompletá e nivel ku éksito!",
    siguiente_nivel: "Siguiente Nivel",
    
    // Footer i otronan
    invitar_cafe: "Invitá mi un kòfi",
    version: "2026 © | V 2.8",
    confirmar_borrar: "Bora tur historia i reset skornan?",
    sin_vidas_titulo: "Bo a keda sin bida!",
    sin_vidas_mensaje: "Kiko bo ke hasi pa kontinuá?",
    ver_anuncio: "🎬 Mira anunsio i rekuperá 7 bida (Kontinuá wega)",
    reiniciar_partida: "🔄 Kuminsá wega di nobo (Pèrdè progreso)",
    
    // Tooltips
    titulo_iniciar: "Kuminsá Wega",
    titulo_revolver: "Bati Karta",
    titulo_resetear: "Reset Valornan",
    titulo_volver: "Bèk",
    
    // Teksto dinámiko (funshon)
    tiempo_record: (tiempo) => `Rèkòrt Nobo! Tempu: ${tiempo}s`,
    tiempo_victoria: (tiempo, puntos) => `Viktoria! Tempu: ${tiempo}s. Punto: ${puntos}`,
},

id: { // Indonesio
    // Menu utama
    jugar_ahora: "Main Sekarang",
    como_jugar: "Cara Bermain",
    ajustes: "Pengaturan",
    desarrollador: "Pengembang",
    salir: "Keluar",
    
    // Layar permainan
    iniciar_juego: "Mulai Permainan",
    pausar: "Jeda",
    reanudar: "Lanjutkan",
    revolver_cartas: "Kocok Kartu",
    resetear_valores: "Atur Ulang Nilai",
    
    // Panel statistik
    tiempo: "Waktu",
    puntos: "Poin",
    victorias_label: "Kemenangan",
    record: "Rekor",
    score: "Skor",
    derrotas: "Kekalahan",
    
    // Status permainan
    game_over: "Permainan Selesai!",
    ganaste: "Kamu Menang!",
    nuevo_record: "Rekor Baru!",
    victoria: "Kemenangan!",
    
    // Modal Cara Bermain
    como_jugar_titulo: "Cara Bermain",
    como_jugar_subtitulo: "Uji ingatanmu, kumpulkan poin, dan jaga nyawamu tetap aman!",
    como_jugar_paso1: "Balik kartu: Klik dua kartu untuk menemukan ikon tersembunyi di papan.",
    como_jugar_paso2: "Buat pasangan dan dapatkan nyawa: Setiap kali kamu menemukan pasangan yang benar, kamu akan mendapatkan nyawa sebagai hadiah untuk terus bermain.",
    como_jugar_paso3: "Hati-hati dengan kesalahan: Jika kartu tidak cocok, kamu akan kehilangan satu nyawa. Kamu mulai dengan 7 nyawa. Jika habis, kamu bisa menonton iklan singkat untuk memulihkannya dan melanjutkan tepat di tempat kamu berhenti.",
    como_jugar_paso4: "Tujuan: Balik dua kartu sekaligus untuk menemukan pasangan identik sebelum 7 nyawamu habis.",
    cerrar: "Tutup",
    
    // Modal Pengaturan
    ajustes_titulo: "Pengaturan",
    sonido: "Suara:",
    activado: "Aktif",
    silenciado: "Bisu",
    modo: "Mode:",
    dark: "Gelap",
    light: "Terang",
    animaciones: "Animasi",
    animaciones_activadas: "Diaktifkan",
    animaciones_desactivadas: "Dinonaktifkan",
    idioma: "Bahasa",
    
    // Modal Pengembang
    desarrollador_titulo: "Pengembang",
    desarrollador_texto: "Halo, saya Yampiero Mujica. Saya membuat Memoria dengan cinta menggunakan HTML, CSS, dan JavaScript agar kamu bisa bersenang-senang melatih ingatanmu tanpa iklan yang mengganggu. Jika kamu suka proyek ini dan ingin mendukung saya untuk tetap aktif, traktir saya kopi dengan mengklik cangkirnya",
    
    // Modal sistem (Game Over)
    game_over_mensaje: "Sayang sekali! Nyawamu habis.",
    ir_menu: "Pergi ke menu",
    reintentar_nivel: "Coba Lagi Level",
    
    // Modal kemenangan
    victoria_mensaje: "Selamat, kamu telah menyelesaikan level dengan sukses!",
    siguiente_nivel: "Level Berikutnya",
    
    // Footer dan lainnya
    invitar_cafe: "Traktir saya kopi",
    version: "2026 © | V 2.8",
    confirmar_borrar: "Hapus semua riwayat dan atur ulang skor?",
    sin_vidas_titulo: "Nyawamu habis!",
    sin_vidas_mensaje: "Apa yang ingin kamu lakukan untuk melanjutkan?",
    ver_anuncio: "🎬 Tonton iklan dan pulihkan 7 nyawa (Lanjutkan permainan)",
    reiniciar_partida: "🔄 Mulai ulang permainan (Kehilangan kemajuan)",
    
    // Tooltips
    titulo_iniciar: "Mulai Permainan",
    titulo_revolver: "Kocok Kartu",
    titulo_resetear: "Atur Ulang Nilai",
    titulo_volver: "Kembali",
    
    // Teks dinamis (fungsi)
    tiempo_record: (tiempo) => `Rekor Baru! Waktu: ${tiempo}s`,
    tiempo_victoria: (tiempo, puntos) => `Kemenangan! Waktu: ${tiempo}s. Poin: ${puntos}`,
}
};

// Función helper para obtener traducción
export function t(clave, idioma, ...params) {
    const traduccion = traducciones[idioma]?.[clave] || traducciones['es'][clave] || clave;
    return typeof traduccion === 'function' ? traduccion(...params) : traduccion;
}