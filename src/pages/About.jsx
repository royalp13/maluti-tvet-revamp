import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchAboutData } from '../services/api'
import {
  Shield, Target, Lightbulb, Briefcase,
  Eye, RefreshCw, Users, Leaf,
  Award, BookOpen, Building2, ChevronDown, ChevronUp,
  MapPin, ArrowRight, CheckCircle2, GraduationCap, BadgeCheck
} from 'lucide-react'

// ═══════════════════════════════════════════════════
// LOCAL ASSET IMPORTS
// ═══════════════════════════════════════════════════
import heroImg from '../assets/hero.png'
import historyImg from '../assets/graduates.jpg'
import student1 from '../assets/student1.jpg'
import student2 from '../assets/student2.jpeg'
import student3 from '../assets/student3.jpg'
import governanceImg from '../assets/leadership1.jpg'
import ctaImg from '../assets/applications.jpeg'
import valuesImg from '../assets/slide-1.jpg'

// Campus Imports
import bethlehem from '../assets/campuses/bethlehem.webp'
import bonamelo from '../assets/campuses/bonamelo.webp'
import harrismith from '../assets/campuses/harrismith.webp'
import itemoheleng from '../assets/campuses/itemoheleng.webp'
import kwetlisong from '../assets/campuses/kwetlisong.webp'
import lerelatshepe from '../assets/campuses/lerelatshepe.webp'
import phuthaditjhaba from '../assets/campuses/phuthaditjhaba.webp'
import sefikeng from '../assets/campuses/sefikeng.webp'

const valueIcons = {
  'Integrity': Shield,
  'Accountability': Target,
  'Innovation': Lightbulb,
  'Professionalism': Briefcase,
  'Transparency': Eye,
  'Redress': RefreshCw,
  'Inclusiveness': Users,
  'Sustainability': Leaf,
}

// Map the imported local images so the rest of the component functions identically
const IMAGES = {
  hero: heroImg,
  history: historyImg,
  workshop: student1,
  modernCampus: student3,
  digitalLearning: student2,
  governance: governanceImg,
  cta: ctaImg,
  values: valuesImg,
}

const campusImages = [
  bethlehem,
  bonamelo,
  harrismith,
  itemoheleng,
  kwetlisong,
  lerelatshepe,
  phuthaditjhaba,
  sefikeng
]

