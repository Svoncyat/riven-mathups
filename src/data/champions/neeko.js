 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const neekoMatchup = {
  id: 'neeko',
  name: await getChampionInfo.getChampionName('Neeko'),
  nickname: await getChampionInfo.getChampionTitle('Neeko'),
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Neeko.png',
  
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Neeko_P.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/NeekoQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/NeekoW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/NeekoE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/NeekoR.png'
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
      shard1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthScalingIcon.png'
    }
  },
  
  items: {
    starting: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1054.png', // Doran's Shield
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png'  // Health Potion
    ],
    recommended: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3111.png', // Mercury's Treads
    ]
  },
  
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png',
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerDot.png'
  },
  
  strategy: {
    notes: [
      'El Escudo de Doran + Valor te permite sobrevivir a su poke con autos.',
      'Usa la extensión de Q para farmear minions de forma segura.',
      'Los Oráculos pueden detectar fácilmente a Neeko cuando se vuelve invisible con su pasiva.'
    ],
    toDo: [
      'Usa tus dashes para esquivar su E (Enredo Espiritual).'
    ],
    toAvoid: [
      'No hagas all-in de forma aleatoria; su E o ultimate pueden destruirte fácilmente.',
      'Evita intercambios largos cuando tenga su W (Forma Espiritual) disponible.'
    ]
  },
  
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};