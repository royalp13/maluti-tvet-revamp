import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchHomeData } from '../services/api'
import {
  FileText, BookOpen, MapPin, Phone,
  Settings, BarChart3, Monitor, GraduationCap, Coffee, Wrench,
  Award, Building2, ChevronRight, Quote,
  Calendar, AlertCircle, CheckCircle2, Sparkles,
  ArrowRight, Briefcase, Target, BadgeCheck
} from 'lucide-react'
import leadership1 from '../assets/leadership1.jpg'
import nsfasLogo from '../assets/nsfas-logo.png'

const getIcon = (id, size = 22, color = '#0E7BB5') => {
  const icons = {
    engineering: <Settings size={size} color={color} />,
    business: <BarChart3 size={size} color={color} />,
    it: <Monitor size={size} color={color} />,
    education: <GraduationCap size={size} color={color} />,
    hospitality: <Coffee size={size} color={color} />,
    utility: <Wrench size={size} color={color} />,
  }
  return icons[id] || <BookOpen size={size} color={color} />
}

export default function Home() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    fetchHomeData()
      .then(d => setData(d))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (!data) return
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % data.slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [data])

  if (loading) {
    return (
      <div style={styles.loading}>
        <div style={styles.loadingSpinner} />
        <p style={styles.loadingText}>Loading Maluti TVET Portal...</p>
      </div>
    )
  }

  return (
    <main>
      {/* HERO SLIDESHOW */}
      <section style={styles.hero}>
        {data.slides.map((slide, i) => (
          <div key={i} style={{
            ...styles.slide,
            backgroundImage: `url(${slide.url})`,
            opacity: i === current ? 1 : 0,
            transform: i === current ? 'scale(1.05)' : 'scale(1)',
          }} />
        ))}
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <div style={styles.heroBadge}>
            <Sparkles size={13} color="#FFB800" />
            <span>2026 Applications Now Open</span>
          </div>
          <p style={styles.heroTagline}>Great Place. Great Choice for Lifelong Learning.</p>
          <h1 style={styles.heroTitle}>Maluti TVET College</h1>
          <p style={styles.heroSub}>
            A leading public Technical Vocational Education and Training institution
            in the North Eastern Free State-serving communities across 8 campuses
            with NC(V) and NATED programmes since 2002.
          </p>
          <div style={styles.heroBtns}>
            <Link to="/admissions" style={styles.btnPrimary}
              onMouseEnter={e => e.currentTarget.style.background = '#e6a600'}
              onMouseLeave={e => e.currentTarget.style.background = '#FFB800'}
            >
              Apply for 2026 <ArrowRight size={16} />
            </Link>
            <Link to="/programmes" style={styles.btnSecondary}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              Explore Programmes
            </Link>
          </div>
          <div style={styles.heroStats}>
            <div style={styles.heroStat}>
              <span style={styles.heroStatNum}>8</span>
              <span style={styles.heroStatLabel}>Campuses</span>
            </div>
            <div style={styles.heroStatDiv} />
            <div style={styles.heroStat}>
              <span style={styles.heroStatNum}>22+</span>
              <span style={styles.heroStatLabel}>Programmes</span>
            </div>
            <div style={styles.heroStatDiv} />
            <div style={styles.heroStat}>
              <span style={styles.heroStatNum}>23+</span>
              <span style={styles.heroStatLabel}>Years</span>
            </div>
          </div>
          <div style={styles.dots}>
            {data.slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  ...styles.dot,
                  background: i === current ? '#FFB800' : 'rgba(255,255,255,0.4)',
                  width: i === current ? '32px' : '10px',
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* QUICK ACCESS BAR */}
      <section style={styles.quickBar}>
        <div style={styles.container}>
          <div style={styles.quickGrid}>
            {[
              { icon: FileText, label: 'Apply Online', desc: '2026 applications open', path: '/admissions' },
              { icon: BookOpen, label: 'Programmes', desc: 'NC(V) & NATED courses', path: '/programmes' },
              { icon: BadgeCheck, label: 'NSFAS Funding', desc: 'Apply for bursary', path: '/admissions' },
              { icon: Building2, label: 'Our Campuses', desc: '8 Free State locations', path: '/about' },
              { icon: Phone, label: 'Contact Us', desc: 'Get in touch', path: '/contact' },
            ].map((q, i) => (
              <Link key={i} to={q.path} style={styles.quickLink}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#0E7BB5'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.querySelectorAll('.quick-text').forEach(t => t.style.color = '#fff')
                  e.currentTarget.querySelector('.quick-icon').style.background = 'rgba(255,255,255,0.2)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#fff'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.querySelectorAll('.quick-text').forEach((t, idx) => t.style.color = idx === 0 ? '#1a1a1a' : '#888')
                  e.currentTarget.querySelector('.quick-icon').style.background = '#e8f4fc'
                }}
              >
                <div className="quick-icon" style={styles.quickIconWrap}>
                  <q.icon size={20} color="#0E7BB5" />
                </div>
                <div style={styles.quickText}>
                  <span className="quick-text" style={styles.quickLabel}>{q.label}</span>
                  <span className="quick-text" style={styles.quickDesc}>{q.desc}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS BAND */}
      <section style={styles.announceSection}>
        <div style={styles.container}>
          <div style={styles.sectionHead}>
            <div>
              <p style={styles.sectionTag}>Notice Board</p>
              <h2 style={styles.sectionTitleLeft}>Latest Announcements</h2>
            </div>
            <Link to="/contact" style={styles.sectionLink}>
              All notices <ChevronRight size={14} />
            </Link>
          </div>
          <div style={styles.announceGrid}>
            {data.announcements.map((a, i) => (
              <div key={i} style={{
                ...styles.announceCard,
                borderLeft: `4px solid ${a.urgent ? '#e74c3c' : '#0E7BB5'}`,
              }}>
                <div style={styles.announceTop}>
                  <span style={{
                    ...styles.announceTag,
                    background: a.urgent ? '#ffeaea' : '#e8f4fc',
                    color: a.urgent ? '#c0392b' : '#0E7BB5',
                  }}>
                    {a.urgent && <AlertCircle size={11} />}
                    {a.tag}
                  </span>
                  {a.urgent && <span style={styles.urgentDot} />}
                </div>
                <p style={styles.announceText}>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section style={styles.aboutStrip}>
        <div style={styles.aboutImg} />
        <div style={styles.aboutText}>
          <p style={styles.sectionTagWhite}>Who We Are</p>
          <h2 style={styles.aboutTitle}>Rooted in the Free State Since 2002</h2>
          <p style={styles.aboutPara}>
            Established on 1 September 2002, Maluti TVET College serves the North Eastern
            Free State through 8 campuses-with corporate headquarters in Bethlehem and
            its central office at Phuthaditjhaba at the foothills of the Maluti Mountains.
          </p>
          <p style={styles.aboutPara}>
            Accredited by Umalusi and multiple SETAs, operating under the Department of
            Higher Education and Training, we are committed to transforming lives through
            practical, industry-relevant education.
          </p>
          <div style={styles.aboutBadges}>
            <div style={styles.aboutBadge}>
              <CheckCircle2 size={14} color="#FFB800" />
              <span>Umalusi Accredited</span>
            </div>
            <div style={styles.aboutBadge}>
              <CheckCircle2 size={14} color="#FFB800" />
              <span>DHET Registered</span>
            </div>
            <div style={styles.aboutBadge}>
              <CheckCircle2 size={14} color="#FFB800" />
              <span>NSFAS Approved</span>
            </div>
          </div>
          <Link to="/about" style={styles.aboutBtn}>
            Learn More About Us <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* PROGRAMMES PREVIEW */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionHeadCenter}>
            <p style={styles.sectionTag}>Qualifications</p>
            <h2 style={styles.sectionTitle}>NC(V) & NATED Programmes</h2>
            <p style={styles.sectionSub}>
              Accredited National Certificate (Vocational) and NATED Report 191 programmes -
              practical, industry-aligned, and nationally recognised.
            </p>
          </div>
          <div style={styles.progGrid}>
            {data.programmesPreview.map((p, i) => (
              <Link key={i} to="/programmes" style={styles.progCard}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.12)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'
                }}
              >
                <div style={{ ...styles.progImg, backgroundImage: `url(${p.image})` }}>
                  <span style={styles.progType}>{p.type}</span>
                </div>
                <div style={styles.progBody}>
                  <div style={styles.progIconRow}>
                    {getIcon(p.iconId, 20, '#0E7BB5')}
                    <h3 style={styles.progTitle}>{p.title}</h3>
                  </div>
                  <p style={styles.progDesc}>{p.desc}</p>
                  <span style={styles.progLink}>View courses <ChevronRight size={13} /></span>
                </div>
              </Link>
            ))}
          </div>
          <div style={styles.sectionFooter}>
            <Link to="/programmes" style={styles.btnBlue}>
              See All 22 Programmes <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* CAMPUSES */}
      <section style={{ ...styles.section, background: '#f8f9fa' }}>
        <div style={styles.container}>
          <div style={styles.sectionHeadCenter}>
            <p style={styles.sectionTag}>Where We Are</p>
            <h2 style={styles.sectionTitle}>Our 8 Campuses</h2>
            <p style={styles.sectionSub}>
              From Bethlehem to Phuthaditjhaba, Harrismith to Tseki Village-quality
              education delivered close to the communities we serve.
            </p>
          </div>
          <div style={styles.campusGrid}>
            {data.campuses.map((c, i) => (
              <div key={i} style={styles.campusCard}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ ...styles.campusImg, backgroundImage: `url(${c.image})` }}>
                  <div style={styles.campusImgOverlay} />
                  <span style={styles.campusTownBadge}>
                    <MapPin size={11} />
                    {c.town}
                  </span>
                </div>
                <div style={styles.campusBody}>
                  <h3 style={styles.campusName}>{c.name}</h3>
                  <p style={styles.campusRole}>{c.role}</p>
                  <p style={styles.campusSpec}>{c.specialisation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NSFAS BANNER */}
      <section style={styles.nsfasBanner}>
        <div style={styles.container}>
          <div style={styles.nsfasInner}>
            <div style={styles.nsfasLeft}>
              <div style={styles.nsfasIconWrap}>
                <img src={nsfasLogo} alt="NSFAS" style={styles.nsfasLogoImg} />
              </div>
              <div>
                <h2 style={styles.nsfasTitle}>NSFAS Funding Available</h2>
                <p style={styles.nsfasSub}>
                  Qualifying students receive full tuition plus accommodation, transport, and
                  incidental allowances. Household income threshold: R350,000 per annum.
                </p>
              </div>
            </div>
            <div style={styles.nsfasBtns}>
              <a href="https://www.nsfas.org.za" target="_blank" rel="noreferrer" style={styles.nsfasBtnPrimary}>
                Apply at nsfas.org.za
              </a>
              <Link to="/admissions" style={styles.nsfasBtnOutline}>Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionHeadCenter}>
            <p style={styles.sectionTag}>Why Maluti TVET</p>
            <h2 style={styles.sectionTitle}>Built for Your Future</h2>
            <p style={styles.sectionSub}>
              Six reasons thousands of students choose us every year.
            </p>
          </div>
          <div style={styles.whyGrid}>
            {[
              { Icon: Award, title: 'Umalusi Accredited', desc: 'Nationally recognised qualifications accredited by Umalusi, QCTO, and DHET.' },
              { Icon: Wrench, title: 'Practical First', desc: 'Hands-on training in modern workshops-ready for the workplace from day one.' },
              { Icon: BadgeCheck, title: 'NSFAS Approved', desc: 'Qualifying students access NSFAS funding covering tuition and living costs.' },
              { Icon: MapPin, title: '8 Campuses', desc: 'Strategically spread across the Free State-quality education close to home.' },
              { Icon: Briefcase, title: 'Industry Partners', desc: 'Strong partnerships with employers and SETAs keep our curriculum relevant.' },
              { Icon: Target, title: 'Real Outcomes', desc: 'Graduates placed in employment, artisan trades, and further education nationwide.' },
            ].map((item, i) => (
              <div key={i} style={styles.whyCard}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#0E7BB5'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e8e8e8'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={styles.whyIconWrap}>
                  <item.Icon size={22} color="#0E7BB5" />
                </div>
                <h3 style={styles.whyTitle}>{item.title}</h3>
                <p style={styles.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS / DATES */}
      <section style={{ ...styles.section, background: '#f8f9fa' }}>
        <div style={styles.container}>
          <div style={styles.sectionHeadCenter}>
            <p style={styles.sectionTag}>Dates to Remember</p>
            <h2 style={styles.sectionTitle}>Upcoming Events</h2>
            <p style={styles.sectionSub}>
              Key dates on the Maluti TVET College calendar for the 2025/2026 academic year.
            </p>
          </div>
          <div style={styles.eventsGrid}>
            {data.events.map((ev, i) => {
              // Pick a campus image for each event based on index
              const eventImages = [
                data.campuses[0]?.image,
                data.campuses[4]?.image,
                data.campuses[2]?.image,
              ]
              return (
                <div key={i} style={styles.eventCard}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.12)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'
                  }}
                >
                  <div style={{
                    ...styles.eventImage,
                    backgroundImage: `url(${eventImages[i] || data.campuses[0]?.image})`,
                  }}>
                    <div style={styles.eventImageOverlay} />
                    <div style={styles.eventDateBadge}>
                      <Calendar size={14} color="#FFB800" />
                      <div>
                        <div style={styles.eventDay}>{ev.date}</div>
                        <div style={styles.eventYear}>{ev.year}</div>
                      </div>
                    </div>
                  </div>
                  <div style={styles.eventBody}>
                    <h3 style={styles.eventTitle}>{ev.title}</h3>
                    <p style={styles.eventDesc}>{ev.desc}</p>
                    <div style={styles.eventMeta}>
                      <MapPin size={12} color="#0E7BB5" />
                      <span style={styles.eventLocation}>{ev.location}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionHeadCenter}>
            <p style={styles.sectionTag}>Student Voices</p>
            <h2 style={styles.sectionTitle}>What Our Students Say</h2>
            <p style={styles.sectionSub}>
              Real stories from graduates building careers across the Free State and beyond.
            </p>
          </div>
          <div style={styles.testimonialsGrid}>
            {data.testimonials.map((t, i) => (
              <div key={i} style={styles.testimonialCard}>
                <Quote size={28} color="#FFB800" style={{ opacity: 0.4 }} />
                <p style={styles.testimonialText}>{t.text}</p>
                <div style={styles.testimonialAuthor}>
                  <img src={t.image} alt={t.name} style={styles.testimonialImg} />
                  <div>
                    <p style={styles.testimonialName}>{t.name}</p>
                    <p style={styles.testimonialProg}>{t.programme}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={styles.cta}>
        <div style={styles.ctaOverlay} />
        <div style={styles.ctaInner}>
          <div style={styles.ctaBadge}>
            <Sparkles size={14} color="#FFB800" />
            <span>Applications Open Now</span>
          </div>
          <h2 style={styles.ctaTitle}>Your Future Starts Here</h2>
          <p style={styles.ctaSub}>
            Join thousands of students transforming their lives through quality TVET education.
            Apply today for the 2026 academic year.
          </p>
          <div style={styles.ctaBtns}>
            <Link to="/admissions" style={styles.btnPrimary}
              onMouseEnter={e => e.currentTarget.style.background = '#e6a600'}
              onMouseLeave={e => e.currentTarget.style.background = '#FFB800'}
            >
              Apply for 2026 <ArrowRight size={16} />
            </Link>
            <Link to="/contact" style={styles.btnSecondary}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              Contact Us
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
    minHeight: '92vh',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  },
  slide: {
    position: 'absolute',
    inset: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'opacity 1.6s ease-in-out, transform 6s ease-out',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(14,123,181,0.85) 0%, rgba(0,0,0,0.75) 100%)',
    zIndex: 1,
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '780px',
    margin: '0 auto',
    textAlign: 'center',
    width: '100%',
    padding: '80px 24px',
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
    marginBottom: '20px',
  },
  heroTagline: {
    color: '#FFB800',
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: '16px',
  },
  heroTitle: {
    color: '#fff',
    fontSize: 'clamp(36px, 6vw, 64px)',
    fontWeight: 800,
    lineHeight: 1.1,
    marginBottom: '20px',
    letterSpacing: '-1.5px',
  },
  heroSub: {
    color: 'rgba(255,255,255,0.88)',
    fontSize: '17px',
    lineHeight: 1.8,
    marginBottom: '36px',
    maxWidth: '620px',
    margin: '0 auto 36px',
  },
  heroBtns: {
    display: 'flex',
    gap: '14px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '48px',
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
    border: 'none',
    cursor: 'pointer',
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
  heroStats: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '24px',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '12px',
    padding: '16px 24px',
    backdropFilter: 'blur(8px)',
  },
  heroStat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2px',
  },
  heroStatNum: {
    color: '#FFB800',
    fontSize: '24px',
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
    height: '30px',
    background: 'rgba(255,255,255,0.2)',
  },
  dots: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '40px',
  },
  dot: {
    height: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.4s ease',
    padding: 0,
  },

  /* Quick Bar */
  quickBar: {
    background: '#fff',
    borderBottom: '1px solid #e8e8e8',
    padding: '32px 24px',
    marginTop: '-40px',
    position: 'relative',
    zIndex: 10,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  quickGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '12px',
    background: '#fff',
    borderRadius: '16px',
    padding: '8px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  },
  quickLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '18px 20px',
    textDecoration: 'none',
    borderRadius: '10px',
    background: '#fff',
    transition: 'all 0.2s',
  },
  quickIconWrap: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    background: '#e8f4fc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'background 0.2s',
  },
  quickText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  quickLabel: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#1a1a1a',
    transition: 'color 0.2s',
  },
  quickDesc: {
    fontSize: '12px',
    color: '#888',
    transition: 'color 0.2s',
  },

  /* Announcements */
  announceSection: {
    padding: '64px 24px 80px',
    background: '#fff',
  },
  sectionHead: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '32px',
    flexWrap: 'wrap',
    gap: '16px',
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
  sectionTitleLeft: {
    fontSize: 'clamp(24px, 2.5vw, 32px)',
    fontWeight: 700,
    color: '#1a1a1a',
    letterSpacing: '-0.5px',
  },
  sectionSub: {
    color: '#666',
    fontSize: '16px',
    lineHeight: 1.8,
    maxWidth: '620px',
    margin: '0 auto',
  },
  sectionLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    color: '#0E7BB5',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 600,
  },
  announceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '16px',
  },
  announceCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  },
  announceTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  announceTag: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '11px',
    fontWeight: 700,
    padding: '4px 10px',
    borderRadius: '20px',
    letterSpacing: '0.3px',
  },
  urgentDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#e74c3c',
    animation: 'pulse 2s ease-in-out infinite',
  },
  announceText: {
    fontSize: '14px',
    color: '#444',
    lineHeight: 1.6,
  },

  /* About Strip */
  aboutStrip: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    minHeight: '520px',
  },
  aboutImg: {
    backgroundImage: `url(${leadership1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '400px',
  },
  aboutText: {
    background: '#0E7BB5',
    padding: '64px 56px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  sectionTagWhite: {
    color: '#FFB800',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
  aboutTitle: {
    color: '#fff',
    fontSize: 'clamp(24px, 2.5vw, 34px)',
    fontWeight: 700,
    marginBottom: '20px',
    letterSpacing: '-0.5px',
  },
  aboutPara: {
    color: 'rgba(255,255,255,0.88)',
    fontSize: '15px',
    lineHeight: 1.8,
    marginBottom: '16px',
  },
  aboutBadges: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    margin: '20px 0 24px',
  },
  aboutBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '20px',
    padding: '6px 12px',
    fontSize: '12px',
    color: '#fff',
    fontWeight: 500,
  },
  aboutBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: '#FFB800',
    color: '#000',
    textDecoration: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 700,
    width: 'fit-content',
  },

  /* Sections */
  section: {
    padding: '80px 24px',
    background: '#fff',
  },

  /* Programmes preview */
  progGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  },
  progCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '12px',
    overflow: 'hidden',
    textDecoration: 'none',
    color: 'inherit',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  },
  progImg: {
    height: '180px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '14px',
  },
  progType: {
    background: 'rgba(0,0,0,0.72)',
    color: '#fff',
    fontSize: '11px',
    fontWeight: 600,
    padding: '4px 10px',
    borderRadius: '4px',
    backdropFilter: 'blur(4px)',
  },
  progBody: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  progIconRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  progTitle: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#1a1a1a',
  },
  progDesc: {
    fontSize: '13px',
    color: '#666',
    lineHeight: 1.7,
  },
  progLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    color: '#0E7BB5',
    fontSize: '13px',
    fontWeight: 600,
    marginTop: '4px',
  },
  sectionFooter: {
    textAlign: 'center',
    marginTop: '48px',
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

  /* Campuses */
  campusGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
    gap: '20px',
  },
  campusCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'transform 0.25s ease',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  campusImg: {
    height: '170px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '12px',
  },
  campusImgOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 60%)',
  },
  campusTownBadge: {
    position: 'relative',
    zIndex: 1,
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
    padding: '18px 20px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  campusName: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#0E7BB5',
  },
  campusRole: {
    fontSize: '12px',
    color: '#888',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  campusSpec: {
    fontSize: '13px',
    color: '#555',
    lineHeight: 1.6,
  },

  /* NSFAS Banner */
  nsfasBanner: {
    background: 'linear-gradient(135deg, #0E7BB5 0%, #0a5a8a 100%)',
    padding: '56px 24px',
  },
  nsfasInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '32px',
  },
  nsfasLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flex: 1,
    minWidth: '300px',
  },
  nsfasIconWrap: {
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    background: 'rgba(255,184,0,0.15)',
    border: '1.5px solid rgba(255,184,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  nsfasTitle: {
    fontSize: 'clamp(22px, 3vw, 30px)',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '6px',
    letterSpacing: '-0.5px',
  },
  nsfasSub: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '14px',
    lineHeight: 1.7,
    maxWidth: '540px',
  },
  nsfasBtns: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
  },
  nsfasBtnPrimary: {
    background: '#FFB800',
    color: '#000',
    textDecoration: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 700,
    whiteSpace: 'nowrap',
  },
  nsfasBtnOutline: {
    background: 'transparent',
    color: '#fff',
    textDecoration: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 600,
    border: '2px solid rgba(255,255,255,0.5)',
    whiteSpace: 'nowrap',
  },
  nsfasLogoImg: {
    maxWidth: '44px',
    maxHeight: '44px',
    objectFit: 'contain',
  },

  /* Why */
  whyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
  },
  whyCard: {
    background: '#fff',
    border: '1.5px solid #e8e8e8',
    borderRadius: '12px',
    padding: '28px 24px',
    transition: 'all 0.25s ease',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  whyIconWrap: {
    width: '48px',
    height: '48px',
    borderRadius: '10px',
    background: '#e8f4fc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whyTitle: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#1a1a1a',
  },
  whyDesc: {
    fontSize: '14px',
    color: '#666',
    lineHeight: 1.7,
  },

  /* Events */
  eventsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '20px',
  },
  eventCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '12px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  },
  eventImage: {
    height: '180px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  eventImageOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%)',
  },
  eventDateBadge: {
    position: 'absolute',
    bottom: '14px',
    left: '14px',
    background: 'rgba(14,123,181,0.95)',
    backdropFilter: 'blur(8px)',
    borderRadius: '8px',
    padding: '8px 12px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  eventDay: {
    color: '#FFB800',
    fontSize: '13px',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  eventYear: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: '11px',
    lineHeight: 1.2,
  },
  eventBody: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: 1,
  },
  eventTitle: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#1a1a1a',
  },
  eventDesc: {
    fontSize: '13px',
    color: '#666',
    lineHeight: 1.6,
    flex: 1,
  },
  eventMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginTop: '8px',
    paddingTop: '12px',
    borderTop: '1px solid #f0f0f0',
  },
  eventLocation: {
    fontSize: '12px',
    color: '#0E7BB5',
    fontWeight: 600,
  },

  /* Testimonials */
  testimonialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  },
  testimonialCard: {
    background: '#f8f9fa',
    borderRadius: '12px',
    padding: '32px 28px',
    borderTop: '3px solid #FFB800',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  testimonialText: {
    fontSize: '15px',
    color: '#333',
    lineHeight: 1.8,
    fontStyle: 'italic',
    flex: 1,
  },
  testimonialAuthor: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  testimonialImg: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    objectFit: 'cover',
    flexShrink: 0,
    border: '2px solid #FFB800',
  },
  testimonialName: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#1a1a1a',
    margin: 0,
  },
  testimonialProg: {
    fontSize: '12px',
    color: '#666',
    margin: 0,
  },

  /* CTA */
  cta: {
    position: 'relative',
    backgroundImage: 'url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
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
    fontSize: 'clamp(30px, 4vw, 48px)',
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