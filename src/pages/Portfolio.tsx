import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Quote, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('All Projects');
    const filters = ['All Projects', 'Software Development', 'IT Consultancy', 'AI & Digital Solutions'];

    const filteredProjects = activeFilter === 'All Projects' 
        ? PROJECTS 
        : PROJECTS.filter(p => p.category === activeFilter);

    const testimonials = [
        { name: 'Frederick Kioko', company: 'Nature Hub Collective', quote: 'The level of technical expertise and professionalism at Fradynex is unmatched. They transformed our legacy systems beyond expectations.' },
        { name: 'Caroline Macharia', company: 'Ace Tech Foundation', quote: 'A truly collaborative partner. Their ability to understand our unique business needs and translate them into software is incredible.' },
        { name: 'Jimmy Nduati', company: 'Simulia', quote: 'Security and reliability were our top priorities. Fradynex delivered an enterprise platform that is both robust and highly scalable.' },
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-[#002147] min-h-[500px] flex items-center py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-[100px]" />
                </div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
                            Port<span className="text-white">folios</span>
                        </h1>
                        <p className="text-base md:text-lg text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
                            Explore how we leverage AI to deliver next-generation solutions. Each project demonstrates our commitment to innovation, quality, and performance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-12 bg-white sticky top-20 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {filters.map((filter) => (
                            <button 
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-8 py-3.5 rounded-xl font-black text-sm transition-all duration-300 shadow-sm ${activeFilter === filter 
                                    ? 'bg-[#0056b3] text-white shadow-lg shadow-blue-500/20' 
                                    : 'bg-white text-[#0056b3] border border-blue-100 hover:bg-blue-50'}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-24 bg-gray-50/50 min-h-[600px]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {filteredProjects.map((project) => (
                                <motion.div 
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-gray-100 flex flex-col group hover:shadow-2xl transition-all duration-500"
                                >
                                    <div className="h-64 relative overflow-hidden">
                                        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                        <div className="absolute bottom-8 left-8 right-8">
                                            <span className="text-[#00d1ff] font-bold text-[10px] uppercase tracking-widest mb-2 block">{project.category}</span>
                                            <h2 className="text-2xl font-bold text-white leading-tight">{project.title}</h2>
                                        </div>
                                    </div>
                                    <div className="p-8 md:p-12 flex flex-col justify-center flex-grow">
                                        <p className="text-black leading-relaxed text-base mb-8">{project.description}</p>
                                        
                                        <div className="mb-8">
                                            <h4 className="text-[#0056b3] font-black text-[10px] uppercase tracking-widest mb-5">Key Results:</h4>
                                            <ul className="space-y-4">
                                                {project.resultsList?.map((res, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" strokeWidth={3} />
                                                        <span className="text-black text-sm tracking-tight">{res}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-10 mt-auto">
                                            {project.tech.map(t => (
                                                <span key={t} className="px-4 py-1.5 bg-blue-50 text-[#0056b3] rounded-full text-[11px] font-bold border border-blue-100 uppercase tracking-tighter">{t}</span>
                                            ))}
                                        </div>

                                        <div className="pt-8 border-t border-gray-50">
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-black text-sm hover:text-blue-600 transition-all group/link">
                                                Visit Project Portal <ExternalLink size={18} strokeWidth={3} className="group-hover/link:translate-x-1 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-gray-400 text-lg">No projects found for this category yet.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Websites Developed Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-[#0056b3] font-bold uppercase tracking-widest text-[10px] mb-3">Digital Solutions</h2>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0056b3]">Websites Developed</h3>
                    </motion.div>
 
                    <div className="max-w-4xl mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 flex flex-col md:flex-row group hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                                    alt="Websites Developed" 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-8 left-8">
                                    <span className="text-blue-400 font-bold text-[10px] uppercase tracking-widest mb-2 block">DIGITAL SOLUTIONS</span>
                                    <h4 className="text-2xl font-bold text-white">Websites Developed</h4>
                                </div>
                            </div>
                            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                <p className="text-black text-base leading-relaxed mb-8">
                                    A collection of professional websites built for foundations and community organisations, focusing on accessibility, modern design, and storytelling.
                                </p>
                                <div className="space-y-4 mb-10">
                                    <h5 className="text-[#0056b3] font-black text-[10px] uppercase tracking-widest mb-4">PROJECTS DELIVERED:</h5>
                                    <a 
                                        href="https://sighttechfoundation.org/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-blue-50 transition-colors group/item"
                                    >
                                        <span className="text-black text-sm">1. Sight Tech Foundation</span>
                                        <ExternalLink size={16} className="text-blue-400 group-hover/item:translate-x-1 transition-transform" />
                                    </a>
                                    <a 
                                        href="https://swahilidharma.org/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-blue-50 transition-colors group/item"
                                    >
                                        <span className="text-black text-sm">2. Swahili Dharma</span>
                                        <ExternalLink size={16} className="text-blue-400 group-hover/item:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['REACT', 'TAILWIND CSS', 'WORDPRESS', 'CLOUD HOSTING'].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-blue-50 text-[#0056b3] border border-blue-100 rounded-lg text-[9px] font-bold tracking-tighter uppercase">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-[#002147]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-blue-300 font-bold uppercase tracking-widest text-[10px] mb-3">Client Success</h2>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">What Our Partners Say</h3>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-2xl shadow-xl relative group hover:-translate-y-2 transition-transform h-full flex flex-col">
                                <Quote className="absolute top-6 right-6 text-gray-100 group-hover:text-blue-50 transition-colors" size={60} />
                                <div className="relative z-10 flex flex-col h-full">
                                    <p className="text-gray-600 italic mb-8 leading-relaxed flex-grow">"{t.quote}"</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#0056b3] rounded-full flex items-center justify-center text-white font-bold shrink-0">
                                            {t.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 leading-tight">{t.name}</h5>
                                            <p className="text-[#0056b3] text-[10px] uppercase font-bold tracking-tight">{t.company}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your Success Story?</h2>
                    <p className="text-base text-blue-100/80 mb-10 max-w-2xl mx-auto">Let's create something remarkable together.</p>
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

export default Portfolio;
