import { DIFFICULTY_LEVELS } from '../constants.js';


export const gangplankMatchup = {
  id: 'gangplank',
  name: 'Gangplank',
  nickname: 'El Azote de los Mares',
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Gangplank.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Gangplank_Passive.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GangplankQWrapper.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GangplankW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GangplankE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GangplankR.png'
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
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1054.png', // Doran's Shield

      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png'  // Health Potion
    ],
    recommended: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3047.png' // Plated Steelcaps
    ]
  },
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png', // Flash
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerDot.png'
  },
  strategy: {
    notes: [
      'Intenta un "cheese" a nivel 1 (ten cuidado con la configuración de sus barriles).',
      'Puedes ver la cantidad de barriles que tiene debajo de su barra de vida.',
      'Antes del nivel 6 es más fácil si no tiene Tabi de Ninja.',
      'Después del nivel 6, el enfrentamiento se vuelve más favorable para Riven.',
      'Enfrentamiento de habilidad.',
      'Empieza a nivel 1 con Escudo de Doran y la E para bloquear su pokeo. Espera hasta el nivel 6 para quitarle el Revestimiento de Huesos y luego haz un "all-in".',
      'Si él empieza con la E, tú empieza con la Q.',
      'Lánzate con CC cuando esté al lado de un barril e intenta darle el último golpe.',
      'En cuanto consigas un 30% de Reducción de Enfriamiento (CDR), el enfrentamiento debería favorecer a Riven.',
      'Si le bajas mucha vida y la oleada está empujando hacia él, considera divearlo bajo torre.',
      'Usa la E para bloquear sus Q con Agarre del Inmortal y prioriza autoatacar sus barriles en los intercambios.',
      'Autoatacar sus barriles vale la pena, ya que le niegas daño y bonificaciones de velocidad de movimiento.',
      'Abusa de su mal posicionamiento y busca hacer "all-in" con tu definitiva y objetos de CDR. Puedes ganar peleas con un 40-45% de vida.',
      'Este es un enfrentamiento difícil si el Gangplank es bueno, porque puede desgastarte con su pokeo y los buenos GPs se comprarán Botas de Acero Laminado contra ti.'
    ],
    toDo: [
      'Empieza con la E a nivel 1.',
      'Usa la E para bloquear casi cada Q de pokeo.',
      'Realiza intercambios cortos.',
      'Potencialmente puedes matarlo de un combo a nivel 6 si se compra Brillo primero.',
      'Intenta esquivar sus barriles; si se acerca, ejecuta un intercambio completo con las 3 Qs e intenta forzar su Destello.'
    ],
    toAvoid: [
      'Acercarte cuando tu E esté en enfriamiento.',
      'Mantenerte cerca de los arbustos; podría haber un barril preparado dentro.'
    ]
  },
  lastUpdated: '2025-08-07',
  patch: '15.15.1',
  author: 'Svonccy'
};