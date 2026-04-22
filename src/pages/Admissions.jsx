import { useState } from 'react'
import { Link } from 'react-router-dom'

const steps = [
  {
    num: '01',
    title: 'Career Guidance & Orientation',
    desc: 'All prospective students must complete a career guidance session before applying. Register as a "First Time Here" applicant on the student portal to access the pre-entry screening and career orientation module. This step is compulsory under DHET policy.',
    note: 'You cannot skip this step. Applications submitted without completing career guidance will not be processed.',
    color: '#e8f4fc',
    textColor: '#0E7BB5',
  },
  {
    num: '02',
    title: 'Placement Assessment',
    desc: 'Complete a literacy and numeracy placement test. This assessment determines the most suitable programme and level for your academic profile. Results are used to provide academic counselling - you retain the right to choose your preferred programme, but you must sign a formal acknowledgement if deviating from the recommendation.',
    note: 'The placement test is strictly compulsory and forms the basis of your academic counselling.',
    color: '#FFB800',
    textColor: '#000',
  },
  {
    num: '03',
    title: 'Formal Application & Document Submission',
    desc: 'Submit your formal application online at malutitvet.co.za or in person at your nearest campus. Upload certified copies of all required documents in PDF format. Incomplete applications will not be considered.',
    note: 'Applications outside the designated window will be rejected. 2026 applications opened 1 September 2025.',
    color: '#0E7BB5',
    textColor: '#fff',
  },
]

const documents = [
  { doc: 'Certified copy of Identity Document (ID)', required: true, note: 'Must be certified within 3 months of application' },
  { doc: 'Certified copy of latest academic results', required: true, note: 'Grade 12 certificate, latest school report, or NCV Level 4 certificate' },
  { doc: 'Proof of residence', required: true, note: 'Not older than 3 months - utility bill, affidavit, or lease agreement' },
  { doc: 'Certified copy of parent/guardian ID', required: false, note: 'Required for NSFAS applications and students under 18' },
  { doc: 'Proof of household income', required: false, note: 'Required for NSFAS - payslips, SASSA letter, or sworn affidavit if unemployed' },
  { doc: 'Previous qualification certificates', required: false, note: 'Required for N4–N6 NATED programmes' },
]

const requirements = [
  { prog: 'NC(V) Level 2', req: 'Grade 9 pass or NQF Level 1 or ABET Level 4', note: 'No Matric required' },
  { prog: 'NATED N1–N3 (Engineering)', req: 'Grade 9 minimum - Grade 12 with Mathematics & Physical Science preferred', note: 'Mathematical Literacy is NOT accepted for engineering pathways' },
  { prog: 'NATED N4–N6 (Business & Utility)', req: 'Matric (Grade 12) or NC(V) Level 4', note: 'Preference given to applicants scoring 26+ on admission instrument' },
  { prog: 'NATED N4–N6 (Engineering)', req: 'Matric with Mathematics & Physical Science OR NC(V) L4 in related field', note: 'Mathematical Literacy is NOT accepted' },
  { prog: 'NC(V) Level 3 & 4 (progression)', req: 'Pass all 7 subjects at current NC(V) level', note: 'All 4 vocational subjects at 50% minimum; all 3 fundamentals must be passed' },
]

const nsfasAllowances = [
  { type: 'Urban Accommodation', amount: 'R24,000', period: 'per annum', desc: 'Students residing in urban areas near campus' },
  { type: 'Peri-Urban Accommodation', amount: 'R18,900', period: 'per annum', desc: 'Students in peri-urban or township areas' },
  { type: 'Rural Accommodation', amount: 'R15,750', period: 'per annum', desc: 'Students in rural and outlying areas' },
  { type: 'Transport Allowance', amount: 'Applicable', period: 'where qualifying', desc: 'Where on-campus accommodation is not available' },
  { type: 'Incidental Allowance', amount: 'Applicable', period: 'personal care', desc: 'Personal care and study-related incidentals' },
  { type: 'Tuition Fees', amount: 'Covered', period: 'full tuition', desc: 'Direct payment to the college on behalf of qualifying students' },
]

