import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchHomeData } from '../services/api'
import { 
  FileText, BookOpen, Landmark, MapPin, Phone, 
  Settings, BarChart, Monitor, GraduationCap, Coffee, Wrench,
  Award, Hammer, Coins, Map, Handshake, Globe
} from 'lucide-react'

const getProgrammeIcon = (id) => {
  const icons = {
    engineering: <Settings size={24} color="#0E7BB5" />,
    business: <BarChart size={24} color="#0E7BB5" />,
    it: <Monitor size={24} color="#0E7BB5" />,
    education: <GraduationCap size={24} color="#0E7BB5" />,
    hospitality: <Coffee size={24} color="#0E7BB5" />,
    utility: <Wrench size={24} color="#0E7BB5" />
  };
  return icons[id] || <BookOpen size={24} color="#0E7BB5" />;
}

export default function Home() {
  const [current, setCurrent] = useState(0)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchHomeData()
        setData(response)
      } catch (error) {
        console.error("Error fetching data", error)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  useEffect(() => {
    if (!data) return;
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % data.slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [data])

  if (loading) {
    return (
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#0E7BB5' }}>
        <h2>Loading Maluti TVET Portal...</h2>
      </div>
    )
  }

  return (
    <main>
      {/* Hero */}
      <section style={styles.hero}>
        {data.slides.map((slide, i) => (
          <div key={i} style={{
            ...styles.slide,
            backgroundImage: `url(${slide.url})`,
            opacity: i === current ? 1 : 0,
          }} />
        ))}
        <div style={styles.overlay} />
        <div style={styles.heroContent}>
          <p style={styles.heroTagline}>Great Place. Great Choice for Lifelong Learning.</p>
          <h1 style={styles.heroTitle}>Maluti TVET College</h1>
          <p style={styles.heroSub}>
            A leading Technical Vocational Education and Training institution in the North Eastern Free State -
            offering NC(V) and NATED programmes across 8 campuses since 2002.
          </p>
          <div style={styles.heroBtns}>
            <Link to="/admissions" style={styles.btnPrimary}
              onMouseEnter={e => e.currentTarget.style.background = '#e6a600'}
              onMouseLeave={e => e.currentTarget.style.background = '#FFB800'}
            >Apply for 2026</Link>
            <Link to="/programmes" style={styles.btnSecondary}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >View Programmes</Link>
          </div>
          <div style={styles.dots}>
            {data.slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} style={{
                ...styles.dot,
                background: i === current ? '#FFB800' : 'rgba(255,255,255,0.4)',
                transform: i === current ? 'scale(1.3)' : 'scale(1)',
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Bar */}
      <section style={styles.quickBar}>
        {[
          { icon: <FileText size={28} />, label: 'Apply Online', path: '/admissions' },
          { icon: <BookOpen size={28} />, label: 'Our Programmes', path: '/programmes' },
          { icon: <Landmark size={28} />, label: 'NSFAS Funding', path: '/admissions' },
          { icon: <MapPin size={28} />, label: 'Our Campuses', path: '/about' },
          { icon: <Phone size={28} />, label: 'Contact Us', path: '/contact' },
        ].map((ql, i) => (
          <Link key={i} to={ql.path} style={styles.quickLink}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#0E7BB5'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#fff'
              e.currentTarget.style.color = '#1a1a1a'
            }}
          >
            <span>{ql.icon}</span>
            <span style={{ fontSize: '12px', fontWeight: '600' }}>{ql.label}</span>
          </Link>
        ))}
      </section>

      {/* Stats */}
      <section style={styles.statsBar}>
        {data.stats.map((s, i) => (
          <div key={i} style={styles.statItem}>
            <span style={styles.statNumber}>{s.number}</span>
            <span style={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </section>

      {/* Announcements */}
      <section style={styles.section}>
        <div style={styles.container}>
          <p style={styles.sectionTag}>Notice Board</p>
          <h2 style={styles.sectionTitle}>Announcements</h2>
          <div style={styles.announcementList}>
            {data.announcements.map((a, i) => (
            <div key={i} style={{
                ...styles.announcementItem,
                borderLeft: `4px solid ${a.urgent ? '#FFB800' : '#0E7BB5'}`,
            }}>
                <span style={{
                ...styles.announcementTag,
                background: a.urgent ? '#fff8e6' : '#e8f4fc',
                color: a.urgent ? '#b8860b' : '#0E7BB5',
                }}>{a.tag}</span>
                <p style={styles.announcementText}>{a.text}</p>
                {a.urgent && <span style={styles.hotBadge}>Urgent</span>}
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section style={{ ...styles.section, background: '#f8f9fa' }}>
          <div style={styles.container}>
              <p style={styles.sectionTag}>Dates to Know</p>
              <h2 style={styles.sectionTitle}>Upcoming Events</h2>
              <div style={styles.eventsGrid}>
              {data.events.map((ev, i) => (
                  <div key={i} style={styles.eventCard}>
                  <div style={styles.eventDate}>
                      <span style={styles.eventDay}>{ev.date}</span>
                      <span style={styles.eventYear}>{ev.year}</span>
                  </div>
                  <div style={styles.eventBody}>
                      <h3 style={styles.eventTitle}>{ev.title}</h3>
                      <p style={styles.eventDesc}>{ev.desc}</p>
                      <span style={styles.eventLocation}>{ev.location}</span>
                  </div>
                  </div>
              ))}
              </div>
          </div>
      </section>

      {/* Testimonials with Images */}
      <section style={styles.section}>
          <div style={styles.container}>
              <p style={styles.sectionTag}>Student Voices</p>
              <h2 style={styles.sectionTitle}>What Our Students Say</h2>
              <div style={styles.testimonialsGrid}>
              {data.testimonials.map((t, i) => (
                  <div key={i} style={styles.testimonialCard}>
                  <p style={styles.testimonialText}>"{t.text}"</p>
                  <div style={styles.testimonialAuthor}>
                      <div style={styles.testimonialAvatar}>
                        <img src={t.image} alt={t.name} style={styles.avatarImg} />
                      </div>
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

      {/* About Strip with Dynamic API Image */}
      <section style={styles.aboutStrip}>
        <div style={{ ...styles.aboutImg, backgroundImage: `url(${data.aboutImage})` }} />
        <div style={styles.aboutText}>
          <p style={styles.sectionTagWhite}>Who We Are</p>
          <h2 style={{ ...styles.sectionTitleWhite, textAlign: 'left', marginBottom: '16px' }}>
            Rooted in the Free State Since 2002
          </h2>
          <p style={styles.aboutPara}>
            Maluti TVET College is a multi-site Technical Vocational Education and Training provider
            located in the North Eastern Free State, with its Corporate Office in Bethlehem and
            Central Office in Phuthaditjhaba at the foothills of the majestic Maluti Mountains.
          </p>
          <p style={styles.aboutPara}>
            Accredited by Umalusi and several SETAs, and operating under the Department of Higher
            Education and Training, the college is committed to transforming lives through practical,
            industry-relevant education across 8 campuses.
          </p>
          <Link to="/about" style={styles.btnYellow}>Learn More About Us</Link>
        </div>
      </section>

      {/* Programmes */}
      <section style={{ ...styles.section, background: '#f8f9fa' }}>
        <div style={styles.container}>
          <p style={styles.sectionTag}>Qualifications</p>
          <h2 style={styles.sectionTitle}>NC(V) & NATED Programmes</h2>
          <p style={styles.sectionSub}>
            We offer National Certificate (Vocational) and NATED Report 191 programmes
            across a range of fields - practical, accredited, and industry-aligned.
          </p>
          <div style={styles.progGrid}>
            {data.programmes.map((prog, i) => (
              <div key={i} style={styles.progCard}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  ...styles.progImg,
                  backgroundImage: `url(${prog.image})`,
                }} />
                <div style={styles.progBody}>
                  <span style={styles.progType}>{prog.type}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                     {getProgrammeIcon(prog.iconId)}
                     <h3 style={styles.progTitle}>{prog.title}</h3>
                  </div>
                  <p style={styles.progDesc}>{prog.desc}</p>
                  <Link to="/programmes" style={styles.progLink}>View courses →</Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/programmes" style={styles.btnBlue}>See All Programmes</Link>
          </div>
        </div>
      </section>

      {/* Campuses with Images */}
      <section style={styles.section}>
        <div style={styles.container}>
          <p style={styles.sectionTag}>Where We Are</p>
          <h2 style={styles.sectionTitle}>Our 8 Campuses</h2>
          <p style={styles.sectionSub}>
            From Bethlehem to Harrismith to Phuthaditjhaba - we bring quality education
            to communities across the North Eastern Free State.
          </p>
          <div style={styles.campusGrid}>
            {data.campuses.map((c, i) => (
              <div key={i} style={styles.campusCard}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{
                    height: '140px',
                    backgroundImage: `url(${c.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }} />
                <div style={styles.campusBody}>
                    <h3 style={styles.campusName}><MapPin size={16} style={{marginRight: '4px'}}/> {c.name}</h3>
                    <p style={styles.campusTown}>{c.town}, Free State</p>
                    <p style={styles.campusNote}>{c.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section style={styles.imageBanner}>
        <div style={styles.bannerOverlay}>
          <div style={styles.container}>
            <h2 style={styles.bannerTitle}>NSFAS Funding Available</h2>
            <p style={styles.bannerSub}>
              Eligible South African students can apply for NSFAS to cover tuition and living allowances.
              Don't let finances stop you - apply today at nsfas.org.za
            </p>
            <a href="https://www.nsfas.org.za" target="_blank" rel="noreferrer" style={styles.btnYellow}>
              Visit NSFAS Website
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ ...styles.section, background: '#f8f9fa' }}>
        <div style={styles.container}>
          <p style={styles.sectionTag}>Why Maluti TVET</p>
          <h2 style={styles.sectionTitle}>What Sets Us Apart</h2>
          <div style={styles.whyGrid}>
            {[
              { icon: <Award size={36} color="#0E7BB5" />, title: 'Umalusi Accredited', desc: 'All qualifications are nationally recognised and accredited by Umalusi.' },
              { icon: <Hammer size={36} color="#0E7BB5" />, title: 'Practical First', desc: 'Our programmes are built around hands-on training that prepares you for real work.' },
              { icon: <Coins size={36} color="#0E7BB5" />, title: 'NSFAS Approved', desc: 'Qualifying students can access NSFAS funding for both tuition and living costs.' },
              { icon: <Map size={36} color="#0E7BB5" />, title: '8 Campuses', desc: 'Strategically spread across the Free State so education is always within reach.' },
              { icon: <Handshake size={36} color="#0E7BB5" />, title: 'Industry Partnerships', desc: 'We work with employers and SETAs to keep our programmes current and relevant.' },
              { icon: <Globe size={36} color="#0E7BB5" />, title: 'Community Roots', desc: 'Founded to serve Free State communities - our success is measured by yours.' },
            ].map((item, i) => (
              <div key={i} style={styles.whyCard}>
                <span style={styles.whyIcon}>{item.icon}</span>
                <h3 style={styles.whyTitle}>{item.title}</h3>
                <p style={styles.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <div style={styles.ctaInner}>
          <h2 style={styles.ctaTitle}>Start Your Application Today</h2>
          <p style={styles.ctaSub}>
            2026 applications are open. Visit any of our 8 campuses or apply online at malutitvet.co.za
          </p>
          <div style={styles.heroBtns}>
            <Link to="/admissions" style={styles.btnPrimary}
              onMouseEnter={e => e.currentTarget.style.background = '#e6a600'}
              onMouseLeave={e => e.currentTarget.style.background = '#FFB800'}
            >Apply Now</Link>
            <Link to="/contact" style={styles.btnSecondary}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >Get in Touch</Link>
          </div>
        </div>
      </section>

    </main>
  )
}

const styles = {
  hero: { 
     position: 'relative',
     minHeight: '92vh', 
     display: 'flex', 
     alignItems: 'center', 
     overflow: 'hidden' },
  slide: { 
    position: 'absolute', 
    inset: 0, backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    transition: 'opacity 1.4s ease-in-out' },
  overlay: { 
    position: 'absolute', 
    inset: 0, 
    background: 'linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(14,123,181,0.55) 100%)', 
    zIndex: 1 },
  heroContent: { 
    position: 'relative', 
    zIndex: 2, maxWidth: '720px', 
    margin: '0 auto', 
    textAlign: 'center', 
    width: '100%', 
    padding: '80px 24px' },
  heroTagline: { 
    color: '#FFB800', 
    fontSize: '12px', 
    fontWeight: '700', 
    letterSpacing: '3px', 
    textTransform: 'uppercase', 
    marginBottom: '20px' },
  heroTitle: { 
    color: '#fff', 
    fontSize: 'clamp(36px, 6vw, 64px)', 
    fontWeight: '800', 
    lineHeight: '1.1', 
    marginBottom: '20px', 
    letterSpacing: '-1px' },
  heroSub: { 
    color: 'rgba(255,255,255,0.88)', 
    fontSize: '17px', 
    lineHeight: '1.8', 
    marginBottom: '36px', 
    maxWidth: '580px', 
    margin: '0 auto 36px' },
  heroBtns: { 
    display: 'flex', 
    gap: '16px', 
    justifyContent: 'center', 
    flexWrap: 'wrap' },
  btnPrimary: { 
    background: '#FFB800', 
    color: '#000', 
    textDecoration: 'none', 
    padding: '14px 36px', 
    borderRadius: '4px', 
    fontSize: '15px', 
    fontWeight: '700', 
    transition: 'background 0.2s', 
    letterSpacing: '0.3px' },
  btnSecondary: { 
    background: 'transparent', 
    color: '#fff', 
    textDecoration: 'none', 
    padding: '14px 36px', 
    borderRadius: '4px', 
    fontSize: '15px', 
    fontWeight: '600', 
    border: '2px solid rgba(255,255,255,0.55)', 
    transition: 'background 0.2s' },
  btnBlue: { 
    background: '#0E7BB5', 
    color: '#fff', 
    textDecoration: 'none', 
    padding: '13px 32px', 
    borderRadius: '4px', 
    fontSize: '15px', 
    fontWeight: '600', 
    display: 'inline-block' },
  btnYellow: { 
    background: '#FFB800', 
    color: '#000', 
    textDecoration: 'none', 
    padding: '13px 32px', 
    borderRadius: '4px', 
    fontSize: '15px', 
    fontWeight: '700', 
    display: 'inline-block', 
    marginTop: '20px' },
  dots: { 
    display: 'flex', 
    justifyContent: 'center', 
    gap: '10px', 
    marginTop: '36px' },
  dot: { 
    width: '10px', 
    height: '10px', 
    borderRadius: '50%', 
    border: 'none', 
    cursor: 'pointer', 
    transition: 'all 0.3s ease', 
    padding: 0 },
  quickBar: { 
    background: '#fff', 
    borderBottom: '1px solid #e8e8e8', 
    display: 'flex', 
    justifyContent: 'center', 
    flexWrap: 'wrap' },
  quickLink: { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    gap: '6px', 
    padding: '18px 32px', 
    textDecoration: 'none', 
    color: '#1a1a1a', 
    borderRight: '1px solid #e8e8e8', 
    transition: 'all 0.2s' },
  statsBar: { 
    background: '#0E7BB5', 
    padding: '32px 24px', 
    display: 'flex', 
    justifyContent: 'center', 
    flexWrap: 'wrap', 
    gap: '56px' },
  statItem: { 
    textAlign: 'center', 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '4px' },
  statNumber: { 
    fontSize: '30px', 
    fontWeight: '800', 
    color: '#FFB800' },
  statLabel: { 
    fontSize: '12px', 
    fontWeight: '500', 
    color: 'rgba(255,255,255,0.85)', 
    textTransform: 'uppercase', 
    letterSpacing: '1px' },
  section: { 
    padding: '80px 24px', 
    background: '#fff' },
  container: { 
    maxWidth: '1200px', 
    margin: '0 auto' },
  sectionTag: { 
    color: '#0E7BB5', 
    fontSize: '11px', 
    fontWeight: '700', 
    letterSpacing: '3px', 
    textTransform: 'uppercase', 
    marginBottom: '8px', 
    textAlign: 'center' },
  sectionTitle: { 
    fontSize: 'clamp(26px, 3vw, 38px)', 
    fontWeight: '700', 
    color: '#1a1a1a', 
    textAlign: 'center', 
    marginBottom: '12px', 
    letterSpacing: '-0.5px' },
  sectionSub: { 
    color: '#666', 
    fontSize: '16px', 
    textAlign: 'center', 
    maxWidth: '580px', 
    margin: '0 auto 48px', 
    lineHeight: '1.8' },
  announcementList: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '12px', 
    maxWidth: '820px', 
    margin: '32px auto 0' },
  announcementItem: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '16px', 
    background: '#fff', 
    border: '1px solid #e8e8e8', 
    borderRadius: '8px', 
    padding: '16px 20px', 
    boxShadow: '0 1px 4px rgba(0,0,0,0.04)' },
  announcementTag: { 
    fontSize: '11px', 
    fontWeight: '700', 
    padding: '4px 12px', 
    borderRadius: '20px', 
    whiteSpace: 'nowrap', 
    letterSpacing: '0.5px' },
  announcementText: { 
    fontSize: '14px', 
    color: '#333', 
    lineHeight: '1.5', 
    flex: 1 },
  hotBadge: { 
    fontSize: '11px', 
    fontWeight: '700', 
    color: '#fff', 
    background: '#e74c3c', 
    padding: '3px 10px', 
    borderRadius: '20px', 
    whiteSpace: 'nowrap' },
  aboutStrip: { 
    display: 'grid', 
    gridTemplateColumns: '1fr 1fr', 
    minHeight: '500px', '@media(maxWidth: 768px)': { gridTemplateColumns: '1fr' } },
  aboutImg: { 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    minHeight: '500px', 
    width: '100%' },
  aboutText: { 
    background: '#0E7BB5', 
    padding: '64px 56px', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center' },
  sectionTagWhite: { 
    color: '#FFB800', 
    fontSize: '11px', 
    fontWeight: '700', 
    letterSpacing: '3px', 
    textTransform: 'uppercase', 
    marginBottom: '12px' },
  sectionTitleWhite: { 
    fontSize: 'clamp(22px, 2.5vw, 32px)', 
    fontWeight: '700', color: '#fff', 
    textAlign: 'center', 
    marginBottom: '48px', 
    letterSpacing: '-0.5px' },
  aboutPara: { 
    color: 'rgba(255,255,255,0.88)', 
    fontSize: '15px', 
    lineHeight: '1.8', 
    marginBottom: '16px' },
  progGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
    gap: '24px' },
  progCard: { 
    background: '#fff', 
    border: '1px solid #e8e8e8', 
    borderRadius: '10px', 
    overflow: 'hidden', 
    transition: 'transform 0.25s ease, box-shadow 0.25s ease', 
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)' },
  progImg: { 
    height: '180px', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center' },
  progBody: { 
    padding: '20px', 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '8px' },
  progType: { 
    fontSize: '11px', 
    fontWeight: '700', 
    color: '#0E7BB5', 
    textTransform: 'uppercase', 
    letterSpacing: '1px' },
  progTitle: { 
    fontSize: '16px', 
    fontWeight: '700', 
    color: '#1a1a1a', 
    margin: 0 },
  progDesc: { 
    fontSize: '14px', 
    color: '#666', 
    lineHeight: '1.6', 
    flex: 1 },
  progLink: { 
    color: '#0E7BB5', 
    textDecoration: 'none', 
    fontSize: '13px', 
    fontWeight: '600', 
    marginTop: '4px' },
  campusGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
    gap: '20px', 
    marginTop: '40px' },
  campusCard: { 
    background: '#fff', 
    border: '1px solid #e8e8e8', 
    borderRadius: '10px', 
    overflow: 'hidden', 
    transition: 'all 0.25s ease', 
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)', 
    display: 'flex', 
    flexDirection: 'column' },
  campusBody: { 
    padding: '20px', 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '6px' },
  campusName: { 
    fontSize: '15px', 
    fontWeight: '700', 
    color: '#0E7BB5', 
    display: 'flex', 
    alignItems: 'center' },
  campusTown: { 
    fontSize: '13px', 
    color: '#555' },
  campusNote: { 
    fontSize: '12px', 
    color: '#888', 
    fontStyle: 'italic', 
    marginTop: '4px' },
  imageBanner: { 
    backgroundImage: 'url(https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600&q=80)', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundAttachment: 'fixed' },
  bannerOverlay: { 
    background: 'rgba(14,123,181,0.88)', 
    padding: '80px 24px', 
    textAlign: 'center' },
  bannerTitle: { 
    fontSize: 'clamp(26px, 3vw, 40px)', 
    fontWeight: '800', 
    color: '#fff', 
    marginBottom: '16px', 
    letterSpacing: '-0.5px' },
  bannerSub: { 
    color: 'rgba(255,255,255,0.9)', 
    fontSize: '16px', 
    lineHeight: '1.8', 
    maxWidth: '560px', 
    margin: '0 auto' },
  whyGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
    gap: '24px', 
    marginTop: '40px' },
  whyCard: { 
    background: '#fff', 
    border: '1px solid #e8e8e8', 
    borderRadius: '8px', 
    padding: '28px 24px', 
    borderTop: '3px solid #0E7BB5' },
  whyIcon: { 
    display: 'block', 
    marginBottom: '14px' },
  whyTitle: { 
    fontSize: '16px', 
    fontWeight: '700', 
    color: '#1a1a1a', 
    marginBottom: '8px' },
  whyDesc: { 
    fontSize: '14px', 
    color: '#666', 
    lineHeight: '1.7' },
  cta: { 
    backgroundImage: 'url(https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1600&q=80)', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center' },
  ctaInner: { 
    background: 'rgba(0,0,0,0.72)', 
    padding: '96px 24px', 
    textAlign: 'center' },
  ctaTitle: { 
    fontSize: 'clamp(28px, 4vw, 44px)', 
    fontWeight: '800', 
    color: '#fff', 
    marginBottom: '16px', 
    letterSpacing: '-0.5px' },
  ctaSub: { 
    color: 'rgba(255,255,255,0.8)', 
    fontSize: '16px', 
    marginBottom: '36px', 
    lineHeight: '1.7', 
    maxWidth: '520px', 
    margin: '0 auto 36px' },
  eventsGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
    gap: '20px', 
    marginTop: '40px' },
  eventCard: { 
    background: '#fff', 
    border: '1px solid #e8e8e8', 
    borderRadius: '8px', 
    padding: '24px', 
    display: 'flex', 
    gap: '20px', 
    alignItems: 'flex-start' },
  eventDate: { 
    background: '#0E7BB5', 
    borderRadius: '8px', 
    padding: '12px 16px', 
    textAlign: 'center', 
    minWidth: '64px', 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '2px' },
  eventDay: { 
    color: '#FFB800', 
    fontSize: '13px', 
    fontWeight: '700', 
    display: 'block' },
  eventYear: { 
    color: 'rgba(255,255,255,0.7)', 
    fontSize: '11px', 
    display: 'block' },
  eventBody: { flex: 1 },
  eventTitle: { 
    fontSize: '15px', 
    fontWeight: '700', 
    color: '#1a1a1a', 
    marginBottom: '6px' },
  eventDesc: { 
    fontSize: '13px', 
    color: '#666', 
    lineHeight: '1.6', 
    marginBottom: '8px' },
  eventLocation: { 
    fontSize: '12px', 
    color: '#0E7BB5', 
    fontWeight: '600' },
  testimonialsGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
    gap: '24px', 
    marginTop: '40px' },
  testimonialCard: { 
    background: '#f8f9fa', 
    borderRadius: '10px', 
    padding: '28px 24px', 
    borderTop: '3px solid #FFB800', 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '20px' },
  testimonialText: { 
    fontSize: '15px', 
    color: '#333', 
    lineHeight: '1.8', 
    fontStyle: 'italic', 
    flex: 1 },
  testimonialAuthor: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '12px' },
  testimonialAvatar: { 
    width: '48px', 
    height: '48px', 
    borderRadius: '50%', 
    overflow: 'hidden', 
    flexShrink: 0, 
    border: '2px solid #0E7BB5' },
  avatarImg: { 
    width: '100%', 
    height: '100%', 
    objectFit: 'cover' },
  testimonialName: { 
    fontSize: '14px', 
    fontWeight: '700', 
    color: '#1a1a1a', 
    margin: 0 },
  testimonialProg: { 
    fontSize: '12px', 
    color: '#666', 
    margin: 0 }
}