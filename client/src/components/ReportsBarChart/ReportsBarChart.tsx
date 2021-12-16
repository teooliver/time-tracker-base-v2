import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const ReportsBarChart = ({ chartData }: any) => {
  return (
    <Bar
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: 'Work Hours',
          },
          legend: {
            display: true,
            position: 'bottom',
          },
        },
      }}
    />
  );
};
