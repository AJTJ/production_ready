// Site copy, kept in one place so the components stay presentational.

export const CONTACT_EMAIL = 'hello@productionready.studio'

export interface Service {
  title: string
  body: string
}

export const services: Service[] = [
  {
    title: 'Code audit',
    body: 'A full read of your codebase. We map what you have, rank the risks, and hand you a written plan with effort estimates. Fixed scope, fixed price.',
  },
  {
    title: 'Refactor & hardening',
    body: 'We restructure the code into clear modules, add types, handle the errors that get swallowed today, and delete the dead weight, all without changing what users see.',
  },
  {
    title: 'Test coverage',
    body: 'Unit, integration, and end-to-end tests around the paths that actually matter, so shipping a change stops being a gamble.',
  },
  {
    title: 'CI/CD & tooling',
    body: 'Linting, formatting, type checks, and a deploy pipeline that catches broken builds before your users do.',
  },
  {
    title: 'Security & performance review',
    body: 'We find the committed secrets, the injection points, and the queries that quietly fall over once real traffic shows up.',
  },
  {
    title: 'Handover & documentation',
    body: 'Architecture notes, a README that reflects reality, and a walkthrough so your team owns the code after we leave.',
  },
]

export interface Step {
  num: string
  title: string
  when: string
  body: string
}

export const steps: Step[] = [
  {
    num: '01',
    title: 'Audit',
    when: 'Week 1',
    body: 'We read everything and deliver a written report: risks ranked, effort estimated, quick wins flagged. You decide what happens next. No obligation to continue.',
  },
  {
    num: '02',
    title: 'Stabilize',
    when: 'Weeks 2–6',
    body: 'We work in small, reviewed pull requests. The app keeps shipping the whole time. You see progress every day, not in one nerve-wracking merge at the end.',
  },
  {
    num: '03',
    title: 'Handover',
    when: 'Final week',
    body: 'You get a documented, tested codebase and a team that knows how to keep it that way. Plain stack, no proprietary glue, no lock-in.',
  },
]

export interface Problem {
  title: string
  body: string
}

export const problems: Problem[] = [
  {
    title: 'It works until it doesn’t',
    body: 'No tests, loose types, errors that get swallowed. The first traffic spike or unhandled edge case takes the whole thing down.',
  },
  {
    title: 'Nobody can change it safely',
    body: 'Logic copy-pasted five times, no clear structure, no docs. Every new feature risks breaking three old ones.',
  },
  {
    title: 'You can’t hire around it',
    body: 'A new engineer needs weeks to understand a codebase that grew by accretion. Onboarding stalls right when you need to move faster.',
  },
]

export interface Principle {
  title: string
  body: string
}

export const principles: Principle[] = [
  {
    title: 'A clear map and a gameplan',
    body: 'You get a plain-language picture of how your software works and what to fix first. No code background needed.',
  },
  {
    title: 'Behavior stays the same',
    body: 'We harden the code you have. No rewrite from scratch, no months with nothing to show.',
  },
  {
    title: 'You keep the keys',
    body: 'Plain, well-known tools and full documentation. We have done the job when you no longer need us.',
  },
  {
    title: 'Fixed price on the audit',
    body: 'You know exactly what the first step costs before you commit to anything.',
  },
]

export interface TeamMember {
  name: string
  role: string
  bio: string
  initials: string
  linkedin?: string
}

// NOTE: role and bio below are placeholders. Replace with the real wording.
export const team: TeamMember[] = [
  {
    name: 'Aaron Janke',
    role: 'Founder & Principal Engineer',
    bio: 'Runs the audit, reads the codebase end to end, and leads the work that turns a prototype into something a production team can rely on.',
    initials: 'AJ',
    linkedin: 'https://www.linkedin.com/in/aaron-janke/',
  },
  {
    name: 'Patrick Dussault',
    role: 'Product Designer',
    bio: 'Builds the design systems, tokens, and interfaces behind the work. A frontend background means the design and the code that ships it stay in sync.',
    initials: 'PD',
    linkedin: 'https://www.linkedin.com/in/patrickdussault/',
  },
]

// The wider bench: specialists brought in per project.
export const benchRoles: string[] = [
  'Product & UX designers',
  'QA & test engineers',
  'DevOps & infrastructure',
  'Security specialists',
]
