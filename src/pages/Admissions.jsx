import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchAdmissionsData } from '../services/api'
import { assets } from '../services/api'
import nsfasLogo from '../assets/nsfas-logo.webp'
import {
  CheckCircle2, AlertTriangle, FileText, Clock, Award,
  ArrowRight, Sparkles, Building2, Users, BookOpen,
  Briefcase, BadgeCheck, MapPin, ChevronRight, Target,
  GraduationCap, Calendar, Info, AlertCircle, ClipboardCheck,
  Phone, Globe, ShieldCheck, Banknote, Settings
} from 'lucide-react'

export default function Admissions() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('process')

  useEffect(() => {
    fetchAdmissionsData()
      .then(d => setData(d))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div style={styles.loading}>
        <div style={styles.loadingSpinner} />
        <p style={styles.loadingText}>Loading admissions info...</p>
      </div>
    )
  }

  const tabs = [
    { id: 'process', label: 'Application Process', icon: ClipboardCheck },
    { id: 'requirements', label: 'Entry Requirements', icon: Award },
    { id: 'documents', label: 'Required Documents', icon: FileText },
    { id: 'nsfas', label: 'NSFAS Funding', icon: BadgeCheck },
    { id: 'wil', label: 'Work-Integrated Learning', icon: Briefcase },
  ]

  return (
    <main>

      {/*  HERO  */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <div style={styles.heroBadge}>
            <Sparkles size={13} color="#FFB800" />
            <span>{data.applicationStatus.year} Applications Open</span>
          </div>
          <p style={styles.heroTag}>Admissions & Enrolment</p>
          <h1 style={styles.heroTitle}>Apply to Maluti TVET College</h1>
          <p style={styles.heroSub}>
            Your pathway to a nationally recognised qualification. Applications for the
            2026 academic year opened {data.applicationStatus.openedDate}. Apply online
            or visit any of our 8 campuses.
          </p>
          <div style={styles.heroBtns}>
            <a href="https://www.malutitvet.co.za" target="_blank" rel="noreferrer" style={styles.btnPrimary}
              onMouseEnter={e => e.currentTarget.style.background = '#e6a600'}
              onMouseLeave={e => e.currentTarget.style.background = '#FFB800'}
            >
              Apply Online Now <ArrowRight size={16} />
            </a>
            <Link to="/contact" style={styles.btnSecondary}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              Visit a Campus
            </Link>
          </div>
        </div>
      </section>

      {/*  APPLICATION STATUS BANNER  */}
      <section style={styles.statusBanner}>
        <div style={styles.container}>
          <div style={styles.statusInner}>
            <div style={styles.statusLeft}>
              <div style={styles.statusDot} />
              <div>
                <p style={styles.statusLabel}>Application Status</p>
                <p style={styles.statusText}>
                  <strong>2026 applications are OPEN</strong> - Opened {data.applicationStatus.openedDate}
                </p>
              </div>
            </div>
            <div style={styles.statusActions}>
              <a href="https://www.malutitvet.co.za" target="_blank" rel="noreferrer" style={styles.statusLink}>
                <Globe size={14} /> malutitvet.co.za
              </a>
              <a href="tel:0800333178" style={styles.statusLink}>
                <Phone size={14} /> 0800 333 178
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*  TAB NAVIGATION  */}
      <section style={styles.tabNav}>
        <div style={styles.container}>
          <div style={styles.tabList}>
            {tabs.map(tab => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    ...styles.tab,
                    color: activeTab === tab.id ? '#0E7BB5' : '#666',
                    borderBottomColor: activeTab === tab.id ? '#0E7BB5' : 'transparent',
                    fontWeight: activeTab === tab.id ? 700 : 500,
                  }}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/*  TAB CONTENT  */}

      {/* 1. APPLICATION PROCESS */}
      {activeTab === 'process' && (
        <section style={styles.section}>
          <div style={styles.container}>
            <div style={styles.sectionHeadCenter}>
              <p style={styles.sectionTag}>How to Apply</p>
              <h2 style={styles.sectionTitle}>The 3-Step Application Process</h2>
              <p style={styles.sectionSub}>
                All applicants must complete these steps in order. This is a DHET-mandated
                process - no step can be skipped.
              </p>
            </div>
            <div style={styles.stepsContainer}>
              {data.steps.map((step, i) => (
                <div key={i} style={styles.stepRow}>
                  <div style={styles.stepNumber}>
                    <span>{step.num}</span>
                  </div>
                  <div style={styles.stepCard}>
                    <h3 style={styles.stepTitle}>{step.title}</h3>
                    <p style={styles.stepDesc}>{step.desc}</p>
                    <div style={styles.stepNote}>
                      <AlertCircle size={14} color="#e74c3c" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <p style={styles.stepNoteText}>{step.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Apply Methods */}
            <div style={styles.methodsGrid}>
              <div style={styles.methodCard}>
                <div style={styles.methodIconWrap}>
                  <Globe size={22} color="#0E7BB5" />
                </div>
                <h3 style={styles.methodTitle}>Apply Online</h3>
                <p style={styles.methodDesc}>
                  Submit your application 24/7 through the official Maluti TVET College
                  website. Upload certified documents in PDF format.
                </p>
                <a href="https://www.malutitvet.co.za" target="_blank" rel="noreferrer" style={styles.methodBtn}>
                  malutitvet.co.za <ArrowRight size={14} />
                </a>
              </div>
              <div style={styles.methodCard}>
                <div style={styles.methodIconWrap}>
                  <Building2 size={22} color="#0E7BB5" />
                </div>
                <h3 style={styles.methodTitle}>Apply In-Person</h3>
                <p style={styles.methodDesc}>
                  Visit any of our 8 campuses for walk-in assistance. Bring certified
                  copies of your ID, academic results, and proof of residence.
                </p>
                <Link to="/contact" style={styles.methodBtn}>
                  Find nearest campus <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. ENTRY REQUIREMENTS */}
      {activeTab === 'requirements' && (
        <section style={styles.section}>
          <div style={styles.container}>
            <div style={styles.sectionHeadCenter}>
              <p style={styles.sectionTag}>Eligibility</p>
              <h2 style={styles.sectionTitle}>Entry Requirements by Programme</h2>
              <p style={styles.sectionSub}>
                Minimum requirements vary by qualification type. Check the specific
                programme you're interested in before applying.
              </p>
            </div>
            <div style={styles.requirementsList}>
              {data.requirements.map((req, i) => (
                <div key={i} style={styles.reqCard}>
                  <div style={styles.reqIconWrap}>
                    <Award size={18} color="#0E7BB5" />
                  </div>
                  <div style={styles.reqBody}>
                    <h3 style={styles.reqProg}>{req.prog}</h3>
                    <p style={styles.reqText}>
                      <strong>Minimum requirement:</strong> {req.req}
                    </p>
                    <p style={styles.reqNote}>{req.note}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Important notice */}
            <div style={styles.importantBox}>
              <div style={styles.importantHeader}>
                <AlertTriangle size={20} color="#e74c3c" />
                <h3 style={styles.importantTitle}>Important: Mathematics Requirement</h3>
              </div>
              <p style={styles.importantText}>
                For all <strong>Engineering NATED programmes (N1-N6)</strong>, you must have
                passed <strong>Pure Mathematics</strong> and <strong>Physical Science</strong>.
                Mathematical Literacy is <strong>NOT accepted</strong> as an alternative.
              </p>
              <p style={styles.importantText}>
                For Business NATED programmes, a minimum admission score of 26+ is preferred
                for competitive placement.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 3. REQUIRED DOCUMENTS */}
      {activeTab === 'documents' && (
        <section style={styles.section}>
          <div style={styles.container}>
            <div style={styles.sectionHeadCenter}>
              <p style={styles.sectionTag}>Checklist</p>
              <h2 style={styles.sectionTitle}>Required Documents</h2>
              <p style={styles.sectionSub}>
                Ensure all documents are certified within 3 months of application.
                Incomplete applications will not be processed.
              </p>
            </div>
            <div style={styles.docsGrid}>
              {data.documents.map((d, i) => (
                <div key={i} style={{
                  ...styles.docCard,
                  borderLeft: `4px solid ${d.required ? '#e74c3c' : '#FFB800'}`,
                }}>
                  <div style={styles.docHead}>
                    <div style={styles.docIconWrap}>
                      {d.required ? (
                        <CheckCircle2 size={18} color="#e74c3c" />
                      ) : (
                        <Info size={18} color="#FFB800" />
                      )}
                    </div>
                    <span style={{
                      ...styles.docBadge,
                      background: d.required ? '#ffeaea' : '#fff8e6',
                      color: d.required ? '#c0392b' : '#b8860b',
                    }}>
                      {d.required ? 'Required' : 'Conditional'}
                    </span>
                  </div>
                  <p style={styles.docTitle}>{d.doc}</p>
                  <p style={styles.docNote}>{d.note}</p>
                </div>
              ))}
            </div>

            {/* Certification info */}
            <div style={styles.certBox}>
              <div style={styles.certLeft}>
                <div style={styles.certIconWrap}>
                  <ShieldCheck size={24} color="#0E7BB5" />
                </div>
                <div>
                  <h3 style={styles.certTitle}>Where to Certify Documents</h3>
                  <p style={styles.certText}>
                    Certified copies must be stamped by a Commissioner of Oaths. This can
                    be done free at any South African Police Service (SAPS) station, Post
                    Office, or by an admitted attorney. All documents must be certified
                    within 3 months of your application submission date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. NSFAS FUNDING */}
      {activeTab === 'nsfas' && (
        <section style={styles.section}>
          <div style={styles.container}>
            <div style={styles.sectionHeadCenter}>
              <p style={styles.sectionTag}>Financial Support</p>
              <h2 style={styles.sectionTitle}>NSFAS Bursary Funding</h2>
              <p style={styles.sectionSub}>
                The National Student Financial Aid Scheme provides fully-funded bursaries
                to qualifying students. Funding is NOT a loan and does not need to be repaid.
              </p>
            </div>

            {/* Eligibility Card */}
            <div style={styles.nsfasEligibility}>
              <div style={styles.nsfasHead}>
                <img src={nsfasLogo} alt="NSFAS" style={styles.nsfasHeadLogo} />
                <div>
                  <h3 style={styles.nsfasHeadTitle}>Do You Qualify for NSFAS?</h3>
                  <p style={styles.nsfasHeadSub}>
                    Check if you meet the basic eligibility criteria before applying.
                  </p>
                </div>
              </div>
              <div style={styles.eligibilityGrid}>
                {[
                  { icon: CheckCircle2, text: 'South African citizen with a valid SA ID' },
                  { icon: CheckCircle2, text: `Household income below ${data.nsfas.householdIncomeThreshold}` },
                  { icon: CheckCircle2, text: 'Accepted at a public TVET college or university' },
                  { icon: CheckCircle2, text: 'Enrolled in an approved qualification' },
                ].map((item, i) => (
                  <div key={i} style={styles.eligibilityItem}>
                    <item.icon size={16} color="#2ecc71" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Covered */}
            <h3 style={styles.subSectionTitle}>What Does NSFAS Cover?</h3>
            <div style={styles.allowanceGrid}>
              {data.nsfas.allowances.map((a, i) => (
                <div key={i} style={styles.allowanceCard}>
                  <div style={styles.allowanceIconWrap}>
                    <Banknote size={18} color="#FFB800" />
                  </div>
                  <h4 style={styles.allowanceType}>{a.type}</h4>
                  <p style={styles.allowanceAmount}>{a.amount}</p>
                  <p style={styles.allowancePeriod}>{a.period}</p>
                </div>
              ))}
            </div>

            {/* Apply CTA */}
            <div style={styles.nsfasCtaBox}>
              <div style={styles.nsfasCtaLeft}>
                <h3 style={styles.nsfasCtaTitle}>Ready to Apply for NSFAS?</h3>
                <p style={styles.nsfasCtaDesc}>
                  Apply online at nsfas.org.za. Create a myNSFAS account, complete the
                  application, and upload supporting documents. Apply early - funding
                  is allocated on a first-come basis.
                </p>
              </div>
              <a href="https://www.nsfas.org.za" target="_blank" rel="noreferrer" style={styles.nsfasCtaBtn}>
                Apply at nsfas.org.za <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* 5. WORK-INTEGRATED LEARNING */}
      {activeTab === 'wil' && (
        <section style={styles.section}>
          <div style={styles.container}>
            <div style={styles.sectionHeadCenter}>
              <p style={styles.sectionTag}>Practical Experience</p>
              <h2 style={styles.sectionTitle}>Work-Integrated Learning (WIL)</h2>
              <p style={styles.sectionSub}>
                Complete your National Diploma by accumulating supervised workplace hours
                with accredited employers across the Free State and South Africa.
              </p>
            </div>

            <div style={styles.wilGrid}>
              <div style={styles.wilCard}>
                <div style={styles.wilIconWrap}>
                  <Briefcase size={22} color="#0E7BB5" />
                </div>
                <h3 style={styles.wilCardTitle}>Business Qualifications</h3>
                <div style={styles.wilHours}>
                  <span style={styles.wilHoursNum}>{data.wil.businessHours.toLocaleString()}</span>
                  <span style={styles.wilHoursLabel}>practical hours</span>
                </div>
                <p style={styles.wilCardText}>
                  Approximately {data.wil.businessMonths} months of workplace experience
                  with an accredited employer. Required for National Diploma award.
                </p>
              </div>
              <div style={styles.wilCard}>
                <div style={styles.wilIconWrap}>
                  <Settings size={22} color="#0E7BB5" />
                </div>
                <h3 style={styles.wilCardTitle}>Engineering Qualifications</h3>
                <div style={styles.wilHours}>
                  <span style={styles.wilHoursNum}>{data.wil.engineeringHours.toLocaleString()}</span>
                  <span style={styles.wilHoursLabel}>practical hours</span>
                </div>
                <p style={styles.wilCardText}>
                  Approximately {data.wil.engineeringMonths} months of workplace experience
                  plus the QCTO trade test for artisan qualification.
                </p>
              </div>
            </div>

            {/* Process */}
            <h3 style={styles.subSectionTitle}>How Work-Integrated Learning Works</h3>
            <div style={styles.wilProcess}>
              {[
                { num: '01', title: 'Complete N6 / Level 4', desc: 'Pass all theoretical subjects at the highest level of your programme.' },
                { num: '02', title: 'Secure a Workplace', desc: 'The college assists with employer matching, or you may source your own approved workplace.' },
                { num: '03', title: 'Maintain Logbook', desc: 'Complete your QCTO logbook under employer supervision. All tasks must be signed off.' },
                { num: '04', title: 'Submit & Qualify', desc: 'Submit your completed logbook. Engineering students also complete a trade test.' },
              ].map((p, i) => (
                <div key={i} style={styles.wilStep}>
                  <span style={styles.wilStepNum}>{p.num}</span>
                  <h4 style={styles.wilStepTitle}>{p.title}</h4>
                  <p style={styles.wilStepDesc}>{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Employer Partnership CTA */}
            <div style={styles.employerBox}>
              <div style={styles.employerIconWrap}>
                <Users size={22} color="#FFB800" />
              </div>
              <div style={styles.employerContent}>
                <h3 style={styles.employerTitle}>Are You an Employer?</h3>
                <p style={styles.employerDesc}>
                  Partner with Maluti TVET College to host workplace learners. Build your
                  skills pipeline while supporting the next generation of South African
                  artisans and professionals.
                </p>
                <Link to="/contact" style={styles.employerBtn}>
                  Partner With Us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/*  CASHLESS WARNING  */}
      <section style={styles.cashlessSection}>
        <div style={styles.container}>
          <div style={styles.cashlessInner}>
            <AlertTriangle size={28} color="#fff" style={{ flexShrink: 0 }} />
            <div style={styles.cashlessContent}>
              <h3 style={styles.cashlessTitle}>Cashless Campus Policy</h3>
              <p style={styles.cashlessText}>
                Maluti TVET College operates strictly on a cashless basis. <strong>Do not pay cash
                to any staff member</strong> - all payments are made via EFT only. Report any fraud
                or corruption to the Whistle Blower hotline on <strong>0800 333 178</strong> (free, 24 hours).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*  CAMPUS WALK-IN STRIP  */}
      <section style={styles.campusSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeadCenter}>
            <p style={styles.sectionTag}>Walk-In Assistance</p>
            <h2 style={styles.sectionTitle}>Apply at Any of Our 8 Campuses</h2>
            <p style={styles.sectionSub}>
              No appointment needed. Our admissions officers are available during office
              hours to assist with applications, document submission, and programme advice.
            </p>
          </div>
          <div style={styles.campusStrip}>
            {[
              { name: 'Main Campus', town: 'Phuthaditjhaba', image: assets.campuses.phuthaditjhaba },
              { name: 'Bethlehem Campus', town: 'Bethlehem', image: assets.campuses.bethlehem },
              { name: 'Harrismith Campus', town: 'Harrismith', image: assets.campuses.harrismith },
              { name: 'Itemoheleng Campus', town: 'Phuthaditjhaba', image: assets.campuses.itemoheleng },
            ].map((c, i) => (
              <div key={i} style={styles.campusCard}>
                <div style={{ ...styles.campusImg, backgroundImage: `url(${c.image})` }}>
                  <div style={styles.campusOverlay} />
                  <div style={styles.campusBadge}>
                    <MapPin size={11} />
                    {c.town}
                  </div>
                </div>
                <div style={styles.campusBody}>
                  <h4 style={styles.campusName}>{c.name}</h4>
                  <p style={styles.campusWalkin}>Walk-ins welcome during office hours</p>
                </div>
              </div>
            ))}
          </div>
          <div style={styles.campusFooter}>
            <Link to="/contact" style={styles.btnBlue}>
              View All 8 Campus Locations <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/*  FINAL CTA  */}
      <section style={styles.cta}>
        <div style={styles.ctaOverlay} />
        <div style={styles.ctaInner}>
          <div style={styles.ctaBadge}>
            <Sparkles size={14} color="#FFB800" />
            <span>Applications Open Now</span>
          </div>
          <h2 style={styles.ctaTitle}>Ready to Apply?</h2>
          <p style={styles.ctaSub}>
            Submit your application today. Early applicants have the best chance of
            securing their preferred programme and NSFAS funding.
          </p>
          <div style={styles.ctaBtns}>
            <a href="https://www.malutitvet.co.za" target="_blank" rel="noreferrer" style={styles.btnPrimary}
              onMouseEnter={e => e.currentTarget.style.background = '#e6a600'}
              onMouseLeave={e => e.currentTarget.style.background = '#FFB800'}
            >
              Apply Online <ArrowRight size={16} />
            </a>
            <Link to="/programmes" style={styles.btnSecondary}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              View Programmes
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}



const styles = {
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
    backgroundImage: `url(${assets.campuses.phuthaditjhaba})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '520px',
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
    maxWidth: '620px',
    marginBottom: '32px',
  },
  heroBtns: {
    display: 'flex',
    gap: '14px',
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
    transition: 'background 0.2s',
  },
  btnSecondary: {
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
    border: '2px solid rgba(255,255,255,0.55)',
    transition: 'background 0.2s',
  },

  /* Status Banner */
  statusBanner: {
    background: '#2ecc71',
    padding: '16px 24px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  statusInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '16px',
  },
  statusLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
  },
  statusDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#fff',
    boxShadow: '0 0 0 4px rgba(255,255,255,0.3)',
    animation: 'pulse 2s ease-in-out infinite',
  },
  statusLabel: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: 600,
    margin: 0,
  },
  statusText: {
    color: '#fff',
    fontSize: '14px',
    margin: 0,
  },
  statusActions: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  },
  statusLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    color: '#fff',
    fontSize: '13px',
    fontWeight: 600,
    textDecoration: 'none',
  },

  /* Tab Navigation */
  tabNav: {
    background: '#fff',
    borderBottom: '1px solid #e8e8e8',
    position: 'sticky',
    top: '88px',
    zIndex: 99,
  },
  tabList: {
    display: 'flex',
    gap: '0',
    overflowX: 'auto',
    padding: '0 24px',
  },
  tab: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '18px 22px',
    background: 'transparent',
    border: 'none',
    borderBottom: '3px solid transparent',
    fontSize: '13px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
  },

  /* Section Base */
  section: {
    padding: '64px 24px 80px',
    background: '#fff',
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
  subSectionTitle: {
    fontSize: '22px',
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: '24px',
    marginTop: '56px',
    textAlign: 'center',
  },

  /* Steps */
  stepsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    marginBottom: '64px',
  },
  stepRow: {
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',
  },
  stepNumber: {
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #0E7BB5 0%, #0a5a8a 100%)',
    color: '#FFB800',
    fontSize: '24px',
    fontWeight: 800,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxShadow: '0 4px 12px rgba(14,123,181,0.25)',
  },
  stepCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '12px',
    padding: '24px 28px',
    flex: 1,
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  },
  stepTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: '10px',
  },
  stepDesc: {
    fontSize: '14px',
    color: '#555',
    lineHeight: 1.8,
    marginBottom: '14px',
  },
  stepNote: {
    background: '#fff5f5',
    borderRadius: '6px',
    padding: '12px 14px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    borderLeft: '3px solid #e74c3c',
  },
  stepNoteText: {
    fontSize: '13px',
    color: '#c0392b',
    lineHeight: 1.6,
    margin: 0,
    fontWeight: 500,
  },

  /* Apply Methods */
  methodsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '32px',
  },
  methodCard: {
    background: '#f8f9fa',
    border: '1px solid #e8e8e8',
    borderRadius: '12px',
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  methodIconWrap: {
    width: '48px',
    height: '48px',
    borderRadius: '10px',
    background: '#e8f4fc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  methodTitle: {
    fontSize: '17px',
    fontWeight: 700,
    color: '#1a1a1a',
  },
  methodDesc: {
    fontSize: '14px',
    color: '#555',
    lineHeight: 1.7,
    flex: 1,
  },
  methodBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    color: '#0E7BB5',
    fontSize: '14px',
    fontWeight: 600,
    textDecoration: 'none',
    marginTop: '4px',
  },

  /* Requirements */
  requirementsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  reqCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '10px',
    padding: '20px 24px',
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  },
  reqIconWrap: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    background: '#e8f4fc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  reqBody: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  reqProg: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#0E7BB5',
  },
  reqText: {
    fontSize: '14px',
    color: '#333',
    lineHeight: 1.6,
  },
  reqNote: {
    fontSize: '12px',
    color: '#888',
    fontStyle: 'italic',
    lineHeight: 1.6,
  },

  /* Important Box */
  importantBox: {
    background: '#fff5f5',
    border: '1px solid #fcc',
    borderRadius: '12px',
    padding: '24px 28px',
    marginTop: '32px',
  },
  importantHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '14px',
  },
  importantTitle: {
    fontSize: '17px',
    fontWeight: 700,
    color: '#c0392b',
  },
  importantText: {
    fontSize: '14px',
    color: '#4a0f0f',
    lineHeight: 1.8,
    marginBottom: '10px',
  },

  /* Documents */
  docsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '16px',
  },
  docCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  },
  docHead: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  docIconWrap: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    background: '#f8f9fa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  docBadge: {
    fontSize: '10px',
    fontWeight: 700,
    padding: '3px 10px',
    borderRadius: '20px',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },
  docTitle: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#1a1a1a',
    lineHeight: 1.4,
  },
  docNote: {
    fontSize: '12px',
    color: '#666',
    lineHeight: 1.6,
  },

  /* Certification Box */
  certBox: {
    background: '#e8f4fc',
    border: '1px solid #b8dff0',
    borderRadius: '12px',
    padding: '28px',
    marginTop: '32px',
  },
  certLeft: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
  },
  certIconWrap: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  certTitle: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#0E7BB5',
    marginBottom: '8px',
  },
  certText: {
    fontSize: '14px',
    color: '#333',
    lineHeight: 1.8,
  },

  /* NSFAS */
  nsfasEligibility: {
    background: 'linear-gradient(135deg, #e8f4fc 0%, #f0f8fe 100%)',
    border: '1px solid #b8dff0',
    borderRadius: '16px',
    padding: '32px',
    marginBottom: '48px',
  },
  nsfasHead: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '24px',
    flexWrap: 'wrap',
  },
  nsfasHeadLogo: {
    width: '72px',
    height: '72px',
    objectFit: 'contain',
    background: '#fff',
    borderRadius: '12px',
    padding: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  nsfasHeadTitle: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#0E7BB5',
    marginBottom: '4px',
  },
  nsfasHeadSub: {
    fontSize: '14px',
    color: '#555',
  },
  eligibilityGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '12px',
  },
  eligibilityItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    background: '#fff',
    padding: '12px 16px',
    borderRadius: '8px',
    fontSize: '13px',
    color: '#333',
    lineHeight: 1.5,
  },
  allowanceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
  },
  allowanceCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '12px',
    padding: '24px 20px',
    textAlign: 'center',
    borderTop: '4px solid #FFB800',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    alignItems: 'center',
  },
  allowanceIconWrap: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    background: '#fff8e6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  allowanceType: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#666',
    marginTop: '4px',
  },
  allowanceAmount: {
    fontSize: '22px',
    fontWeight: 800,
    color: '#0E7BB5',
    letterSpacing: '-0.5px',
  },
  allowancePeriod: {
    fontSize: '11px',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  nsfasCtaBox: {
    background: 'linear-gradient(135deg, #0E7BB5 0%, #0a5a8a 100%)',
    borderRadius: '16px',
    padding: '32px 36px',
    marginTop: '48px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '24px',
  },
  nsfasCtaLeft: {
    flex: 1,
    minWidth: '260px',
  },
  nsfasCtaTitle: {
    fontSize: '22px',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '8px',
  },
  nsfasCtaDesc: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.85)',
    lineHeight: 1.7,
  },
  nsfasCtaBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: '#FFB800',
    color: '#000',
    textDecoration: 'none',
    padding: '14px 28px',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: 700,
    whiteSpace: 'nowrap',
  },

  /* WIL */
  wilGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
  },
  wilCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderTop: '4px solid #0E7BB5',
    borderRadius: '12px',
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  wilIconWrap: {
    width: '52px',
    height: '52px',
    borderRadius: '12px',
    background: '#e8f4fc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wilCardTitle: {
    fontSize: '17px',
    fontWeight: 700,
    color: '#1a1a1a',
  },
  wilHours: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '8px',
    padding: '10px 0',
    borderTop: '1px solid #f0f0f0',
    borderBottom: '1px solid #f0f0f0',
  },
  wilHoursNum: {
    fontSize: '32px',
    fontWeight: 800,
    color: '#0E7BB5',
    letterSpacing: '-0.5px',
  },
  wilHoursLabel: {
    fontSize: '13px',
    color: '#666',
  },
  wilCardText: {
    fontSize: '13px',
    color: '#555',
    lineHeight: 1.7,
  },
  wilProcess: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
  },
  wilStep: {
    background: '#f8f9fa',
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  wilStepNum: {
    fontSize: '24px',
    fontWeight: 800,
    color: '#FFB800',
    letterSpacing: '-1px',
    lineHeight: 1,
  },
  wilStepTitle: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#1a1a1a',
  },
  wilStepDesc: {
    fontSize: '12px',
    color: '#666',
    lineHeight: 1.6,
  },
  employerBox: {
    background: '#1a1a1a',
    borderRadius: '12px',
    padding: '28px 32px',
    marginTop: '32px',
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  employerIconWrap: {
    width: '52px',
    height: '52px',
    borderRadius: '12px',
    background: 'rgba(255,184,0,0.15)',
    border: '1px solid rgba(255,184,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  employerContent: {
    flex: 1,
    minWidth: '260px',
  },
  employerTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '8px',
  },
  employerDesc: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.75)',
    lineHeight: 1.7,
    marginBottom: '14px',
  },
  employerBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: '#FFB800',
    color: '#000',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: 700,
  },

  /* Cashless */
  cashlessSection: {
    background: '#c0392b',
    padding: '28px 24px',
  },
  cashlessInner: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  cashlessContent: {
    flex: 1,
  },
  cashlessTitle: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '6px',
  },
  cashlessText: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.92)',
    lineHeight: 1.7,
  },

  /* Campus Strip */
  campusSection: {
    padding: '80px 24px',
    background: '#f8f9fa',
  },
  campusStrip: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px',
  },
  campusCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  campusImg: {
    height: '140px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  campusOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 60%)',
  },
  campusBadge: {
    position: 'absolute',
    bottom: '12px',
    left: '12px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    background: '#FFB800',
    color: '#000',
    fontSize: '11px',
    fontWeight: 700,
    padding: '4px 10px',
    borderRadius: '4px',
  },
  campusBody: {
    padding: '16px 18px',
  },
  campusName: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#0E7BB5',
    marginBottom: '4px',
  },
  campusWalkin: {
    fontSize: '12px',
    color: '#666',
  },
  campusFooter: {
    textAlign: 'center',
    marginTop: '32px',
  },
  btnBlue: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: '#0E7BB5',
    color: '#fff',
    textDecoration: 'none',
    padding: '13px 28px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 600,
  },

  /* CTA */
  cta: {
    position: 'relative',
    backgroundImage: `url(${assets.campuses.kwetlisong})`,
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
};