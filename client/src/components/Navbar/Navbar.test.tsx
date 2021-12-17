import { cleanup, render, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

afterAll(cleanup);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe('Test Navbar Component', () => {
  test('Render Navbar', async () => {
    const Wrapper = () => {
      return (
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </QueryClientProvider>
      );
    };

    const { getByTestId } = render(<Wrapper />);

    expect(getByTestId('navbar')).toBeInTheDocument();
  });
  test('Check main pages are present', async () => {
    const Wrapper = () => {
      return (
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </QueryClientProvider>
      );
    };

    const { getByText } = render(<Wrapper />);

    expect(getByText('Timer')).toBeInTheDocument();
    expect(getByText('Reports')).toBeInTheDocument();
    expect(getByText('Projects')).toBeInTheDocument();
    expect(getByText('Clients')).toBeInTheDocument();
    expect(getByText('Tags')).toBeInTheDocument();
  });

  test('Check Seed and Remove Data are present', async () => {
    const Wrapper = () => {
      return (
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </QueryClientProvider>
      );
    };

    const { getByText } = render(<Wrapper />);

    expect(getByText('Seed Data')).toBeInTheDocument();
    expect(getByText('Remove All Data')).toBeInTheDocument();
  });
});
