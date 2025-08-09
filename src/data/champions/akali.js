 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const akaliMatchup = {
  id: 'akali',
  name: await getChampionInfo.getChampionName('Akali'),
  nickname: await getChampionInfo.getChampionTitle('Akali'),
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Akali.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Akali_P.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/AkaliQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/AkaliW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/AkaliE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/AkaliR.png'
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
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7203_Whimsy.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/JackOfAllTrades/JackofAllTrades2.png'
    },
    statShards: {
      shard1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsCDRScalingIcon.png',
      shard2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthPlusIcon.png'
    }
  },
  items: {
    starting: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1054.png', // Doran's Shield
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png' // Health Potion
    ],
    recommended: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3364.png' // Oracle Lens
    ]
  },
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png',
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerDot.png'
  },
  strategy: {
    notes: [
      'Enfrentamiento de habilidad',
      'Cheeseala a nivel 1',
      'Compra el Lente del Oráculo (Oracle Lens) si se te complica su W',
      'Juega en torno a sus altos enfriamientos en la E y la W',
      'Empieza con Ignición y párate en el último arbusto cerca de su torre para perseguirla con Ignición cuando los súbditos choquen.',
      'La resistencia mágica temprana ayuda.',
      'Está bien recibir un impacto de su Q, pero evita el segundo golpe de su pasiva.',
      'Evita que te golpee con su E cuando te retiras para prevenir daño innecesario.'
    ],
    toDo: [
      'Ve con todo a nivel 1',
      'Realiza intercambios de daño cortos.',
      'Esquiva su Q y luego pelea.',
      'No malgastes habilidades mientras esté en su humo (W)',
      'Usa tu E para esquivar su Q o su autoataque potenciado por la Q',
      'Deja que te empuje la oleada y mantenla cerca de tu torreta.',
      'Ve con todo a nivel 6 cuando ella tenga entre el 70% y 80% de vida.',
      'Provoca que gaste sus enfriamientos de la W o E antes de buscar intercambios largos o un "all-in"'
    ],
    toAvoid: [
      'No uses todas tus habilidades cuando la oleada esté empujada (bajo su torre) a menos que estés fuera de su rango de "all-in"',
      'Evita los "all-ins" cuando su W y su E estén disponibles.'
    ]
  },
  lastUpdated: '2025-08-03',
  patch: '15.15.1',
  author: 'Svonccy'
};