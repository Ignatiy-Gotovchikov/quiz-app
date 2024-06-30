import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CircularLoader from '../../../shared/ui/CircularLoader/CircularLoader';
import { getAnswers } from '../../../shared/utils/storage';
import Papa from 'papaparse';
import styles from './LoadingPage.module.scss';

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);
  const [csvBlob, setCsvBlob] = useState<Blob | null>(null);
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const answers = getAnswers();
    const csv = Papa.unparse(answers);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    setCsvBlob(blob);
  }, []);

  useEffect(() => {
    if (csvBlob) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 100) {
            return prevProgress + 1;
          } else {
            clearInterval(interval);
            setShouldNavigate(true);
            return 100;
          }
        });
      }, 5);
      return () => clearInterval(interval);
    }
  }, [csvBlob]);

  useEffect(() => {
    if (shouldNavigate) {
      navigate('/email');
    }
  }, [shouldNavigate, navigate]);

  return (
    <div className={styles.loadingPage}>
      <CircularLoader progress={progress} message="Finding collections for you..." />
    </div>
  );
};

export default LoadingPage;
