import { DIFFICULTY_LEVELS } from '../constants.js';
import { generateImageUrl } from '../constants.js';

export const viegoMatchup = {
  id: 'viego',
  name: 'Viego',
  nickname: 'El Rey Arruinado',
  difficulty: DIFFICULTY_LEVELS.HARD,
  portrait: await generateImageUrl.championPortrait('Viego'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Viego_Passive'),
    q: await generateImageUrl.championSpell('ViegoQ'),
    w: await generateImageUrl.championSpell('ViegoW'),
    e: await generateImageUrl.championSpell('ViegoE'),
    r: await generateImageUrl.championSpell('ViegoR'),
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
      'Si no te quedas atrás, deberías ganar fácilmente en nivel 6+.',
      'Considera obtener Llamada del Verdugo temprano para lidiar con su sustain.',
      'Cuando hagas all-in, no dudes en usar Flash para evitar el daño de su definitiva si es necesario.'
    ],
    toDo: [
      'Considera empezar con Escudo de Doran para igualar su sustain, especialmente antes de los nerfs de Viego.',
      'Después de un intercambio corto, posiciónate donde no pueda stunearte fácilmente, como detrás de minions, o ten tus hechizos listos para esquivar su stun.',
      'Ve por intercambios cortos donde minimices la cantidad de daño que recibes.'
    ],
    toAvoid: [
      'Tomar intercambios parejos ya que él te va a outsustain.',
      'Subestimar su poke con Q.',
      'Engagear en peleas largas cuando esté en su invisibilidad (Posesión).'
    ]
  },
  
  lastUpdated: '2025-01-20',
  patch: '15.15.1',
  author: 'Svonccy'
};