import React, { useState } from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/me.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import facebook from '../../assets/facebook.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [showPreview, setShowPreview] = useState(false);

  const themeIcon = theme === 'light' ? sun : moon;
  const facebookIcon = theme === 'light' ? facebook : facebook;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Apisit
          <br />
          Wongsatidwiroj
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://www.facebook.com/Tachibanav2/" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook icon" />
          </a>
          <a href="https://github.com/EIEIZA555" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern 
          React web apps for commercial
          businesses.
        </p>
        <div
          style={{ display: 'inline-block', position: 'relative' }}
          onMouseEnter={() => setShowPreview(true)}
          onMouseLeave={() => setShowPreview(false)}
        >
          <button className="hover">Resume</button>
          {showPreview && (
            <div
              style={{
                position: 'absolute',
                top: '110%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '350px',
                height: '500px',
                background: '#fff',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                borderRadius: '10px',
                zIndex: 100,
                overflow: 'hidden',
              }}
            >
              <iframe
                src={CV + '#toolbar=0'}
                title="Resume Preview"
                width="100%"
                height="100%"
                style={{ border: 'none', borderRadius: '10px' }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;