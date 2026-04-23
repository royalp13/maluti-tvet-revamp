import { Link } from 'react-router-dom'
import { Home, BookOpen, FileText, Info, Phone, LogIn, MessageSquare, Database, Cloud, GitBranch } from 'lucide-react'

const pages = [
  { name: 'Home', path: '/', icon: Home, sections: ['Hero slideshow (3 slides, 6s interval)', 'Quick access bar (5 links)', 'Stats bar', 'Announcements (4 items)', 'About strip (split image/text)', 'Programmes preview grid (6 cards)', 'Campus grid (8 campuses)', 'NSFAS banner', 'Why Choose Us (6 reasons)', 'Testimonials (3 students)', 'CTA'] },
  { name: 'Programmes', path: '/programmes', icon: BookOpen, sections: ['Hero with stats', 'NC(V) vs NATED explainer (3 cards)', 'Search bar + filter tabs', '22 programme cards with expand', 'Pathway diagram (5 steps)', 'NSFAS banner', 'FAQ accordion (6 items)', 'CTA'] },
  { name: 'Admissions', path: '/admissions', icon: FileText, sections: ['Hero with apply CTA', 'Tab navigation (5 tabs)', '3-step admissions workflow', 'Entry requirements table', 'Documents checklist (6 docs)', 'NSFAS allowances (6 types)', 'Campus walk-in grid', 'WIL employer section', 'CTA'] },
  { name: 'About', path: '/about', icon: Info, sections: ['Hero with history badges', 'History & background (split)', 'Mission & Vision cards', 'Brand colour meaning (4 colours)', 'Core values (8 values)', 'Leadership grid (4 executives)', 'Governance (Council + Academic Board)', 'Corporate publications', 'Accreditation (4 bodies)', 'Campus detail grid', 'Fraud hotline strip', 'CTA'] },
  { name: 'Contact', path: '/contact', icon: Phone, sections: ['Hero with key contacts', 'Fraud banner', 'Enquiry form + departments', 'Campus contact grid (8 campuses)', 'Social media links', 'Important contacts (4 cards)'] },
  { name: 'Portal', path: '/portal', icon: LogIn, sections: ['Split screen login', 'Left: institutional info + Archie Mobile', 'Right: login form with Student/Staff/Lecturer tabs', 'Security notice', 'iEnabler gateway link', 'Fraud warning'] },
]

const deliverables = [
  { icon: FileText, title: 'Wireframes / UI Mockups', status: 'Complete', detail: '7 fully designed pages with mobile-first responsive layouts. Built directly in React to act as live wireframes.' },
  { icon: GitBranch, title: 'Repository Setup', status: 'Complete', detail: 'GitHub repository with structured branches, CI/CD via GitHub Actions, and full commit history.' },
  { icon: Cloud, title: 'Frontend Deployment', status: 'Live', detail: 'Deployed to Azure Static Web Apps (Free tier) with auto-deploy on every push to main.' },
  { icon: Database, title: 'API Skeleton Structure', status: 'Complete', detail: '5 named service endpoints in src/services/api.js simulating RESTful architecture. Each page fetches from its own endpoint.' },
  { icon: Cloud, title: 'Hosting Environment', status: 'Live', detail: 'Azure Static Web Apps + GitHub Actions pipeline-production-ready with preview environments per PR.' },
]

const apiEndpoints = [
  { method: 'GET', path: '/api/home', func: 'fetchHomeData()', returns: 'Slides, stats, announcements, events, testimonials, programmes preview, campuses' },
  { method: 'GET', path: '/api/programmes', func: 'fetchProgrammesData()', returns: 'NC(V) programmes (12), NATED programmes (10)' },
  { method: 'GET', path: '/api/admissions', func: 'fetchAdmissionsData()', returns: 'Application status, 3 steps, documents, requirements, NSFAS, WIL hours' },
  { method: 'GET', path: '/api/about', func: 'fetchAboutData()', returns: 'History, mission, values, colour meaning, leadership, governance, accreditation, campuses' },
  { method: 'GET', path: '/api/contact', func: 'fetchContactData()', returns: 'General contacts, departments, campus details, social media' },
  { method: 'POST', path: '/api/auth/login', func: 'mockLogin(user, pass, role)', returns: 'Authentication response (demo)' },
]

