// Importar todos los matchups individuales
import { aatroxMatchup } from './champions/aatrox.js';
import { akaliMatchup } from './champions/akali.js';
import { akshanMatchup } from './champions/akshan.js';
import { briarMatchup } from './champions/briar.js';
import { camilleMatchup } from './champions/camille.js';
import { cassiopeiaMatchup } from './champions/cassiopeia.js';
import { chogathMatchup } from './champions/chogath.js';
import { dariusMatchup } from './champions/darius.js';
import { drmundoMatchup } from './champions/drmundo.js';
import { fioraMatchup } from './champions/fiora.js';
import { galioMatchup } from './champions/galio.js';
import { gangplankMatchup } from './champions/gangplank.js';
import { garenMatchup } from './champions/garen.js';
import { gnarMatchup } from './champions/gnar.js';
import { gwenMatchup } from './champions/gwen.js';
import { hecarimMatchup } from './champions/hecarim.js';
import { heimerdingerMatchup } from './champions/heimerdinger.js';
import { illaoiMatchup } from './champions/illaoi.js';
import { ireliaMatchup } from './champions/irelia.js';
import { jaxMatchup } from './champions/jax.js';
import { jayceMatchup } from './champions/jayce.js';
import { karmaMatchup } from './champions/karma.js';
import { kayleMatchup } from './champions/kayle.js';
import { kennenMatchup } from './champions/kennen.js';
import { kledMatchup } from './champions/kled.js';
import { lilliaMatchup } from './champions/lillia.js';
import { lissandraMatchup } from './champions/lissandra.js';
import { malphiteMatchup } from './champions/malphite.js';
import { maokaiMatchup } from './champions/maokai.js';
import { mordekaizerMatchup } from './champions/mordekaiser.js';
import { nasusMatchup } from './champions/nasus.js';
import { neekoMatchup } from './champions/neeko.js';
import { ornnMatchup } from './champions/ornn.js';
import { pantheonMatchup } from './champions/pantheon.js';
import { poppyMatchup } from './champions/poppy.js';
import { quinnMatchup } from './champions/quinn.js';
import { rammusMatchup } from './champions/rammus.js';
import { renektonMatchup } from './champions/renekton.js';
import { rengarMatchup } from './champions/rengar.js';
import { rumbleMatchup } from './champions/rumble.js';
import { ryzeMatchup } from './champions/ryze.js';
import { sejuaniMatchup } from './champions/sejuani.js';
import { settMatchup } from './champions/sett.js';
import { shenMatchup } from './champions/shen.js';
import { shyvanaMatchup } from './champions/shyvana.js';
import { singedMatchup } from './champions/singed.js';
import { sionMatchup } from './champions/sion.js';
import { skarnerMatchup } from './champions/skarner.js';
import { swainMatchup } from './champions/swain.js';
import { sylasMatchup } from './champions/sylas.js';
import { tahmkenchMatchup } from './champions/tahmkench.js';
import { teemoMatchup } from './champions/teemo.js';
import { trundleMatchup } from './champions/trundle.js';
import { tryndamereMatchup } from './champions/tryndamere.js';
import { twistedfateMatchup } from './champions/twistedfate.js';
import { udyrMatchup } from './champions/udyr.js';
import { urgotMatchup } from './champions/urgot.js';
import { vayneMatchup } from './champions/vayne.js';
import { viegoMatchup } from './champions/viego.js';
import { vladimirMatchup } from './champions/vladimir.js';
import { volibearMatchup } from './champions/volibear.js';
import { warwickMatchup } from './champions/warwick.js';
import { wukongMatchup } from './champions/wukong.js';
import { yasuoMatchup } from './champions/yasuo.js';
import { yoneMatchup } from './champions/yone.js';
import { yorickMatchup } from './champions/yorick.js';
import { zacMatchup } from './champions/zac.js';
import { ksanteMatchup } from './champions/ksante.js';
import { gragasMatchup } from './champions/gragas.js';
import { gravesMatchup } from './champions/graves.js';
import { DIFFICULTY_LEVELS } from './constants.js';

// Array principal de matchups
export const matchupsData = [
  aatroxMatchup,
  akaliMatchup,
  akshanMatchup,
  briarMatchup,
  camilleMatchup,
  cassiopeiaMatchup,
  chogathMatchup,
  dariusMatchup,
  drmundoMatchup,
  fioraMatchup,
  galioMatchup,
  gangplankMatchup,
  garenMatchup,
  gnarMatchup,
  gragasMatchup,
  gravesMatchup,
  gwenMatchup,
  hecarimMatchup,
  heimerdingerMatchup,
  illaoiMatchup,
  ireliaMatchup,
  jaxMatchup,
  jayceMatchup,
  ksanteMatchup,
  karmaMatchup,
  kayleMatchup,
  kennenMatchup,
  kledMatchup,
  lilliaMatchup,
  lissandraMatchup,
  malphiteMatchup,
  maokaiMatchup,
  mordekaizerMatchup,
  nasusMatchup,
  neekoMatchup,
  ornnMatchup,
  pantheonMatchup,
  poppyMatchup,
  quinnMatchup,
  rammusMatchup,
  renektonMatchup,
  rengarMatchup,
  rumbleMatchup,
  ryzeMatchup,
  sejuaniMatchup,
  settMatchup,
  shenMatchup,
  shyvanaMatchup,
  singedMatchup,
  sionMatchup,
  skarnerMatchup,
  swainMatchup,
  sylasMatchup,
  tahmkenchMatchup,
  teemoMatchup,
  trundleMatchup,
  tryndamereMatchup,
  twistedfateMatchup,
  udyrMatchup,
  urgotMatchup,
  vayneMatchup,
  viegoMatchup,
  vladimirMatchup,
  volibearMatchup,
  warwickMatchup,
  wukongMatchup,
  yasuoMatchup,
  yoneMatchup,
  yorickMatchup,
  zacMatchup
];

