import { useState } from 'react';
import { Dialog } from '@reach/dialog';
import { PlusCircle } from '../../components/icons/PlusCircle';
import CreateProjectForm from '../../components/CreateProjectForm/CreateProjectForm';
import ProjectsTable from '../../components/ProjectsTable/ProjectsTable';
import styles from './Projects.module.css';

const Projects = () => {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <section className='Projects'>
      <header className={styles['header']}>
        <h2>Projects</h2>
        <button className='btn btn-primary' onClick={open}>
          <i>
            <PlusCircle size='1rem' />
          </i>
          Add Project
        </button>

        <Dialog
          className={styles['project-form-modal']}
          isOpen={showDialog}
          onDismiss={close}
        >
          <h2>Create New Project</h2>
          <CreateProjectForm />
          <button className={styles['close-btn']} onClick={close}>
            X
          </button>
        </Dialog>
      </header>
      <div>
        <ProjectsTable />
      </div>
    </section>
  );
};

export default Projects;
