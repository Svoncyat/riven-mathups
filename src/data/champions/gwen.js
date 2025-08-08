import { DIFFICULTY_LEVELS } from '../constants.js';

export const gwenMatchup = {
  id: 'gwen',
  name: 'Gwen',
  nickname: 'La Costurera Sagrada',
  difficulty: DIFFICULTY_LEVELS.EASY,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Gwen.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Gwen_Passive.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GwenQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GwenW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GwenE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GwenR.png'
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
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3158.png', // Ionian Boots of Lucidity
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3123.png'  // Executioner's Calling
    ]
  },
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png', // Flash
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerDot.png' // Ignite
  },
  strategy: {
    notes: [
      'Tienes más daño en el juego temprano.',
      'Los jugadores de Gwen suelen usar Ignición o Teletransporte.',
      'Respeta la resistencia de su W (Niebla Sagrada); también puede esquivar tu R2 (Cuchillada de Viento) con ella.',
      'Ve por intercambios cortos.',
      'Riven gana antes de que Gwen complete su primer objeto. Abúsala tanto como sea posible hasta entonces.',
      'Carril gratuito desde el nivel 3 en adelante.',
      'Si están parejos, evita buscar un all-in donde ambos estén con vida completa.',
      'Se necesita Llamada del Verdugo pero no muy temprano (puedes comprarlo después de tu objeto mítico).',
      'La mayoría de jugadores de Gwen usan Ignición o Teletransporte.'
    ],
    toDo: [
      'Cuando Gwen esté completamente cargada, mantén distancia de su combo Q-E y espera hasta que lo use.',
      'Cada vez que desperdicie su Q (¡Tijeretazo!), es una ventana para intercambiar con ella.',
      'Su único acercamiento es su E (Salto y Cuchillada). Juega alrededor de esto durante intercambios cortos; salta fuera de su rango para evitar castigo.',
      'Oportunidad de all-in si usa su E y Q y termina lo suficientemente cerca que no necesitas Q para acercarte.',
      'Inicia un intercambio para provocar su W (Niebla Sagrada), luego continúa con un all-in usando Ignición y tu definitiva.',
      'Usa intercambios cortos para desgastarla.',
      'Aprovecha las ventanas cuando sus habilidades estén en enfriamiento.',
      'Controla la oleada de súbditos para maximizar tu ventaja temprana.'
    ],
    toAvoid: [
      'Tanquear su definitiva (Costura Final); siempre muévete con tus Qs para evitar ser golpeado en el mismo lugar repetidamente.',
      'Hacer all-in en niveles 1-2 si ella tiene Ignición y tú no.',
      'Intercambiar cuando esté dentro de su W (Niebla Sagrada) ya que tendrá resistencia adicional.',
      'Extender intercambios cuando ella tenga stacks de su pasiva acumulados.',
      'Subestimar su potencial de curación contra campeones.'
    ]
  },
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};