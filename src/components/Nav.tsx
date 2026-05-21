import styles from './Nav.module.css'

export default function Nav() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          <span className={styles.bracket}>&lt;</span>
          production<span className={styles.underscore}>_</span>ready
          <span className={styles.bracket}>/&gt;</span>
        </a>

        <nav className={styles.links} aria-label="Primary">
          <a href="#services" className={styles.link}>
            Services
          </a>
          <a href="#process" className={styles.link}>
            Process
          </a>
          <a href="#approach" className={styles.link}>
            Approach
          </a>
          <a href="#team" className={styles.link}>
            Team
          </a>
          <a href="#contact" className="btn btn-primary">
            Book an audit
          </a>
        </nav>
      </div>
    </header>
  )
}
