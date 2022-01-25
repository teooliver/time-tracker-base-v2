import { FC } from 'react';
import styles from './Clock.module.css';

export interface ClockProps {
  timerArray: (string | number)[];
}

// TODO: Refactor this components, use <span/> instead of <p/>
export const Clock: FC<ClockProps> = ({ timerArray }) => {
  return (
    <section className={styles['clock']}>
      <span className={styles['time-text']}>{timerArray[0]}</span>
      <span>:</span>
      <span className={styles['time-text']}>{timerArray[1]}</span>
      <span>:</span>
      <span className={styles['time-text']}>{timerArray[2]}</span>
    </section>
  );
};
