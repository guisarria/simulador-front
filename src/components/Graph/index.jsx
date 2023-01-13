import asset from './asset-1.svg'

import styles from './style.module.css'

export default function Graph() {
    return (
        <div
            aria-label="graph"
            className={styles.graph}
        >
        <img className={styles.asset} src={asset} alt="asset de uma pessoa com um megaphone" />
        </div>
    )
}