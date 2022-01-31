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

enum AnimationDurationValues {
  DEFAULT = 400,
  DISABLED = 0,
}

const disableAnimationOnTest = (): AnimationDurationValues => {
  // TODO: Only disbale animation when runing Tests
  if (process.env.NODE_ENV === 'test' || process.env.REACT_APP_ENV === 'test') {
    return AnimationDurationValues.DISABLED;
  }
  return AnimationDurationValues.DEFAULT;
};

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
        animation: {
          duration: disableAnimationOnTest(),
        },
        // chart.options.animation = false; // disables all animations
        // chart.options.animations.colors = false; // disables animation defined by the collection of 'colors' properties
        // chart.options.animations.x = false; // disables animation defined by the 'x' property
        // chart.options.transitions.active.animation.duration = 0;
      }}
    />
  );
};
