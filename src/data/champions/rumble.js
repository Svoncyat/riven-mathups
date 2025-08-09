 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const rumbleMatchup = {
  id: 'rumble',
  name: await getChampionInfo.getChampionName('Rumble'),
  nickname: await getChampionInfo.getChampionTitle('Rumble'),
  difficulty: DIFFICULTY_LEVELS.HARD,
  portrait: await generateImageUrl.championPortrait('Rumble'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Rumble_Passive'),
    q: await generateImageUrl.championSpell('RumbleFlamethrower'),
    w: await generateImageUrl.championSpell('RumbleShield'),
    e: await generateImageUrl.championSpell('RumbleGrenade'),
    r: await generateImageUrl.championSpell('RumbleCarpetBomb'),
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
      rune1: await generateImageUrl.rune('Resolve/SecondWind/SecondWind'),
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
      await generateImageUrl.item('1054'), // Doran's Shield
      await generateImageUrl.item('2003')  // Health Potion
    ],
    recommended: [
      await generateImageUrl.item('3111'), // Mercury's Treads
      await generateImageUrl.item('3155'), // Hexdrinker
      await generateImageUrl.item('3123')  // Executioner's Calling
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },
  
  strategy: {
    notes: [
      'Haz cheese en nivel 1. Si no es posible, apunta a llegar al nivel 2 primero e intercambia agresivamente con combos E+auto+Q para ganar ventaja.',
      'Enfrentamiento de farmeo.',
      'Los buenos jugadores de Rumble pueden darte problemas, considera empezar con Escudo de Doran.',
      'Inicia intercambios cuidadosamente para evitar su lanzallamas; considera usar E para engancharte y aturdirlo cuando se gire.',
      'El Escudo de Doran es opcional pero útil contra jugadores experimentados de Rumble.',
      'En nivel 6, ten cuidado con su definitiva; trata de esquivarla con tu E para ganar el all-in.'
    ],
    toDo: [
      'All-in de nivel 1 si puedes engancharte sin usar Q como gap closer.',
      'Castígalo cuando esté sobrecalentado.',
      'En nivel 6, potencialmente puedes matarlo de un combo si no tiene armadura.',
      'Prioriza conseguir CDR temprano.',
      'Enfócate en intercambios cortos para evitar enfrentamientos extendidos.'
    ],
    toAvoid: [
      'No gastes todos tus hechizos en un intercambio corto; guarda algunos para desengancharte.'
    ]
  },
  
  lastUpdated: '2025-01-16',
  patch: '15.15.1',
  author: 'Svonccy'
};