import { useState } from 'react'
import styles from '../styles/home.module.css'

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [joined, setJoined] = useState(false)
  const [email, setEmail] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (email.trim()) setJoined(true)
  }

  return (
    <main>
      <section className={styles.hero} id="top">
        <nav className={styles.nav} aria-label="Main navigation">
          <a className={styles.logo} href="#top" aria-label="Common Ground home">
            <span className={styles.logoMark}></span>
            <span>Umah<span>Rampa</span></span>
          </a>
          <button
            className={styles.menuButton}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
          <div className={`${styles.navLinks} ${menuOpen ? styles.navOpen : ''}`}>
            <a href="#story" onClick={() => setMenuOpen(false)}>Our work</a>
            <a href="#impact" onClick={() => setMenuOpen(false)}>Our impact</a>
            <a href="#join" onClick={() => setMenuOpen(false)}>Get involved</a>
            <a className={styles.navDonate} href="#join" onClick={() => setMenuOpen(false)}>Donate <span>↗</span></a>
          </div>
        </nav>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>A world where everyone belongs</p>
          <h1>Small acts.<br /><em>Lasting change.</em></h1>
          <p className={styles.heroCopy}>We bring neighbors together to build communities where every person has the chance to thrive.</p>
          <a className={styles.primaryButton} href="#join">Be part of it <span>↗</span></a>
        </div>

        <div className={styles.heroFooter}>
          <span>Scroll to explore</span>
          <span className={styles.scrollLine} />
          <span>01 / 03</span>
        </div>
      </section>

      <section className={styles.intro} id="story">
        <div className={styles.sectionLabel}>01 &nbsp; What we believe</div>
        <div className={styles.introBody}>
          <h2>Change starts when we <span>show up</span> for each other.</h2>
          <div>
            <p>From a hot meal to a safe place to call home, meaningful change is built through the everyday choices we make together.</p>
            <a className={styles.textLink} href="#impact">Discover our approach <span>→</span></a>
          </div>
        </div>
      </section>

      <section className={styles.impact} id="impact">
        <div className={styles.impactImage} role="img" aria-label="Friends laughing together outdoors" />
        <div className={styles.impactContent}>
          <div className={styles.sectionLabel}>02 &nbsp; The difference we make</div>
          <h2>Good things grow<br /><em>together.</em></h2>
          <div className={styles.stats}>
            <div><strong>18k</strong><span>people supported<br />this year</span></div>
            <div><strong>42</strong><span>community projects<br />in motion</span></div>
            <div><strong>96%</strong><span>of funds go directly<br />to our programs</span></div>
          </div>
        </div>
      </section>

      <section className={styles.join} id="join">
        <div className={styles.joinCopy}>
          <div className={styles.sectionLabel}>03 &nbsp; Your next step</div>
          <h2>Let’s make<br /><em>room for more.</em></h2>
          <p>Get stories from the people and places shaping a kinder future.</p>
        </div>
        <div className={styles.joinFormWrap}>
          {joined ? (
            <div className={styles.success}><span>✦</span><h3>You’re in.</h3><p>Thanks for joining our community. We’ll be in touch soon.</p></div>
          ) : (
            <form className={styles.joinForm} onSubmit={handleSubmit}>
              <label htmlFor="email">Your email address</label>
              <div className={styles.inputRow}><input id="email" type="email" required placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} /><button type="submit" aria-label="Join the movement">→</button></div>
              <small>By signing up, you agree to hear from Common Ground. Unsubscribe anytime.</small>
            </form>
          )}
        </div>
      </section>

      <footer className={styles.footer}>
        <a className={styles.logo} href="#top"><span className={styles.logoMark}></span><span>Umah<span>Rampa</span></span></a>
        <p>For people. For place. For good.</p>
        <div className={styles.footerLinks}><a href="#story">Instagram</a><a href="#story">LinkedIn</a><a href="mailto:hello@commonground.org">Contact</a></div>
        <span className={styles.copyright}>© 2026  Umah Rampa</span>
      </footer>
    </main>
  )
}

export default Home
