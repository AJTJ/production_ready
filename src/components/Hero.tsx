import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="eyebrow">// production-grade engineering</p>

          <h1 className={styles.title}>
            Your prototype found traction.
            <br />
            <span className={styles.accent}>Now it has to hold.</span>
          </h1>

          <p className={styles.lead}>
            Finding traction is the hard part, and you have done it.
            production_ready takes the vibe-coded prototype that got you here
            and turns it into software you can scale, hire around, and trust
            in production.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className="btn btn-primary">
              Book a code audit
            </a>
            <a href="#process" className="btn btn-secondary">
              See how it works
            </a>
          </div>
        </div>

        <div className={styles.panel} aria-hidden="true">
          <div className={styles.panelBar}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.panelName}>checkout.ts</span>
          </div>
          <pre className={styles.code}>
            <code>
              <span className={styles.del}>
                - function p(d)&#123;return fetch(&apos;/api/&apos;+d).then(r=&gt;r.json())&#125;
              </span>
              {'\n'}
              <span className={styles.add}>
                + async function getOrder(id: string): Promise&lt;Order&gt; &#123;
              </span>
              {'\n'}
              <span className={styles.add}>
                {'+   const res = await fetch(`/api/orders/${id}`)'}
              </span>
              {'\n'}
              <span className={styles.add}>
                + &nbsp;&nbsp;if (!res.ok) throw new OrderError(id, res.status)
              </span>
              {'\n'}
              <span className={styles.add}>
                + &nbsp;&nbsp;return OrderSchema.parse(await res.json())
              </span>
              {'\n'}
              <span className={styles.add}>+ &#125;</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
