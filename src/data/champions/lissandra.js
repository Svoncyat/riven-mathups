import { DIFFICULTY_LEVELS } from '../constants.js';

export const lissandraMatchup = {
  id: 'lissandra',
  name: 'Lissandra',
  nickname: 'La Bruja de Hielo',
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Lissandra.png',
  
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/LissandraPassive.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/LissandraQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/LissandraW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/LissandraE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/LissandraR.png'
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
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1055.png', // Espada de Doran
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png'  // Poción de Vida
    ],
    recommended: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3111.png', // Botas de Mercurio
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3155.png' 
    ]
  },
  
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png',
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerTeleport.png'
  },
  
  strategy: {
    notes: [
      'Juega de manera bastante segura temprano en la fase de líneas.',
      'Considera comprar objetos de resistencia mágica como botas o Velo del Hada de la Muerte para mitigar su poke.',
      'Apunta a enfrentarte y hacer all-in después de alcanzar el nivel 6 o con Eclipse y Botas de Mercurio para superarla.',
      'Jugar de manera segura temprano es crucial; Eclipse y Botas de Mercurio pueden cambiar el enfrentamiento a tu favor.',
      'Considera usar runas de resistencia mágica para reducir el daño de su poke.'
    ],
    toDo: [
      'Enfrentarte en peleas después del nivel 6 con Eclipse y Botas de Mercurio.',
      'Comprar objetos de resistencia mágica temprano para mitigar su poke.',
      'Usar runas de resistencia mágica para reducir su daño.',
      'Esperar el momento adecuado para hacer all-in cuando tengas ventaja de objetos.'
    ],
    toAvoid: [
      'Enfrentarte en peleas antes del nivel 6; su poke y control de masas pueden castigarte fácilmente.',
      'Subestimar su habilidad para ralentizarte o negar tus enfrentamientos con su raíz.',
      'Enfrentamientos tempranos pueden ser arriesgados debido a su capacidad de enraizarte cuando te acerques.'
    ]
  },
  
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};