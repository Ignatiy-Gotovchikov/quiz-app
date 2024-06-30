import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Title from '../../../shared/ui/Title/Title';
import { MultipleSelect } from '../../../features';
import NextButton from '../../../shared/ui/NextButton/NextButton';
import { saveAnswer } from '../../../shared/utils/storage';
import styles from './HateSelectionPage.module.scss';

interface HateSelectionPageProps {
  setCurrentQuestion: (question: number) => void;
}

const HateSelectionPage= ({ setCurrentQuestion }: HateSelectionPageProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    setCurrentQuestion(4);
  }, [setCurrentQuestion]);

  const handleNextClick = () => {
    saveAnswer({
      id: 4,
      title: t('hateTitle'),
      type: 'multiple-select',
      answer: selectedOptions.join(', '),
    });
    navigate('/quiz/5');
  };

  return (
    <div className={styles.hateSelectionPage}>
      <Title text={t('hateTitle')} spanElement="hate" />
      <MultipleSelect
        options={[
          { id: '1', label: t('hateOption1') },
          { id: '2', label: t('hateOption2') },
          { id: '3', label: t('hateOption3') },
          { id: '4', label: t('hateOption4') }
        ]}
        onSelect={setSelectedOptions}
      />
      <NextButton onClick={handleNextClick} disabled={selectedOptions.length === 0} />
    </div>
  );
};

export default HateSelectionPage;
