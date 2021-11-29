import { useEffect, useState } from 'react';
import { calculateTimer } from '../../../utils/timer';
import EditableInput from '../EditableInput/EditableInput';
import { ProjectSelect } from '../ProjectSelect/ProjectSelect';
import { Clock } from '../Clock/Clock';
import { ClockControls } from '../ClockControls/ClockControls';
import styles from './Stopwatch.module.css';

export interface ISelectedProject {
  id: string;
  name: string;
  client: string;
  color: string;
}

const Stopwatch = () => {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);
  const [selectedProject, setSelectedProject] = useState<ISelectedProject>({
    id: '',
    name: '',
    client: '',
    color: '',
  });

  useEffect(() => {
    let timeArray: Array<number | string> = calculateTimer(timeInSeconds);
    setTimerArray(timeArray);
  }, [timeInSeconds]);

  return (
    <header className='header'>
      <div className={styles['Stopwatch']}>
        <div className={styles['task-project-input']}>
          <EditableInput />

          <ProjectSelect
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        </div>
        <div className={styles['clock-controls']}>
          <Clock timerArray={timerArray} />

          <ClockControls
            setTimeInSeconds={setTimeInSeconds}
            timeInSeconds={timeInSeconds}
            selectedProject={selectedProject}
          />
        </div>
      </div>
    </header>
  );
};

export default Stopwatch;