// Funciones utilitarias para filtrar y buscar matchups
export const matchupUtils = {
  /**
   * Obtiene un matchup por su ID
   * @param {string} id - ID del campeón
   * @returns {Object|undefined} - Datos del matchup o undefined si no se encuentra
   */
  getMatchupById: (id) => {
    return matchupsData.find(matchup => matchup.id === id);
  },

  /**
   * Filtra matchups por nivel de dificultad
   * @param {string} difficulty - Nivel de dificultad (easy, medium, hard, extreme)
   * @returns {Array} - Array de matchups filtrados
   */
  getMatchupsByDifficulty: (difficulty) => {
    return matchupsData.filter(matchup => matchup.difficulty === difficulty);
  },

  /**
   * Busca matchups por nombre (búsqueda parcial, insensible a mayúsculas)
   * @param {string} searchTerm - Término de búsqueda
   * @returns {Array} - Array de matchups que coinciden
   */
  searchMatchups: (searchTerm) => {
    const term = searchTerm.toLowerCase();
    return matchupsData.filter(matchup => 
      matchup.name.toLowerCase().includes(term) ||
      matchup.nickname.toLowerCase().includes(term)
    );
  },

  /**
   * Obtiene estadísticas de los matchups
   * @returns {Object} - Objeto con estadísticas
   */
  getMatchupStats: () => {
    const stats = {
      total: matchupsData.length,
      byDifficulty: {}
    };

    // Contar por dificultad
    Object.values(DIFFICULTY_LEVELS).forEach(difficulty => {
      stats.byDifficulty[difficulty] = matchupsData.filter(
        matchup => matchup.difficulty === difficulty
      ).length;
    });

    return stats;
  },

  /**
   * Valida que un matchup tenga la estructura correcta
   * @param {Object} matchup - Objeto matchup a validar
   * @returns {boolean} - true si es válido, false si no
   */
  validateMatchup: (matchup) => {
    const requiredFields = ['id', 'name', 'nickname', 'difficulty', 'portrait', 'abilities', 'runes', 'items', 'summonerSpells', 'strategy'];
    return requiredFields.every(field => matchup.hasOwnProperty(field));
  }
};

// Exportar constantes también
export { DIFFICULTY_LEVELS } from './constants.js';

// Exportar matchups individuales para uso específico
export {
  aatroxMatchup,
  akaliMatchup,
  akshanMatchup,
  briarMatchup,
  camilleMatchup,
  cassiopeiaMatchup,
  chogathMatchup,
  dariusMatchup,
  drmundoMatchup,
  fioraMatchup,
  galioMatchup,
  gangplankMatchup,
  garenMatchup,
  gnarMatchup,
  gragasMatchup,
  gravesMatchup,
  gwenMatchup,
  hecarimMatchup,
  heimerdingerMatchup,
  illaoiMatchup,
  ireliaMatchup,
  jaxMatchup,
  jayceMatchup,
  ksanteMatchup,
  karmaMatchup,
  kayleMatchup,
  kennenMatchup,
  kledMatchup,
  lilliaMatchup,
  lissandraMatchup,
  malphiteMatchup,
  maokaiMatchup,
  mordekaizerMatchup,
  nasusMatchup,
  neekoMatchup,
  ornnMatchup,
  pantheonMatchup,
  poppyMatchup,
  quinnMatchup,
  rammusMatchup,
  renektonMatchup,
  rengarMatchup,
  rumbleMatchup,
  ryzeMatchup,
  sejuaniMatchup,
  settMatchup,
  shenMatchup,
  shyvanaMatchup,
  singedMatchup,
  sionMatchup,
  skarnerMatchup,
  swainMatchup,
  sylasMatchup,
  tahmkenchMatchup,
  teemoMatchup,
  trundleMatchup,
  tryndamereMatchup,
  twistedfateMatchup,
  udyrMatchup,
  urgotMatchup,
  vayneMatchup,
  viegoMatchup,
  vladimirMatchup,
  volibearMatchup,
  warwickMatchup,
  wukongMatchup,
  yasuoMatchup,
  yoneMatchup,
  yorickMatchup,
  zacMatchup
};

// Exportación por defecto para compatibilidad
export default matchupsData;