import { DIFFICULTY_LEVELS } from '../constants.js';
import { generateImageUrl } from '../constants.js';

export const volibearMatchup = {
  id: 'volibear',
  name: 'Volibear',
  nickname: 'El Trueno Implacable',
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: await generateImageUrl.championPortrait('Volibear'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Volibear_Passive'),
    q: await generateImageUrl.championSpell('VolibearQ'),
    w: await generateImageUrl.championSpell('VolibearW'),
    e: await generateImageUrl.championSpell('VolibearE'),
    r: await generateImageUrl.championSpell('VolibearR'),
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
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },
  
  strategy: {
    notes: [
      'Si logras mantenerte parejo, lo superas en escala en la segunda compra de objeto.',
      'Stunearlo cuando carga su Q lo cancela pero no lo pone en enfriamiento.',
      'Llamada del Verdugo es opcional pero puede ser efectiva contra su curación.',
      'Evita que te golpee su W2, ya que lo cura significativamente y hace daño extra.',
      'No tengas miedo en nivel 1; aplica presión temprano porque él gana niveles 2 y 3.',
      'Ten cuidado de que superponga su W sobre su Q para ráfaga adicional.',
      'Su escudo E, curación W2 y daño pueden auto-ganar intercambios; ten en cuenta estas habilidades.',
      'En este matchup, o provocas su Q y luego vas por un intercambio extendido, o haces intercambios rápidos como Q+W+AA+E-salir.'
    ],
    toDo: [
      'Ve por una rotación completa de Q si desperdicia sus habilidades.',
      'Provoca su stun (Q) caminando cerca de él y luego E o Q para salir.',
      'Usar Flash para evitar el daño de su definitiva vale la pena.',
      'Cuando su stun (Q) esté activo, el único intercambio corto que debes hacer es W + AA y luego instantáneamente Q o E para salir.',
      'Si su Q está en enfriamiento, puedes buscar otros patrones de intercambio corto.',
      'Una vez que esté a la mitad de HP y su E o Q esté inactivo, puedes buscar hacer all-in.'
    ],
    toAvoid: [
      'Tratar de intercambiar después de que golpee su stun (Q); espera a que expire.',
      'Intercambiar cuando su marca esté en ti, ya que mejora sus habilidades.',
      'Subestimar su potencial de curación y daño cuando está bajo de vida.'
    ]
  },
  
  lastUpdated: '2025-01-20',
  patch: '15.15.1',
  author: 'Svonccy'
};