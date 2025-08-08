import { DIFFICULTY_LEVELS } from '../constants.js';
import { generateImageUrl } from '../constants.js';

export const rengarMatchup = {
  id: 'rengar',
  name: 'Rengar',
  nickname: 'El Orgullo Acechante',
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: await generateImageUrl.championPortrait('Rengar'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Rengar_P'),
    q: await generateImageUrl.championSpell('RengarQ'),
    w: await generateImageUrl.championSpell('RengarW'),
    e: await generateImageUrl.championSpell('RengarE'),
    r: await generateImageUrl.championSpell('RengarR'),
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
      await generateImageUrl.item('3047'), // Plated Steelcaps
      await generateImageUrl.item('3123'), // Executioner's Calling
      await generateImageUrl.item('3742')  // Dead Man's Plate
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerExhaust')
  },
  
  strategy: {
    notes: [
      'Ve por intercambios cortos al principio del enfrentamiento.',
      'Posiciona la oleada para que sea arriesgado para Rengar saltar o alcanzar los arbustos.',
      'Mantén un seguimiento del enfriamiento de su W y respeta su curación doble de W, que mitiga todo el daño.',
      'Es un enfrentamiento de habilidad.',
      'No dejes que atraiga a los minions hacia los arbustos.',
      'Atrae a los minions lejos de los arbustos para forzarlo a saltar desde el rango máximo, permitiéndote intercambiar efectivamente.',
      'Si sobrevives a su intento de all-in de nivel 2, deberías ganar la línea, especialmente si tienes Exhaust.',
      'Después del nivel 6, la línea debería volverse más fácil.',
      'Puede superarte en daño si usa bien su W potenciada, así que evita pelear cuando tenga stacks.'
    ],
    toDo: [
      'Trata de meterte en los arbustos temprano y sorprenderlo.',
      'Si salta sobre minions para último golpe, posiciónate en el creep, usa W cuando salte, escúdate y usa Qs en él.',
      'Si tiene una gran cantidad de Ferocidad, evita pelear a menos que tengas confianza en bloquear su Q.'
    ],
    toAvoid: [
      'No pelees cuando su Ferocidad esté acumulada antes del nivel 6.',
      'Evita peleas tempranas cuando juegue con Exhaust; puede ganar fácilmente el all-in de nivel 2.'
    ]
  },
  
  lastUpdated: '2025-01-16',
  patch: '15.15.1',
  author: 'Svonccy'
};