import React, { useState } from 'react';
import cc1 from '../assets/cc1.png'
import cc2 from '../assets/cc2.png'
import cc3 from '../assets/cc3.png'
import cc4 from '../assets/cc4.png'
import cc5 from '../assets/cc5.png'
import cc6 from '../assets/cc6.png'
import cc7 from '../assets/cc7.png'
import cc8 from '../assets/cc8.png'
import cc9 from '../assets/cc9.png'
import cc10 from '../assets/cc10.png'
import cc11 from '../assets/cc11.png'
import cc12 from '../assets/cc12.png'
import cc13 from '../assets/cc13.png'
import cc14 from '../assets/cc14.png'

const images = [cc1, cc2, cc3, cc4, cc5, cc6, cc7, cc8, cc9, cc10, cc11, cc12, cc13, cc14];

function Certificates() {
    const [currentImage, setCurrentImage] = useState(0);

    const handlePrev = () => {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
  
    const handleNext = () => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    return (
        <div>
            <h1>CodeCademy Certificates</h1>

            <div>
                <button className="" onClick={handlePrev}>
                    Prev
                </button>
                <button className="text-black" onClick={handleNext}>
                    Next
                </button>
                <img className="mx-auto" src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
            </div>
        </div>
    );
}

export default Certificates;
