import { useState } from 'react'
import { ArrowRight, Camera, ChevronDown, Heart, Menu, Search, ShoppingBag, Sparkles, X } from 'lucide-react'
import './styles.css'

type Shade = {
  name: string
  code: string
  color: string
  tone: string
}

const shades: Shade[] = [
  { name: 'Rosewood', code: 'LL 01', color: '#9b4f59', tone: 'soft berry' },
  { name: 'After Hours', code: 'LL 07', color: '#6b2737', tone: 'deep wine' },
  { name: 'Barely There', code: 'LL 12', color: '#c88776', tone: 'warm nude' },
  { name: 'Mauve Muse', code: 'LL 18', color: '#a96b7e', tone: 'dusty pink' },
]

function App() {
  const [activeShade, setActiveShade] = useState(shades[0])
  const [menuOpen, setMenuOpen] = useState(false)
  const [saved, setSaved] = useState(false)

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="LuxeLips home">LUXE<span>LIPS</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          <a href="#shop" onClick={() => setMenuOpen(false)}>Shop color</a>
          <a href="#try-on" onClick={() => setMenuOpen(false)}>Virtual try-on</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>Our story</a>
        </nav>
        <div className="header-actions">
          <button aria-label="Search"><Search size={19} /></button>
          <button aria-label="View wishlist"><Heart size={19} /></button>
          <button className="bag-button" aria-label="Shopping bag"><ShoppingBag size={19} /><span>0</span></button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">The new standard in color</p>
          <h1>Color with<br /><em>intention.</em></h1>
          <p className="hero-description">High-impact pigment, weightless feel. Made for the mood you woke up in.</p>
          <a className="button button-dark" href="#shop">Explore the collection <ArrowRight size={16} /></a>
        </div>
        <div className="hero-art" aria-label="LuxeLips lipstick in Rosewood">
          <div className="sun-disc" />
          <div className="hero-lipstick">
            <div className="lipstick-bullet" style={{ backgroundColor: activeShade.color }} />
            <div className="lipstick-case"><span>LUXE<br />LIPS</span></div>
          </div>
          <p className="art-caption">01 / 12<br /><strong>{activeShade.name}</strong></p>
        </div>
        <div className="hero-note"><span>01</span><span>Formulated for<br />all-day confidence</span></div>
      </section>

      <section className="marquee" aria-label="Product benefits">
        <span>VEGAN FORMULA</span><i>✦</i><span>NO COMPROMISE COLOR</span><i>✦</i><span>CRUELTY FREE</span><i>✦</i><span>VEGAN FORMULA</span>
      </section>

      <section className="collection section" id="shop">
        <div className="section-heading">
          <div><p className="eyebrow">Meet your match</p><h2>The Color Edit</h2></div>
          <a className="text-link" href="#all-shades">View all shades <ArrowRight size={16} /></a>
        </div>
        <div className="product-grid">
          {shades.slice(0, 3).map((shade, index) => (
            <article className={index === 1 ? 'product-card featured' : 'product-card'} key={shade.code}>
              <button className="favorite" aria-label={`Save ${shade.name}`} onClick={() => setSaved(!saved)}><Heart size={18} fill={saved ? 'currentColor' : 'none'} /></button>
              <div className="product-visual" style={{ '--shade': shade.color } as React.CSSProperties}>
                <div className="mini-lipstick"><div className="mini-bullet" /><div className="mini-case" /></div>
                {index === 1 && <span className="best-seller">Best seller</span>}
              </div>
              <div className="product-info"><div><h3>{shade.name}</h3><p>{shade.tone}</p></div><strong>$32</strong></div>
              <div className="swatch-row"><span className="swatch" style={{ backgroundColor: shade.color }} /><span>{shade.code}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="try-on section" id="try-on">
        <div className="try-on-image"><div className="portrait-glow" /><div className="portrait" /><span className="image-label">Live shade preview</span></div>
        <div className="try-on-copy"><p className="eyebrow">Find your signature</p><h2>Try it<br /><em>on.</em></h2><p>See every shade on you before it lands in your cart. Our virtual try-on makes finding your perfect color feel effortless.</p><button className="button button-light"><Camera size={17} /> Launch virtual try-on</button><small>Works on mobile and desktop · No app required</small></div>
      </section>

      <section className="shade-finder section" id="story">
        <div><p className="eyebrow">A little guidance</p><h2>Choose your<br /><em>moment.</em></h2></div>
        <div className="finder-controls"><p>What are you feeling today?</p><button className="select-button">Quietly iconic <ChevronDown size={17} /></button><div className="active-shade"><span className="swatch large" style={{ backgroundColor: activeShade.color }} /><div><strong>{activeShade.name}</strong><span>{activeShade.tone}</span></div><Sparkles size={20} /></div><button className="text-link" onClick={() => setActiveShade(shades[(shades.indexOf(activeShade) + 1) % shades.length])}>Show me another <ArrowRight size={16} /></button></div>
      </section>

      <footer><a className="wordmark" href="#top">LUXE<span>LIPS</span></a><p>Color, considered.</p><span>© 2026 LuxeLips</span></footer>
    </main>
  )
}

export default App