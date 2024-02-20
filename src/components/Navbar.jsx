import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="flex justify-center bg-[#0e141b]">
            <div className="md:w-2/3 w-11/12 mx-auto flex items-center justify-between p-2">
                <NavLink to="/">
                    <img src={logo} alt="logo" className="w-28 h-28" />
                </NavLink>
                <div className="ml-auto text-lg flex items-center text-[#ADA7AD]">
                    <div className="sm:hidden">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                    <div className={`sm:flex ${isOpen ? 'flex' : 'hidden'} sm:items-center`}>
                        <NavLink to="/" className={`mr-5 transition duration-300 hover:scale-110 ${location.pathname === '/' ? 'text-[#ff5277]' : ''}`}>Home</NavLink>
                        <NavLink to="/projects" className={`mr-5 transition duration-300 hover:scale-110 ${location.pathname === '/projects' ? 'text-[#ff5277]' : ''}`}>Projects</NavLink>
                        <NavLink to="/contact" className={`transition duration-300 hover:scale-110 ${location.pathname === '/contact' ? 'text-[#ff5277]' : ''}`}>Contact</NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
