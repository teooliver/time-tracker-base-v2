import format from 'date-fns/format';
import { calculateTimer } from '../../../utils/timer';
import EventRow from '../EventsRow/EventRow';
import { useGetGroupedTasks } from '../../../hooks/useGetGroupedTasks';
import styles from './EventsTable.module.css';

const EventsTable = () => {
  const {
    data: groupedTasks,
    isLoading,
    isSuccess,
    isError,
  } = useGetGroupedTasks();

  return (
    <>
      {isLoading && <div>Loading</div>}

      {isSuccess &&
        groupedTasks?.map((group) => {
          const [hours, minutes, seconds] = calculateTimer(
            Math.round(group.total_time)
          );
          return (
            <ul className={styles['EventsTable']} key={group._id}>
              <li className={styles['date-header']}>
                <span>{format(new Date(group._id), 'EEE, dd LLL')}</span>
                <span className={styles['day-total']}>
                  {hours}:{minutes}:{seconds}
                </span>
              </li>
              {group.tasks.map((task) => (
                <EventRow key={task._id} task={task} />
              ))}
            </ul>
          );
        })}

      {isError && (
        <div>
          <p>No Data Available</p>
        </div>
      )}
    </>
  );
};

export default EventsTable;
