import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import TaskProvider from './context/TaskContext';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

test('App renders with Navbar', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <TaskProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TaskProvider>
    </QueryClientProvider>
  );
  const appTitle = screen.getByTestId('navbar');
  expect(appTitle).toBeInTheDocument();
});
