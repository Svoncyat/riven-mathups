 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const kledMatchup = {
  id: 'kled',
  name: await getChampionInfo.getChampionName('Kled'),
  nickname: await getChampionInfo.getChampionTitle('Kled'),
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Kled.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Kled_P.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/KledQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/KledW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/KledE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/KledR.png'
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
      shard1: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsCDRScalingIcon.png",
      shard2: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png",
      shard3: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthScalingIcon.png"
    }
  },
  items: {
    starting: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1055.png', // Espada de Doran
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png'  // Poción de Vida
    ],
    recommended: [
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3158.png", // Botas de Tabí de Ninja
    ]
  },
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png',
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerDot.png'
  },
  strategy: {
    notes: [
      'Esquiva su Q a toda costa, espera a que desperdicie su W en los minions.',
      'Puedes jugar para kill temprano ya que ganas en nivel 1.',
      'O puedes jugar seguro y escalarlo.',
      'Si desperdicia su Q, puedes intentar un all-in.',
      'Recuerda el cooldown de su W, para que no pueda volver a montar.',
      'Es un matchup de habilidad.',
      'La condición de victoria de Kled es acertar su Q (forma Yoshi).',
      'Esquiva su Q a toda costa, desengánchate inmediatamente si te acierta. Intenta usar E para evitar el daño de su W.',
      'No te dejes engañar persiguiéndolo una vez que esté desmontado, Kled puede cambiar la pelea muy fácilmente.',
      'Tú escalas mejor, ve parejo/sobrevive la línea y estarás bien.',
      'Este matchup es básicamente esquivar su Q y hacer trades rápidos.',
      'Deberías hacer all-in en nivel 6 cuando tenga su E en cooldown.'
    ],
    toDo: [
      'All-in nivel 1 cuando falle su Q.',
      'Déjalo pushear y juega cerca de tu torre a menos que tengas confianza en tus esquives, entonces puedes jugar con prioridad de push.',
      'Ganas cada trade si falla su Q.',
      'Guarda tus cooldowns antes de pelear contra su forma mini.'
    ],
    toAvoid: [
      'Ir por trades extendidos cuando tenga su E disponible.',
      'Pelear solo con AAs contra su forma mini.'
    ]
  },

  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};