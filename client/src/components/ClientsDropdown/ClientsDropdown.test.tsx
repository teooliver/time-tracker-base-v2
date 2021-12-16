import React, { useState } from 'react';
import { cleanup, render, fireEvent, waitFor } from '@testing-library/react';
import ClientsDropdown from './ClientsDropdown';
import { QueryClient, QueryClientProvider } from 'react-query';

afterAll(cleanup);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe('Test ClientsDropdown Component', () => {
  test('Render ClientsDropdown', async () => {
    const Wrapper = () => {
      const [client, setClient] = useState('No Client');

      return (
        <QueryClientProvider client={queryClient}>
          <ClientsDropdown client={client} setClient={setClient} />;
        </QueryClientProvider>
      );
    };

    const { getAllByText, getByTestId, getByText } = render(<Wrapper />);

    const dropdown = getByTestId('client-dropdown');

    fireEvent.click(dropdown);

    await waitFor(() => {
      expect(getByText('Ritchie and Sons')).toBeInTheDocument();
      expect(getByText('Beatty and Cartwright Group')).toBeInTheDocument();
    });

    expect(getAllByText('No Client')).toBeTruthy();
  });
});
