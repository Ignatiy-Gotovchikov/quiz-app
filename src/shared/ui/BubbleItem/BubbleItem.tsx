import styles from './BubbleItem.module.scss';

interface BubbleItemProps {
  label: string;
  emoji: string;
  isSelected: boolean;
  onClick: () => void;
}

const BubbleItem = ({ label, emoji, isSelected, onClick }: BubbleItemProps) => {
  return (
    <div className={`${styles.bubbleItem} ${isSelected ? styles.selected : ''}`} onClick={onClick}>
      <span className={styles.emoji}>{emoji}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default BubbleItem;
