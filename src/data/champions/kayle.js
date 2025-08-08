import { DIFFICULTY_LEVELS } from '../constants.js';

export const kayleMatchup = {
  id: 'kayle',
  name: 'Kayle',
  nickname: 'La Justiciera',
  difficulty: DIFFICULTY_LEVELS.EASY,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Kayle.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Kayle_P.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/KayleQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/KayleW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/KayleE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/KayleR.png'
  },
  runes: {
    primary: {
      tree: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png",
      keystone: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/Electrocute/Electrocute.png",
      rune1: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png",
      rune2: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png",
      rune3: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png"
    },
    secondary: {
      tree: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png",
      rune1: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Triumph.png",
      rune2: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png"
    },
    statShards: {
      shard1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthScalingIcon.png'
    }
  },
  items: {
    starting: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1055.png', // Doran's Blade
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png'  // Health Potion
    ],
    recommended: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3071.png', // Black Cleaver
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3158.png', // Ionian Boots of Lucidity
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3142.png'  // Youmuu's Ghostblade
    ]
  },
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png', // Flash
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerDot.png' // Ignite
  },
  strategy: {
    notes: [
      'Necesitas conseguir tu ventaja temprana.',
      'Hacer cheese en el nivel 1 es muy bueno.',
      'Haz que use su W a menudo y desperdicie su maná, para que puedas hacer all-in o ella pierda súbditos.',
      'Puedes hacer snowball bastante bien.',
      'Se convierte en un monstruo más tarde en el juego.',
      'Matchup de farmeo.',
      'Kayle ni siquiera es un campeón temprano. Solo farmea AFK y consigue tu 20-30% CDR o mátala tan pronto como llegues al nivel 6.',
      'Su definitiva tiene un CD largo, así que intercambiar definitivas está bien porque la tuya estará lista antes que la suya.',
      'Al inicio del juego, puedes usar la misma estrategia que con Akali, pero ten cuidado y ejecuta tu combo rápido un poco más tarde.',
      'Puedes tomar Fantasmal en lugar de Ignición y perseguirla cuando trate de pokearte cerca de tu torre.',
      'No hay amenaza real en el carril pero obviamente Kayle escala muy bien.',
      'Esfuérzate mucho por conseguir una gran ventaja antes del nivel 11.',
      'Una vez que tengas 45% CDR, deberías poder matarla con 2 rotaciones. Busca errores.',
      'En el carril, recibe mucho daño si puedes llegar a ella.',
      'El secreto de este matchup es empujar las oleadas tempranas y hacer que reboten, luego congelarlas, y prácticamente puedes negarle el farmeo.',
      'En el nivel 6, no puedes hacer intercambios rápidos; solo ve all-in contra ella.'
    ],
    toDo: [
      'Tu definitiva tiene CD antes que la suya, si ambos usan definitiva al mismo tiempo, aprovecha eso.',
      'Cada vez que se acerque, castígala.'
    ],
    toAvoid: [
      'Ser golpeado por su AA potenciado (E) o Q; usa tu E para bloquearlo cuando puedas.'
    ]
  },
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};