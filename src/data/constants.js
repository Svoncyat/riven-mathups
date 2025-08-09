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

// Función para obtener el idioma de la API
export const getGameLanguage = async (language = 'en_US') => {
  try {
    const response = await fetch('https://ddragon.leagueoflegends.com/cdn/languages.json');
    const availableLanguages = await response.json();
    return availableLanguages.includes(language) ? language : 'en_US';
  } catch (error) {
    console.error('Error al obtener el idioma:', error);
    return 'en_US';
  }
}

export const getChampionData = async (version) => {
  try {
    const language = await getGameLanguage('es_ES');
    const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion.json`);
    const championData = await response.json();
    return championData;
  } catch (error) {
    console.error('Error al obtener la información del campeón:', error);
    return {}
  };
}

// URLs base para recursos de League of Legends (dinámicas)
export const createUrls = (version, language = 'es_MX') => ({
  CHAMPION_NAME: `https://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion.json`,
  CHAMPION_NICKNAME: `https://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion/`,
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
let URLS = createUrls('15.15.1', 'es_MX');

// Inicializar URLs con la última versión
getLatestVersion().then(async version => {
  const language = await getGameLanguage('es_MX');
  URLS = createUrls(version, language);
});

export { URLS };

export const getChampionInfo = {
  getChampionName: async (championKey) => {
    try {
      const version = await getLatestVersion();
      const championData = await getChampionData(version);
      const championInfo = championData.data[championKey];
      const name = championInfo ? championInfo.name : 'champion no encontrado';
      return name.charAt(0).toUpperCase() + name.slice(1);
    } catch (error) {
      console.error('Error al obtener el nombre del campeón:', error);
      return 'Error al cargar';
    }
  },
  getChampionTitle: async (championKey) => {
    try {
      const version = await getLatestVersion();
      const championData = await getChampionData(version);
      const championInfo = championData.data[championKey];
      const title = championInfo ? championInfo.title : 'título no encontrado';
      return title.charAt(0).toUpperCase() + title.slice(1);
    } catch (error) {
      console.error('Error al obtener el título del campeón:', error);
      return 'Error al cargar';
    }
  },
}

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