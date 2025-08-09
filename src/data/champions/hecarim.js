 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const hecarimMatchup = {
  id: 'hecarim',
  name: await getChampionInfo.getChampionName('Hecarim'),
  nickname: await getChampionInfo.getChampionTitle('Hecarim'),
  difficulty: DIFFICULTY_LEVELS.EASY,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Hecarim.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Hecarim_Passive.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/HecarimRapidSlash.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/HecarimW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/HecarimRamp.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/HecarimUlt.png'
  },
  runes: {
    primary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png',
      keystone: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Conqueror/Conqueror.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Triumph.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png',
      rune3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/LastStand/LastStand.png'
    },
    secondary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7203_Whimsy.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png'
    },
    statShards: {
      shard1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthScalingIcon.png'
    }
  },
  items: {
    starting: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2033.png', // Corrupting Potion
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png'  // Health Potion
    ],
    recommended: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3078.png', // Trinity Force
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3071.png', // Black Cleaver
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3742.png'  // Dead Man's Plate
    ]
  },
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png', // Flash
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerTeleport.png' // Teleport
  },
  strategy: {
    notes: [
      'Su kit es bastante fácil de superar; el problema es su sustento y estadísticas que lo hacen bastante tanque y difícil de atrapar.'
    ],
    toDo: [
      'Déjalo empujar y espera hasta llegar al nivel 3, luego ve por intercambios cortos y seguros.',
      'Respeta sus capacidades de curación.',
      'No desperdicies tus habilidades tratando de perseguirlo después de que use su E (Carga Devastadora); puede fácilmente dar vuelta la pelea si lo haces.'
    ],
    toAvoid: [
      'All-in en el nivel 1 cuando tiene Pociones Corruptas e Ignite.',
      'Participar en intercambios extendidos cuando su W (Espíritu del Pavor) esté activo.'
    ]
  },
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};