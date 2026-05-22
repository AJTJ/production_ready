import styles from './Hero.module.css'

// Illustrative diff shown in the hero panel. Decorative only (the panel is
// aria-hidden). Each entry is one rendered line:
//   label — a // section comment      note — a dimmed reviewer annotation
//   del   — a removed (red) line      add  — an added (green) line
type CodeLine = { kind: 'label' | 'del' | 'add' | 'note'; text: string }

const codeLines: CodeLine[] = [
  { kind: 'label', text: 'bad code' },
  { kind: 'del', text: 'function checkout(cart) {' },
  { kind: 'del', text: '  chargeCard(total(cart))' },
  { kind: 'note', text: 'flawless. genuinely.' },
  { kind: 'del', text: '  confetti()' },
  { kind: 'note', text: 'a nice touch' },
  { kind: 'del', text: '  localStorage.clear()' },
  { kind: 'note', text: '...also logs the user out' },
  { kind: 'del', text: '  if (isTuesday())' },
  { kind: 'del', text: '    refundEveryone()' },
  { kind: 'note', text: 'wait, what' },
  { kind: 'del', text: '}' },
  { kind: 'label', text: 'good code' },
  { kind: 'add', text: 'function checkout(cart: Cart) {' },
  { kind: 'add', text: '  return charge(total(cart))' },
  { kind: 'note', text: 'just charges. no tuesdays.' },
  { kind: 'add', text: '}' },
]

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
              {codeLines.map((line, i) => (
                <span key={i} className={styles[line.kind]}>
                  {line.text}
                </span>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
