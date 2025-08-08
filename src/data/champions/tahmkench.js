import { DIFFICULTY_LEVELS } from '../constants.js';
import { generateImageUrl } from '../constants.js';

export const tahmkenchMatchup = {
  id: 'tahmkench',
  name: 'Tahm Kench',
  nickname: 'El Rey del Río',
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: await generateImageUrl.championPortrait('TahmKench'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('TahmKench_Passive'),
    q: await generateImageUrl.championSpell('TahmKenchQ'),
    w: await generateImageUrl.championSpell('TahmKenchW'),
    e: await generateImageUrl.championSpell('TahmKenchE'),
    r: await generateImageUrl.championSpell('TahmKenchR'),
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
      'Esquiva sus Qs para negar daño y curación.',
      'Ve por tradeos en nivel 1.',
      'Matchup de farmeo.',
      'Puede superarte eventualmente, considera pelear contra él en dúo o trío o evítalo.',
      'Su escudo se fortalece mientras pierde vida.'
    ],
    toDo: [
      'Haz tradeos cortos.',
      'Usa tu E para bloquear su Q.',
      'Baitea sus habilidades Q o E.'
    ],
    toAvoid: [
      'Engancharte cuando tenga stacks en ti.'
    ]
  },
  
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};