 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const teemoMatchup = {
  id: 'teemo',
  name: await getChampionInfo.getChampionName('Teemo'),
  nickname: await getChampionInfo.getChampionTitle('Teemo'),
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: await generateImageUrl.championPortrait('Teemo'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Teemo_Passive'),
    q: await generateImageUrl.championSpell('TeemoQ'),
    w: await generateImageUrl.championSpell('TeemoW'),
    e: await generateImageUrl.championSpell('TeemoE'),
    r: await generateImageUrl.championSpell('TeemoR'),
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
      await generateImageUrl.item('1054'), // Doran's Shield
      await generateImageUrl.item('2003')  // Health Potion
    ],
    recommended: [
      await generateImageUrl.item('3071'), // Black Cleaver
      await generateImageUrl.item('3814')  // Edge of Night
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },
  
  strategy: {
    notes: [
      'Juega para nivel 6.',
      '¡Consigue Sweeper temprano!',
      'Matchup gratis en nivel 6 o con 20+ de Habilidad Haste para comenzar a extender Q (asegúrate de que esté cerca de tu torre para ventaja en línea).',
      'Lo superas significativamente si mantienes CS.',
      'Pasado el 30% de objetos CDR (como Martillo de Guerra de Caulfield y Kindlegem) es cuando puedes buscar tradear efectivamente.',
      'Cuando estés cegado, camina junto a Teemo hasta que se desgaste; guarda E/W para evitar daño gratuito.',
      'Considera Edge of Night contra hongos o para comer una ceguera con la pasiva.',
      'Prefiere esperar al nivel 6, baitea su Q, luego all-in.'
    ],
    toDo: [
      'Comienza con Escudo de Doran.',
      'Tradeo corto antes de su ceguera.',
      'Tradeos extendidos si cierras la brecha sin usar todos los hechizos.',
      'Juega cautelosamente antes del nivel 6 contra Teemos hábiles.',
      'Usa Sweeper durante all-ins en nivel 6+.',
      'Prioriza Sweeper para limpiar hongos.'
    ],
    toAvoid: [
      'Hacer tradeos cortos cuando estés cegado; desengánchate en su lugar.'
    ]
  },
  
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};