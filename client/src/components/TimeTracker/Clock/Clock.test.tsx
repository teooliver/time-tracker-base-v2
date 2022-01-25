import { render } from '@testing-library/react';
import { Clock } from './Clock';

describe('Test Clock Component', () => {
  test('Render Clock ', async () => {
    const { getByText, getAllByText } = render(
      <Clock timerArray={[13, 53, 20]} />
    );

    expect(getAllByText(':')[0]).toBeInTheDocument();
    expect(getAllByText(':')[1]).toBeInTheDocument();
    expect(getByText('13')).toBeInTheDocument();
    expect(getByText('53')).toBeInTheDocument();
    expect(getByText('20')).toBeInTheDocument();
  });
});
