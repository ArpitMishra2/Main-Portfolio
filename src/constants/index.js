import {geeks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    
];

export const experiences = [
    {
        title: "Campus Ambassador",
        company_name: "GeeksforGeeks",
        icon: geeks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
           "Promoting coding culture and Geeks for Geeks initiatives among college students through events and workshops.",
            "Collaborating with student communities, faculty, and event organizers to drive engagement and participation.",
            "Ensuring strong representation of Geeks for Geeks at campus events and building partnerships with relevant clubs.",
            "Providing feedback to the Geeks for Geeks team on campus interests and challenges to improve platform offerings.",
        ],
    },
    {
        title: "MERN STACK DEVELOPER",
        company_name: "Code-Help",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Sep 2024 - Nov 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
   
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ArpitMishra2',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/arpit-mishra-a7051a251/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Simon Game',
        description: 'Developed an interactive Simon game using HTML and CSS, incorporating audio syncing and dynamic design elements to enhance user engagement and provide a seamless gaming experience.',
        link: 'https://github.com/ArpitMishra2/Simon-Game',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Front-End Parallex Website',
        description: 'Created a parallax website using Tailwind CSS, showcasing the implementation of the parallax effect to create visually engaging, layered scrolling experiences for users',
        link: 'https://github.com/ArpitMishra2/parallex',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'Platform that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://colab.research.google.com/drive/1reAvbml8ivrsipIs8bdHyGRtfPqu0_w4?usp=sharing',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Text-Summarizer',
        description: 'Created a parallax website using Tailwind CSS, showcasing the implementation of the parallax effect to create visually engaging, layered scrolling experiences for users',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: car,
        theme: 'btn-back-pink',
        name: 'Full Stack Ed-Tech Platform',
        description: 'Built a complete educational platform for students and teachers, enabling seamless communication and collaboration through video conferencing, chat, and file sharing.',
        link: 'https://google.com',
    },
];