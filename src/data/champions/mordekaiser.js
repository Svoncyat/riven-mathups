 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const mordekaizerMatchup = {
  id: 'mordekaiser',
  name: await getChampionInfo.getChampionName('Mordekaiser'),
  nickname: await getChampionInfo.getChampionTitle('Mordekaiser'),
  difficulty: DIFFICULTY_LEVELS.EASY,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Mordekaiser.png',
  
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/MordekaiserPassive.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/MordekaiserQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/MordekaiserW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/MordekaiserE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/MordekaiserR.png'
  },
  
  runes: {
    primary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png',
      keystone: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Conqueror/Conqueror.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Triumph.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/LegendHaste/LegendHaste.png',
      rune3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/LastStand/LastStand.png'
    },
    secondary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7203_Whimsy.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/JackOfAllTrades/JackofAllTrades2.png'
    },
    statShards: {
      shard1: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsCDRScalingIcon.png",
      shard2: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png",
      shard3: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthScalingIcon.png"
    }
  },
  items: {
    starting: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1055.png', // Espada de Doran
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png'  // Poción de Vida
    ],
    recommended: [
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3158.png",
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3155.png'
    ]
  },
  
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png',
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerDot.png'
  },
  
  strategy: {
    notes: [
      'Esquiva sus habilidades.',
      'Evita intercambios extendidos debido a su pasiva.',
      'Potencial de muerte en el nivel 6.',
      'Guarda tu definitiva hasta después de que él te ultime (puede esquivarla con su definitiva).',
      'Pelea en tu oleada de minions; su Q hace menos daño si solo golpea un objetivo.',
      'Haz una rotación completa antes de que active su pasiva y luego aléjate.',
      'Similar a Illaoi; un minijuego de esquivar. Ganas intercambios si esquivas bien. Usa Q para saltar detrás de él.',
      'Botas tempranas para esquivar o hacer kiting son opcionales.',
      'Su pasiva le da mucho daño y velocidad de movimiento cuando se activa.',
      'El enfrentamiento se basa en el posicionamiento y la esquiva de habilidades.',
      'Su W le da un escudo significativo, evita pelear cuando esté completamente cargado.',
      'Mordekaiser es vulnerable a ganks debido a su falta de movilidad.',
      'Su definitiva te aísla en el Reino de la Muerte, mantén tu definitiva para escapar o contraatacar.'
    ],
    toDo: [
      'Haz intercambios cortos.',
      'Él gana el nivel 1 debido a su pasiva.',
      'Juega seguro hasta el nivel 3.',
      'Evita cada Q con paso lateral > Q > E.',
      'All-in en el nivel 6 cuando esté alrededor de la mitad de HP.',
      'Usa tus Q para posicionarte detrás de él y evitar su Q.',
      'Aprovecha las botas tempranas para mejor movilidad.',
      'Pelea cerca de tus minions para reducir el daño de su Q.'
    ],
    toAvoid: [
      'Pelear con él cuando su pasiva esté activada.',
      'All-in cuando su W esté completamente cargado.',
      'Intercambios prolongados donde puede activar su pasiva.',
      'Usar tu definitiva antes de que él use la suya.',
      'Pelear lejos de tus minions donde su Q hace daño completo.',
      'Subestimar su daño en niveles tempranos con pasiva activada.'
    ]
  },
  
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};