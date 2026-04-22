import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchAboutData } from '../services/api'
import {
  Shield, Target, Lightbulb, Briefcase,
  Eye, RefreshCw, Users, Leaf,
  Award, BookOpen, Building2, ChevronDown, ChevronUp
} from 'lucide-react'

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
    <div style={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0E7BB5' }}>
      <p style={{ fontSize: '16px' }}>Loading...</p>
    </div>
  )

  return (
    <main>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <p style={styles.heroTag}>Who We Are</p>
          <h1 style={styles.heroTitle}>About Maluti TVET College</h1>
          <p style={styles.heroSub}>
            A public Technical Vocational Education and Training institution serving the
            North Eastern Free State since 2002 — committed to transforming lives through
            practical, accredited, and industry-relevant education.
          </p>
          <div style={styles.heroBadges}>
            {['Est. 2002', 'Umalusi Accredited', 'DHET Registered', '8 Campuses', 'NSFAS Approved'].map((b, i) => (
              <span key={i} style={styles.heroBadge}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* History & Background */}
      <section style={styles.historySection}>
        <div style={styles.container}>
          <div style={styles.historyGrid}>
            <div style={styles.historyImg} />
            <div style={styles.historyText}>
              <p style={styles.sectionTag}>Our History</p>
              <h2 style={styles.sectionTitleLeft}>Established 1 September 2002</h2>
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

      {/* Mission & Vision */}
      <section style={styles.mvSection}>
        <div style={styles.container}>
          <div style={styles.mvGrid}>
            <div style={styles.mvCard}>
              <div style={styles.mvIconWrap}>
                <Target size={28} color="#0E7BB5" />
              </div>
              <h3 style={styles.mvTitle}>Our Mission</h3>
              <p style={styles.mvText}>{data.mission}</p>
            </div>
            <div style={{ ...styles.mvCard, borderTopColor: '#FFB800' }}>
              <div style={{ ...styles.mvIconWrap, background: '#fff8e6' }}>
                <Eye size={28} color="#FFB800" />
              </div>
              <h3 style={styles.mvTitle}>Our Vision</h3>
              <p style={styles.mvText}>{data.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Colour Identity */}
      <section style={styles.colourSection}>
        <div style={styles.container}>
          <p style={styles.sectionTag}>Brand Identity</p>
          <h2 style={styles.sectionTitle}>The Meaning Behind Our Colours</h2>
          <p style={styles.sectionSub}>
            Every colour in the Maluti TVET College identity carries deliberate symbolic meaning
            rooted in the heritage and aspirations of the institution and its community.
          </p>
          <div style={styles.colourGrid}>
            {data.colorMeaning.map((c, i) => (
              <div key={i} style={styles.colourCard}>
                <div style={{ ...styles.colourSwatch, background: c.color, border: c.color === '#fff' ? '2px solid #e8e8e8' : 'none' }} />
                <h4 style={styles.colourLabel}>{c.label}</h4>
                <p style={styles.colourMeaning}>{c.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={styles.valuesSection}>
        <div style={styles.valuesOverlay} />
        <div style={{ ...styles.container, position: 'relative', zIndex: 1 }}>
          <p style={styles.sectionTagWhite}>What We Stand For</p>
          <h2 style={styles.sectionTitleWhite}>Our Core Values</h2>
          <p style={styles.sectionSubWhite}>
            These eight values govern every decision, interaction, and initiative at
            Maluti TVET College — from the boardroom to the classroom.
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

      {/* Leadership */}
      <section style={styles.section}>
        <div style={styles.container}>
          <p style={styles.sectionTag}>Executive Management</p>
          <h2 style={styles.sectionTitle}>College Leadership</h2>
          <p style={styles.sectionSub}>
            Maluti TVET College is led by an experienced executive management team
            committed to academic excellence, institutional integrity, and community impact.
          </p>
          <div style={styles.leadershipGrid}>
            {data.leadership.map((l, i) => (
              <div key={i} style={styles.leaderCard}>
                <div style={styles.leaderAvatar}>{l.initials}</div>
                <h3 style={styles.leaderName}>{l.name}</h3>
                <p style={styles.leaderTitle}>{l.title}</p>
                <p style={styles.leaderDesc}>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section style={{ ...styles.section, background: '#f8f9fa' }}>
        <div style={styles.container}>
          <p style={styles.sectionTag}>Corporate Governance</p>
          <h2 style={styles.sectionTitle}>Institutional Governance</h2>
          <p style={styles.sectionSub}>
            As a public institution, Maluti TVET College operates under rigorous statutory
            governance frameworks mandated by the CET Act 16 of 2006 and overseen by the DHET.
          </p>
          <div style={styles.govGrid}>
            <div style={styles.govCard}>
              <div style={styles.govIconWrap}>
                <Building2 size={24} color="#0E7BB5" />
              </div>
              <h3 style={styles.govTitle}>College Council</h3>
              <p style={styles.govText}>{data.governance.council}</p>
              <div style={styles.govResponsibilities}>
                <p style={styles.govRespTitle}>Council Responsibilities:</p>
                <ul style={styles.govList}>
                  {data.governance.responsibilities.map((r, i) => (
                    <li key={i} style={styles.govListItem}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div style={styles.govCard}>
              <div style={styles.govIconWrap}>
                <BookOpen size={24} color="#0E7BB5" />
              </div>
              <h3 style={styles.govTitle}>Academic Board</h3>
              <p style={styles.govText}>{data.governance.academicBoard}</p>
              <div style={styles.govExtra}>
                <div style={styles.govExtraItem}>
                  <Award size={16} color="#FFB800" />
                  <span>Unqualified AGSA audit outcomes published annually</span>
                </div>
                <div style={styles.govExtraItem}>
                  <BookOpen size={16} color="#FFB800" />
                  <span>Five-Year Strategic Plan and Annual Performance Plans published</span>
                </div>
                <div style={styles.govExtraItem}>
                  <Shield size={16} color="#FFB800" />
                  <span>Full compliance with CET Act 16 of 2006 governance requirements</span>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Documents */}
          <div style={styles.docsBox}>
            <h3 style={styles.docsTitle}>Corporate Publications</h3>
            <p style={styles.docsDesc}>
              In accordance with Section 44 of the CET Act, the college publishes all
              strategic and performance documents. The following are available on the
              official college website.
            </p>
            <div style={styles.docsList}>
              {['Five-Year Strategic Plan', 'Annual Performance Plan (APP)', 'Annual Report', 'Auditor-General (AGSA) Audit Outcomes', 'College Council Minutes (abridged)', 'Supply Chain Management Policy'].map((d, i) => (
                <div key={i} style={styles.docsItem}>
                  <BookOpen size={14} color="#0E7BB5" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
            <a href="https://www.malutitvet.co.za" target="_blank" rel="noreferrer" style={styles.docsBtn}>
              View Publications on malutitvet.co.za
            </a>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section style={styles.section}>
        <div style={styles.container}>
          <p style={styles.sectionTag}>Quality Assurance</p>
          <h2 style={styles.sectionTitle}>Accreditation & Regulatory Bodies</h2>
          <p style={styles.sectionSub}>
            All qualifications offered at Maluti TVET College are nationally accredited
            and quality-assured by the relevant statutory bodies — ensuring your
            qualification is recognised by employers and further education institutions.
          </p>
          <div style={styles.accredGrid}>
            {data.accreditation.map((a, i) => (
              <div key={i} style={styles.accredCard}>
                <div style={styles.accredBadge}>{a.body}</div>
                <p style={styles.accredRole}>{a.role}</p>
                <a href={a.website} target="_blank" rel="noreferrer" style={styles.accredLink}>
                  Visit {a.body}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campuses */}
      <section style={{ ...styles.section, background: '#f8f9fa' }}>
        <div style={styles.container}>
          <p style={styles.sectionTag}>Our Footprint</p>
          <h2 style={styles.sectionTitle}>8 Campuses Across the Free State</h2>
          <p style={styles.sectionSub}>
            Each campus serves a distinct geographic community and academic specialisation,
            ensuring quality education is accessible across the North Eastern Free State.
          </p>
          <div style={styles.campusGrid}>
            {data.campuses.map((c, i) => (
              <div key={i} style={styles.campusCard}>
                <div style={{ ...styles.campusImg, backgroundImage: `url(${c.image})` }}>
                  <span style={styles.campusRoleBadge}>{c.role}</span>
                </div>
                <div style={styles.campusBody}>
                  <h3 style={styles.campusName}>{c.name}</h3>
                  <p style={styles.campusTown}>{c.town}, Free State</p>
                  <p style={styles.campusSpec}>{c.specialisation}</p>
                  <button
                    style={styles.campusExpandBtn}
                    onClick={() => setOpenCampus(openCampus === i ? null : i)}
                  >
                    {openCampus === i ? 'Hide details' : 'Show address'}
                    {openCampus === i ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                  {openCampus === i && (
                    <p style={styles.campusAddress}>{c.address}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fraud Hotline */}
      <section style={styles.fraudSection}>
        <div style={styles.container}>
          <div style={styles.fraudInner}>
            <div>
              <h3 style={styles.fraudTitle}>Fraud & Corruption Hotline</h3>
              <p style={styles.fraudDesc}>
                Maluti TVET College is committed to zero tolerance for fraud, corruption, and
                maladministration. If you witness or suspect any irregularity, report it
                confidentially through the Whistle Blower service — available 24 hours a day.
              </p>
            </div>
            <div style={styles.fraudContact}>
              <span style={styles.fraudNumber}>0800 333 178</span>
              <span style={styles.fraudNote}>Free call — 24 hours — Confidential</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <div style={styles.ctaInner}>
          <h2 style={styles.ctaTitle}>Ready to Be Part of Our Story?</h2>
          <p style={styles.ctaSub}>
            Join thousands of students across the Free State who have transformed their lives
            through education at Maluti TVET College.
          </p>
          <div style={styles.ctaBtns}>
            <Link to="/admissions" style={styles.btnPrimary}
              onMouseEnter={e => e.currentTarget.style.background = '#e6a600'}
              onMouseLeave={e => e.currentTarget.style.background = '#FFB800'}
            >Apply Now</Link>
            <Link to="/programmes" style={styles.btnOutline}>View Programmes</Link>
          </div>
        </div>
      </section>

    </main>
  )
}

const styles = {
  hero: {
    position: 'relative',
    backgroundImage: 'url(https://images.unsplash.com/photo-1592303637753-ce1843d6c9c5?w=1600&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '460px',
    display: 'flex',
    alignItems: 'center',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(14,123,181,0.94) 0%, rgba(0,0,0,0.65) 100%)',
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '80px 24px',
    width: '100%',
  },
  heroTag: {
    color: '#FFB800',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
  heroTitle: {
    color: '#fff',
    fontSize: 'clamp(32px, 5vw, 52px)',
    fontWeight: '800',
    marginBottom: '16px',
    letterSpacing: '-1px',
  },
  heroSub: {
    color: 'rgba(255,255,255,0.88)',
    fontSize: '17px',
    lineHeight: '1.8',
    maxWidth: '600px',
    marginBottom: '28px',
  },
  heroBadges: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  heroBadge: {
    background: 'rgba(255,255,255,0.15)',
    border: '1px solid rgba(255,255,255,0.3)',
    color: '#fff',
    fontSize: '12px',
    fontWeight: '600',
    padding: '5px 14px',
    borderRadius: '20px',
  },
  historySection: {
    padding: '80px 24px',
    background: '#fff',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  historyGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '64px',
    alignItems: 'center',
  },
  historyImg: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
    minHeight: '400px',
  },
  historyText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  sectionTag: {
    color: '#0E7BB5',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: '4px',
    textAlign: 'center',
  },
  sectionTagLeft: {
    color: '#0E7BB5',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: '4px',
  },
  sectionTitle: {
    fontSize: 'clamp(24px, 3vw, 36px)',
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: '12px',
    letterSpacing: '-0.5px',
  },
  sectionTitleLeft: {
    fontSize: 'clamp(22px, 2.5vw, 32px)',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '8px',
    letterSpacing: '-0.5px',
  },
  sectionSub: {
    color: '#666',
    fontSize: '16px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto 48px',
    lineHeight: '1.8',
  },
  bodyText: {
    fontSize: '15px',
    color: '#444',
    lineHeight: '1.8',
  },
  historyStats: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginTop: '8px',
  },
  historyStat: {
    background: '#f8f9fa',
    borderRadius: '8px',
    padding: '14px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  historyStatVal: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#0E7BB5',
  },
  historyStatLabel: {
    fontSize: '12px',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  mvSection: {
    padding: '80px 24px',
    background: '#f8f9fa',
  },
  mvGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  mvCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderTop: '4px solid #0E7BB5',
    borderRadius: '10px',
    padding: '32px',
  },
  mvIconWrap: {
    background: '#e8f4fc',
    width: '52px',
    height: '52px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
  },
  mvTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '12px',
  },
  mvText: {
    fontSize: '15px',
    color: '#555',
    lineHeight: '1.8',
  },
  colourSection: {
    padding: '80px 24px',
    background: '#fff',
  },
  colourGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '24px',
    marginTop: '40px',
  },
  colourCard: {
    background: '#f8f9fa',
    borderRadius: '10px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  colourSwatch: {
    width: '48px',
    height: '48px',
    borderRadius: '8px',
  },
  colourLabel: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#1a1a1a',
  },
  colourMeaning: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.7',
  },
  valuesSection: {
    position: 'relative',
    backgroundImage: 'url(https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1600&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    padding: '96px 24px',
  },
  valuesOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(14,123,181,0.93)',
  },
  sectionTagWhite: {
    color: '#FFB800',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: '8px',
    textAlign: 'center',
  },
  sectionTitleWhite: {
    fontSize: 'clamp(24px, 3vw, 36px)',
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '12px',
    letterSpacing: '-0.5px',
  },
  sectionSubWhite: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '16px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto 48px',
    lineHeight: '1.8',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px',
  },
  valueCard: {
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '10px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    border: '1px solid rgba(255,255,255,0.15)',
  },
  valueIconWrap: {
    width: '44px',
    height: '44px',
    background: 'rgba(255,184,0,0.15)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#fff',
  },
  valueDesc: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.82)',
    lineHeight: '1.7',
  },
  section: {
    padding: '80px 24px',
    background: '#fff',
  },
  leadershipGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px',
    marginTop: '40px',
  },
  leaderCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '10px',
    padding: '28px 24px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  leaderAvatar: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: '#0E7BB5',
    color: '#fff',
    fontSize: '20px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4px',
  },
  leaderName: {
    fontSize: '17px',
    fontWeight: '700',
    color: '#1a1a1a',
  },
  leaderTitle: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#0E7BB5',
    background: '#e8f4fc',
    padding: '4px 12px',
    borderRadius: '20px',
  },
  leaderDesc: {
    fontSize: '13px',
    color: '#666',
    lineHeight: '1.7',
    textAlign: 'center',
  },
  govGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '24px',
    marginBottom: '32px',
  },
  govCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '10px',
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  govIconWrap: {
    width: '48px',
    height: '48px',
    background: '#e8f4fc',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  govTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#1a1a1a',
  },
  govText: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.8',
  },
  govResponsibilities: {
    background: '#f8f9fa',
    borderRadius: '8px',
    padding: '16px',
    marginTop: '4px',
  },
  govRespTitle: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#0E7BB5',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '10px',
  },
  govList: {
    paddingLeft: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  govListItem: {
    fontSize: '13px',
    color: '#444',
    lineHeight: '1.5',
  },
  govExtra: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '8px',
  },
  govExtraItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    fontSize: '14px',
    color: '#444',
    lineHeight: '1.5',
  },
  docsBox: {
    background: '#f8f9fa',
    border: '1px solid #e8e8e8',
    borderRadius: '10px',
    padding: '28px',
  },
  docsTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '8px',
  },
  docsDesc: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.7',
    marginBottom: '20px',
  },
  docsList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '20px',
  },
  docsItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '6px',
    padding: '8px 14px',
    fontSize: '13px',
    color: '#333',
  },
  docsBtn: {
    background: '#0E7BB5',
    color: '#fff',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '600',
    display: 'inline-block',
  },
  accredGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px',
    marginTop: '40px',
  },
  accredCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '10px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    borderTop: '4px solid #0E7BB5',
  },
  accredBadge: {
    fontSize: '20px',
    fontWeight: '800',
    color: '#0E7BB5',
    letterSpacing: '-0.5px',
  },
  accredRole: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.6',
    flex: 1,
  },
  accredLink: {
    color: '#0E7BB5',
    fontSize: '13px',
    fontWeight: '600',
    textDecoration: 'none',
  },
  campusGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginTop: '40px',
  },
  campusCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  campusImg: {
    height: '160px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '12px',
  },
  campusRoleBadge: {
    background: 'rgba(0,0,0,0.6)',
    color: '#fff',
    fontSize: '11px',
    fontWeight: '600',
    padding: '4px 10px',
    borderRadius: '4px',
    backdropFilter: 'blur(4px)',
  },
  campusBody: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  campusName: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#0E7BB5',
  },
  campusTown: {
    fontSize: '12px',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    fontWeight: '600',
  },
  campusSpec: {
    fontSize: '13px',
    color: '#555',
    lineHeight: '1.6',
  },
  campusExpandBtn: {
    background: 'none',
    border: 'none',
    color: '#0E7BB5',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    textAlign: 'left',
    padding: '4px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    marginTop: '4px',
  },
  campusAddress: {
    fontSize: '13px',
    color: '#666',
    background: '#f8f9fa',
    padding: '8px 12px',
    borderRadius: '6px',
    marginTop: '4px',
  },
  fraudSection: {
    background: '#1a1a1a',
    padding: '48px 24px',
  },
  fraudInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '24px',
  },
  fraudTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#fff',
    marginBottom: '8px',
  },
  fraudDesc: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.75)',
    lineHeight: '1.7',
    maxWidth: '560px',
  },
  fraudContact: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '4px',
    flexShrink: 0,
  },
  fraudNumber: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#FFB800',
    letterSpacing: '1px',
  },
  fraudNote: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.6)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  cta: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1592303637753-ce1843d6c9c5?w=1600&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  ctaInner: {
    background: 'rgba(0,0,0,0.78)',
    padding: '96px 24px',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: 'clamp(28px, 4vw, 44px)',
    fontWeight: '800',
    color: '#fff',
    marginBottom: '16px',
    letterSpacing: '-0.5px',
  },
  ctaSub: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '16px',
    marginBottom: '36px',
    lineHeight: '1.7',
    maxWidth: '520px',
    margin: '0 auto 36px',
  },
  ctaBtns: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    background: '#FFB800',
    color: '#000',
    textDecoration: 'none',
    padding: '14px 36px',
    borderRadius: '6px',
    fontSize: '15px',
    fontWeight: '700',
    transition: 'background 0.2s',
  },
  btnOutline: {
    background: 'transparent',
    color: '#fff',
    textDecoration: 'none',
    padding: '14px 36px',
    borderRadius: '6px',
    fontSize: '15px',
    fontWeight: '600',
    border: '2px solid rgba(255,255,255,0.5)',
  },
}