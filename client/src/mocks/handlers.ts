import { rest } from 'msw';
import { API_URL } from '../utils/api-client';
import { getClientRes } from './data/getClientsRes';
import { getGroupedTasksRes } from './data/getGroupedTasksRes';
import { getProjectsRes } from './data/getProjectsRes';

export const handlers = [
  rest.get(`${API_URL}/projects`, (_req, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json(getProjectsRes)
    );
  }),

  rest.get(`${API_URL}/clients`, (_req, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json(getClientRes)
    );
  }),

  rest.get(`${API_URL}/tasks/group`, (_req, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json(getGroupedTasksRes)
    );
  }),
];
