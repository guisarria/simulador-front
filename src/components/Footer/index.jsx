import logoFooter from './logoFooter.png'
import instagram from './instagram.svg'
import linkedin from './linkedin.svg'
import styles from './style.module.css'

export default function Footer() {
    return (
        <div
            aria-label="footer"
            className={styles.footer}
        >
            <a href="https://www.cognitive.com.br" target="_blank"><img className={styles.logoFooter} src={logoFooter} alt="logo cognitive" /></a>
            <span className={styles.social}>
                <a href="https://www.linkedin.com/company/cognitive-consultoria" target="_blank"><img className={styles.logoLinkedin} src={linkedin} alt="logo linkedin" /></a>
                <a href="https://www.instagram.com/cognitiveconsultoria" target="_blank"><img className={styles.logoInstagram} src={instagram} alt="logo instagram" /></a>
            </span>
        </div>
    )
}