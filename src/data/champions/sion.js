 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const sionMatchup = {
  id: 'sion',
  name: await getChampionInfo.getChampionName('Sion'),
  nickname: await getChampionInfo.getChampionTitle('Sion'),
  difficulty: DIFFICULTY_LEVELS.EASY,
  portrait: await generateImageUrl.championPortrait('Sion'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Sion_Passive'),
    q: await generateImageUrl.championSpell('SionQ'),
    w: await generateImageUrl.championSpell('SionW'),
    e: await generateImageUrl.championSpell('SionE'),
    r: await generateImageUrl.championSpell('SionR'),
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
      await generateImageUrl.item('1055'), // Doran's Blade
      await generateImageUrl.item('2003')  // Health Potion
    ],
    recommended: [
      await generateImageUrl.item('3071'), // Black Cleaver
      await generateImageUrl.item('3123')  // Executioner's Calling
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },
  
  strategy: {
    notes: [
      'Zonéalo temprano y niégale súbditos.',
      'Trata de congelar la oleada cerca de tu torre.',
      'Solo mátalo si no va a conseguir muchos súbditos con su pasiva; el timing es crucial para negarle XP y oro.',
      'Es un matchup de farmeo inicialmente, pero castígalo antes de que se vuelva muy tanque.',
      'Tradea fuerte en nivel 1 antes de que su pasiva se haya acumulado.',
      'Combea y rompe el canal de su Q con tu W.',
      'Empuja las ventajas en línea ya que Sion escala fácilmente.',
      'Puedes cancelar la Q de Sion con tus aturdimientos, negándole daño crucial.',
      'Evita que te golpee con su Q completamente cargada; el daño es significativo.',
      'Baitea su E antes de ir por una porción significativa de su vida.',
      'Ten cuidado si consigue kills; Sion puede volverse muy poderoso.',
      'Crashea la tercera oleada, recallea y congela cerca de tu torre para presionarlo.'
    ],
    toDo: [
      'El all-in de nivel 1 puede ser efectivo.',
      'Al cancelar su Q, ten en cuenta su cooldown reducido; guarda habilidades para desengancharte de forma segura.',
      'Después de ser golpeado por su E, desengánchate inmediatamente para evitar su Q garantizada.'
    ],
    toAvoid: [
      'No camines demasiado cerca de los arbustos donde Sion puede sorprenderte.',
      'Evita ser golpeado por su E después de tradear o usar Q agresivamente.',
      'Recuerda su pasiva; no subestimes su potencial para revivir.'
    ]
  },
  
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};