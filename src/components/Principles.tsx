import { principles } from '../content'
import styles from './Principles.module.css'

export default function Principles() {
  return (
    <section id="approach" className={`section ${styles.wrap}`}>
      <div className="container">
        <p className="eyebrow">// how we work</p>
        <h2 className="section-title">
          The rules we hold to, so handing us the codebase feels safe.
        </h2>

        <div className={styles.grid}>
          {principles.map((principle) => (
            <article key={principle.title} className={styles.card}>
              <span className={styles.check} aria-hidden="true">
                ✓
              </span>
              <div>
                <h3 className={styles.cardTitle}>{principle.title}</h3>
                <p className={styles.cardBody}>{principle.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
