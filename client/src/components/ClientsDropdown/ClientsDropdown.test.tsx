import React, { useState } from 'react';
import { cleanup, render, fireEvent, waitFor } from '@testing-library/react';
import ClientsDropdown from './ClientsDropdown';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useGetClients } from '../../hooks/useGetClients';
import { getClientRes } from '../../mocks/data/getClientsRes';
import { server } from '../../mocks/server';
import { rest } from 'msw';

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

// jest.mock('../../hooks/useGetClients', () => ({
//   useGetClients: () => ({
//     data: [
//       {
//         _id: '61bb3d2fc19459596babf595',
//         name: 'Projectq 1',
//         created_at: '2021-12-16T13:20:47.250+00:00',
//         updated_at: '2021-12-16T13:20:47.250+00:00',
//       },
//       {
//         _id: '61bb3d2fc19459596babf596',
//         name: 'Project 2',
//         created_at: '2021-12-16T13:20:47.250+00:00',
//         updated_at: '2021-12-16T13:20:47.250+00:00',
//       },
//     ],
//   }),
// }));
describe('Check Manual Mockups', () => {
  test('Check if manual Mock still works', async () => {
    server.use(
      rest.get('*', (req, res, ctx) =>
        res(
          ctx.status(200),
          ctx.json([
            {
              _id: '61bb3d2fc19459596babf595',
              name: 'Projectq 1',
              created_at: '2021-12-16T13:20:47.250+00:00',
              updated_at: '2021-12-16T13:20:47.250+00:00',
            },
            {
              _id: '61bb3d2fc19459596babf596',
              name: 'Project 2',
              created_at: '2021-12-16T13:20:47.250+00:00',
              updated_at: '2021-12-16T13:20:47.250+00:00',
            },
          ])
        )
      )
    );

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
      expect(getByText('Projectq 1')).toBeInTheDocument();
      expect(getByText('Project 2')).toBeInTheDocument();
    });

    expect(getAllByText('No Client')).toBeTruthy();
  });
});
