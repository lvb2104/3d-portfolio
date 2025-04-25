// Define and export content for navigation links, services, technologies, experiences, testimonials, and projects

import {
    devops,
    backend,
    cloud,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    uit,
    outlier,
    aws,
    carrent,
    jobit,
    tripguide,
    threejs,
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'work',
        title: 'Work',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

const services = [
    {
        title: 'Web Developer',
        icon: web,
    },
    {
        title: 'Backend Developer',
        icon: backend,
    },
    {
        title: 'DevOps Engineer',
        icon: devops,
    },
    {
        title: 'Cloud Engineer',
        icon: cloud,
    },
];

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Redux Toolkit',
        icon: redux,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'MongoDB',
        icon: mongodb,
    },
    {
        name: 'Three JS',
        icon: threejs,
    },
    {
        name: 'git',
        icon: git,
    },
    {
        name: 'figma',
        icon: figma,
    },
    {
        name: 'docker',
        icon: docker,
    },
];

const experiences = [
    {
        title: 'Student',
        company_name: 'University of Information Technology - VNU HCM',
        icon: uit,
        iconBg: '#fff',
        date: 'Sep 2023 - Present',
        points: [
            "Pursuing a Bachelor's degree in Software Engineering at the University of Information Technology – VNU-HCM.",
            'Strong academic performance with a CGPA of 3.5/4.0.',
            'Gained solid foundation through key coursework in software engineering and systems.',
            'Actively involved in programming competitions and tech events.',
            'Participated in hands-on projects applying backend development and DevOps skills.',
        ],
    },
    {
        title: 'Coding Expertise for AI training',
        company_name: 'Outlier',
        icon: outlier,
        iconBg: '#fff',
        date: 'Dec 2024 - Jan 2025',
        points: [
            'Crafted advanced, failure-inducing prompts to rigorously test AI model robustness and behavior under edge cases.',
            'Analyzed model outputs to detect vulnerabilities, logical gaps, and hallucinations.',
            'Delivered feedback loops and prompt iterations to enhance overall accuracy, coherence, and safety of AI responses.',
            'Collaborated with internal teams to align testing strategies with model training goals and fine-tuning needs.',
        ],
    },
    {
        title: 'DevOps Embassador',
        company_name: 'AWS Study Group',
        icon: aws,
        iconBg: '#fff',
        date: 'Feb 2025 - Present',
        points: [
            'Served as DevOps Ambassador in the AWS Study Group.',
            'Guided peers in understanding and utilizing AWS cloud services.',
            'Facilitated learning sessions focused on CI/CD workflows and cloud infrastructure.',
            'Built and showcased hands-on projects using Infrastructure as Code (IaC) principles.',
            'Promoted best practices in cloud deployment and DevOps methodologies.',
            'Contributed to a collaborative, knowledge-sharing community of aspiring cloud professionals.',
        ],
    },
];

const testimonials = [
    {
        testimonial:
            'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
        name: 'Sara Lee',
        designation: 'CFO',
        company: 'Acme Co',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: 'Chris Brown',
        designation: 'COO',
        company: 'DEF Corp',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: 'Lisa Wang',
        designation: 'CTO',
        company: '456 Enterprises',
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
];

const projects = [
    {
        name: 'Car Rent',
        description:
            'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'mongodb',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwind',
                color: 'pink-text-gradient',
            },
        ],
        image: carrent,
        source_code_link: 'https://github.com/',
    },
    {
        name: 'Job IT',
        description:
            'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
            {
                name: 'scss',
                color: 'pink-text-gradient',
            },
        ],
        image: jobit,
        source_code_link: 'https://github.com/',
    },
    {
        name: 'Trip Guide',
        description:
            'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
        tags: [
            {
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'supabase',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: tripguide,
        source_code_link: 'https://github.com/',
    },
];

export { services, technologies, experiences, testimonials, projects };
