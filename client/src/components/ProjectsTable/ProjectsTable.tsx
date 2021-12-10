import { useDeleteProject } from '../../hooks/useDeleteProject';
import { useGetProjects } from '../../hooks/useGetProjects';
import { Dot } from '../icons/Dot';
import { Trash } from '../icons/Trash';
import styles from './ProjectsTable.module.css';

const ProjectsTable = () => {
  const { data: projects, isLoading, isSuccess, isError } = useGetProjects();
  const deleteProjectMutation = useDeleteProject();

  if (isError) {
    <div>No projects available</div>;
  }

  if (isLoading) {
    <div>Loading Projects</div>;
  }

  return (
    <table className={styles['projects-table']}>
      <colgroup>
        <col width='20%' />
        <col width='20%' />
        <col width='20%' />
        <col width='20%' />
        <col width='20%' />
      </colgroup>
      <thead className={styles['table-header']}>
        <tr>
          <th>Project</th>
          <th>Client</th>
          <th>Status</th>
          <th>Team</th>
          <th></th>
        </tr>
      </thead>
      <tbody className={styles['table-body']}>
        {isSuccess && projects
          ? projects.map((client) =>
              client.projects.map((project) => (
                <tr key={project._id}>
                  <td
                    className={styles['project-list-item']}
                    style={{ color: project.color }}
                  >
                    <div>
                      <Dot size='24' className={styles['dot']} />
                      {project.name}
                    </div>
                  </td>
                  <td className={styles['client-name']}>{client._id}</td>
                  <td>-</td>
                  <td>-</td>
                  <td className={styles['close']}>
                    <span
                      onClick={() => deleteProjectMutation.mutate(project._id)}
                    >
                      <Trash className={styles['trash-icon']} />
                    </span>
                  </td>
                </tr>
              ))
            )
          : null}
      </tbody>
    </table>
  );
};

export default ProjectsTable;
