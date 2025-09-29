import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

// Import technology logos
import htmlLogo from '../../assets/html5.svg';
import cssLogo from '../../assets/css.svg';
import jsLogo from '../../assets/javascript.svg';
import nodeLogo from '../../assets/nodejs.svg';
import reactLogo from '../../assets/react.svg';
import tailwindLogo from '../../assets/tailwindcss.svg';
import gitLogo from '../../assets/git.svg';
import bootstrapLogo from '../../assets/bootstrap.svg';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" logo={htmlLogo} />
        <SkillList src={checkMarkIcon} skill="CSS" logo={cssLogo} />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" logo={tailwindLogo} />
        <SkillList src={checkMarkIcon} skill="Bootstrap" logo={bootstrapLogo} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" logo={reactLogo} />
        <SkillList src={checkMarkIcon} skill="JavaScript" logo={jsLogo} />
        <SkillList src={checkMarkIcon} skill="Node" logo={nodeLogo} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git" logo={gitLogo} />
      </div>
    </section>
  );
}

export default Skills;