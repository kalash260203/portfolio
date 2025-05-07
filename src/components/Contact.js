import React, { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent successfully!');
  };

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

    const contactSection = contactRef.current;
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <h2 className="contact-title">Send me a message!</h2>
        <p className="contact-subtitle">Have any questions or proposals? just want to say hello? Please do <span role="img" aria-label="smile">😊</span>.</p>
      </div>

      <div className="contact-content section-wrapper" ref={contactRef}>
        <div className="contact-form-container">
          <div className="contact-image">
            <img src="/img/contact.png" alt="Contact" className="contact-illustration" />
          </div>

          <div className="social-links">
          <a href="https://github.com/kalash260203" target="_blank" rel="noopener noreferrer" className="social-link">
            <div className="hexagon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="hexagon-icon" />
            </div>
          </a>
          <a href="mailto:kalash26020@gmail.com" className="social-link">
            <div className="hexagon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Email" className="hexagon-icon" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/kalash-singh-940961200/" target="_blank" rel="noopener noreferrer" className="social-link">
            <div className="hexagon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="hexagon-icon" />
            </div>
          </a>
        </div>
        <div>
          <p className="contact-subtitle">Or send me a message:</p>
        </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="form-submit-btn">SEND</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;