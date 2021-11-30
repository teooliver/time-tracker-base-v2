import { FC } from 'react';
import { useGetProjects } from '../../hooks/useGetProjects';
import { Dot } from '../icons/Dot';
import { ISelectedProject } from '../TimeTracker/StopWatch/Stopwatch';
import styles from './ProjectsDropDown.module.css';

interface Props {
  setSelectedProject: React.Dispatch<React.SetStateAction<ISelectedProject>>;
  setIsProjectDropwdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectsDropDown: FC<Props> = ({
  setSelectedProject,
  setIsProjectDropwdownOpen,
}) => {
  const { data: projects, isSuccess } = useGetProjects();

  const handleSelection = (projectName: ISelectedProject) => {
    setSelectedProject(projectName);
    setIsProjectDropwdownOpen(false);
  };

  return (
    <div className={styles['projects-drop']}>
      <input
        className={styles['projects-dropdown-search']}
        type='text'
        placeholder='Search Projects'
        data-testid='projects-dropdown'
      />
      <div
        className={styles['project-list-item']}
        onClick={() =>
          handleSelection({
            id: '',
            name: 'No Project',
            client: '',
            color: 'white',
          })
        }
      >
        <Dot size='24' />
        No Project
      </div>
      {isSuccess &&
        projects?.map((client) => (
          <div key={client._id}>
            <div className={styles['client-name']}>{client._id}</div>
            <ul>
              {client.projects.map((project) => (
                <li
                  key={project._id}
                  className={styles['project-list-item']}
                  style={{ color: project.color }}
                  onClick={() =>
                    handleSelection({
                      id: project._id,
                      name: project.name,
                      client: project.client_name,
                      color: project.color,
                    })
                  }
                >
                  <Dot size='24' />
                  {project.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default ProjectsDropDown;
