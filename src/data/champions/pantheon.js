 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const pantheonMatchup = {
  id: 'pantheon',
  name: await getChampionInfo.getChampionName('Pantheon'),
  nickname: await getChampionInfo.getChampionTitle('Pantheon'),
  difficulty: DIFFICULTY_LEVELS.HARD,
  portrait: await generateImageUrl.championPortrait('Pantheon'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Pantheon_Passive'),
    q: await generateImageUrl.championSpell('PantheonQ'),
    w: await generateImageUrl.championSpell('PantheonW'),
    e: await generateImageUrl.championSpell('PantheonE'),
    r: await generateImageUrl.championSpell('PantheonR'),
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
      rune2: await generateImageUrl.rune('Sorcery/Unflinching/Unflinching')
    },
    statShards: {
      shard1: await generateImageUrl.statShard('StatModsCDRScalingIcon'),
      shard2: await generateImageUrl.statShard('StatModsAdaptiveForceIcon'),
      shard3: await generateImageUrl.statShard('StatModsArmorIcon')
    }
  },
  
  items: {
    starting: [
      await generateImageUrl.item('1054'), // Doran's Shield
      await generateImageUrl.item('2003')  // Health Potion
    ],
    recommended: [
      await generateImageUrl.item('3047'), // Plated Steelcaps
      await generateImageUrl.item('3071'), // Black Cleaver
      await generateImageUrl.item('3053')  // Sterak's Gage
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },
  
  strategy: {
    notes: [
      'Cheese al nivel 1, bastante arriesgado pero cuando él te hace facecheck',
      'Espera al nivel 3 y ve por intercambios cortos',
      'Tu nivel 6 es más fuerte que el suyo',
      'Usa E para bloquear sus lanzas',
      'Matchup de habilidad'
    ],
    toDo: [
      'Ve por intercambios cortos después del nivel 3',
      'All-in a él en el nivel 6 para un engage más fuerte'
    ],
    toAvoid: [
      'No te involucres en intercambios extendidos antes del nivel 3',
      'No subestimes su daño de ráfaga'
    ]
  },
  
  lastUpdated: '2025-08-08',
  patch: '15.15.1',
  author: 'Svonccy'
};