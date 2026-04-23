// ============================================================
// Maluti TVET College-API Service Layer
// ============================================================
// Simulates a RESTful backend. Each function represents an
// endpoint (GET /api/home, /api/programmes, etc.).
// In production, replace simulated returns with fetch() calls.
// ============================================================

import logo from '../assets/logo.png'
import logoWhiteBg from '../assets/logo-white-bg.png'
import leadership1 from '../assets/leadership1.jpg'
import slide1 from '../assets/slide-1.jpg'
import student1 from '../assets/student1.jpg'
import student2 from '../assets/student2.jpeg'
import student3 from '../assets/student3.jpg'

import phuthaditjhaba from '../assets/campuses/phuthaditjhaba.png'
import bethlehem from '../assets/campuses/bethlehem.png'
import harrismith from '../assets/campuses/harrismith.png'
import bonamelo from '../assets/campuses/bonamelo.png'
import itemoheleng from '../assets/campuses/itemoheleng.png'
import kwetlisong from '../assets/campuses/kwetlisong.png'
import lerelatshepe from '../assets/campuses/lerelatshepe.png'
import sefikeng from '../assets/campuses/sefikeng.png'

const DELAY = 300
const wait = ms => new Promise(r => setTimeout(r, ms))

// Export images so pages can reference them
export const assets = {
  logo,
  logoWhiteBg,
  leadership1,
  slide1,
  student1,
  student2,
  student3,
  campuses: {
    phuthaditjhaba, bethlehem, harrismith, bonamelo,
    itemoheleng, kwetlisong, lerelatshepe, sefikeng,
  },
}

// ─── Shared data ────────────────────────────────────────────
const CAMPUSES = [
  { id: 'main', name: 'Main Campus', town: 'Phuthaditjhaba', address: 'Mampoi Street, Phuthaditjhaba, Free State', role: 'Flagship & Central Office', specialisation: 'Business, Tourism, Hospitality, NC(V) programmes', image: phuthaditjhaba },
  { id: 'bethlehem', name: 'Bethlehem Campus', town: 'Bethlehem', address: 'Bethlehem, Free State', role: 'Corporate Office', specialisation: 'Engineering and Business Studies (NC(V) + NATED)', image: bethlehem },
  { id: 'harrismith', name: 'Harrismith Campus', town: 'Harrismith', address: 'Harrismith, Free State', role: 'Engineering & Logistics Hub', specialisation: 'Engineering, Civil Engineering, Freight Logistics', image: harrismith },
  { id: 'bonamelo', name: 'Bonamelo Campus', town: 'Phuthaditjhaba', address: 'Phuthaditjhaba, Free State', role: 'Education & Development Centre', specialisation: 'ECD, Education & Development', image: bonamelo },
  { id: 'itemoheleng', name: 'Itemoheleng Campus', town: 'Phuthaditjhaba', address: 'Phuthaditjhaba, Free State', role: 'IT & Business Centre', specialisation: 'Business Management, IT, Computer Science', image: itemoheleng },
  { id: 'kwetlisong', name: 'Kwetlisong Campus', town: 'Riverside', address: 'Riverside, Free State', role: 'Skills Academy', specialisation: 'Technical trades, electrical, workshop training', image: kwetlisong },
  { id: 'lerelatshepe', name: 'Lere la Tshepe Campus', town: 'Tseki Village', address: 'Tseki Village, Free State', role: 'Community & Agriculture', specialisation: 'Agriculture, rural bridging programmes', image: lerelatshepe },
  { id: 'sefikeng', name: 'Sefikeng Campus', town: 'Rosedale', address: 'Rosedale, Free State', role: 'Vocational Skills', specialisation: 'Vocational skills, ECD, business support', image: sefikeng },
]

// ─── Endpoints ──────────────────────────────────────────────

