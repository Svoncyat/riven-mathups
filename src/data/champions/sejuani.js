import { DIFFICULTY_LEVELS } from '../constants.js';
import { generateImageUrl } from '../constants.js';

export const sejuaniMatchup = {
  id: 'sejuani',
  name: 'Sejuani',
  nickname: 'La Furia del Norte',
  difficulty: DIFFICULTY_LEVELS.HARD,
  portrait: await generateImageUrl.championPortrait('Sejuani'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('SejuaniPassive'),
    q: await generateImageUrl.championSpell('SejuaniQ'),
    w: await generateImageUrl.championSpell('SejuaniW'),
    e: await generateImageUrl.championSpell('SejuaniE'),
    r: await generateImageUrl.championSpell('SejuaniR'),
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
      await generateImageUrl.item('1055'), // Doran's Blade
      await generateImageUrl.item('2003')  // Health Potion
    ],
    recommended: [
      await generateImageUrl.item('3071'), // Black Cleaver
      await generateImageUrl.item('3111'), // Mercury's Treads
      await generateImageUrl.item('3155')  // Hexdrinker
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },
  
  strategy: {
    notes: [
      'Sejuani es una jungla tanque con fuerte control de masas y potencial de enganche.',
      'Su pasiva le permite aturdirte después de aplicar cuatro acumulaciones de Escarcha, así que ten cuidado con intercambios extendidos.',
      'La definitiva de Sejuani (Prisión Glacial) es un aturdimiento AoE poderoso que puede cambiar las peleas; mantente consciente de su enfriamiento y posicionamiento.',
      'Puede limpiar campamentos rápidamente con sus habilidades, permitiéndole impactar líneas frecuentemente.',
      'Construir vida y resistencias tempranas puede ayudar a mitigar su daño explosivo y efectos de control de masas.'
    ],
    toDo: [
      'Abusa de tu fuerza de juego temprano para presionar a Sejuani antes de que se vuelva demasiado tanque.',
      'Busca intercambios cortos donde puedas desengancharte rápidamente para evitar ser aturdido por la pasiva de Sejuani.',
      'Guarda tus hechizos de movilidad (Q y E) para esquivar la Q de Sejuani o para escapar si logra engancharte.',
      'Construye objetos de daño temprano como Cuchilla Negra para atravesar la vida y resistencias de Sejuani.'
    ],
    toAvoid: [
      'No te enganches en intercambios prolongados donde Sejuani pueda acumular su pasiva y aturdirte.',
      'Evita pelear contra Sejuani de frente si tiene su definitiva Prisión Glacial disponible, ya que puede cambiar la pelea a su favor.',
      'No subestimes el daño de juego temprano de Sejuani; respeta su potencial explosivo especialmente si te atrapa desprevenido.'
    ]
  },
  
  lastUpdated: '2025-01-16',
  patch: '15.15.1',
  author: 'Svonccy'
};