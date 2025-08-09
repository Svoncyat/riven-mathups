 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const cassiopeiaMatchup = {
  id: 'cassiopeia',
  name: await getChampionInfo.getChampionName('Cassiopeia'),
  nickname: await getChampionInfo.getChampionTitle('Cassiopeia'),
  difficulty: DIFFICULTY_LEVELS.HARD,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Cassiopeia.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Cassiopeia_Passive.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/CassiopeiaQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/CassiopeiaW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/CassiopeiaE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/CassiopeiaR.png'
  },
  runes: {
    primary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png',
      keystone: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Conqueror/Conqueror.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Triumph.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png',
      rune3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/LastStand/LastStand.png'
    },
    secondary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7202_Sorcery.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/NimbusCloak/6361.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/Transcendence/Transcendence.png'
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
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3111.png', // Mercury's Treads
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3155.png' // Hexdrinker
    ]
  },
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png', // Flash
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerTeleport.png' // Teleport
  },
  strategy: {
    notes: [
      'Intenta hacerle "cheese" a nivel 1.',
      'Provoca que use su Q (Explosión Nociva) y mantén tu E (Ímpetu valeroso) lista para esquivarla.',
      'El juego temprano es difícil; enfócate en agotar su maná o espera a tener tu definitiva en nivel 6.',
      'Asegura la prioridad en la línea para evitar que te castigue fácilmente.',
      'Esquiva sus Qs usando tu movilidad. Puedes evitar su R (Mirada petrificante) dándote la vuelta justo cuando la lance.',
      'Guarda tu E para retirarte de intercambios desfavorables o emboscadas.',
      'La clave es concentrarse en esquivar sus habilidades.'
    ],
    toDo: [
      'Esquiva todas sus habilidades y predice el uso de su W (Miasma) y R.',
      'Presiona para mantener la prioridad en la línea y evitar su pokeo constante.',
      'Utiliza tus habilidades (Q y E) para esquivar sus Qs.',
      'Busca intercambios de daño cortos y rápidos.',
      'Usa la extensión de tu Q para un "all-in" efectivo, especialmente después de comprar el Martillo de guerra de Caulfield.',
      'Esquiva su definitiva dándote la vuelta en el último segundo, ¡al estilo Faker!',
      'Provoca que gaste su W para crear una ventana de oportunidad para atacar.'
    ],
    toAvoid: [
      'Ser alcanzado por cualquiera de sus habilidades.'
    ]
  },
  lastUpdated: '2025-08-07',
  patch: '15.15.1',
  author: 'Svonccy'
};