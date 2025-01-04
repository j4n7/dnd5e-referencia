data_action = [
    {
        title: "Atacar con arma [2024]",
        icon: "crossed-swords",
        subtitle: "Ataque con arma",
        description: "Realiza con tu arma un ataque cuerpo a cuerpo o a distancia",
        reference: "PHB'24, pgs. X.",
        bullets: [
            "Equipar/Desequipar armas: Puedes equipar o desequipar un arma antes o después de atacar, incluyendo desenvainar, recoger, enfundar, guardar o soltar el arma.",
            "Movimiento entre ataques: Si tienes más de un ataque en tu turno, puedes moverte entre ellos usando parte o todo tu movimiento.",
            "Ciertos rasgos, como el rasgo <i> Ataque Adicional </i> del guerrero, te permiten realizar más de un ataque con esta acción. Cada uno de estos ataques es una tirada a parte y puede ser a diferentes criaturas. Puedes moverte entre estos ataques.",
            "Cuando atacas con un arma cuerpo a cuerpo ligera, puedes usar una acción adicional para atacar con la otra mano (ver la acción adicional <i>Ataque con dos armas</i>).",
            "Algunas condiciones dan ventaja en el ataque: ataques contra objetivos cegados, paralizados, petrificados, apresados, aturdidos o inconscientes; ataques cuerpo a cuerpo contra objetivos derribados; ataques de atacantes invisibles u ocultos.",
            "Algunas condiciones ponen en desventaja el ataque: ataques contra objetivos invisibles u ocultos; ataques a distancia contra objetivos derribados; ataques de atacantes cegados, asustados, envenenados o apresados."
        ]
    },
    {
        title: "Atacar desarmado [2024]",
        icon: "crossed-swords",
        subtitle: "Ataque con arma o desarmado",
        description: "Realizar daño, agarrar o empujar",
        reference: "PHB'24, pgs. X.",
        bullets: [
            "Daño: haces una tirada de ataque contra el objetivo. Tu bonificador para la tirada es igual a tu modificador de Fuerza más tu Bonificador por Competencia. Si aciertas, el objetivo recibe daño contundente igual a 1 + tu modificador de Fuerza."
        ]
    },
    {
        title: "Agarrar (Grapple) [2024]",
        icon: "grab",
        subtitle: "Ataque desarmado cuerpo a cuerpo",
        description: "Intentas agarrar a una criatura o luchar con ella",
        reference: "PHB'14, pg. X.",
        bullets: [
            "El objetivo elige entre una tirada de salvación de Fuerza o Destreza para resistir el agarre.",
            "La CD es 8 + modificador de Fuerza + bonificador por Competencia.",
            "El agarre requiere que el objetivo no sea más de un tamaño mayor que tú.",
            "Necesitas una mano libre para realizar el agarre."
        ]
    },
    {
        title: "Empujar (Shove) [2024]",
        icon: "hand",
        subtitle: "Ataque desarmado cuerpo a cuerpo",
        description: "Empuja a una criatura, ya sea para derribarla o para alejarla de ti",
        reference: "PHB'14, pg. X.",
        bullets: [
            "El objetivo elige entre una tirada de salvación de Fuerza o Destreza para resistir el empujón.",
            "La CD es 8 + modificador de Fuerza + bonificador por Competencia.",
            "Si falla, puedes empujarlo 5 pies o derribarlo al suelo (condición Derribado).",
            "El empujón requiere que el objetivo no sea más de un tamaño mayor que tú."
        ]
    },
    {
        title: "Lanzar un conjuro",
        icon: "magic-swirl",
        subtitle: "Tiempo de lanzamiento de 1 acción",
        description: "Lanza un conjuro con un tiempo de lanzamiento de 1 acción",
        reference: "PHB'14, pg. 192.",
        bullets: [
            "No puedes lanzar un conjuro con tu acción y un conjuro diferente con tu acción adicional en el mismo turno, excepto si la acción se usa para lanzar un truco.",
            "El objetivo de un conjuro debe estar dentro del rango del conjuro. Para apuntar a algo, debes tener un camino claro hacia él, de modo que no pueda estar detrás de la cobertura total.",
            "Los conjuros con componentes materiales no consumen el material a menos que se indique explícitamente. A menos que se indique el costo de un material, puedes suponer que el costo es insignificante y que el material simplemente está disponible en una bolsa de componentes.",
            "Algunos conjuros requieren más de 1 turno para lanzarlos. Si pierdes la concentración, tal conjuro termina. Pierdes la concentración en un conjuro si lanzas otro conjuro que requiere concentración o cuando estás incapacitado. Cada vez que tomas daño, debes hacer una tirada de salvación de Constitución para mantener tu concentración. La CD es igual a 10 o la mitad del daño que recibes, el que sea mayor.",
        ]
    },
    {
        title: "Correr (Dash)",
        icon: "sprint",
        subtitle: "Velocidad de movimiento doble",
        description: "Obtienes movimiento adicional para el turno en curso",
        reference: "PHB'14, pg. 192.",
        bullets: [
            "El incremento es igual a tu velocidad, después de aplicarle cualquier modificador."
        ]
    },
    {
        title: "Destrabarse (Disengage)",
        icon: "journey",
        subtitle: "Previene ataques de oportunidad",
        description: "Tu movimiento no provoca ataques de oportunidad durante el resto del turno",
        reference: "PHB'14, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Esquivar (Dodge)",
        icon: "aura",
        subtitle: "Incrementa la defensa",
        description: "Te enfocas por completo en evitar ataques",
        reference: "PHB'14, pg. 192.",
        bullets: [
            "Hasta el comienzo de tu siguiente turno, cualquier tirada de ataque hecha contra ti tiene una desventaja si puedes ver al atacante, y haces lanzamientos de salvación de Destreza con ventaja.",
            "Pierdes este beneficio si estás <i> incapacitado </i> o si tu velocidad cae a 0."
        ]
    },
    {
        title: "Escapar de un agarre (Escape) [2024]",
        icon: "manacles",
        subtitle: "Liberarte de un agarre",
        description: "Escapas de un agarre",
        reference: "PHB'14, pg. X.",
        bullets: [
            "Realiza un chequeo de Fuerza (Atletismo) o Destreza (Acrobacia) contra la CD de escape del agarre (ver condición de Agarrado), terminando la condición si tiene éxito.",
            "La condición de Agarrado también termina si el que agarra queda Incapacitado.",
            "La condición termina si la distancia entre el objetivo Agarrado y el que agarra excede el alcance del agarre."
                    ]
    },
    {
        title: "Ayudar (Help) [2024]",
        icon: "telepathy",
        subtitle: "Le proporcionas ventaja a un aliado",
        description: "Propoprcionas a un aliado ventaja en una prueba de habilidad o de ataque",
        reference: "PHB'14, pg. X.",
        bullets: [
            "Elige una de tus competencias en habilidades o herramientas y un aliado cercano al que puedas asistir verbal o físicamente; ese aliado tiene Ventaja en su próxima prueba de habilidad con la habilidad o herramienta elegida.",
            "El beneficio expira si el aliado no lo usa antes del inicio de tu próximo turno.",
            "Puedes distraer a un enemigo a 5 pies de ti, otorgando Ventaja al próximo ataque de un aliado contra ese enemigo.",
            "El beneficio expira al inicio de tu próximo turno."
        ]
    },
    {
        title: "Usar un objeto",
        icon: "snatch",
        subtitle: "Interactuar con un segundo objeto",
        description: "Interactuar con un segundo objeto o usar habilidades de objetos especiales",
        reference: "PHB'14, pg. 193.",
        bullets: [
            "Puedes interactuar con un objeto de forma gratuita durante tu turno (como sacar un arma o abrir una puerta). Si deseas interactuar con un segundo objeto, usa esta acción.",
            "Cuando un objeto requiere tu acción para su uso, también realizas esta acción"
        ]
    },
    {
        title: "Usar un escudo",
        icon: "round-shield",
        subtitle: "Equipar o desequipar un escudo",
        description: "Equipar o desequipar un escudo",
        reference: "PHB'14, pgs. 144-146.",
        bullets: [
            "Un escudo siempre toma una acción para equipar o desequipar",
            "La armadura tarda varios minutos en equiparse o desequiparse."
        ]
    },
    {
        title: "Esconderse [2024]",
        icon: "hood",
        subtitle: "",
        description: "Intentar ocultarse",
        reference: "PHB'14, pg. X.",
        bullets: [
            "No puedes esconderte de una criatura que puede verte. Debes tener una cobertura total, estar en un área muy obscura, ser invisible o bloquear la visión del enemigo.",
            "Si haces ruido (como gritar una advertencia o derribar un jarrón), te descubrirás.",
            "Cuando intentes esconderte, haz una prueba de Destreza (Sigilo) con CD 15 y anota el resultado. Hasta que te descubran o dejes de esconderte, el total de esa tirada será enfrentado por una prueba de Sabiduría (Percepción) de cualquier criatura que busque activamente las señales de tu presencia.",
            "Una criatura te advierte incluso si no está buscando, a menos que tu prueba de Sigilo sea más alta que su Percepción Pasiva.",
            "Fuera de combate, también puedes realizar una prueba de Destreza (Sigilo) para ocultarte de los enemigos, escabullirte de los guardias, escabullirte sin ser notado, o acechar a alguien sin ser visto o escuchado."
        ]
    },
    {
        title: "Influir [2024]",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Intentas que un monstruo haga algo",
        reference: "PHB'14, pg. X.",
        bullets: [
            "Si el monstruo está dudoso, realiza una prueba de Carisma (CD 15 o su Inteligencia, lo que sea mayor) dependiendo de si es amistoso, neutro u hostil. Si fallas, espera 24 horas para intentarlo otra vez.",
        "Engaño: Engañar a un monstruo que te entiende.",
        "Intimidación: Intimidar a un monstruo.",
        "Interpretación: Divertir a un monstruo.",
        "Persuasión: Persuadir a un monstruo que te entiende.",
        "Trato con Animales: Convencer suavemente a una Bestia o Monstruosidad."
        ]
    },
    {
        title: "Buscar [2024]",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Dedicas tu atención a encontrar algo",
        reference: "PHB'14, pg. X.",
        bullets: [
            "Realiza una prueba de Sabiduría (Averiguar intenciones, Medicina, Percepción o Supervivencia).",
            "Averiguar intenciones: Estado mental de una criatura.",
            "Medicina: Afección de una criatura o causa de su muerte.",
            "Percepción: Criatura u objeto oculto.",
            "Supervivencia: Rastros o comida."
        ]
    },
    {
        title: "Estudiar [2024]",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Dedicas tu atención a obtener información",
        reference: "PHB'14, pg. X.",
        bullets: [
            "Haces un chequeo de Inteligencia para analizar tu memoria, un libro, una pista u otra fuente de conocimiento y recordar un dato importante sobre ella.",
            "Arcana: Hechizos, objetos mágicos, símbolos arcanos, tradiciones mágicas, planos de existencia y ciertas criaturas (Aberraciones, Constructos, Elementales, Feéricos y Monstruosidades).",
            "Historia: Eventos y personas históricas, civilizaciones antiguas, guerras y ciertas criaturas (Gigantes y Humanoides).",
            "Investigación: Trampas, cifrados, acertijos y artilugios.",
            "Naturaleza: Terreno, flora, clima y ciertas criaturas (Bestias, Dragones, Gelatinas y Plantas).",
            "Religión: Deidades, jerarquías y rituales religiosos, símbolos sagrados, cultos y ciertas criaturas (Celestiales, Demonios y No-muertos)."
        ]
    },    
    {
        title: "Preparar una acción (Ready)",
        icon: "stopwatch",
        subtitle: "Elige una circunstancia y una acción",
        description: "Elige una circunstancia y una acción de respuesta",
        reference: "PHB'14, pg. 193.",
        bullets: [
            "Primero, decide qué circunstancia (que puedas percibir) activará tu reacción.",
            "Luego, elige la acción que realizarás en respuesta a dicha activación. Como alternativa, en vez de una acción puedes decidir moverte hasta tu velocidad.",
            "Cuando ocurra la circunstancia de activación, podrás elegir entre usar tu reacción al terminar esta o ignorarla.",
            "Cuando te preparas para lanzar un conjuro, lo lanzas con normalidad pero retienes su energía, que liberarás usando tu reacción cuando se produzca la circunstancia activadora. Sólo los conjuros cuyo tiempo de lanzamiento sea de 1 acción pueden formar parte de una acción preparada. Además, el esfuerzo que implica contener las energías mágicas hasta el momento de liberarlas exige concentración."
        ]
    },
    {
        title: "Usar un rasgo de clase",
        icon: "embrassed-energy",
        subtitle: "Algunos rasgos utilizan acciones",
        description: "Utiliza un rasgo racial o de clase que use una acción",
        reference: "Revisa la página de tu clase para más información.",
        bullets: [

        ]
    },
    {
        title: "Estabilizar a una criatura [2024]",
        icon: "first-aid",
        subtitle: "Primeros auxilios a criatura moribunda",
        description: "Evita que una criatura moribunda tenga que realizar tiradas de salvacion contra muerte",
        reference: "PHB'14, pg. X.",
        bullets: [
            "Realiza un prueba de Sabiduría (Medicina) CD 10.",
            "Con éxito, la criatura está estable y ya no necesita realizar tiradas de salvación contra muerte.",
            "Una criatura estable está Incosciente recupera 1 punto de vida después de 1d4 horas.",
            "Si la criatura recibe daño, deja de estar Estable y vuelve a hacer Tiradas de Salvación contra la Muerte."
        ]
    },
    {
        title: "Improvisar",
        icon: "juggler",
        subtitle: "Cualquier acción no en esta lista",
        description: "Realiza cualquier acción que puedas imaginar",
        reference: "PHB'14, pg. 193.",
        bullets: [
            "Cuando describes una acción no detallada en las reglas, el DM te dirá si la acción es posible y que prueba requieres hacer, si la hay, para determinar el éxito o el fallo."
        ]
    }
]
