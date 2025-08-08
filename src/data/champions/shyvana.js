import { DIFFICULTY_LEVELS } from '../constants.js';
import { generateImageUrl } from '../constants.js';

export const shyvanaMatchup = {
  id: 'shyvana',
  name: 'Shyvana',
  nickname: 'La Medio Dragón',
  difficulty: DIFFICULTY_LEVELS.EASY,
  portrait: await generateImageUrl.championPortrait('Shyvana'),

  abilities: {
    passive: await generateImageUrl.championPassive('Shyvana_Passive'),
    q: await generateImageUrl.championSpell('ShyvanaQ'),
    w: await generateImageUrl.championSpell('ShyvanaW'),
    e: await generateImageUrl.championSpell('ShyvanaE'),
    r: await generateImageUrl.championSpell('ShyvanaR'),
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
      tree: await generateImageUrl.runeTree('7203_Whimsy'),
      rune1: await generateImageUrl.rune('Inspiration/BiscuitDelivery/BiscuitDelivery'),
      rune2: await generateImageUrl.rune('Inspiration/JackOfAllTrades/JackofAllTrades2')
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
      await generateImageUrl.item('2003')  // Health Potion
    ],
    recommended: [
      await generateImageUrl.item('3123') // Executioner's Calling
    ]
  },

  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },

  strategy: {
    notes: [
      'Gana el early game y córrela al nivel 6.',
      'Necesita muchos objetos para volverse efectiva.',
      'Matchup de farmeo.'
    ],
    toDo: [
      'Abusa de tu fuerza en el early game; busca intercambios favorables antes de que Shyvana escale.',
      'Rastrea su progresión de objetos; considera jugadas agresivas una vez que se quede atrás en oro u objetos.',
      'Coordina con tu jungla para negarle campamentos de jungla o disputar objetivos para retrasar su escalado.'
    ],
    toAvoid: [
      'Sobreextenderte sin visión; Shyvana puede castigar con su alto daño y movilidad en forma de dragón.',
      'Subestimar su potencial de burst al nivel 6; sus transformaciones de ulti pueden tomarte desprevenida.',
      'Permitirle farmear minions libremente; niégale oro y experiencia para retrasar su pico de poder.'
    ]
  },

  lastUpdated: '2025-01-16',
  patch: '15.15.1',
  author: 'Svonccy'
};