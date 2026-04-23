import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, LogIn, FileText } from 'lucide-react'
import { assets } from '../services/api'

const links = [
  { label: 'Home', path: '/' },
  { label: 'Programmes', path: '/programmes' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname])

  return (
    <>
      {/* Top info strip */}
      <div style={styles.topStrip}>
        <div style={styles.topContainer}>
          <span style={styles.topItem}>2026 Applications Open</span>
          <span style={styles.topDivider}>·</span>
          <span style={styles.topItem}>Fraud Hotline: 0800 333 178</span>
          <span style={styles.topDivider}>·</span>
          <a href="https://www.malutitvet.co.za" target="_blank" rel="noreferrer" style={styles.topLink}>malutitvet.co.za</a>
        </div>
      </div>

      <nav style={{ ...styles.nav, boxShadow: scrolled ? '0 4px 16px rgba(0,0,0,0.25)' : '0 2px 10px rgba(0,0,0,0.15)' }}>
        <div style={styles.container}>
          <Link to="/" style={styles.logo}>
            <img src={assets.logo} alt="Maluti TVET College" style={styles.logoImg} />
          </Link>

          <ul style={styles.desktopLinks} className="desktop-only">
            {links.map(link => (
              <li key={link.path} style={{ listStyle: 'none' }}>
                <Link
                  to={link.path}
                  style={{
                    ...styles.link,
                    color: location.pathname === link.path ? '#FFB800' : '#fff',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#FFB800'}
                  onMouseLeave={e => e.currentTarget.style.color = location.pathname === link.path ? '#FFB800' : '#fff'}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div style={styles.ctaGroup} className="desktop-only">
            <Link to="/portal" style={styles.portalBtn}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <LogIn size={14} />
              Portal
            </Link>
            <Link to="/admissions" style={styles.applyBtn}
              onMouseEnter={e => e.currentTarget.style.background = '#e6a600'}
              onMouseLeave={e => e.currentTarget.style.background = '#FFB800'}
            >
              Apply Now
            </Link>
          </div>

          <button
            style={styles.hamburger}
            className="mobile-only"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
          </button>
        </div>

        {menuOpen && (
          <div style={styles.mobileMenu}>
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  ...styles.mobileLink,
                  color: location.pathname === link.path ? '#FFB800' : '#fff',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/portal" style={styles.mobilePortal}>
              <LogIn size={14} /> Student Portal
            </Link>
            <Link to="/admissions" style={styles.mobileApply}>
              Apply Now
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}

const styles = {
  topStrip: {
    background: '#1a1a1a',
    padding: '6px 24px',
    fontSize: '11px',
  },
  topContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '10px',
    flexWrap: 'wrap',
    color: 'rgba(255,255,255,0.7)',
  },
  topItem: { fontSize: '11px' },
  topDivider: { color: 'rgba(255,255,255,0.3)' },
  topLink: { color: '#FFB800', textDecoration: 'none', fontWeight: 600 },
  nav: {
    background: '#0E7BB5',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    transition: 'box-shadow 0.2s',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    height: '88px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: { textDecoration: 'none', display: 'flex', alignItems: 'center' },
  logoImg: { height: '68px', width: 'auto', objectFit: 'contain' },
  desktopLinks: {
    display: 'flex', listStyle: 'none', gap: '4px',
    alignItems: 'center', padding: 0, margin: 0,
  },
  link: {
    textDecoration: 'none', fontSize: '14px', fontWeight: 500,
    padding: '6px 14px', borderRadius: '4px',
    transition: 'color 0.2s', display: 'block',
  },
  ctaGroup: { display: 'flex', gap: '10px', alignItems: 'center' },
  portalBtn: {
    display: 'flex', alignItems: 'center', gap: '6px',
    color: '#fff', textDecoration: 'none', padding: '8px 14px',
    borderRadius: '6px', border: '1.5px solid rgba(255,255,255,0.4)',
    fontSize: '13px', fontWeight: 500, transition: 'background 0.2s',
  },
  applyBtn: {
    background: '#FFB800', color: '#000', textDecoration: 'none',
    padding: '9px 20px', borderRadius: '6px', fontSize: '14px',
    fontWeight: 700, transition: 'background 0.2s', whiteSpace: 'nowrap',
  },
  hamburger: {
    display: 'none', background: 'none', border: 'none',
    cursor: 'pointer', padding: '4px',
  },
  mobileMenu: {
    background: '#0a6a9e', display: 'flex', flexDirection: 'column',
    padding: '16px 24px 20px', gap: '4px',
  },
  mobileLink: {
    textDecoration: 'none', fontSize: '15px', padding: '12px 0',
    borderBottom: '1px solid rgba(255,255,255,0.1)', fontWeight: 500,
  },
  mobilePortal: {
    display: 'flex', alignItems: 'center', gap: '8px',
    color: '#fff', textDecoration: 'none', padding: '10px 16px',
    borderRadius: '6px', border: '1.5px solid rgba(255,255,255,0.3)',
    fontSize: '14px', fontWeight: 500, marginTop: '12px',
    justifyContent: 'center',
  },
  mobileApply: {
    background: '#FFB800', color: '#000', textDecoration: 'none',
    padding: '11px 16px', borderRadius: '6px', fontSize: '14px',
    fontWeight: 700, textAlign: 'center', marginTop: '4px',
  },
}