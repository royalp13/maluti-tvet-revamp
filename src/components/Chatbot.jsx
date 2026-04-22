import { useState, useRef, useEffect } from 'react'

const responses = [
  {
    keywords: ['programme', 'course', 'study', 'offer', 'qualification', 'ncv', 'nated', 'n1', 'n2', 'n3'],
    answer: `We offer two main qualification types:\n\nNATED (Report 191) N1-N6:\n- Engineering Studies (Electrical, Civil, Mechanical, Fitting & Turning)\n- Business Studies (Management Assistant, Financial Management, Human Resource Management)\n- Utility Studies\n\nNC(V) Level 2-4:\n- Information Technology\n- Education & Development\n- Hospitality & Tourism\n- Agriculture\n- Engineering & Related Design\n\nVisit our Programmes page for full details.`
  },
  {
    keywords: ['apply', 'application', 'register', 'enrol', 'enroll', 'how do i'],
    answer: `To apply for 2026:\n\n1. Visit malutitvet.co.za to apply online, OR\n2. Visit any of our 8 campuses in person\n\nDocuments you will need:\n- Certified copy of your ID\n- Certified copy of your latest academic results\n- Proof of residence\n\nMost programmes require Grade 9 or higher. Applications opened 1 September 2025.`
  },
  {
    keywords: ['nsfas', 'funding', 'bursary', 'financial', 'money', 'fees', 'afford', 'cost'],
    answer: `Yes, NSFAS funding is available at Maluti TVET College.\n\nNSFAS can cover:\n- Tuition fees\n- Living allowance\n- Transport allowance (where applicable)\n\nTo apply for NSFAS:\n1. Go to nsfas.org.za\n2. Create a myNSFAS account\n3. Complete the online application\n\nYou must be a South African citizen and meet the household income threshold. Apply as early as possible - funding is not guaranteed if you apply late.`
  },
  {
    keywords: ['campus', 'location', 'where', 'address', 'branch', 'site'],
    answer: `Maluti TVET College has 8 campuses across the Free State:\n\n1. Main Campus - Phuthaditjhaba\n2. Bethlehem Campus - Bethlehem\n3. Harrismith Campus - Harrismith\n4. Bonamelo Campus - Phuthaditjhaba\n5. Itemoheleng Campus - Phuthaditjhaba\n6. Kwetlisong Campus - Riverside\n7. Lere la Tshepe Campus - Tseki Village\n8. Sefikeng Campus - Phuthaditjhaba\n\nVisit any campus for face-to-face assistance.`
  },
  {
    keywords: ['requirement', 'qualify', 'need', 'matric', 'grade', 'abet', 'nqf'],
    answer: `Entry requirements vary by programme:\n\n- Most programmes: Grade 9 certificate or higher\n- Some programmes: NQF Level 1 or ABET Level 4\n- N4 and above (NATED): Matric (Grade 12) or N3 certificate required\n\nContact your nearest campus or visit malutitvet.co.za to check the specific requirements for the programme you are interested in.`
  },
  {
    keywords: ['contact', 'phone', 'email', 'call', 'reach', 'talk', 'speak'],
    answer: `You can reach Maluti TVET College through:\n\n- Website: malutitvet.co.za\n- Visit any of our 8 campuses directly for face-to-face assistance\n- Corporate Office: Bethlehem, Free State\n- Central Office: Phuthaditjhaba, Free State\n\nFor exam queries, contact your Campus Examination Officer directly.`
  },
  {
    keywords: ['engineering', 'electrical', 'mechanical', 'civil', 'fitting'],
    answer: `Engineering Studies at Maluti TVET College:\n\nOffered under NATED (Report 191) from N1 to N6 level.\n\nSpecialisations include:\n- Electrical Engineering\n- Civil Engineering\n- Mechanical Engineering\n- Fitting & Turning\n\nAvailable at: Harrismith, Bethlehem, and Main Campus.\n\nN4 entry requires a Matric certificate. N1-N3 requires Grade 9 or higher.`
  },
  {
    keywords: ['business', 'management', 'finance', 'accounting', 'hr', 'human resource'],
    answer: `Business Studies at Maluti TVET College:\n\nOffered under NATED (Report 191) from N4 to N6 level.\n\nProgrammes include:\n- Management Assistant\n- Financial Management\n- Human Resource Management\n\nEntry requirement: Matric (Grade 12) certificate.\n\nAvailable across multiple campuses. Visit malutitvet.co.za for campus-specific availability.`
  },
  {
    keywords: ['it', 'information technology', 'computer', 'software', 'network'],
    answer: `Information Technology at Maluti TVET College:\n\nOffered as NC(V) Level 2, 3, and 4.\n\nYou will learn:\n- Computer hardware and software\n- Networking fundamentals\n- Systems support\n- Programming basics\n\nEntry requirement: Grade 9 or higher.\nAvailable at Itemoheleng Campus and others. Contact the college for current availability.`
  },
  {
    keywords: ['about', 'history', 'established', 'founded', 'accredit', 'umalusi', 'dhet'],
    answer: `About Maluti TVET College:\n\nFounded: 1 September 2002\nType: Public TVET College\nLocation: North Eastern Free State\nCorporate Office: Bethlehem\nCentral Office: Phuthaditjhaba\n\nThe college is:\n- Accredited by Umalusi\n- Registered with multiple SETAs\n- Operating under the Department of Higher Education and Training (DHET)\n\nMission: To offer excellence, creativity, and quality education that encourages entrepreneurship and employability.`
  },
  {
    keywords: ['graduation', 'graduate', 'ceremony', 'certificate', 'complete', 'finish'],
    answer: `For graduation enquiries:\n\n- Contact your Campus Examination Officer directly\n- Graduation registration deadlines are announced on the college website\n- Bring your student number and ID when visiting the campus\n\nVisit malutitvet.co.za or your nearest campus for the latest graduation dates and registration requirements.`
  },
  {
    keywords: ['accommodation', 'hostel', 'residence', 'stay', 'live'],
    answer: `For information on accommodation and student residences:\n\nContact the Student Affairs Office at your nearest campus. They can advise on:\n- On-campus accommodation availability\n- Off-campus options near each campus\n- Application processes for residence\n\nVisit malutitvet.co.za or your nearest campus for details.`
  },
]

