import { CONTACT_EMAIL } from '../content'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section id="contact" className={`section ${styles.wrap}`}>
      <div className="container">
        <div className={styles.panel}>
          <p className="eyebrow">// next step</p>
          <h2 className={styles.title}>
            Send us your repo. We&apos;ll tell you what we&apos;d fix first.
          </h2>
          <p className={styles.lead}>
            The audit is a fixed-price, fixed-scope first step. You get a
            written report either way, with no commitment to keep going.
          </p>

          <div className={styles.actions}>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Code%20audit%20request`}
              className="btn btn-primary"
            >
              Email us about an audit
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className={styles.email}>
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
