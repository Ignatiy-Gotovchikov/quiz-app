import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Title from '../../../shared/ui/Title/Title';
import SubTitle from '../../../shared/ui/SubTitle/SubTitle';
import { Bubble } from '../../../features';
import NextButton from '../../../shared/ui/NextButton/NextButton';
import { saveAnswer } from '../../../shared/utils/storage';
import styles from './FavoriteTopicsPage.module.scss';

interface FavoriteTopicsPageProps {
  setCurrentQuestion: (question: number) => void;
}

const FavoriteTopicsPage = ({ setCurrentQuestion }: FavoriteTopicsPageProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    setCurrentQuestion(5);
  }, [setCurrentQuestion]);

  const handleNextClick = () => {
    saveAnswer({
      id: 5,
      title: t('favoriteTopicsTitle'),
      type: 'bubble',
      answer: selectedOptions.join(', '),
    });
    navigate('/loading');
  };

  return (
    <div className={styles.favoriteTopicsPage}>
      <Title text={t('favoriteTopicsTitle')} />
      <SubTitle text={t('favoriteTopicsSubtitle')} />
      <Bubble
        options={[
          { id: '1', label: t('werewolf'), emoji: '🐺' },
          { id: '2', label: t('romance'), emoji: '🥰' },
          { id: '3', label: t('action'), emoji: '💃' },
          { id: '4', label: t('youngAdult'), emoji: '💁‍♀️' },
          { id: '5', label: t('royalObsession'), emoji: '👑' },
          { id: '6', label: t('badBoy'), emoji: '🤠' },
          { id: '7', label: t('billionaire'), emoji: '🤑' }
        ]}
        maxSelection={3}
        onSelect={setSelectedOptions}
      />
      <NextButton onClick={handleNextClick} disabled={selectedOptions.length === 0} />
    </div>
  );
};

export default FavoriteTopicsPage;
