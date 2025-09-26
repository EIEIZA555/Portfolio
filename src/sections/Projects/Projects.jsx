import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/EIEIZA555/proj-rag-v1"
          h3="Project RAG-AI(Frontend)"
          p="RAG App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/EIEIZA555/Wongnai_Cloning"
          h3="Wongnai Cloning"
          p="Wongnai app"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/EIEIZA555/work_webboard"
          h3="Webboard"
          p="Webboard webapp"
        />
      </div>
    </section>
  );
}

export default Projects;
