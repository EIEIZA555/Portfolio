import styles from './TranscriptStyles.module.css';
import TranscriptCard from '../../common/TranscriptCard';

// Import your transcript PDF here
import transcriptPdf from '../../assets/transcript.pdf'; // <-- Place your PDF in assets folder

function Transcript() {
  return (
    <section id="transcript" className={styles.container}>
      <h1 className="sectionTitle">Transcript</h1>
      <div className={styles.transcriptContainer}>
        <TranscriptCard pdf={transcriptPdf} alt="My Transcript" />
      </div>
    </section>
  );
}

export default Transcript;