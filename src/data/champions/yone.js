 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const yoneMatchup = {
  id: 'yone',
  name: await getChampionInfo.getChampionName('Yone'),
  nickname: await getChampionInfo.getChampionTitle('Yone'),
  difficulty: DIFFICULTY_LEVELS.EASY,
  portrait: await generateImageUrl.championPortrait('Yone'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Yone_Passive'),
    q: await generateImageUrl.championSpell('YoneQ'),
    w: await generateImageUrl.championSpell('YoneW'),
    e: await generateImageUrl.championSpell('YoneE'),
    r: await generateImageUrl.championSpell('YoneR'),
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
      await generateImageUrl.item('3142'), // Youmuu's Ghostblade
      await generateImageUrl.item('3123') // Executioner's Calling
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },
  
  strategy: {
    notes: [
      'Matchup de habilidad.',
      'Matchup generalmente favorecido para Riven.',
      'Perdible si consigue un par de kills o si tiene manos.',
      'Similar a Yasuo pero con diferentes patrones de intercambio.',
      'Su E le permite perseguirte después de intercambios, así que ten cuidado.',
      'Puede ser peligroso si subestimas su pico de poder con Botas de Berserker.'
    ],
    toDo: [
      'No dejes que te "pokee".',
      'Matalo de un golpe en nivel 6.',
      'Busca ventanas de intercambio gratis cuando su E esté inactivo y no tenga stacks de Q.',
      'Si su E está activo y estás intercambiando, espera que te persiga después; desgástalo antes de que pueda contraatacar.',
      'Esquiva sus Qs en rango cercano moviéndote impredeciblemente (zigzagueando).',
      'Aprovecha cuando no tenga stacks de Q para intercambios seguros.'
    ],
    toAvoid: [
      'Sobrecomprometerte después de intercambiar con todo tu kit, ya que puedes ser castigado por su E.',
      'Subestimar su pico de poder con Botas de Berserker (build completo).',
      'Dejar que te pokee constantemente con Q.',
      'Intercambiar cuando tenga su E disponible sin plan de escape.',
      'Subestimar su potencial de persecución con E activo.'
    ]
  },
  
  lastUpdated: '2025-01-20',
  patch: '15.15.1',
  author: 'Svonccy'
};