import { PortfolioData } from './portfolio-interfaces';

export const portfolioData: PortfolioData = {
  // BASIC INFO
  name: 'Rafay Muzamil',
  profile_image: 'assets/profile/dp2.jpg',
  logo: 'assets/logo.png',
  role: '.NET Angular Developer',
  stack: ['Angular', 'ASP.NET Core', 'C#', 'SQL Server'],
  // description:
  //   'Passionate about creating amazing digital experiences with modern technologies. I specialize in building scalable applications and bringing creative ideas to life.',
  resume: 'assets/pdf/Muhammad-Asad-Munir-Resume.pdf',

  languages: ['English', 'Urdu', 'Punjabi'],

  // SOCIAL LINKS
  socials: {
    email: 'asadmunir6645@gmail.com',
    phone: '+923244590782',
    whatsapp: '+923244590782',
    whatsappMessage: 'Hello I am interested in your services',
    github: 'https://github.com/asadmunirdev',
    linkedin: 'https://linkedin.com/in/asadmunir6645',
    location: 'Lahore, Pakistan',
  },

  // ABOUT ME
  about: {
    description:
      'Web developer with Angular internship experience and a strong interest in full-stack development using ASP.NET Core and SQL Server. Brings solid frontend skills, growing backend expertise, and strong communication abilities developed through government household survey work under the PSER program. Thrives in fast-learning, collaborative environments.',

    passions: [
      {
        title: 'Clean Architecture',
        description:
          'Building scalable, maintainable applications with solid design principles and best practices.',
        key: 'architecture',
      },
      {
        title: 'Innovation & Learning',
        description:
          "Constantly exploring cutting-edge technologies and pushing the boundaries of what's possible.",
        key: 'innovation',
      },
      {
        title: 'User Experience',
        description:
          'Creating intuitive, accessible interfaces that users love and find valuable.',
        key: 'ux',
      },
      {
        title: 'Problem Solving',
        description:
          'Turning complex challenges into elegant solutions through analytical thinking and creativity.',
        key: 'problem-solving',
      },
    ],

    interests: [
      'Watching movies and TV shows',
      'Keeping up with world news and trends',
      'Watching and enjoying cricket matches',
    ],
  },

  // SKILLS
  skills: {
    frontend: [
      'Angular',
      'TypeScript',
      'RxJS',
      'NgRx',
      'HTML5',
      'CSS3/SCSS',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'Bootstrap',
      'Angular Material',
      'PrimeNG',
    ],
    backend: [
      'C#',
      // 'Python',
      'ASP.NET Core',
      'Firebase',
      'REST APIs',
      'Microsoft SQL Server',
    ],
    tools: [
      'Git',
      'GitHub',
      'Postman',
      'VS Code',
      'Visual Studio Community',
      'SQL Server Management Studio',
      'Microsoft Word',
      'Microsoft Excel',
      'Microsoft PowerPoint',
      // 'Microsoft Outlook',
      // 'Microsoft Access'
    ],
  },

  // EDUCATION
  educations: [
    {
      degree: 'Master of Business and Administration',
      institution: 'University of Education',
      timeline: 'Sep 2024 – Present',
      location: 'Lahore, Pakistan',
      cgpa: '3.0/4.0 (3rd Semester)',
      // document: 'assets/BSIT.pdf', // placeholder PDF
    },
    {
      degree: "Bachelor's in Information Technology",
      institution: 'University of Education',
      timeline: 'Oct 2020 – Aug 2024',
      location: 'Lahore, Pakistan',
      cgpa: '3.06/4.0',
      document: 'assets/pdf/BSIT.pdf', // placeholder PDF
    },
  ],

  // COURSES
  courses: [
    {
      name: 'Full Stack Web Development',
      institution: 'Intelliage Training Lahore',
      timeline: 'May 2024 – Nov 2024',
      location: 'Lahore, Pakistan',
      description:
        'Learned frontend (HTML, CSS, JavaScript) and backend (PHP, MySQL, Laravel) fundamentals through guided exercises and mini-projects.',
      document: 'assets/pdf/Web_Certificate.pdf', // placeholder
    },
    {
      name: 'Advanced Python Programming',
      institution: 'University of Engineering and Technology',
      timeline: 'Nov 2022 – Jan 2023',
      location: 'Lahore, Pakistan',
      description:
        'Covered OOP, file handling, modules, and AI/ML basics. Applied concepts in small-scale automation scripts and data-processing tasks.',
      document: 'assets/pdf/Python_Certificate.pdf', // placeholder
    },
  ],

  // EXPERIENCE
  experiences: [
    {
      role: 'Enumerator — Punjab Social & Economic Registry (PSER)',
      company: 'The Urban Unit',
      timeline: 'Sept 2025 – Present',
      location:
        'Shaheen Complex Lahore, Egerton Rd, Garhi Shahu, Lahore, 54000',
      responsibilities: [
        'Conduct field surveys and collect household data within assigned blocks under the Punjab Social & Economic Registry (PSER) project.',
        'Visit households and interview respondents to gather socio-economic information.',
        'Accurately record data to support data-driven policy and planning initiatives.',
        'Ensure data quality, confidentiality, and timely submission of collected information.',
        'Use structured survey protocols and digital data collection tools for efficient and accurate data entry.',
      ],
      document: 'assets/pdf/PSER.pdf', // placeholder
    },

    // {
    //   role: 'Backend Assistant (WooCommerse)',
    //   company: 'Interlink Services Inc',
    //   timeline: 'May 2025 – Jun 2025',
    //   location: 'Lahore Division, Main Boulevard Garden Town, Pakistan',
    //   responsibilities: [
    //     'Supporting backend operations for an e-commerce website',
    //     'Focused on product research and hunting from AliExpress based on current trends',
    //     'Using automation plugins/tools to import products into the company’s WordPress website',
    //     'Assisting in organizing and updating product listings, prices, and descriptions',
    //   ],
    //   technologies: ['Wordpress'],
    //   // document: 'assets/Experience_Letter.pdf', // placeholder
    // },
    {
      role: 'Angular Developer',
      company: 'STACKONN',
      timeline: 'Jul 2024 – Jan 2025',
      location: 'H # 55, Block K, Gulberg III, Lahore, Pakistan',
      responsibilities: [
        'Developed UI components and state management using Angular, NgRx, and Firebase.',
        'Integrated real-time data features and authentication solutions.',
        'Collaborated with teams on projects and contributed to code reviews.',
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'Firebase',
        'NgRx',
        'RxJS',
        'Scss',
        'Angular Material',
        'PrimeNg',
      ],
      document: 'assets/pdf/Experience_Letter.pdf', // placeholder
    },
  ],

  // PROJECTS
  projects: [
    {
      name: 'Asad-Shop (E-commerce Website)',
      timeline: 'Sept/2024 – Oct/2024',
      description:
        'Developed a fully responsive e-commerce platform featuring a structured product catalog, shopping cart with persistent state, and secure user authentication using Angular’s reactive forms. Integrated a mock REST API with JSON Server to handle product data and orders, and implemented RxJS for reactive data flows. Added features such as search, category filtering, order management, and responsive layouts optimized for both desktop and mobile. Focused on clean UI with Bootstrap styling and modular Angular architecture for scalability.',
      link: 'https://asadshop.vercel.app/',
      technologies: [
        'Angular',
        'JSON Server',
        'RxJS',
        'Angular Signals',
        'Angular material',
        'Scss',
        'Firebase',
      ],
      image: 'assets/projects/asadshop.png',
    },
    {
      name: 'Angular Material UI Components',
      timeline: 'Dec/2024 – Jan/2025',
      description:
        'Designed and implemented a collection of reusable and customizable UI components leveraging Angular Material. Experimented with form controls, dialogs, data tables, toolbars, stepper navigation, and responsive grid layouts. Implemented theming support for light/dark modes and applied Angular’s state management patterns to demonstrate component interactions. Built a small component library to be reused across projects, ensuring scalability, accessibility, and design consistency following Material Design principles.',
      link: 'https://angularmaterial.vercel.app/',
      technologies: ['Angular', 'Angular Material', 'TypeScript', 'SCSS'],
      image: 'assets/projects/angular_material.png',
    },
    {
      name: 'Course Listing App (CourseEcho)',
      timeline: 'Jan/2025 – Mar/2025',
      description:
        'Built a dynamic course management application for listing, creating, and enrolling in courses. Implemented full CRUD functionality for courses and user profiles, along with role-based access control (admin, instructor, student). Integrated Firebase Authentication for secure sign-up and login, and used Firestore for real-time data sync between users and courses. Leveraged Angular Signals to manage reactivity and improve performance over traditional state handling. Added route protection, error handling, search and filter options, and a responsive UI that adapts across devices. This project focused on production-level best practices including modular code structure and scalability.',
      link: 'https://courseecho.vercel.app/home',
      technologies: [
        'Angular',
        'Firebase',
        'Angular Signals',
        'Scss',
        'RxJS',
        'Angular material',
      ],
      image: 'assets/projects/courseecho.png',
    },
  ],

  // UI TABS CONFIG
  tabs: {
    about: [
      { label: 'Bio', icon: 'fas fa-book-open' },
      { label: 'Vision', icon: 'fas fa-star' },
      { label: 'Life', icon: 'fas fa-user' },
    ],
    education: [
      { label: 'Study', icon: 'fas fa-user-graduate' },
      { label: 'Work', icon: 'fas fa-briefcase' },
      { label: 'Courses', icon: 'fas fa-chalkboard-teacher' },
    ],
    skills: [
      { label: 'Frontend', icon: 'fas fa-code' },
      { label: 'Backend', icon: 'fas fa-database' },
      { label: 'Tools', icon: 'fas fa-tools' },
    ],
  },
};
