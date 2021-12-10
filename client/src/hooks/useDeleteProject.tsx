import { useMutation, useQueryClient } from 'react-query';
import { API_URL } from '../utils/api-client';

const deleteProject = async (id: string) => {
  const res = await fetch(`${API_URL}/projects/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

  return res as string;
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();

  const deleteProjectMutation = useMutation(deleteProject, {
    onSuccess: () => {
      queryClient.invalidateQueries('projects');
      queryClient.invalidateQueries('tasks');
    },
  });

  return deleteProjectMutation;
};
