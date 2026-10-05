import { Code2, Briefcase, Cpu, ShieldCheck, Users, Clock, Facebook, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';
import React from 'react';

export const COLORS = {
    primary: '#002147', // Oxford Blue
    secondary: '#0056b3', // Professional Blue
    accent: '#00d1ff',
    lightGray: '#f8fafc',
    darkGray: '#334155',
};

export const CONTACT_INFO = {
    phone: '+254 141 063174',
    email: 'info@fradynex.com',
    address: 'Claycity, Kasarani, Nairobi, Kenya'
};

export const NAV_LINKS = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
];

export const SERVICES = [
    {
        id: 'software',
        title: 'AI-Enhanced Software Development',
        description: 'We integrate machine learning and AI techniques into every phase of development so your applications become more intelligent, adaptive, and future-ready.',
        longDescription: 'We go beyond traditional coding. By embedding AI directly into the software lifecycle, we create applications that don\'t just execute commands—they learn from usage patterns, predict failures, and optimize performance autonomously.',
        benefits: [
            'Predictive performance tuning',
            'Automated bug detection & self-healing',
            'Intelligent feature prioritization',
            'Future-ready adaptive architecture'
        ],
        icon: React.createElement(Code2, { className: "w-10 h-10 text-[#0056b3]" }),
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
        caseStudy: 'AI-Driven ERP System'
    },
    {
        id: 'web-mobile',
        title: 'AI-Enabled Intelligent Web & Mobile Solutions',
        description: 'Our platforms adapt and learn from data using embedded AI modules to deliver personalized user experiences.',
        longDescription: 'Modern users expect personalization. Our web and mobile solutions leverage real-time data processing and machine learning to tailor content, recommendations, and interfaces to each individual user\'s behavior.',
        benefits: [
            'Hyper-personalized user journeys',
            'Real-time behavioral analytics',
            'Intelligent search and discovery',
            'Cross-platform data synchronization'
        ],
        icon: React.createElement(Cpu, { className: "w-10 h-10 text-[#0056b3]" }),
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
        caseStudy: 'Smart Retail App'
    },
    {
        id: 'automation',
        title: 'Intelligent Automation & AI Workflow Systems',
        description: 'We use AI to automate complex processes, reduce manual work, and optimize workflows for real-world performance.',
        longDescription: 'Transform your operational efficiency. We deploy AI agents and automated workflows that handle complex decision-making tasks, freeing your team to focus on high-value strategic initiatives.',
        benefits: [
            'Reduced operational overhead',
            'Error-free automated decisioning',
            '24/7 autonomous workflow execution',
            'Scalable process optimization'
        ],
        icon: React.createElement(Clock, { className: "w-10 h-10 text-[#0056b3]" }),
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
        caseStudy: 'Autonomous Supply Chain'
    },
    {
        id: 'consultancy',
        title: 'IT Consultancy',
        description: 'Strategic planning and infrastructure reviews to optimise your technological landscape.',
        longDescription: 'We help businesses navigate the complex world of technology. From cloud migration strategies to cybersecurity audits, we provide the roadmap for success.',
        benefits: [
            'Cost reduction',
            'Strategic alignment',
            'Risk mitigation',
            'Future-proof roadmaps'
        ],
        icon: React.createElement(Briefcase, { className: "w-10 h-10 text-[#0056b3]" }),
        image: 'https://images.unsplash.com/photo-1454165833767-02a6ed8a68b8?auto=format&fit=crop&q=80&w=800',
        caseStudy: 'Enterprise Cloud Migration'
    }
];

export const WHY_CHOOSE_US = [
    { title: 'Experienced Professionals', icon: React.createElement(Users, {}), text: 'Over a decade of expertise in delivering enterprise-grade solutions.' },
    { title: 'Custom-Built Solutions', icon: React.createElement(Code2, {}), text: 'We build for your specific needs, avoiding one-size-fits-all approaches.' },
    { title: 'Enterprise Security', icon: React.createElement(ShieldCheck, {}), text: 'Highest standards of data protection and cybersecurity.' },
    { title: 'Reliable Support', icon: React.createElement(Clock, {}), text: 'Continuous monitoring and 24/7 technical support for your systems.' },
];

export const PARTNERS = ['React', 'Node.js', 'Python', 'AWS', 'Azure', 'Kubernetes', 'PostgreSQL'];

