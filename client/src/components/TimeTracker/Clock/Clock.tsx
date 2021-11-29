import { FC } from 'react';
import styles from './Clock.module.css';

export interface ClockProps {
  timerArray: (string | number)[];
}

export const Clock: FC<ClockProps> = ({ timerArray }) => {
  return (
    <section className={styles['clock']}>
      <p className={styles['time-text']}>{timerArray[0]}</p>
      <span>:</span>
      <p className={styles['time-text']}>{timerArray[1]}</p>
      <span>:</span>
      <p className={styles['time-text']}>{timerArray[2]}</p>
    </section>
  );
};
