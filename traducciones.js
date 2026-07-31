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
        version: "2026 © | V 2.6",
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
        version: "2026 © | V 2.6",
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
        version: "2026 © | V 2.6",
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
        version: "2026 © | V 2.2",
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
        version: "2026 © | V 2.2",
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
        version: "2026 © | V 2.2",
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
        version: "2026 © | V 2.2",
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
        version: "2026 © | V 2.2",
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
    }
    
// Función helper para obtener traducción
export function t(clave, idioma, ...params) {
    const traduccion = traducciones[idioma]?.[clave] || traducciones['es'][clave] || clave;
    return typeof traduccion === 'function' ? traduccion(...params) : traduccion;
}