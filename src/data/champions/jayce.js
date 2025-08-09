 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const jayceMatchup = {
  id: 'jayce',
  name: await getChampionInfo.getChampionName('Jayce'),
  nickname: await getChampionInfo.getChampionTitle('Jayce'),
  difficulty: DIFFICULTY_LEVELS.EXTREME,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Jayce.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Jayce_Passive.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/JayceToTheSkies.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/JayceStaticField.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/JayceThunderingBlow.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/JayceStanceHtG.png'
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
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7204_Resolve.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Resolve/SecondWind/SecondWind.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/Unflinching/Unflinching.png'
    },
    statShards: {
      shard1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthScalingIcon.png'
    }
  },
  items: {
    starting: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1054.png', // Doran's Shield
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png'  // Health Potion
    ],
    recommended: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/6692.png', // Eclipse
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3071.png', // Black Cleaver
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/6333.png'  // Death's Dance
    ]
  },
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png', // Flash
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerTeleport.png' // Teleport
  },
  strategy: {
    notes: [
      'Haz cheese en el nivel 1 (si no tiene Irrupción de Fase) o atrápalo desprevenido al revisar arbustos.',
      'Juega con cuidado antes del nivel 6.',
      'Una vez que llegues al nivel 6, busca perseguirlo.',
      'Enfrentamiento de farmeo.',
      'No subestimes su pico de letalidad.',
      'La ventana principal para all-in es cuando cambia de forma Martillo a Cañón, negándole el uso de Golpe Atronador (habilidad E).',
      'Riven tiene una fuerte ventaja en un all-in, pero posicionarse para hacer daño es crucial.',
      'Después de tu primera compra, haz malabares con Q y provócalo para que use su Q de Martillo en ti; esta es una oportunidad perfecta.',
      'Farmea hasta el nivel 6 e intenta no quedarte atrás.',
      'En el nivel 6, obtienes una definitiva de combate mientras que Jayce no.',
      'Enfócate en pelear después del nivel 6.',
      'Jayce es vulnerable a ganks y dives si empuja demasiado lejos.',
      'Antes del nivel 6, sobrevive con Escudo de Doran y runas de Viento Renovador.',
      'En el nivel 6, provoca su E y fuerza un all-in.',
      'Jayce se vuelve mateable una vez que tengas 30% de CDR.',
      'Usa habilidades para evitar su Q.',
      'El daño temprano de Jayce es manejable debido a restricciones de maná.'
    ],
    toDo: [
      'Deja que te empuje.',
      'Solo haz last-hit cuando tu E o Q estén disponibles para esquivar su Q.',
      'Aturde cuando salte sobre ti e intercambia rápidamente.',
      'Explota la ventana corta cuando cambie de forma Martillo a Rango.',
      'Usa extensión de Q para pokearlo.'
    ],
    toAvoid: [
      'Evita all-ins cuando esté en forma Martillo y su habilidad E esté disponible.'
    ]
  },
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};