import { team, benchRoles } from '../content'
import styles from './Team.module.css'

export default function Team() {
  return (
    <section id="team" className="section">
      <div className="container">
        <p className="eyebrow">// who does the work</p>
        <h2 className="section-title">
          A small core, plus the right specialists for your project.
        </h2>
        <p className="section-lead">
          You work directly with the engineer doing the work, not a layer of
          account managers. When a project needs more, we bring in people who
          have done that exact job before.
        </p>

        <div className={styles.people}>
          {team.map((member) => (
            <article key={member.name} className={styles.card}>
              <div className={styles.avatar} aria-hidden="true">
                {member.initials}
              </div>
              <div>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.bio}>{member.bio}</p>
                {member.linkedin && (
                  <a
                    className={styles.link}
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                )}
              </div>
            </article>
          ))}

          <article className={`${styles.card} ${styles.bench}`}>
            <div className={`${styles.avatar} ${styles.benchAvatar}`} aria-hidden="true">
              +
            </div>
            <div>
              <h3 className={styles.name}>The wider bench</h3>
              <p className={styles.role}>Specialists, per project</p>
              <p className={styles.bio}>
                Not every project needs the same people. Depending on what
                yours calls for, we pull in trusted collaborators across:
              </p>
              <ul className={styles.roleList}>
                {benchRoles.map((role) => (
                  <li key={role} className={styles.roleChip}>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
