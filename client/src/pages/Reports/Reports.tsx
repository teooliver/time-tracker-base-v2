import { ReportsBarChart } from '../../components/ReportsBarChart/ReportsBarChart';
import { useGetGroupedTasks } from '../../hooks/useGetGroupedTasks';
import { calculateTimer } from '../../utils/timer';

const Reports = () => {
  const {
    data: groupedTasks,
    isLoading,
    isSuccess,
    isError,
  } = useGetGroupedTasks();

  let chartData = {
    // labels: data.data.map((crypto) => crypto.name),
    labels: groupedTasks?.results.map((result) => result._id),
    datasets: [
      {
        label: 'Hours per day',
        data: groupedTasks?.results.map((result) => result.total_time),
        backgroundColor: [
          '#ffbb11',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
      },
    ],
  };
  console.log('Chart Data', chartData);
  // Show a x/y chart => days (current - sunday to saturday week) vs amount of hours worked;
  return (
    // <div>
    //   <div>
    //     {groupedTasks?.results.map((result) => {
    //       const [hours, minutes, seconds] = calculateTimer(
    //         Math.round(result.total_time)
    //       );
    //       return (
    //         <div
    //           style={{
    //             display: 'flex',
    //             gap: '1rem',
    //           }}
    //         >
    //           <span>{result._id}</span>
    //           <span>{hours}</span>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    <ReportsBarChart chartData={chartData} />
  );
};

export default Reports;
