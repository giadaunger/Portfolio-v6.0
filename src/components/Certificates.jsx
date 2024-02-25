import React, { useState, useEffect } from 'react';
import cc1 from '../assets/cc1.png';
import cc2 from '../assets/cc2.png';
import cc3 from '../assets/cc3.png';
import cc4 from '../assets/cc4.png';
import cc5 from '../assets/cc5.png';
import cc6 from '../assets/cc6.png';
import cc7 from '../assets/cc7.png';
import cc8 from '../assets/cc8.png';
import cc9 from '../assets/cc9.png';
import cc10 from '../assets/cc10.png';
import cc11 from '../assets/cc11.png';
import cc12 from '../assets/cc12.png';
import cc13 from '../assets/cc13.png';
import cc14 from '../assets/cc14.png';

const images = [cc1, cc2, cc3, cc4, cc5, cc6, cc7, cc8, cc9, cc10, cc11, cc12, cc13, cc14];

function Certificates() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 3000); // Change image every 3 seconds (adjust as needed)

        return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount
    }, []); // Run effect only once on component mount

    const handlePrev = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div>
            <img className="mx-auto" src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
            <div className="mx-auto text-center mt-5">
                <p>{`${currentImage} / ${images.length}`}</p>
                <button className="border border-[#ADA7AD] text-[#ADA7AD] hover:text-[#ff5277] hover:border-[#ff5277] transition duration-300 hover:scale-110 px-4 py-2 rounded-md m-2" onClick={handlePrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>

                </button>
                <button className="border border-[#ADA7AD] text-[#ADA7AD] hover:text-[#ff5277] hover:border-[#ff5277] transition duration-300 hover:scale-110 px-4 py-2 rounded-md m-2" onClick={handleNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>

    );
}

export default Certificates;
