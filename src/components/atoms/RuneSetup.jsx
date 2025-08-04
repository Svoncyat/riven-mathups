import styles from './RuneSetup.module.css'

export function RuneSetup({ runes }) {
    return (
        <div className={styles['matchup-runes-stats']}>
            <div className={styles['matchup-runes']}>
                <h2 className={styles['matchup-subtitle']}>Runas:</h2>
                <div className={styles['matchup-primary-path']}>
                    <div className={`${styles['matchup-rune']} ${styles['matchup-primary-rune']}`}>
                        <img src={runes.primary.tree} alt="Primary Tree" />
                    </div>
                    <div className={`${styles['matchup-rune']} ${styles['matchup-keystone']}`}>
                        <img src={runes.primary.keystone} alt="Keystone" />
                    </div>
                    <div className={styles['matchup-rune']}>
                        <img src={runes.primary.rune1} alt="Primary Rune 1" />
                    </div>
                    <div className={styles['matchup-rune']}>
                        <img src={runes.primary.rune2} alt="Primary Rune 2" />
                    </div>
                    <div className={styles['matchup-rune']}>
                        <img src={runes.primary.rune3} alt="Primary Rune 3" />
                    </div>
                </div>
                <div className={styles['matchup-secondary-path']}>
                    <div className={`${styles['matchup-rune']} ${styles['matchup-secondary-rune']}`}>
                        <img src={runes.secondary.tree} alt="Secondary Tree" />
                    </div>
                    <div className={styles['matchup-rune']}>
                        <img src={runes.secondary.rune1} alt="Secondary Rune 1" />
                    </div>
                    <div className={styles['matchup-rune']}>
                        <img src={runes.secondary.rune2} alt="Secondary Rune 2" />
                    </div>
                    <div className={styles['matchup-stat-shards']}>
                        <div className={styles['matchup-stat']}>
                            <img src={runes.statShards.shard1} alt="Stat Shard 1" />
                        </div>
                        <div className={styles['matchup-stat']}>
                            <img src={runes.statShards.shard2} alt="Stat Shard 2" />
                        </div>
                        <div className={styles['matchup-stat']}>
                            <img src={runes.statShards.shard3} alt="Stat Shard 3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}