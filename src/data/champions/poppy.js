import { DIFFICULTY_LEVELS } from '../constants.js';
import { generateImageUrl } from '../constants.js';

export const poppyMatchup = {
  id: 'poppy',
  name: 'Poppy',
  nickname: 'La Guardiana del Martillo',
  difficulty: DIFFICULTY_LEVELS.EXTREME,
  portrait: await generateImageUrl.championPortrait('Poppy'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Poppy_Passive'),
    q: await generateImageUrl.championSpell('PoppyQ'),
    w: await generateImageUrl.championSpell('PoppyW'),
    e: await generateImageUrl.championSpell('PoppyE'),
    r: await generateImageUrl.championSpell('PoppyR'),
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
      rune2: await generateImageUrl.rune('Resolve/MirrorShell/MirrorShell')
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
      await generateImageUrl.item('3047'), // Plated Steelcaps
      await generateImageUrl.item('3071'), // Black Cleaver
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },
  
  strategy: {
    notes: [
      'Cheese al nivel 1 (pero solo funciona cuando ella juega mal)',
      'Pide ganks del jungla',
      'Usa Q para activar su W si es necesario',
      'Juega seguro y enfócate en escalar',
      'Matchup favorable para farmear',
      'Intenta mantenerte parejo hasta tu segundo objeto para ganar ventaja',
      'Riven tiene ventaja temprano; se vuelve dependiente de habilidad después',
      '¡CUIDADO con su W!',
      'Similar al matchup de Renekton; enfócate en outplayear al nivel 1, engagea cuando su pasiva y Bone Plating estén en cooldown',
      'Se recomienda Doran\'s Shield',
      'Evita que te pegue su Q; es fácil de esquivar haciendo clic para alejarte',
      'Usa tu escudo para bloquear su ataque a distancia pasivo y negarle el escudo al recoger su broquel',
      'Mantente alejado de las paredes para evitar ser stuneado y evita usar Q/E mientras tenga su W activa para prevenir ser groundeado',
      'Tradea agresivamente al nivel 1 y continúa con trades cortos después',
      'El nivel 6 es fuerte para Riven debido a su ult de combate comparado con el ult utilitario de Poppy',
      'En lugar de tratar de cancelar la ult de Poppy, enfócate en esquivarla',
      'Ten cuidado de posibles dives preparados por Poppy y su jungla; maneja la posición de la wave y tu vida',
      'Adáptate a los cooldowns de la pasiva y W de Poppy para tradear efectivamente',
      'Poppy es directa de jugar pero countera a Riven efectivamente con tankiness y habilidad W que niega los dashes'
    ],
    toDo: [
      'All-in al nivel 1 pero evita su auto a distancia y escudo',
      'Usar tu escudo durante su W aún te otorga protección, así que úsalo si puede salvarte la vida',
      'Asegura kills en niveles tempranos para prevenir que Poppy se vuelva unkillable',
      'Engagea después de que use su Q preventivamente con tu E',
      'Castígala cuando su W (Steadfast Presence) esté en cooldown'
    ],
    toAvoid: [
      'Quedarte muy cerca de tu torre o paredes, lo que permite a Poppy stunearte',
      'Intentar cancelar la ult de Poppy; en su lugar, enfócate en esquivar su canalización'
    ]
  },
  
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};