import { DIFFICULTY_LEVELS } from '../constants.js';
import { generateImageUrl } from '../constants.js';

export const urgotMatchup = {
  id: 'urgot',
  name: 'Urgot',
  nickname: 'El Temor Más Allá de la Muerte',
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: await generateImageUrl.championPortrait('Urgot'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Urgot_Passive'),
    q: await generateImageUrl.championSpell('UrgotQ'),
    w: await generateImageUrl.championSpell('UrgotW'),
    e: await generateImageUrl.championSpell('UrgotE'),
    r: await generateImageUrl.championSpell('UrgotR'),
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
      shard3: await generateImageUrl.statShard('StatModsHealthPlusIcon')
    }
  },
  
  items: {
    starting: [
      await generateImageUrl.item('1055'), // Doran's Blade
      await generateImageUrl.item('2003') // Health Potion
    ],
    recommended: [
      await generateImageUrl.item('3142'), // Youmuu's Ghostblade
      await generateImageUrl.item('3071') // Black Cleaver
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },
  
  strategy: {
    notes: [
      'Tienes mucha presión de kill desde el nivel 6.',
      'Si usa su E (dash), puedes intercambiar y ganar.',
      'El que inicia el intercambio usualmente pierde, así que trata de provocar su E.',
      'Matchup de farmeo.',
      'Prepárate para esquivar y hacer sidestep para vencerlo; no ganarás el all-in si te pega su dash.',
      'Al intercambiar, mantente en un lado de Urgot para evitar sus piernas ametralladora.',
      'Usa tu E para evitar su E (dash); los jugadores de Urgot a menudo lo lanzan cuando haces Q hacia ellos.',
      'Si te voltea con su E, puede reventarte fácilmente, así que ten cuidado.',
      'Es un matchup desafiante pero no imposible de ganar; enfócate en intercambios pequeños y busca all-in en nivel 6.'
    ],
    toDo: [
      'El all-in de nivel 1 funciona mejor cuando no empieza con su dash.',
      'Abusa de su rango de auto-ataque corto; acércate para un intercambio corto en lugar de usar tus Qs para cerrar la brecha.',
      'Usa tus Qs para bailar alrededor y evitar su definitiva o dash.',
      'Prioriza obtener prioridad de push en el carril.'
    ],
    toAvoid: [
      'No intercambies después de ser golpeado por su dash o Q; la ametralladora de Urgot hará daño significativo.'
    ]
  },
  
  lastUpdated: '2025-01-20',
  patch: '15.15.1',
  author: 'Svonccy'
};