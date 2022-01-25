import { render, screen, fireEvent } from '@testing-library/react';
import { ISelectedProject } from '../StopWatch/Stopwatch';
import { ClockControls } from './ClockControls';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

//  TODO?: Spy on:
//    const { task, setTask } = useContext(TaskContext);
//    const createTaskMutation = useCreateTask();
//
describe('Test ClockControls Component', () => {
  test('Can toggle play/stop and reset clock', async () => {
    const selectedProject: ISelectedProject = {
      id: '',
      name: '',
      client: '',
      color: '',
    };
    const setTimeInSeconds = jest.fn();

    const Wrapper = () => {
      return (
        <QueryClientProvider client={queryClient}>
          <ClockControls
            setTimeInSeconds={setTimeInSeconds}
            selectedProject={selectedProject}
          />
        </QueryClientProvider>
      );
    };

    render(<Wrapper />);

    const playButton = screen.getByTestId('play-button');
    const resetButton = screen.getByTestId('reset-button');

    expect(screen.queryByTestId('stop-button')).not.toBeInTheDocument();

    fireEvent.click(playButton);
    expect(screen.getByTestId('stop-button')).toBeInTheDocument();
    expect(screen.queryByTestId('play-button')).not.toBeInTheDocument();

    fireEvent.click(resetButton);
    expect(setTimeInSeconds).toHaveBeenCalledWith(0);
  });
});
