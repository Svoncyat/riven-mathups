import { ChampionHeader } from '../molecules/ChampionHeader.jsx';
import { RuneSetup } from '../atoms/RuneSetup.jsx';
import { ItemBuild } from '../atoms/ItemBuild.jsx';
import { SummonerSpells } from '../atoms/SummonerSpells.jsx';
import { MatchupContent } from '../molecules/MatchupContent.jsx';
import styles from './MatchupCard.module.css';

export function MatchupCard({ matchupData }) {
    return (
        <article className={styles['matchup-card']}>
            <header className={styles['matchup-header']}>
                <ChampionHeader champion={matchupData} />
                <RuneSetup runes={matchupData.runes} />
                <ItemBuild items={matchupData.items} />
                <SummonerSpells spells={matchupData.summonerSpells} />
            </header>
            <MatchupContent strategy={matchupData.strategy} />
        </article>
    );
}