import React from 'react';
import { Target, Eye, Shield, Heart, Lightbulb, CheckCircle2, Check, ArrowRight, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const About = () => {
    const team = [
        { name: 'Joseph Wambua', role: 'Chief Executive Officer', bio: 'Strategic visionary leading Fradynex towards global excellence in technology.', linkedin: 'https://www.linkedin.com/in/joseph-mbithi-4b5509305/' },
        { name: 'Faith Ngima', role: 'Chief Technology Officer', bio: 'Driving innovation through robust software architectures and emerging tech.', linkedin: 'https://www.linkedin.com/in/faith-ngima-9a02b52b6/' },
        { name: 'Alice Kamau', role: 'Head of Consultancy', bio: 'Expert strategist helping businesses align technology with growth objectives.', linkedin: '#' },
        { name: 'Dr. John Kanyaru', role: 'Lead Solutions Architect', bio: 'Specialising in high-performance digital systems and complex integrations.', linkedin: '#' },
    ];

    const values = [
        {
            icon: <Lightbulb size={24} />,
            title: 'Innovation',
            description: 'We constantly push boundaries to deliver cutting-edge solutions that keep our clients ahead of the curve.'
        },
        {
            icon: <CheckCircle2 size={24} />,
            title: 'Quality',
            description: 'Excellence is not negotiable. We maintain the highest standards in every project we undertake.'
        },
        {
            icon: <Heart size={24} />,
            title: 'Collaboration',
            description: 'We work closely with our clients, fostering partnerships built on trust and mutual success.'
        },
        {
            icon: <Shield size={24} />,
            title: 'Integrity',
            description: 'Transparency and honesty guide everything we do, from initial consultation to project delivery.'
        }
    ];

    const expertise = [
        "Enterprise System Design",
        "Digital Transformation Strategy",
        "Cloud Architecture",
        "Cybersecurity Best Practices",
        "Agile Development Methodologies",
        "API Development & Integration",
        "Mobile Application Development",
        "Business Intelligence Solutions"
    ];

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[500px] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://i.postimg.cc/SSf6YxSg/team-young-african-people-working-office-table-with-laptop-219728-2289.avif" alt="Team Collaboration" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#002147]/85" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="animate-fade-in"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
                            About <span className="text-[#00d1ff]">Fradynex</span>
                        </h1>
                        <p className="text-base md:text-lg text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
                            AI at Our Core
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* AI Core Section */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-[#002147] rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-1 gap-8">
                            <div className="space-y-6">
                                <div className="mb-8">
                                    <h4 className="text-[#00d1ff] font-bold tracking-widest uppercase text-[10px] mb-3">Innovation & Resilience</h4>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white">Who We Are</h2>
                                </div>
                                <p className="text-blue-100 text-base md:text-lg leading-relaxed">
                                    Fradynex is an innovation-driven company specializing in artificial intelligence (AI) and machine learning-enabled solutions. Our team combines deep technical expertise with strategic insight to build technology that anticipates needs, learns from data, and delivers measurable outcomes.
                                </p>
                                <p className="text-blue-100 text-base md:text-lg leading-relaxed">
                                    We believe that AI shouldn’t be a buzzword — it should be a force multiplier for every business function. From decision support systems and automation platforms to predictive analytics dashboards, our portfolio reflects ingenuity backed by cutting-edge research and real-world performance.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-gray-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl shadow-blue-900/5 hover:shadow-2xl transition-all group"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0056b3] mb-8 group-hover:bg-[#0056b3] group-hover:text-white transition-colors">
                                <Target size={28} />
                            </div>
                            <h2 className="text-2xl font-bold text-[#0056b3] mb-6">Our Mission</h2>
                            <p className="text-black text-base leading-relaxed">
                                To advance AI-centric solutions that empower businesses to operate faster, smarter, and with greater resilience.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl shadow-blue-900/5 hover:shadow-2xl transition-all group"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0056b3] mb-8 group-hover:bg-[#0056b3] group-hover:text-white transition-colors">
                                <Eye size={28} />
                            </div>
                            <h2 className="text-2xl font-bold text-[#0056b3] mb-6">Our Vision</h2>
                            <p className="text-black text-base leading-relaxed">
                                To be recognized globally as a trusted partner in delivering transformative AI technologies that generate meaningful impact.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-[#0056b3] p-10 rounded-[40px] border border-gray-100 shadow-xl shadow-blue-900/10 text-white hover:bg-[#004494] transition-all"
                        >
                            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-8">
                                <Check size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-6">Commitment to Growth</h3>
                            <p className="text-blue-50 text-base leading-relaxed mb-8">
                                We are dedicated to building long-term relationships that result in meaningful digital transformation and business excellence.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white text-[10px]">
                                        <Check size={12} />
                                    </div>
                                    <span className="font-medium text-sm">Strategic Tech Partnerships</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white text-[10px]">
                                        <Check size={12} />
                                    </div>
                                    <span className="font-medium text-sm">Industry Best Practices</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-6 bg-blue-50/80 rounded-[40px] -z-10 transform -rotate-1" />
                            <img 
                                src="https://i.postimg.cc/hKF5yZvc/4.jpg" 
                                alt="Fradynex Team" 
                                className="rounded-[32px] shadow-2xl w-full object-cover aspect-[4/3] relative z-10"
                            />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div>
                                <h4 className="text-[#0056b3] font-bold uppercase tracking-[0.2em] text-[10px] mb-4">OUR STORY</h4>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0056b3] leading-tight">
                                    A Journey of Innovation
                                </h2>
                            </div>
                            <div className="space-y-6 text-black leading-relaxed text-base">
                                <p>
                                    Founded in 2025, Fradynex began with a clear mission: to deliver world-class software solutions and IT consultancy to businesses in Kenya and beyond. We're a fresh, dynamic team passionate about leveraging technology to solve real business challenges.
                                </p>
                                <p>
                                    From day one, we've focused on quality, innovation, and building lasting partnerships with our clients. Our approach combines modern development methodologies with deep industry knowledge to deliver solutions that truly make a difference.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0056b3]">Meet the Experts</h2>
                        <p className="text-black text-sm">The brilliant minds driving the Fradynex vision.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, idx) => (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="text-center group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                            >
                                <div className="relative overflow-hidden rounded-full w-32 h-32 mx-auto mb-6 bg-[#002147] flex items-center justify-center text-white text-3xl font-black shadow-lg transition-transform duration-500 group-hover:scale-110">
                                    {getInitials(member.name)}
                                </div>
                                <div className="flex items-center justify-center gap-4 mb-2">
                                    <h4 className="text-xl font-bold text-[#0056b3]">{member.name}</h4>
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-[#0077b5] rounded-sm flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-sm" title={`Connect with ${member.name} on LinkedIn`}>
                                        <Linkedin size={14} fill="white" strokeWidth={0} />
                                    </a>
                                </div>
                                <p className="text-[#0056b3] font-bold text-sm mb-4">{member.role}</p>
                                <p className="text-black text-sm leading-relaxed">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h4 className="text-[#0056b3] font-bold uppercase tracking-[0.2em] text-[10px] mb-3">OUR VALUES</h4>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0056b3]">What Drives Us</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((val, idx) => (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-[#f8f9fa] p-10 rounded-[32px] border border-gray-50 shadow-sm hover:shadow-md transition-shadow group h-full flex flex-col"
                            >
                                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white mb-8 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300">
                                    {val.icon}
                                </div>
                                <h3 className="text-xl font-extrabold text-[#0056b3] mb-4">{val.title}</h3>
                                <p className="text-black text-sm leading-relaxed">{val.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expertise List */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h3 className="text-[#0056b3] font-bold uppercase tracking-[0.2em] text-xs mb-3">CAPABILITIES</h3>
                        <h2 className="text-4xl font-bold text-[#0056b3]">Core Expertise</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {expertise.map((item, idx) => (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                className="bg-white px-6 py-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 group hover:border-[#0056b3] transition-all"
                            >
                                <div className="shrink-0 text-[#0056b3] group-hover:scale-110 transition-transform">
                                    <Check size={18} />
                                </div>
                                <span className="text-black text-sm">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-[#002147] via-[#003d82] to-[#0056b3] text-center text-white relative overflow-hidden">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto px-4 relative z-10"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Let's Build Something Great Together</h2>
                    <p className="text-base text-blue-100/80 mb-10 max-w-2xl mx-auto">Partner with a team that's committed to your success.</p>
                    <div className="flex justify-center">
                        <Link to="/contact" className="bg-white text-[#0056b3] px-8 py-3 rounded-xl font-bold text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-blue-50 transition-all shadow-xl group">
                            Get Started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default About;
