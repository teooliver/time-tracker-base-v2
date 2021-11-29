import React, { FC, useState } from 'react';
import { Dot } from '../../icons/Dot';
import { Folder } from '../../icons/Folder';
import ProjectsDropDown from '../../ProjectsDropdown/ProjectsDropDown';
import { ISelectedProject } from '../StopWatch/Stopwatch';
import styles from './ProjectSelect.module.css';

interface Props {
  selectedProject: ISelectedProject;
  setSelectedProject: React.Dispatch<React.SetStateAction<ISelectedProject>>;
}

export const ProjectSelect: FC<Props> = ({
  selectedProject,
  setSelectedProject,
}) => {
  const [isProjectDropwdownOpen, setIsProjectDropwdownOpen] = useState(false);

  return (
    <div className={styles['project-select']}>
      {selectedProject.name ? (
        <span
          className={styles['selected-project']}
          onClick={() => setIsProjectDropwdownOpen(!isProjectDropwdownOpen)}
        >
          <i>
            <Dot size='24' />
          </i>
          <span className={styles['selected-project-name']}>
            {selectedProject.name}
          </span>
          <span
            className={styles['selected-project-client']}
            style={{ color: selectedProject.color }}
          >
            {selectedProject.client ? `- ${selectedProject.client}` : null}
          </span>
        </span>
      ) : (
        <span
          className={styles['select-project-icon']}
          onClick={() => setIsProjectDropwdownOpen(!isProjectDropwdownOpen)}
        >
          <Folder size='24' color='white' />
          <span>Project</span>
        </span>
      )}
      {isProjectDropwdownOpen && (
        <ProjectsDropDown
          setSelectedProject={setSelectedProject}
          setIsProjectDropwdownOpen={setIsProjectDropwdownOpen}
        />
      )}
    </div>
  );
};
