 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const ireliaMatchup = {
  id: 'irelia',
  name: await getChampionInfo.getChampionName('Irelia'),
  nickname: await getChampionInfo.getChampionTitle('Irelia'),
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/champion/Irelia.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/passive/Irelia_P.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/spell/IreliaQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/spell/IreliaW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/spell/IreliaE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/spell/IreliaR.png'
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
      'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/item/3814.png', // Edge of Night
      'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/item/3156.png', // Maw of Malmortius
      'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/item/3026.png'  // Guardian Angel
    ]
  },
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/spell/SummonerDot.png', // Ignite
    f: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/spell/SummonerFlash.png' // Flash
  },
  strategy: {
    notes: [
      'Castígala con W cuando salte a un minion.',
      'Esquiva su E con tu E/Qs.',
      'Tú haces más daño; ella solo gana si mal manejas la oleada.',
      'Matchup de habilidad.',
      'Funciona cuando no tiene 5 stacks; asegúrate de que no pueda conseguirlos después de tu combo.',
      'Matchup ligeramente favorable para Riven. Su condición de victoria es su pasiva y conectar su stun.',
      'Puede perseguirte con solo un ítem.',
      'Una buena Irelia tratará de pokearte mucho haciendo Q a minions cercanos cuando la oleada empuje hacia tu torre.',
      'Riven puede ser outplayed fácilmente ahora, y el primer spike de Irelia es mucho más barato que antes.',
      'Agrede nivel 1 si empezó E, pero ten cuidado de no overtradear. Si consigue su pasiva, gana fácilmente. Usa tu E para esquivar su E.',
      'Es un matchup de habilidad dependiendo de la oleada. Si la oleada empuja hacia ella, ganas los trades y all-ins.',
      'Si la oleada empuja hacia ti, pierdes los trades porque tiene ventaja de minions y puede matar tus minions de un golpe para stackear su pasiva.'
    ],
    toDo: [
      'All-in nivel 1.',
      'Ve por trades cortos cuando haga last-hit a un minion con su Q.',
      'No dudes en usar tus habilidades para esquivar su stun.',
      'Ella gana trades extendidos, así que posiciona tu oleada cerca de tu torre o evita trades largos cuando estés empujado.',
      'No gastes todas tus habilidades de una vez.',
      'Espera para lanzar tu R2; tratará de esquivarlo con su Q.'
    ],
    toAvoid: [
      'Tradear después de que conecte su stun.',
      'Usar tu combo/R2 cuando esté en su W.'
    ]
  },
  metadata: {
    patch: '15.1.1',
    dateCreated: new Date().toISOString(),
    author: 'Assistant'
  }
};