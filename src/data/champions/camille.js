import { DIFFICULTY_LEVELS } from '../constants.js';

export const camilleMatchup = {
  id: 'camille',
  name: 'Camille',
  nickname: 'La Sombra de Acero',
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Camille.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Camille_Passive.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/CamilleQ.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/CamilleW.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/CamilleE.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/CamilleR.png'
  },
  runes: {
    primary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png',
      keystone: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Conqueror/Conqueror.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Triumph.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/LegendHaste/LegendHaste.png',
      rune3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/LastStand/LastStand.png'
    },
    secondary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7203_Whimsy.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/JackOfAllTrades/JackofAllTrades2.png'
    },
    statShards: {
      shard1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsCDRScalingIcon.png',
      shard2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
      shard3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthPlusIcon.png'
    }
  },
  items: {
    starting: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1055.png', // Doran's Blade
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png' // Health Potion
    ],
    recommended: [
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3123.png' // Executioner's Calling
    ]
  },
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png', // Flash
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerDot.png' // Ignite
  },
  strategy: {
    notes: [
      'Enfrentamiento de habilidad.',
      'Enfoque en nivel 1: Rompe su Placa Ósea y el escudo de su pasiva (18 seg CD) cuando la oleada choque.',
      'Evita tradear en nivel 1 hasta que el escudo de su pasiva o Placa Ósea estén inactivas.',
      'Baitea el escudo de su pasiva y rompe la Placa Ósea ANTES de buscar intercambios cortos.',
      'Aprovecha sus altos enfriamientos (CD)',
      'El juego temprano de Riven es ligeramente superior al de Camille.',
      'El nivel 6 de Riven es MUY superior al de Camille.',
      'Aplica CC (control de masas) a Camille antes de usar Tajo al Viento (R2) para evitar que lo esquive con su ultimate (R).',
      'Usa tu movilidad para esquivar Protocolo de Precisión (Q2) de Camille.',
      'Cancela el E de Camille con CC apenas se ancle a una pared no antes (ej: atúrdela mientras vuela hacia ti).',
      'La mayoría de Camille llevan Ignite/TP (sin Flash) para compensar su movilidad.',
      'Usa tu W (Estallido Ki) o tercer Q (Alas Quebradas) para romper su E (Gancho/Anclaje a la pared).',
      'Puedes forzar un all-in al nivel 6 si Camille tiene 60-70% de vida, especialmente sin su E.',
      'Con timing preciso, puedes interrumpir su E2 con tu W.',
      'Respeta el escudo de su pasiva.',
    ],
    toDo: [
      'Al nivel 1 fuerza un all-in si rompiste su escudo/Placa Ósea',
      'Guarda tu E (Valor) para esquivar su E',
      'Intercambios cortos: Usa tu E para absorber su autoataque y quemar su escudo pasivo',
      'Engaña su pasiva: Déjala golpearte una vez (óptimo con tu E activo)',
      'Tradea solo cuando su pasiva esté en enfriamiento',
      'Cancela su E (Anclaje) con tu W o tercer Q',
      'Retén Tajo al Viento (R2) para baitear o contrarrestar su ultimate (R)',
      'All-in nivel 6: Si tiene 60-70% de vida y sin E',
      'Usa habilidades de movilidad para esquivar su W (Barrido Táctico)'
    ],
    toAvoid: [
      'Intentar intercambios cortos tras ser golpeado por su E.',
      'Tradear con su escudo pasivo activo.',
      'Pararte cerca de paredes cuando su E está disponible.'
    ]
  },
  lastUpdated: '2025-08-07',
  patch: '15.15.1',
  author: 'Svonccy'
};