import styles from './Title.module.scss';

interface TitleProps {
  text: string;
  spanElement?: string | boolean;
}

const Title = ({ text, spanElement }: TitleProps) => {
  const renderText = () => {
    if (typeof spanElement === 'string') {
      const parts = text.split(new RegExp(`(${spanElement})`, 'gi'));
      return parts.map((part, index) =>
        part.toLowerCase() === spanElement.toLowerCase() ? (
          <span key={index} className={styles.highlight}>
            {part}
          </span>
        ) : (
          part
        )
      );
    }
    return text;
  };

  return <h1 className={styles.title}>{renderText()}</h1>;
};

export default Title;
