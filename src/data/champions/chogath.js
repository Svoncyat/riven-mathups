 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';


export const chogathMatchup = {
  id: 'chogath',
  name: await getChampionInfo.getChampionName('Chogath'),
  nickname: await getChampionInfo.getChampionTitle('Chogath'),
  difficulty: DIFFICULTY_LEVELS.EASY,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Chogath.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/GreenTerror_TailSpike.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/Rupture.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/FeralScream.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/VorpalSpikes.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/Feast.png'
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
      'Es un enfrentamiento de farmeo.',
      'Respeta su curación pasiva; congela la línea al principio para negarle súbditos.',
      'Intenta desgastarlo al principio y fuérzalo a empujar la línea para poder castigarlo.',
      'Busca intercambios largos y "all-ins" cuando su Q (Ruptura) no esté disponible.',
      'La movilidad de Riven es clave para contrarrestar las habilidades de Cho\'Gath.',
      'Cho\'Gath gana por su sustain; busca "all-ins" decisivos cuando tengas la oportunidad.',
      'Un buen Cho\'Gath es difícil de vencer; gana el juego temprano si empieza con la E y más tarde con su silencio.',
      'Generalmente deberías ganar, a menos que te quedes peleando dentro de su oleada de súbditos.',
      'Si te silencia, simplemente aléjate.'
    ],
    toDo: [
      'Gana la prioridad de empuje en la línea.',
      'Intenta un "all-in" a nivel 1.',
      'Realiza intercambios de daño cortos y precisos.',
      'Usa tus Qs para posicionarte detrás de él y esquivar su W (Grito Feral) o su Q.',
      'A nivel 6, lánzate con todo cuando su vida esté entre el 55% y el 65%.',
      'Anticipa su silencio y usa tu E (Ímpetu valeroso) para absorber el daño gracias a tu tiempo de reacción.'
    ],
    toAvoid: [
      'Evita intercambios en los que recibas más del 50% del daño que tú mismo infliges.',
      'No te armes completamente con letalidad o daño de ataque a menos que tengas una ventaja abrumadora.'
    ]
  },
  lastUpdated: '2025-08-07',
  patch: '15.15.1',
  author: 'Svonccy'
};