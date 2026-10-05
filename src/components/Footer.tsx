import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_INFO } from '../constants';

const Footer = () => {
    return (
        <footer className="bg-[#001021] text-white pt-24 pb-12 border-t border-blue-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    <div className="space-y-8">
                        <Link to="/" className="inline-block">
                            <img 
                                src="https://i.postimg.cc/HsLctn32/Clear-large-fradynex-logo-removebg-preview.png" 
                                alt="Fradynex Logo" 
                                className="h-12 md:h-14 w-auto object-contain"
                                referrerPolicy="no-referrer"
                            />
                        </Link>
                        <p className="text-blue-100/70 leading-relaxed text-lg">
                            Accelerating innovation through AI-powered software engineering and intelligent digital transformation.
                        </p>
                        <div className="flex space-x-4">
                            {SOCIAL_LINKS.map((social, idx) => (
                                <a key={idx} href={social.url} className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center hover:bg-[#0056b3] transition-all transform hover:-translate-y-1">
                                    {React.cloneElement(social.icon as React.ReactElement, { size: 20 })}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-8 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-[#0056b3]">Explore</h3>
                        <ul className="space-y-5">
                            {NAV_LINKS.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="text-blue-100/60 hover:text-white transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 bg-[#0056b3] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-8 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-[#0056b3]">Get in Touch</h3>
                        <ul className="space-y-6 text-blue-100/60">
                            <li className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-blue-900 flex items-center justify-center group-hover:bg-[#0056b3] transition-colors">
                                    <Mail className="w-5 h-5 text-blue-400 group-hover:text-white" />
                                </div>
                                <span>{CONTACT_INFO.email}</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-blue-900 flex items-center justify-center group-hover:bg-[#0056b3] transition-colors">
                                    <Phone className="w-5 h-5 text-blue-400 group-hover:text-white" />
                                </div>
                                <span>{CONTACT_INFO.phone}</span>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-blue-900 flex items-center justify-center group-hover:bg-[#0056b3] transition-colors mt-1 shrink-0">
                                    <MapPin className="w-5 h-5 text-blue-400 group-hover:text-white" />
                                </div>
                                <span className="leading-relaxed">{CONTACT_INFO.address}</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-8 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-[#0056b3]">Newsletter</h3>
                        <p className="text-blue-100/60 mb-8 leading-relaxed">Stay ahead with our latest tech insights and enterprise updates.</p>
                        <form className="space-y-4">
                            <input type="email" placeholder="Email address" className="w-full bg-blue-900/50 border border-blue-800 text-white px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0056b3] text-sm" />
                            <button className="w-full bg-[#0056b3] hover:bg-[#004494] text-white py-4 rounded-xl font-bold transition-all">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-blue-900 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-blue-100/40 text-sm">
                    <p>&copy; {new Date().getFullYear()} Fradynex Limited. All rights reserved.</p>
                    <div className="flex gap-8">
                        <button className="hover:text-white transition-colors">Privacy Policy</button>
                        <button className="hover:text-white transition-colors">Terms of Service</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
