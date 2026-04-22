// ============================================================
// Maluti TVET College — API Service Layer
// Simulates a RESTful backend API with structured endpoints.
// In production, replace each function's return value with an
// actual fetch() call to the backend (e.g. /api/home, /api/programmes).
// ============================================================

const SIMULATED_DELAY = 400

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

// ─────────────────────────────────────────────
// HOME PAGE DATA
// ─────────────────────────────────────────────
export const fetchHomeData = async () => {
  await delay(SIMULATED_DELAY)
  return {
    slides: [
      { url: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600&q=80', caption: 'Hands-on learning for real careers' },
      { url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=1600&q=80', caption: 'Building skills that employers value' },
      { url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80', caption: 'Your future starts in the Free State' },
    ],
    stats: [
      { number: '8', label: 'Campuses Across the Free State' },
      { number: '2002', label: 'Year Established' },
      { number: 'Umalusi', label: 'Accredited By' },
      { number: 'NSFAS', label: 'Funding Available' },
    ],
    announcements: [
      { tag: 'Admissions', text: '2026 applications are open — apply online at malutitvet.co.za or visit your nearest campus', urgent: true },
      { tag: 'NSFAS', text: 'NSFAS applications for 2026 are open at nsfas.org.za — do not delay, funding is limited', urgent: true },
      { tag: 'Examinations', text: 'November 2025 NC(V) and NATED examination timetables are available — contact your Campus Examination Officer', urgent: false },
      { tag: 'Graduation', text: '2025 Graduation ceremony registration is open — deadline Friday 4 July 2025', urgent: false },
    ],
    events: [
      { date: 'Aug 19–20', year: '2025', title: 'Annual Graduation Ceremony', desc: 'Graduation ceremonies across all campuses. Students must register by 4 July 2025.', location: 'All Campuses' },
      { date: 'Sep 1', year: '2025', title: '2026 Applications Open', desc: 'Online and walk-in applications open for all NC(V) and NATED programmes.', location: 'malutitvet.co.za' },
      { date: 'Nov 2025', year: '2025', title: 'End of Year Examinations', desc: 'NC(V) and NATED final examinations. Timetables available from your Campus Examination Officer.', location: 'All Campuses' },
    ],
    testimonials: [
      { name: 'Thabo M.', programme: 'N6 Electrical Engineering', text: 'Maluti TVET gave me the practical skills I needed. I completed my N6 and found employment within three months of finishing my trade test.' },
      { name: 'Lerato K.', programme: 'NC(V) Business Studies', text: 'The lecturers here genuinely care about your progress. I came in with just a Grade 9 and I am now running my own small business.' },
      { name: 'Sifiso D.', programme: 'N4 Management Assistant', text: 'NSFAS covered my fees and the college helped me through the application process. I would not have been able to study without that support.' },
    ],
    programmes: [
      { title: 'Engineering Studies', iconId: 'engineering', image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80', desc: 'N1–N6 programmes in Electrical, Civil, Mechanical, and Fitting & Turning.', type: 'NATED (Report 191)' },
      { title: 'Business Studies', iconId: 'business', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80', desc: 'Management Assistant, Financial Management, Human Resource Management.', type: 'NATED (Report 191)' },
      { title: 'IT & Computer Science', iconId: 'it', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80', desc: 'Information Technology NC(V) covering networking, software, and support.', type: 'NC(V) Level 2–4' },
      { title: 'Education & Development', iconId: 'education', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', desc: 'Early Childhood Development and EDUCARE programmes.', type: 'NC(V) Level 2–4' },
      { title: 'Hospitality & Tourism', iconId: 'hospitality', image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80', desc: 'Hospitality, Food & Beverage, and Tourism management.', type: 'NC(V) Level 2–4' },
      { title: 'Utility Studies', iconId: 'utility', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', desc: 'Plumbing, Electrical Infrastructure Construction, and related trades.', type: 'NATED (Report 191)' },
    ],
    campuses: [
      { name: 'Main Campus', town: 'Phuthaditjhaba', note: 'Flagship Campus — Business, Tourism & Hospitality', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80' },
      { name: 'Bethlehem Campus', town: 'Bethlehem', note: 'Corporate Office — Engineering & Business Studies', image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80' },
      { name: 'Harrismith Campus', town: 'Harrismith', note: 'Engineering, Civil & Freight Logistics', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80' },
      { name: 'Bonamelo Campus', town: 'Phuthaditjhaba', note: 'Education, Development & ECD', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80' },
      { name: 'Itemoheleng Campus', town: 'Phuthaditjhaba', note: 'Business Management & Information Technology', image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=600&q=80' },
      { name: 'Kwetlisong Campus', town: 'Riverside', note: 'Kwetlisong Skills Academy — Technical Trades', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80' },
      { name: 'Lere la Tshepe Campus', town: 'Tseki Village', note: 'Agriculture & Rural Community Learning', image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80' },
      { name: 'Sefikeng Campus', town: 'Rosedale', note: 'Vocational Skills & Business Support', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80' },
    ],
  }
}

// ─────────────────────────────────────────────
// PROGRAMMES PAGE DATA
// ─────────────────────────────────────────────
export const fetchProgrammesData = async () => {
  await delay(SIMULATED_DELAY)
  return {
    ncv: [
      { id: 1, field: 'Engineering', title: 'Information Technology', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80', description: 'Covers computer hardware, software, networking, systems support, and programming basics.', subjects: ['Computer Hardware', 'Systems Software', 'Networking', 'Programming', 'English', 'Mathematics'], careers: ['IT Technician', 'Network Support', 'Systems Administrator'], campus: 'Itemoheleng, Main Campus' },
      { id: 2, field: 'Engineering', title: 'Electrical Infrastructure Construction', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80', description: 'Practical training in electrical installations, wiring, and infrastructure. Aligned with SETA trade standards.', subjects: ['Electrical Systems', 'Infrastructure Construction', 'OHS', 'Engineering Science', 'Mathematics'], careers: ['Electrician', 'Electrical Inspector', 'Infrastructure Technician'], campus: 'Bethlehem, Harrismith, Main Campus' },
      { id: 3, field: 'Engineering', title: 'Engineering and Related Design', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80', description: 'Technical drawing, engineering design principles, and CAD fundamentals.', subjects: ['Engineering Drawing', 'CAD', 'Mathematics', 'Engineering Science', 'Physical Science'], careers: ['Draughtsman', 'Design Technician', 'CAD Operator'], campus: 'Main Campus, Bethlehem' },
      { id: 4, field: 'Engineering', title: 'Civil Engineering and Building Construction', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80', description: 'Construction methods, building materials, and civil engineering principles with site-based practicals.', subjects: ['Building Construction', 'Civil Technology', 'Mathematics', 'Engineering Science'], careers: ['Construction Supervisor', 'Site Foreman', 'Civil Technician'], campus: 'Harrismith, Bethlehem' },
      { id: 5, field: 'Business', title: 'Finance, Economics and Accounting', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80', description: 'Financial accounting, economics, bookkeeping, and business finance.', subjects: ['Financial Accounting', 'Economics', 'Business Practice', 'English', 'Mathematical Literacy'], careers: ['Bookkeeper', 'Accounts Clerk', 'Financial Assistant', 'Bank Teller'], campus: 'Main Campus, Bonamelo, Bethlehem' },
      { id: 6, field: 'Business', title: 'Office Administration', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', description: 'Administrative, communication, and office management skills with computer practice.', subjects: ['Office Practice', 'Business Communication', 'Computer Practice', 'English', 'Mathematical Literacy'], careers: ['Office Administrator', 'Receptionist', 'Executive Assistant'], campus: 'All Campuses' },
      { id: 7, field: 'Business', title: 'Marketing', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80', description: 'Marketing principles, consumer behaviour, and retail management.', subjects: ['Marketing', 'Sales Management', 'Entrepreneurship', 'English', 'Mathematical Literacy'], careers: ['Marketing Assistant', 'Sales Representative', 'Retail Manager'], campus: 'Main Campus, Bethlehem' },
      { id: 8, field: 'Agriculture', title: 'Primary Agriculture', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80', description: 'Plant production, animal husbandry, and agricultural business with farm-based training.', subjects: ['Plant Production', 'Animal Production', 'Agricultural Management', 'English', 'Mathematical Literacy'], careers: ['Farmer', 'Agricultural Technician', 'Farm Manager'], campus: 'Kwetlisong, Lere la Tshepe' },
      { id: 9, field: 'Services', title: 'Hospitality', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80', description: 'Food preparation, front office operations, and hospitality management with industry placement.', subjects: ['Food Preparation', 'Hospitality Generics', 'Food & Beverage Service', 'English', 'Mathematical Literacy'], careers: ['Chef', 'Hotel Front Desk', 'Food & Beverage Supervisor'], campus: 'Main Campus, Harrismith' },
      { id: 10, field: 'Services', title: 'Education and Development', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', description: 'Prepares students for EDUCARE and early childhood development roles with practical placement.', subjects: ['Child Development', 'EDUCARE Didactics', 'Educational Psychology', 'English', 'Mathematical Literacy'], careers: ['ECD Practitioner', 'Crèche Teacher', 'ECD Centre Manager'], campus: 'Bonamelo, Sefikeng, Main Campus' },
      { id: 11, field: 'Services', title: 'Tourism', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80', description: 'Tourism operations, guiding, customer service, and travel management.', subjects: ['Tourism Operations', 'Customer Care', 'Travel & Tours', 'English', 'Mathematical Literacy'], careers: ['Tour Guide', 'Travel Agent', 'Tourism Officer'], campus: 'Main Campus' },
      { id: 12, field: 'Services', title: 'Primary Health', levels: 'Level 2–4', duration: '3 years', entry: 'Grade 9 or NQF Level 1', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80', description: 'Community health, primary care principles, anatomy, and health promotion.', subjects: ['Primary Health Care', 'Anatomy & Physiology', 'Community Health', 'English', 'Mathematical Literacy'], careers: ['Community Health Worker', 'Health Promoter', 'Clinic Assistant'], campus: 'Main Campus, Bonamelo' },
    ],
    nated: [
      { id: 13, field: 'Engineering', title: 'Electrical Engineering', levels: 'N1–N6', duration: 'N1–N3: 18 months | N4–N6: 18 months + 2 years practical', entry: 'N1–N3: Grade 9 | N4–N6: Matric with Maths & Science', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80', description: 'Electrical theory, industrial electronics, and power systems. N3 + trade test = qualified artisan. N6 + 2 years practical = National Diploma.', subjects: ['Electrical Trade Theory', 'Industrial Electronics', 'Mathematics', 'Engineering Science', 'Motor Electrical Trade Theory'], careers: ['Electrician (Artisan)', 'Electrical Inspector', 'Maintenance Technician'], campus: 'Bethlehem, Harrismith, Main Campus, Kwetlisong' },
      { id: 14, field: 'Engineering', title: 'Mechanical Engineering', levels: 'N1–N6', duration: 'N1–N3: 18 months | N4–N6: 18 months + 2 years practical', entry: 'N1–N3: Grade 9 | N4–N6: Matric with Maths & Science', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', description: 'Fitting, turning, mechanical drawing, and industrial machinery. Leads to artisan qualification or National Diploma.', subjects: ['Fitting & Machining', 'Mechanical Drawing', 'Mathematics', 'Engineering Science'], careers: ['Fitter & Turner (Artisan)', 'Machine Operator', 'Mechanical Technician'], campus: 'Bethlehem, Harrismith' },
      { id: 15, field: 'Engineering', title: 'Civil Engineering', levels: 'N1–N6', duration: 'N1–N3: 18 months | N4–N6: 18 months + 2 years practical', entry: 'N1–N3: Grade 9 | N4–N6: Matric with Maths & Science', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80', description: 'Construction, building materials, surveying, and civil technology.', subjects: ['Civil Technology', 'Surveying', 'Mathematics', 'Engineering Drawing'], careers: ['Civil Technician', 'Quantity Surveyor', 'Site Supervisor'], campus: 'Bethlehem, Harrismith' },
      { id: 16, field: 'Business', title: 'Business Management', levels: 'N4–N6', duration: '18 months + 2 years practical', entry: 'Matric (Grade 12) or NC(V) Level 4', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80', description: 'Business administration, management, and entrepreneurship. N6 + 2 years practical = National Diploma.', subjects: ['Business Management', 'Entrepreneurship', 'Computer Practice', 'Economics'], careers: ['Business Manager', 'Entrepreneur', 'Operations Manager'], campus: 'All Campuses' },
      { id: 17, field: 'Business', title: 'Management Assistant', levels: 'N4–N6', duration: '18 months + 2 years practical', entry: 'Matric (Grade 12) or NC(V) Level 4', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', description: 'Office management, secretarial skills, and administrative support. High demand in corporate environments.', subjects: ['Office Practice', 'Computer Practice', 'Communication', 'Entrepreneurship'], careers: ['Personal Assistant', 'Office Manager', 'Executive Secretary'], campus: 'All Campuses' },
      { id: 18, field: 'Business', title: 'Financial Management', levels: 'N4–N6', duration: '18 months + 2 years practical', entry: 'Matric (Grade 12) or NC(V) Level 4', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80', description: 'Financial accounting, cost accounting, taxation, and auditing principles.', subjects: ['Financial Accounting', 'Cost and Management Accounting', 'Taxation', 'Auditing'], careers: ['Financial Manager', 'Accountant', 'Auditor'], campus: 'Main Campus, Bethlehem, Bonamelo' },
      { id: 19, field: 'Business', title: 'Human Resource Management', levels: 'N4–N6', duration: '18 months + 2 years practical', entry: 'Matric (Grade 12) or NC(V) Level 4', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80', description: 'Labour relations, personnel management, training and development, and HR administration.', subjects: ['Personnel Management', 'Labour Relations', 'Training & Development', 'Computer Practice'], careers: ['HR Officer', 'Labour Relations Officer', 'Recruitment Consultant'], campus: 'Main Campus, Bethlehem' },
      { id: 20, field: 'Business', title: 'Marketing Management', levels: 'N4–N6', duration: '18 months + 2 years practical', entry: 'Matric (Grade 12) or NC(V) Level 4', image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80', description: 'Advanced marketing theory, sales management, consumer behaviour, and digital marketing fundamentals.', subjects: ['Marketing Management', 'Sales Management', 'Consumer Behaviour', 'Entrepreneurship'], careers: ['Marketing Manager', 'Brand Manager', 'Sales Manager'], campus: 'Main Campus, Bethlehem' },
      { id: 21, field: 'Business', title: 'Public Management', levels: 'N4–N6', duration: '18 months + 2 years practical', entry: 'Matric (Grade 12) or NC(V) Level 4', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80', description: 'Governance, public administration, and community development for public sector roles.', subjects: ['Public Administration', 'Public Finance', 'Municipal Administration', 'Communication'], careers: ['Government Official', 'Municipal Officer', 'Public Administrator'], campus: 'Main Campus, Bonamelo' },
      { id: 22, field: 'Utility', title: 'Educare (Early Childhood Development)', levels: 'N4–N6', duration: '18 months + 2 years practical', entry: 'Matric (Grade 12) or NC(V) Level 4', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', description: 'Advanced early childhood development including curriculum development and ECD centre management.', subjects: ['Educare Didactics', 'Day Care Personnel Development', 'Educational Psychology', 'Entrepreneurship'], careers: ['ECD Centre Principal', 'Early Childhood Educator', 'EDUCARE Trainer'], campus: 'Main Campus, Bonamelo, Sefikeng' },
    ],
  }
}

// ─────────────────────────────────────────────
// ADMISSIONS PAGE DATA
// ─────────────────────────────────────────────
export const fetchAdmissionsData = async () => {
  await delay(SIMULATED_DELAY)
  return {
    applicationStatus: {
      year: 2026,
      isOpen: true,
      openedDate: '1 September 2025',
      message: '2026 applications are open. Apply online at malutitvet.co.za or visit any campus.',
    },
    steps: [
      { num: '01', title: 'Career Guidance & Orientation', desc: 'All prospective students must complete a career guidance session before applying. Register as a "First Time Here" applicant on the student portal to access the pre-entry screening and career orientation module. This step is compulsory under DHET policy.', note: 'You cannot skip this step. Applications submitted without completing career guidance will not be processed.', color: '#e8f4fc', textColor: '#0E7BB5' },
      { num: '02', title: 'Placement Assessment', desc: 'Complete a literacy and numeracy placement test. This assessment determines the most suitable programme and level for your academic profile. Results are used to provide academic counselling — you retain the right to choose your preferred programme, but must sign a formal acknowledgement if deviating from the recommendation.', note: 'The placement test is strictly compulsory and forms the basis of your academic counselling.', color: '#FFB800', textColor: '#000' },
      { num: '03', title: 'Formal Application & Document Submission', desc: 'Submit your formal application online at malutitvet.co.za or in person at your nearest campus. Upload certified copies of all required documents in PDF format. Incomplete applications will not be considered.', note: 'Applications outside the designated window will be rejected. 2026 applications opened 1 September 2025.', color: '#0E7BB5', textColor: '#fff' },
    ],
    documents: [
      { doc: 'Certified copy of Identity Document (ID)', required: true, note: 'Must be certified within 3 months of application' },
      { doc: 'Certified copy of latest academic results', required: true, note: 'Grade 12 certificate, latest school report, or NCV Level 4 certificate' },
      { doc: 'Proof of residence', required: true, note: 'Not older than 3 months — utility bill, affidavit, or lease agreement' },
      { doc: 'Certified copy of parent/guardian ID', required: false, note: 'Required for NSFAS applications and students under 18' },
      { doc: 'Proof of household income', required: false, note: 'Required for NSFAS — payslips, SASSA letter, or sworn affidavit if unemployed' },
      { doc: 'Previous qualification certificates', required: false, note: 'Required for N4–N6 NATED programmes' },
    ],
    requirements: [
      { prog: 'NC(V) Level 2', req: 'Grade 9 pass or NQF Level 1 or ABET Level 4', note: 'No Matric required' },
      { prog: 'NATED N1–N3 (Engineering)', req: 'Grade 9 minimum — Grade 12 with Mathematics & Physical Science preferred', note: 'Mathematical Literacy is NOT accepted for engineering pathways' },
      { prog: 'NATED N4–N6 (Business & Utility)', req: 'Matric (Grade 12) or NC(V) Level 4', note: 'Preference given to applicants scoring 26+ on admission instrument' },
      { prog: 'NATED N4–N6 (Engineering)', req: 'Matric with Mathematics & Physical Science OR NC(V) L4 in related field', note: 'Mathematical Literacy is NOT accepted' },
      { prog: 'NC(V) Level 3 & 4 (progression)', req: 'Pass all 7 subjects at current NC(V) level', note: 'All 4 vocational subjects at 50% minimum; all 3 fundamentals must be passed' },
    ],
    nsfas: {
      householdIncomeThreshold: 'R350,000 per annum',
      allowances: [
        { type: 'Urban Accommodation', amount: 'R24,000', period: 'per annum', desc: 'Students residing in urban areas near campus' },
        { type: 'Peri-Urban Accommodation', amount: 'R18,900', period: 'per annum', desc: 'Students in peri-urban or township areas' },
        { type: 'Rural Accommodation', amount: 'R15,750', period: 'per annum', desc: 'Students in rural and outlying areas' },
        { type: 'Transport Allowance', amount: 'Applicable', period: 'where qualifying', desc: 'Where on-campus accommodation is not available' },
        { type: 'Incidental Allowance', amount: 'Applicable', period: 'personal care', desc: 'Personal care and study-related incidentals' },
        { type: 'Tuition Fees', amount: 'Covered', period: 'full tuition', desc: 'Direct payment to the college on behalf of qualifying students' },
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

// ─────────────────────────────────────────────
// ABOUT PAGE DATA
// ─────────────────────────────────────────────
export const fetchAboutData = async () => {
  await delay(SIMULATED_DELAY)
  return {
    history: {
      founded: '1 September 2002',
      act: 'Continuing Education and Training (CET) Act 16 of 2006',
      type: 'Public Technical Vocational Education and Training College',
      location: 'North Eastern Free State, South Africa',
      corporateOffice: 'Bethlehem, Free State',
      centralOffice: 'Phuthaditjhaba, Free State',
      description: 'Maluti TVET College was established on 1 September 2002 through a merger by the Member of the Executive Council (MEC) for the Free State Department of Education. The merger combined former Colleges of Education (Bonamelo, Sefikeng) and Technical Colleges (Itemoheleng, Bethlehem, Kwetlisong, and Lere la Tshepe) into one unified institution. The college is situated at the foothills of the majestic Maluti Mountains in the North Eastern Free State.',
    },
    mission: 'To offer excellence, creativity, and quality education that encourages entrepreneurship and employability, transforming the lives of students and communities in the Free State and beyond.',
    vision: 'To be a leading Technical Vocational Education and Training institution that delivers world-class, responsive, and accessible education aligned with national development goals.',
    values: [
      { value: 'Integrity', desc: 'We uphold the highest standards of honesty and ethical conduct in all our operations and dealings.' },
      { value: 'Accountability', desc: 'We take responsibility for our actions, decisions, and their outcomes — to students, staff, and the public.' },
      { value: 'Innovation', desc: 'We continuously seek new and better ways to deliver education and serve our communities.' },
      { value: 'Professionalism', desc: 'We maintain the highest standards of conduct and service delivery across all campuses and departments.' },
      { value: 'Transparency', desc: 'We operate openly and honestly, ensuring all stakeholders have access to relevant information.' },
      { value: 'Redress', desc: 'We actively work to address historical imbalances and promote equity in access to quality education.' },
      { value: 'Inclusiveness', desc: 'We welcome all students regardless of background, and strive to remove barriers to participation.' },
      { value: 'Sustainability', desc: 'We are committed to long-term institutional health, environmental responsibility, and community upliftment.' },
    ],
    colorMeaning: [
      { color: '#fff', label: 'White', meaning: 'Peace, transparency, and unity — the foundation of our institutional identity.' },
      { color: '#0E7BB5', label: 'Sky Blue', meaning: 'The majestic Drakensberg mountain range — symbolising achievement, authority, and a fresh approach to education.' },
      { color: '#2ecc71', label: 'Green', meaning: 'The fertile lands of the North Eastern Free State — representing institutional growth and regional development.' },
      { color: '#FFB800', label: 'Gold', meaning: 'Wealth, prosperity, and the ultimate economic upliftment of every student who walks through our doors.' },
    ],
    leadership: [
      { name: 'Mr. ME Tsotetsi', title: 'Acting Principal', desc: 'Mr. Tsotetsi has steered the institution through significant transitional periods since 2020, maintaining operational excellence and strategic momentum across all 8 campuses.', initials: 'MT' },
      { name: 'Deputy Principal', title: 'Corporate Services', desc: 'Oversees human resources, supply chain management, infrastructure, and institutional support services across the college network.', initials: 'DP' },
      { name: 'Deputy Principal', title: 'Academic Affairs', desc: 'Responsible for academic quality assurance, curriculum delivery, lecturer development, and student academic support.', initials: 'DA' },
      { name: 'Principal of Finance', title: 'Finance & Governance', desc: 'Manages institutional finances, budget planning, procurement compliance, and reporting to the AGSA.', initials: 'PF' },
    ],
    governance: {
      council: 'The College Council is the highest decision-making body at Maluti TVET College, mandated by Section 10 of the CET Act 16 of 2006. The Council bears absolute responsibility for strategic planning, high-level policy development, and strict financial oversight. It includes ministerial appointees (Section 10(4)(b)) and external members (Section 10(6)).',
      academicBoard: 'The Academic Board accounts directly to the Council for all academic monitoring, rigorous quality assurance, and the strategic identification of learning programmes aligned with national skills development needs.',
      responsibilities: ['Establishing institutional language policies', 'Determining tuition fees', 'Addressing historical imbalances in gender and disability representation', 'Ensuring the college expands to meet national macroeconomic needs', 'Approving strategic plans and annual performance plans', 'Overseeing financial management and audit outcomes'],
    },
    accreditation: [
      { body: 'Umalusi', role: 'Quality Council — NC(V) qualifications', website: 'https://www.umalusi.org.za' },
      { body: 'QCTO', role: 'Quality Council for Trades and Occupations — Artisan & Occupational Certificates', website: 'https://www.qcto.org.za' },
      { body: 'DHET', role: 'Department of Higher Education and Training — NATED (Report 191) programmes', website: 'https://www.dhet.gov.za' },
      { body: 'Multiple SETAs', role: 'Sector Education and Training Authorities — Learnerships and skills programmes', website: 'https://www.malutitvet.co.za' },
    ],
    campuses: [
      { name: 'Main Campus', town: 'Phuthaditjhaba', address: 'Mampoi Street, Phuthaditjhaba, Free State', specialisation: 'Business Studies, Tourism, Hospitality, and advanced NC(V) programmes', role: 'Central Office & Flagship Campus', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80' },
      { name: 'Bethlehem Campus', town: 'Bethlehem', address: 'Bethlehem, Free State', specialisation: 'Engineering and Business Studies across both NC(V) and NATED frameworks', role: 'Corporate Office Location', image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80' },
      { name: 'Harrismith Campus', town: 'Harrismith', address: 'Harrismith, Free State', specialisation: 'Engineering, Civil Engineering, and Freight Logistics', role: 'Engineering & Logistics Hub', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80' },
      { name: 'Bonamelo Campus', town: 'Phuthaditjhaba', address: 'Phuthaditjhaba, Free State', specialisation: 'Education, Development, and Early Childhood Development (ECD)', role: 'Education & Development Centre', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80' },
      { name: 'Itemoheleng Campus', town: 'Phuthaditjhaba', address: 'Phuthaditjhaba, Free State', specialisation: 'Business Management, Information Technology, and Computer Science', role: 'IT & Business Centre of Excellence', image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=600&q=80' },
      { name: 'Kwetlisong Campus', town: 'Riverside', address: 'Riverside, Free State', specialisation: 'Technical trades, electrical infrastructure, and practical workshop training', role: 'Kwetlisong Skills Academy', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80' },
      { name: 'Lere la Tshepe Campus', town: 'Tseki Village', address: 'Tseki Village, Free State', specialisation: 'Community-centred learning, primary agriculture, and rural bridging programmes', role: 'Community & Agriculture Campus', image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80' },
      { name: 'Sefikeng Campus', town: 'Rosedale', address: 'Rosedale, Free State', specialisation: 'Vocational skills, early childhood development, and business support courses', role: 'Vocational Skills Campus', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80' },
    ],
  }
}

// ─────────────────────────────────────────────
// CONTACT PAGE DATA
// ─────────────────────────────────────────────
export const fetchContactData = async () => {
  await delay(SIMULATED_DELAY)
  return {
    general: {
      website: 'malutitvet.co.za',
      fraudHotline: '0800 333 178',
      fraudHotlineProvider: 'Whistle Blower (24 hours, free call)',
      email: 'info@malutitvet.co.za',
    },
    departments: [
      { name: 'Admissions & Registration', desc: 'New student applications, registration queries, and placement testing', contact: 'Visit your nearest campus or apply at malutitvet.co.za' },
      { name: 'Financial Aid (NSFAS)', desc: 'NSFAS applications, funding status, and bursary enquiries', contact: 'Visit the Financial Aid Office at your campus or apply at nsfas.org.za' },
      { name: 'Examinations', desc: 'Exam timetables, results, and supplementary examinations', contact: 'Contact your Campus Examination Officer directly' },
      { name: 'Student Support Services', desc: 'Counselling, wellness, and academic support', contact: 'Visit the Student Support Services office at your campus' },
      { name: 'Work-Integrated Learning', desc: 'Workplace placement, logbooks, and employer partnerships', contact: 'Contact the WIL Coordinator at your campus' },
      { name: 'Supply Chain / Tenders', desc: 'Supplier registration, RFQs, and tender documents', contact: 'Corporate Office, Bethlehem Campus' },
    ],
    campuses: [
      { name: 'Main Campus', town: 'Phuthaditjhaba', address: 'Mampoi Street, Phuthaditjhaba, Free State', role: 'Flagship Campus', type: 'Central Office' },
      { name: 'Bethlehem Campus', town: 'Bethlehem', address: 'Bethlehem, Free State', role: 'Engineering & Business', type: 'Corporate Office' },
      { name: 'Harrismith Campus', town: 'Harrismith', address: 'Harrismith, Free State', role: 'Engineering & Logistics', type: 'Campus' },
      { name: 'Bonamelo Campus', town: 'Phuthaditjhaba', address: 'Phuthaditjhaba, Free State', role: 'Education & ECD', type: 'Campus' },
      { name: 'Itemoheleng Campus', town: 'Phuthaditjhaba', address: 'Phuthaditjhaba, Free State', role: 'Business & IT', type: 'Campus' },
      { name: 'Kwetlisong Campus', town: 'Riverside', address: 'Riverside, Free State', role: 'Skills Academy', type: 'Campus' },
      { name: 'Lere la Tshepe Campus', town: 'Tseki Village', address: 'Tseki Village, Free State', role: 'Agriculture & Community', type: 'Campus' },
      { name: 'Sefikeng Campus', town: 'Rosedale', address: 'Rosedale, Free State', role: 'Vocational Skills', type: 'Campus' },
    ],
    socialMedia: [
      { platform: 'Facebook', handle: 'Maluti TVET College', url: 'https://www.facebook.com' },
      { platform: 'Twitter / X', handle: '@MalutiTVET', url: 'https://www.twitter.com' },
      { platform: 'YouTube', handle: 'Maluti TVET College', url: 'https://www.youtube.com' },
    ],
  }
}