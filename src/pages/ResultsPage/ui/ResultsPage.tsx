import { useNavigate } from 'react-router-dom';
import { saveAs } from 'file-saver';
import Title from '../../../shared/ui/Title/Title';
import SubTitle from '../../../shared/ui/SubTitle/SubTitle';
import { getAnswers, clearStorage } from '../../../shared/utils/storage';
import checkmark from '../../../../public/checkmark.png'; 
import styles from './ResultsPage.module.scss';
import { useTranslation } from 'react-i18next';
import Papa from 'papaparse';

const ResultsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleDownloadClick = () => {
    const answers = getAnswers();
    const csv = Papa.unparse(answers);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'answers.csv');
  };

  const handleRetakeClick = () => {
    clearStorage();
    navigate('/quiz/1');
  };

  return (
    <div className={styles.resultsPage}>
      <Title text={t('thankYouTitle')} />
      <SubTitle text={t('thankYouSubtitle')} />
      <img src={checkmark} alt="Checkmark" className={styles.checkmark} />
      <button onClick={handleDownloadClick} className={styles.downloadButton}>
        {t('downloadAnswers')}
      </button>
      <button onClick={handleRetakeClick} className={styles.retakeButton}>
        {t('retakeQuiz')}
      </button>
    </div>
  );
};

export default ResultsPage;
