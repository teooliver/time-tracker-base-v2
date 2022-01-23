import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

describe('Test Spinner Component', () => {
  test('Render Spinner', async () => {
    render(<Spinner />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
});
