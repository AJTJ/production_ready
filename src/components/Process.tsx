import { steps } from '../content'
import styles from './Process.module.css'

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <p className="eyebrow">// how it works</p>
        <h2 className="section-title">
          A clear path from messy to maintained, usually four to six weeks.
        </h2>

        <ol className={styles.steps}>
          {steps.map((step) => (
            <li key={step.num} className={styles.step}>
              <div className={styles.head}>
                <span className={styles.num}>{step.num}</span>
                <span className={styles.when}>{step.when}</span>
              </div>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.body}>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
