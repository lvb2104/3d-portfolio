// Define and export content for navigation links, services, technologies, experiences, testimonials, and projects

import {
    devops,
    backend,
    frontend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nodejs,
    net,
    nest,
    csharp,
    mssql,
    mongo,
    uit,
    outlier,
    aws,
    portfolio,
    hotel,
    pipeline,
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
        title: 'Frontend Developer',
        icon: frontend,
    },
    {
        title: 'Backend Developer',
        icon: backend,
    },
    {
        title: 'DevOps Engineer',
        icon: devops,
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
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'NestJS',
        icon: nest,
    },
    {
        name: 'C#',
        icon: csharp,
    },
    {
        name: '.NET',
        icon: net,
    },
    {
        name: 'Microsoft SQL Server',
        icon: mssql,
    },
    {
        name: 'MongoDB',
        icon: mongo,
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
            'I thought it was impossible to make a website as beautiful as our product, but Moda proved me wrong.',
        name: 'Sara Lee',
        designation: 'CFO',
        company: 'Acme Co',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Moda does.",
        name: 'Chris Brown',
        designation: 'COO',
        company: 'DEF Corp',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
        testimonial:
            "After Moda optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: 'Lisa Wang',
        designation: 'CTO',
        company: '456 Enterprises',
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
];

const projects = [
    {
        name: 'Portfolio',
        description:
            'Interactive portfolio website that showcases projects, technical skills, and experience in a dynamic 3D environment, built using React, Three.js, and Tailwind CSS to provide an engaging and modern user experience.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'threejs',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwind',
                color: 'pink-text-gradient',
            },
        ],
        image: portfolio,
        source_code_link: 'https://github.com/',
    },
    {
        name: 'Hotel Booking App',
        description:
            'Web application that enables users to search for available rooms, view detailed room information, make reservations seamlessly, and manage their bookings through a user-friendly interface.',
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
                name: 'nestjs',
                color: 'pink-text-gradient',
            },
        ],
        image: hotel,
        source_code_link: 'https://github.com/',
    },
    {
        name: 'Hybrid CI/CD Pipeline',
        description:
            'Hybrid cloud CI/CD pipeline that automates the build and deployment of containerized applications across on-premises and AWS environments using GitLab CI, Jenkins, Terraform, and Harbor Registry.',
        tags: [
            {
                name: 'aws',
                color: 'blue-text-gradient',
            },
            {
                name: 'jenkins',
                color: 'green-text-gradient',
            },
            {
                name: 'terraform',
                color: 'pink-text-gradient',
            },
        ],
        image: pipeline,
        source_code_link: 'https://github.com/',
    },
];

export { services, technologies, experiences, testimonials, projects };
