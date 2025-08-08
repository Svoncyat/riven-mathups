import { AbilitySection } from '../atoms/AbilitySection.jsx';
import { DifficultyBadge } from '../atoms/DifficultyBadge.jsx';

import styles from './ChampionHeader.module.css'

export function ChampionHeader({ champion }) {
    return (
        <div className={styles['matchup-champion']}>
            <div className={styles['matchup-data']}>
                <div className={`${styles['matchup-portrait']} ${styles[`matchup-portrait-${champion.difficulty}`]}`}>
                    <img src={champion.portrait} alt={`${champion.name} portrait`} />
                </div>
                <div className={styles['matchup-info']}>
                    <h1 className={styles['matchup-name']}>{champion.name}</h1>
                    <p className={styles['matchup-nickname']}>{champion.nickname}</p>
                    <div>
                        <AbilitySection abilities={champion.abilities} />
                    </div>
                </div>
            </div>
            <DifficultyBadge difficulty={champion.difficulty} />
        </div>
    );
}