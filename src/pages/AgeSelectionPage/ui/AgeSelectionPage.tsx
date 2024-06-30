import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Title from '../../../shared/ui/Title/Title';
import { saveAnswer } from '../../../shared/utils/storage';
import styles from './AgeSelectionPage.module.scss';
import QuestionItem from '../../../shared/ui/QuestionItem/QuestionItem';

interface AgeSelectionPageProps {
  setCurrentQuestion: (question: number) => void;
}

const AgeSelectionPage = ({ setCurrentQuestion }: AgeSelectionPageProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentQuestion(3);
  }, [setCurrentQuestion]);

  const handleAnswer = (answer: string) => {
    saveAnswer({
      id: 3,
      title: t('ageTitle'),
      type: 'single-select',
      answer: answer,
    });
    navigate('/quiz/4');
  };

  return (
    <div className={styles.ageSelectionPage}>
      <Title text={t('ageTitle')} />
      <div className={styles.questionsList}>
        <QuestionItem text={t('age18_29')} onClick={() => handleAnswer(t('age18_29'))} />
        <QuestionItem text={t('age30_39')} onClick={() => handleAnswer(t('age30_39'))} />
        <QuestionItem text={t('age40_49')} onClick={() => handleAnswer(t('age40_49'))} />
        <QuestionItem text={t('age50_plus')} onClick={() => handleAnswer(t('age50_plus'))} />
      </div>
    </div>
  );
};

export default AgeSelectionPage;
