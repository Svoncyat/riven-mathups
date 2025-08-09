 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const nasusMatchup = {
  id: 'nasus',
  name: await getChampionInfo.getChampionName('Nasus'),
  nickname: await getChampionInfo.getChampionTitle('Nasus'),
  difficulty: DIFFICULTY_LEVELS.EASY,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Nasus.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Nasus_Passive.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/NasusQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/NasusW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/NasusE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/NasusR.png'
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
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7203_Whimsy.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/JackOfAllTrades/JackofAllTrades2.png'
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
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3158.png', // Ionian Boots of Lucidity
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3123.png', // Executioner's Calling
    ]
  },
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png', // Flash
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerDot.png' // Ignite
  },
  strategy: {
    notes: [
      'Haz cheese en el nivel 1 para establecer ventaja temprana.',
      'Congela la línea para evitar que stackee su Q y niegale oro.',
      'Se convierte en una amenaza en el nivel 6 o con mucha armadura.',
      'Zonéalo temprano y córrelo en el nivel 6 si está bajo de stacks.',
      'Si pusheas demasiado, espera un gank de la jungla.',
      'Si no se acerca, pierde oro. Solo gana si manejas mal la oleada.',
      'Es un matchup de farmeo; abúsalo antes de que te supere en escala.',
      'Pushear la oleada es malo; puede stackear gratis bajo torre y curarse con su pasiva.',
      'Haz daño decente, pushea la siguiente oleada y divea con tu jungla si viene.',
      'Ejerce presión en el nivel 1 caminando hacia él y forzándolo a last hit con E.',
      'Niégale stacks y curación pasiva; muchos no ejecutan esto correctamente.',
      'Evita atacarlo; el AOE de tu Q pusheará la oleada. Usa el AOE de su E para pushear hacia tu torre.',
      'Establece un freeze y tradea fuerte cuando trate de usar Q en la oleada.',
      'Si está bajo de stacks en el nivel 6, ganas. Si su CS está parejo con el tuyo, estás en problemas.',
      'Este matchup no es gratis; es fácil dejar que Nasus escale si se juega incorrectamente.',
      'Te supera en escala alrededor de 2-3 items a menos que estés significativamente adelante.',
      'Como Kayle, pushea la oleada para que rebote y congélala. Necesitas matar a Nasus antes del nivel 6.',
      'Es difícil de gankear y divear una vez que tiene items.'
    ],
    toDo: [
      'Congela la línea si es posible para negarle farm.',
      'Haz proxy farm si es posible para evitar que stackee.',
      'Castígalo cada vez que se acerque a farmear.',
      'Busca dives tempranos con la jungla.',
      'Prioridad temprana en la línea (congela si es posible).',
      'Recuerda que eventualmente te superará en escala (proxy farm si es posible).'
    ],
    toAvoid: [
      'No uses ataques básicos cuando estés withered; solo usa habilidades hasta que se acabe.',
      'No tanquees el daño de explosión de su E innecesariamente.',
      'No permitas que farmee libremente bajo torre.',
      'No extiendas trades cuando tiene muchos stacks en su Q.',
      'No ignores su potencial de escala tardía.'
    ]
  },
  lastUpdated: '2025-01-15',
  patch: '15.15.1',
  author: 'Svonccy'
};