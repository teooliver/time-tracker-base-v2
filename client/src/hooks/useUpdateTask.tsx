import { useMutation, useQueryClient } from 'react-query';
import { IDbTask } from '../types/task';
import { API_URL } from '../utils/api-client';

const updateTask = async (task: Partial<IDbTask>) => {
  const editable_fields = {
    name: task.name,
    initial_time: task.initial_time,
    end_time: task.end_time,
  };

  console.log('===== Task =====', editable_fields);
  console.log('===== TaskID =====', task._id);
  const res = await fetch(`${API_URL}/tasks/${task._id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(editable_fields),
  }).then((res) => res.json());

  return res as IDbTask;
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  const updateTaskMutation = useMutation(updateTask, {
    onSuccess: () => {
      queryClient.invalidateQueries('tasks');
    },
  });
  return updateTaskMutation;
};
