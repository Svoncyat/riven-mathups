import styles from './AbilitySection.module.css';

export function AbilitySection({ abilities }) {
    return (
        <div className={styles['matchup-abilities']}>
            <div>
                <img src={abilities.passive} alt="Passive" />
            </div>
            <div>
                <img src={abilities.q} alt="Q Ability" />
            </div>
            <div>
                <img src={abilities.w} alt="W Ability" />
            </div>
            <div>
                <img src={abilities.e} alt="E Ability" />
            </div>
            <div>
                <img src={abilities.r} alt="R Ability" />
            </div>
        </div>
    );
}