import { DIFFICULTY_LEVELS } from '../constants.js';

export const jaxMatchup = {
  id: 'jax',
  name: 'Jax',
  nickname: 'Grandmaster at Arms',
  difficulty: DIFFICULTY_LEVELS.HARD,
  portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Jax.png',
  abilities: {
    passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Jax_RelentlessAssault.png',
    q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/JaxLeapStrike.png',
    w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/JaxEmpowerTwo.png',
    e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/JaxCounterStrike.png',
    r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/JaxRelentlessAssault.png'
  },
  runes: {
    primary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png',
      keystone: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/Electrocute/Electrocute.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/CheapShot/CheapShot.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png',
      rune3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png'
    },
    secondary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/LastStand/LastStand.png'
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
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/6692.png', // Eclipse
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3006.png', // Berserker's Greaves
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3142.png', // Youmuu's Ghostblade
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3814.png', // Edge of Night
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3156.png', // Maw of Malmortius
      'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3026.png'  // Guardian Angel
    ]
  },
  summonerSpells: {
    d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png', // Flash
    f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerDot.png' // Ignite
  },
  strategy: {
    notes: [
      'Matchup de habilidad.',
      'Iniciar con W es viable.',
      'Cuando inicies con Q y ambos lleguen a nivel 2 al mismo tiempo, toma E en nivel 2.',
      'Usa E-W cuando salte sobre ti con Q.',
      'Juega alrededor de los cooldowns de su R (Ultimate) y E (Counter Strike), ya que se vuelve muy tanque con ellos.',
      'Trata de hacer bait a su E y luego pokearlo cuando vaya por last hits.',
      'Riven puede tradear de forma segura en nivel 3. Inicia con Q, auto, W, auto, y desengaña.',
      'Jax pierde trades fuertemente después de que su E esté en cooldown.',
      'Mantén la oleada cerca de tu torre para negar los engages de Jax, trades rápidos para hacer bait a su E, luego ve por un all-in.',
      'Cuando Jax salte sobre ti, o tomará el trade o usará Q y E, lo cual puedes mitigar con tu E o buscar un all-in.',
      'Construye ventajas tempranas; Jax se vuelve fuerte con items.',
      'Prioriza CDR para evitar sus all-ins.',
      'Ten cuidado cuando su E (Counter Strike) esté disponible o cuando su ultimate esté activado.'
    ],
    toDo: [
      'Puedes usar E+W contra su combo de Counter Strike + Leap.',
      'Nivel 1 es ganable si desperdicia su E.',
      'Deja que te empuje y congela la oleada cerca de tu torre.',
      'Siempre mantén tu E disponible para mitigar su salto.',
      'Cuando trate de saltar sobre ti, usa E-W hacia atrás para prevenir su follow-up.',
      'Respeta su ultimate ya que lo hace tanque.',
      'Si Jax usa Q+E, puedes intentar un all-in o ir por un trade (Q + AA + W+E-out).',
      'Juega alrededor de cooldowns, especialmente haz bait a su E para un trade ganador.'
    ],
    toAvoid: [
      'Evita trades extendidos.',
      'No te acerques cuando tu E esté en cooldown.'
    ]
  },
  lastUpdated: '2025-01-27',
  patch: '15.15.1',
  author: 'Svonccy'
};