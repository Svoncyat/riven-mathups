import styles from './DifficultyBadge.module.css';

export function DifficultyBadge({ difficulty }) {
    return (
        <div className={styles['matchup-difficulty']}>
            <h4 className={styles['matchup-difficulty-title']}>Dificultad:</h4>
            <div className={styles['matchup-difficulty-bar']}>
                <div className={styles['matchup-difficulty-value']}>
                    <p className={styles['matchup-difficulty-easy']}>Fácil</p>
                </div>
                <div className={styles['matchup-difficulty-value']}>
                    <p className={styles['matchup-difficulty-medium']}>Media</p>
                </div>
                <div className={styles['matchup-difficulty-value']}>
                    <p className={styles['matchup-difficulty-hard']}>Difícil</p>
                </div>
                <div className={styles['matchup-difficulty-value']}>
                    <p className={styles['matchup-difficulty-extreme']}>Extrema</p>
                </div>
            </div>
        </div>
    );
}