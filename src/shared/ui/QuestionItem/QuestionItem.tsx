import styles from './QuestionItem.module.scss';

interface QuestionItemProps {
  text: string;
  onClick?: () => void;
}

const QuestionItem = ({ text, onClick }: QuestionItemProps) => {
  return (
    <div className={styles.questionItem} onClick={onClick}>
      {text}
    </div>
  );
};

export default QuestionItem;
