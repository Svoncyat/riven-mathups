import { MatchupCard } from './components/organisms/MatchupCard.jsx';
import { matchupsData } from './data/matchupData.js';

export function MatchupInfo({ matchupId = 'aatrox' }) {
    const matchupData = matchupsData.find(matchup => matchup.id === matchupId);
    
    if (!matchupData) {
        return <div>Matchup no encontrado</div>;
    }
    
    return <MatchupCard matchupData={matchupData} />;
}