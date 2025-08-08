import { DIFFICULTY_LEVELS } from '../constants.js';

export const illaoiMatchup = {
  id: 'illaoi',
  name: 'Illaoi',
  nickname: 'La Sacerdotisa del Kraken',
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/champion/Illaoi.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/passive/Illaoi_P.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/spell/IllaoiQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/spell/IllaoiW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/spell/IllaoiE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/spell/IllaoiR.png'
  },
  runes: {
    primary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png',
      keystone: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/Electrocute/Electrocute.png',
      slot1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/CheapShot/CheapShot.png',
      slot2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png',
      slot3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png'
    },
    secondary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png',
      slot1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png',
      slot2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/LastStand/LastStand.png'
    },
    statShards: {
      offense: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      flex: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      defense: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthScalingIcon.png'
    }
  },
  items: {
    starting: [
      'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/item/1055.png', // Doran's Blade
      'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/item/2003.png'  // Health Potion
    ],
    recommended: [
      'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/item/6692.png', // Eclipse
      'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/item/3006.png', // Berserker's Greaves
      'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/item/3142.png', // Youmuu's Ghostblade
      'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/item/3123.png', // Executioner's Calling
      'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/item/3814.png', // Edge of Night
      'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/item/3026.png'  // Guardian Angel
    ]
  },
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/spell/SummonerDot.png', // Ignite
    f: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/spell/SummonerFlash.png' // Flash
  },
  strategy: {
    notes: [
      'En niveles tempranos, ella es más débil; baitea su E y entra.',
      'Freezear la oleada es poderoso aquí porque su E no viaja a través de minions.',
      'Evita poner la oleada muy cerca del terreno.',
      'Matchup de farmeo.',
      'Este matchup es esencialmente un minijuego de esquivar. Si te golpea, pierdes.',
      'Esquiva su E para ganar la línea. Eso es crucial.',
      'Si falla su E, puedes tradear fuerte; si la conecta, pierdes.',
      'En late game, puede matarte fácilmente incluso si estás fed, así que capitaliza tus ventajas de early/mid game.',
      'Riven tiene la movilidad para lidiar con este matchup y también supera a Illaoi en scaling.',
      'Trata de no dejar que mate la oleada de un golpe con Q, o estarás farmeando bajo torre y esquivando su E por los próximos 10 minutos.',
      'Este matchup puede oscilar entre muy difícil y muy fácil; puedes dominarla en línea debido a tu alta movilidad para esquivar sus hechizos, pero un error puede hacerlo difícil de manejar.',
      'Executioner\'s Calling temprano no es necesario pero podría ayudar; cómpralo si tienes problemas.'
    ],
    toDo: [
      'All-in nivel 1 si es posible.',
      'Espera al nivel 3 y esquiva permanentemente sus habilidades antes de tradear.',
      'Es ganable en nivel 6, pero trata de bajarla al 60-70% de HP primero.',
      'Esquiva su E y apunta a hacerle all-in cuando esté alrededor del 60% de HP.'
    ],
    toAvoid: [
      'Tradear después de ser golpeado por su E.'
    ]
  },
  metadata: {
    patch: '15.1.1',
    dateCreated: new Date().toISOString(),
    author: 'Assistant'
  }
};