import { DIFFICULTY_LEVELS } from '../constants.js';
import { generateImageUrl } from '../constants.js';

export const ryzeMatchup = {
  id: 'ryze',
  name: 'Ryze',
  nickname: 'El Mago Rúnico',
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: await generateImageUrl.championPortrait('Ryze'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('RyzePassive'),
    q: await generateImageUrl.championSpell('RyzeQWrapper'),
    w: await generateImageUrl.championSpell('RyzeW'),
    e: await generateImageUrl.championSpell('RyzeE'),
    r: await generateImageUrl.championSpell('RyzeR'),
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
      rune1: await generateImageUrl.rune('Resolve/SecondWind/SecondWind'),
      rune2: await generateImageUrl.rune('Resolve/Overgrowth/Overgrowth')
    },
    statShards: {
      shard1: await generateImageUrl.statShard('StatModsAdaptiveForceIcon'),
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
      await generateImageUrl.item('3111'), // Mercury's Treads
      await generateImageUrl.item('3155'), // Hexdrinker
      await generateImageUrl.item('3123')  // Executioner's Calling
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },
  
  strategy: {
    notes: [
      'Ryze puede hacer mucho daño explosivo con sus combos, especialmente cuando extiende Flujo con E y luego usa Q.',
      'Depende del maná al principio; considera intercambiar cuando su maná esté bajo.',
      'Ten cuidado con su W (Raíz) que prepara su combo; trata de esquivarlo o usa tu movilidad para evitar ser atrapado.',
      'Ryze escala bien hacia el juego tardío con sus interacciones de flujo de hechizos, así que trata de ganar ventaja temprano.',
      'Ten en cuenta su capacidad de roamear con su definitiva (R), ya que puede impactar rápidamente otras líneas.',
      'Considera construir resistencia mágica temprana para mitigar su potencial explosivo.'
    ],
    toDo: [
      'Busca intercambios cortos cuando sus habilidades estén en enfriamiento, especialmente su W (Raíz).',
      'Coordina con tu jungla para ganks cuando Ryze se sobreextienda, ya que carece de movilidad temprano.',
      'Usa tu movilidad para esquivar sus habilidades dirigidas y engancharte cuando esté vulnerable.'
    ],
    toAvoid: [
      'Evita intercambios extendidos cuando tenga Flujo extendido en múltiples objetivos, ya que su Q hará daño aumentado.',
      'No te enganches en peleas de corta distancia donde Ryze pueda fácilmente aterrizar su W (Raíz) y seguir con su combo completo.'
    ]
  },
  
  lastUpdated: '2025-01-16',
  patch: '15.15.1',
  author: 'Svonccy'
};