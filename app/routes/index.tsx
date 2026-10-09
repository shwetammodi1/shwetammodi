import { createRoute } from 'honox/factory'

const experience = [
  {
    company: 'Capgemini',
    period: 'Sep 2024 — Present',
    role: 'Business Analysis & Requirements',
    focus: 'Sony India Software Centre · IoT, Edge & Cloud',
    highlights: [
      'Shape product requirements and API specifications for IoT and edge platform releases.',
      'Help define engineering standards adopted across teams, and clarify cloud architecture needs across AWS and edge applications.',
      'Bring GenAI into the requirements workflow, with quality checks that keep generated content accurate and consistent.',
    ],
    current: true,
  },
  {
    company: 'Kibo Commerce',
    period: 'Jan 2023 — Jul 2024',
    role: 'Business Analysis & Product Requirements',
    focus: 'B2B and B2C commerce platform',
    highlights: [
      'Authored YAML-based API specifications for commerce services, including endpoint behaviour and request/response contracts.',
      'Improved customer journeys and self-service knowledge architecture to reduce reliance on written support.',
      'Partnered with product and engineering teams through Agile releases and shared standards across B2B and B2C channels.',
    ],
  },
  {
    company: 'UST',
    period: 'Jan 2022 — Jan 2023',
    role: 'Business Analysis & API Requirements',
    focus: 'Enterprise client delivery',
    highlights: [
      'Translated client and product needs into clear requirements for enterprise engagements.',
      'Specified REST API requirements in YAML and validated endpoint behaviour against agreed business needs.',
    ],
  },
  {
    company: 'DXC Technology',
    period: 'Jul 2016 — Jan 2022',
    role: 'Business Analysis & Requirements',
    focus: 'Insurance platforms · P&C, Life & Annuity',
    highlights: [
      'Delivered requirements across Assure Billing, Assure Policy, and wmA policy administration platforms.',
      'Reduced a 1,000+ page reference by 50% through duplication analysis and information redesign.',
      'Led two analysts and maintained 50+ specification sets per quarterly release, meeting every delivery deadline.',
    ],
  },
]

const expertise = [
  {
    number: '01',
    title: 'Business analysis',
    description: 'From discovery to delivery: elicitation, business rules, process flows, gap analysis, user stories, and acceptance criteria.',
    tags: ['BRD / PRD / FRD', 'Requirements', 'UAT'],
  },
  {
    number: '02',
    title: 'Insurance & commerce',
    description: 'Deep experience in policy administration, billing, life and annuity, and B2B/B2C commerce journeys.',
    tags: ['P&C · Life · Annuity', 'B2B / B2C', 'PAS'],
  },
  {
    number: '03',
    title: 'APIs & data',
    description: 'Developer-ready API requirements with practical experience analysing contracts, payloads, and structured data.',
    tags: ['REST · OpenAPI', 'JSON / XML', 'MongoDB'],
  },
  {
    number: '04',
    title: 'AI & automation',
    description: 'Thoughtful use of AI to speed up drafting and analysis, with human review for clarity, quality, and consistency.',
    tags: ['LLMs', 'Prompt design', 'Doxygen · Sphinx'],
  },
]

const achievements = [
  { metric: '50%', label: 'less to maintain', detail: 'A 1,000+ page insurance platform reference, restructured.' },
  { metric: '100%', label: 'release deadlines met', detail: 'Across six years of quarterly insurance platform delivery.' },
  { metric: '300+', label: 'documents delivered', detail: 'Requirements and specifications across multiple domains.' },
  { metric: '2', label: 'analysts mentored', detail: 'Leading a small team through complex release cycles.' },
]

const tools = [
  'JIRA',
  'Confluence',
  'GitHub',
  'Postman',
  'Swagger / OpenAPI',
  'MS Visio',
  'SharePoint',
  'HelpJuice',
  'KnowledgeOwl',
  'Doxygen',
  'Sphinx',
  'ChatGPT',
  'Claude',
  'Microsoft Copilot',
  'Gemini',
]

