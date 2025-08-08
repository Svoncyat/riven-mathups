import { DIFFICULTY_LEVELS } from '../constants.js';
import { generateImageUrl } from '../constants.js';

export const warwickMatchup = {
  id: 'warwick',
  name: 'Warwick',
  nickname: 'La Ira Desatada de Zaun',
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: await generateImageUrl.championPortrait('Warwick'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Warwick_Passive'),
    q: await generateImageUrl.championSpell('WarwickQ'),
    w: await generateImageUrl.championSpell('WarwickW'),
    e: await generateImageUrl.championSpell('WarwickE'),
    r: await generateImageUrl.championSpell('WarwickR'),
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
      await generateImageUrl.item('1054'), // Doran's Shield
      await generateImageUrl.item('2003') // Health Potion
    ],
    recommended: [
      await generateImageUrl.item('3123'), // Executioner's Calling
      await generateImageUrl.item('3142') // Youmuu's Ghostblade
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerExhaust')
  },
  
  strategy: {
    notes: [
      'Nunca uses Q3 contra Warwick ya que siempre cancelará el CC con su Q, juega para configurar oleadas para tu jungla, y juega más con ganks que cualquier otra cosa.',
      'Respeta el hecho de que tiene curación loca incluso en niveles tempranos sin R.',
      'Superas a Warwick muy fuertemente, así que no es crucial adelantarse en línea.',
      'Considera tomar exhaust contra él, ya que ayuda durante todo el juego, especialmente en las etapas tempranas.',
      'Warwick es fuerte con curación significativa y se vuelve más fuerte mientras más bajo de vida esté.',
      'Llamada del Verdugo es opcional pero puede ser efectiva contra su curación.'
    ],
    toDo: [
      'Trata de provocar su barrera (E) antes de comprometerte a un intercambio.',
      'Juega para configurar oleadas para tu jungla.',
      'Enfócate en jugar con ganks más que en peleas 1v1.',
      'Mantén distancia y farmea de forma segura.'
    ],
    toAvoid: [
      'Pelear con él temprano (nivel 1) cuando tiene su barrera (E) disponible, ya que puede mitigar tu daño y voltear el intercambio a su favor.',
      'Usar Q3 contra él ya que cancelará el CC con su Q.',
      'Subestimar su curación y sustain en niveles tempranos.',
      'Intentar all-ins cuando esté bajo de vida, ya que se vuelve más peligroso.'
    ]
  },
  
  lastUpdated: '2025-01-20',
  patch: '15.15.1',
  author: 'Svonccy'
};