const campuses = [
  { name: 'Main Campus', town: 'Phuthaditjhaba', address: 'Mampoi Street, Phuthaditjhaba', specialisation: 'Business, Tourism & Hospitality' },
  { name: 'Bethlehem Campus', town: 'Bethlehem', address: 'Bethlehem, Free State', specialisation: 'Engineering & Business Studies' },
  { name: 'Harrismith Campus', town: 'Harrismith', address: 'Harrismith, Free State', specialisation: 'Engineering, Civil & Freight Logistics' },
  { name: 'Bonamelo Campus', town: 'Phuthaditjhaba', address: 'Phuthaditjhaba, Free State', specialisation: 'Education & Early Childhood Development' },
  { name: 'Itemoheleng Campus', town: 'Phuthaditjhaba', address: 'Phuthaditjhaba, Free State', specialisation: 'Business Management & IT' },
  { name: 'Kwetlisong Campus', town: 'Riverside', address: 'Riverside, Free State', specialisation: 'Technical Trades & Skills Academy' },
  { name: 'Lere la Tshepe Campus', town: 'Tseki Village', address: 'Tseki Village, Free State', specialisation: 'Agriculture & Rural Learning' },
  { name: 'Sefikeng Campus', town: 'Rosedale', address: 'Rosedale, Free State', specialisation: 'Vocational Skills & Business Support' },
]

