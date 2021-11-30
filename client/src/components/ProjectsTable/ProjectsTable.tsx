import { useGetProjects } from '../../hooks/useGetProjects';
import { Dot } from '../icons/Dot';
import styles from './ProjectsTable.module.css';

const ProjectsTable = () => {
  const { data: projects, isLoading, isSuccess, isError } = useGetProjects();

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
      </colgroup>
      <thead className={styles['table-header']}>
        <tr>
          <th>Project</th>
          <th>Client</th>
          <th>Status</th>
          <th>Team</th>
        </tr>
      </thead>
      <tbody className={styles['table-body']}>
        {isSuccess && projects
          ? projects.map((client) =>
              client.projects.map((project) => (
                <tr key={project._id}>
                  <td
                    className='project-list-item'
                    style={{ color: project.color }}
                  >
                    <div>
                      <Dot size='24' className={styles['dot']} />
                      {project.name}
                    </div>
                  </td>
                  <td className='client-name'>{client._id}</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              ))
            )
          : null}
      </tbody>
    </table>
  );
};

export default ProjectsTable;