// GET /api/home
export const fetchHomeData = async () => {
  await wait(DELAY)
  return {
    slides: [
      { url: slide1, caption: 'Great Place. Great Choice for Lifelong Learning.' },
      { url: phuthaditjhaba, caption: 'Rooted in the Free State since 2002' },
      { url: kwetlisong, caption: 'Hands-on learning for real careers' },
    ],
    stats: [
      { number: '8', label: 'Campuses Across the Free State' },
      { number: '2002', label: 'Year Established' },
      { number: 'Umalusi', label: 'Accredited By' },
      { number: 'NSFAS', label: 'Funding Available' },
    ],
    announcements: [
      { tag: 'Admissions', text: '2026 applications are open-apply online at malutitvet.co.za or visit your nearest campus', urgent: true },
      { tag: 'NSFAS', text: 'NSFAS applications for 2026 are open at nsfas.org.za-do not delay, funding is limited', urgent: true },
      { tag: 'Examinations', text: 'November 2025 NC(V) and NATED examination timetables are available-contact your Campus Examination Officer', urgent: false },
      { tag: 'Graduation', text: '2025 Graduation ceremony registration is open-deadline Friday 4 July 2025', urgent: false },
    ],
    events: [
      { date: 'Aug 19–20', year: '2025', title: 'Annual Graduation Ceremony', desc: 'Graduation ceremonies across all campuses. Register by 4 July 2025.', location: 'All Campuses' },
      { date: 'Sep 1', year: '2025', title: '2026 Applications Open', desc: 'Applications open for all NC(V) and NATED programmes.', location: 'malutitvet.co.za' },
      { date: 'Nov 2025', year: '2025', title: 'End of Year Examinations', desc: 'NC(V) and NATED final examinations across all campuses.', location: 'All Campuses' },
    ],
    testimonials: [
      { name: 'Thabo M.', programme: 'N6 Electrical Engineering', text: 'Maluti TVET gave me the practical skills I needed. I completed my N6 and found employment within three months of finishing my trade test.', image: student3 },
      { name: 'Lerato K.', programme: 'NC(V) Business Studies', text: 'The lecturers here genuinely care about your progress. I came in with just a Grade 9 and I am now running my own small business.', image: student1 },
      { name: 'Sifiso D.', programme: 'N4 Management Assistant', text: 'NSFAS covered my fees and the college helped me through the application process. I would not have been able to study without that support.', image: student2 },
    ],
    programmesPreview: [
      { title: 'Engineering Studies', iconId: 'engineering', image: kwetlisong, desc: 'N1–N6 Electrical, Civil, Mechanical, and Fitting & Turning', type: 'NATED (Report 191)' },
      { title: 'Business Studies', iconId: 'business', image: itemoheleng, desc: 'Management Assistant, Financial Management, HR Management', type: 'NATED (Report 191)' },
      { title: 'Information Technology', iconId: 'it', image: bethlehem, desc: 'Networking, software, and systems support', type: 'NC(V) Level 2–4' },
      { title: 'Education & Development', iconId: 'education', image: bonamelo, desc: 'ECD and EDUCARE programmes', type: 'NC(V) Level 2–4' },
      { title: 'Hospitality & Tourism', iconId: 'hospitality', image: lerelatshepe, desc: 'Food & beverage, tourism, accommodation', type: 'NC(V) Level 2–4' },
      { title: 'Utility Studies', iconId: 'utility', image: harrismith, desc: 'Plumbing, electrical infrastructure, trades', type: 'NATED (Report 191)' },
    ],
    campuses: CAMPUSES,
  }
}