export default function Admissions() {
  const [activeTab, setActiveTab] = useState('apply')

  return (
    <main>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <p style={styles.heroTag}>Admissions 2026</p>
          <h1 style={styles.heroTitle}>Start Your Application</h1>
          <p style={styles.heroSub}>
            Applications for the 2026 academic year are open. Follow the three-step
            admissions process below and take the first step toward your qualification.
          </p>
          <div style={styles.heroBtns}>
            <a href="https://www.malutitvet.co.za" target="_blank" rel="noreferrer" style={styles.btnPrimary}>
              Apply Online at malutitvet.co.za
            </a>
            <button
              style={styles.btnSecondary}
              onClick={() => document.getElementById('steps').scrollIntoView({ behavior: 'smooth' })}
            >
              How to Apply
            </button>
          </div>
          <div style={styles.heroNotice}>
            Applications for 2026 opened 1 September 2025. Apply at your nearest campus or online.
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section style={styles.tabNav}>
        <div style={styles.container}>
          <div style={styles.tabs}>
            {[
              { id: 'apply', label: 'How to Apply' },
              { id: 'requirements', label: 'Entry Requirements' },
              { id: 'documents', label: 'Required Documents' },
              { id: 'nsfas', label: 'NSFAS Funding' },
              { id: 'campuses', label: 'Walk-In Campuses' },
            ].map(tab => (
              <button
                key={tab.id}
                style={{
                  ...styles.tab,
                  borderBottom: activeTab === tab.id ? '3px solid #0E7BB5' : '3px solid transparent',
                  color: activeTab === tab.id ? '#0E7BB5' : '#666',
                  fontWeight: activeTab === tab.id ? '700' : '400',
                }}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section style={styles.tabContent}>
        <div style={styles.container}>

          {/* HOW TO APPLY */}
          {activeTab === 'apply' && (
            <div id="steps">
              <h2 style={styles.sectionTitle}>The 3-Step Admissions Process</h2>
              <p style={styles.sectionSub}>
                Maluti TVET College follows a structured, DHET-mandated admissions workflow.
                All three steps are compulsory and must be completed in order.
              </p>
              <div style={styles.stepsGrid}>
                {steps.map((step, i) => (
                  <div key={i} style={{ ...styles.stepCard, background: step.color }}>
                    <span style={{ ...styles.stepNum, color: step.textColor }}>{step.num}</span>
                    <h3 style={{ ...styles.stepTitle, color: step.textColor }}>{step.title}</h3>
                    <p style={{ ...styles.stepDesc, color: step.color === '#0E7BB5' ? 'rgba(255,255,255,0.88)' : '#444' }}>
                      {step.desc}
                    </p>
                    <div style={{
                      ...styles.stepNote,
                      background: step.color === '#0E7BB5' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.07)',
                      color: step.color === '#0E7BB5' ? '#fff' : '#333',
                    }}>
                      {step.note}
                    </div>
                  </div>
                ))}
              </div>

              <div style={styles.importantBox}>
                <h3 style={styles.importantTitle}>Important Application Rules</h3>
                <ul style={styles.importantList}>
                  <li>Applications submitted outside the designated application window will not be accepted.</li>
                  <li>Submitting an application does not constitute a guaranteed offer of acceptance.</li>
                  <li>All documents must be certified copies - originals will not be accepted in place of certified copies.</li>
                  <li>Maluti TVET College operates a cashless campus. Do not pay cash to any personnel. All payments must be made via electronic funds transfer (EFT) to official college banking details only.</li>
                  <li>If you deviate from the placement test recommendation, you must sign a formal written acknowledgement.</li>
                  <li>For fraud, corruption or irregularities: contact the Whistle Blower Fraud Hotline on 0800 333 178 (free call, 24/7).</li>
                </ul>
              </div>

              {/* Student Portal Info */}
              <div style={styles.portalBox}>
                <div style={styles.portalLeft}>
                  <h3 style={styles.portalTitle}>Current Student Portal - iEnabler</h3>
                  <p style={styles.portalDesc}>
                    Registered students access academic records, financial statements, proof of registration,
                    class attendance, and NSFAS funding status through the college's iEnabler student portal.
                    Login credentials are issued upon successful registration.
                  </p>
                  <div style={styles.portalFeatures}>
                    {['Academic results', 'Financial statements', 'Proof of registration', 'NSFAS funding status', 'Class attendance records', 'Examination timetables'].map((f, i) => (
                      <span key={i} style={styles.portalFeature}>{f}</span>
                    ))}
                  </div>
                  <a href="https://www.malutitvet.co.za" target="_blank" rel="noreferrer" style={styles.portalBtn}>
                    Access Student Portal
                  </a>
                </div>
                <div style={styles.portalRight}>
                  <h3 style={styles.portalTitle}>Archie Mobile - Maths Support</h3>
                  <p style={styles.portalDesc}>
                    Maluti TVET College provides access to Archie Mobile, a data-efficient
                    e-learning platform tailored for the TVET Mathematics curriculum. Access
                    interactive lessons, practice questions, and study guides directly from
                    your phone. Activation codes are provided upon registration.
                  </p>
                  <a href="https://www.malutitvet.co.za" target="_blank" rel="noreferrer" style={styles.portalBtn}>
                    Learn About Archie
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* ENTRY REQUIREMENTS */}
          {activeTab === 'requirements' && (
            <div>
              <h2 style={styles.sectionTitle}>Entry Requirements by Programme</h2>
              <p style={styles.sectionSub}>
                Requirements vary by programme type and level. Read carefully before applying
                to ensure you qualify for your chosen programme.
              </p>
              <div style={styles.requirementsTable}>
                <div style={styles.tableHeader}>
                  <span style={styles.thCell}>Programme</span>
                  <span style={styles.thCell}>Minimum Requirement</span>
                  <span style={styles.thCell}>Important Note</span>
                </div>
                {requirements.map((r, i) => (
                  <div key={i} style={{ ...styles.tableRow, background: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                    <span style={styles.tdProg}>{r.prog}</span>
                    <span style={styles.tdReq}>{r.req}</span>
                    <span style={styles.tdNote}>{r.note}</span>
                  </div>
                ))}
              </div>

              <div style={styles.pathwayInfo}>
                <h3 style={styles.pathwayTitle}>National Diploma: What You Need to Know</h3>
                <p style={styles.pathwayText}>
                  Completing N6 examinations alone does NOT qualify you for a National Diploma.
                  The diploma requires both the theoretical N6 achievement AND a practical workplace component:
                </p>
                <div style={styles.diplomaSteps}>
                  <div style={styles.diplomaStep}>
                    <span style={styles.diplomaNum}>Step 1</span>
                    <h4 style={styles.diplomaTitle}>Complete N6 Examinations</h4>
                    <p style={styles.diplomaDesc}>Pass all N6 theoretical subjects through DHET examinations in June or November.</p>
                  </div>
                  <div style={styles.diplomaArrow}>→</div>
                  <div style={styles.diplomaStep}>
                    <span style={styles.diplomaNum}>Step 2</span>
                    <h4 style={styles.diplomaTitle}>Obtain QCTO Logbook</h4>
                    <p style={styles.diplomaDesc}>Acquire an approved QCTO logbook from the college to record your practical workplace experience.</p>
                  </div>
                  <div style={styles.diplomaArrow}>→</div>
                  <div style={styles.diplomaStep}>
                    <span style={styles.diplomaNum}>Step 3</span>
                    <h4 style={styles.diplomaTitle}>Complete Practical Experience</h4>
                    <p style={styles.diplomaDesc}>Business Studies: 2,000 hours (18 months). Engineering Studies: 2,670 hours (24 months) of approved workplace experience.</p>
                  </div>
                  <div style={styles.diplomaArrow}>→</div>
                  <div style={styles.diplomaStep}>
                    <span style={styles.diplomaNum}>Step 4</span>
                    <h4 style={styles.diplomaTitle}>Submit Portfolio</h4>
                    <p style={styles.diplomaDesc}>Submit your completed logbook and workplace experience portfolio to the college for National Diploma certification.</p>
                  </div>
                </div>
              </div>

              <div style={styles.ncvPathInfo}>
                <h3 style={styles.ncvTitle}>NC(V) Level 4 - University Pathways</h3>
                <p style={styles.ncvText}>
                  An NC(V) Level 4 certificate is equivalent to Matric on the NQF and can qualify you
                  for university admission, provided you meet the statutory minimum requirements set by
                  the Council for General and Further Education and Training:
                </p>
                <ul style={styles.ncvList}>
                  <li>Pass all 7 subjects across Levels 2, 3, and 4 (21 subjects total)</li>
                  <li>Achieve a minimum of 50% in all 4 vocational subjects - no condonement allowed</li>
                  <li>One fundamental subject may be condoned by a maximum of 5%</li>
                  <li>Specific percentage thresholds apply for Higher Certificate, Diploma, or Bachelor's Degree entry</li>
                </ul>
              </div>
            </div>
          )}

          {/* DOCUMENTS */}
          {activeTab === 'documents' && (
            <div>
              <h2 style={styles.sectionTitle}>Required Documents</h2>
              <p style={styles.sectionSub}>
                All documents must be certified copies. Documents must be certified within 3 months
                of the application date. Do not submit original documents - certified copies only.
              </p>
              <div style={styles.docsGrid}>
                {documents.map((d, i) => (
                  <div key={i} style={styles.docCard}>
                    <div style={styles.docTop}>
                      <span style={{
                        ...styles.docBadge,
                        background: d.required ? '#0E7BB5' : '#f0f0f0',
                        color: d.required ? '#fff' : '#666',
                      }}>
                        {d.required ? 'Required' : 'May be required'}
                      </span>
                    </div>
                    <h3 style={styles.docTitle}>{d.doc}</h3>
                    <p style={styles.docNote}>{d.note}</p>
                  </div>
                ))}
              </div>

              <div style={styles.certBox}>
                <h3 style={styles.certTitle}>How to Certify Documents</h3>
                <p style={styles.certText}>
                  Documents can be certified (stamped and signed as true copies of originals) at:
                </p>
                <div style={styles.certOptions}>
                  {['South African Police Service (SAPS) station', 'Commissioner of Oaths at a bank', 'Nearest Maluti TVET Campus office', 'Registered notary or attorney', 'Post Office with Commissioner of Oaths'].map((o, i) => (
                    <div key={i} style={styles.certOption}>{o}</div>
                  ))}
                </div>
              </div>

              <div style={styles.warningBox}>
                <h3 style={styles.warningTitle}>Cashless Campus Policy</h3>
                <p style={styles.warningText}>
                  Maluti TVET College operates a strict cashless campus environment.
                  Under no circumstances should you hand cash to any college staff member.
                  All payments must be made via Electronic Funds Transfer (EFT) to official
                  college banking details published on the official website only.
                  If you are asked for cash by any person claiming to represent the college,
                  report it immediately to the Fraud Hotline: <strong>0800 333 178</strong> (free call, 24 hours).
                </p>
              </div>
            </div>
          )}

          {/* NSFAS */}
          {activeTab === 'nsfas' && (
            <div>
              <h2 style={styles.sectionTitle}>NSFAS Funding at Maluti TVET College</h2>
              <p style={styles.sectionSub}>
                The National Student Financial Aid Scheme (NSFAS) provides funding to
                qualifying South African students enrolled in NC(V) and NATED programmes
                at public TVET colleges. Do not let financial constraints stop your education.
              </p>

              <div style={styles.nsfasEligibility}>
                <h3 style={styles.nsfasSubTitle}>Who Qualifies?</h3>
                <div style={styles.eligibilityGrid}>
                  {[
                    { title: 'South African Citizen', desc: 'You must be a South African citizen with a valid South African ID document.' },
                    { title: 'Enrolled at Maluti TVET', desc: 'You must be registered for an NC(V) or NATED (Report 191) programme at the college.' },
                    { title: 'Household Income Threshold', desc: 'Combined household income must not exceed R350,000 per annum. This includes all income from parents and guardians.' },
                    { title: 'Financial Need', desc: 'NSFAS prioritises students who demonstrate genuine financial need. Unemployed guardian households must submit sworn affidavits.' },
                  ].map((e, i) => (
                    <div key={i} style={styles.eligibilityCard}>
                      <h4 style={styles.eligibilityTitle}>{e.title}</h4>
                      <p style={styles.eligibilityDesc}>{e.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h3 style={styles.nsfasSubTitle}>What NSFAS Covers</h3>
              <div style={styles.allowancesGrid}>
                {nsfasAllowances.map((a, i) => (
                  <div key={i} style={styles.allowanceCard}>
                    <span style={styles.allowanceAmount}>{a.amount}</span>
                    <span style={styles.allowancePeriod}>{a.period}</span>
                    <h4 style={styles.allowanceType}>{a.type}</h4>
                    <p style={styles.allowanceDesc}>{a.desc}</p>
                  </div>
                ))}
              </div>

              <div style={styles.nsfasSteps}>
                <h3 style={styles.nsfasSubTitle}>How to Apply for NSFAS</h3>
                <div style={styles.nsfasStepsList}>
                  {[
                    { n: '1', t: 'Create a myNSFAS Account', d: 'Go to nsfas.org.za and register with your South African ID number and a valid email address.' },
                    { n: '2', t: 'Complete the Application', d: 'Fill in the online application form. You will need your household income details and supporting documents ready.' },
                    { n: '3', t: 'Upload Documents', d: 'Upload certified copies of your ID, parent/guardian IDs, proof of income or sworn affidavits, and proof of registration at Maluti TVET.' },
                    { n: '4', t: 'Track Your Application', d: 'Log into your myNSFAS portal to track the status of your application. Ensure your contact details are correct as communication is sent digitally.' },
                    { n: '5', t: 'Funding Disbursement', d: 'Approved funding is paid directly to the college for tuition. Allowances are deposited to your registered bank account. Keep your banking details updated on myNSFAS.' },
                  ].map((s, i) => (
                    <div key={i} style={styles.nsfasStepItem}>
                      <div style={styles.nsfasStepNum}>{s.n}</div>
                      <div>
                        <h4 style={styles.nsfasStepTitle}>{s.t}</h4>
                        <p style={styles.nsfasStepDesc}>{s.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={styles.nsfasCTA}>
                  <a href="https://www.nsfas.org.za" target="_blank" rel="noreferrer" style={styles.btnPrimary}>
                    Apply at nsfas.org.za
                  </a>
                </div>
              </div>

              <div style={styles.dhetBursary}>
                <h3 style={styles.nsfasSubTitle}>DHET College Bursary Scheme</h3>
                <p style={styles.pathwayText}>
                  In addition to NSFAS, the Department of Higher Education and Training (DHET) offers
                  bursaries for students enrolled in NC(V) and Report 191 (NATED) programmes. Eligibility
                  criteria mirror NSFAS requirements. Speak to the Financial Aid Office at your nearest
                  campus for details on the DHET bursary application process.
                </p>
              </div>
            </div>
          )}

          {/* CAMPUSES */}
          {activeTab === 'campuses' && (
            <div>
              <h2 style={styles.sectionTitle}>Walk-In Application at Our 8 Campuses</h2>
              <p style={styles.sectionSub}>
                You can apply in person at any of our 8 campuses. Staff are available to assist
                with the application process, document certification verification, and career guidance.
              </p>
              <div style={styles.campusGrid}>
                {campuses.map((c, i) => (
                  <div key={i} style={styles.campusCard}>
                    <div style={styles.campusHeader}>
                      <h3 style={styles.campusName}>{c.name}</h3>
                      <span style={styles.campusTownBadge}>{c.town}</span>
                    </div>
                    <p style={styles.campusAddress}>{c.address}</p>
                    <p style={styles.campusSpec}>{c.specialisation}</p>
                    <div style={styles.campusAction}>
                      <span style={styles.campusWalkIn}>Walk-in applications accepted</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={styles.contactNote}>
                <p style={styles.contactNoteText}>
                  For the most current campus contact numbers and office hours, visit
                  <a href="https://www.malutitvet.co.za" target="_blank" rel="noreferrer" style={styles.contactLink}> malutitvet.co.za</a>
                  &nbsp;or call your nearest campus directly.
                  For fraud or corruption concerns, call the 24-hour Whistle Blower Hotline:
                  <strong> 0800 333 178</strong> (free call).
                </p>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* WIL Section */}
      <section style={styles.wilSection}>
        <div style={styles.wilOverlay} />
        <div style={styles.container} style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={styles.wilContent}>
            <div style={styles.wilText}>
              <p style={styles.wilTag}>For Employers & Industry</p>
              <h2 style={styles.wilTitle}>Work-Integrated Learning (WIL)</h2>
              <p style={styles.wilDesc}>
                Maluti TVET College actively partners with businesses and organisations
                to provide students with Workplace Based Experience (WBE). Hosting a
                TVET student is more than a social contribution - companies can access
                PIVOTAL grants and SETA funding mechanisms to offset the costs of
                hosting interns and apprentices while building a pipeline of
                industry-ready talent tailored to their operational needs.
              </p>
              <ul style={styles.wilBenefits}>
                <li>Access PIVOTAL grants and SETA funding for hosting interns</li>
                <li>Shape graduate skills to match your operational requirements</li>
                <li>Fulfil B-BBEE skills development scorecards</li>
                <li>Build a talent pipeline of job-ready TVET graduates</li>
                <li>Contribute to national skills development and youth employment</li>
              </ul>
              <a href="https://www.malutitvet.co.za" target="_blank" rel="noreferrer" style={styles.wilBtn}>
                Register as a Host Employer
              </a>
            </div>
            <div style={styles.wilStats}>
              {[
                { n: '8', l: 'Campuses with WIL Programmes' },
                { n: '2,000+', l: 'Hours - Business Practical' },
                { n: '2,670+', l: 'Hours - Engineering Practical' },
                { n: 'SETA', l: 'Funding Available for Hosts' },
              ].map((s, i) => (
                <div key={i} style={styles.wilStat}>
                  <span style={styles.wilStatNum}>{s.n}</span>
                  <span style={styles.wilStatLabel}>{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <div style={styles.ctaInner}>
          <h2 style={styles.ctaTitle}>Ready to Apply?</h2>
          <p style={styles.ctaSub}>
            Apply online at malutitvet.co.za or walk into any of our 8 campuses across the Free State.
            2026 applications opened 1 September 2025.
          </p>
          <div style={styles.ctaBtns}>
            <a href="https://www.malutitvet.co.za" target="_blank" rel="noreferrer" style={styles.btnPrimary}
              onMouseEnter={e => e.currentTarget.style.background = '#e6a600'}
              onMouseLeave={e => e.currentTarget.style.background = '#FFB800'}
            >Apply Online Now</a>
            <Link to="/programmes" style={styles.btnOutline}>Browse Programmes</Link>
          </div>
        </div>
      </section>

    </main>
  )
}

const styles = {
  hero: {
    position: 'relative',
    backgroundImage: 'url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '460px',
    display: 'flex',
    alignItems: 'center',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(14,123,181,0.93) 0%, rgba(0,0,0,0.72) 100%)',
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
  heroBtns: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    marginBottom: '24px',
  },
  btnPrimary: {
    background: '#FFB800',
    color: '#000',
    textDecoration: 'none',
    padding: '14px 32px',
    borderRadius: '6px',
    fontSize: '15px',
    fontWeight: '700',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  btnSecondary: {
    background: 'transparent',
    color: '#fff',
    textDecoration: 'none',
    padding: '14px 32px',
    borderRadius: '6px',
    fontSize: '15px',
    fontWeight: '600',
    border: '2px solid rgba(255,255,255,0.5)',
    cursor: 'pointer',
  },
  heroNotice: {
    background: 'rgba(255,184,0,0.2)',
    border: '1px solid rgba(255,184,0,0.5)',
    borderRadius: '6px',
    padding: '12px 16px',
    color: '#FFB800',
    fontSize: '14px',
    fontWeight: '500',
    maxWidth: '520px',
  },
  tabNav: {
    background: '#fff',
    borderBottom: '1px solid #e8e8e8',
    position: 'sticky',
    top: '88px',
    zIndex: 100,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  },
  tabs: {
    display: 'flex',
    overflowX: 'auto',
    gap: '0',
  },
  tab: {
    padding: '18px 24px',
    background: 'none',
    border: 'none',
    fontSize: '14px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all 0.15s',
  },
  tabContent: {
    padding: '56px 24px 80px',
    background: '#f8f9fa',
  },
  sectionTitle: {
    fontSize: 'clamp(24px, 3vw, 36px)',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '12px',
    letterSpacing: '-0.5px',
  },
  sectionSub: {
    color: '#666',
    fontSize: '16px',
    lineHeight: '1.8',
    maxWidth: '680px',
    marginBottom: '40px',
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '48px',
  },
  stepCard: {
    borderRadius: '10px',
    padding: '32px 28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  stepNum: {
    fontSize: '48px',
    fontWeight: '800',
    lineHeight: '1',
    opacity: 0.4,
  },
  stepTitle: {
    fontSize: '20px',
    fontWeight: '700',
  },
  stepDesc: {
    fontSize: '14px',
    lineHeight: '1.8',
    flex: 1,
  },
  stepNote: {
    padding: '12px 14px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '500',
    lineHeight: '1.5',
  },
  importantBox: {
    background: '#fff',
    border: '1.5px solid #e8e8e8',
    borderLeft: '4px solid #e74c3c',
    borderRadius: '8px',
    padding: '28px',
    marginBottom: '32px',
  },
  importantTitle: {
    fontSize: '17px',
    fontWeight: '700',
    color: '#c0392b',
    marginBottom: '16px',
  },
  importantList: {
    paddingLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  portalBox: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginTop: '32px',
  },
  portalLeft: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderTop: '4px solid #0E7BB5',
    borderRadius: '8px',
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  portalRight: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderTop: '4px solid #FFB800',
    borderRadius: '8px',
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  portalTitle: {
    fontSize: '17px',
    fontWeight: '700',
    color: '#1a1a1a',
  },
  portalDesc: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.7',
    flex: 1,
  },
  portalFeatures: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
  },
  portalFeature: {
    background: '#e8f4fc',
    color: '#0E7BB5',
    fontSize: '12px',
    padding: '4px 10px',
    borderRadius: '20px',
    fontWeight: '500',
  },
  portalBtn: {
    background: '#0E7BB5',
    color: '#fff',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '600',
    display: 'inline-block',
    marginTop: '4px',
  },
  requirementsTable: {
    background: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '1px solid #e8e8e8',
    marginBottom: '40px',
  },
  tableHeader: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr 1.5fr',
    background: '#0E7BB5',
    padding: '14px 20px',
    gap: '16px',
  },
  thCell: {
    color: '#fff',
    fontSize: '12px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  tableRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr 1.5fr',
    padding: '16px 20px',
    gap: '16px',
    borderBottom: '1px solid #f0f0f0',
  },
  tdProg: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#0E7BB5',
  },
  tdReq: {
    fontSize: '14px',
    color: '#333',
    lineHeight: '1.5',
  },
  tdNote: {
    fontSize: '13px',
    color: '#e74c3c',
    fontStyle: 'italic',
    lineHeight: '1.5',
  },
  pathwayInfo: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '10px',
    padding: '32px',
    marginBottom: '32px',
  },
  pathwayTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '12px',
  },
  pathwayText: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.8',
    marginBottom: '24px',
  },
  diplomaSteps: {
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '8px',
  },
  diplomaStep: {
    background: '#f8f9fa',
    borderRadius: '8px',
    padding: '16px',
    flex: '1',
    minWidth: '180px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  diplomaNum: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#0E7BB5',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  diplomaTitle: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#1a1a1a',
  },
  diplomaDesc: {
    fontSize: '13px',
    color: '#666',
    lineHeight: '1.6',
  },
  diplomaArrow: {
    fontSize: '20px',
    color: '#0E7BB5',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '28px',
  },
  ncvPathInfo: {
    background: '#e8f4fc',
    border: '1px solid #b3d7ef',
    borderRadius: '10px',
    padding: '28px',
  },
  ncvTitle: {
    fontSize: '17px',
    fontWeight: '700',
    color: '#0E7BB5',
    marginBottom: '10px',
  },
  ncvText: {
    fontSize: '14px',
    color: '#333',
    lineHeight: '1.8',
    marginBottom: '16px',
  },
  ncvList: {
    paddingLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    fontSize: '14px',
    color: '#444',
    lineHeight: '1.6',
  },
  docsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '16px',
    marginBottom: '40px',
  },
  docCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '8px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  docTop: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  docBadge: {
    fontSize: '11px',
    fontWeight: '700',
    padding: '4px 12px',
    borderRadius: '20px',
  },
  docTitle: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#1a1a1a',
  },
  docNote: {
    fontSize: '13px',
    color: '#666',
    lineHeight: '1.6',
  },
  certBox: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '10px',
    padding: '28px',
    marginBottom: '24px',
  },
  certTitle: {
    fontSize: '17px',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '12px',
  },
  certText: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '16px',
    lineHeight: '1.7',
  },
  certOptions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  certOption: {
    background: '#f0f8ff',
    color: '#0E7BB5',
    border: '1px solid #cce4f5',
    borderRadius: '6px',
    padding: '8px 14px',
    fontSize: '13px',
    fontWeight: '500',
  },
  warningBox: {
    background: '#fff8f0',
    border: '1.5px solid #e67e22',
    borderRadius: '8px',
    padding: '24px',
  },
  warningTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#e67e22',
    marginBottom: '10px',
  },
  warningText: {
    fontSize: '14px',
    color: '#444',
    lineHeight: '1.8',
  },
  nsfasEligibility: {
    marginBottom: '48px',
  },
  nsfasSubTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '20px',
  },
  eligibilityGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '16px',
  },
  eligibilityCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderTop: '3px solid #0E7BB5',
    borderRadius: '8px',
    padding: '20px',
  },
  eligibilityTitle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#0E7BB5',
    marginBottom: '8px',
  },
  eligibilityDesc: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.7',
  },
  allowancesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px',
    marginBottom: '48px',
  },
  allowanceCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '8px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  allowanceAmount: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#0E7BB5',
  },
  allowancePeriod: {
    fontSize: '12px',
    color: '#999',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  allowanceType: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#1a1a1a',
    marginTop: '4px',
  },
  allowanceDesc: {
    fontSize: '13px',
    color: '#666',
    lineHeight: '1.5',
  },
  nsfasSteps: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '10px',
    padding: '32px',
    marginBottom: '32px',
  },
  nsfasStepsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '24px',
  },
  nsfasStepItem: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
  },
  nsfasStepNum: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: '#0E7BB5',
    color: '#fff',
    fontSize: '14px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  nsfasStepTitle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '4px',
  },
  nsfasStepDesc: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.7',
  },
  nsfasCTA: {
    textAlign: 'center',
  },
  dhetBursary: {
    background: '#e8f4fc',
    border: '1px solid #b3d7ef',
    borderRadius: '10px',
    padding: '28px',
  },
  campusGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '16px',
    marginBottom: '32px',
  },
  campusCard: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '8px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    transition: 'border-color 0.2s',
  },
  campusHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '8px',
  },
  campusName: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#0E7BB5',
  },
  campusTownBadge: {
    background: '#e8f4fc',
    color: '#0E7BB5',
    fontSize: '11px',
    fontWeight: '600',
    padding: '3px 10px',
    borderRadius: '20px',
    whiteSpace: 'nowrap',
  },
  campusAddress: {
    fontSize: '13px',
    color: '#888',
  },
  campusSpec: {
    fontSize: '13px',
    color: '#555',
    fontStyle: 'italic',
    flex: 1,
  },
  campusAction: {
    marginTop: '4px',
  },
  campusWalkIn: {
    fontSize: '12px',
    color: '#2ecc71',
    fontWeight: '600',
  },
  contactNote: {
    background: '#fff',
    border: '1px solid #e8e8e8',
    borderRadius: '8px',
    padding: '20px 24px',
  },
  contactNoteText: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.8',
  },
  contactLink: {
    color: '#0E7BB5',
    fontWeight: '600',
    textDecoration: 'none',
  },
  wilSection: {
    position: 'relative',
    backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    padding: '96px 24px',
  },
  wilOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(14,123,181,0.92)',
  },
  wilContent: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    gap: '64px',
    alignItems: 'center',
  },
  wilText: {
    position: 'relative',
    zIndex: 1,
  },
  wilTag: {
    color: '#FFB800',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
  wilTitle: {
    fontSize: 'clamp(24px, 3vw, 36px)',
    fontWeight: '800',
    color: '#fff',
    marginBottom: '16px',
    letterSpacing: '-0.5px',
  },
  wilDesc: {
    fontSize: '15px',
    color: 'rgba(255,255,255,0.88)',
    lineHeight: '1.8',
    marginBottom: '20px',
  },
  wilBenefits: {
    paddingLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginBottom: '28px',
    color: 'rgba(255,255,255,0.85)',
    fontSize: '14px',
    lineHeight: '1.6',
  },
  wilBtn: {
    background: '#FFB800',
    color: '#000',
    textDecoration: 'none',
    padding: '13px 28px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '700',
    display: 'inline-block',
  },
  wilStats: {
    position: 'relative',
    zIndex: 1,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  wilStat: {
    background: 'rgba(255,255,255,0.12)',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  wilStatNum: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#FFB800',
  },
  wilStatLabel: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.8)',
    lineHeight: '1.4',
  },
  cta: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&q=80)',
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
  btnOutline: {
    background: 'transparent',
    color: '#fff',
    textDecoration: 'none',
    padding: '14px 32px',
    borderRadius: '6px',
    fontSize: '15px',
    fontWeight: '600',
    border: '2px solid rgba(255,255,255,0.5)',
  },
}