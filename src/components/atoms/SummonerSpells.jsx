import styles from './SummonerSpells.module.css'

export function SummonerSpells({ spells }) {
    return (
        <div className={styles['matchup-summoner-spells']}>
            <h2 className={styles['matchup-subtitle']}>Summoners:</h2>
            <div className={styles['matchup-summoners-container']}>
                <div className={styles['matchup-summoner-spell']}>
                    <img src={spells.d} alt="Summoner spell D" />
                </div>
                <div className={styles['matchup-summoner-spell']}>
                    <img src={spells.f} alt="Summoner spell F" />
                </div>
            </div>
        </div>
    );
}