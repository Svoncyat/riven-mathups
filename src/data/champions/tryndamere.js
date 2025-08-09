 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const tryndamereMatchup = {
  id: 'tryndamere',
  name: await getChampionInfo.getChampionName('Tryndamere'),
  nickname: await getChampionInfo.getChampionTitle('Tryndamere'),
  difficulty: DIFFICULTY_LEVELS.HARD,
  portrait: await generateImageUrl.championPortrait('Tryndamere'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Tryndamere_Passive'),
    q: await generateImageUrl.championSpell('TryndamereQ'),
    w: await generateImageUrl.championSpell('TryndamereW'),
    e: await generateImageUrl.championSpell('TryndamereE'),
    r: await generateImageUrl.championSpell('TryndamereR'),
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
      shard3: await generateImageUrl.statShard('StatModsArmorIcon')
    }
  },
  
  items: {
    starting: [
      await generateImageUrl.item('1054'), // Doran's Shield
      await generateImageUrl.item('2003') // Health Potion
    ],
    recommended: [
      await generateImageUrl.item('3047'), // Plated Steelcaps
      await generateImageUrl.item('3123') // Executioner's Calling
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerExhaust')
  },
  
  strategy: {
    notes: [
      'Este es un enfrentamiento de habilidad donde el RNG de críticos de Tryndamere puede influir mucho en los intercambios.',
      'Comprar Tabi temprano puede mitigar mucho de su daño.',
      'Una vez que Riven tiene 45% CDR, espacía tus habilidades y kitea a Tryndamere cuando use su definitiva.',
      'Ve por intercambios cortos y rápidos después del nivel 3.',
      'Cuando Tryndamere gire hacia ti, usa W, auto, E para alejarte, y continúa con Q auto mientras kiteas para evitar peleas extendidas.',
      'Evita pelear con él en nivel 1 y 2; después del nivel 3, puedes intercambiar más efectivamente.',
      'Mantén la oleada congelada cerca de tu torre para negarle oportunidades de intercambio. Considera Botas Chapadas si es necesario.'
    ],
    toDo: [
      'Toma Agotar para reducir su daño durante sus all-ins.',
      'Busca un all-in de nivel 1 para establecer dominio temprano.',
      'Mantén el freeze cerca de tu torre para farmear de forma segura y negarle CS.',
      'Siempre mantén tu E listo para igualar su engage cuando gire hacia ti.',
      'Provoca su Grito Burlón (W) antes de comprometerte a un intercambio o all-in.'
    ],
    toAvoid: [
      'Evita usar tu 3ra Q directamente frente a Tryndamere, ya que los buenos jugadores castigarán esto engageando inmediatamente.',
      'Abstente de intercambios extendidos, ya que el daño sostenido y los críticos de Tryndamere pueden voltear rápidamente la pelea en tu contra.'
    ]
  },
  
  lastUpdated: '2025-01-20',
  patch: '15.15.1',
  author: 'Svonccy'
};