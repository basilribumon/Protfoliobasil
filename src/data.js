export const profile = {
  name: 'Basil Thottappali', email: 'basilribumon@gmail.com', location: 'Manjeri, Malappuram, Kerala, India',
  linkedin: 'https://linkedin.com/in/basil-t', whatsapp: '919847328745', github: '', resume: '', photo: '/images/basil.png'
};

export const navigation = [
  ['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Experience', 'experience'], ['Projects', 'projects'], ['Education', 'education'], ['Certifications', 'certifications'], ['Contact', 'contact']
];

export const skillGroups = [
  { title: 'Languages & markup', icon: '⌘', items: ['JavaScript (ES6+)', 'Python', 'HTML5', 'CSS3'] },
  { title: 'Frontend', icon: '◈', items: ['React.js', 'Redux Toolkit', 'TanStack Query', 'Bootstrap', 'Responsive Web Design'] },
  { title: 'Backend & APIs', icon: '⌁', items: ['Django (Basic)', 'REST APIs', 'CRUD Operations', 'Axios', 'JSON Server', 'JSON'] },
  { title: 'Database & tools', icon: '▤', items: ['MySQL', 'Git', 'GitHub', 'Visual Studio Code'] }
];

export const projects = [
  { number: '01', name: 'SevenBridge Supermarket', type: 'LIVE E-COMMERCE PROJECT', description: 'A supermarket shopping experience with product browsing, category navigation, a basket, and store management screens.', tags: [], theme: 'sevenbridge', demo: 'https://seven-bridge-supermarket.onrender.com', source: '', image: '', images: ['/images/sevenbridge-045524.png', '/images/sevenbridge-045742.png', '/images/sevenbridge-045815.png', '/images/sevenbridge-045856.png'] },
  { number: '02', name: 'Gymabu', type: 'LIVE FITNESS WEB APP', description: 'A fitness experience with workout plans, trainer listings, membership information, and progress features.', tags: [], theme: 'gym', demo: 'https://gym-green-three.vercel.app/', source: '', image: '', images: ['/images/gymabu-01.png', '/images/gymabu-02.png', '/images/gymabu-03.png', '/images/gymabu-04.png', '/images/gymabu-05.png', '/images/gymabu-06.png', '/images/gymabu-07.png'] },
  { number: '03', name: 'CaseHub', type: 'E-COMMERCE PLATFORM', description: 'A responsive shopping experience with authentication, product discovery, search, filters, sorting, pagination, cart, wishlist, and order workflows.', tags: ['React.js', 'Redux Toolkit', 'TanStack Query', 'Axios', 'JSON Server'], theme: 'casehub', demo: '', source: '', image: '' },
  { number: '04', name: 'Disaster Management System', type: 'PYTHON APPLICATION', description: 'A disaster management project focused on incident reporting, emergency response logic, real-time alerts, affected-area mapping, and relief distribution tracking.', tags: ['Python', 'Core Systems Design'], theme: 'disaster', demo: '', source: '', image: '' },
  { number: '05', name: 'Personal Portfolio', type: 'WEB EXPERIENCE', description: 'A responsive developer portfolio showcasing professional experience, technical skills, education, and selected projects.', tags: ['React.js', 'JavaScript', 'CSS3', 'Framer Motion'], theme: 'portfolio', demo: '', source: '', image: '' }
];

export const experience = [
  { date: 'JAN 2026 — JUN 2026', role: 'Full Stack / Frontend Developer Intern', company: 'Bridgeon Solutions', place: 'Manjeri, Kerala', project: 'CaseHub — E-Commerce Website', tags: ['React.js', 'Redux Toolkit', 'TanStack Query', 'JavaScript', 'Axios', 'Git'], points: ['Developed a responsive e-commerce application using reusable React components.', 'Implemented login and registration flows, product browsing, search, filtering, sorting, and pagination.', 'Managed cart, wishlist, authentication, and order-related state with Redux Toolkit.', 'Integrated REST-style APIs with Axios and TanStack Query; used JSON Server for CRUD workflows.', 'Built cart quantity updates, checkout, wishlist tracking, and order management modules.'] },
  { date: 'JAN 2025', role: 'Python Developer Intern', company: 'Regional Technologies', place: 'Calicut, Kerala', project: 'Disaster Management System', tags: ['Python', 'Core Systems Design'], points: ['Developed backend logic for emergency response and multi-resource coordination.', 'Implemented data handling and real-time alert mechanisms.', 'Designed modules for incident reporting, affected-area mapping, and relief distribution tracking.', 'Applied modular Python logic and data-driven decision-making approaches.'] }
];

export const education = [
  { title: 'Bachelor of Computer Applications', short: 'BCA', institution: 'University of Calicut', date: '2023 — 2025', detail: 'Computer science, application development, and software design principles.' },
  { title: 'Higher Secondary Education', short: 'Computer Applications', institution: 'GHSS Mankada Pallipuram', date: '2020 — 2022', detail: 'Higher secondary studies with a focus on computer applications.' }
];

export const certificates = [
  { title: 'Frontend Development Internship Certificate', issuer: 'Bridgeon Solutions LLP', detail: '9 weeks · 15 July 2026', file: '' },
  { title: 'Professional Internship Certification', issuer: 'Regional Technologies, Calicut', detail: 'Python Developer Internship', file: '' },
  { title: 'Bachelor of Computer Applications (BCA) Degree', issuer: 'University of Calicut', detail: 'Bachelor of Computer Applications', file: '' }
];