export const TECHNOLOGY_PARTNERS = [
    {
        name: 'Ace Tech Foundation',
        logo: 'https://i.postimg.cc/44GxJQNM/Foundation-429-x-131-px-2-1.png'
    },
    {
        name: 'Mojatu Foundation',
        logo: 'https://i.postimg.cc/Gb6rLxXP/mojatu-foundation-logo.jpg'
    },
    {
        name: 'Youth Future Lab',
        logo: 'https://i.postimg.cc/8kkgKKCz/cropped-android-chrome-512x512-1-(1).webp'
    }
];

export const PROJECTS = [
    {
        id: 1,
        title: 'KaziHR - HR Management System',
        category: 'Software Development',
        image: 'https://i.postimg.cc/Q8rTk901/black-applicant-hr-expert-sharing-600nw-2694896149.webp',
        description: 'A streamlined HR management platform that simplifies payroll, compliance, recruitment, and communication with secure, real-time tools.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Cloud Infrastructure'],
        result: 'Revolutionised workforce productivity and compliance tracking.',
        resultsList: [
            'Automated payroll processing & compliance',
            'Streamlined recruitment workflows',
            'Real-time employee communication tools',
            'Secure data management & reporting'
        ],
        liveUrl: 'https://kazihr.com'
    },
    {
        id: 2,
        title: 'KaaSmart - Property Management',
        category: 'Software Development',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
        description: 'A comprehensive property management platform that streamlines tenant management, rent collection, and maintenance tracking.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Cloud Infrastructure'],
        result: 'Optimised rental yields and reduced vacancy rates.',
        resultsList: [
            'Automated rent collection and reminders',
            'Real-time property performance tracking',
            'Simplified tenant and lease management'
        ],
        liveUrl: 'https://kaasmart.app'
    },
    {
        id: 3,
        title: 'Mazingira360 - Environmental Monitoring',
        category: 'AI & Digital Solutions',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
        description: 'Mazingira360 is an enterprise-grade platform for climate restoration, carbon markets, and environmental monitoring. It leverages AI-driven environmental analytics, satellite data interpretation, and predictive climate modeling.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Cloud Infrastructure'],
        result: 'Enhanced climate restoration and carbon credit verification.',
        resultsList: [
            'Real-time ecosystem monitoring',
            'Carbon credit tracking and validation',
            'Climate risk analysis',
            'Data-driven environmental restoration planning'
        ],
        liveUrl: 'https://mazingira360.com'
    }
];

export const WEBSITES_DEVELOPED = [
    {
        id: 1,
        title: 'Sight Tech Foundation',
        url: 'https://sighttechfoundation.org/',
        image: 'https://i.postimg.cc/8kcPhTQ9/istockphoto-1543069402-612x612.jpg'
    },
    {
        id: 2,
        title: 'Swahili Dharma',
        url: 'https://swahilidharma.org/',
        image: 'https://i.postimg.cc/8kcPhTQ9/istockphoto-1543069402-612x612.jpg'
    }
];

export const BLOG_POSTS = [
    {
        id: 1,
        title: 'How AI is Revolutionising Business Operations',
        excerpt: 'Explore how artificial intelligence is streamlining workflows and enhancing decision-making in the modern enterprise.',
        content: 'AI is no longer just a trend; it is a fundamental shift in how businesses operate. From automated customer support to predictive analytics in supply chains, AI-driven solutions are reducing overhead and increasing accuracy across all sectors.',
        category: 'AI & Innovation',
        date: '12 January 2026',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 2,
        title: 'The Future of Cloud Computing in Enterprise',
        excerpt: 'Transitioning from legacy infrastructure to hybrid and multi-cloud environments for superior scalability.',
        content: 'Enterprise cloud strategy is moving towards hybrid models that offer the security of private clouds with the flexibility of public ones.',
        category: 'Cloud Services',
        date: '20 January 2026',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800'
    }
];

export const SOCIAL_LINKS = [
    { icon: React.createElement(Instagram, {}), url: 'https://www.instagram.com/fradynex/' },
    { icon: React.createElement(Twitter, {}), url: 'https://x.com/FradynexInfo' },
    { icon: React.createElement(Linkedin, {}), url: '#' },
    { icon: React.createElement(Youtube, {}), url: 'https://www.youtube.com/channel/UC2ZEtxPKu2TLoLIJFvY_zrQ' },
];
