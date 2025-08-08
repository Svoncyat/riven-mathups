import { DIFFICULTY_LEVELS } from '../constants.js';

export const briarMatchup = {
  id: 'briar',
  name: 'Briar',
  nickname: 'El Hambre Contenida',
  difficulty: DIFFICULTY_LEVELS.EASY,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Briar.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/BriarP.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/BriarQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/BriarW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/BriarE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/BriarR.png'
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
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7202_Sorcery.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/Transcendence/Transcendence.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/Scorch/Scorch.png'
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
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3123.png' // Executioner's Calling
    ]
  },
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png', // Flash
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerTeleport.png' // Teleport
  },
  strategy: {
    notes: [
      'Briar se cura una cantidad sustancial, especialmente en peleas prolongadas.',
      'Muchos jugadores de Briar pueden ser derrotados después de que completes tu segundo objeto.',
      'Si usa su definitiva en ti, inmediatamente aturde y reviéntala.',
      'Entiende sus enfriamientos, especialmente sus habilidades de curación, y explota las ventanas cuando estén en enfriamiento.',
      'Su sustain puede hacer que sea difícil lidiar con ella en solitario.'
    ],
    toDo: [
      'Ve por intercambios cortos y apunta a hacer "all-in" cuando esté vulnerable.',
      'Usa tu aturdimiento (W) efectivamente para interrumpir sus habilidades.',
      'Considera comprar Verdugo Temprano para aplicar Heridas Graves y reducir significativamente su auto-curación.',
      'Utiliza tu movilidad para esquivar sus habilidades dirigidas y posiciónate ventajosamente durante los intercambios.',
      'Comunícate con tu equipo para enfocarse en Briar en las peleas de equipo.',
      'Busca intercambios cuando sus habilidades de curación estén en enfriamiento.',
      'Mantén la presión constante para evitar que se recupere.'
    ],
    toAvoid: [
      'Nunca subestimes las capacidades de curación de Briar, especialmente si logra mantenerse viva durante una pelea.',
      'Evita intercambios extendidos a menos que estés seguro de tu capacidad para reviventarla rápidamente.',
      'No te involucres cuando sus habilidades estén disponibles, particularmente sus habilidades de curación.',
      'Evita pelear cuando esté en su forma potenciada.',
      'No la dejes farmear libremente o se volverá inmanejable.'
    ]
  },
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};