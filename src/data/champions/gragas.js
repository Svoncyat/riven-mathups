 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const gragasMatchup = {
  id: 'gragas',
  name: await getChampionInfo.getChampionName('Gragas'),
  nickname: await getChampionInfo.getChampionTitle('Gragas'),
  difficulty: DIFFICULTY_LEVELS.HARD,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Gragas.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/GragasPassive.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GragasQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GragasW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GragasE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GragasR.png',
  },
  runes: {
    primary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png',
      keystone: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Conqueror/Conqueror.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Triumph.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png',
      rune3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/LastStand/LastStand.png',
    },
    secondary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7204_Resolve.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Resolve/BonePlating/BonePlating.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/Unflinching/Unflinching.png',
    },
    statShards: {
      shard1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthScalingIcon.png'
    },
  },
  items: {
    starting: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1055.png', // Doran's Blade
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png',  // Health Potion
    ],
    recommended: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3071.png', // Black Cleaver
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3111.png', // Mercury's Treads
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3161.png', // Spear of Shojin
    ],
  },
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png', // Flash
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerTeleport.png', // Teleport
  },
  strategy: {
    notes: [
      'Consigue las Botas de Mercurio para reducir la duración de su aturdimiento (E).',
      'Potencialmente puedes matarlo al principio si se queda con poca vida; de lo contrario, céntrate en farmear y disputar súbditos.',
      'Enfrentamiento de farmeo.',
      'A nivel 6, tienes potencial de asesinato, pero ten en cuenta que puede escapar fácilmente con sus habilidades.',
      'No puedes cancelar su autoataque potenciado una vez que la animación ha comenzado, así que no intentes bloquearlo; deja que lo use en los súbditos primero.',
      'Tan pronto como falle su E, puedes buscar el all-in.',
      'Sus autoataques hacen poco daño, lo que le obliga a usar maná para intercambiar de manera efectiva; aprovecha esto para conseguir una ventaja de oro. Evita que te lance su definitiva hacia su torre.',
      'La hitbox de su W puede ser inusual; ten cuidado.',
      'Este enfrentamiento puede ser muy difícil si el jugador de Gragas es hábil porque su deslizamiento (E) tiene alta prioridad. Evita usar tu tercera Q si todavía tiene su E disponible.',
    ],
    toDo: [
      'Establece la prioridad de línea lo antes posible para empujar los súbditos bajo su torre.',
      'Intenta provocar su E o bloquéala con tu escudo (E) antes de comprometerte en intercambios.',
      'Respeta su W (Furia Ebria); no te quedes demasiado cerca de los súbditos cuando esté activa.',
      'Posiciónate detrás de los súbditos antes de intercambiar para potencialmente conseguir un intercambio gratis a menos que reaccione rápidamente.',
      'Ten siempre una oleada de súbditos a tu lado para bloquear su E en caso de que un intercambio salga mal.',
    ],
    toAvoid: [
      'Evita intentar intercambios cortos cuando su E (Barrigazo) esté disponible.',
      'No realices intercambios sin súbditos cerca para bloquear su E.',
    ],
  },
  lastUpdated: '2025-08-07',
  patch: '15.15.1',
  author: 'Svonccy',
};