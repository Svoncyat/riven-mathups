 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const settMatchup = {
  id: 'sett',
  name: await getChampionInfo.getChampionName('Sett'),
  nickname: await getChampionInfo.getChampionTitle('Sett'),
  difficulty: DIFFICULTY_LEVELS.EASY,
  portrait: await generateImageUrl.championPortrait('Sett'),
  
  abilities: {
    passive: await generateImageUrl.championPassive('SettPassive'),
    q: await generateImageUrl.championSpell('SettQ'),
    w: await generateImageUrl.championSpell('SettW'),
    e: await generateImageUrl.championSpell('SettE'),
    r: await generateImageUrl.championSpell('SettR'),
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
      await generateImageUrl.item('3047'), // Plated Steelcaps
      await generateImageUrl.item('3123')  // Executioner's Calling
    ]
  },
  
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'),
    f: await generateImageUrl.summonerSpell('SummonerDot')
  },
  
  strategy: {
    notes: [
      'Juega para remover su blindaje óseo en nivel 1.',
      'Desde el nivel 3 en adelante, provoca su E y blindaje óseo usando W - AA - EQ para intercambiar efectivamente.',
      'Su E y W tienen enfriamientos largos.',
      'Enfrentamiento de habilidad.',
      'Puedes esquivar su W efectivamente con E o Q; considera saltar hacia él.',
      'Ten cuidado de la capacidad de Sett de canalizar W y Flash simultáneamente.',
      'Cuando vaya a último golpear súbditos, usa W para aturdir y auto; asegúrate de que Q y E estén disponibles para desengancharte y evitar su represalia con E.',
      'Sett típicamente gana este enfrentamiento directamente, así que enfócate en intercambios cortos. Q, auto, W auto, luego EQ lejos inmediatamente para evitar la E de Sett.',
      'Guarda al menos un hechizo de movilidad para esquivar su daño de W y evitar sobrecomprometerte en intercambios.',
      'Solo puedes intercambiar efectivamente después del nivel 3; provoca su E y esquiva su W con tus saltos para preparar un all-in.',
      'Enfrentamiento complicado debido a la sustentación de Sett y capacidad de interrumpir tus combos. Evita intercambios extendidos temprano y enfócate en intercambios cortos cuando sus habilidades estén arriba.',
      'Si sobrevives la fase de línea sin morir, superas significativamente a Sett.'
    ],
    toDo: [
      'Engánchate en intercambios cortos hasta que esté lo suficientemente bajo para que potencialmente puedas matarlo con tu definitiva arriba.',
      'El nivel 1 solo es ganable si empieza W y la desperdicia; de lo contrario, evita el all-in de nivel 1.',
      'Cuando seas jalado por la W de Sett y no aturdido, atúrdelo de vuelta y desengánchate.',
      'Provoca su E posicionándote en el borde de su hitbox; pretende caminar hacia adentro, luego desengánchate rápidamente.',
      'En nivel 6, busca hacer all-in cuando Sett esté alrededor del 60% de vida y su W esté en enfriamiento.'
    ],
    toAvoid: [
      'Evita intercambiar inmediatamente después de que active su aturdimiento de E en ti.',
      'Evita intercambiar cuando su E no esté en enfriamiento.'
    ]
  },
  
  lastUpdated: '2025-01-16',
  patch: '15.15.1',
  author: 'Svonccy'
};