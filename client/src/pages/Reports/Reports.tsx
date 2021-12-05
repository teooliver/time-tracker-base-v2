import { useGetGroupedTasks } from '../../hooks/useGetGroupedTasks';
import { calculateTimer } from '../../utils/timer';

const Reports = () => {
  const {
    data: groupedTasks,
    isLoading,
    isSuccess,
    isError,
  } = useGetGroupedTasks();

  // Show a x/y chart => days (current - sunday to saturday week) vs amount of hours worked;
  return (
    <div>
      <div>
        {groupedTasks?.map((x) => {
          const [hours, minutes, seconds] = calculateTimer(
            Math.round(x.total_time)
          );
          return (
            <div
              style={{
                display: 'flex',
                gap: '1rem',
              }}
            >
              <span>{x._id}</span>
              <span>{hours}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reports;
