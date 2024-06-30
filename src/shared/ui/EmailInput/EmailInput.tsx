import React, { useState } from 'react';
import styles from './EmailInput.module.scss';

interface EmailInputProps {
  placeholder: string;
  onChange: (value: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ placeholder, onChange }) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
    setIsValid(e.target.validity.valid);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type="email"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`${styles.emailInput} ${!isValid ? styles.invalid : ''}`}
        required
      />
      {!isValid && isFocused && <div className={styles.errorText}>Invalid email</div>}
    </div>
  );
};

export default EmailInput;
