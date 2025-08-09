 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const lilliaMatchup = {
  id: 'lillia',
  name: await getChampionInfo.getChampionName('Lillia'),
  nickname: await getChampionInfo.getChampionTitle('Lillia'),
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Lillia.png',
  
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/LilliaP.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/LilliaQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/LilliaW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/LilliaE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/LilliaR.png'
  },
  
  runes: {
    primary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png',
      keystone: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/Electrocute/Electrocute.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png',
      rune3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png'
    },
    secondary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Triumph.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/LastStand/LastStand.png'
    },
    statShards: {
      shard1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthScalingIcon.png'
    }
  },
  
  items: {
    starting: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1055.png', // Espada de Doran
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png'  // Poción de Vida
    ],
    recommended: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1001.png', // Botas de Velocidad
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3111.png', // Botas de Mercurio
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3155.png', // Velo del Hada de la Muerte
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3071.png', // Cuchilla Negra
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3742.png'  // Martillo de Esterak
    ]
  },
  
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png',
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerDot.png'
  },
  
  strategy: {
    notes: [
      'Los jugadores de Lillia considerarán esto un "matchup difícil", así que mientras no le des ninguna oportunidad, no debería tener un tiempo fácil.'
    ],
    toDo: [
      'Concéntrate en evitar sus habilidades de proyectil y hacer kiting alrededor de su ventaja de velocidad de movimiento.',
      'Busca trades cortos y oportunidades de daño explosivo para evitar enfrentamientos extendidos donde sus habilidades de kiting sobresalen.',
      'Coordina con tu jungla para ganks para capitalizar su falta de movilidad.',
      'Construye objetos que puedan mitigar su daño mágico y ventajas de velocidad de movimiento.'
    ],
    toAvoid: [
      'Sobreextenderte en trades o peleas donde pueda hacerte kiting efectivamente.',
      'Subestimar su potencial de daño explosivo si acierta múltiples golpes con sus habilidades.',
      'Ignorar su bonus de velocidad de movimiento pasivo; ten en cuenta su posicionamiento para evitar daño innecesario.'
    ]
  },
  
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};