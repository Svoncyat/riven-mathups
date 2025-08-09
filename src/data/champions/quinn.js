 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const quinnMatchup = {
  id: 'quinn',
  name: await getChampionInfo.getChampionName('Quinn'),
  nickname: await getChampionInfo.getChampionTitle('Quinn'),
  difficulty: DIFFICULTY_LEVELS.EXTREME,
  portrait: await generateImageUrl.championPortrait('Quinn'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Quinn_Passive'),
    q: await generateImageUrl.championSpell('QuinnQ'),
    w: await generateImageUrl.championSpell('QuinnW'),
    e: await generateImageUrl.championSpell('QuinnE'),
    r: await generateImageUrl.championSpell('QuinnR'),
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
      rune1: await generateImageUrl.rune('Resolve/MirrorShell/MirrorShell'),
      rune2: await generateImageUrl.rune('Resolve/SecondWind/SecondWind')
    },
    statShards: {
      shard1: await generateImageUrl.statShard('StatModsCDRScalingIcon'),
      shard2: await generateImageUrl.statShard('StatModsAdaptiveForceIcon'),
      shard3: await generateImageUrl.statShard('StatModsHealthPlusIcon')
    }
  },
  
  items: {
    starting: [
      await generateImageUrl.item('1054'), // Doran's Shield
      await generateImageUrl.item('2003')  // Health Potion
    ],
    recommended: [
      await generateImageUrl.item('3158'), // Ionian Boots of Lucidity
      await generateImageUrl.item('3071'), // Black Cleaver
      await generateImageUrl.item('3053')  // Sterak's Gage
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },
  
  strategy: {
    notes: [
      'Enfócate en farmear temprano y minimiza el daño recibido',
      'Espera hasta el nivel 6, luego intenta consistentemente hacerle burst',
      'Difícil de vencer en niveles tempranos; prioriza farmear y stackear CDR para kills posteriores con extensiones de Q',
      'Objetos iniciales recomendados: Doran\'s Shield y Second Wind para sustain',
      'Se vuelve ganable una vez que alcanzas 25+ de Reducción de Enfriamiento',
      'Quinn es generalmente un matchup desafiante para Riven',
      'Ella countera los engages con su ceguera y salto',
      'Su poke pasivo es molesto; trata de farmear parejo y utiliza Q juggling',
      'All-in al nivel 6 cuando ganas una ult de combate versus su ult de roaming',
      'Considera usar CC para cortar su ruta de escape después de que use vault',
      'Pinguea missing calls post-nivel 6; a Quinn le gusta roamear'
    ],
    toDo: [
      'Cuando hagas all-in, intenta saltar detrás de ella para limitar sus opciones de escape',
      'Solo tradea a una distancia donde no pueda usar su knockback para interrumpir'
    ],
    toAvoid: [
      'Permitir que procee libremente su pasiva durante los trades'
    ]
  },
  
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};