import styles from './EmojiQuestionItem.module.scss';

interface EmojiQuestionItemProps {
  emoji: string;
  text: string;
  onClick?: () => void;
}

const EmojiQuestionItem = ({ emoji, text, onClick }: EmojiQuestionItemProps) => {
  return (
    <div className={styles.emojiQuestionItem} onClick={onClick}>
      <span className={styles.emoji}>{emoji}</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default EmojiQuestionItem;
