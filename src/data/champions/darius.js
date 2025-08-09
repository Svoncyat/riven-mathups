 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';


export const dariusMatchup = {
  id: 'darius',
  name: await getChampionInfo.getChampionName('Darius'),
  nickname: await getChampionInfo.getChampionTitle('Darius'),
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Darius.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Darius_Icon_Hemorrhage.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/DariusCleave.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/DariusNoxianTacticsONH.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/DariusAxeGrabCone.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/DariusExecute.png'
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
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerExhaust.png'
  },
  strategy: {
    notes: [
      'Enfrentamiento de habilidad; el éxito depende de gestionar tus enfriamientos y posicionamiento.',
      'Considera un "all-in" a nivel 1 si Darius empieza con su Q.',
      'Ten cuidado de sobreextenderte con tus habilidades en enfriamiento, ya que Darius puede alcanzarte fácilmente con Fantasmal.',
      'El enfrentamiento se complica si Darius se compra Tabi de Ninja.',
      'Prioriza el control de la línea al principio y castígalo a nivel 6.',
      'Evita usar tu tercera Q si Darius tiene su E (Atrapar) disponible; los jugadores expertos la usarán para cancelar tu Q3.',
      'Busca intercambios rápidos para forzar su E y luego haz un "all-in".',
      'El nivel 6 de Riven es más fuerte, pero no dejes que Darius acumule su pasiva.',
      'Si Darius lleva Fantasmal/Prender, evita los "all-ins" a menos que falle su E.',
      'Un Darius con Teleportar facilita la línea al reducir su presión de asesinato.',
      'No caigas en su trampa a nivel 1; busca el "all-in" a nivel 6 cuando esté al 50% de vida.',
      'A nivel 1, si ambos tienen Prender y él empieza con Q, puedes hacer un "all-in" si esquivas el filo de su habilidad.',
      'Si no estás cerca de tu torre, puede perseguirte con Fantasmal y Capa del Nimbo.',
      'Antes de tener reducción de enfriamiento, evita peleas cercanas si has gastado tus habilidades.',
      'Un vez tengas la Cuchilla Negra, deberías tener la ventaja.'
    ],
    toDo: [
      'Usa tu E o Q para esquivar la curación de la Q de Darius.',
      'Busca intercambios cortos cuando vaya a farmear o falle su E.',
      'Ponte pegado a Darius cuando use su Q para evitar el daño del filo.',
      'Realiza intercambios cortos: W -> AA -> E+Q para salir.',
      'Usa tus habilidades sabiamente; no las gastes todas de golpe.',
      'Espera a que se acabe su pasiva antes de entrar en una pelea larga.',
      'Deja que te empuje la línea y congélala cerca de tu torre para estar seguro.'
    ],
    toAvoid: [
      'Que te atrape con su E; un buen Darius la usará para cancelar tu tercera Q.',
      'Intercambios largos donde pueda acumular su pasiva y alcanzarte con Fantasmal.',
      'Pelear contra él cuando tenga las 5 cargas de su pasiva.'
    ]
  },
  lastUpdated: '2025-08-07',
  patch: '15.15.1',
  author: 'Svonccy'
};