import { DIFFICULTY_LEVELS } from '../constants.js';
import { generateImageUrl } from '../constants.js';

export const aatroxMatchup = {
  id: 'aatrox',
  name: 'Aatrox',
  nickname: 'La Espada Darkin',
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: await generateImageUrl.championPortrait('Aatrox'),
  abilities: {
    passive: await generateImageUrl.championPassive('Aatrox_Passive'),
    q: await generateImageUrl.championSpell('AatroxQ'),
    w: await generateImageUrl.championSpell('AatroxW'),
    e: await generateImageUrl.championSpell('AatroxE'),
    r: await generateImageUrl.championSpell('AatroxR'),
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
      await generateImageUrl.item('3123') // Executioner's Calling
    ]
  },
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'), // Flash
    f: await generateImageUrl.summonerSpell('SummonerDot') // Ignite
  },
  strategy: {
    notes: [
      'Enfrentamiento de habilidad',
      'Si se apresura en comprar las Tabi, prioriza el farmeo y las placas de torre.',
      '¡Cuando consigue el Puñal Serrado (Serrated Dirk), es un campeón diferente!',
      'Busca intercambios cortos; una vez que el Conquistador se activa, su curación se vuelve una locura.',
      'No dejes que te golpee ninguna de sus Q potenciadas, no pasa nada si te golpea su Q no potenciada.',
      'Cuando te retires, ten al menos una Q o una E disponible para evitar ser golpeado por su Q potenciada.',
      'Juega con la extensión de tu Q; esto te ayudará mucho a esquivar y a intercambiar daño.',
      'Un buen Aatrox intentará predecir tu E.'
    ],
    toDo: [
      'Ve con todo a nivel 1',
      'Abusa de él al principio del juego y engáñalo para que gaste su W/E.',
      'Consigue la prioridad de empuje(push).',
      'Abusa de sus altos enfriamientos después de que use su tercera Q.',
      'Usa todas tus habilidades para esquivar sus habilidades.',
      'Busca intercambios cortos.',
      'Mantente cerca y no uses la Q en el mismo sitio.',
      'Desgástalo hasta el 50% de vida y luego ve con todo con tu definitiva.'
    ],
    toAvoid: [
      'Evita subestimar su pico de poder con el Puñal Serrado(Serrated Dirk).',
      'Evita subestimar su curación.',
      'Evita ir con todo contra él cuando esté al 100% de vida.'
    ]
  },
  lastUpdated: '2025-08-03',
  patch: '15.15.1',
  author: 'Svonccy'
};