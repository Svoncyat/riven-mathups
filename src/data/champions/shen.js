import { DIFFICULTY_LEVELS } from '../constants.js';
import { generateImageUrl } from '../constants.js';

export const shenMatchup = {
  id: 'shen',
  name: 'Shen',
  nickname: 'El Ojo del Crepúsculo',
  difficulty: DIFFICULTY_LEVELS.EASY,
  portrait: await generateImageUrl.championPortrait('Shen'),

  abilities: {
    passive: await generateImageUrl.championPassive('Shen_Passive'),
    q: await generateImageUrl.championSpell('ShenQ'),
    w: await generateImageUrl.championSpell('ShenW'),
    e: await generateImageUrl.championSpell('ShenE'),
    r: await generateImageUrl.championSpell('ShenR'),
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
      'Enfrentamiento de habilidad.',
      'Evita intercambios largos ya que Shen usará su Refugio Espiritual (W) para bloquear tus autos pasivos.',
      'Los intercambios cortos son más efectivos contra Shen.',
      'Su principal amenaza es usar su Q (Asalto Crepuscular) a través de la oleada para agarrarte y atacarte, o usarla después de provocarte.',
      'Maneja tu oleada correctamente después del nivel 6 para castigarlo si ulta bot lane.',
      'Siempre persigue a Shen si se está alejando hacia una pelea donde quiere ultear.',
      'Puedes interrumpir su canal de ulti con tu 3ra Q o W.',
      'Enfócate en esquivar su E (Embestida Sombría) y juega alrededor de su Q. Si su Q no te golpea y no tiene escudo, tendrás ventaja. También lo superas después del nivel 6.'
    ],
    toDo: [
      'Ve por intercambios cortos para evitar que su W bloquee tus autos pasivos.',
      'Maneja tu oleada después del nivel 6 para evitar que ultee libremente.',
      'Persíguelo cuando trate de alejarse para ultear en una pelea.',
      'Interrumpe su ulti con tu 3ra Q o W siempre que sea posible.',
      'Juega alrededor de su Q y esquiva su E para mantener ventaja.'
    ],
    toAvoid: [
      'No te involucres en intercambios largos, especialmente cuando su W esté disponible.',
      'No dejes que use su Q a través de la oleada para agarrarte y atacarte.',
      'No ignores su posicionamiento cuando es probable que ultee en otra pelea.',
      'No desperdicies tus habilidades si su Q te golpea y tiene su escudo activo.'
    ]
  },

  lastUpdated: '2025-01-16',
  patch: '15.15.1',
  author: 'Svonccy'
};