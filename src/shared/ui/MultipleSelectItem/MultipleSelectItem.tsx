import styles from './MultipleSelectItem.module.scss';

interface MultipleSelectItemProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const MultipleSelectItem = ({ label, isSelected, onClick }: MultipleSelectItemProps) => {
  return (
    <div className={`${styles.multipleSelectItem} ${isSelected ? styles.selected : ''}`} onClick={onClick}>
      <span className={styles.label}>{label}</span>
      <span className={`${styles.checkbox} ${isSelected ? styles.checked : ''}`}>
        {isSelected && '✔️'}
      </span>
    </div>
  );
};

export default MultipleSelectItem;
