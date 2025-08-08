import { DIFFICULTY_LEVELS } from '../constants.js';
import { generateImageUrl } from '../constants.js';

export const udyrMatchup = {
  id: 'udyr',
  name: 'Udyr',
  nickname: 'El Caminante de los Espíritus',
  difficulty: DIFFICULTY_LEVELS.HARD,
  portrait: await generateImageUrl.championPortrait('Udyr'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Udyr_Passive'),
    q: await generateImageUrl.championSpell('UdyrQ'),
    w: await generateImageUrl.championSpell('UdyrW'),
    e: await generateImageUrl.championSpell('UdyrE'),
    r: await generateImageUrl.championSpell('UdyrR'),
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
      await generateImageUrl.item('3123'), // Executioner's Calling
      await generateImageUrl.item('3142') // Youmuu's Ghostblade
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },
  
  strategy: {
    notes: [
      'Juega agresivo en nivel 1 y busca hacer all-in en nivel 6.',
      'Los intercambios cortos pueden ser efectivos, pero ten cuidado con su sustain.',
      'Respeta su escudo (Postura de Tortuga) y curación (Postura de Fénix).',
      'Matchup de farmeo.'
    ],
    toDo: [
      'Enfócate en ganar intercambios de nivel 1 para establecer dominio en el carril.',
      'Usa tu movilidad para esquivar sus habilidades y kitearlo.',
      'Busca oportunidades para reventarlo cuando sus habilidades defensivas estén en enfriamiento.',
      'Wardea bien para evitar ser atrapado por su presencia en la jungla.'
    ],
    toAvoid: [
      'No subestimes su daño sostenido y potencial de duelo en peleas prolongadas.',
      'Evita intercambios extendidos cuando tenga su postura defensiva o curación disponible.',
      'No te extiendas sin visión, ya que Udyr puede capitalizar errores posicionales.'
    ]
  },
  
  lastUpdated: '2025-01-20',
  patch: '15.15.1',
  author: 'Svonccy'
};