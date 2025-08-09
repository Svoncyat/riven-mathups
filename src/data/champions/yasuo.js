 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const yasuoMatchup = {
  id: 'yasuo',
  name: await getChampionInfo.getChampionName('Yasuo'),
  nickname: await getChampionInfo.getChampionTitle('Yasuo'),
  difficulty: DIFFICULTY_LEVELS.EASY,
  portrait: await generateImageUrl.championPortrait('Yasuo'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Yasuo_Passive'),
    q: await generateImageUrl.championSpell('YasuoQW'),
    w: await generateImageUrl.championSpell('YasuoWMovingWall'),
    e: await generateImageUrl.championSpell('YasuoDashWrapper'),
    r: await generateImageUrl.championSpell('YasuoRKnockUpComboW'),
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
      rune2: await generateImageUrl.rune('Sorcery/Unflinching/Unflinching')
    },
    statShards: {
      shard1: await generateImageUrl.statShard('StatModsCDRScalingIcon'),
      shard2: await generateImageUrl.statShard('StatModsAdaptiveForceIcon'),
      shard3: await generateImageUrl.statShard('StatModsArmorIcon')
    }
  },
  
  items: {
    starting: [
      await generateImageUrl.item('1036'), // Long Sword
      await generateImageUrl.item('2003') // Health Potion
    ],
    recommended: [
      await generateImageUrl.item('1029'), // Cloth Armor
      await generateImageUrl.item('3047') // Plated Steelcaps
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },
  
  strategy: {
    notes: [
      'Ve por intercambios cortos.',
      'Cancela su Q con tanto tu W como Q3.',
      'Utiliza arbustos para hacer difícil que te castigue.',
      'Tu nivel 6 es superior al suyo.',
      'Matchup de habilidad, pero generalmente mejor para Riven.',
      'Esquiva su Q y quita su escudo antes de ir por un all-in.',
      'Engagea cuando tenga 0 stacks o arriesga castigo con tornado y AAs gratis.',
      'Considera conseguir botas de acero plateado si tienes problemas.',
      'Lo superas en escala si esperas pacientemente; su dominio es principalmente pre-6.'
    ],
    toDo: [
      'All-in de nivel 1.',
      'Mantén tu mouse sobre él cuando uses la 3ra Q para que lo siga incluso si hace dash.',
      'Stunéalo antes de R2 para evitar que use Muro de Viento efectivamente.',
      'Solo ve por intercambios cortos en niveles tempranos.',
      'En nivel 6, potencialmente puedes matarlo de un golpe.',
      'Esquiva sus Qs en rango cercano moviéndote impredeciblemente (zigzagueando).',
      'Usa arbustos para resetear su agresión y hacer intercambios seguros.'
    ],
    toAvoid: [
      'Ir por intercambios extendidos en niveles tempranos.',
      'Desperdiciar descuidadamente todos tus hechizos cuando estés empujado.',
      'Pelear en tus oleadas de minions (puede usarlos para kitearte).',
      'Engagear cuando tenga tornado cargado (2 stacks de Q).',
      'Subestimar su potencial de daño con escudo pasivo activo.'
    ]
  },
  
  lastUpdated: '2025-01-20',
  patch: '15.15.1',
  author: 'Svonccy'
};