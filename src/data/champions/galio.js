import { DIFFICULTY_LEVELS } from '../constants.js';

export const galioMatchup = {
  id: 'galio',
  name: 'Galio',
  nickname: 'El Coloso',
  difficulty: DIFFICULTY_LEVELS.EASY,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Galio.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Galio_Passive.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GalioQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GalioW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GalioE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GalioR.png',
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
      'Se basa más en la Resistencia Mágica, por lo que es bastante factible.',
      'Puedes usar W-E + Q para escapar de su provocación.'
    ],
    toDo: [
      'Guarda al menos dos deslizamientos para esquivar su provocación.'
    ],
    toAvoid: [
      'Ser pokeado por su Q.',
      'Dejar que canalice su W.'
    ],
  },
  lastUpdated: '2025-08-07',
  patch: '15.15.1',
  author: 'Svonccy',
};