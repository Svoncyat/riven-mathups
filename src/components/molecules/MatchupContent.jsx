import styles from './MatchupContent.module.css'

export function MatchupContent({ strategy }) {
    return (
        <div className={styles['matchup-content']}>
            <section className={styles['matchup-notes']}>
                <h3>Notas: </h3>
                <ul>
                    {strategy.notes.map((note, index) => (
                        <li key={index}>
                            <p>{note}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <section className={styles['matchup-to-do']}>
                <h3>¿Qué hacer?</h3>
                <ul>
                    {strategy.toDo.map((item, index) => (
                        <li key={index}>
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <section className={styles['matchup-to-avoid']}>
                <h3>¿Qué evitar?</h3>
                <ul>
                    {strategy.toAvoid.map((item, index) => (
                        <li key={index}>
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}