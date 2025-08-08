import { DIFFICULTY_LEVELS } from '../constants.js';

export const akshanMatchup = {
  id: 'akshan',
  name: 'Akshan',
  nickname: 'El Centinela Rebelde',
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Akshan.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/akshan_p.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/AkshanQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/AkshanW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/AkshanE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/AkshanR.png'
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
      shard1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsCDRScalingIcon.png',
      shard2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthPlusIcon.png'
    }
  },
  items: {
    starting: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1054.png', // Doran's Shield
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png' // Health Potion
    ],
    recommended: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3047.png' // Plated Steelcaps
    ]
  },
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerTeleport.png',
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerDot.png'
  },
  strategy: {
    notes: [
      'Enfrentamiento de habilidad',
      'La mayoría de las veces intentará golpearte con Q, AA, AA.',
      'Puedes bloquear su definitiva con tu E, con súbditos y con la torre vulnerable actual.',
      'Su pokeo (hostigamiento a distancia) puede ser muy molesto.',
      'Quizás puedas matarlo al principio si logras cancelar su E.',
      'Juega seguro al principio, antes del nivel 6 eres más débil; prioriza conservar tus puntos de vida (HP) para después.',
      'Tu pico de poder a nivel 6 es mucho más fuerte que el suyo.'
    ],
    toDo: [
      'Intenta gastar su runa "Revestimiento de Huesos" con las extensiones de tu Q. Después de eso, puedes ir con todo ("all-in")',
      'Realiza intercambios de daño cortos.',
      'Párate muy cerca de él para que no pueda escapar con su E'
    ],
    toAvoid: [
      'No lo "divees" (ataques bajo su torre); sus giros lo hacen muy molesto.',
      'Evita "tanquear" (recibir el daño directo de) su ulti; simplemente escóndete detrás de algo.'
    ]
  },
  lastUpdated: '2025-08-03',
  patch: '15.15.1',
  author: 'Svonccy'
};