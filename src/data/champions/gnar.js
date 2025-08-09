 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const gnarMatchup = {
  id: 'gnar',
  name: await getChampionInfo.getChampionName('Gnar'),
  nickname: await getChampionInfo.getChampionTitle('Gnar'),
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Gnar.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Gnar_Passive.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GnarQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GnarW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GnarE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GnarR.png',
  },
  runes: {
    primary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png',
      keystone: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Conqueror/Conqueror.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Triumph.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png',
      rune3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/LastStand/LastStand.png',
    },
    secondary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7204_Resolve.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Resolve/BonePlating/BonePlating.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/Unflinching/Unflinching.png',
    },
    statShards: {
      shard1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthScalingIcon.png'
    },
  },
  items: {
    starting: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1055.png', // Doran's Blade
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png',  // Health Potion
    ],
    recommended: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3071.png', // Black Cleaver
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3068.png', // Sunfire Aegis
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3158.png', // Ionian Boots of Lucidity
    ],
  },
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png', // Flash
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerTeleport.png', // Teleport
  },
  strategy: {
    notes: [
      'Intenta hacerle cheese a nivel 1.',
      'Respeta el potencial de all-in de Mega Gnar.',
      'Se vuelve un desafío cuando consigue la Fuerza de la Trinidad; puede espaciarte y pokearte fácilmente con ella.',
      'Es mejor buscar asesinatos entre tu nivel 6 y su pico de poder con la Fuerza de la Trinidad.',
      'Enfrentamiento de habilidad.',
      'No uses más de una Q para acortar distancias y, si es posible, guarda tu E para retirarte.',
      'Gnar tiene un rango de autoataque corto, así que puedes acercarte a él.',
      'Se vuelve más fácil una vez que consigues la Cuchilla Negra.',
      'Compra rápidamente las Tabi de acero para mitigar su daño; intenta espaciar bien para que no pueda kitearte fácilmente.',
      'Si el espaciado de Gnar es bueno, puede ser una molestia.',
      'Abusa de su largo enfriamiento de la E con tus enfriamientos más cortos.',
      'Ganas después del nivel 6 si estáis igualados.',
    ],
    toDo: [
      'Intenta conseguir prioridad de empuje si es posible.',
      'Realiza intercambios cortos.',
      'No saltes detrás de él o conseguirá su segundo salto (E).',
      'Espera hasta el nivel 3 antes de intercambiar de forma agresiva.',
      'Puedes cancelar su salto (E) con tu tercera Q (Alas Rotas).',
      'Intenta activar su Revestimiento de Huesos con Qs extendidas.',
    ],
    toAvoid: [
      'Evita luchar contra él en forma de Mega Gnar a menos que puedas esquivar sus hechizos eficazmente.',
      'Evita hacerle all-in cerca de una oleada de súbditos, ya que puede escapar fácilmente con su movilidad.',
    ],
  },
  lastUpdated: '2025-08-07',
  patch: '15.15.1',
  author: 'Svonccy',
};