 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const sylasMatchup = {
  id: 'sylas',
  name: await getChampionInfo.getChampionName('Sylas'),
  nickname: await getChampionInfo.getChampionTitle('Sylas'),
  difficulty: DIFFICULTY_LEVELS.EASY,
  portrait: await generateImageUrl.championPortrait('Sylas'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Sylas_Passive'),
    q: await generateImageUrl.championSpell('SylasQ'),
    w: await generateImageUrl.championSpell('SylasW'),
    e: await generateImageUrl.championSpell('SylasE'),
    r: await generateImageUrl.championSpell('SylasR'),
  },
  
  runes: {
    primary: {
      tree: await generateImageUrl.runeTree('7201_Precision'),
      keystone: await generateImageUrl.rune('Precision/Conqueror/Conqueror'),
      rune1: await generateImageUrl.rune('Precision/Triumph'),
      rune2: await generateImageUrl.rune('Precision/LegendHaste/LegendHaste'),
      rune3: await generateImageUrl.rune('Sorcery/LastStand/LastStand')
    },
    secondary: {
      tree: await generateImageUrl.runeTree('7204_Resolve'),
      rune1: await generateImageUrl.rune('Resolve/BonePlating/BonePlating'),
      rune2: await generateImageUrl.rune('Resolve/Overgrowth/Overgrowth')
    },
    statShards: {
      shard1: await generateImageUrl.statShard('StatModsAdaptiveForceIcon'),
      shard2: await generateImageUrl.statShard('StatModsAdaptiveForceIcon'),
      shard3: await generateImageUrl.statShard('StatModsHealthPlusIcon')
    }
  },
  
  items: {
    starting: [
      await generateImageUrl.item('1055'), // Doran's Blade
      await generateImageUrl.item('2003')  // Health Potion
    ],
    recommended: [
      await generateImageUrl.item('3071'), // Black Cleaver
      await generateImageUrl.item('3123')  // Executioner's Calling
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },
  
  strategy: {
    notes: [
      'Sylas en realidad no puede ganar contra Riven en línea.'
    ],
    toDo: [
      'Zonéalo de la oleada en nivel 1 y juega con esa ventaja.',
      'Abusa de tu fuerza de juego temprano para negarle CS y experiencia.',
      'Tradea agresivamente cada vez que tus habilidades estén disponibles y él esté en rango.',
      'Coordínate con tu jungla para capitalizar tu dominio temprano y configurar kills.'
    ],
    toAvoid: [
      'Sobreextenderte sin visión o conocimiento de la posición de la jungla enemiga.',
      'Subestimar su potencial de burst si logra conectar sus cadenas (E).',
      'Permitirle farmear libremente o escalar hacia el juego medio-tardío donde puede volverse más impactante.',
      'Desperdiciar tus habilidades en tradeos que no resulten en daño significativo o presión.'
    ]
  },
  
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};