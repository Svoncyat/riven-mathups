 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const yorickMatchup = {
  id: 'yorick',
  name: await getChampionInfo.getChampionName('Yorick'),
  nickname: await getChampionInfo.getChampionTitle('Yorick'),
  difficulty: DIFFICULTY_LEVELS.EASY,
  portrait: await generateImageUrl.championPortrait('Yorick'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Yorick_Passive'),
    q: await generateImageUrl.championSpell('YorickQ'),
    w: await generateImageUrl.championSpell('YorickW'),
    e: await generateImageUrl.championSpell('YorickE'),
    r: await generateImageUrl.championSpell('YorickR'),
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
      'Zonéalo para que no pueda conseguir minions para sus necrófagos.',
      'Mientras no te golpee con E, debería ser una línea fácil.',
      'Matchup de farmeo.',
      'Busca intercambiar en nivel 1, le ganas fuerte.',
      'La reducción de curación es buena aquí después de tal vez la segunda base.',
      'Este matchup es similar a Illaoi en que puedes pelear si esquivas su E; si no, espéralo.',
      'Si esquivas su E (la habilidad que te lanza que hace que sus necrófagos salten sobre ti), puedes intercambiar libremente.',
      'Trata de no pelear cuando su doncella esté activa; busca matarla antes de hacer all-in.',
      'Deberías matarlo de un golpe cuando esté al 50% de vida, pero escala bastante bien.',
      'Puedes usar 3Q para salir de su habilidad W (la caja).'
    ],
    toDo: [
      'Quita su barrera antes de comprometerte a una pelea.',
      'Abusa de tu ventaja de nivel 1; busca oportunidades para intercambiar agresivamente.',
      'Usa tu movilidad para esquivar las habilidades de Yorick y posicionarte ventajosamente.'
    ],
    toAvoid: [
      'Pelear con él temprano (nivel 1) cuando tenga su barrera activa.',
      'Sobrecomprometerte en intercambios extendidos cuando Yorick tenga sus habilidades listas.',
      'Subestimar el control de masas y sustento de Yorick en peleas prolongadas.'
    ]
  },
  
  lastUpdated: '2025-01-20',
  patch: '15.15.1',
  author: 'Svonccy'
};