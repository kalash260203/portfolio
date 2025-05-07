import React, { useState, useEffect, useRef, useMemo } from 'react';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const heroRef = useRef(null);

    const phrases = useMemo(() => [
        'Full Stack Developer',
        'UI/UX Designer',
        'Problem Solver',
        'Tech Enthusiast',
        'Web Developer'
    ], []);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const typingSpeed = 100; // Speed for typing each character
    const deletingSpeed = 100; // Speed for deleting each character
    const delayBetweenPhrases = 1000; // Pause when phrase is complete

    // Typing effect
    useEffect(() => {
        let timer;
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            timer = setTimeout(() => {
                setDisplayText(currentPhrase.substring(0, displayText.length - 1));
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setPhraseIndex((prev) => (prev + 1) % phrases.length);
                }
            }, deletingSpeed);
        } else {
            timer = setTimeout(() => {
                setDisplayText(currentPhrase.substring(0, displayText.length + 1));
                if (displayText.length === currentPhrase.length) {
                    setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
                }
            }, typingSpeed);
        }

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, phraseIndex, phrases]);

    return (
        <section id="hero" className="hero" ref={heroRef}>
            <div className="hero-overlay"></div>
            <div className="title-container">
                <div className="hero-header">
                    <h1 className="hero-title">Welcome to My Portfolio</h1>
                </div>
                <div>
                    <div className="typing-text-container">
                      <p className="typing-text">I am a {displayText}<span className="cursor"></span></p>
                    </div>
                    <div className="button-group">
                        <a href="#about" className="btn btn-resume">Learn More</a>
                        <a href="#projects" className="btn btn-resume">Projects</a>
                        <a href="/resume.pdf" className="btn btn-resume" target="_blank" rel="noopener noreferrer">Resume</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;