// GET /api/programmes
export const fetchProgrammesData = async () => {
  await wait(DELAY)
  return {
    ncv: [
      { id: 1, field: 'Engineering', title: 'Information Technology', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: bethlehem, description: 'Covers hardware, software, networking, and programming basics.', subjects: ['Computer Hardware', 'Systems Software', 'Networking', 'Programming', 'Mathematics'], careers: ['IT Technician', 'Network Support', 'Systems Admin'], campus: 'Itemoheleng, Main Campus' },
      { id: 2, field: 'Engineering', title: 'Electrical Infrastructure Construction', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: kwetlisong, description: 'Practical training in electrical installations and infrastructure.', subjects: ['Electrical Systems', 'Infrastructure Construction', 'OHS', 'Engineering Science'], careers: ['Electrician', 'Electrical Inspector', 'Infrastructure Technician'], campus: 'Bethlehem, Harrismith, Main' },
      { id: 3, field: 'Engineering', title: 'Engineering and Related Design', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: harrismith, description: 'Technical drawing, CAD, and engineering design principles.', subjects: ['Engineering Drawing', 'CAD', 'Mathematics', 'Physical Science'], careers: ['Draughtsman', 'Design Technician', 'CAD Operator'], campus: 'Main Campus, Bethlehem' },
      { id: 4, field: 'Engineering', title: 'Civil Engineering and Building Construction', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: bethlehem, description: 'Construction methods, civil engineering, and site-based practicals.', subjects: ['Building Construction', 'Civil Technology', 'Mathematics'], careers: ['Construction Supervisor', 'Site Foreman', 'Civil Technician'], campus: 'Harrismith, Bethlehem' },
      { id: 5, field: 'Business', title: 'Finance, Economics and Accounting', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: itemoheleng, description: 'Financial accounting, economics, and bookkeeping.', subjects: ['Financial Accounting', 'Economics', 'Business Practice'], careers: ['Bookkeeper', 'Accounts Clerk', 'Bank Teller'], campus: 'Main Campus, Bonamelo, Bethlehem' },
      { id: 6, field: 'Business', title: 'Office Administration', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: itemoheleng, description: 'Administrative skills, office management, and business communication.', subjects: ['Office Practice', 'Business Communication', 'Computer Practice'], careers: ['Office Administrator', 'Receptionist', 'Executive Assistant'], campus: 'All Campuses' },
      { id: 7, field: 'Business', title: 'Marketing', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: itemoheleng, description: 'Marketing principles, consumer behaviour, and retail management.', subjects: ['Marketing', 'Sales Management', 'Entrepreneurship'], careers: ['Marketing Assistant', 'Sales Representative', 'Retail Manager'], campus: 'Main Campus, Bethlehem' },
      { id: 8, field: 'Agriculture', title: 'Primary Agriculture', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: lerelatshepe, description: 'Plant production, animal husbandry, and agricultural business.', subjects: ['Plant Production', 'Animal Production', 'Agricultural Management'], careers: ['Farmer', 'Agricultural Technician', 'Farm Manager'], campus: 'Kwetlisong, Lere la Tshepe' },
      { id: 9, field: 'Services', title: 'Hospitality', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: phuthaditjhaba, description: 'Food preparation, front office, and hospitality management.', subjects: ['Food Preparation', 'Hospitality Generics', 'F&B Service'], careers: ['Chef', 'Hotel Front Desk', 'F&B Supervisor'], campus: 'Main Campus, Harrismith' },
      { id: 10, field: 'Services', title: 'Education and Development', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: bonamelo, description: 'Early childhood development and EDUCARE training.', subjects: ['Child Development', 'EDUCARE Didactics', 'Educational Psychology'], careers: ['ECD Practitioner', 'Crèche Teacher', 'ECD Centre Manager'], campus: 'Bonamelo, Sefikeng, Main' },
      { id: 11, field: 'Services', title: 'Tourism', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: phuthaditjhaba, description: 'Tourism operations, guiding, and travel management.', subjects: ['Tourism Operations', 'Customer Care', 'Travel & Tours'], careers: ['Tour Guide', 'Travel Agent', 'Tourism Officer'], campus: 'Main Campus' },
      { id: 12, field: 'Services', title: 'Primary Health', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: bonamelo, description: 'Community health, primary care, and health promotion.', subjects: ['Primary Health Care', 'Anatomy', 'Community Health'], careers: ['Community Health Worker', 'Clinic Assistant'], campus: 'Main Campus, Bonamelo' },
    ],
    nated: [
      { id: 13, field: 'Engineering', title: 'Electrical Engineering', levels: 'N1–N6', duration: 'N1–N3: 18 mo | N4–N6: 18 mo + 2 yrs practical', entry: 'N1–N3: Grade 9 | N4–N6: Matric with Maths & Science', image: kwetlisong, description: 'Electrical theory, electronics, power systems. N3+trade test = artisan. N6+2yrs practical = National Diploma.', subjects: ['Electrical Trade Theory', 'Industrial Electronics', 'Mathematics', 'Engineering Science'], careers: ['Electrician (Artisan)', 'Electrical Inspector', 'Maintenance Technician'], campus: 'Bethlehem, Harrismith, Main, Kwetlisong' },
      { id: 14, field: 'Engineering', title: 'Mechanical Engineering', levels: 'N1–N6', duration: 'N1–N3: 18 mo | N4–N6: 18 mo + 2 yrs practical', entry: 'N1–N3: Grade 9 | N4–N6: Matric with Maths & Science', image: harrismith, description: 'Fitting, turning, mechanical drawing, and industrial machinery.', subjects: ['Fitting & Machining', 'Mechanical Drawing', 'Mathematics'], careers: ['Fitter & Turner (Artisan)', 'Machine Operator', 'Mechanical Technician'], campus: 'Bethlehem, Harrismith' },
      { id: 15, field: 'Engineering', title: 'Civil Engineering', levels: 'N1–N6', duration: 'N1–N3: 18 mo | N4–N6: 18 mo + 2 yrs practical', entry: 'N1–N3: Grade 9 | N4–N6: Matric with Maths & Science', image: harrismith, description: 'Construction, surveying, and civil technology.', subjects: ['Civil Technology', 'Surveying', 'Engineering Drawing'], careers: ['Civil Technician', 'Quantity Surveyor', 'Site Supervisor'], campus: 'Bethlehem, Harrismith' },
      { id: 16, field: 'Business', title: 'Business Management', levels: 'N4–N6', duration: '18 months + 2 years practical', entry: 'Matric or NC(V) Level 4', image: itemoheleng, description: 'Business administration, management, entrepreneurship.', subjects: ['Business Management', 'Entrepreneurship', 'Computer Practice'], careers: ['Business Manager', 'Entrepreneur', 'Operations Manager'], campus: 'All Campuses' },
      { id: 17, field: 'Business', title: 'Management Assistant', levels: 'N4–N6', duration: '18 months + 2 years practical', entry: 'Matric or NC(V) Level 4', image: itemoheleng, description: 'Office management, secretarial, and administrative support.', subjects: ['Office Practice', 'Computer Practice', 'Communication'], careers: ['Personal Assistant', 'Office Manager', 'Executive Secretary'], campus: 'All Campuses' },
      { id: 18, field: 'Business', title: 'Financial Management', levels: 'N4–N6', duration: '18 months + 2 years practical', entry: 'Matric or NC(V) Level 4', image: itemoheleng, description: 'Financial accounting, cost accounting, taxation, auditing.', subjects: ['Financial Accounting', 'Cost Accounting', 'Taxation'], careers: ['Financial Manager', 'Accountant', 'Auditor'], campus: 'Main, Bethlehem, Bonamelo' },
      { id: 19, field: 'Business', title: 'Human Resource Management', levels: 'N4–N6', duration: '18 months + 2 years practical', entry: 'Matric or NC(V) Level 4', image: itemoheleng, description: 'Labour relations, personnel management, training.', subjects: ['Personnel Management', 'Labour Relations', 'Training'], careers: ['HR Officer', 'Labour Relations Officer'], campus: 'Main, Bethlehem' },
      { id: 20, field: 'Business', title: 'Marketing Management', levels: 'N4–N6', duration: '18 months + 2 years practical', entry: 'Matric or NC(V) Level 4', image: itemoheleng, description: 'Advanced marketing, sales management, consumer behaviour.', subjects: ['Marketing Management', 'Sales Management', 'Consumer Behaviour'], careers: ['Marketing Manager', 'Brand Manager', 'Sales Manager'], campus: 'Main, Bethlehem' },
      { id: 21, field: 'Business', title: 'Public Management', levels: 'N4–N6', duration: '18 months + 2 years practical', entry: 'Matric or NC(V) Level 4', image: lerelatshepe, description: 'Governance, public administration, community development.', subjects: ['Public Administration', 'Public Finance', 'Municipal Admin'], careers: ['Government Official', 'Municipal Officer'], campus: 'Main, Bonamelo' },
      { id: 22, field: 'Utility', title: 'Educare (ECD)', levels: 'N4–N6', duration: '18 months + 2 years practical', entry: 'Matric or NC(V) Level 4', image: bonamelo, description: 'Advanced ECD, curriculum development, centre management.', subjects: ['Educare Didactics', 'Day Care Development', 'Educational Psychology'], careers: ['ECD Centre Principal', 'Early Childhood Educator'], campus: 'Main, Bonamelo, Sefikeng' },
    ],
  }
}

