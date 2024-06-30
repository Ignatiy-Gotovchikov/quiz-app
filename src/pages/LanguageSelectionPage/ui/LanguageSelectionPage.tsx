import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Title from '../../../shared/ui/Title/Title';
import SubTitle from '../../../shared/ui/SubTitle/SubTitle';
import QuestionItem from '../../../shared/ui/QuestionItem/QuestionItem';
import { saveAnswer } from '../../../shared/utils/storage';
import styles from './LanguageSelectionPage.module.scss';

interface LanguageSelectionPageProps {
  setCurrentQuestion: (question: number) => void;
}

const LanguageSelectionPage = ({ setCurrentQuestion }: LanguageSelectionPageProps) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentQuestion(1);
  }, [setCurrentQuestion]);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    saveAnswer({
      id: 1,
      title: t('title'),
      type: 'single-select',
      answer: language,
    });
    navigate('/quiz/2');
  };

  return (
    <div className={styles.languageSelectionPage}>
      <Title text={t('title')} />
      <SubTitle text={t('subtitle')} />
      <div className={styles.questionsList}>
        <QuestionItem text={t('english')} onClick={() => changeLanguage('en')} />
        <QuestionItem text={t('french')} onClick={() => changeLanguage('fr')} />
        <QuestionItem text={t('german')} onClick={() => changeLanguage('de')} />
        <QuestionItem text={t('spanish')} onClick={() => changeLanguage('es')} />
      </div>
    </div>
  );
};

export default LanguageSelectionPage;

