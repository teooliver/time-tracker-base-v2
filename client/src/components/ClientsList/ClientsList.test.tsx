import { cleanup, render, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ClientsList from './ClientsList';

afterAll(cleanup);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe('Test ProjectsTable Component', () => {
  test('Render ProjectsTable', async () => {
    const Wrapper = () => {
      return (
        <QueryClientProvider client={queryClient}>
          <ClientsList />
        </QueryClientProvider>
      );
    };

    const { getByText } = render(<Wrapper />);

    await waitFor(() => {
      expect(getByText('Ritchie and Sons')).toBeInTheDocument();
      expect(getByText('Beatty and Cartwright Group')).toBeInTheDocument();
    });
  });
});
