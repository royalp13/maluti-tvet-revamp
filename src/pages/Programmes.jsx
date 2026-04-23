import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { fetchProgrammesData } from '../services/api'
import {
  Search, Filter, BookOpen, Settings, BarChart3, Monitor,
  GraduationCap, Coffee, Wrench, Award, MapPin, Clock,
  CheckCircle2, ArrowRight, ChevronDown, ChevronUp,
  Target, Sparkles, Briefcase, Users, Building2, BadgeCheck
} from 'lucide-react'
import programmes from '../assets/programmes.png'


const fieldIcons = {
  Engineering: Settings,
  Business: BarChart3,
  Services: Coffee,
  Agriculture: Wrench,
  Utility: GraduationCap,
}

export default function Programmes() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('all')
  const [activeField, setActiveField] = useState('All Fields')
  const [search, setSearch] = useState('')
  const [expandedId, setExpandedId] = useState(null)

  useEffect(() => {
    fetchProgrammesData()
      .then(d => setData(d))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  const allProgrammes = useMemo(() => {
    if (!data) return []
    if (activeTab === 'ncv') return data.ncv
    if (activeTab === 'nated') return data.nated
    return [...data.ncv, ...data.nated]
  }, [data, activeTab])

  const fields = useMemo(() => {
    if (!data) return ['All Fields']
    const unique = [...new Set([...data.ncv, ...data.nated].map(p => p.field))]
    return ['All Fields', ...unique]
  }, [data])

  const filtered = useMemo(() => {
    return allProgrammes.filter(p => {
      const matchesField = activeField === 'All Fields' || p.field === activeField
      const matchesSearch =
        search === '' ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.careers.some(c => c.toLowerCase().includes(search.toLowerCase()))
      return matchesField && matchesSearch
    })
  }, [allProgrammes, activeField, search])

  if (loading) {
    return (
      <div style={styles.loading}>
        <div style={styles.loadingSpinner} />
        <p style={styles.loadingText}>Loading programmes...</p>
      </div>
    )
  }

  return (
    <main>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <div style={styles.heroBadge}>
            <BookOpen size={13} color="#FFB800" />
            <span>22 Accredited Programmes</span>
          </div>
          <p style={styles.heroTag}>Qualifications That Work</p>
          <h1 style={styles.heroTitle}>Our Programmes</h1>
          <p style={styles.heroSub}>
            National Certificate (Vocational) and NATED Report 191 programmes spanning
            Engineering, Business, Services, Agriculture, and Utility Studies - all
            accredited by Umalusi, QCTO, and DHET.
          </p>
          <div style={styles.heroStats}>
            <div style={styles.heroStat}>
              <span style={styles.heroStatNum}>{data.ncv.length}</span>
              <span style={styles.heroStatLabel}>NC(V) Programmes</span>
            </div>
            <div style={styles.heroStatDiv} />
            <div style={styles.heroStat}>
              <span style={styles.heroStatNum}>{data.nated.length}</span>
              <span style={styles.heroStatLabel}>NATED Programmes</span>
            </div>
            <div style={styles.heroStatDiv} />
            <div style={styles.heroStat}>
              <span style={styles.heroStatNum}>{fields.length - 1}</span>
              <span style={styles.heroStatLabel}>Study Fields</span>
            </div>
          </div>
        </div>
      </section>

      {/* NC(V) vs NATED Explainer */}
      <section style={styles.explainerSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeadCenter}>
            <p style={styles.sectionTag}>Choose Your Path</p>
            <h2 style={styles.sectionTitle}>NC(V) or NATED?</h2>
            <p style={styles.sectionSub}>
              Two accredited qualification frameworks, two different pathways - both lead
              to recognised certifications and employment opportunities.
            </p>
          </div>
          <div style={styles.explainerGrid}>
            <div style={{ ...styles.explainerCard, borderTopColor: '#0E7BB5' }}>
              <div style={styles.explainerIconWrap}>
                <Award size={22} color="#0E7BB5" />
              </div>
              <h3 style={styles.explainerTitle}>NC(V) - Level 2 to 4</h3>
              <p style={styles.explainerDesc}>
                Full-time, 3-year National Certificate (Vocational). Equivalent to Grade 12
                (Matric). Entry requires Grade 9 pass.
              </p>
              <ul style={styles.explainerList}>
                <li>3-year full-time programme</li>
                <li>7 subjects per level (4 vocational + 3 fundamentals)</li>
                <li>Accredited by Umalusi</li>
                <li>Enables entry to university, Higher Certificate, or N4</li>
              </ul>
            </div>
            <div style={{ ...styles.explainerCard, borderTopColor: '#FFB800' }}>
              <div style={{ ...styles.explainerIconWrap, background: '#fff8e6' }}>
                <Briefcase size={22} color="#FFB800" />
              </div>
              <h3 style={styles.explainerTitle}>NATED (Report 191)</h3>
              <p style={styles.explainerDesc}>
                N1-N6 trimester-based programmes. Strong theory + practical component.
                N6 + practical hours = National Diploma.
              </p>
              <ul style={styles.explainerList}>
                <li>N1-N3: 18 months total (3 trimesters each)</li>
                <li>N4-N6: 18 months + 2 years workplace practical</li>
                <li>Accredited by QCTO and DHET</li>
                <li>Leads to artisan trade test or National Diploma</li>
              </ul>
            </div>
            <div style={{ ...styles.explainerCard, borderTopColor: '#2ecc71' }}>
              <div style={{ ...styles.explainerIconWrap, background: '#e8f8f0' }}>
                <BadgeCheck size={22} color="#2ecc71" />
              </div>
              <h3 style={styles.explainerTitle}>Which Is Right for You?</h3>
              <p style={styles.explainerDesc}>
                Your current qualification and career goals determine the best pathway.
              </p>
              <ul style={styles.explainerList}>
                <li><strong>Grade 9-11:</strong> Start with NC(V) Level 2 or NATED N1</li>
                <li><strong>Matric:</strong> Enter NATED N4 or NC(V) for career switch</li>
                <li><strong>Artisan goal:</strong> NATED engineering + trade test</li>
                <li><strong>Management goal:</strong> NATED N4-N6 Business</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section style={styles.filterSection}>
        <div style={styles.container}>
          <div style={styles.filterBar}>
            <div style={styles.searchWrap}>
              <Search size={18} color="#999" style={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search programmes, subjects, or careers..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={styles.searchInput}
              />
            </div>
            <div style={styles.tabRow}>
              {[
                { id: 'all', label: 'All Programmes', count: data.ncv.length + data.nated.length },
                { id: 'ncv', label: 'NC(V)', count: data.ncv.length },
                { id: 'nated', label: 'NATED', count: data.nated.length },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    ...styles.tab,
                    background: activeTab === tab.id ? '#0E7BB5' : 'transparent',
                    color: activeTab === tab.id ? '#fff' : '#555',
                  }}
                >
                  {tab.label} <span style={styles.tabCount}>{tab.count}</span>
                </button>
              ))}
            </div>
          </div>
          <div style={styles.fieldRow}>
            <span style={styles.fieldLabel}>
              <Filter size={14} color="#666" /> Filter by field:
            </span>
            {fields.map(field => (
              <button
                key={field}
                onClick={() => setActiveField(field)}
                style={{
                  ...styles.fieldChip,
                  background: activeField === field ? '#FFB800' : '#fff',
                  color: activeField === field ? '#000' : '#555',
                  borderColor: activeField === field ? '#FFB800' : '#e0e0e0',
                }}
              >
                {field}
              </button>
            ))}
          </div>
          <p style={styles.resultCount}>
            Showing <strong>{filtered.length}</strong> of {allProgrammes.length} programmes
          </p>
        </div>
      </section>

      {/* Programmes Grid */}
      <section style={styles.progSection}>
        <div style={styles.container}>
          {filtered.length === 0 ? (
            <div style={styles.emptyState}>
              <Search size={48} color="#ccc" />
              <h3 style={styles.emptyTitle}>No programmes found</h3>
              <p style={styles.emptyDesc}>
                Try adjusting your search or filter criteria.
              </p>
              <button
                onClick={() => { setSearch(''); setActiveField('All Fields'); setActiveTab('all') }}
                style={styles.emptyBtn}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div style={styles.progGrid}>
              {filtered.map(p => {
                const FieldIcon = fieldIcons[p.field] || BookOpen
                const isNCV = p.levels.includes('Level')
                const isExpanded = expandedId === p.id
                return (
                  <div key={p.id} style={styles.progCard}>
                    <div style={{ ...styles.progImg, backgroundImage: `url(${p.image})` }}>
                      <div style={styles.progImgOverlay} />
                      <span style={{
                        ...styles.progTypeBadge,
                        background: isNCV ? '#0E7BB5' : '#FFB800',
                        color: isNCV ? '#fff' : '#000',
                      }}>
                        {isNCV ? 'NC(V)' : 'NATED'}
                      </span>
                      <span style={styles.progFieldBadge}>
                        <FieldIcon size={12} />
                        {p.field}
                      </span>
                    </div>
                    <div style={styles.progBody}>
                      <h3 style={styles.progTitle}>{p.title}</h3>
                      <div style={styles.progMeta}>
                        <span style={styles.progMetaItem}>
                          <Award size={13} color="#0E7BB5" />
                          {p.levels}
                        </span>
                        <span style={styles.progMetaItem}>
                          <Clock size={13} color="#0E7BB5" />
                          {p.duration.length > 40 ? `${p.duration.substring(0, 40)}...` : p.duration}
                        </span>
                      </div>
                      <p style={styles.progDesc}>{p.description}</p>

                      {isExpanded && (
                        <div style={styles.expandedContent}>
                          <div style={styles.expandSection}>
                            <h4 style={styles.expandTitle}>Entry Requirements</h4>
                            <p style={styles.expandText}>{p.entry}</p>
                          </div>
                          <div style={styles.expandSection}>
                            <h4 style={styles.expandTitle}>Duration</h4>
                            <p style={styles.expandText}>{p.duration}</p>
                          </div>
                          <div style={styles.expandSection}>
                            <h4 style={styles.expandTitle}>Key Subjects</h4>
                            <div style={styles.subjectList}>
                              {p.subjects.map((s, i) => (
                                <span key={i} style={styles.subjectChip}>{s}</span>
                              ))}
                            </div>
                          </div>
                          <div style={styles.expandSection}>
                            <h4 style={styles.expandTitle}>Career Opportunities</h4>
                            <div style={styles.careerList}>
                              {p.careers.map((c, i) => (
                                <div key={i} style={styles.careerItem}>
                                  <CheckCircle2 size={13} color="#2ecc71" />
                                  <span>{c}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div style={styles.expandSection}>
                            <h4 style={styles.expandTitle}>Available At</h4>
                            <p style={styles.expandText}>
                              <MapPin size={13} color="#0E7BB5" style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                              {p.campus}
                            </p>
                          </div>
                          <Link to="/admissions" style={styles.expandCta}>
                            Apply for this programme <ArrowRight size={14} />
                          </Link>
                        </div>
                      )}

                      <button
                        onClick={() => setExpandedId(isExpanded ? null : p.id)}
                        style={styles.expandBtn}
                      >
                        {isExpanded ? (
                          <>Hide details <ChevronUp size={14} /></>
                        ) : (
                          <>View full details <ChevronDown size={14} /></>
                        )}
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Pathway Diagram */}
      <section style={styles.pathwaySection}>
        <div style={styles.container}>
          <div style={styles.sectionHeadCenter}>
            <p style={styles.sectionTagWhite}>Your Journey</p>
            <h2 style={styles.sectionTitleWhite}>From Enrolment to Employment</h2>
            <p style={styles.sectionSubWhite}>
              A clear pathway from your current qualification to workplace-ready skills
              and nationally recognised certification.
            </p>
          </div>
          <div style={styles.pathway}>
            {[
              { num: '01', title: 'Choose Your Programme', desc: 'Select NC(V) or NATED based on your current qualification and career goals.' },
              { num: '02', title: 'Apply & Register', desc: 'Complete career guidance, placement assessment, and formal application.' },
              { num: '03', title: 'Study & Train', desc: 'Theory classes, practical workshops, and simulated workplace training.' },
              { num: '04', title: 'Trade Test / Practical', desc: 'NATED: Workplace hours + trade test. NC(V): Internal + external assessments.' },
              { num: '05', title: 'Qualify & Work', desc: 'Certified artisan, National Diploma, or further studies (Higher Certificate, Diploma, Degree).' },
            ].map((step, i) => (
              <div key={i} style={styles.pathwayStep}>
                <div style={styles.pathwayNum}>{step.num}</div>
                <h4 style={styles.pathwayTitle}>{step.title}</h4>
                <p style={styles.pathwayDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={styles.faqSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeadCenter}>
            <p style={styles.sectionTag}>Common Questions</p>
            <h2 style={styles.sectionTitle}>Frequently Asked</h2>
          </div>
          <div style={styles.faqList}>
            {[
              { q: 'Do I need Matric to study at Maluti TVET College?', a: 'Not necessarily. NC(V) Level 2 and NATED N1 only require a Grade 9 pass. However, NATED N4-N6 programmes require Matric or a completed N3 certificate. Engineering NATED programmes specifically require Mathematics and Physical Science - Mathematical Literacy is not accepted.' },
              { q: 'What is the difference between NC(V) and NATED?', a: 'NC(V) is a 3-year full-time qualification equivalent to Matric, accredited by Umalusi. NATED (Report 191) is trimester-based - N1-N3 for 18 months, then N4-N6 for another 18 months plus 2 years workplace practical. Both are nationally recognised.' },
              { q: 'Can I get NSFAS funding for my programme?', a: 'Yes, qualifying students receive NSFAS funding covering tuition, accommodation, transport, and incidentals. Household income threshold is R350,000 per annum. Apply at nsfas.org.za as early as possible.' },
              { q: 'How do I become a qualified artisan?', a: 'Complete NATED N1-N3 in your trade (e.g. Electrical, Mechanical), accumulate required workplace hours (logbook), then pass your QCTO trade test. This gives you artisan status recognised nationally.' },
              { q: 'What is the National Diploma pathway?', a: 'Complete NATED N4-N6 (18 months), then complete 2,000 practical hours for Business qualifications or 2,670 hours for Engineering. Submit your QCTO logbook to receive your National Diploma.' },
              { q: 'At which campuses can I study my chosen programme?', a: 'Each programme is offered at specific campuses based on infrastructure and specialisation. Click "View full details" on any programme above to see campus availability.' },
            ].map((faq, i) => (
              <details key={i} style={styles.faqItem}>
                <summary style={styles.faqQ}>
                  <span>{faq.q}</span>
                  <ChevronDown size={18} color="#0E7BB5" />
                </summary>
                <p style={styles.faqA}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <div style={styles.ctaOverlay} />
        <div style={styles.ctaInner}>
          <div style={styles.ctaBadge}>
            <Sparkles size={14} color="#FFB800" />
            <span>Applications Open for 2026</span>
          </div>
          <h2 style={styles.ctaTitle}>Found Your Programme?</h2>
          <p style={styles.ctaSub}>
            Take the next step. Applications for the 2026 academic year are open at all
            8 campuses. NSFAS funding available for qualifying students.
          </p>
          <div style={styles.ctaBtns}>
            <Link to="/admissions" style={styles.btnPrimary}>
              Start Your Application <ArrowRight size={16} />
            </Link>
            <Link to="/contact" style={styles.btnOutline}>
              Contact a Campus
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

const styles = {
  /* Loading */
  loading: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    background: '#fff',
  },
  loadingSpinner: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '3px solid #e8f4fc',
    borderTopColor: '#0E7BB5',
    animation: 'spin 0.8s linear infinite',
  },
  loadingText: {
    color: '#0E7BB5',
    fontSize: '14px',
    fontWeight: 500,
  },

  /* Hero */
  hero: {
    position: 'relative',
    backgroundImage: `url(${programmes})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '480px',
    display: 'flex',
    alignItems: 'center',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(14,123,181,0.94) 0%, rgba(0,0,0,0.72) 100%)',
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '96px 24px',
    width: '100%',
  },
  heroBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(255,184,0,0.15)',
    border: '1px solid rgba(255,184,0,0.4)',
    color: '#FFB800',
    fontSize: '12px',
    fontWeight: 600,
    padding: '6px 14px',
    borderRadius: '20px',
    marginBottom: '16px',
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
    color: '#fff',
    fontSize: 'clamp(34px, 5vw, 56px)',
    fontWeight: 800,
    marginBottom: '16px',
    letterSpacing: '-1px',
  },
  heroSub: {
    color: 'rgba(255,255,255,0.88)',
    fontSize: '17px',
    lineHeight: 1.8,
    maxWidth: '640px',
    marginBottom: '36px',
  },
  heroStats: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '28px',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '12px',
    padding: '18px 28px',
    backdropFilter: 'blur(8px)',
    flexWrap: 'wrap',
  },
  heroStat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2px',
  },
  heroStatNum: {
    color: '#FFB800',
    fontSize: '26px',
    fontWeight: 800,
  },
  heroStatLabel: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  heroStatDiv: {
    width: '1px',
    height: '32px',
    background: 'rgba(255,255,255,0.2)',
  },

  /* Explainer Section */
  explainerSection: {
    padding: '80px 24px',
    background: '#fff',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionHeadCenter: {
    textAlign: 'center',
    marginBottom: '48px',
  },
  sectionTag: {
    color: '#0E7BB5',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: '8px',
  },
  sectionTitle: {
    fontSize: 'clamp(26px, 3vw, 38px)',
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: '12px',
    letterSpacing: '-0.5px',
  },
  sectionSub: {
    color: '#666',
    fontSize: '16px',
    lineHeight: 1.8,
    maxWidth: '620px',
    margin: '0 auto',
  },
  explainerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  },
  explainerCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderTop: '4px solid #0E7BB5',
    borderRadius: '12px',
    padding: '32px 28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  explainerIconWrap: {
    width: '52px',
    height: '52px',
    borderRadius: '12px',
    background: '#e8f4fc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  explainerTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#1a1a1a',
  },
  explainerDesc: {
    fontSize: '14px',
    color: '#555',
    lineHeight: 1.7,
  },
  explainerList: {
    listStyle: 'none',
    padding: 0,
    margin: '8px 0 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },

  /* Filter Section */
  filterSection: {
    padding: '32px 24px',
    background: '#f8f9fa',
    borderTop: '1px solid #e8e8e8',
    borderBottom: '1px solid #e8e8e8',
    position: 'sticky',
    top: '88px',
    zIndex: 100,
  },
  filterBar: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: '16px',
  },
  searchWrap: {
    position: 'relative',
    flex: 1,
    minWidth: '260px',
  },
  searchIcon: {
    position: 'absolute',
    left: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  searchInput: {
    width: '100%',
    padding: '12px 16px 12px 44px',
    borderRadius: '8px',
    border: '1.5px solid #e0e0e0',
    fontSize: '14px',
    outline: 'none',
    background: '#fff',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  },
  tabRow: {
    display: 'flex',
    gap: '0',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
    background: '#fff',
  },
  tab: {
    padding: '11px 18px',
    border: 'none',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.15s',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
  },
  tabCount: {
    background: 'rgba(255,255,255,0.25)',
    padding: '1px 7px',
    borderRadius: '10px',
    fontSize: '11px',
    fontWeight: 700,
  },
  fieldRow: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: '12px',
  },
  fieldLabel: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    color: '#666',
    fontWeight: 500,
    marginRight: '4px',
  },
  fieldChip: {
    padding: '6px 14px',
    border: '1.5px solid #e0e0e0',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.15s',
  },
  resultCount: {
    fontSize: '13px',
    color: '#666',
    marginTop: '4px',
  },

  /* Programmes Section */
  progSection: {
    padding: '48px 24px 80px',
    background: '#f8f9fa',
  },
  emptyState: {
    textAlign: 'center',
    padding: '64px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
  },
  emptyTitle: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#1a1a1a',
  },
  emptyDesc: {
    fontSize: '14px',
    color: '#666',
  },
  emptyBtn: {
    background: '#0E7BB5',
    color: '#fff',
    border: 'none',
    padding: '10px 24px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
    marginTop: '8px',
  },
  progGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '24px',
  },
  progCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  progImg: {
    height: '180px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: '14px',
  },
  progImgOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 60%)',
  },
  progTypeBadge: {
    position: 'relative',
    zIndex: 1,
    fontSize: '11px',
    fontWeight: 700,
    padding: '4px 10px',
    borderRadius: '4px',
    letterSpacing: '0.5px',
  },
  progFieldBadge: {
    position: 'relative',
    zIndex: 1,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    background: 'rgba(255,255,255,0.95)',
    color: '#0E7BB5',
    fontSize: '11px',
    fontWeight: 600,
    padding: '4px 10px',
    borderRadius: '4px',
    backdropFilter: 'blur(4px)',
  },
  progBody: {
    padding: '20px 22px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  progTitle: {
    fontSize: '17px',
    fontWeight: 700,
    color: '#1a1a1a',
    lineHeight: 1.3,
  },
  progMeta: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
  },
  progMetaItem: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '12px',
    color: '#666',
    fontWeight: 500,
  },
  progDesc: {
    fontSize: '13px',
    color: '#555',
    lineHeight: 1.7,
  },
  expandedContent: {
    background: '#f8f9fa',
    borderRadius: '8px',
    padding: '18px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    marginTop: '8px',
  },
  expandSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  expandTitle: {
    fontSize: '11px',
    fontWeight: 700,
    color: '#0E7BB5',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  expandText: {
    fontSize: '13px',
    color: '#444',
    lineHeight: 1.6,
  },
  subjectList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
  },
  subjectChip: {
    background: '#fff',
    border: '1px solid #d8e4ef',
    color: '#0E7BB5',
    fontSize: '11px',
    fontWeight: 500,
    padding: '3px 10px',
    borderRadius: '20px',
  },
  careerList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  careerItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    color: '#444',
  },
  expandCta: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    background: '#0E7BB5',
    color: '#fff',
    textDecoration: 'none',
    padding: '10px 18px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: 600,
    marginTop: '4px',
  },
  expandBtn: {
    background: 'transparent',
    border: 'none',
    color: '#0E7BB5',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
    padding: '4px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    justifyContent: 'center',
    marginTop: '4px',
  },

  /* Pathway Section */
  pathwaySection: {
    background: 'linear-gradient(135deg, #0E7BB5 0%, #0a5a8a 100%)',
    padding: '80px 24px',
  },
  sectionTagWhite: {
    color: '#FFB800',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: '8px',
  },
  sectionTitleWhite: {
    fontSize: 'clamp(26px, 3vw, 38px)',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '12px',
    letterSpacing: '-0.5px',
  },
  sectionSubWhite: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '16px',
    lineHeight: 1.8,
    maxWidth: '640px',
    margin: '0 auto',
  },
  pathway: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  pathwayStep: {
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '12px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  pathwayNum: {
    fontSize: '32px',
    fontWeight: 800,
    color: '#FFB800',
    letterSpacing: '-1px',
    lineHeight: 1,
  },
  pathwayTitle: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#fff',
  },
  pathwayDesc: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.75)',
    lineHeight: 1.6,
  },

  /* FAQ Section */
  faqSection: {
    padding: '80px 24px',
    background: '#fff',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '820px',
    margin: '0 auto',
  },
  faqItem: {
    background: '#f8f9fa',
    border: '1px solid #e8e8e8',
    borderRadius: '10px',
    padding: '4px 0',
    overflow: 'hidden',
  },
  faqQ: {
    padding: '18px 22px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '15px',
    fontWeight: 600,
    color: '#1a1a1a',
    listStyle: 'none',
  },
  faqA: {
    padding: '0 22px 18px',
    fontSize: '14px',
    color: '#555',
    lineHeight: 1.8,
  },

  /* CTA */
  cta: {
    position: 'relative',
    backgroundImage: `url(${programmes})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  ctaOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(14,123,181,0.94) 0%, rgba(0,0,0,0.85) 100%)',
  },
  ctaInner: {
    position: 'relative',
    zIndex: 1,
    padding: '96px 24px',
    textAlign: 'center',
    maxWidth: '720px',
    margin: '0 auto',
  },
  ctaBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(255,184,0,0.2)',
    border: '1px solid rgba(255,184,0,0.5)',
    color: '#FFB800',
    fontSize: '12px',
    fontWeight: 600,
    padding: '6px 14px',
    borderRadius: '20px',
    marginBottom: '20px',
  },
  ctaTitle: {
    color: '#fff',
    fontSize: 'clamp(28px, 4vw, 44px)',
    fontWeight: 800,
    marginBottom: '16px',
    letterSpacing: '-0.5px',
  },
  ctaSub: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '16px',
    lineHeight: 1.7,
    marginBottom: '36px',
    maxWidth: '560px',
    margin: '0 auto 36px',
  },
  ctaBtns: {
    display: 'flex',
    gap: '14px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: '#FFB800',
    color: '#000',
    textDecoration: 'none',
    padding: '14px 30px',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: 700,
  },
  btnOutline: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'transparent',
    color: '#fff',
    textDecoration: 'none',
    padding: '14px 30px',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: 600,
    border: '2px solid rgba(255,255,255,0.5)',
  },
};