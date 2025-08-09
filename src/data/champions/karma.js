import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const karmaMatchup = {
  id: 'karma',
  name: await getChampionInfo.getChampionName('Karma'),
  nickname: await getChampionInfo.getChampionTitle('Karma'),
  difficulty: DIFFICULTY_LEVELS.EASY,
  portrait: "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Karma.png",
  
  abilities: {
    passive: "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Karma_Passive.png",
    q: "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/KarmaQ.png",
    w: "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/KarmaW.png",
    e: "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/KarmaE.png",
    r: "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/KarmaMantra.png"
  },
  
  runes: {
    primary: {
      tree: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png",
      keystone: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/Electrocute/Electrocute.png",
      rune1: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png",
      rune2: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png",
      rune3: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png"
    },
    secondary: {
      tree: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png",
      rune1: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Triumph.png",
      rune2: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png"
    },
    statShards: {
      shard1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthScalingIcon.png'
    }
  },
  
  items: {
    starting: [
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1055.png", // Doran's Blade
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png"  // Health Potion
    ],
    recommended: [
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/6630.png", // Profane Hydra
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3158.png", // Ionian Boots of Lucidity
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3074.png", // Ravenous Hydra
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/6692.png", // Eclipse
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3142.png", // Youmuu's Ghostblade
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/6676.png"  // The Collector
    ]
  },
  
  summonerSpells: {
    d: "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png",
    f: "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerTeleport.png"
  },
  
  strategy: {
    notes: [
      "Haz cheese en el nivel 1 para obtener ventaja temprana.",
      "No tienes presión de kill sobre ella a menos que cometa un error.",
      "Profane y Ravenous rush son buenos aquí para el sustain y waveclear.",
      "En el nivel 6, puedes matarla si comete un error.",
      "La superas en late game, así que trata de farmear y hacer roaming.",
      "Es un matchup de farmeo principalmente."
    ],
    toDo: [
      "Busca oportunidades para castigar sus errores, especialmente después del nivel 6.",
      "Juega seguro y enfócate en farmear; busca oportunidades de roaming para impactar otras líneas."
    ],
    toAvoid: [
      "No desperdicies tus recursos tratando de forzar kills en ella; es difícil de matar sin un error."
    ]
  },
  
  lastUpdated: "2024-12-19",
  patch: "15.15.1",
  author: "Riven Guide"
};