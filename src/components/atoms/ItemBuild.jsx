import styles from './ItemBuild.module.css'

export function ItemBuild({ items }) {
    return (
        <div className={styles['matchup-items']}>
            <h2 className={styles['matchup-subtitle']}>Objetos Iniciales:</h2>
            <div className={styles['matchup-starting-items']}>
                {items.starting.map((item, index) => (
                    <div key={index} className={styles['matchup-item']}>
                        <img src={item} alt={`Starting item ${index + 1}`} />
                    </div>
                ))}
            </div>
            <h2 className={styles['matchup-subtitle']}>Objetos Recomendados:</h2>
            <div className={styles['matchup-recommended-items']}>
                {items.recommended.map((item, index) => (
                    <div key={index} className={styles['matchup-item']}>
                        <img src={item} alt={`Recommended item ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}