export default function About() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [openCampus, setOpenCampus] = useState(null)

  useEffect(() => {
    fetchAboutData().then(d => {
      setData(d)
      setLoading(false)
    })
  }, [])

  if (loading) return (
    <div style={styles.loadingWrap}>
      <div style={styles.loadingSpinner} />
      <p style={styles.loadingText}>Loading…</p>
    </div>
  )

  return (
    <main style={{ fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif", color: '#1a1a1a' }}>

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section style={{ ...styles.hero, backgroundImage: `url(${IMAGES.hero})` }}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <span style={styles.heroEyebrow}>Who We Are</span>
          <h1 style={styles.heroTitle}>About Maluti TVET College</h1>
          <p style={styles.heroSub}>
            A public Technical Vocational Education and Training institution serving the
            North Eastern Free State since 2002 - committed to transforming lives through
            practical, accredited, and industry-relevant education.
          </p>
          <div style={styles.heroBadges}>
            {['Est. 2002', 'Umalusi Accredited', 'DHET Registered', '8 Campuses', 'NSFAS Approved'].map((b, i) => (
              <span key={i} style={styles.heroBadge}>{b}</span>
            ))}
          </div>
        </div>
        {/* Diagonal bottom edge */}
        <div style={styles.heroEdge} />
      </section>

      {/* ─── QUICK STATS BAR ──────────────────────────────── */}
      <section style={styles.statsBar}>
        <div style={styles.container}>
          <div style={styles.statsGrid}>
            {[
              { value: '22+', label: 'Years of Excellence' },
              { value: '8', label: 'Campuses Across Free State' },
              { value: '40K+', label: 'Alumni in the Workforce' },
              { value: '100%', label: 'Government Accredited' },
            ].map((s, i) => (
              <div key={i} style={styles.statItem}>
                <span style={styles.statValue}>{s.value}</span>
                <span style={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HISTORY & BACKGROUND ─────────────────────────── */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.historyGrid}>
            <div style={styles.historyImgWrap}>
              <img
                src={IMAGES.history}
                alt="Maluti TVET College graduates"
                style={styles.historyImg}
              />
              <div style={styles.historyImgBadge}>
                <GraduationCap size={18} color="#fff" />
                <span>Est. 1 September 2002</span>
              </div>
            </div>
            <div style={styles.historyText}>
              <span style={styles.sectionEyebrow}>Our History</span>
              <h2 style={styles.sectionTitleLeft}>Rooted in the Free State, Built for the Nation</h2>
              <p style={styles.bodyText}>{data.history.description}</p>
              <p style={styles.bodyText}>
                Operating under the <strong>Continuing Education and Training (CET) Act 16 of 2006</strong>,
                the college is mandated to address national skills shortages, combat youth unemployment,
                and drive artisan development across the Free State and beyond.
              </p>
              <div style={styles.historyStats}>
                {[
                  { label: 'Founded', value: '2002' },
                  { label: 'Campuses', value: '8' },
                  { label: 'Governing Act', value: 'CET Act 16 of 2006' },
                  { label: 'Corporate Office', value: 'Bethlehem' },
                ].map((s, i) => (
                  <div key={i} style={styles.historyStat}>
                    <span style={styles.historyStatVal}>{s.value}</span>
                    <span style={styles.historyStatLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS IN ACTION (image row) ─────────────────── */}
      <section style={styles.imageRowSection}>
        <div style={styles.imageRowGrid}>
          <div style={{ ...styles.imageRowItem, backgroundImage: `url(${IMAGES.workshop})` }}>
            <div style={styles.imageRowOverlay}>
              <span style={styles.imageRowLabel}>Engineering & Trades</span>
            </div>
          </div>
          <div style={{ ...styles.imageRowItem, backgroundImage: `url(${IMAGES.modernCampus})` }}>
            <div style={styles.imageRowOverlay}>
              <span style={styles.imageRowLabel}>Modern Campuses</span>
            </div>
          </div>
          <div style={{ ...styles.imageRowItem, backgroundImage: `url(${IMAGES.digitalLearning})` }}>
            <div style={styles.imageRowOverlay}>
              <span style={styles.imageRowLabel}>Digital Learning</span>
            </div>
          </div>
          <div style={{ ...styles.imageRowItem, backgroundImage: `url(${IMAGES.governance})` }}>
            <div style={styles.imageRowOverlay}>
              <span style={styles.imageRowLabel}>Professional Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─────────────────────────────── */}
      <section style={{ ...styles.section, background: '#f4f8fc' }}>
        <div style={styles.container}>
          <span style={styles.sectionEyebrow}>Our Purpose</span>
          <h2 style={styles.sectionTitle}>Mission & Vision</h2>
          <div style={styles.mvGrid}>
            <div style={styles.mvCard}>
              <div style={styles.mvAccent} />
              <div style={styles.mvIconWrap}>
                <Target size={26} color="#0E7BB5" />
              </div>
              <h3 style={styles.mvTitle}>Our Mission</h3>
              <p style={styles.mvText}>{data.mission}</p>
            </div>
            <div style={{ ...styles.mvCard, ...styles.mvCardAlt }}>
              <div style={{ ...styles.mvAccent, background: '#FFB800' }} />
              <div style={{ ...styles.mvIconWrap, background: '#fff8e6' }}>
                <Eye size={26} color="#FFB800" />
              </div>
              <h3 style={styles.mvTitle}>Our Vision</h3>
              <p style={styles.mvText}>{data.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COLOUR IDENTITY ──────────────────────────────── */}
      <section style={styles.section}>
        <div style={styles.container}>
          <span style={styles.sectionEyebrow}>Brand Identity</span>
          <h2 style={styles.sectionTitle}>The Meaning Behind Our Colours</h2>
          <p style={styles.sectionSub}>
            Every colour in the Maluti TVET College identity carries deliberate symbolic meaning
            rooted in the heritage and aspirations of the institution and its community.
          </p>
          <div style={styles.colourGrid}>
            {data.colorMeaning.map((c, i) => (
              <div key={i} style={styles.colourCard}>
                <div style={{
                  ...styles.colourSwatch,
                  background: c.color,
                  border: c.color === '#fff' || c.color === '#ffffff' ? '2px solid #e2e8f0' : 'none',
                }} />
                <h4 style={styles.colourLabel}>{c.label}</h4>
                <p style={styles.colourMeaning}>{c.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ──────────────────────────────────── */}
      <section style={{ ...styles.valuesSection, backgroundImage: `url(${IMAGES.values})` }}>
        <div style={styles.valuesOverlay} />
        <div style={{ ...styles.container, position: 'relative', zIndex: 1 }}>
          <span style={styles.sectionEyebrowWhite}>What We Stand For</span>
          <h2 style={styles.sectionTitleWhite}>Our Core Values</h2>
          <p style={styles.sectionSubWhite}>
            These eight values govern every decision, interaction, and initiative at
            Maluti TVET College - from the boardroom to the classroom.
          </p>
          <div style={styles.valuesGrid}>
            {data.values.map((v, i) => {
              const Icon = valueIcons[v.value] || Shield
              return (
                <div key={i} style={styles.valueCard}>
                  <div style={styles.valueIconWrap}>
                    <Icon size={22} color="#FFB800" />
                  </div>
                  <h3 style={styles.valueTitle}>{v.value}</h3>
                  <p style={styles.valueDesc}>{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP ───────────────────────────────────── */}
      <section style={styles.section}>
        <div style={styles.container}>
          <span style={styles.sectionEyebrow}>Executive Management</span>
          <h2 style={styles.sectionTitle}>College Leadership</h2>
          <p style={styles.sectionSub}>
            Maluti TVET College is guided by an experienced executive management team
            committed to academic excellence, institutional integrity, and community impact.
          </p>
          <div style={styles.leadershipGrid}>
            {data.leadership.map((l, i) => (
              <div key={i} style={styles.leaderCard}>
                <div style={styles.leaderAvatarWrap}>
                  <div style={styles.leaderAvatar}>{l.initials}</div>
                  <div style={styles.leaderAvatarRing} />
                </div>
                <h3 style={styles.leaderName}>{l.name}</h3>
                <p style={styles.leaderTitle}>{l.title}</p>
                <div style={styles.leaderDivider} />
                <p style={styles.leaderDesc}>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GOVERNANCE ───────────────────────────────────── */}
      <section style={{ ...styles.section, background: '#f4f8fc' }}>
        <div style={styles.container}>
          <span style={styles.sectionEyebrow}>Corporate Governance</span>
          <h2 style={styles.sectionTitle}>Institutional Governance</h2>
          <p style={styles.sectionSub}>
            As a public institution, Maluti TVET College operates under rigorous statutory
            governance frameworks mandated by the CET Act 16 of 2006 and overseen by the DHET.
          </p>
          <div style={styles.govGrid}>
            <div style={styles.govCard}>
              <img src={IMAGES.governance} alt="Governance" style={styles.govImg} />
              <div style={styles.govCardBody}>
                <div style={styles.govIconWrap}>
                  <Building2 size={22} color="#0E7BB5" />
                </div>
                <h3 style={styles.govTitle}>College Council</h3>
                <p style={styles.govText}>{data.governance.council}</p>
                <p style={styles.govRespTitle}>Council Responsibilities:</p>
                <ul style={styles.govList}>
                  {data.governance.responsibilities.map((r, i) => (
                    <li key={i} style={styles.govListItem}>
                      <CheckCircle2 size={13} color="#0E7BB5" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div style={styles.govCard}>
              <div style={styles.govCardImgAlt}>
                <BookOpen size={48} color="rgba(255,255,255,0.3)" />
                <span style={styles.govCardImgLabel}>Academic Board</span>
              </div>
              <div style={styles.govCardBody}>
                <div style={styles.govIconWrap}>
                  <BookOpen size={22} color="#0E7BB5" />
                </div>
                <h3 style={styles.govTitle}>Academic Board</h3>
                <p style={styles.govText}>{data.governance.academicBoard}</p>
                <div style={styles.govExtraList}>
                  {[
                    'Unqualified AGSA audit outcomes published annually',
                    'Five-Year Strategic Plan and Annual Performance Plans published',
                    'Full compliance with CET Act 16 of 2006 governance requirements',
                  ].map((item, i) => (
                    <div key={i} style={styles.govExtraItem}>
                      <Award size={14} color="#FFB800" style={{ flexShrink: 0 }} />
                      <span style={styles.govExtraText}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Documents */}
          <div style={styles.docsBox}>
            <div style={styles.docsBoxLeft}>
              <h3 style={styles.docsTitle}>Corporate Publications</h3>
              <p style={styles.docsDesc}>
                In accordance with Section 44 of the CET Act, the college publishes all
                strategic and performance documents below on the official college website.
              </p>
              <a href="https://www.malutitvet.co.za" target="_blank" rel="noreferrer" style={styles.docsBtn}>
                View All Documents <ArrowRight size={14} style={{ marginLeft: 4 }} />
              </a>
            </div>
            <div style={styles.docsList}>
              {[
                'Five-Year Strategic Plan',
                'Annual Performance Plan (APP)',
                'Annual Report',
                'Auditor-General (AGSA) Audit Outcomes',
                'College Council Minutes (abridged)',
                'Supply Chain Management Policy',
              ].map((d, i) => (
                <div key={i} style={styles.docsItem}>
                  <BadgeCheck size={14} color="#0E7BB5" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ACCREDITATION ────────────────────────────────── */}
      <section style={styles.section}>
        <div style={styles.container}>
          <span style={styles.sectionEyebrow}>Quality Assurance</span>
          <h2 style={styles.sectionTitle}>Accreditation & Oversight</h2>
          <p style={styles.sectionSub}>
            Maluti TVET College operates under the authority of recognised national bodies
            that guarantee the quality and recognition of all qualifications issued.
          </p>
          <div style={styles.accredGrid}>
            {[
              { badge: 'DHET', name: 'Dept. of Higher Education & Training', role: 'Statutory authority responsible for public TVET colleges. Funds, regulates and monitors all programmes offered.', link: 'https://www.dhet.gov.za' },
              { badge: 'Umalusi', name: 'Council for Quality Assurance', role: 'Quality assures all NC(V) and NATED programmes. Certificates bear the Umalusi quality mark.', link: 'https://www.umalusi.org.za' },
              { badge: 'QCTO', name: 'Quality Council for Trades & Occupations', role: 'Oversees occupational qualifications including trade tests, learnerships and artisan programmes.', link: 'https://www.qcto.org.za' },
              { badge: 'NSFAS', name: 'National Student Financial Aid Scheme', role: 'Provides bursaries and allowances to qualifying students enrolled at Maluti TVET College.', link: 'https://www.nsfas.org.za' },
            ].map((a, i) => (
              <div key={i} style={styles.accredCard}>
                <div style={styles.accredBadge}>{a.badge}</div>
                <h4 style={styles.accredName}>{a.name}</h4>
                <p style={styles.accredRole}>{a.role}</p>
                <a href={a.link} target="_blank" rel="noreferrer" style={styles.accredLink}>
                  Visit Website <ArrowRight size={12} style={{ marginLeft: 2 }} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CAMPUSES ─────────────────────────────────────── */}
      <section style={{ ...styles.section, background: '#f4f8fc' }}>
        <div style={styles.container}>
          <span style={styles.sectionEyebrow}>Across the Free State</span>
          <h2 style={styles.sectionTitle}>Our 8 Campuses</h2>
          <p style={styles.sectionSub}>
            Each campus offers a unique blend of programmes designed to meet the skills needs
            of its local community and the national economy.
          </p>
          <div style={styles.campusGrid}>
            {data.campuses.map((c, i) => (
              <div key={i} style={styles.campusCard}>
                <div
                  style={{
                    ...styles.campusImg,
                    backgroundImage: `url(${campusImages[i % campusImages.length]})`,
                  }}
                >
                  <div style={styles.campusImgOverlay} />
                  <span style={styles.campusRoleBadge}>{c.role || c.type || 'Campus'}</span>
                </div>
                <div style={styles.campusBody}>
                  <h3 style={styles.campusName}>{c.name}</h3>
                  <p style={styles.campusTown}>
                    <MapPin size={11} style={{ marginRight: 3 }} />{c.town}
                  </p>
                  <p style={styles.campusSpec}>{c.specialisation || c.focus || 'General TVET programmes offered'}</p>
                  <button
                    style={styles.campusExpandBtn}
                    onClick={() => setOpenCampus(openCampus === i ? null : i)}
                  >
                    {openCampus === i ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    {openCampus === i ? 'Less info' : 'More info'}
                  </button>
                  {openCampus === i && (
                    <div style={styles.campusAddress}>
                      <p><strong>Address:</strong> {c.address}</p>
                      {c.phone && <p><strong>Tel:</strong> {c.phone}</p>}
                      {c.email && <p><strong>Email:</strong> {c.email}</p>}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FRAUD HOTLINE BANNER ─────────────────────────── */}
      <section style={styles.fraudSection}>
        <div style={styles.container}>
          <div style={styles.fraudInner}>
            <div>
              <h3 style={styles.fraudTitle}>Report Fraud or Corruption</h3>
              <p style={styles.fraudDesc}>
                Maluti TVET College has a zero-tolerance policy on fraud and corruption.
                All reports are confidential. Do <strong>not</strong> pay cash to any
                college staff member - all payments via EFT only.
              </p>
            </div>
            <div style={styles.fraudContact}>
              <span style={styles.fraudNumber}>0800 333 178</span>
              <span style={styles.fraudNote}>Free · 24 hrs · Confidential</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section style={{ ...styles.ctaSection, backgroundImage: `url(${IMAGES.cta})` }}>
        <div style={styles.ctaOverlay}>
          <span style={styles.sectionEyebrowWhite}>Take the Next Step</span>
          <h2 style={styles.ctaTitle}>Begin Your Journey at Maluti TVET College</h2>
          <p style={styles.ctaSub}>
            Applications are open for 2026. Join thousands of students who have
            built successful careers through quality technical and vocational education.
          </p>
          <div style={styles.ctaBtns}>
            <Link to="/admissions" style={styles.btnPrimary}>Apply Now</Link>
            <Link to="/programmes" style={styles.btnOutline}>Explore Programmes</Link>
          </div>
        </div>
      </section>

    </main>
  )
}

/* ═══════════════════════════════════════════════
   STYLES
═══════════════════════════════════════════════ */
const styles = {
  loadingWrap: {
    height: '60vh', display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', gap: 16,
  },
  loadingSpinner: {
    width: 36, height: 36, borderRadius: '50%',
    border: '3px solid #e8e8e8', borderTopColor: '#0E7BB5',
    animation: 'spin 0.8s linear infinite',
  },
  loadingText: { color: '#0E7BB5', fontSize: 14 },

  /* ── Hero ── */
  hero: {
    position: 'relative',
    minHeight: '88vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(135deg, rgba(10,50,90,0.85) 0%, rgba(14,123,181,0.60) 60%, rgba(0,0,0,0.45) 100%)',
  },
  heroContent: {
    position: 'relative', zIndex: 1,
    maxWidth: 760, margin: '0 auto',
    padding: '120px 24px 100px',
    textAlign: 'center',
  },
  heroEyebrow: {
    display: 'inline-block',
    background: 'rgba(255,184,0,0.2)',
    border: '1px solid rgba(255,184,0,0.5)',
    color: '#FFB800',
    fontSize: 11, fontWeight: 700,
    letterSpacing: '3px', textTransform: 'uppercase',
    padding: '5px 16px', borderRadius: 20, marginBottom: 20,
  },
  heroTitle: {
    fontSize: 'clamp(32px, 5vw, 56px)',
    fontWeight: 800, color: '#fff',
    letterSpacing: '-1px', lineHeight: 1.1,
    marginBottom: 20,
  },
  heroSub: {
    fontSize: 17, color: 'rgba(255,255,255,0.85)',
    lineHeight: 1.8, marginBottom: 32,
    maxWidth: 620, margin: '0 auto 32px',
  },
  heroBadges: { display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' },
  heroBadge: {
    background: 'rgba(255,255,255,0.12)',
    border: '1px solid rgba(255,255,255,0.3)',
    color: '#fff', fontSize: 12, fontWeight: 600,
    padding: '6px 14px', borderRadius: 20,
    backdropFilter: 'blur(4px)',
  },
  heroEdge: {
    position: 'absolute', bottom: -1, left: 0, right: 0,
    height: 60,
    background: '#fff',
    clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
  },

  /* ── Stats Bar ── */
  statsBar: {
    background: '#0E7BB5',
    padding: '32px 24px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: 24,
  },
  statItem: {
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', gap: 4,
    padding: '8px 0',
    borderRight: '1px solid rgba(255,255,255,0.2)',
  },
  statValue: {
    fontSize: 36, fontWeight: 800, color: '#FFB800', lineHeight: 1,
  },
  statLabel: {
    fontSize: 12, color: 'rgba(255,255,255,0.85)',
    textAlign: 'center', fontWeight: 500,
  },

  /* ── Shared ── */
  container: { maxWidth: 1200, margin: '0 auto', padding: '0 24px' },
  section: { padding: '90px 24px' },
  sectionEyebrow: {
    display: 'block',
    color: '#0E7BB5', fontSize: 11, fontWeight: 700,
    letterSpacing: '3px', textTransform: 'uppercase',
    marginBottom: 10, textAlign: 'center',
  },
  sectionEyebrowWhite: {
    display: 'block',
    color: '#FFB800', fontSize: 11, fontWeight: 700,
    letterSpacing: '3px', textTransform: 'uppercase',
    marginBottom: 10, textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 'clamp(26px, 3.5vw, 38px)',
    fontWeight: 800, color: '#0a2a4a',
    textAlign: 'center', letterSpacing: '-0.5px',
    marginBottom: 14,
  },
  sectionTitleLeft: {
    fontSize: 'clamp(22px, 3vw, 32px)',
    fontWeight: 800, color: '#0a2a4a',
    letterSpacing: '-0.5px', marginBottom: 16,
  },
  sectionSub: {
    color: '#64748b', fontSize: 16,
    textAlign: 'center', lineHeight: 1.8,
    maxWidth: 620, margin: '0 auto 52px',
  },
  sectionTitleWhite: {
    fontSize: 'clamp(26px, 3.5vw, 38px)',
    fontWeight: 800, color: '#fff',
    textAlign: 'center', letterSpacing: '-0.5px', marginBottom: 14,
  },
  sectionSubWhite: {
    color: 'rgba(255,255,255,0.8)', fontSize: 16,
    textAlign: 'center', lineHeight: 1.8,
    maxWidth: 600, margin: '0 auto 52px',
  },
  bodyText: { color: '#475569', lineHeight: 1.8, fontSize: 15, marginBottom: 16 },

  /* ── History ── */
  historyGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 64, alignItems: 'center',
    '@media(max-width:768px)': { gridTemplateColumns: '1fr' },
  },
  historyImgWrap: { position: 'relative', borderRadius: 12, overflow: 'hidden' },
  historyImg: {
    width: '100%', height: 420,
    objectFit: 'cover', display: 'block',
    borderRadius: 12,
  },
  historyImgBadge: {
    position: 'absolute', bottom: 16, left: 16,
    background: 'rgba(14,123,181,0.92)',
    color: '#fff', display: 'flex', alignItems: 'center', gap: 8,
    padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600,
    backdropFilter: 'blur(6px)',
  },
  historyText: {},
  historyStats: {
    display: 'grid', gridTemplateColumns: '1fr 1fr',
    gap: 16, marginTop: 28,
  },
  historyStat: {
    background: '#f4f8fc',
    border: '1px solid #e2ecf5',
    borderLeft: '3px solid #0E7BB5',
    borderRadius: 8, padding: '14px 16px',
    display: 'flex', flexDirection: 'column', gap: 4,
  },
  historyStatVal: { fontSize: 18, fontWeight: 800, color: '#0E7BB5' },
  historyStatLabel: { fontSize: 12, color: '#64748b', fontWeight: 500 },

  /* ── Image Row ── */
  imageRowSection: { padding: 0 },
  imageRowGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', height: 240 },
  imageRowItem: {
    backgroundSize: 'cover', backgroundPosition: 'center',
    position: 'relative', overflow: 'hidden',
  },
  imageRowOverlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
    display: 'flex', alignItems: 'flex-end', padding: 16,
    transition: 'background 0.3s',
  },
  imageRowLabel: { color: '#fff', fontSize: 13, fontWeight: 700, letterSpacing: '0.5px' },

  /* ── Mission & Vision ── */
  mvGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginTop: 40 },
  mvCard: {
    background: '#fff',
    borderRadius: 12,
    padding: '36px 32px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
    position: 'relative',
    overflow: 'hidden',
  },
  mvCardAlt: {},
  mvAccent: {
    position: 'absolute', top: 0, left: 0, right: 0,
    height: 4, background: '#0E7BB5',
  },
  mvIconWrap: {
    width: 52, height: 52, borderRadius: 12,
    background: '#e8f4fc',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: 16,
  },
  mvTitle: { fontSize: 20, fontWeight: 700, color: '#0a2a4a', marginBottom: 12 },
  mvText: { color: '#475569', lineHeight: 1.8, fontSize: 15 },

  /* ── Colour Identity ── */
  colourGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: 20, marginTop: 40,
  },
  colourCard: {
    background: '#fff', border: '1px solid #e2e8f0',
    borderRadius: 12, padding: '24px 20px',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
  },
  colourSwatch: { width: 56, height: 56, borderRadius: '50%' },
  colourLabel: { fontSize: 14, fontWeight: 700, color: '#0a2a4a', textAlign: 'center' },
  colourMeaning: { fontSize: 13, color: '#64748b', lineHeight: 1.6, textAlign: 'center' },

  /* ── Values ── */
  valuesSection: {
    padding: '100px 24px',
    backgroundSize: 'cover', backgroundPosition: 'center',
    position: 'relative',
  },
  valuesOverlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(135deg, rgba(10,30,70,0.93) 0%, rgba(14,123,181,0.88) 100%)',
  },
  valuesGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 20,
  },
  valueCard: {
    background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: 12, padding: '28px 24px',
    backdropFilter: 'blur(8px)',
    transition: 'background 0.2s, transform 0.2s',
  },
  valueIconWrap: {
    width: 44, height: 44, borderRadius: 10,
    background: 'rgba(255,184,0,0.15)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: 14,
  },
  valueTitle: { fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 8 },
  valueDesc: { fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 },

  /* ── Leadership ── */
  leadershipGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 24, marginTop: 40,
  },
  leaderCard: {
    background: '#fff', border: '1px solid #e2e8f0',
    borderRadius: 12, padding: '32px 24px',
    textAlign: 'center',
    boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
    transition: 'box-shadow 0.2s, transform 0.2s',
  },
  leaderAvatarWrap: { position: 'relative', display: 'inline-block', marginBottom: 16 },
  leaderAvatar: {
    width: 72, height: 72, borderRadius: '50%',
    background: 'linear-gradient(135deg, #0E7BB5, #0a5a8a)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 22, fontWeight: 800, color: '#fff',
  },
  leaderAvatarRing: {
    position: 'absolute', inset: -3, borderRadius: '50%',
    border: '2px solid #FFB800',
    pointerEvents: 'none',
  },
  leaderName: { fontSize: 16, fontWeight: 700, color: '#0a2a4a', marginBottom: 4 },
  leaderTitle: { fontSize: 13, color: '#0E7BB5', fontWeight: 600, marginBottom: 12 },
  leaderDivider: { height: 1, background: '#e2e8f0', margin: '0 auto 12px', width: 40 },
  leaderDesc: { fontSize: 13, color: '#64748b', lineHeight: 1.7 },

  /* ── Governance ── */
  govGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 40 },
  govCard: {
    background: '#fff', borderRadius: 12, overflow: 'hidden',
    border: '1px solid #e2e8f0',
    boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
  },
  govImg: { width: '100%', height: 180, objectFit: 'cover', display: 'block' },
  govCardImgAlt: {
    height: 180, background: 'linear-gradient(135deg, #0E7BB5, #0a3a60)',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', gap: 8,
  },
  govCardImgLabel: { color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' },
  govCardBody: { padding: '24px' },
  govIconWrap: {
    width: 44, height: 44, borderRadius: 10,
    background: '#e8f4fc',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: 12,
  },
  govTitle: { fontSize: 18, fontWeight: 700, color: '#0a2a4a', marginBottom: 10 },
  govText: { fontSize: 14, color: '#475569', lineHeight: 1.7, marginBottom: 16 },
  govRespTitle: { fontSize: 13, fontWeight: 600, color: '#0a2a4a', marginBottom: 10 },
  govList: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 },
  govListItem: { display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#475569', lineHeight: 1.5 },
  govExtraList: { display: 'flex', flexDirection: 'column', gap: 12 },
  govExtraItem: { display: 'flex', alignItems: 'flex-start', gap: 10 },
  govExtraText: { fontSize: 13, color: '#475569', lineHeight: 1.6 },

  /* ── Documents Box ── */
  docsBox: {
    marginTop: 40,
    background: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: 12,
    padding: '32px 36px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 40,
    alignItems: 'center',
    boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
  },
  docsBoxLeft: {},
  docsTitle: { fontSize: 20, fontWeight: 700, color: '#0a2a4a', marginBottom: 10 },
  docsDesc: { fontSize: 14, color: '#64748b', lineHeight: 1.7, marginBottom: 20 },
  docsBtn: {
    display: 'inline-flex', alignItems: 'center',
    background: '#0E7BB5', color: '#fff',
    textDecoration: 'none', padding: '10px 22px',
    borderRadius: 8, fontSize: 14, fontWeight: 600,
    transition: 'background 0.2s',
  },
  docsList: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  docsItem: {
    display: 'flex', alignItems: 'center', gap: 8,
    background: '#f4f8fc', border: '1px solid #e2ecf5',
    borderRadius: 6, padding: '8px 14px',
    fontSize: 13, color: '#334155',
  },

  /* ── Accreditation ── */
  accredGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
    gap: 20, marginTop: 40,
  },
  accredCard: {
    background: '#fff', border: '1px solid #e2e8f0',
    borderTop: '4px solid #0E7BB5',
    borderRadius: 10, padding: '24px',
    display: 'flex', flexDirection: 'column', gap: 8,
    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
  },
  accredBadge: { fontSize: 22, fontWeight: 800, color: '#0E7BB5', letterSpacing: '-0.5px' },
  accredName: { fontSize: 14, fontWeight: 700, color: '#0a2a4a' },
  accredRole: { fontSize: 13, color: '#64748b', lineHeight: 1.6, flex: 1 },
  accredLink: {
    display: 'inline-flex', alignItems: 'center',
    color: '#0E7BB5', fontSize: 13, fontWeight: 600, textDecoration: 'none',
    marginTop: 4,
  },

  /* ── Campus Cards ── */
  campusGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
    gap: 20, marginTop: 40,
  },
  campusCard: {
    background: '#fff', borderRadius: 12, overflow: 'hidden',
    border: '1px solid #e2e8f0',
    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
    transition: 'box-shadow 0.2s, transform 0.2s',
  },
  campusImg: {
    height: 170, backgroundSize: 'cover', backgroundPosition: 'center',
    position: 'relative', display: 'flex', alignItems: 'flex-end', padding: 12,
  },
  campusImgOverlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
  },
  campusRoleBadge: {
    position: 'relative', zIndex: 1,
    background: 'rgba(14,123,181,0.9)',
    color: '#fff', fontSize: 10, fontWeight: 700,
    padding: '4px 10px', borderRadius: 4,
    backdropFilter: 'blur(4px)',
    textTransform: 'uppercase', letterSpacing: '0.5px',
  },
  campusBody: { padding: '16px', display: 'flex', flexDirection: 'column', gap: 6 },
  campusName: { fontSize: 15, fontWeight: 700, color: '#0E7BB5' },
  campusTown: { fontSize: 11, color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', display: 'flex', alignItems: 'center' },
  campusSpec: { fontSize: 13, color: '#475569', lineHeight: 1.6 },
  campusExpandBtn: {
    background: 'none', border: 'none', color: '#0E7BB5',
    fontSize: 12, fontWeight: 600, cursor: 'pointer',
    textAlign: 'left', padding: '4px 0',
    display: 'flex', alignItems: 'center', gap: 4, marginTop: 4,
  },
  campusAddress: {
    fontSize: 13, color: '#475569',
    background: '#f4f8fc', padding: '10px 12px',
    borderRadius: 8, marginTop: 6,
    display: 'flex', flexDirection: 'column', gap: 4, lineHeight: 1.6,
  },

  /* ── Fraud Banner ── */
  fraudSection: {
    background: '#0a1e3a',
    padding: '40px 24px',
  },
  fraudInner: {
    maxWidth: 1200, margin: '0 auto',
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', flexWrap: 'wrap', gap: 24,
  },
  fraudTitle: { fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 },
  fraudDesc: { fontSize: 14, color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, maxWidth: 560 },
  fraudContact: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, flexShrink: 0 },
  fraudNumber: { fontSize: 30, fontWeight: 800, color: '#FFB800', letterSpacing: 1 },
  fraudNote: { fontSize: 11, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '1.5px' },

  /* ── CTA ── */
  ctaSection: { backgroundSize: 'cover', backgroundPosition: 'center' },
  ctaOverlay: {
    background: 'rgba(10,30,70,0.85)',
    padding: '96px 24px', textAlign: 'center',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0,
  },
  ctaTitle: {
    fontSize: 'clamp(28px, 4vw, 44px)',
    fontWeight: 800, color: '#fff',
    marginBottom: 16, letterSpacing: '-0.5px',
    marginTop: 12,
  },
  ctaSub: {
    color: 'rgba(255,255,255,0.8)', fontSize: 16,
    marginBottom: 36, lineHeight: 1.8,
    maxWidth: 520,
  },
  ctaBtns: { display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' },
  btnPrimary: {
    background: '#FFB800', color: '#000',
    textDecoration: 'none', padding: '14px 36px',
    borderRadius: 8, fontSize: 15, fontWeight: 700,
  },
  btnOutline: {
    background: 'transparent', color: '#fff',
    textDecoration: 'none', padding: '14px 36px',
    borderRadius: 8, fontSize: 15, fontWeight: 600,
    border: '2px solid rgba(255,255,255,0.4)',
  },
}