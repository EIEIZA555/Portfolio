import styles from './ProjectsStyles.module.css';
import ragai from '../../assets/ragaifront.png';
import flutter from '../../assets/flutter.png';
import webboard from '../../assets/webboard.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ragai}
          link="https://github.com/EIEIZA555/proj-rag-v1"
          h3="Project RAG-AI(Frontend)"
          p="RAG App"
        />
        <ProjectCard
          src={flutter}
          link="https://github.com/EIEIZA555/Wongnai_Cloning"
          h3="Wongnai Cloning"
          p="Wongnai app"
        />
        <ProjectCard
          src={webboard}
          link="https://github.com/EIEIZA555/work_webboard"
          h3="Webboard"
          p="Webboard webapp"
        />
      </div>
    </section>
  );
}

export default Projects;
