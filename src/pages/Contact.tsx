import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '../constants';
import { motion } from 'motion/react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: SERVICES[0].title,
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! Our team will get back to you shortly.');
    };

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-[#002147] min-h-[500px] flex items-center text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
                            Let's Build the <span className="text-[#00d1ff]">Future</span>
                        </h1>
                        <p className="text-base md:text-lg text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
                            Get in Touch — Let’s Build Something Intelligent
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Contact Form */}
                        <div className="bg-gray-50 p-8 sm:p-12 rounded-[40px] shadow-sm border border-gray-100 h-max order-2 lg:order-1">
                            <div className="mb-10">
                                <h2 className="text-xl md:text-2xl font-bold text-[#0056b3] mb-4">Send Us a Message</h2>
                                <p className="text-black text-sm opacity-80">We respond to all enquiries within 24 hours.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold text-[#0056b3] uppercase tracking-widest ml-1">Full Name</label>
                                        <input 
                                            type="text" 
                                            required 
                                            placeholder="e.g. Joseph Kioko" 
                                            className="w-full bg-white border border-gray-200 px-6 py-3 rounded-2xl focus:ring-2 focus:ring-[#0056b3] focus:outline-none transition-all text-black text-xs"
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold text-[#0056b3] uppercase tracking-widest ml-1">Email Address</label>
                                        <input 
                                            type="email" 
                                            required 
                                            placeholder="joseph@example.com" 
                                            className="w-full bg-white border border-gray-200 px-6 py-3 rounded-2xl focus:ring-2 focus:ring-[#0056b3] focus:outline-none transition-all text-black text-xs"
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-[#0056b3] uppercase tracking-widest ml-1">Service Required</label>
                                    <select 
                                        className="w-full bg-white border border-gray-200 px-6 py-3 rounded-2xl focus:ring-2 focus:ring-[#0056b3] focus:outline-none transition-all appearance-none text-black text-xs"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    >
                                        {SERVICES.map((service) => (
                                            <option key={service.id} value={service.title}>
                                                {service.title}
                                            </option>
                                        ))}
                                        <option value="Other">Other / General Enquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-[#0056b3] uppercase tracking-widest ml-1">Project Details</label>
                                    <textarea 
                                        rows={6} 
                                        required 
                                        placeholder="Briefly describe your requirements..." 
                                        className="w-full bg-white border border-gray-200 px-6 py-3 rounded-2xl focus:ring-2 focus:ring-[#0056b3] focus:outline-none transition-all resize-none text-black text-xs"
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>

                                <button type="submit" className="w-full bg-[#0056b3] text-white py-3.5 rounded-2xl font-bold text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-[#002147] transition-all shadow-2xl shadow-blue-600/30">
                                    Start Conversation <Send size={16} />
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col justify-start order-1 lg:order-2">
                            <div className="mb-8">
                                <h2 className="text-xl md:text-2xl font-bold text-[#0056b3] mb-10">Connect With Us</h2>
                                <div className="bg-white rounded-[32px] border border-gray-100 shadow-xl shadow-blue-900/5 p-8 sm:p-10 space-y-10">
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-5 group">
                                            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#0056b3] group-hover:bg-[#0056b3] group-hover:text-white transition-all shrink-0">
                                                <Mail size={16} />
                                            </div>
                                            <a href={`mailto:${CONTACT_INFO.email}`} className="text-black text-xs md:text-sm hover:text-[#0056b3] transition-colors break-all">
                                                {CONTACT_INFO.email}
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-5 group">
                                            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#0056b3] group-hover:bg-[#0056b3] group-hover:text-white transition-all shrink-0">
                                                <Phone size={16} />
                                            </div>
                                            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-black text-xs md:text-sm hover:text-[#0056b3] transition-colors">
                                                {CONTACT_INFO.phone}
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-5 group">
                                            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#0056b3] group-hover:bg-[#0056b3] group-hover:text-white transition-all shrink-0">
                                                <MapPin size={16} />
                                            </div>
                                            <span className="text-black text-xs md:text-sm">
                                                {CONTACT_INFO.address}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-gray-100">
                                        <div className="bg-gray-50 rounded-2xl p-6">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
                                                    <Clock size={16} />
                                                </div>
                                                <h4 className="text-black uppercase tracking-widest text-[10px]">Office Hours</h4>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-black opacity-80">Monday – Friday</span>
                                                    <span className="text-black">9:00 AM – 5:00 PM</span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-black opacity-80">Weekends & Holidays</span>
                                                    <span className="text-red-500 font-bold px-3 py-1 bg-red-50 rounded-lg">Closed</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="bg-gray-100 rounded-[30px] overflow-hidden h-[300px] lg:h-[350px] relative shadow-inner border border-gray-200 mt-4">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">
                                    <div className="text-center">
                                        <MapPin size={48} className="mx-auto mb-2 opacity-20" />
                                        <p>Map Integration</p>
                                        <p className="text-xs font-normal">Nairobi, Kenya</p>
                                    </div>
                                </div>
                                <iframe 
                                    className="w-full h-full relative z-10 border-none grayscale hover:grayscale-0 transition-all duration-700"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.2616146051!2d36.8924!3d-1.221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f167e9f3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sKasarani%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1715766200000!5m2!1sen!2ske"
                                    loading="lazy"
                                    title="Fradynex Location Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
