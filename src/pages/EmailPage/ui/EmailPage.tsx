import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../../../shared/ui/Title/Title';
import SubTitle from '../../../shared/ui/SubTitle/SubTitle';
import EmailInput from '../../../shared/ui/EmailInput/EmailInput';
import NextButton from '../../../shared/ui/NextButton/NextButton';
import styles from './EmailPage.module.scss';
import { useTranslation } from 'react-i18next';
import { saveAnswer } from '../../../shared/utils/storage';

const EmailPage: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const handleNextClick = () => {
    if (isValid) {
      saveAnswer({
        id: 6,
        title: 'email',
        type: 'email',
        answer: email,
      });
      navigate('/results');
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className={styles.emailPage}>
      <Title text={t('emailTitle')} />
      <SubTitle text={t('emailSubtitle')} />
      <EmailInput placeholder={t('yourEmail')} onChange={handleEmailChange} />
      <SubTitle
        text={t('agreementText')}
        spanElement={['Privacy policy', 'Terms of use']}
      />
      <NextButton className={styles.nextButton} onClick={handleNextClick} disabled={!isValid} />
    </div>
  );
};

export default EmailPage;

