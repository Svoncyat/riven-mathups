 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const malphiteMatchup = {
  id: 'malphite',
  name: await getChampionInfo.getChampionName('Malphite'),
  nickname: await getChampionInfo.getChampionTitle('Malphite'),
  difficulty: DIFFICULTY_LEVELS.HARD,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Malphite.png',

  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Malphite_GraniteShield.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SeismicShard.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/Obduracy.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/Landslide.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/UFSlash.png'
  },

  runes: {
    primary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png',
      keystone: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Conqueror/Conqueror.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Triumph.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png',
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
      shard3: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthPlusIcon.png"
    }
  },
  
  items: {
    starting: [
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1055.png", // Doran's Blade
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png"  // Health Potion
    ],
    recommended: [
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3071.png", // Black Cleaver
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3111.png", // Mercury's Treads
    ]
  },
  
  summonerSpells: {
    d: "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png",
    f: "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerDot.png",
  },

  strategy: {
    notes: [
      'En mi opinión, este campeón es la definición de daño cerebral.',
      'Si se apresura a comprar Tabi, se vuelve difícil intercambiar.',
      'Castígalo fuertemente en los niveles 1 y 6.',
      'Juega para una línea equilibrada; si te quedas atrás, te perseguirá.',
      'Concéntrate en farmear; no vale la pena tratar de matarlo.',
      'Si presiona E, desengánchate debido a la reducción de velocidad de ataque.',
      'Intercambia usando AA -> E-W fuera o E->AA-W-Q ->AA.',
      'Enfrentamiento de farmeo; aburrido pero necesario.',
      'Si comienza con Q, es gratis; si no, primero haz que lo use.',
      'Malphite tiene problemas de maná; trata de dejarlo sin maná y bloquea sus habilidades.',
      'Enfrentamiento gratuito y línea de farmeo; gana haciendo roaming como en cada enfrentamiento de tanque.',
      'La mayor parte de la línea será farmear o hacer roaming; evita pelear después de que obtenga Grebas de Acero.',
      'La runa Inquebrantable ayuda; ve por salud como estadística adaptativa en runas.',
      'Dependiendo de la construcción y runas de Malphite, este enfrentamiento varía en dificultad.',
      'La construcción común es cometa y una mezcla de objetos tanque/AP; toma Escudo de Doran/Segundo Viento para superar su maná.',
      'Una vez que esté bajo en maná, es fácil de matar.',
      'Malphite debería ir Garras contra Riven; si va Cometa Arcano, consigue Botas de Mercurio y prueba intercambios extendidos con Conquistador.'
    ],
    toDo: [
      'All-in de nivel 1.',
      'Obtener prioridad de empuje.',
      'A partir del nivel 3, lo superas fácilmente en intercambios.',
      'En el nivel 6, ponlo por debajo del 60% para matarlo de un golpe.',
      'Los jugadores de Malphite tienden a usar E cuando te acercas; entra con E primero o sal con Q inmediatamente.',
      'Considera Ignición para una muerte de nivel 1.',
      'Engaña su W usando Q hacia él, luego W, AA, E fuera.'
    ],
    toAvoid: [
      'Ir por intercambios de AA cuando golpea su E (ralentización de velocidad de ataque).',
      'Tanquear sus AAs potenciados.'
    ]
  },

  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
}