import { CONTACT_EMAIL } from '../content'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <span className={styles.brand}>
            <span className={styles.bracket}>&lt;</span>
            production<span className={styles.underscore}>_</span>ready
            <span className={styles.bracket}>/&gt;</span>
          </span>
          <p className={styles.tagline}>
            We turn vibe-coded prototypes into production-grade code.
          </p>
        </div>

        <div className={styles.right}>
          <a href={`mailto:${CONTACT_EMAIL}`} className={styles.link}>
            {CONTACT_EMAIL}
          </a>
          <span className={styles.copy}>© {year} production_ready</span>
        </div>
      </div>
    </footer>
  )
}
