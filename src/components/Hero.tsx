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
            <span className={styles.panelName}>checkout.js</span>
          </div>
          <pre className={styles.code}>
            <code>
              <span className={styles.del}>{"- function checkout(cart) {"}</span>
              {'\n'}
              <span className={styles.del}>
                {"-   chargeCard(total(cart)) // flawless. genuinely."}
              </span>
              {'\n'}
              <span className={styles.del}>
                {"-   confetti() // a nice touch"}
              </span>
              {'\n'}
              <span className={styles.del}>
                {"-   localStorage.clear() // ...also logs the user out"}
              </span>
              {'\n'}
              <span className={styles.del}>
                {"-   if (isTuesday()) refundEveryone() // wait, what"}
              </span>
              {'\n'}
              <span className={styles.del}>{"- }"}</span>
              {'\n'}
              <span className={styles.add}>
                {"+ async function checkout(cart: Cart) {"}
              </span>
              {'\n'}
              <span className={styles.add}>
                {"+   return charge(total(cart)) // just charges. no tuesdays."}
              </span>
              {'\n'}
              <span className={styles.add}>{"+ }"}</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
