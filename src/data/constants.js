// Constantes para niveles de dificultad
export const DIFFICULTY_LEVELS = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard',
  EXTREME: 'extreme'
};

// Función para obtener la última versión de League of Legends
export const getLatestVersion = async () => {
  try {
    const response = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
    const versions = await response.json();
    return versions[0]; // primer elemento (última versión)
  } catch (error) {
    console.error('Error al obtener la versión:', error);
    return '15.15.1'; // versión fallback
  }
};

// URLs base para recursos de League of Legends (dinámicas)
export const createUrls = (version) => ({
  CHAMPION_PORTRAIT: `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion`,
  CHAMPION_PASSIVE: `https://ddragon.leagueoflegends.com/cdn/${version}/img/passive`,
  CHAMPION_SPELL: `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell`,
  ITEM: `https://ddragon.leagueoflegends.com/cdn/${version}/img/item`,
  SUMMONER_SPELL: `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell`,
  RUNE_TREE: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles',
  RUNE: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles',
  STAT_SHARD: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods'
});

// URLs con versión por defecto (se actualizarán dinámicamente)
let URLS = createUrls('15.15.1');

// Inicializar URLs con la última versión
getLatestVersion().then(version => {
  URLS = createUrls(version);
});

export { URLS };

// Funciones helper para generar URLs (dinámicas)
export const generateImageUrl = {
  championPortrait: async (championName) => {
    const version = await getLatestVersion();
    const urls = createUrls(version);
    return `${urls.CHAMPION_PORTRAIT}/${championName}.png`;
  },
  championPassive: async (passiveName) => {
    const version = await getLatestVersion();
    const urls = createUrls(version);
    return `${urls.CHAMPION_PASSIVE}/${passiveName}.png`;
  },
  championSpell: async (spellName) => {
    const version = await getLatestVersion();
    const urls = createUrls(version);
    return `${urls.CHAMPION_SPELL}/${spellName}.png`;
  },
  item: async (itemId) => {
    const version = await getLatestVersion();
    const urls = createUrls(version);
    return `${urls.ITEM}/${itemId}.png`;
  },
  summonerSpell: async (spellName) => {
    const version = await getLatestVersion();
    const urls = createUrls(version);
    return `${urls.SUMMONER_SPELL}/${spellName}.png`;
  },
  runeTree: async (runeTreeName) => {
    const version = await getLatestVersion();
    const urls = createUrls(version);
    return `${urls.RUNE_TREE}/${runeTreeName}.png`;
  },
  rune: async (runeName) => {
    const version = await getLatestVersion();
    const urls = createUrls(version);
    return `${urls.RUNE}/${runeName}.png`;
  },
  statShard: async (statShardName) => {
    const version = await getLatestVersion();
    const urls = createUrls(version);
    return `${urls.STAT_SHARD}/${statShardName}.png`;
  },
};

// Funciones helper síncronas (usan URLS global actualizado)
export const generateImageUrlSync = {
  championPortrait: (championName) => `${URLS.CHAMPION_PORTRAIT}/${championName}.png`,
  championPassive: (passiveName) => `${URLS.CHAMPION_PASSIVE}/${passiveName}.png`,
  championSpell: (spellName) => `${URLS.CHAMPION_SPELL}/${spellName}.png`,
  item: (itemId) => `${URLS.ITEM}/${itemId}.png`,
  summonerSpell: (spellName) => `${URLS.SUMMONER_SPELL}/${spellName}.png`,
  runeTree: (runeTreeName) => `${URLS.RUNE_TREE}/${runeTreeName}.png`,
  rune: (runeName) => `${URLS.RUNE}/${runeName}.png`,
  statShard: (statShardName) => `${URLS.STAT_SHARD}/${statShardName}.png`,
};