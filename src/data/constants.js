import lpuLogo from "../assets/lpu.jpeg";
import Dav from "../assets/dav.jpg";
import aws from "../assets/aws.jpeg";
import leet from "../assets/leet.png";

export const Bio = {
  name: "Ananya Jaiswal",
  roles: [
    "Frontend Developer",
    "React Developer",
    "Problem Solver",
    "CSE Student",
  ],
  description:
    "B.Tech CSE student from Lovely Professional University focused on building scalable web applications and solving algorithmic problems. Based in Sonbhadra, Uttar Pradesh.",
  github: "https://github.com/ananya411/",
  resume: "https://www.linkedin.com/in/ananya-jaiswal-688b9a27b/",
  linkedin: "https://www.linkedin.com/in/ananya-jaiswal-688b9a27b/",
  email: "ananyasbr06@gmail.com",
  phone: "+91 8707704258",
  location: "Sonbhadra, Uttar Pradesh 231216",
};

export const skills = [
  {
    title: "Languages",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
    ],
  },
  {
    title: "Technologies & Frameworks",
    skills: [
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "React.js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "REST APIs",
        image: "https://cdn-icons-png.flaticon.com/512/2164/2164832.png",
      },
      {
        name: "Node.js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Git",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      {
        name: "Responsive Design",
        image: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
      },
      {
        name: "Component-Based Architecture",
        image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
      },
      {
        name: "State Management",
        image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      },
      {
        name: "UI/UX",
        image: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: lpuLogo,
    role: "Summer Trainee - DSA with C++",
    company: "Center of Professional Enhancement",
    date: "Jun 2025 - Jul 2025",
    desc: "Completed 35+ hours of live training focused on programming, OOP concepts, and data structures & algorithms. Built a Warehouse Management System using Dijkstra's Algorithm for path optimization and developed strong problem-solving and object-oriented design skills.",
    skills: ["C++", "OOP", "DSA", "Dijkstra Algorithm"],
  },
  {
    id: 1,
    img: aws,
    role: "Core Team Member (Cloud Computing & Coding)",
    company: "AWS Community",
    date: "2025 - Present",
    desc: "Guided 50+ students during hands-on AWS cloud and coding sessions, assisting with concepts and real-time troubleshooting.",
    skills: ["Leadership", "Cloud Computing", "Mentorship", "Community Building"],
  },
  {
    id: 2,
    img: leet,
    role: "Competitive Programming Achievements",
    company: "LeetCode & HackerRank",
    date: "2025 - Present",
    desc: "Solved 150+ algorithmic problems on LeetCode and earned 5-star ratings on HackerRank in Java, JavaScript, and DBMS.",
    skills: ["Algorithms", "Data Structures", "Java", "JavaScript", "DBMS"],
  },
];

export const projects = [
  {
    id: 0,
    title: "AI Predictive Autoscaling Engine",
    date: "Jan 2026 - Feb 2026",
    description:
      "Engineered a real-time autoscaling engine that shifts from reactive to predictive scaling using custom machine learning. Implemented OLS linear regression from scratch in JavaScript to forecast CPU load and confidence, and built a full-stack real-time dashboard with 5-second telemetry updates and role-based authentication.",
    tags: ["ML System Architecture", "React", "Node.js", "WebSockets"],
    github: "https://github.com/ananya411/Ai-Predictive-Autoscalingengine",
  },
  {
    id: 1,
    title: "Sports Management System",
    date: "Oct 2025 - Dec 2025",
    description:
      "Designed and developed a Sports Management System using React.js and Node.js for efficient team and match management. Implemented secure REST APIs, authentication, and MongoDB integration with real-time updates and structured admin workflows.",
    tags: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    github: "https://github.com/ananya411/sports-management",
  },
];

export const education = [
  {
    id: 0,
    img: lpuLogo,
    school: "Lovely Professional University",
    date: "2023 - 2027",
    grade: "CGPA: 6.62",
    desc: "Pursuing Bachelor of Technology in Computer Science and Engineering at Phagwara, Punjab.",
    degree: "Bachelor of Technology - Computer Science and Engineering",
  },
  {
    id: 1,
    img: Dav,
    school: "DAV Public School",
    date: "2022 - 2023",
    grade: "CGPA: 8.5",
    desc: "Completed Class 12 from Sonbhadra, Uttar Pradesh.",
    degree: "12th",
  },
  {
    id: 2,
    img: Dav,
    school: "DAV Public School",
    date: "2020 - 2021",
    grade: "CGPA: 9.2",
    desc: "Completed Class 10 from Sonbhadra, Uttar Pradesh.",
    degree: "10th",
  },
];

export const certifications = [
  {
    id: 0,
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "Feb 2026",
    link: "https://www.hackerrank.com/",
  },
  {
    id: 1,
    title: "Generative AI Professional",
    issuer: "Oracle University",
    date: "Sept 2025",
    link: "https://mylearn.oracle.com/",
  },
];
