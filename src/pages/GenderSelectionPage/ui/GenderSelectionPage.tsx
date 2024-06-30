import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Title from '../../../shared/ui/Title/Title';
import SubTitle from '../../../shared/ui/SubTitle/SubTitle';
import EmojiQuestionItem from '../../../shared/ui/EmojiQuestionItem/EmojiQuestionItem';
import { saveAnswer } from '../../../shared/utils/storage';
import styles from './GenderSelectionPage.module.scss';

interface GenderSelectionPageProps {
  setCurrentQuestion: (question: number) => void;
}

const GenderSelectionPage = ({ setCurrentQuestion }: GenderSelectionPageProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentQuestion(2);
  }, [setCurrentQuestion]);

  const handleAnswer = (answer: string) => {
    saveAnswer({
      id: 2,
      title: t('genderTitle'),
      type: 'single-select-image',
      answer: answer,
    });
    navigate('/quiz/3');
  };

  return (
    <div className={styles.genderSelectionPage}>
      <Title text={t('genderTitle')} />
      <SubTitle text={t('genderSubtitle')} />
      <div className={styles.questionsList}>
        <EmojiQuestionItem emoji="👩" text={t('female')} onClick={() => handleAnswer(t('female'))} />
        <EmojiQuestionItem emoji="👨" text={t('male')} onClick={() => handleAnswer(t('male'))} />
        <EmojiQuestionItem emoji="😉" text={t('other')} onClick={() => handleAnswer(t('other'))} />
      </div>
    </div>
  );
};

export default GenderSelectionPage;
