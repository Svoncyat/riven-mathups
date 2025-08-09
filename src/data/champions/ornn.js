 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const ornnMatchup = {
  id: 'ornn',
  name: await getChampionInfo.getChampionName('Ornn'),
  nickname: await getChampionInfo.getChampionTitle('Ornn'),
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Ornn.png',
  
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/OrnnP.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/OrnnQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/OrnnW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/OrnnE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/OrnnR.png'
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
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1055.png', // Doran's Shield
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png'  // Health Potion
    ],
    recommended: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3158.png', // Ionian Boots of Lucidity
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3071.png', // Black Cleaver
    ]
  },
  
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png',
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerDot.png'
  },
  
  strategy: {
    notes: [
      'Castígalo temprano antes de que obtenga armadura.',
      'Su W solo te marca si el último tick te golpea, así que esquívalo haciendo dash hacia él.',
      'Congelar la línea es efectivo ya que solo puede farmear con Q.',
      'Su principal amenaza de daño es su W; evita el último tick para prevenir el daño extra de la pasiva.',
      'Una vez que obtenga suficiente armadura, enfócate en escalar en lugar de matarlo.',
      'Es un matchup de farmeo.',
      'Usa E para esquivar su Aliento de Fuelle o el auto potenciado para mejores resultados.',
      'Anticipa las colocaciones de Q en la oleada y evita estar cerca de paredes o su pilar para prevenir un stun.',
      'Comienza con Escudo de Doran y busca matarlo antes de su primera base. Después de que compre armadura, será más difícil.',
      'Remueve su Blindaje Óseo y ve por intercambios extendidos. Mantén tu E para esquivar su W.',
      'Intenta crashear la tercera oleada en su torre, recallear, luego congelar la línea y acosarlo cuando trate de farmear.',
      'Abusa de sus niveles tempranos débiles antes de que se vuelva demasiado tanque para matar.'
    ],
    toDo: [
      'Haz all-in a nivel 1 cuando no tenga W.',
      'Cancela su auto ataque potenciado de W con tu stun o tercera Q.',
      'Niega su R2 con CC cuando esté a punto de golpearlo de vuelta.',
      'Haz intercambios cortos después de que use su W.'
    ],
    toAvoid: [
      'No trates de hacer CC mientras usa su W (se vuelve inmune al CC).',
      'No te pares junto a una pared o su pilar cuando intercambies.'
    ]
  },
  
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};