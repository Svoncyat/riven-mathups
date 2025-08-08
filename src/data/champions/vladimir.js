import { DIFFICULTY_LEVELS } from '../constants.js';
import { generateImageUrl } from '../constants.js';

export const vladimirMatchup = {
  id: 'vladimir',
  name: 'Vladimir',
  nickname: 'El Segador Carmesí',
  difficulty: DIFFICULTY_LEVELS.EASY,
  portrait: await generateImageUrl.championPortrait('Vladimir'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Vladimir_Passive'),
    q: await generateImageUrl.championSpell('VladimirQ'),
    w: await generateImageUrl.championSpell('VladimirW'),
    e: await generateImageUrl.championSpell('VladimirE'),
    r: await generateImageUrl.championSpell('VladimirR'),
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
      await generateImageUrl.item('1036'), // Long Sword
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
      'Recuerda que su W tiene 28 segundos de enfriamiento en nivel 1, así que trata de provocarlo para configurar all-ins.',
      'Matchup de farmeo donde la agresión puede ser efectiva.',
      'Comienza con Espada Larga + 3 Pociones y presiona constantemente. Riven puede eliminarlo en una rotación.',
      'Considera Escudo de Doran si no tienes confianza en el matchup.',
      'En nivel 6, puedes hacer all-in siempre que no tengas poca vida.',
      'La reducción de curación temprana es crucial; anticipa su Q con tu E y enfócate en farmear hasta tener 2-3 objetos como Danza de la Muerte y Fauces de Malmortius.',
      'Estrategia similar a Kayle y Nasus: empuja y rebota la oleada para congelar cerca de tu torre.'
    ],
    toDo: [
      'Trata de hacer all-in si estás lo suficientemente cerca (usa no más de 1 Q para cerrar la brecha).',
      'Abusa de su enfriamiento de 30 segundos de la piscina siempre que sea posible.',
      'Haz intercambios cortos cuando se acerque a farmear, y usa E para desengancharte.',
      'Cuando tengas 20%+ CDR y esté cerca de tu torre, ve por un all-in con extensión de Q.',
      'Provoca su W (piscina) antes de intentar un all-in.'
    ],
    toAvoid: [
      'No te apresures a comprar Llamada del Verdugo como tu primer objeto; cómpralo como segundo o tercer objeto.',
      'Subestimar su potencial de curación con Q.'
    ]
  },
  
  lastUpdated: '2025-01-20',
  patch: '15.15.1',
  author: 'Svonccy'
};