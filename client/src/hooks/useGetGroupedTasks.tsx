import { useQuery } from 'react-query';
import { TaskAfterGroupedResult } from '../types/task';
import { API_URL } from '../utils/api-client';

//TODO:add option for sending params.
const getTasksGroupedByDate = async (size: number = 2) => {
  const res = await fetch(`${API_URL}/tasks/group?size=${size}`).then((res) =>
    res.json()
  );
  return res as TaskAfterGroupedResult;
};

export const useGetGroupedTasks = (size: number) => {
  return useQuery(['tasks', size], () => getTasksGroupedByDate(size));
};
