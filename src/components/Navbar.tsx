import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#002147] shadow-2xl py-1' : 'bg-[#002147]/95 py-3 border-b border-blue-900/30'}`}>
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10">
                <div className="flex justify-between items-center h-20 md:h-24">
                    <Link to="/" className="flex items-center group shrink-0">
                        <img 
                            src="https://i.postimg.cc/HsLctn32/Clear-large-fradynex-logo-removebg-preview.png" 
                            alt="Fradynex Logo" 
                            className="h-16 md:h-24 w-auto object-contain"
                            referrerPolicy="no-referrer"
                        />
                    </Link>

                    <div className="hidden md:flex flex-1 justify-center items-center space-x-6 lg:space-x-10">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-base lg:text-lg font-bold tracking-wide transition-all duration-300 relative py-2 outline-none ${location.pathname === link.path
                                    ? 'text-[#00d1ff]'
                                    : 'text-white hover:text-[#00d1ff]'}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4 shrink-0">
                        <Link to="/contact" className="bg-[#0056b3] text-white px-6 py-2.5 rounded-xl text-xs font-bold tracking-widest hover:bg-[#00d1ff] hover:text-[#002147] transition-all transform hover:scale-105 active:scale-95 shadow-lg border border-white/10">
                            Get Started
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center pr-2">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-white hover:text-[#00d1ff] focus:outline-none transition-colors">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'} overflow-hidden bg-[#002147] border-t border-blue-900/50`}>
                <div className="px-4 pt-4 pb-10 space-y-1 text-center">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-3 text-lg font-bold rounded-xl transition-all ${location.pathname === link.path
                                ? 'bg-blue-900/50 text-white'
                                : 'text-blue-100/70 hover:text-white hover:bg-blue-900/30'}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-6 px-4">
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center bg-[#0056b3] text-white py-3.5 rounded-xl text-base font-bold shadow-lg">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
