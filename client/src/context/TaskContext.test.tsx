import { render, screen } from '@testing-library/react';
import { ReactElement, useContext } from 'react';
import TimeTracker from '../pages/TimeTracker/TimeTracker';
import TaskProvider, { TaskContext } from './TaskContext';

/**
 * A custom render to setup providers. Extends regular
 * render options with `providerProps` to allow injecting
 * different scenarios to test with.
 *
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 */
const customRender = (ui: any, { providerProps, ...renderOptions }: any) => {
  return render(
    <TaskContext.Provider {...providerProps}>{ui}</TaskContext.Provider>,
    renderOptions
  );
};

// test('NameConsumer shows value from provider', () => {
//   customRender(<TimeTracker />, {});
//   expect(screen.getByText(/^My Name Is:/)).toHaveTextContent(
//     'My Name Is: C3P0'
//   );
// });

/**
 * To test a component that provides a context value, render a matching
 * consumer as the child
 */
test('NameProvider composes full name from first, last', () => {
  const providerProps = {
    value: {
      task: {
        name: 'test-name',
        end_time: '2022-01-24T22:00:00.006Z',
        initial_time: '2022-01-24T22:15:00.006Z',
      },
    },
  };
  customRender(
    <TaskContext.Consumer>
      {(value) => (
        <>
          <span>Received name: {value.task.name}</span>
          <span>Received end_time: {value.task.end_time}</span>
          <span>Received initial_time: {value.task.initial_time}</span>
        </>
      )}
    </TaskContext.Consumer>,
    { providerProps }
  );

  expect(screen.getByText(/^Received name:/).textContent).toBe(
    'Received name: test-name'
  );
  expect(screen.getByText(/^Received end_time:/).textContent).toBe(
    'Received end_time: 2022-01-24T22:00:00.006Z'
  );
  expect(screen.getByText(/^Received initial_time:/).textContent).toBe(
    'Received initial_time: 2022-01-24T22:15:00.006Z'
  );
});

/**
 * A tree containing both a providers and consumer can be rendered normally
 */

// test('NameProvider/Consumer shows name of character', () => {
//   const wrapper = ({ children }) => (
//     <NameProvider first='Leia' last='Organa'>
//       {children}
//     </NameProvider>
//   );

//   render(<NameConsumer />, { wrapper });
//   expect(screen.getByText(/^My Name Is:/).textContent).toBe(
//     'My Name Is: Leia Organa'
//   );
// });