// GET /api/admissions
export const fetchAdmissionsData = async () => {
  await wait(DELAY)
  return {
    applicationStatus: {
      year: 2026,
      isOpen: true,
      openedDate: '1 September 2025',
    },
    steps: [
      { num: '01', title: 'Career Guidance & Orientation', desc: 'Register as a "First Time Here" applicant. Complete the pre-entry screening and career orientation module. Compulsory under DHET policy.', note: 'Applications submitted without career guidance will not be processed.' },
      { num: '02', title: 'Placement Assessment', desc: 'Complete a literacy and numeracy placement test. Results form the basis of your academic counselling. You may deviate from recommendations with a signed acknowledgement.', note: 'The placement test is strictly compulsory.' },
      { num: '03', title: 'Formal Application & Documents', desc: 'Submit online at malutitvet.co.za or in person at any campus. Upload certified documents in PDF format.', note: '2026 applications opened 1 September 2025.' },
    ],
    documents: [
      { doc: 'Certified copy of Identity Document (ID)', required: true, note: 'Certified within 3 months of application' },
      { doc: 'Certified copy of latest academic results', required: true, note: 'Grade 12 certificate, latest school report, or NC(V) Level 4 certificate' },
      { doc: 'Proof of residence', required: true, note: 'Not older than 3 months' },
      { doc: 'Certified copy of parent/guardian ID', required: false, note: 'Required for NSFAS and students under 18' },
      { doc: 'Proof of household income', required: false, note: 'Required for NSFAS' },
      { doc: 'Previous qualification certificates', required: false, note: 'Required for N4–N6 NATED' },
    ],
    requirements: [
      { prog: 'NC(V) Level 2', req: 'Grade 9 pass or NQF Level 1 or ABET Level 4', note: 'No Matric required' },
      { prog: 'NATED N1–N3 (Engineering)', req: 'Grade 9 minimum-Grade 12 with Maths & Physical Science preferred', note: 'Mathematical Literacy NOT accepted for engineering' },
      { prog: 'NATED N4–N6 (Business)', req: 'Matric or NC(V) Level 4', note: 'Preference for 26+ admission score' },
      { prog: 'NATED N4–N6 (Engineering)', req: 'Matric with Maths & Science OR NC(V) L4 in related field', note: 'Mathematical Literacy NOT accepted' },
    ],
    nsfas: {
      householdIncomeThreshold: 'R350,000 per annum',
      allowances: [
        { type: 'Urban Accommodation', amount: 'R24,000', period: 'per annum' },
        { type: 'Peri-Urban Accommodation', amount: 'R18,900', period: 'per annum' },
        { type: 'Rural Accommodation', amount: 'R15,750', period: 'per annum' },
        { type: 'Transport Allowance', amount: 'Applicable', period: 'where qualifying' },
        { type: 'Incidental Allowance', amount: 'Applicable', period: 'personal care' },
        { type: 'Tuition Fees', amount: 'Covered', period: 'full tuition' },
      ],
    },
    wil: {
      businessHours: 2000,
      engineeringHours: 2670,
      businessMonths: 18,
      engineeringMonths: 24,
    },
  }
}

