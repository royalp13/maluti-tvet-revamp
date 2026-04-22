// src/services/api.js

const homeData = {
  aboutImage: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
  slides: [
    { url: 'https://media.portmoni.com/resized/71682/TVET_2026_Applications_Now_Open_at_Maluti_TVET_College__Apply_Online_Today-thumbnail-600x600.png', caption: 'Hands-on learning for real careers' },
    { url: 'https://theguard.co.za/wp-content/uploads/2023/09/IMG-20230911-WA0011-1024x683.jpg', caption: 'Building skills that employers value' },
    { url: 'https://fundiconnect.co.za/wp-content/uploads/2023/06/Blog-images-2.0-54.jpg', caption: 'Your future starts in the Free State' },
  ],
  stats: [
    { number: '8', label: 'Campuses Across the Free State' },
    { number: '2002', label: 'Year Established' },
    { number: 'Umalusi', label: 'Accredited By' },
    { number: 'NSFAS', label: 'Funding Available' },
  ],
  announcements: [
    { tag: 'Admissions', text: '2026 applications are open - apply online at malutitvet.co.za or visit your nearest campus', urgent: true },
    { tag: 'NSFAS', text: 'NSFAS applications for 2026 are open at nsfas.org.za - do not delay, funding is limited', urgent: true },
    { tag: 'Examinations', text: 'November 2025 NC(V) and NATED examination timetables are available - contact your Campus Examination Officer', urgent: false },
    { tag: 'Graduation', text: '2025 Graduation ceremony registration is open - deadline Friday 4 July 2025', urgent: false },
  ],
  events: [
    { date: 'Aug 19-20', year: '2025', title: 'Annual Graduation Ceremony', desc: 'Graduation ceremonies across all campuses. Students must register by 4 July 2025.', location: 'All Campuses' },
    { date: 'Sep 1', year: '2025', title: '2026 Applications Open', desc: 'Online and walk-in applications open for all NC(V) and NATED programmes for the 2026 academic year.', location: 'malutitvet.co.za' },
    { date: 'Nov 2025', year: '2025', title: 'End of Year Examinations', desc: 'NC(V) and NATED final examinations. Timetables available from your Campus Examination Officer.', location: 'All Campuses' },
  ],
  testimonials: [
    { name: 'Thabo M.', programme: 'N6 Electrical Engineering', text: 'Maluti TVET gave me the practical skills I needed. I completed my N6 and found employment within three months of finishing my trade test.', image: '../assets/student3.jpg' },
    { name: 'Lerato K.', programme: 'NC(V) Business Studies', text: 'The lecturers here genuinely care about your progress. I came in with just a Grade 9 and I am now running my own small business.', image: '../assets/student1.jpg' },
    { name: 'Sifiso D.', programme: 'N4 Management Assistant', text: 'NSFAS covered my fees and the college helped me through the application process. I would not have been able to study without that support.', image: '../assets/student2.jpg' },
  ],
  campuses: [
    { name: 'Main Campus', town: 'Phuthaditjhaba', note: 'Flagship Campus - Business, Tourism & Hospitality', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80' },
    { name: 'Bethlehem Campus', town: 'Bethlehem', note: 'Corporate Office - Engineering & Business Studies', image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80' },
    { name: 'Harrismith Campus', town: 'Harrismith', note: 'Engineering, Civil & Freight Logistics', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80' },
    { name: 'Bonamelo Campus', town: 'Phuthaditjhaba', note: 'Education, Development & ECD', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80' },
    { name: 'Itemoheleng Campus', town: 'Phuthaditjhaba', note: 'Business Management & Information Technology', image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=600&q=80' },
    { name: 'Kwetlisong Campus', town: 'Riverside', note: 'Kwetlisong Skills Academy - Technical Trades', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80' },
    { name: 'Lere la Tshepe Campus', town: 'Tseki Village', note: 'Agriculture & Rural Community Learning', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80' },
    { name: 'Sefikeng Campus', town: 'Rosedale', note: 'Vocational Skills & Business Support', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80' },
  ],
  programmes: [
    { title: 'Engineering Studies', iconId: 'engineering', image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80', desc: 'N1-N6 programmes in Electrical, Civil, Mechanical, and Fitting & Turning.', type: 'NATED (Report 191)' },
    { title: 'Business Studies', iconId: 'business', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80', desc: 'Management Assistant, Financial Management, Human Resource Management.', type: 'NATED (Report 191)' },
    { title: 'IT & Computer Science', iconId: 'it', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80', desc: 'Information Technology NC(V) covering networking, software, and support.', type: 'NC(V) Level 2-4' },
    { title: 'Education & Development', iconId: 'education', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', desc: 'Early Childhood Development and EDUCARE programmes.', type: 'NC(V) Level 2-4' },
    { title: 'Hospitality & Tourism', iconId: 'hospitality', image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80', desc: 'Hospitality, Food & Beverage, and Tourism management.', type: 'NC(V) Level 2-4' },
    { title: 'Utility Studies', iconId: 'utility', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', desc: 'Plumbing, Electrical Infrastructure Construction, and related trades.', type: 'NATED (Report 191)' },
  ]
};

export const fetchHomeData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(homeData);
    }, 600); // Simulated network delay
  });
};