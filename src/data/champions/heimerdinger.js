 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const heimerdingerMatchup = {
  id: 'heimerdinger',
  name: await getChampionInfo.getChampionName('Heimerdinger'),
  nickname: await getChampionInfo.getChampionTitle('Heimerdinger'),
  difficulty: DIFFICULTY_LEVELS.HARD,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/champion/Heimerdinger.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/passive/Heimerdinger_Passive.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/spell/HeimerdingerQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/spell/HeimerdingerW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/spell/HeimerdingerE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.1.1/img/spell/HeimerdingerR.png'
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
      'Haz cheese en nivel 1 (en el arbusto).',
      'Similar a Cassiopeia, evita recibir daño y espera una oportunidad.',
      'Busca matarlo en nivel 6.',
      'Él empujará constantemente; pide ayuda a tu jungla.',
      'Matchup de farmeo.',
      'Típicamente usa Ignite/TP.',
      'Evita all-ins a vida completa.',
      'Consigue la ayuda de tu jungla temprano debido a que empuja torres.',
      'Enfócate en golpear sus torretas.',
      'Esquiva su stun para ganar trades y escaramuzas.',
      'En nivel 6, alterna Qs y haz all-in cuando se mal posicione.',
      'Tú ganas el scaling; solo sobrevive la línea.'
    ],
    toDo: [
      'Consigue la ayuda de tu jungla; las torretas lo hacen difícil temprano.',
      'Baitea su W con un trade, luego haz all-in con Ignite y ulti.'
    ],
    toAvoid: [
      'Engagear con tres torretas disparándote.'
    ]
  },
  metadata: {
    patch: '15.1.1',
    dateCreated: new Date().toISOString(),
    author: 'Assistant'
  }
};