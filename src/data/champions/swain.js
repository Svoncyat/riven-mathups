import { DIFFICULTY_LEVELS } from '../constants.js';
import { generateImageUrl } from '../constants.js';

export const swainMatchup = {
  id: 'swain',
  name: 'Swain',
  nickname: 'El Maestro Táctico',
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: await generateImageUrl.championPortrait('Swain'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Swain_Passive'),
    q: await generateImageUrl.championSpell('SwainQ'),
    w: await generateImageUrl.championSpell('SwainW'),
    e: await generateImageUrl.championSpell('SwainE'),
    r: await generateImageUrl.championSpell('SwainR'),
  },
  
  runes: {
    primary: {
      tree: await generateImageUrl.runeTree('7201_Precision'),
      keystone: await generateImageUrl.rune('Precision/Conqueror/Conqueror'),
      rune1: await generateImageUrl.rune('Precision/Triumph'),
      rune2: await generateImageUrl.rune('Precision/LegendHaste/LegendHaste'),
      rune3: await generateImageUrl.rune('Sorcery/LastStand/LastStand')
    },
    secondary: {
      tree: await generateImageUrl.runeTree('7204_Resolve'),
      rune1: await generateImageUrl.rune('Resolve/BonePlating/BonePlating'),
      rune2: await generateImageUrl.rune('Resolve/Overgrowth/Overgrowth')
    },
    statShards: {
      shard1: await generateImageUrl.statShard('StatModsAdaptiveForceIcon'),
      shard2: await generateImageUrl.statShard('StatModsAdaptiveForceIcon'),
      shard3: await generateImageUrl.statShard('StatModsHealthPlusIcon')
    }
  },
  
  items: {
    starting: [
      await generateImageUrl.item('1055'), // Doran's Blade
      await generateImageUrl.item('2003')  // Health Potion
    ],
    recommended: [
      await generateImageUrl.item('3071'), // Black Cleaver
      await generateImageUrl.item('3123')  // Executioner's Calling
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },
  
  strategy: {
    notes: [
      'Swain tiende a evitar pelear temprano; explota esto para ganar ventaja.',
      'Cuando Swain ultea, desengánchate brevemente para interrumpirla, luego re-engánchate.'
    ],
    toDo: [
      'Explota el juego temprano débil de Swain para establecer dominio en línea.',
      'Compra Llamada del Verdugo para reducir la curación de Swain de su ulti y pasiva.',
      'Coordínate con tu jungla para capitalizar la vulnerabilidad temprana de Swain.'
    ],
    toAvoid: [
      'Engancharte con Swain mientras su ulti (Ascensión Demoníaca) está activa; desengánchate hasta que expire o sea interrumpida.',
      'Subestimar la sustentación de Swain de su ulti y pasiva, especialmente en peleas prolongadas.',
      'Permitir que Swain escale cómodamente hacia el juego medio donde se vuelve más impactante.'
    ]
  },
  
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};