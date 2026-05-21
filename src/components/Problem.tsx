import { problems } from '../content'
import styles from './Problem.module.css'

export default function Problem() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">// the vibe coding trap</p>
        <h2 className="section-title">
          AI and rapid prototyping are great at finding traction. They are bad
          at what comes next.
        </h2>
        <p className="section-lead">
          Your prototype already did the hard thing: it proved people want
          what you built. But a prototype only has to work once, in a demo. A
          product has to work every time, for everyone, while three people
          change it at once. That gap is where fast-moving teams get stuck.
        </p>

        <div className={styles.grid}>
          {problems.map((problem) => (
            <article key={problem.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{problem.title}</h3>
              <p className={styles.cardBody}>{problem.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
