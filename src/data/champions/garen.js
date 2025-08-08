import { DIFFICULTY_LEVELS } from '../constants.js';

export const garenMatchup = {
  id: 'garen',
  name: 'Garen',
  nickname: 'El Poder de Demacia',
  difficulty: DIFFICULTY_LEVELS.EASY,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Garen.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Garen_Passive.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GarenQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GarenW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GarenE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GarenR.png'
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
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3071.png', // Black Cleaver
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3158.png' // Ionian Boots of Lucidity
    ]
  },
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png', // Flash
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerDot.png' // Ignite
  },
  strategy: {
    notes: [
      'Juega para congelar la oleada cerca de tu torre y castígalo con intercambios cortos.',
      'Lo más probable es que te use la Q cuando tú uses tu tercera Q sobre él. El enfriamiento de su Q es mayor, así que si extiendes el intercambio, puedes salir ganando.',
      'Provoca su W (Coraje) y luego usa tu definitiva para burstearlo.',
      'Enfrentamiento de farmeo.',
      'Intercambia cuando su Q (Golpe Decisivo) esté en enfriamiento, pero solo usa una rotación completa de Q y luego retírate.',
      'Es un enfrentamiento favorable si sabes cómo jugar alrededor de su kit sencillo.',
      'Tu condición de victoria es evitar intercambiar cuando te ha silenciado con su Q.',
      'Cuando intentes esquivar su Q con tu E, también puedes usar E + W (doble lanzamiento) para aturdirlo.',
      'Los Garen suelen seguir la Q con la E, así que prepárate para kitearla después de usar tu E.',
      'La extensión de la Q funciona bien en este enfrentamiento; puedes empujarlo hasta el límite con tu tercera Q cuando corre hacia ti con su Q.',
      'Riven gana a nivel 1; no dudes en intercambiar con él después de que haya usado su Q.',
      'Busca intercambios cortos: Q, AA, W, y luego E para alejarte. Intenta provocar su W (Coraje).',
      'Mucha gente piensa erróneamente que Garen es una amenaza para Riven; en realidad es bastante sencillo.',
      'Usa tu E en su Q y realiza un intercambio rápido como autoataque, W, Q, y luego desengancha.',
      'Solo puedes hacerle all-in a Garen para matarlo si no tiene su W (Coraje).',
      'Mucha gente simplemente elige a Garen como counter para Riven, así que tal vez puedas arrollarlo debido a su falta de conocimiento.',
      'No hagas all-ins, solo intercambios cortos.',
      'Usa la E en su Q, o EW si tienes los reflejos.',
      'Juega a congelar y controlar la oleada desde el principio.'
    ],
    toDo: [
      'All-in a nivel 1 (con su itemización de daño y velocidad de ataque, puedes ganar los primeros intercambios).',
      'Usa siempre tu E para bloquear su Q.',
      'Cuando intercambies, quédate en tu oleada de súbditos ya que su E hará menos daño.',
      'Espera siempre a que se le acabe el escudo (W - Coraje) antes de usar Cuchillada de Viento (R).',
      'A nivel 3, puedes provocar su W (Coraje) o realizar un intercambio rápido if no la usa.',
      'Prioriza el control de la oleada.',
      'Busca intercambios cortos: Q3 - W - AA - E para salir.'
    ],
    toAvoid: [
      'Intercambiar cuando tiene su escudo (W - Coraje).',
      'Ir a por intercambios extendidos (puede ganarte por sustain).'
    ]
  },
  lastUpdated: '2025-08-07',
  patch: '15.15.1',
  author: 'Svonccy'
};