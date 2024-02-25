import React, { useState, useEffect } from 'react';
import '../textAnimation.css'

function TypingAnimation() {
  const [typedText, setTypedText] = useState('');
  const textToType = 'Giada Unger';
  const typingSpeed = 150; // Adjust typing speed as needed
  const delayBetweenAnimations = 3000; // Adjust delay between animations in milliseconds

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval;

    const startTypingAnimation = () => {
      typingInterval = setInterval(() => {
        setTypedText((prevText) => {
          if (currentIndex === textToType.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
              setTypedText('');
              currentIndex = 0;
              startTypingAnimation();
            }, delayBetweenAnimations);
            return prevText;
          }
          const nextChar = textToType[currentIndex];
          currentIndex++;
          return prevText + nextChar;
        });
      }, typingSpeed);
    };

    startTypingAnimation();

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="text-[#ff5277]">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        {typedText}
        <span className="animate-blink">|</span>
      </h1>
    </div>
  );
}

export default TypingAnimation;
