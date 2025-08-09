 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const singedMatchup = {
  id: 'singed',
  name: await getChampionInfo.getChampionName('Singed'),
  nickname: await getChampionInfo.getChampionTitle('Singed'),
  difficulty: DIFFICULTY_LEVELS.EASY,
  portrait: await generateImageUrl.championPortrait('Singed'),

  abilities: {
    passive: await generateImageUrl.championPassive('Singed_Passive'),
    q: await generateImageUrl.championSpell('PoisonTrail'),
    w: await generateImageUrl.championSpell('MegaAdhesive'),
    e: await generateImageUrl.championSpell('Fling'),
    r: await generateImageUrl.championSpell('InsanityPotion'),
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
      await generateImageUrl.item('2003')  // Health Potion
    ],
    recommended: [
      await generateImageUrl.item('3123') // Executioner's Calling
    ]
  },

  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },

  strategy: {
    notes: [
      'Matchup de farmeo.',
      'Riven tiene toda la movilidad necesaria para entrar/salir contra Singed.',
      'Mantén al menos la mitad de tu kit disponible para después de que te lance. Ganas con 40-45% de vida.',
      'Matchup fácil si juegas alrededor de su E y consigues Llamada del Verdugo.',
      'Castígalo cuando tu oleada esté cerca de tu torre; él arriesga caminar al rango de torre para envenenar minions.',
      'Castígalo con intercambios cortos cuando vaya por last hits.',
      'Enfócate en conseguir CDR temprano.'
    ],
    toDo: [
      'Congela la oleada cerca de tu torre para negarle farmeo fácil a Singed.',
      'Predice su lanzamiento (E) y usa tu movilidad (E) de antemano.',
      'Usa W para iniciar intercambios cortos y evitar ser lanzada.',
      'Respeta la curación de su ulti y evita perseguirlo.',
      'Busca entrar cuando Singed esté alrededor del 50% de vida al nivel 6.'
    ],
    toAvoid: [
      'No inicies un intercambio corto con Q, ya que Singed puede reaccionar y lanzarte.',
      'No olvides el aumento de resistencias de Singed cuando ultea; ajusta tu daño en consecuencia.'
    ]
  },

  lastUpdated: '2025-01-16',
  patch: '15.15.1',
  author: 'Svonccy'
};