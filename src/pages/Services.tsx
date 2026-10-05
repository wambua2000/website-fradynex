import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2, ChevronRight, X, ArrowRight, Info, Smartphone, Cloud, Shield, Database, BarChart3, Settings, Zap, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const Services = () => {
    const [selectedService, setSelectedService] = useState<any>(null);

    const additionalServices = [
        { icon: <Smartphone size={24} />, title: 'Mobile Development', desc: 'Native and cross-platform mobile applications for iOS and Android' },
        { icon: <Cloud size={24} />, title: 'Cloud Services', desc: 'Scalable cloud infrastructure, migration, and management' },
        { icon: <Shield size={24} />, title: 'Cybersecurity', desc: 'Comprehensive security solutions to protect your digital assets' },
        { icon: <Database size={24} />, title: 'Data Management', desc: 'Database design, optimisation, and data warehouse solutions' },
        { icon: <BarChart3 size={24} />, title: 'Analytics & BI', desc: 'Turn your data into actionable insights with advanced analytics' },
        { icon: <Settings size={24} />, title: 'DevOps', desc: 'Continuous integration and deployment for faster delivery' },
        { icon: <Zap size={24} />, title: 'Performance', desc: 'System optimisation and performance enhancement services' },
        { icon: <Layers size={24} />, title: 'Integration', desc: 'Seamless integration of systems, APIs, and third-party services' },
    ];

    const methodologySteps = [
        { step: '01', title: 'Discovery', desc: 'We begin by understanding your business, goals, and challenges through detailed consultation.' },
        { step: '02', title: 'Strategy', desc: 'Our team develops a comprehensive strategy and technical roadmap tailored to your needs.' },
        { step: '03', title: 'Development', desc: 'We build your solution using agile methodologies, ensuring transparency and flexibility.' },
        { step: '04', title: 'Testing', desc: 'Rigorous testing and quality assurance ensure robust, reliable solutions.' },
        { step: '05', title: 'Delivery', desc: 'Seamless deployment to production with comprehensive documentation.' },
        { step: '06', title: 'Support', desc: 'Ongoing maintenance, support, and optimisation to ensure continued success.' },
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-[#002147] min-h-[500px] flex items-center text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px]" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
                            Our <span className="text-[#00d1ff]">Services</span>
                        </h1>
                        <p className="text-base md:text-lg text-blue-100 leading-relaxed font-light">
                            We provide end-to-end technology solutions that drive business efficiency, scalability, and innovation. From concept to deployment, we are your partner in growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Services Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-[#0056b3] font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Enterprise Solutions</h2>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0056b3]">Choose a Service to Explore</h3>
                    </motion.div>
 
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {SERVICES.map((service) => (
                            <div 
                                key={service.id}
                                onClick={() => setSelectedService(service)}
                                className="group cursor-pointer bg-gray-50 rounded-[32px] p-10 transition-all duration-500 hover:bg-[#0056b3] hover:shadow-2xl hover:-translate-y-4 border border-gray-100"
                            >
                                <div className="mb-8 p-4 bg-white rounded-2xl w-max shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                    {React.cloneElement(service.icon as React.ReactElement, { className: "w-10 h-10 transition-colors" })}
                                </div>
                                <h4 className="text-xl font-black text-[#0056b3] group-hover:text-white transition-colors mb-4">{service.title}</h4>
                                <p className="text-black group-hover:text-blue-50 transition-colors mb-8 leading-relaxed text-sm">{service.description}</p>
                                <div className="flex items-center gap-2 text-[#0056b3] font-bold text-sm group-hover:text-white transition-colors">
                                    View Details <Info size={16} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-[#0056b3] font-bold uppercase tracking-[0.2em] text-[10px] mb-3">SPECIALISED SOLUTIONS</h2>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0056b3] mb-4">Additional Services</h3>
                        <p className="text-black text-sm opacity-80">Complementary expertise to meet your specific needs</p>
                    </motion.div>
 
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {additionalServices.map((service, idx) => (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                            >
                                <div className="w-12 h-12 bg-[#f0f7ff] text-[#0056b3] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0056b3] group-hover:text-white transition-all">
                                    {service.icon}
                                </div>
                                <h4 className="text-xl font-bold text-[#0056b3] mb-3">{service.title}</h4>
                                <p className="text-black text-sm leading-relaxed opacity-80">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Modal */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-[#002147]/80 backdrop-blur-md"
                            onClick={() => setSelectedService(null)}
                        />
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[40px] shadow-2xl relative z-10 overflow-hidden flex flex-col lg:flex-row"
                        >
                            <button 
                                onClick={() => setSelectedService(null)}
                                className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-500 transition-all z-20"
                            >
                                <X size={24} />
                            </button>

                            <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                                <img src={selectedService.image} alt={selectedService.title} className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/60 to-transparent" />
                                <div className="absolute bottom-10 left-10 text-white">
                                    <div className="bg-[#0056b3] p-3 rounded-2xl w-max mb-4">
                                        {React.cloneElement(selectedService.icon as React.ReactElement, { className: "w-6 h-6 text-white" })}
                                    </div>
                                    <h2 className="text-2xl font-black">{selectedService.title}</h2>
                                </div>
                            </div>

                            <div className="lg:w-3/5 p-8 sm:p-12 overflow-y-auto">
                                <div className="mb-10">
                                    <h3 className="text-[#0056b3] font-bold uppercase tracking-widest text-[10px] mb-4">Service Overview</h3>
                                    <p className="text-black text-base leading-relaxed mb-6">{selectedService.longDescription}</p>
                                </div>
 
                                <div className="mb-10">
                                    <h3 className="text-[#0056b3] font-bold uppercase tracking-widest text-[10px] mb-6">Key Benefits</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {selectedService.benefits?.map((benefit: string, bIdx: number) => (
                                            <div key={bIdx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                                <CheckCircle2 className="text-[#0056b3] w-4 h-4 flex-shrink-0 mt-1" />
                                                <span className="text-black text-xs leading-relaxed">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t border-gray-100">
                                    <Link to="/contact" className="bg-[#0056b3] text-white px-8 py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 hover:bg-[#004494] transition-all shadow-xl shadow-blue-600/20">
                                        Request a Quote <ArrowRight size={18} />
                                    </Link>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Related Case Study</span>
                                        <Link to="/portfolio" className="text-[#0056b3] font-bold text-sm hover:underline flex items-center gap-1">
                                            {selectedService.caseStudy} <ChevronRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Methodology Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h3 className="text-[#0056b3] font-bold uppercase tracking-widest text-[10px] mb-3">Our Methodology</h3>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0056b3]">How We Deliver Excellence</h2>
                    </motion.div>
 
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {methodologySteps.map((s, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm relative group hover:shadow-xl transition-all overflow-hidden">
                                <div className="absolute top-4 right-8 text-8xl font-black text-gray-50 group-hover:text-blue-50 transition-colors pointer-events-none select-none">
                                    {s.step}
                                </div>
                                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center font-bold text-lg mb-8 relative z-10">
                                    {s.step}
                                </div>
                                <div className="relative z-10">
                                    <h4 className="text-2xl font-bold text-[#0056b3] mb-4">{s.title}</h4>
                                    <p className="text-black leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-r from-[#003d82] to-[#0056b3] text-center text-white relative overflow-hidden">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto px-4 relative z-10"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
                    <p className="text-base text-blue-100/80 mb-12 max-w-3xl mx-auto">Let's discuss how our services can help you achieve your business goals.</p>
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

export default Services;