const fallback = `I am not sure about that specific question. For the most accurate information, please:\n\n- Visit malutitvet.co.za\n- Contact your nearest campus directly\n- Visit the campus in person for face-to-face assistance\n\nIs there anything else I can help you with?`

function getResponse(input) {
  const lower = input.toLowerCase()
  for (const r of responses) {
    if (r.keywords.some(k => lower.includes(k))) {
      return r.answer
    }
  }
  return fallback
}

const suggestions = [
  'How do I apply?',
  'What programmes do you offer?',
  'Is NSFAS available?',
  'Where are your campuses?',
]

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I am the Maluti TVET College student assistant. Ask me about our programmes, campuses, admissions, or NSFAS funding.'
    }
  ])
  const [input, setInput] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(true)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  function send(text) {
    const msg = (text || input).trim()
    if (!msg) return
    setInput('')
    setShowSuggestions(false)

    const userMsg = { role: 'user', content: msg }
    const reply = { role: 'assistant', content: getResponse(msg) }
    setMessages(prev => [...prev, userMsg, reply])
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={styles.fab}
        aria-label="Open college assistant"
      >
        {open ? '✕' : '💬'}
      </button>

      {open && (
        <div style={styles.window}>
          <div style={styles.header}>
            <div style={styles.headerLeft}>
              <div style={styles.avatar}>M</div>
              <div>
                <p style={styles.headerName}>Maluti Assistant</p>
                <p style={styles.headerStatus}>Online</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={styles.closeBtn}>✕</button>
          </div>

          <div style={styles.messages}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                ...styles.bubble,
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                background: msg.role === 'user' ? '#0E7BB5' : '#f1f3f5',
                color: msg.role === 'user' ? '#fff' : '#1a1a1a',
                borderRadius: msg.role === 'user'
                  ? '18px 18px 4px 18px'
                  : '18px 18px 18px 4px',
                whiteSpace: 'pre-line',
              }}>
                {msg.content}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {showSuggestions && (
            <div style={styles.suggestions}>
              {suggestions.map((q, i) => (
                <button
                  key={i}
                  style={styles.suggestion}
                  onClick={() => send(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <div style={styles.inputRow}>
            <input
              style={styles.input}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type your question..."
            />
            <button
              style={{
                ...styles.sendBtn,
                background: input.trim() ? '#0E7BB5' : '#ccc',
                cursor: input.trim() ? 'pointer' : 'default',
              }}
              onClick={() => send()}
              disabled={!input.trim()}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  )
}

const styles = {
  fab: {
    position: 'fixed',
    bottom: '28px',
    right: '28px',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    background: '#0E7BB5',
    color: '#fff',
    fontSize: '22px',
    border: 'none',
    cursor: 'pointer',
    zIndex: 9999,
    boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  window: {
    position: 'fixed',
    bottom: '96px',
    right: '28px',
    width: '360px',
    height: '520px',
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
    zIndex: 9998,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  header: {
    background: '#0E7BB5',
    padding: '14px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  avatar: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: '#FFB800',
    color: '#000',
    fontWeight: '700',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerName: {
    color: '#fff',
    fontSize: '14px',
    fontWeight: '600',
    margin: 0,
  },
  headerStatus: {
    color: '#90ee90',
    fontSize: '11px',
    margin: 0,
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    padding: '4px',
  },
  messages: {
    flex: 1,
    overflowY: 'auto',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  bubble: {
    maxWidth: '82%',
    padding: '10px 14px',
    fontSize: '14px',
    lineHeight: '1.6',
    wordBreak: 'break-word',
  },
  suggestions: {
    padding: '8px 12px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    borderTop: '1px solid #f0f0f0',
  },
  suggestion: {
    background: '#e8f4fc',
    color: '#0E7BB5',
    border: '1px solid #cce4f5',
    borderRadius: '20px',
    padding: '6px 12px',
    fontSize: '12px',
    fontWeight: '500',
    cursor: 'pointer',
    outline: 'none',
  },
  inputRow: {
    display: 'flex',
    gap: '8px',
    padding: '12px',
    borderTop: '1px solid #f0f0f0',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: '10px 14px',
    borderRadius: '24px',
    border: '1.5px solid #e0e0e0',
    fontSize: '14px',
    outline: 'none',
    background: '#f8f9fa',
  },
  sendBtn: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    border: 'none',
    color: '#fff',
    fontSize: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}