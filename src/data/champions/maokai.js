 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const maokaiMatchup = {
  id: 'maokai',
  name: await getChampionInfo.getChampionName('Maokai'),
  nickname: await getChampionInfo.getChampionTitle('Maokai'),
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Maokai.png',
  
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Maokai_Passive.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/MaokaiQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/MaokaiW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/MaokaiE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/MaokaiR.png'
  },
  
  runes: {
    primary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png',
      keystone: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Conqueror/Conqueror.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Triumph.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png',
      rune3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/LastStand/LastStand.png'
    },
    secondary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7203_Whimsy.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/JackOfAllTrades/JackofAllTrades2.png'
    },
    statShards: {
      shard1: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsCDRScalingIcon.png",
      shard2: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png",
      shard3: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthPlusIcon.png"
    }
  },
  
  items: {
    starting: [
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1055.png", // Doran's Blade
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png"  // Health Potion
    ],
    recommended: [
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3071.png", // Black Cleaver
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3111.png", // Mercury's Treads
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3123.png", // Executioner's Calling
    ]
  },
  
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png',
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerDot.png'
  },
  
  strategy: {
    notes: [
      'Engaña su Q para evitar ser empujado hacia atrás.',
      'Concéntrate en el último golpe; se vuelve inmortal si no obtienes una ventaja temprana.',
      'Su daño principal es su Q; desde los niveles 2-3, usa tu escudo primero para intercambiar.',
      'Cuando hagas intercambios cortos bajo la torre, guarda tu E para su W para hacerlo saltar fuera del rango de la torre.',
      'Obtén Verdugo temprano; se cura fuera de las peleas y lo activa solo una o dos veces durante las peleas.',
      'No hagas spam de tus habilidades, ya que gana cargas pasivas gratis.',
      'El enfrentamiento se vuelve más difícil después de que obtenga objetos de armadura.',
      'Maokai es fuerte en peleas de equipo tardías, así que trata de terminar el juego temprano.',
      'Su pasiva le da mucha sustentabilidad, especialmente en peleas prolongadas.',
      'Evita pelear en áreas con muchos minions ya que puede usar su E de manera más efectiva.'
    ],
    toDo: [
      'All-in de nivel 1.',
      'Su daño principal es su Q; desde los niveles 2-3, usa tu escudo primero para intercambiar.',
      'Cuando hagas intercambios cortos bajo la torre, guarda tu E para su W para hacerlo saltar fuera del rango de la torre.',
      'Obtén Verdugo temprano para reducir su curación.',
      'Busca intercambios rápidos y sal antes de que pueda activar su pasiva múltiples veces.',
      'Aprovecha los niveles tempranos antes de que se vuelva demasiado tanque.'
    ],
    toAvoid: [
      'Hacer spam de tus habilidades, ya que gana cargas pasivas gratis.',
      'Intercambios prolongados donde puede activar su pasiva múltiples veces.',
      'Pelear sin Verdugo cuando tiene mucha curación.',
      'Subestimar su daño en los primeros niveles.',
      'Dejarlo farmear libremente y escalar a late game.'
    ]
  },
  
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};