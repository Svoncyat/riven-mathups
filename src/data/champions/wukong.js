import { DIFFICULTY_LEVELS } from '../constants.js';
import { generateImageUrl } from '../constants.js';

export const wukongMatchup = {
  id: 'wukong',
  name: 'Wukong',
  nickname: 'El Rey Mono',
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: await generateImageUrl.championPortrait('MonkeyKing'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('MonkeyKing_Passive'),
    q: await generateImageUrl.championSpell('MonkeyKingDoubleAttack'),
    w: await generateImageUrl.championSpell('MonkeyKingDecoy'),
    e: await generateImageUrl.championSpell('MonkeyKingNimbus'),
    r: await generateImageUrl.championSpell('MonkeyKingSpinToWin'),
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
      await generateImageUrl.item('3364'), // Oracle's Lens
      await generateImageUrl.item('3142') // Youmuu's Ghostblade
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },
  
  strategy: {
    notes: [
      'Q-Extend para conseguir su blindaje óseo y luego hacer all-in.',
      'No te sobreextiendas con habilidades en enfriamiento o en su lado de la línea.',
      'Matchup de habilidad.',
      'Efectivo cuando él comienza con Poción Corrupta y tú tienes al menos una Espada Larga.',
      'No puedes evitar sus dos derribos, así que ten cuidado antes de engagear.',
      'El nivel 6 de Riven es más fuerte para peleas 1v1, pero quedarse atrás puede ser perjudicial.',
      'Wukong gana nivel 1 con inicio de E.',
      'Trata de usar E para mitigar su daño de Q o E.'
    ],
    toDo: [
      'All-in de nivel 1.',
      'Usa tu E+W para desengancharte cuando salte sobre ti con su E.',
      'Compra una Lente del Oráculo temprano para revelar su señuelo.',
      'Usa E para cerrar la brecha durante intercambios cortos para evitar que aterrice una Q gratis.',
      'Ve por intercambios cortos y agudos y luego all-in cuando esté al 40-50% de vida.',
      'En nivel 6, puedes ganar si no ha comprado armadura; de lo contrario, desgasta su vida primero.'
    ],
    toAvoid: [
      'Participar en intercambios extendidos debido a que su pasiva le otorga demasiada armadura.',
      'Sobreextenderte con habilidades en enfriamiento.',
      'Pelear en su lado de la línea sin ventaja.',
      'Subestimar sus dos derribos consecutivos.'
    ]
  },
  
  lastUpdated: '2025-01-20',
  patch: '15.15.1',
  author: 'Svonccy'
};