import styles from './SubTitle.module.scss';

interface SubTitleProps {
  text: string;
  spanElement?: string | string[] | boolean;
}

const SubTitle = ({ text, spanElement }: SubTitleProps) => {
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
    } else if (Array.isArray(spanElement)) {
      let parts = [text];
      spanElement.forEach((span) => {
        parts = parts.flatMap((part) =>
          typeof part === 'string' ? part.split(new RegExp(`(${span})`, 'gi')) : [part]
        );
      });
      return parts.map((part, index) =>
        spanElement.some((span) => span.toLowerCase() === part.toLowerCase()) ? (
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

  return <h2 className={styles.subtitle}>{renderText()}</h2>;
};

export default SubTitle;
