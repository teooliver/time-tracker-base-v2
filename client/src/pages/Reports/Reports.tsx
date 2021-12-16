import { ReportsBarChart } from '../../components/ReportsBarChart/ReportsBarChart';
import { useGetGroupedTasks } from '../../hooks/useGetGroupedTasks';
import { PROJECT_COLORS } from '../../utils/projectColors';
import styles from './Reports.module.css';
import { calculateTimer } from '../../utils/timer';

const Reports = () => {
  const {
    data: groupedTasks,
    isLoading,
    isSuccess,
    isError,
  } = useGetGroupedTasks();

  let chartData = {
    labels: groupedTasks?.results.map((result) => result._id),
    datasets: [
      {
        label: 'Hours per day',
        data: groupedTasks?.results.map((result) => result.total_time),
        backgroundColor: [...PROJECT_COLORS],
      },
    ],
  };
  return (
    <div className={styles['chart-container']}>
      <ReportsBarChart chartData={chartData} />;
    </div>
  );
};

export default Reports;
