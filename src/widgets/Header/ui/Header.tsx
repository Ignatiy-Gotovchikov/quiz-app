import { useNavigate } from 'react-router-dom';
import ProgressBar from '../../../shared/ui/ProgressBar/ProgressBar';
import styles from './Header.module.scss';

interface HeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  setCurrentQuestion: (question: number) => void;
}

const Header = ({ currentQuestion, totalQuestions, setCurrentQuestion }: HeaderProps) => {
  const navigate = useNavigate();
  const progress = (currentQuestion / totalQuestions) * 100;

  const handleBackClick = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      navigate(`/quiz/${currentQuestion - 1}`);
    }
  };

  return (
    <div className={styles.header}>
      {currentQuestion > 1 && (
        <button className={styles.backButton} onClick={handleBackClick}>
          &lt;
        </button>
      )}
      <ProgressBar
        progress={progress}
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
      />
    </div>
  );
};

export default Header;
