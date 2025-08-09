 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const twistedfateMatchup = {
  id: 'twistedfate',
  name: await getChampionInfo.getChampionName('TwistedFate'),
  nickname: await getChampionInfo.getChampionTitle('TwistedFate'),
  difficulty: DIFFICULTY_LEVELS.EXTREME,
  portrait: await generateImageUrl.championPortrait('TwistedFate'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('TwistedFate_Passive'),
    q: await generateImageUrl.championSpell('TwistedFateQ'),
    w: await generateImageUrl.championSpell('TwistedFateW'),
    e: await generateImageUrl.championSpell('TwistedFateE'),
    r: await generateImageUrl.championSpell('TwistedFateR'),
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
      await generateImageUrl.item('3142'), // Youmuu's Ghostblade
      await generateImageUrl.item('3814') // Edge of Night
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },
  
  strategy: {
    notes: [
      'Twisted Fate puede ser molesto con su presión global, pero es vulnerable a los all-ins.',
      'Castígalo siempre que su Elige una Carta (W) esté en enfriamiento.',
      'Cuidado con su potencial de roaming post nivel 6 con Destino (R), y pingea cuando esté perdido.',
      'Matchup de farmeo.',
      'Un TF inteligente hará roaming, luego simplemente usará R para escapar.',
      'Riven puede ganar fácilmente los all-ins, así de fuerte juegan en este punto del juego.'
    ],
    toDo: [
      'Congela la oleada para negarle oportunidades de roaming.',
      'Castígalo con intercambios cortos siempre que use Elige una Carta (W).',
      'Usa tu movilidad para esquivar sus Cartas Salvajes (Q) y evitar ganks.',
      'Juega agresivo cuando su definitiva esté en enfriamiento, no es que puedan ayudarlo a él y a mí, simplemente evita este matchup.'
    ],
    toAvoid: [
      'Evita subestimar su presión global y capacidad de roaming.',
      'No permitas que escape fácilmente con su definitiva después de intercambios.',
      'Evita perseguirlo sin visión del equipo enemigo.'
    ]
  },
  
  lastUpdated: '2025-01-20',
  patch: '15.15.1',
  author: 'Svonccy'
};