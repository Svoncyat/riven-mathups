 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const vayneMatchup = {
  id: 'vayne',
  name: await getChampionInfo.getChampionName('Vayne'),
  nickname: await getChampionInfo.getChampionTitle('Vayne'),
  difficulty: DIFFICULTY_LEVELS.HARD,
  portrait: await generateImageUrl.championPortrait('Vayne'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Vayne_Passive'),
    q: await generateImageUrl.championSpell('VayneQ'),
    w: await generateImageUrl.championSpell('VayneW'),
    e: await generateImageUrl.championSpell('VayneE'),
    r: await generateImageUrl.championSpell('VayneR'),
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
      await generateImageUrl.item('2003') // Health Potion
    ],
    recommended: [
      await generateImageUrl.item('3814'), // Edge of Night
      await generateImageUrl.item('3142') // Youmuu's Ghostblade
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },
  
  strategy: {
    notes: [
      'Filo de la Noche anula su habilidad E.',
      'Solicita ganks temprano.',
      'Respeta su potencial de early game para kitear e intercambiar.',
      'Fuerza a Vayne a usar su voltereta (Q) con 20s de enfriamiento en rango 1, luego explota esto.',
      'Considera tomar un fragmento de prisa para enfrimientos más bajos en tu E y gap-closers.',
      'Evita estar cerca de paredes para prevenir ser stuneado por su E.',
      'Usa la habilidad E para interrumpir su pasiva de Pernos de Plata.',
      'All-in en nivel 6, conservando hechizos para cerrar brechas después de su voltereta.',
      'Vayne es frágil pero peligrosa con Hoja del Rey Arruinado.',
      'Construye Filo de la Noche segundo o tercero para bloquear su E y por la letalidad útil.'
    ],
    toDo: [
      'Provoca su habilidad E antes de comprometerte a peleas.',
      'Deja que Vayne pushee y coordina con tu jungler para ganks.',
      'Si no hay ayuda de jungla, espera a que la vida de Vayne baje del 40% para una kill fácil.'
    ],
    toAvoid: [
      'Evita posicionarte cerca de paredes donde Vayne puede stunearte con su E.',
      'No flashees tras Vayne cuando su E esté disponible para evitar ser stuneado.'
    ]
  },
  
  lastUpdated: '2025-01-20',
  patch: '15.15.1',
  author: 'Svonccy'
};