// GET /api/about
export const fetchAboutData = async () => {
  await wait(DELAY)
  return {
    history: {
      founded: '1 September 2002',
      act: 'Continuing Education and Training (CET) Act 16 of 2006',
      corporateOffice: 'Bethlehem, Free State',
      centralOffice: 'Phuthaditjhaba, Free State',
      description: 'Maluti TVET College was established on 1 September 2002 through a merger of former Colleges of Education (Bonamelo, Sefikeng) and Technical Colleges (Itemoheleng, Bethlehem, Kwetlisong, Lere la Tshepe) into one unified institution situated at the foothills of the Maluti Mountains.',
    },
    mission: 'To offer excellence, creativity, and quality education that encourages entrepreneurship and employability, transforming lives across the Free State and beyond.',
    vision: 'To be a leading Technical Vocational Education and Training institution delivering world-class, responsive, and accessible education aligned with national development goals.',
    values: [
      { value: 'Integrity', desc: 'Upholding the highest standards of honesty and ethical conduct.' },
      { value: 'Accountability', desc: 'Taking responsibility for our actions, decisions, and outcomes.' },
      { value: 'Innovation', desc: 'Continuously seeking new and better ways to deliver education.' },
      { value: 'Professionalism', desc: 'Maintaining high standards of conduct and service delivery.' },
      { value: 'Transparency', desc: 'Operating openly with all stakeholders.' },
      { value: 'Redress', desc: 'Addressing historical imbalances and promoting equity.' },
      { value: 'Inclusiveness', desc: 'Welcoming all students and removing barriers to participation.' },
      { value: 'Sustainability', desc: 'Committed to long-term institutional and community health.' },
    ],
    colorMeaning: [
      { color: '#FFFFFF', label: 'White', meaning: 'Peace, transparency, and unity-the foundation of our identity.' },
      { color: '#0E7BB5', label: 'Sky Blue', meaning: 'The Drakensberg mountains-achievement, authority, and fresh approach.' },
      { color: '#2ecc71', label: 'Green', meaning: 'The fertile Free State lands-institutional growth and regional development.' },
      { color: '#FFB800', label: 'Gold', meaning: 'Wealth, prosperity, and economic upliftment of every student.' },
    ],
    leadership: [
      { name: 'Mr. ME Tsotetsi', title: 'Acting Principal', desc: 'Mr. Tsotetsi has steered the institution through significant transitional periods since 2020.', image: leadership1 },
      { name: 'Deputy Principal', title: 'Corporate Services', desc: 'HR, supply chain management, infrastructure, and institutional support.', image: null },
      { name: 'Deputy Principal', title: 'Academic Affairs', desc: 'Academic quality assurance, curriculum delivery, lecturer development.', image: null },
      { name: 'Principal', title: 'Finance & Governance', desc: 'Institutional finances, budget planning, AGSA reporting.', image: null },
    ],
    governance: {
      council: 'The College Council is mandated by Section 10 of the CET Act 16 of 2006. It bears responsibility for strategic planning, policy development, and financial oversight. Includes ministerial appointees (Section 10(4)(b)) and external members (Section 10(6)).',
      academicBoard: 'The Academic Board accounts to Council for academic monitoring, quality assurance, and identification of learning programmes.',
      responsibilities: [
        'Institutional language policies',
        'Determining tuition fees',
        'Gender and disability representation',
        'Alignment with national macroeconomic needs',
        'Strategic plans and annual performance plans',
        'Financial management and audit outcomes',
      ],
    },
    accreditation: [
      { body: 'Umalusi', role: 'Quality Council-NC(V) qualifications' },
      { body: 'QCTO', role: 'Trades and Occupations-Artisan certificates' },
      { body: 'DHET', role: 'Higher Education-NATED (Report 191)' },
      { body: 'Multiple SETAs', role: 'Learnerships and skills programmes' },
    ],
    campuses: CAMPUSES,
  }
}

