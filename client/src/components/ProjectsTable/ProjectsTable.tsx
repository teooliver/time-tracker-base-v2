import { useDeleteProject } from '../../hooks/useDeleteProject';
import { useGetProjects } from '../../hooks/useGetProjects';
import { Dot } from '../icons/Dot';
import { Trash } from '../icons/Trash';
import Spinner from '../Spinner/Spinner';
import styles from './ProjectsTable.module.css';

const ProjectsTable = () => {
  const { data: projects, isLoading, isSuccess, isError } = useGetProjects();
  const deleteProjectMutation = useDeleteProject();

  if (isError) {
    return <div>No projects available</div>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <table className={styles['projects-table']}>
      <colgroup>
        <col width='24%' />
        <col width='24%' />
        <col width='12%' />
        <col width='10%' />
        <col width='10%' />
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
                    className={styles['project-name']}
                    style={{ color: project.color }}
                  >
                    <Dot size='24' className={styles['dot']} />
                    <div>{project.name}</div>
                  </td>
                  <td className={styles['client-name']}>{client._id}</td>
                  <td className={styles['empty-cell']}>-</td>
                  <td className={styles['empty-cell']}>-</td>
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
