import { DIFFICULTY_LEVELS } from '../constants.js';


export const drmundoMatchup = {
  id: 'drmundo',
  name: 'Dr. Mundo',
  nickname: 'El Loco de Zaun',
  difficulty: DIFFICULTY_LEVELS.EASY,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/DrMundo.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/DrMundo_P.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/DrMundoQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/DrMundoW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/DrMundoE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/DrMundoR.png'
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
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1055.png', // Espada de Doran
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png'  // Poción de Vida
    ],
    recommended: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3123.png', // Eclipse
    ]
  },
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png', // Flash
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerDot.png'
  },
  strategy: {
    notes: [
      'Intenta un "cheese" a nivel 1.',
      'Concéntrate en farmear y denegarle súbditos a Mundo al principio del juego.',
      'Puedes intentar perseguirlo para matarlo a nivel 6.',
      'En general, es un enfrentamiento de farmeo.',
      'Similar al enfrentamiento contra el antiguo Dr. Mundo, pero con una pasiva más molesta.',
      'Muchos jugadores de Mundo juegan pasivamente al principio; zonéalo de la oleada y deniégale súbditos bloqueando sus cuchillas con tu escudo.',
      'Evita recibir todos sus tiros de habilidad o ser golpeado por su lanzamiento de súbditos para no perder el enfrentamiento.',
      'La W de Mundo lo cura extra si golpea a un campeón.',
      'Párate detrás de los súbditos para esquivar las Q de Mundo.',
      'Mundo es considerado uno de los campeones de top más débiles a nivel 1.',
      'Desgástalo con intercambios cortos y deniégale farmeo bloqueando sus cuchillas con tu escudo.',
      'Provoca la pasiva de Mundo antes de iniciar un combate; si la recoges, no podrá curarse tanto.',
      'Considera comprar un Llamado del Verdugo temprano para reducir su curación y aumentar tu presión de asesinato.'
    ],
    toDo: [
      'Consigue el Llamado del Verdugo temprano para tener presión de asesinato después de su nivel 6.',
      'Gana todos los intercambios al principio, especialmente cuando activas primero su Inmunidad al CC.'
    ],
    toAvoid: [
      'Evita los "all-ins" cuando su Inmunidad al CC esté activa, ya que podría escapar.'
    ]
  },
  lastUpdated: '2025-08-07',
  patch: '15.15.1',
  author: 'Svonccy'
};