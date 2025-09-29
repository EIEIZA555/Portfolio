import styles from './AchievementStyles.module.css';
import AchievementCard from '../../common/AchievementCard';

// Import your achievement images
import achievement1 from '../../assets/achievement1.jpg';

function Achievement() {
  return (
    <section id="achievement" className={styles.container}>
      <h1 className="sectionTitle">Achievement</h1>
      <div className={styles.achievementContainer}>
        <AchievementCard
          image={achievement1}
          title="1st Place in Hackathon 2025 Tokio Marine"
          organization="FinTech"
          date="2025"
          description="Won 1st place in the prestigious Hackathon 2025 Tokio Marine, showcasing exceptional skills in innovation and teamwork."
        />
       
      </div>
    </section>
  );
}

export default Achievement;