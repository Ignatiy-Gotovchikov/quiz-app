import styles from './NextButton.module.scss';

interface NextButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const NextButton = ({ onClick, disabled, className }: NextButtonProps) => {
  return (
    <button
      className={`${styles.nextButton} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      Next
    </button>
  );
};

export default NextButton;
