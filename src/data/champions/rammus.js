 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const rammusMatchup = {
  id: 'rammus',
  name: await getChampionInfo.getChampionName('Rammus'),
  nickname: await getChampionInfo.getChampionTitle('Rammus'),
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: await generateImageUrl.championPortrait('Rammus'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Armordillo_ScavengeArmor'),
    q: await generateImageUrl.championSpell('PowerBall'),
    w: await generateImageUrl.championSpell('DefensiveBallCurl'),
    e: await generateImageUrl.championSpell('PuncturingTaunt'),
    r: await generateImageUrl.championSpell('Tremors2'),
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
      shard1: await generateImageUrl.statShard('StatModsAdaptiveForceIcon'),
      shard2: await generateImageUrl.statShard('StatModsAdaptiveForceIcon'),
      shard3: await generateImageUrl.statShard('StatModsHealthPlusIcon')
    }
  },
  
  items: {
    starting: [
      await generateImageUrl.item('1055'), // Doran's Blade
      await generateImageUrl.item('2031')  // Refillable Potion
    ],
    recommended: [
      await generateImageUrl.item('1053'), // Vampiric Scepter
      await generateImageUrl.item('3071'), // Black Cleaver
      await generateImageUrl.item('3053')  // Sterak's Gage
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerTeleport')
  },
  
  strategy: {
    notes: [
      'Enfócate en farmear y sobrevivir; capitaliza los errores',
      'Comienza con Doran\'s Blade y Refillable Potion; apunta al Vampiric Scepter en la primera vuelta a base',
      'Usa E para escapar de la provocación de Rammus efectivamente; típicamente no puede matarte',
      'Evita tradear con Rammus debido a sus capacidades defensivas',
      'Asegúrate de que la provocación de Rammus no interrumpa tu tercera Q',
      'Rammus es un tanque que se vuelve muy resistente con su W activo',
      'Su provocación puede ser problemática, pero con buen uso de E puedes escapar',
      'El matchup se trata más de farmear de manera segura que de buscar kills agresivos',
      'Espera oportunidades cuando Rammus cometa errores o esté fuera de posición'
    ],
    toDo: [
      'Farmea de manera segura y busca oportunidades si Rammus comete un error',
      'Comienza con Doran\'s Blade y Refillable Potion; apunta a comprar Vampiric Scepter en tu primera vuelta a base',
      'Usa E para escapar de la provocación de Rammus efectivamente'
    ],
    toAvoid: [
      'No te involucres en trades extendidos con Rammus',
      'Evita pelear cuando su Defensive Ball Curl (W) esté activo'
    ]
  },
  
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};