export default function Wireframes() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.container}>
          <p style={styles.heroTag}>Phase 2 Submission · The Battlefield</p>
          <h1 style={styles.heroTitle}>Project Architecture & Wireframes</h1>
          <p style={styles.heroSub}>
            A complete architectural overview of the Maluti TVET College website revamp -
            covering all five deliverables, the API skeleton, page structure, and hosting pipeline.
          </p>
        </div>
      </section>

      {/* Deliverables Checklist */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Deliverables Checklist</h2>
          <p style={styles.sectionSub}>All five required deliverables from the Phase 2 brief.</p>
          <div style={styles.deliverablesGrid}>
            {deliverables.map((d, i) => (
              <div key={i} style={styles.deliverableCard}>
                <div style={styles.deliverableIcon}>
                  <d.icon size={22} color="#0E7BB5" />
                </div>
                <div style={styles.deliverableBody}>
                  <div style={styles.deliverableHead}>
                    <h3 style={styles.deliverableTitle}>{d.title}</h3>
                    <span style={styles.statusBadge}>{d.status}</span>
                  </div>
                  <p style={styles.deliverableDetail}>{d.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Page Wireframes */}
      <section style={{ ...styles.section, background: '#f8f9fa' }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Page Structure & Wireframes</h2>
          <p style={styles.sectionSub}>Each page has been built as a live, responsive React component-functioning as the wireframe itself.</p>
          <div style={styles.pageGrid}>
            {pages.map((p, i) => (
              <div key={i} style={styles.pageCard}>
                <div style={styles.pageHeader}>
                  <div style={styles.pageIconWrap}>
                    <p.icon size={18} color="#0E7BB5" />
                  </div>
                  <div>
                    <h3 style={styles.pageName}>{p.name}</h3>
                    <span style={styles.pagePath}>{p.path}</span>
                  </div>
                </div>
                <ul style={styles.sectionList}>
                  {p.sections.map((s, j) => (
                    <li key={j} style={styles.sectionItem}>{s}</li>
                  ))}
                </ul>
                <Link to={p.path} style={styles.viewBtn}>View Live Page →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Skeleton */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>API Skeleton Architecture</h2>
          <p style={styles.sectionSub}>
            All page data flows through a centralised service layer in <code style={styles.code}>src/services/api.js</code>.
            Each function represents a REST endpoint that would, in production, call a backend API.
          </p>
          <div style={styles.apiTable}>
            <div style={styles.apiHead}>
              <span>Method</span>
              <span>Endpoint</span>
              <span>Service Function</span>
              <span>Returns</span>
            </div>
            {apiEndpoints.map((api, i) => (
              <div key={i} style={{ ...styles.apiRow, background: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                <span style={{ ...styles.methodBadge, background: api.method === 'GET' ? '#2ecc71' : '#FFB800', color: api.method === 'GET' ? '#fff' : '#000' }}>{api.method}</span>
                <span style={styles.apiPath}><code style={styles.code}>{api.path}</code></span>
                <span style={styles.apiFunc}><code style={styles.code}>{api.func}</code></span>
                <span style={styles.apiReturns}>{api.returns}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{ ...styles.section, background: '#0E7BB5' }}>
        <div style={styles.container}>
          <h2 style={{ ...styles.sectionTitle, color: '#fff' }}>Technology Stack</h2>
          <div style={styles.techGrid}>
            {[
              { cat: 'Frontend', items: 'React 18, Vite 8, React Router v7' },
              { cat: 'UI / Icons', items: 'Lucide React, custom design system' },
              { cat: 'Hosting', items: 'Azure Static Web Apps (Free tier)' },
              { cat: 'CI/CD', items: 'GitHub Actions auto-deploy on push' },
              { cat: 'Version Control', items: 'Git + GitHub, structured commits' },
              { cat: 'Architecture', items: 'Service layer pattern, component-based' },
            ].map((t, i) => (
              <div key={i} style={styles.techCard}>
                <h4 style={styles.techCat}>{t.cat}</h4>
                <p style={styles.techItems}>{t.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to site */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Ready to Review</h2>
          <p style={styles.sectionSub}>Explore the live pages to assess the full implementation.</p>
          <div style={styles.ctaBtns}>
            <Link to="/" style={styles.btnPrimary}>Back to Home</Link>
            <Link to="/programmes" style={styles.btnOutline}>View Programmes</Link>
            <Link to="/portal" style={styles.btnOutline}>Student Portal Demo</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

const styles = {
  /* General */
  page: {
    background: '#fff',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  },

  /* Hero */
  hero: {
    background: 'linear-gradient(135deg, #0E7BB5 0%, #0a5a8a 60%, #1a1a1a 100%)',
    padding: '96px 24px 64px',
    color: '#fff',
  },
  heroTag: {
    color: '#FFB800',
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
  heroTitle: {
    fontSize: 'clamp(28px, 4vw, 44px)',
    fontWeight: 800,
    marginBottom: '16px',
    letterSpacing: '-1px',
  },
  heroSub: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '17px',
    lineHeight: 1.8,
    maxWidth: '700px',
  },

  /* Section */
  section: {
    padding: '80px 0',
    background: '#fff',
  },
  sectionTitle: {
    fontSize: 'clamp(24px, 3vw, 34px)',
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: '12px',
    letterSpacing: '-0.5px',
  },
  sectionSub: {
    color: '#666',
    fontSize: '15px',
    lineHeight: 1.8,
    marginBottom: '40px',
    maxWidth: '700px',
  },

  /* Deliverables */
  deliverablesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '20px',
  },
  deliverableCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderLeft: '4px solid #0E7BB5',
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    gap: '16px',
  },
  deliverableIcon: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    background: '#e8f4fc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  deliverableBody: {
    flex: 1,
  },
  deliverableHead: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '6px',
  },
  deliverableTitle: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#1a1a1a',
  },
  statusBadge: {
    fontSize: '11px',
    fontWeight: 700,
    color: '#fff',
    background: '#2ecc71',
    padding: '3px 10px',
    borderRadius: '20px',
  },
  deliverableDetail: {
    fontSize: '13px',
    color: '#555',
    lineHeight: 1.7,
  },

  /* Pages */
  pageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '20px',
  },
  pageCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '10px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  pageHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '4px',
  },
  pageIconWrap: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    background: '#e8f4fc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageName: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#1a1a1a',
  },
  pagePath: {
    fontSize: '12px',
    color: '#0E7BB5',
    fontFamily: 'monospace',
  },
  sectionList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    flex: 1,
  },
  sectionItem: {
    fontSize: '12px',
    color: '#555',
    lineHeight: 1.6,
    paddingLeft: '12px',
    position: 'relative',
  },
  viewBtn: {
    background: '#0E7BB5',
    color: '#fff',
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: 600,
    textAlign: 'center',
    marginTop: '8px',
  },

  /* API Table */
  apiTable: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  apiHead: {
    display: 'grid',
    gridTemplateColumns: '80px 200px 220px 1fr',
    background: '#1a1a1a',
    color: '#FFB800',
    padding: '14px 20px',
    fontSize: '11px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    gap: '16px',
  },
  apiRow: {
    display: 'grid',
    gridTemplateColumns: '80px 200px 220px 1fr',
    padding: '14px 20px',
    gap: '16px',
    alignItems: 'center',
    borderBottom: '1px solid #f0f0f0',
  },
  methodBadge: {
    fontSize: '11px',
    fontWeight: 700,
    padding: '3px 10px',
    borderRadius: '4px',
    textAlign: 'center',
    letterSpacing: '0.5px',
  },
  apiPath: {},
  apiFunc: {},
  apiReturns: {
    fontSize: '13px',
    color: '#555',
    lineHeight: 1.5,
  },
  code: {
    fontFamily: '"SF Mono", Consolas, Monaco, monospace',
    background: '#f0f0f0',
    padding: '2px 6px',
    borderRadius: '4px',
    fontSize: '12px',
    color: '#0E7BB5',
  },

  /* Tech Stack */
  techGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px',
  },
  techCard: {
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '8px',
    padding: '20px',
    borderLeft: '3px solid #FFB800',
  },
  techCat: {
    fontSize: '12px',
    fontWeight: 700,
    color: '#FFB800',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '8px',
  },
  techItems: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.85)',
    lineHeight: 1.6,
  },

  /* CTA */
  ctaSection: {
    padding: '64px 24px',
    background: '#f8f9fa',
    textAlign: 'center',
  },
  ctaBtns: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '8px',
  },
  btnPrimary: {
    background: '#0E7BB5',
    color: '#fff',
    textDecoration: 'none',
    padding: '12px 28px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: 600,
  },
  btnOutline: {
    background: 'transparent',
    color: '#0E7BB5',
    textDecoration: 'none',
    padding: '12px 28px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: 600,
    border: '1.5px solid #0E7BB5',
  },
};