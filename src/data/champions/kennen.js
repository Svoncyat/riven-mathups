 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const kennenMatchup = {
  id: 'kennen',
  name: await getChampionInfo.getChampionName('Kennen'),
  nickname: await getChampionInfo.getChampionTitle('Kennen'),
  difficulty: DIFFICULTY_LEVELS.EXTREME,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Kennen.png',

  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Kennen_Passive.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/KennenShurikenHurlMissile1.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/KennenBringTheLight.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/KennenLightningRush.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/KennenShurikenStorm.png'
  },

  runes: {
    primary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png',
      keystone: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Conqueror/Conqueror.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Triumph.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/LegendHaste/LegendHaste.png',
      rune3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/LastStand/LastStand.png'
    },
    secondary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7204_Resolve.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Resolve/SecondWind/SecondWind.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/Unflinching/Unflinching.png'
    },
    statShards: {
      shard1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthScalingIcon.png'
    }
  },

  items: {
    starting: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1055.png',
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png'
    ],
    recommended: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3158.png',
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3155.png',
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/223156.png'
    ]
  },

  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png',
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerDot.png'
  },

  strategy: {
    notes: [
      'Haz cheese en nivel 1 para obtener ventaja temprana.',
      'Si juegas bien el early game, puedes intentar matarlo en nivel 6.',
      'Solo puedes matarlo si no sabe usar su pasiva W o su E correctamente.',
      'Es principalmente un matchup de farmeo.',
      'No vayas por last hits cuando tenga su AA potenciado activo.',
      'Puede ser molesto pero realmente no tiene mucha presión de kill. Ganas si estás parejo en nivel 6, compra tenacidad rápido.',
      'Este es uno de los matchups más difíciles para Riven porque Kennen tiene muchos stuns y puede simplemente usar E para escapar de tus trades.',
      'Aquí necesitas ir por Botas de Mercurio y Velo del Hada de la Muerte temprano si quieres tener una oportunidad de matarlo.'
    ],
    toDo: [
      'Extender Q puede ayudarte a pokearlo un poco.',
      'Solo puedes tradear contra él si logras guardar tu E para desengancharte y no tienes que usar más de una Q para cerrar la distancia.',
      'En nivel 4 puedes ir por trades de all-in pero solo valen la pena si le quitas al menos 50% de su vida.',
      'Los jugadores decentes de Kennen no son killables antes del nivel 6.',
      'Dependiendo de sus objetos puedes one-shotearlo en nivel 6.'
    ],
    toAvoid: [
      'Entrar cuando tengas más de 1 stack de la pasiva de Kennen en ti.',
      'Ir por trades parejos.'
    ]
  },

  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};