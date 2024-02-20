import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.svg';

function Footer() {
    return (
        <footer className="flex justify-center bg-[#0e141b]">
            <div className="md:w-2/3 w-11/12 mx-auto flex items-center justify-between p-2">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-28 h-28" />
                </Link>
                <div className="ml-auto flex items-center">
                    <a href="https://github.com/your-github-profile">
                        <FontAwesomeIcon icon={faGithub} className="border border-[#ADA7AD] text-[#ADA7AD] rounded p-2 w-5 h-5  hover:text-[#ff5277] hover:border-[#ff5277] transition duration-300 hover:scale-110 mr-4" />
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faLinkedin} className="border border-[#ADA7AD] text-[#ADA7AD] rounded p-2 w-5 h-5 hover:text-[#ff5277] hover:border-[#ff5277] transition duration-300 hover:scale-110" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
