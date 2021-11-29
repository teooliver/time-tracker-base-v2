import { Route, Routes } from 'react-router-dom';
import Clients from '../../pages/Clients';
import Projects from '../../pages/Projects';
import Tags from '../../pages/Tags';
import TimeTracker from '../../pages/TimeTracker';
import styles from './AppRoutes.module.css';

export const AppRoutes = () => {
  return (
    <section className={styles.AppRoutes}>
      <Routes>
        <Route path={'/'} element={<TimeTracker />} />
        <Route path={'/projects'} element={<Projects />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/tags' element={<Tags />} />
      </Routes>
    </section>
  );
};
