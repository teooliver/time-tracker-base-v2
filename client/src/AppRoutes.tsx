import { Route, Routes } from 'react-router-dom';
import Clients from './pages/Clients';
import Projects from './pages/Projects';
import Tags from './pages/Tags';
import TimeTracker from './pages/TimeTracker';

export const AppRoutes = () => {
  return (
    <section className='AppRoutes'>
      <Routes>
        <Route path={'/'} element={<TimeTracker />} />
        <Route path={'/projects'} element={<Projects />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/tags' element={<Tags />} />
      </Routes>
    </section>
  );
};
