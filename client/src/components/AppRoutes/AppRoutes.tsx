import { Route, Routes } from 'react-router-dom';
import Clients from '../../pages/Clients/Clients';
import Projects from '../../pages/Projects/Projects';
import Reports from '../../pages/Reports/Reports';
import Tags from '../../pages/Tags/Tags';
import TimeTracker from '../../pages/TimeTracker/TimeTracker';
import styles from './AppRoutes.module.css';

export const AppRoutes = () => {
  return (
    <section className={styles.AppRoutes}>
      <Routes>
        <Route path={'/'} element={<TimeTracker />} />
        <Route path={'/projects'} element={<Projects />} />
        <Route path={'/reports'} element={<Reports />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/tags' element={<Tags />} />
      </Routes>
    </section>
  );
};
