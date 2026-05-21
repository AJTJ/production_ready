import { services } from '../content'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section id="services" className={`section ${styles.wrap}`}>
      <div className="container">
        <p className="eyebrow">// what we do</p>
        <h2 className="section-title">
          Everything between &ldquo;it works on my machine&rdquo; and
          production.
        </h2>
        <p className="section-lead">
          Take the whole list or a single piece. Most engagements start with an
          audit and pick up from there.
        </p>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <article key={service.title} className={styles.card}>
              <span className={styles.index}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardBody}>{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
