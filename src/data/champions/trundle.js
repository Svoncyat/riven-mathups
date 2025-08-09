 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const trundleMatchup = {
  id: 'trundle',
  name: await getChampionInfo.getChampionName('Trundle'),
  nickname: await getChampionInfo.getChampionTitle('Trundle'),
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  portrait: await generateImageUrl.championPortrait('Trundle'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('Trundle_Passive'),
    q: await generateImageUrl.championSpell('TrundleQ'),
    w: await generateImageUrl.championSpell('TrundleW'),
    e: await generateImageUrl.championSpell('TrundleE'),
    r: await generateImageUrl.championSpell('TrundleR'),
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
      'Enfócate en tradeos cortos para evitar su sustentación y ventajas de tradeo.',
      'Busca bajar a Trundle y burstearlo con Ignite en nivel 6.',
      'Matchup orientado al farmeo; juega seguro y busca oportunidades.',
      'Trundle countera a Riven temprano; considera asistencia de la jungla.',
      'Con buen laning, Trundle puede ser matado antes y después del nivel 6.',
      'La pasiva de Trundle otorga regeneración de vida cerca de enemigos muriendo.',
      'Si Trundle hace split, coordínate con tu equipo en lugar de tratar de detenerlo solo.'
    ],
    toDo: [
      'Juega defensivamente y espera asistencia de jungla o mid lane, especialmente si Trundle construye armadura.',
      'En teamfights, enfócate en burstear a Trundle con tu equipo para neutralizar su impacto.',
      'Baitea las habilidades de Trundle (pilar, W, Q) para agotar su maná y reducir su efectividad.'
    ],
    toAvoid: [
      'Evita ser mordido por Trundle, ya que te ralentiza y le otorga daño de ataque adicional.',
      'Abstente de pelear contra Trundle cuando su W (Dominio Congelado) esté activo, ya que proporciona bonificaciones significativas.',
      'Evita batallas prolongadas con Trundle mientras su ulti (Subyugar) esté activa, ya que roba tus estadísticas.'
    ]
  },
  
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};