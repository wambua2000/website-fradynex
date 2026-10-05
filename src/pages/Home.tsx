import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SERVICES, WHY_CHOOSE_US, TECHNOLOGY_PARTNERS } from '../constants';
import { motion } from 'motion/react';

const Home = () => {
    const stats = [
        { value: '50+', label: 'Projects Delivered' },
        { value: '30+', label: 'Happy Clients' },
        { value: '15+', label: 'Expert Engineers' },
        { value: '24/7', label: 'Support' },
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920" alt="Digital Transformation" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#002147]/95 via-[#002147]/70 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl pt-20"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
                            AI-Driven Innovation for Smarter Digital Solutions
                        </h1>
                        <p className="text-base text-blue-100/80 mb-10 leading-relaxed max-w-xl">
                            We combine AI and advanced software engineering to build intelligent systems, predictive insights, and automated workflows that scale your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="bg-[#0056b3] text-white px-8 py-3 rounded-xl font-bold text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-[#004494] transition-all shadow-xl">
                                Get Started <ArrowRight size={16} />
                            </Link>
                            <Link to="/services" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-xl font-bold text-xs tracking-widest hover:bg-white/20 transition-all text-center">
                                Our Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-[#0056b3] py-14 md:py-16 shadow-inner">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 text-center text-white">
                        {stats.map((stat, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center justify-center"
                            >
                                <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 tracking-tight">{stat.value}</span>
                                <span className="text-blue-50 text-[9px] md:text-[10px] font-semibold tracking-widest opacity-80 uppercase">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-[#0056b3] font-bold tracking-widest uppercase text-[10px] mb-3">Enterprise Expertise</h2>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0056b3] mb-6">Solutions Built for Impact</h3>
                        <p className="text-black max-w-2xl mx-auto text-sm md:text-base">We provide cutting-edge technology services designed to help your business thrive in the digital age.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {SERVICES.map((service, idx) => (
                            <motion.div 
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl transition-all relative overflow-hidden"
                            >
                                <div className="mb-6">{service.icon}</div>
                                <h4 className="text-xl font-bold text-[#0056b3] mb-4 transition-colors">{service.title}</h4>
                                <p className="text-black leading-relaxed mb-8 text-sm">{service.description}</p>
                                <Link to="/services" className="flex items-center gap-2 text-[#0056b3] font-bold text-sm hover:gap-4 transition-all">
                                    Learn More <ChevronRight size={16} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-[#0056b3] font-bold tracking-widest uppercase text-[10px] mb-3">The Fradynex Edge</h2>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#0056b3] mb-8 leading-tight">Why Corporate Partners Choose Us</h3>
                            <p className="text-black mb-10 text-base">Our commitment to excellence and innovation ensures that your project is delivered to the highest industry standards.</p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {WHY_CHOOSE_US.map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-[#0056b3]/10 rounded-lg flex items-center justify-center text-[#0056b3]">
                                            {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#0056b3] mb-1 text-sm">{item.title}</h5>
                                            <p className="text-black text-xs leading-relaxed opacity-90">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <div className="relative">
                            <img src="https://i.postimg.cc/hDRYwzhs/360-F-493392745-TBWKc-O8i8dt7Ya-O7w-RQtbk50qjk-SHuq4.jpg" alt="Expertise" className="rounded-3xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-[#0056b3] font-bold tracking-[0.2em] uppercase text-[10px] mb-3">TECHNOLOGIES</h2>
                        <h3 className="text-3xl md:text-4xl font-black text-[#0056b3]">Powered by Leading Tech</h3>
                    </motion.div>
 
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                        {TECHNOLOGY_PARTNERS.map((partner, idx) => (
                            <div key={idx} className="flex flex-col items-center group">
                                <div className="bg-white w-full aspect-square rounded-[32px] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] border border-gray-100 flex items-center justify-center p-6 mb-6 transition-all duration-500 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] group-hover:-translate-y-2">
                                    <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100" />
                                </div>
                                <span className="text-black text-xs md:text-sm tracking-tight text-center">{partner.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-[#003d82] to-[#0056b3] text-center text-white relative overflow-hidden">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto px-4 relative z-10"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-base text-blue-100/80 mb-12 max-w-3xl mx-auto">Let's discuss how we can help you achieve your technology goals and drive innovation in your organisation.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact" className="bg-white text-[#0056b3] px-8 py-3 rounded-xl font-bold text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-blue-50 transition-all shadow-xl">
                            Get Started <ArrowRight size={16} />
                        </Link>
                        <Link to="/portfolio" className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold text-xs tracking-widest hover:bg-white/10 transition-all">
                            View Our Work
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
