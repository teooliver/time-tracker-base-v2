import { cleanup, render, waitFor } from '@testing-library/react';

import { QueryClient, QueryClientProvider } from 'react-query';
import ProjectsTable from './ProjectsTable';

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
          <ProjectsTable />
        </QueryClientProvider>
      );
    };

    const { getByText } = render(<Wrapper />);

    await waitFor(() => {
      // Table Header
      expect(getByText('Project')).toBeInTheDocument();
      expect(getByText('Client')).toBeInTheDocument();
      expect(getByText('Status')).toBeInTheDocument();
      expect(getByText('Team')).toBeInTheDocument();

      //Table Items
      expect(getByText('Koepp and Bogisich Group')).toBeInTheDocument();
      expect(getByText('Legros Group')).toBeInTheDocument();
    });
  });
});
