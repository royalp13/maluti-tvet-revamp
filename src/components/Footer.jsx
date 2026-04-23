import { Link } from 'react-router-dom'
import logo from '../assets/logo-white-bg.png'
import { 
  Globe, Phone, MapPin, AlertTriangle, Mail
} from 'lucide-react'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Our Programmes', path: '/programmes' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'About the College', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Student Portal', path: '/portal' },
]

const programmes = [
  'Electrical Engineering',
  'Business Management',
  'Information Technology',
  'Civil Engineering',
  'Financial Management',
  'Education & Development',
  'Hospitality & Tourism',
  'Human Resource Management',
]

const campuses = [
  'Main Campus-Phuthaditjhaba',
  'Bethlehem Campus-thlehem',
  'Harrismith Campus-Harrismith',
  'Bonamelo Campus-haditjhaba',
  'Itemoheleng Campus-uthaditjhaba',
  'Kwetlisong Campus-Riverside',
  'Lere la Tshepe Campus-Tseki Village',
  'Sefikeng Campus-Rosedale',
]

export default function Footer() {
  return (
    <footer style={styles.footer}>

      {/* NSFAS Strip */}
      <div style={styles.nsfasStrip}>
        <div style={styles.stripContainer}>
          <span style={styles.stripText}>
            NSFAS funding available for qualifying students-Apply at nsfas.org.za
          </span>
          <a href="https://www.nsfas.org.za" target="_blank" rel="noreferrer" style={styles.stripBtn}>
            Apply for NSFAS
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div style={styles.main}>
        <div style={styles.container}>
          <div style={styles.grid}>

            {/* Brand Column */}
            <div style={styles.brandCol}>
              <img src={logo} alt="Maluti TVET College" style={styles.footerLogo} />
              <p style={styles.tagline}>
                Great Place. Great Choice for Lifelong Learning.
              </p>
              <p style={styles.brandDesc}>
                A leading public Technical Vocational Education and Training institution
                in the North Eastern Free State, serving communities across 8 campuses
                since 2002.
              </p>
              <div style={styles.badges}>
                <span style={styles.badge}>Umalusi Accredited</span>
                <span style={styles.badge}>DHET Registered</span>
                <span style={styles.badge}>NSFAS Approved</span>
              </div>
              <div style={styles.social}>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" style={styles.socialBtn} aria-label="Facebook">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
                  </svg>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer" style={styles.socialBtn} aria-label="Twitter">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer" style={styles.socialBtn} aria-label="YouTube">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div style={styles.col}>
              <h4 style={styles.colTitle}>Quick Links</h4>
              <ul style={styles.linkList}>
                {quickLinks.map((l, i) => (
                  <li key={i}>
                    <Link to={l.path} style={styles.footerLink}>{l.label}</Link>
                  </li>
                ))}
                <li>
                  <a href="https://www.malutitvet.co.za" target="_blank" rel="noreferrer" style={styles.footerLink}>
                    Official College Website
                  </a>
                </li>
                <li>
                  <a href="https://www.nsfas.org.za" target="_blank" rel="noreferrer" style={styles.footerLink}>
                    NSFAS Portal
                  </a>
                </li>
              </ul>
            </div>

            {/* Programmes */}
            <div style={styles.col}>
              <h4 style={styles.colTitle}>Our Programmes</h4>
              <ul style={styles.linkList}>
                {programmes.map((p, i) => (
                  <li key={i}>
                    <Link to="/programmes" style={styles.footerLink}>{p}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Campuses & Contact */}
            <div style={styles.col}>
              <h4 style={styles.colTitle}>Our 8 Campuses</h4>
              <ul style={styles.linkList}>
                {campuses.map((c, i) => (
                  <li key={i} style={styles.campusItem}>
                    <MapPin size={12} color="#FFB800" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={styles.campusText}>{c}</span>
                  </li>
                ))}
              </ul>

              <h4 style={{ ...styles.colTitle, marginTop: '24px' }}>Contact</h4>
              <div style={styles.contactList}>
                <div style={styles.contactItem}>
                  <Globe size={14} color="#FFB800" />
                  <a href="https://www.malutitvet.co.za" target="_blank" rel="noreferrer" style={styles.contactLink}>
                    malutitvet.co.za
                  </a>
                </div>
                <div style={styles.contactItem}>
                  <Mail size={14} color="#FFB800" />
                  <span style={styles.contactText}>info@malutitvet.co.za</span>
                </div>
                <div style={styles.contactItem}>
                  <MapPin size={14} color="#FFB800" />
                  <span style={styles.contactText}>Corporate Office: Bethlehem, Free State</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Fraud Hotline */}
      <div style={styles.fraudBar}>
        <div style={styles.fraudContainer}>
          <div style={styles.fraudLeft}>
            <AlertTriangle size={16} color="#e74c3c" />
            <span style={styles.fraudText}>
              <strong>Fraud & Corruption Hotline:</strong> 0800 333 178-nWhistle Blower, free call, 24 hours.
              Do not pay cash to any college staff member.
            </span>
          </div>
          <a href="tel:0800333178" style={styles.fraudCall}>
            <Phone size={14} />
            0800 333 178
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottom}>
        <div style={styles.bottomContainer}>
          <p style={styles.copyright}>
            © {new Date().getFullYear()} Maluti TVET College. All rights reserved.
            Operating under the Department of Higher Education and Training (DHET).
          </p>
          <div style={styles.bottomLinks}>
            <a href="https://www.malutitvet.co.za" target="_blank" rel="noreferrer" style={styles.bottomLink}>
              Privacy Policy
            </a>
            <span style={styles.divider}>·</span>
            <a href="https://www.malutitvet.co.za" target="_blank" rel="noreferrer" style={styles.bottomLink}>
              Terms of Use
            </a>
            <span style={styles.divider}>·</span>
            <a href="https://www.malutitvet.co.za" target="_blank" rel="noreferrer" style={styles.bottomLink}>
              POPIA Notice
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}

const styles = {
  footer: {
    background: '#111',
    color: '#fff',
  },
  nsfasStrip: {
    background: '#FFB800',
    padding: '10px 24px',
  },
  stripContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '12px',
  },
  stripText: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#000',
  },
  stripBtn: {
    background: '#000',
    color: '#FFB800',
    textDecoration: 'none',
    padding: '6px 16px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '700',
    whiteSpace: 'nowrap',
  },
  main: {
    padding: '56px 24px 40px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
    gap: '48px',
  },
  brandCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  footerLogo: {
    height: '60px',
    width: 'auto',
    objectFit: 'contain',
    objectPosition: 'left',
    borderRadius: '6px',
  },
  tagline: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#FFB800',
    letterSpacing: '0.5px',
    margin: 0,
  },
  brandDesc: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.65)',
    lineHeight: '1.7',
    margin: 0,
  },
  badges: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
  },
  badge: {
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.15)',
    color: 'rgba(255,255,255,0.7)',
    fontSize: '10px',
    fontWeight: '600',
    padding: '3px 10px',
    borderRadius: '20px',
    letterSpacing: '0.3px',
  },
  social: {
    display: 'flex',
    gap: '8px',
    marginTop: '4px',
  },
  socialBtn: {
    width: '34px',
    height: '34px',
    borderRadius: '6px',
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textDecoration: 'none',
    transition: 'background 0.2s',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  colTitle: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#FFB800',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    margin: '0 0 4px',
    paddingBottom: '8px',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  footerLink: {
    color: 'rgba(255,255,255,0.65)',
    textDecoration: 'none',
    fontSize: '13px',
    lineHeight: '1.4',
    transition: 'color 0.15s',
  },
  campusItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '6px',
  },
  campusText: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: '12px',
    lineHeight: '1.4',
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
  },
  contactLink: {
    color: 'rgba(255,255,255,0.75)',
    textDecoration: 'none',
    fontSize: '13px',
  },
  contactText: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: '13px',
    lineHeight: '1.4',
  },
  fraudBar: {
    background: '#1a1a1a',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    padding: '14px 24px',
  },
  fraudContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '12px',
  },
  fraudLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flex: 1,
  },
  fraudText: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.65)',
    lineHeight: '1.5',
  },
  fraudCall: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: '#e74c3c',
    color: '#fff',
    textDecoration: 'none',
    padding: '7px 16px',
    borderRadius: '4px',
    fontSize: '13px',
    fontWeight: '700',
    whiteSpace: 'nowrap',
  },
  bottom: {
    background: '#0a0a0a',
    padding: '16px 24px',
    borderTop: '1px solid rgba(255,255,255,0.05)',
  },
  bottomContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '12px',
  },
  copyright: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.4)',
    margin: 0,
    lineHeight: '1.5',
  },
  bottomLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  bottomLink: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.4)',
    textDecoration: 'none',
  },
  divider: {
    color: 'rgba(255,255,255,0.2)',
    fontSize: '12px',
  },
}