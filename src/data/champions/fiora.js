import { DIFFICULTY_LEVELS } from '../constants.js';


export const fioraMatchup = {
  id: 'fiora',
  name: 'Fiora',
  nickname: 'La Gran Duelista',
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Fiora.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Fiora_P.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/FioraQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/FioraW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/FioraE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/FioraR.png'
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
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7202_Sorcery.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/Transcendence/Transcendence.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/Scorch/Scorch.png'
    },
    statShards: {
      shard1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthScalingIcon.png'
    }
  },
  items: {
    starting: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1055.png', // Doran's Blade
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png'  // Health Potion
    ],
    recommended: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3123.png', // Eclipse
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3047.png' // Plated Steelcaps
    ]
  },
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png', // Flash
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerDot.png'
  },
  strategy: {
    notes: [
      'Enfrentamiento de habilidad.',
      'Consigue la prioridad a nivel 1.',
      'Juega cerca de tus súbditos al principio y castígala si inicia.',
      'Posiciónate cerca de la torreta por seguridad.',
      'Salir de su rango de visión cambia la ubicación de tu punto vital.',
      'Si Fiora falla la Q, el enfriamiento aumenta a 16 segundos a nivel 1, así que pelea contra ella.',
      'Riven puede ganar este enfrentamiento, pero si Fiora consigue un asesinato, podría volver el juego en tu contra.',
      'Fiora escala más fuerte y puede superarte incluso si vas por delante.',
      'Tu nivel 6 es más fuerte, así que hazle "all-in" si tiene poca vida y/o su W (Réplica) está en enfriamiento.',
      'Fiora debe predecir tu W para aturdirte, pero puede leer tu 3ra Q; asegúrate de tener tu E disponible para esquivar su W cuando uses la 3ra Q sobre ella.',
      'Riven sufre en los intercambios donde Fiora acierta su W debido a la ralentización de la velocidad de ataque.',
      'Acierta una 3ra Q para evitar que Fiora use su W mientras está levantada; combínalo con tu W inmediatamente.',
      'Intenta provocar que use su W; sin ella, es más fácil de matar y tiene un enfriamiento alto.'
    ],
    toDo: [
      'Deja que te empuje la línea al principio.',
      'Congela la oleada cerca de tu torre.',
      '"All-in" a nivel 1.',
      'Intercambios cortos.',
      'Provoca su W posicionándote para evitar la Réplica.',
      'Pégate a una pared cuando use su definitiva para negarle las activaciones de los puntos vitales.'
    ],
    toAvoid: [
      'Intercambiar daño después de ser aturdido por su W.'
    ]
  },
  lastUpdated: '2025-08-07',
  patch: '15.15.1',
  author: 'Svonccy'
};