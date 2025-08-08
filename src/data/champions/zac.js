import { DIFFICULTY_LEVELS } from '../constants.js';
import { generateImageUrl } from '../constants.js';

export const zacMatchup = {
  id: 'zac',
  name: 'Zac',
  nickname: 'La Arma Secreta',
  difficulty: DIFFICULTY_LEVELS.EASY,
  portrait: await generateImageUrl.championPortrait('Zac'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Zac_Passive'),
    q: await generateImageUrl.championSpell('ZacQ'),
    w: await generateImageUrl.championSpell('ZacW'),
    e: await generateImageUrl.championSpell('ZacE'),
    r: await generateImageUrl.championSpell('ZacR'),
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
      await generateImageUrl.item('3071') // Black Cleaver
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },
  
  strategy: {
    notes: [
      'Ganas nivel 1 muy fuerte (Asegúrate de usar Q-extend ya que tu AA pasivo debería matar de un golpe sus gotas).',
      'Si lo ves usando Q en un minion, asegúrate de esperar hasta que se agote.',
      'Matchup de farmeo.',
      'Tu ventaja de nivel 1 es significativa contra Zac.',
      'Sus gotas de vida son vulnerables a tu daño de ataque automático pasivo.',
      'Puedes controlar el ritmo del intercambio evitando sus habilidades de control de masas.'
    ],
    toDo: [
      'Abusa de tu ventaja de nivel 1; busca oportunidades para intercambiar agresivamente.',
      'Usa tu movilidad para esquivar las habilidades de Zac y posicionarte ventajosamente.',
      'Mata sus gotas pasivas con ataques automáticos para negarle curación.',
      'Controla las oleadas de minions para limitar sus opciones de engage.'
    ],
    toAvoid: [
      'Sobrecomprometerte en intercambios extendidos cuando Zac tenga sus habilidades listas.',
      'Subestimar el control de masas y sustento de Zac en peleas prolongadas.',
      'Pelear en espacios cerrados donde su E sea más fácil de conectar.',
      'Ignorar sus gotas pasivas que le proporcionan curación significativa.'
    ]
  },
  
  lastUpdated: '2025-01-20',
  patch: '15.15.1',
  author: 'Svonccy'
};