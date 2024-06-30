
import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  progress: number;
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar = ({ progress, currentQuestion, totalQuestions }: ProgressBarProps) => {
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.questionCounter}>
        <span className={styles.currentQuestion}>{currentQuestion}</span>/{totalQuestions}
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressBarFill} style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
