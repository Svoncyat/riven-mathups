 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const renektonMatchup = {
  id: 'renekton',
  name: await getChampionInfo.getChampionName('Renekton'),
  nickname: await getChampionInfo.getChampionTitle('Renekton'),
  difficulty: DIFFICULTY_LEVELS.EXTREME,
  portrait: await generateImageUrl.championPortrait('Renekton'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Renekton_Passive'),
    q: await generateImageUrl.championSpell('RenektonCleave'),
    w: await generateImageUrl.championSpell('RenektonPreExecute'),
    e: await generateImageUrl.championSpell('RenektonSliceAndDice'),
    r: await generateImageUrl.championSpell('RenektonReignOfTheTyrant'),
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
      shard3: await generateImageUrl.statShard('StatModsHealthScalingIcon')
    }
  },
  
  items: {
    starting: [
      await generateImageUrl.item('1055'), // Doran's Blade
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
      'Haz cheese en nivel 1, especialmente cuando no tenga experiencia',
      'Respeta que ponerlo por debajo del 50% de HP acelera su generación de Furia',
      'Enfócate en trades pequeños y tradea cuando tengas ventaja de oleada de minions',
      'Baja su vida para preparar un all-in de nivel 6 haciendo bait de su E y W cuando estén en cooldown',
      'Después del buff de W de Renekton, este matchup se ha vuelto uno de los más difíciles de Riven',
      'Renekton puede explotar las debilidades de Riven con su kit',
      'Trata de usar E para mitigar el daño de su Q; considera tomar Bone Plating para mitigar su W',
      'Controla la oleada para evitar que acumule Furia, lo que puede darte ventaja',
      'Abusa del cooldown más largo de E de Renekton',
      'Considera tomar Ignite para ventaja de all-in nivel 1; juega pasivamente hasta nivel 6 si es necesario',
      'En nivel 6, busca una oportunidad de all-in con Ignite si usa mal W o Q',
      'Es uno de los matchups más difíciles para Riven',
      'Ganable con juego cuidadoso, pero respeta la fuerza de early game de Renekton',
      'Riven supera a Renekton conforme progresa el juego',
      'Considera Flash + Ignite con secundaria Resolve para una línea más fácil'
    ],
    toDo: [
      'All-in de nivel 1 es ganable si empieza con Q; ten cuidado si tiene W, ya que puede interrumpir fácilmente tu engage',
      'Ve por trades seguros y cortos hasta que Renekton esté lo suficientemente bajo para un all-in',
      'Posiciónate bien después de los trades para evitar que Renekton use Slice and Dice para castigarte',
      'Patrón de trade típico: E para bloquear su Q; si retrasa Q, usa Q -> AA -> W -> AA -> E para salir o continuar el trade'
    ],
    toAvoid: [
      'Evita usar tu dash cerca de Renekton cuando su barra de furia esté acumulada, ya que puede aturdirte y quitar tu escudo instantáneamente',
      'No olvides la sustentación de Renekton; factorízala en tus decisiones de tradeo'
    ]
  },
  
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};