import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef(null);

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

    const skillsSection = skillsRef.current;
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  const skillsData = {
    programming: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
    ],
    tools: [
      { name: "Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "VirtualBox", icon: "/img/virtualbox_logo.png" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
    ],
    contentProduction: [
      { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
      { name: "Premiere Pro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg" },
      { name: "VN Video Editor", icon: "/img/vn.jpg" },
      { name: "Virtual DJ", icon: "/img/virtual-dj.png" }
    ]
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-header">
        <p className="skills-subtitle">TECHNICAL PROFICIENCIES</p>
        <h2 className="skills-title">Skills.</h2>
      </div>

      <div className="skills-content section-wrapper" ref={skillsRef}>
        <div className="skills-category">
          <div className="category-tag">&lt;programming&gt;</div>

          <div className="hexagon-grid">
            {skillsData.programming.map((skill, index) => (
              <div key={index} className="hexagon-item">
                <div className="hexagon">
                  <img src={skill.icon} alt={skill.name} className="hexagon-icon" />
                </div>
                <div className="hexagon-tooltip">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <div className="category-tag">&lt;itTools&gt;</div>

          <div className="hexagon-grid">
            {skillsData.tools.map((skill, index) => (
              <div key={index} className="hexagon-item">
                <div className="hexagon">
                  <img src={skill.icon} alt={skill.name} className="hexagon-icon" />
                </div>
                <div className="hexagon-tooltip">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <div className="category-tag">&lt;contentProduction&gt;</div>

          <div className="hexagon-grid">
            {skillsData.contentProduction.map((skill, index) => (
              <div key={index} className="hexagon-item">
                <div className="hexagon">
                  <img src={skill.icon} alt={skill.name} className="hexagon-icon" />
                </div>
                <div className="hexagon-tooltip">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;