// GET /api/contact
export const fetchContactData = async () => {
  await wait(DELAY)
  return {
    general: {
      website: 'malutitvet.co.za',
      email: 'info@malutitvet.co.za',
      fraudHotline: '0800 333 178',
      fraudProvider: 'Whistle Blower-free call, 24 hours, confidential',
    },
    departments: [
      { name: 'Admissions & Registration', desc: 'Applications, registration, placement testing', contact: 'Visit your nearest campus or malutitvet.co.za' },
      { name: 'Financial Aid (NSFAS)', desc: 'NSFAS applications and bursary enquiries', contact: 'Campus Financial Aid Office or nsfas.org.za' },
      { name: 'Examinations', desc: 'Exam timetables, results, supplementary exams', contact: 'Campus Examination Officer' },
      { name: 'Student Support Services', desc: 'Counselling, wellness, academic support', contact: 'Campus SSS office' },
      { name: 'Work-Integrated Learning', desc: 'Workplace placement, logbooks, employer partnerships', contact: 'Campus WIL Coordinator' },
      { name: 'Supply Chain / Tenders', desc: 'Supplier registration, RFQs, tender documents', contact: 'Corporate Office, Bethlehem' },
    ],
    campuses: CAMPUSES,
    socialMedia: [
      { platform: 'Facebook', handle: 'Maluti TVET College', url: 'https://www.facebook.com' },
      { platform: 'Twitter / X', handle: '@MalutiTVET', url: 'https://www.twitter.com' },
      { platform: 'YouTube', handle: 'Maluti TVET College', url: 'https://www.youtube.com' },
    ],
  }
}

// GET /api/auth (simulated login check-demonstrates portal architecture)
export const mockLogin = async (username, password, role) => {
  await wait(500)
  return {
    success: false,
    message: 'Live portal access is via the official iEnabler system at malutitvet.co.za',
  }
}