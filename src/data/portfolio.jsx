import ProfileImage from '../assets/images/profile.png'

export const personalInfo = {
  name: "Anand Sharma",
  title: "Software Engineer",
  email: "anandsharma.ts3000@gmail.com",
  phone: "+917014791203",
  location: "Jaipur, Rajasthan",
  bio: "Software Engineer passionate about Full Stack Development",
  description: "I'm a passionate developer with 1 years of experience creating digital solutions that make a difference.",
  about: [
    "I’m Anand Sharma, a passionate Full Stack Developer specializing in .NET, React, and modern web technologies. I focus on building scalable, user-centered applications that blend performance with clean design.",
    "With a strong foundation in both frontend and backend development, I love turning complex ideas into real-world software solutions. My current focus is on creating innovative full-stack projects and optimizing system performance and user experience."
  ],
  story: [
    "I started my journey in web development during college, where I discovered my passion for creating interactive and user-friendly applications. Since then, I've worked with various technologies and frameworks to build scalable solutions.",
    "I believe in continuous learning and staying up-to-date with the latest technologies. When I'm not coding, you can find me exploring new frameworks, contributing to open-source projects, or sharing knowledge with the developer community.",
    "My goal is to create digital experiences that not only look great but also solve real-world problems and make people's lives easier."
  ],
  stats: {
    projects: 10,
    experience: 1,
  }
};

export const socialLinks = [
  {
    name: "EMAIL",
    url: "anandsharma.ts3000@gmail.com",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffda24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
  },
  {
    name: "PHONE",
    url: "7014791203",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffda24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
  },
  {
    name: "LOCATION",
    url: "Jaipur, Rajasthan",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffda24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/anand-sharma-/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffda24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
  },
  {
    name: "GitHub",
    url: "https://github.com/anandsharma2002",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffda24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
  },

  {
    name: "Instagram",
    url: "https://www.instagram.com/anandsharma01_/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffda24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
  }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing with Stripe, and a comprehensive admin dashboard for product management.",
    image: ProfileImage,
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com/anandsharma2002",
    live: "https://example.com",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 2,
    title: "AI Task Manager",
    description: "A collaborative task management application enhanced with AI features. Includes real-time updates via Socket.io, drag-and-drop kanban boards, and smart task prioritization.",
    image: ProfileImage,
    technologies: ["React", "Socket.io", "Express", "PostgreSQL", "OpenAI API"],
    github: "https://github.com/anandsharma2002",
    live: "https://example.com",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current weather and forecasts using multiple weather APIs. Features beautiful data visualization with Chart.js and location-based services.",
    image: ProfileImage,
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
    github: "https://github.com/anandsharma2002",
    live: "https://example.com",
    featured: false,
    category: "Frontend"
  },
  {
    id: 4,
    title: "Modern Portfolio",
    description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations using Framer Motion and GSAP. Built with performance and accessibility in mind.",
    image: ProfileImage,
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    github: "https://github.com/anandsharma2002",
    live: "https://example.com",
    featured: false,
    category: "Frontend"
  }
];

export const skills = [
  { name: "Java", percentage: 85 },
  { name: "React", percentage: 90 },
  { name: "JavaScript", percentage: 90 },
  { name: "HTML5", percentage: 95 },
  { name: "CSS3", percentage: 90 },
  { name: "Tailwind CSS", percentage: 90 },
  { name: "Node.js", percentage: 80 },
  { name: "Express.js", percentage: 80 },
  { name: "MongoDB", percentage: 85 },
  { name: ".NET", percentage: 85 },
  { name: "C++", percentage: 80 },
  { name: "SQL", percentage: 85 },
  { name: "Git", percentage: 90 },
];

export const experience = [
  {
    company: "Tech Corp",
    position: "Senior Full Stack Developer",
    duration: "2022 - Present",
    description: "Leading development of scalable web applications and mentoring junior developers. Implemented CI/CD pipelines and optimized application performance by 40%.",
    technologies: ["React", "Node.js", "AWS", "Docker"]
  },
  {
    company: "StartupXYZ",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    description: "Developed and maintained multiple web applications using modern technologies. Collaborated with design teams to implement responsive UI/UX designs.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Redis"]
  },
  {
    company: "Web Agency",
    position: "Frontend Developer",
    duration: "2019 - 2020",
    description: "Created responsive websites and web applications for various clients. Specialized in converting PSD designs to pixel-perfect HTML/CSS.",
    technologies: ["JavaScript", "HTML5", "CSS3", "jQuery"]
  }
];

export const education = [
  {
    Image: <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#ffda24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>,
    Title: "B.Tech [2020-2024]",
    Name: "Engineering College of Bikaner",
    Score: "CGPA: 8.38"
  },
  {
    Image: <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#ffda24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-university-icon lucide-university"><path d="M14 21v-3a2 2 0 0 0-4 0v3" /><path d="M18 12h.01" /><path d="M18 16h.01" /><path d="M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z" /><path d="M6 12h.01" /><path d="M6 16h.01" /><circle cx="12" cy="10" r="2" /></svg>,
    Title: "12th [2020]",
    Name: "Bharti Niketan School, Shri Dungargarh",
    Score: "percentage: 87.60%"
  },
  {
    Image: <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#ffda24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-school-icon lucide-school"><path d="M14 21v-3a2 2 0 0 0-4 0v3" /><path d="M18 5v16" /><path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" /><path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" /><path d="M6 5v16" /><circle cx="12" cy="9" r="2" /></svg>,
    Title: "10th [2018]",
    Name: "Bharti Niketan School, Shri Dungargarh",
    Score: "percentage: 88.50%"
  }
];

export const certifications = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    year: "2023"
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    year: "2022"
  },
  {
    name: "Google UX Design Certificate",
    issuer: "Google",
    year: "2021"
  }
];

export const achievements = [
  {
    title: "Hackathon Winner",
    description: "Secured 1st place in the National Coding Hackathon 2023 for building an innovative AI-based solution for waste management."
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to several major open source React libraries, with over 50 merged pull requests."
  },
  {
    title: "Best Developer Award",
    description: "Recognized as 'Best Developer of the Year' at Tech Corp for consistent high-quality code and leadership."
  }
];
