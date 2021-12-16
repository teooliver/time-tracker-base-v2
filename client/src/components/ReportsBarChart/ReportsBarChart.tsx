import { Bar } from 'react-chartjs-2';
export const ReportsBarChart = ({ chartData }: any) => {
  const config = {
    type: 'bar',
    data: chartData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <Bar
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: 'Cryptocurrency prices',
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
