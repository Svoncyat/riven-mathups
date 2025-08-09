 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const skarnerMatchup = {
  id: 'skarner',
  name: await getChampionInfo.getChampionName('Skarner'),
  nickname: await getChampionInfo.getChampionTitle('Skarner'),
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: await generateImageUrl.championPortrait('Skarner'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Skarner_Passive'),
    q: await generateImageUrl.championSpell('SkarnerQ'),
    w: await generateImageUrl.championSpell('SkarnerW'),
    e: await generateImageUrl.championSpell('SkarnerE'),
    r: await generateImageUrl.championSpell('SkarnerR'),
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
      await generateImageUrl.item('3140')  // Quicksilver Sash
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },
  
  strategy: {
    notes: [
      'Enfócate en escalar, ya que Skarner es más fuerte temprano.',
      'Hasta nivel 6 o Cuchilla Negra, hay poco que puedas hacer; deja que te empuje.',
      'Recuerda que Skarner puede extender su Q de manera similar a Riven.',
      'Es un matchup de farmeo; juega pacientemente.',
      'Skarner te pokeará con sus Agujas de Cristal.',
      'Su escudo hace daño, ten en cuenta su impacto.',
      'Prepárate para su definitiva; considera construir QSS más tarde.',
      'Skarner te superará en daño en las etapas posteriores del juego.'
    ],
    toDo: [
      'Busca oportunidades para matarlo temprano si es posible.'
    ],
    toAvoid: [
      'Permitir que Skarner te pokee libremente.'
    ]
  },
  
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};