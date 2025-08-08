// Re-exportar desde el nuevo sistema organizado
// Este archivo mantiene compatibilidad con el código existente
export { matchupsData } from './index.js';

// También exportar utilidades para facilitar el uso
export { matchupUtils, DIFFICULTY_LEVELS } from './index.js';

// Exportación por defecto para compatibilidad total
import { matchupsData } from './index.js';
export default matchupsData;