const projects = [
  {
    name: 'CORSIA Carbon Credit',
    category: 'CLIMATE · MARKETPLACE',
    description: 'A carbon-credit marketplace with advisory services and a knowledge base.',
    stack: ['Carbon markets', 'Advisory', 'Knowledge base'],
    url: 'https://github.com/shwetammodi1/corsiacarboncredit',
    mark: 'CO₂',
    number: '01',
  },
  {
    name: 'Netra Optical',
    category: 'RETAIL · WEBSITE',
    description: 'A marketing website for an independent optician in South Tukoganj, Indore.',
    stack: ['HonoX', 'TypeScript', 'Cloudflare Pages'],
    url: 'https://github.com/shwetammodi1/Netra-Optical',
    mark: 'NO',
    number: '02',
  },
  {
    name: 'EcraftMedia',
    category: 'DIGITAL · PORTFOLIO',
    description: 'A digital-solutions website and portfolio.',
    stack: ['Digital solutions', 'Website', 'Portfolio'],
    url: 'https://github.com/shwetammodi1/ecraftmedia',
    mark: 'EM',
    number: '03',
  },
]

export default createRoute((c) =>
  c.render(
    <>
      <header class="site-header">
        <div class="container nav-shell">
          <a class="wordmark" href="#home" aria-label="Shwetam Modi, home">SM<span>.</span></a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation" aria-label="Toggle navigation">
            <span></span>
            <span></span>
          </button>
          <nav class="site-nav" id="site-navigation" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#expertise">Expertise</a>
            <a class="nav-contact" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>

      <main>
        <section class="hero section-shell" id="home">
          <div class="container hero-grid">
            <div class="hero-copy">
              <p class="eyebrow"><span class="status-dot"></span> BUSINESS ANALYST · BENGALURU, INDIA</p>
              <h1>I make complex things <em>make sense.</em></h1>
              <p class="hero-intro">
                I turn business needs into clear product requirements — connecting people, processes, and technology across insurance,
                commerce, IoT, and cloud.
              </p>
              <div class="hero-actions">
                <a class="button button-primary" href="#experience">Explore my work <span aria-hidden="true">↓</span></a>
                <a class="button button-text" href="/resume.pdf" download>Download résumé <span aria-hidden="true">↗</span></a>
              </div>
              <div class="hero-stats" aria-label="Career highlights">
                <div><strong>12<span>+</span></strong><span>years in business</span></div>
                <div><strong>6</strong><span>years in insurance</span></div>
                <div><strong>3</strong><span>industries and counting</span></div>
              </div>
            </div>

            <div class="hero-visual">
              <div class="photo-frame">
                <img src="/profile.jpeg" alt="Portrait of Shwetam Modi" />
                <div class="photo-caption"><span>Thoughtful analysis.</span><span>Practical outcomes.</span></div>
              </div>
              <div class="orbit-note"><span>BA</span><span>WITH<br />PURPOSE</span></div>
              <span class="visual-spark" aria-hidden="true">✳</span>
            </div>
          </div>
          <a class="scroll-cue" href="#about"><span></span> SCROLL TO EXPLORE</a>
        </section>

        <section class="about section-pad" id="about">
          <div class="container about-grid">
            <div class="section-kicker"><span>01</span><span>THE THROUGH-LINE</span></div>
            <div class="about-content">
              <h2>Good analysis is equal parts <em>curiosity</em> and clarity.</h2>
              <div class="about-columns">
                <p>
                  For more than 12 years, I’ve worked where business goals meet technical reality. I ask the extra question, find the
                  missing detail, and help teams move forward with a shared understanding of what they’re building and why.
                </p>
                <p>
                  My path runs from six years in insurance platforms to e-commerce and today’s IoT, edge, and cloud products. Wherever
                  the domain, I bring structure to ambiguity — and a strong respect for the people who have to use the result.
                </p>
              </div>
              <a class="inline-link" href="https://www.linkedin.com/in/shwetammodi" target="_blank" rel="noreferrer">
                More about my journey <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section class="impact section-pad" aria-labelledby="impact-title">
          <div class="container">
            <div class="section-heading">
              <div class="section-kicker"><span>02</span><span>THE IMPACT</span></div>
              <h2 id="impact-title">Clear work. <em>Measurable difference.</em></h2>
            </div>
            <div class="impact-grid">
              {achievements.map((achievement) => (
                <article class="impact-card">
                  <strong>{achievement.metric}</strong>
                  <h3>{achievement.label}</h3>
                  <p>{achievement.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section class="experience section-pad" id="experience">
          <div class="container">
            <div class="section-heading experience-heading">
              <div class="section-kicker"><span>03</span><span>SELECTED EXPERIENCE</span></div>
              <h2>Where I’ve <em>made a difference.</em></h2>
              <p>A little over a decade of turning evolving needs into dependable delivery.</p>
            </div>
            <div class="timeline">
              {experience.map((item) => (
                <article class={`timeline-item${item.current ? ' is-current' : ''}`}>
                  <div class="timeline-marker" aria-hidden="true"></div>
                  <div class="timeline-date">{item.period}</div>
                  <div class="timeline-card">
                    <div class="timeline-topline">
                      <div>
                        <h3>{item.company}</h3>
                        <p class="role-name">{item.role}</p>
                      </div>
                      {item.current && <span class="current-badge"><span></span> CURRENT</span>}
                    </div>
                    <p class="role-focus">{item.focus}</p>
                    <ul>
                      {item.highlights.map((highlight) => <li>{highlight}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <p class="early-career">
              <span>BEFORE THAT</span> Early experience in client relationships and sales at Star Health, Vodafone, Justdial, and Religare.
            </p>
          </div>
        </section>

        <section class="projects section-pad" id="projects">
          <div class="container">
            <div class="section-heading projects-heading">
              <div>
                <div class="section-kicker"><span>04</span><span>SELECTED PROJECTS</span></div>
                <h2>Ideas made <em>real.</em></h2>
              </div>
              <a
                class="inline-link github-link"
                href="https://github.com/shwetammodi1?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                Explore all GitHub repositories <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div class="projects-grid">
              {projects.map((project) => (
                <article class="project-card">
                  <a
                    class="project-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <div class="project-cover">
                      <span class="project-index">{project.number} / 03</span>
                      <span class="project-mark" aria-hidden="true">{project.mark}</span>
                      <span class="project-arrow" aria-hidden="true">↗</span>
                    </div>
                    <div class="project-copy">
                      <span class="project-category">{project.category}</span>
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                      <div class="tag-list">{project.stack.map((tag) => <span>{tag}</span>)}</div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section class="expertise section-pad" id="expertise">
          <div class="container">
            <div class="section-heading expertise-heading">
              <div class="section-kicker"><span>05</span><span>WHAT I BRING</span></div>
              <h2>Connecting the dots, <em>end to end.</em></h2>
            </div>
            <div class="expertise-grid">
              {expertise.map((area) => (
                <article class="expertise-card">
                  <span class="expertise-number">{area.number}</span>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <div class="tag-list">{area.tags.map((tag) => <span>{tag}</span>)}</div>
                </article>
              ))}
            </div>
            <div class="toolkit">
              <h3>MY TOOLKIT</h3>
              <div class="tool-list">{tools.map((tool) => <span>{tool}</span>)}</div>
            </div>
          </div>
        </section>

        <section class="education section-pad">
          <div class="container education-grid">
            <div>
              <div class="section-kicker"><span>06</span><span>FOUNDATIONS</span></div>
              <h2>Always learning.<br /><em>Always asking why.</em></h2>
            </div>
            <div class="credentials">
              <article>
                <span class="credential-label">EDUCATION</span>
                <h3>MBA, Marketing &amp; Finance</h3>
                <p>Devi Ahilya Vishwavidyalaya · 2013</p>
                <h3 class="second-degree">B.Sc., Computer Science &amp; Microbiology</h3>
                <p>Devi Ahilya Vishwavidyalaya · 2010</p>
              </article>
              <article>
                <span class="credential-label">CERTIFICATIONS</span>
                <ul>
                  <li>LOMA 280 · Principles of Insurance</li>
                  <li>ISTQB Foundation Level (CTFL)</li>
                  <li>Data Science with R · In progress</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section class="contact section-pad" id="contact">
          <div class="container contact-panel">
            <div class="section-kicker"><span>07</span><span>THE NEXT CHAPTER</span></div>
            <div class="contact-content">
              <p class="eyebrow">HAVE A CHALLENGE TO UNPACK?</p>
              <h2>Let’s make the<br /><em>complicated clear.</em></h2>
              <a class="button button-light" href="mailto:shwetammodi@gmail.com">
                Get in touch <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div class="contact-details">
              <a href="mailto:shwetammodi@gmail.com">shwetammodi@gmail.com</a>
              <a href="tel:+918962390228">+91 89623 90228</a>
              <a href="https://www.linkedin.com/in/shwetammodi" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <div class="container footer-inner">
          <a class="wordmark" href="#home">SM<span>.</span></a>
          <p>Thoughtfully turning requirements into results.</p>
          <span>© {new Date().getFullYear()} Shwetam Modi</span>
        </div>
      </footer>
    </>,
  ),
)
