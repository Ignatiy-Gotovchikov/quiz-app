import styles from './CircularLoader.module.scss';

interface CircularLoaderProps {
  progress: number;
  message: string;
}

const CircularLoader= ({ progress, message }: CircularLoaderProps) => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.circularLoader}>
        <svg className={styles.svg} viewBox="0 0 36 36">
          <path
            className={styles.circleBg}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className={styles.circle}
            strokeDasharray={`${progress}, 100`}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className={styles.percentage}>{`${progress}%`}</text>
        </svg>
      </div>
      <div className={styles.message}>{message}</div>
    </div>
  );
};

export default CircularLoader;
