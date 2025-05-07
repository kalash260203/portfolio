import React, { useEffect, useRef } from 'react';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const aboutSection = aboutRef.current;
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content section-wrapper" ref={aboutRef}>
        <p>
          Motivated Fourth-year B.Tech student with strong analytical skills and a passion for technology,
          seeking opportunities to apply theoretical knowledge in practical, real-world projects. Proficient in
          programming, problem-solving, and collaborative teamwork.
        </p>

        <div className="education">
          <h3>Education</h3>
          <p>
            Bachelors in Computer Science Engineering | Chandigarh University | Session: 2021-2025<br />
            Intermediate (CBSE) | Kendriya Vidyalaya INS Mandovi | Percentage: 80.4%<br />
            Matriculation (CBSE) | Kendriya Vidyalaya INS Mandovi | Percentage: 82.40%
          </p>
        </div>

        <div className="additional-info">
          <h3>Additional Information</h3>
          <p>
            <strong>Languages:</strong> English, Hindi<br />
            <strong>Interests & Hobbies:</strong> Travelling, Reading, Football
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;