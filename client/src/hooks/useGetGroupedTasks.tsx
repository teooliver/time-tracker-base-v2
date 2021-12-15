import { useQuery } from 'react-query';
import { TaskAfterGroupedResult } from '../types/task';
import { API_URL } from '../utils/api-client';

const getTasksGroupedByDate = async () => {
  const res = await fetch(`${API_URL}/tasks/group`).then((res) => res.json());
  return res as TaskAfterGroupedResult;
};

export const useGetGroupedTasks = () => {
  return useQuery('tasks', getTasksGroupedByDate);
};
