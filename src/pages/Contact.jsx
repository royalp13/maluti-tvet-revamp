import { useEffect, useState } from 'react'
import { fetchContactData } from '../services/api'
import { Link } from 'react-router-dom'
import {
  Globe, Mail, Phone, MapPin, AlertTriangle,
  MessageSquare, Building2, Users, Send
} from 'lucide-react'

export default function Contact() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', campus: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    fetchContactData().then(d => {
      setData(d)
      setLoading(false)
    })
  }, [])

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    // Simulate form submission — in production, POST to /api/contact
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1200)
  }

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
          <p style={styles.heroTag}>Get in Touch</p>
          <h1 style={styles.heroTitle}>Contact Maluti TVET College</h1>
          <p style={styles.heroSub}>
            Visit any of our 8 campuses across the Free State, contact us online,
            or speak to our student support team. We are here to help.
          </p>
          <div style={styles.heroCards}>
            <div style={styles.heroCard}>
              <Globe size={20} color="#FFB800" />
              <div>
                <p style={styles.heroCardLabel}>Website</p>
                <a href="https://www.malutitvet.co.za" target="_blank" rel="noreferrer" style={styles.heroCardValue}>malutitvet.co.za</a>
              </div>
            </div>
            <div style={styles.heroCard}>
              <AlertTriangle size={20} color="#FFB800" />
              <div>
                <p style={styles.heroCardLabel}>Fraud Hotline (24hrs, Free)</p>
                <span style={styles.heroCardValue}>{data.general.fraudHotline}</span>
              </div>
            </div>
            <div style={styles.heroCard}>
              <MapPin size={20} color="#FFB800" />
              <div>
                <p style={styles.heroCardLabel}>Corporate Office</p>
                <span style={styles.heroCardValue}>Bethlehem, Free State</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fraud Hotline Banner */}
      <section style={styles.fraudBanner}>
        <div style={styles.container}>
          <div style={styles.fraudInner}>
            <AlertTriangle size={24} color="#1a1a1a" />
            <p style={styles.fraudText}>
              <strong>Fraud & Corruption Hotline: {data.general.fraudHotline}</strong> — {data.general.fraudHotlineProvider}.
              Do not pay cash to any college staff member. All payments via EFT only.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Departments */}
      <section style={styles.mainSection}>
        <div style={styles.container}>
          <div style={styles.mainGrid}>

            {/* Contact Form */}
            <div style={styles.formSection}>
              <h2 style={styles.formTitle}>Send an Enquiry</h2>
              <p style={styles.formDesc}>
                Use this form for general enquiries. For admissions, NSFAS, and examination
                queries, contact your nearest campus directly.
              </p>

              {submitted ? (
                <div style={styles.successBox}>
                  <Send size={32} color="#2ecc71" />
                  <h3 style={styles.successTitle}>Enquiry Submitted</h3>
                  <p style={styles.successDesc}>
                    Thank you for reaching out. Your enquiry has been received and will be
                    directed to the appropriate department. Please allow 2–3 working days
                    for a response, or visit your nearest campus for urgent matters.
                  </p>
                  <button style={styles.successBtn} onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', campus: '', message: '' }) }}>
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={styles.form}>
                  <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Full Name *</label>
                      <input name="name" required value={form.name} onChange={handleChange} style={styles.input} placeholder="Your full name" />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Email Address *</label>
                      <input name="email" type="email" required value={form.email} onChange={handleChange} style={styles.input} placeholder="your@email.com" />
                    </div>
                  </div>
                  <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Phone Number</label>
                      <input name="phone" value={form.phone} onChange={handleChange} style={styles.input} placeholder="Optional" />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Nearest Campus</label>
                      <select name="campus" value={form.campus} onChange={handleChange} style={styles.input}>
                        <option value="">Select a campus</option>
                        {data.campuses.map((c, i) => (
                          <option key={i} value={c.name}>{c.name} — {c.town}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Subject *</label>
                    <select name="subject" required value={form.subject} onChange={handleChange} style={styles.input}>
                      <option value="">Select a subject</option>
                      <option>Admissions & Registration</option>
                      <option>NSFAS & Financial Aid</option>
                      <option>Programmes & Courses</option>
                      <option>Examinations & Results</option>
                      <option>Work-Integrated Learning (WIL)</option>
                      <option>Supply Chain / Tenders</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Message *</label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      style={{ ...styles.input, minHeight: '120px', resize: 'vertical' }}
                      placeholder="Describe your enquiry in detail..."
                    />
                  </div>
                  <button type="submit" disabled={submitting} style={{
                    ...styles.submitBtn,
                    opacity: submitting ? 0.7 : 1,
                    cursor: submitting ? 'not-allowed' : 'pointer',
                  }}>
                    {submitting ? 'Submitting...' : 'Submit Enquiry'}
                  </button>
                  <p style={styles.formNote}>
                    For urgent matters, visit your nearest campus directly. Response time is 2–3 working days.
                  </p>
                </form>
              )}
            </div>

            {/* Departments */}
            <div style={styles.deptSection}>
              <h2 style={styles.deptTitle}>Departments & Support</h2>
              <div style={styles.deptList}>
                {data.departments.map((d, i) => (
                  <div key={i} style={styles.deptCard}>
                    <h3 style={styles.deptName}>{d.name}</h3>
                    <p style={styles.deptDesc}>{d.desc}</p>
                    <p style={styles.deptContact}>{d.contact}</p>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div style={styles.socialBox}>
                <h3 style={styles.socialTitle}>Follow Us</h3>
                <div style={styles.socialList}>
                  {data.socialMedia.map((s, i) => (
                    <a key={i} href={s.url} target="_blank" rel="noreferrer" style={styles.socialItem}>
                      <MessageSquare size={16} color="#0E7BB5" />
                      <div>
                        <p style={styles.socialPlatform}>{s.platform}</p>
                        <p style={styles.socialHandle}>{s.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Contacts */}
      <section style={styles.campusSection}>
        <div style={styles.container}>
          <p style={styles.sectionTag}>Walk-In Assistance</p>
          <h2 style={styles.sectionTitle}>Campus Locations</h2>
          <p style={styles.sectionSub}>
            All 8 campuses are staffed to assist with admissions, student support, and general enquiries.
            Visit any campus in person for face-to-face assistance — no appointment required.
          </p>
          <div style={styles.campusGrid}>
            {data.campuses.map((c, i) => (
              <div key={i} style={styles.campusCard}>
                <div style={styles.campusHeader}>
                  <Building2 size={18} color="#0E7BB5" />
                  <div>
                    <h3 style={styles.campusName}>{c.name}</h3>
                    <span style={{
                      ...styles.campusTypeBadge,
                      background: c.type === 'Corporate Office' ? '#FFB800' : c.type === 'Central Office' ? '#0E7BB5' : '#e8f4fc',
                      color: c.type === 'Corporate Office' ? '#000' : c.type === 'Central Office' ? '#fff' : '#0E7BB5',
                    }}>{c.type}</span>
                  </div>
                </div>
                <div style={styles.campusDetails}>
                  <div style={styles.campusDetailRow}>
                    <MapPin size={13} color="#999" />
                    <span style={styles.campusAddress}>{c.address}</span>
                  </div>
                  <div style={styles.campusDetailRow}>
                    <Users size={13} color="#999" />
                    <span style={styles.campusRole}>{c.role}</span>
                  </div>
                </div>
                <p style={styles.campusWalkIn}>Walk-in applications and enquiries accepted</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency / Important Contacts */}
      <section style={styles.importantSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Important Contacts</h2>
          <div style={styles.importantGrid}>
            <div style={{ ...styles.importantCard, borderTopColor: '#e74c3c' }}>
              <AlertTriangle size={24} color="#e74c3c" />
              <h3 style={styles.importantTitle}>Fraud & Corruption Hotline</h3>
              <p style={styles.importantNumber}>{data.general.fraudHotline}</p>
              <p style={styles.importantNote}>Whistle Blower — Free call, 24 hours, confidential</p>
            </div>
            <div style={{ ...styles.importantCard, borderTopColor: '#0E7BB5' }}>
              <Globe size={24} color="#0E7BB5" />
              <h3 style={styles.importantTitle}>Official Website</h3>
              <a href="https://www.malutitvet.co.za" target="_blank" rel="noreferrer" style={styles.importantLink}>
                www.malutitvet.co.za
              </a>
              <p style={styles.importantNote}>Applications, publications, and student portal access</p>
            </div>
            <div style={{ ...styles.importantCard, borderTopColor: '#2ecc71' }}>
              <Globe size={24} color="#2ecc71" />
              <h3 style={styles.importantTitle}>NSFAS Applications</h3>
              <a href="https://www.nsfas.org.za" target="_blank" rel="noreferrer" style={styles.importantLink}>
                www.nsfas.org.za
              </a>
              <p style={styles.importantNote}>Apply for NSFAS funding for the 2026 academic year</p>
            </div>
            <div style={{ ...styles.importantCard, borderTopColor: '#FFB800' }}>
              <Mail size={24} color="#FFB800" />
              <h3 style={styles.importantTitle}>General Enquiries</h3>
              <p style={styles.importantLink}>{data.general.email}</p>
              <p style={styles.importantNote}>For non-urgent enquiries — allow 2–3 working days for response</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

const styles = {
  hero: {
    position: 'relative',
    backgroundImage: 'url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '420px',
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
    maxWidth: '580px',
    marginBottom: '32px',
  },
  heroCards: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
  },
  heroCard: {
    background: 'rgba(255,255,255,0.12)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '8px',
    padding: '14px 18px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  heroCardLabel: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    margin: 0,
  },
  heroCardValue: {
    color: '#fff',
    fontSize: '14px',
    fontWeight: '600',
    textDecoration: 'none',
  },
  fraudBanner: {
    background: '#FFB800',
    padding: '14px 24px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  fraudInner: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    justifyContent: 'center',
  },
  fraudText: {
    fontSize: '14px',
    color: '#1a1a1a',
    lineHeight: '1.5',
    textAlign: 'center',
  },
  mainSection: {
    padding: '80px 24px',
    background: '#f8f9fa',
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: '1.4fr 1fr',
    gap: '48px',
    alignItems: 'flex-start',
  },
  formSection: {
    background: '#fff',
    borderRadius: '12px',
    padding: '36px',
    border: '1px solid #e8e8e8',
    boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
  },
  formTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '8px',
    letterSpacing: '-0.5px',
  },
  formDesc: {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.7',
    marginBottom: '24px',
    borderBottom: '1px solid #f0f0f0',
    paddingBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#444',
  },
  input: {
    padding: '10px 14px',
    borderRadius: '6px',
    border: '1.5px solid #e0e0e0',
    fontSize: '14px',
    outline: 'none',
    background: '#fafafa',
    color: '#1a1a1a',
    width: '100%',
    fontFamily: 'inherit',
  },
  submitBtn: {
    background: '#0E7BB5',
    color: '#fff',
    border: 'none',
    padding: '13px 28px',
    borderRadius: '6px',
    fontSize: '15px',
    fontWeight: '700',
    marginTop: '4px',
    transition: 'opacity 0.2s',
  },
  formNote: {
    fontSize: '12px',
    color: '#999',
    textAlign: 'center',
    marginTop: '4px',
  },
  successBox: {
    textAlign: 'center',
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  },
  successTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#1a1a1a',
  },
  successDesc: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.8',
    maxWidth: '400px',
  },
  successBtn: {
    background: '#0E7BB5',
    color: '#fff',
    border: 'none',
    padding: '10px 24px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '8px',
  },
  deptSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  deptTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#1a1a1a',
  },
  deptList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  deptCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderLeft: '3px solid #0E7BB5',
    borderRadius: '6px',
    padding: '14px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  deptName: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#1a1a1a',
  },
  deptDesc: {
    fontSize: '12px',
    color: '#666',
    lineHeight: '1.5',
  },
  deptContact: {
    fontSize: '12px',
    color: '#0E7BB5',
    fontWeight: '500',
    fontStyle: 'italic',
  },
  socialBox: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '8px',
    padding: '20px',
  },
  socialTitle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '12px',
  },
  socialList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  socialItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
    padding: '8px',
    borderRadius: '6px',
    background: '#f8f9fa',
  },
  socialPlatform: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#1a1a1a',
    margin: 0,
  },
  socialHandle: {
    fontSize: '12px',
    color: '#0E7BB5',
    margin: 0,
  },
  campusSection: {
    padding: '80px 24px',
    background: '#fff',
  },
  sectionTag: {
    color: '#0E7BB5',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: '8px',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 'clamp(24px, 3vw, 36px)',
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: '12px',
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
  campusGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '16px',
  },
  campusCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '8px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    transition: 'box-shadow 0.2s',
  },
  campusHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
  },
  campusName: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#1a1a1a',
    margin: '0 0 4px',
  },
  campusTypeBadge: {
    fontSize: '10px',
    fontWeight: '700',
    padding: '2px 8px',
    borderRadius: '20px',
    display: 'inline-block',
    letterSpacing: '0.3px',
  },
  campusDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  campusDetailRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '6px',
  },
  campusAddress: {
    fontSize: '12px',
    color: '#666',
    lineHeight: '1.4',
  },
  campusRole: {
    fontSize: '12px',
    color: '#888',
    fontStyle: 'italic',
  },
  campusWalkIn: {
    fontSize: '11px',
    fontWeight: '600',
    color: '#2ecc71',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  importantSection: {
    padding: '80px 24px',
    background: '#f8f9fa',
  },
  importantGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px',
    marginTop: '40px',
  },
  importantCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderTop: '4px solid #0E7BB5',
    borderRadius: '10px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  importantTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#1a1a1a',
  },
  importantNumber: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#e74c3c',
    letterSpacing: '1px',
  },
  importantLink: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#0E7BB5',
    textDecoration: 'none',
  },
  importantNote: {
    fontSize: '13px',
    color: '#666',
    lineHeight: '1.6',
  },
}