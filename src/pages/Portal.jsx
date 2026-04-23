import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, User, Lock, AlertTriangle, Shield, LogIn } from 'lucide-react'
import { assets, mockLogin } from '../services/api'

// Import local background image
import phuthaditjhaba from '../assets/campuses/phuthaditjhaba.png'

export default function Portal() {
  const [activeTab, setActiveTab] = useState('student')
  const [showPass, setShowPass] = useState(false)
  const [form, setForm] = useState({ username: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const result = await mockLogin(form.username, form.password, activeTab)
      setError(result.message)
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const tabs = [
    { id: 'student', label: 'Student' },
    { id: 'staff', label: 'Staff' },
    { id: 'lecturer', label: 'Lecturer' },
  ]

  return (
    <main style={styles.page}>
      {/* Left Panel */}
      <div style={styles.leftPanel}>
        <div style={styles.leftOverlay} />
        <div style={styles.leftContent}>
          <img src={assets.logoWhiteBg} alt="Maluti TVET College" style={styles.panelLogo} />
          <h2 style={styles.panelTitle}>Student & Staff Portal</h2>
          <p style={styles.panelDesc}>
            Access your academic records, examination results, NSFAS funding status,
            proof of registration, and more through the Maluti TVET iEnabler system.
          </p>
          <div style={styles.features}>
            {[
              'Academic results and transcripts',
              'NSFAS funding status and updates',
              'Proof of registration download',
              'Class attendance records',
              'Examination timetables',
              'Financial statements',
            ].map((f, i) => (
              <div key={i} style={styles.feature}>
                <div style={styles.featureDot} />
                <span style={styles.featureText}>{f}</span>
              </div>
            ))}
          </div>
          <div style={styles.archieBox}>
            <p style={styles.archieTitle}>Archie Mobile-Maths Support</p>
            <p style={styles.archieDesc}>
              Students have access to the Archie Mobile mathematics e-learning platform.
              Activation codes are issued upon registration.
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div style={styles.rightPanel}>
        <div style={styles.formCard}>
          <img src={assets.logoWhiteBg} alt="Maluti TVET College" style={styles.mobileLogo} />

          <div style={styles.formHeader}>
            <div style={styles.formIconWrap}>
              <LogIn size={22} color="#0E7BB5" />
            </div>
            <h1 style={styles.formTitle}>Sign In</h1>
            <p style={styles.formSubtitle}>Access your Maluti TVET portal</p>
          </div>

          <div style={styles.tabRow}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                type="button"
                style={{
                  ...styles.tab,
                  background: activeTab === tab.id ? '#0E7BB5' : 'transparent',
                  color: activeTab === tab.id ? '#fff' : '#666',
                }}
                onClick={() => {
                  setActiveTab(tab.id)
                  setError('')
                  setForm({ username: '', password: '' })
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>
                {activeTab === 'student' ? 'Student Number' : activeTab === 'staff' ? 'Staff ID' : 'Lecturer ID'}
              </label>
              <div style={styles.inputWrap}>
                <User size={16} color="#999" style={styles.inputIcon} />
                <input
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder={activeTab === 'student' ? 'Enter your student number' : 'Enter your ID'}
                  required
                  autoComplete="username"
                />
              </div>
            </div>

            <div style={styles.fieldGroup}>
              <div style={styles.labelRow}>
                <label style={styles.label}>Password</label>
                <a href="https://www.malutitvet.co.za" target="_blank" rel="noreferrer" style={styles.forgotLink}>
                  Forgot password?
                </a>
              </div>
              <div style={styles.inputWrap}>
                <Lock size={16} color="#999" style={styles.inputIcon} />
                <input
                  name="password"
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Enter your password"
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  style={styles.eyeBtn}
                  aria-label="Toggle password visibility"
                >
                  {showPass ? <EyeOff size={16} color="#999" /> : <Eye size={16} color="#999" />}
                </button>
              </div>
            </div>

            {error && (
              <div style={styles.errorBox}>
                <AlertTriangle size={16} color="#e74c3c" style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={styles.errorText}>{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                ...styles.submitBtn,
                opacity: loading ? 0.7 : 1,
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? 'Signing in...' : 'Sign In to Portal'}
            </button>

            <a href="https://www.malutitvet.co.za"
              target="_blank"
              rel="noreferrer"
              style={styles.officialBtn}
            >
              Access Official iEnabler Portal
            </a>
          </form>

          <div style={styles.securityNotice}>
            <Shield size={14} color="#0E7BB5" style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={styles.securityText}>
              This portal is secured. Never share your password. If you suspect
              unauthorised access, contact your campus immediately.
            </p>
          </div>

          <div style={styles.navLinks}>
            <Link to="/admissions" style={styles.navLink}>Apply for 2026</Link>
            <span style={styles.navDivider}>·</span>
            <Link to="/contact" style={styles.navLink}>Contact Support</Link>
            <span style={styles.navDivider}>·</span>
            <Link to="/" style={styles.navLink}>Back to Home</Link>
          </div>

          <div style={styles.fraudNotice}>
            <AlertTriangle size={13} color="#e74c3c" style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={styles.fraudText}>
              Cashless campus policy in effect. Do not pay cash to any staff member.
              Fraud Hotline: <strong>0800 333 178</strong>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

const styles = {
  page: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    minHeight: '100vh',
  },
  leftPanel: {
    position: 'relative',
    backgroundImage: `url(${phuthaditjhaba})`, // Updated to use local asset
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  leftOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(14,123,181,0.96) 0%, rgba(0,0,0,0.8) 100%)',
  },
  leftContent: {
    position: 'relative',
    zIndex: 1,
    padding: '64px 48px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  panelLogo: {
    height: '64px',
    width: 'auto',
    objectFit: 'contain',
    objectPosition: 'left',
    borderRadius: '6px',
    marginBottom: '8px',
    background: '#fff',
    padding: '6px 10px',
    alignSelf: 'flex-start',
  },
  panelTitle: {
    fontSize: '28px',
    fontWeight: 800,
    color: '#fff',
    lineHeight: 1.2,
    letterSpacing: '-0.5px',
  },
  panelDesc: {
    fontSize: '15px',
    color: 'rgba(255,255,255,0.82)',
    lineHeight: 1.8,
  },
  features: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '4px',
  },
  feature: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  featureDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#FFB800',
    flexShrink: 0,
  },
  featureText: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.85)',
  },
  archieBox: {
    background: 'rgba(255,184,0,0.15)',
    border: '1px solid rgba(255,184,0,0.3)',
    borderRadius: '8px',
    padding: '16px',
    marginTop: '8px',
  },
  archieTitle: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#FFB800',
    marginBottom: '4px',
  },
  archieDesc: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.75)',
    lineHeight: 1.6,
  },
  rightPanel: {
    background: '#f8f9fa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '48px 24px',
  },
  formCard: {
    background: '#fff',
    borderRadius: '16px',
    padding: '40px 36px',
    width: '100%',
    maxWidth: '440px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
    border: '1px solid #e8e8e8',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  mobileLogo: {
    height: '48px',
    width: 'auto',
    objectFit: 'contain',
    borderRadius: '4px',
    display: 'none',
    alignSelf: 'center',
  },
  formHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '8px',
  },
  formIconWrap: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    background: '#e8f4fc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4px',
  },
  formTitle: {
    fontSize: '26px',
    fontWeight: 800,
    color: '#1a1a1a',
    letterSpacing: '-0.5px',
  },
  formSubtitle: {
    fontSize: '14px',
    color: '#888',
  },
  tabRow: {
    display: 'flex',
    gap: '0',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
    marginTop: '8px',
  },
  tab: {
    flex: 1,
    padding: '10px 12px',
    border: 'none',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.15s',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#444',
  },
  labelRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgotLink: {
    fontSize: '12px',
    color: '#0E7BB5',
    textDecoration: 'none',
    fontWeight: 500,
  },
  inputWrap: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  inputIcon: {
    position: 'absolute',
    left: '12px',
    pointerEvents: 'none',
  },
  input: {
    width: '100%',
    padding: '11px 40px 11px 36px',
    borderRadius: '8px',
    border: '1.5px solid #e0e0e0',
    fontSize: '14px',
    outline: 'none',
    color: '#1a1a1a',
    background: '#fafafa',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  },
  eyeBtn: {
    position: 'absolute',
    right: '12px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    padding: '0',
  },
  errorBox: {
    background: '#fff5f5',
    border: '1px solid #fcc',
    borderRadius: '8px',
    padding: '12px 14px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
  },
  errorText: {
    fontSize: '13px',
    color: '#c0392b',
    lineHeight: 1.5,
    margin: 0,
  },
  submitBtn: {
    background: '#0E7BB5',
    color: '#fff',
    border: 'none',
    padding: '13px',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: 700,
    width: '100%',
    transition: 'opacity 0.2s',
  },
  officialBtn: {
    display: 'block',
    textAlign: 'center',
    padding: '11px',
    borderRadius: '8px',
    border: '1.5px solid #0E7BB5',
    color: '#0E7BB5',
    fontSize: '14px',
    fontWeight: 600,
    textDecoration: 'none',
    background: 'transparent',
  },
  securityNotice: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    background: '#e8f4fc',
    borderRadius: '8px',
    padding: '12px',
  },
  securityText: {
    fontSize: '12px',
    color: '#555',
    lineHeight: 1.5,
    margin: 0,
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  navLink: {
    fontSize: '12px',
    color: '#0E7BB5',
    textDecoration: 'none',
    fontWeight: 500,
  },
  navDivider: {
    color: '#ccc',
    fontSize: '12px',
  },
  fraudNotice: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    background: '#fff5f5',
    borderRadius: '6px',
    padding: '10px 12px',
    borderLeft: '3px solid #e74c3c',
  },
  fraudText: {
    fontSize: '12px',
    color: '#666',
    lineHeight: 1.5,
    margin: 0,
  },
}