import { useQueryClient } from 'react-query';
import { NavLink } from 'react-router-dom';
import { Tags } from '../icons/Tags';
import { API_URL } from '../../utils/api-client';
import { ClockHistory } from '../icons/ClockHistory';
import { FileText } from '../icons/FileText';
import { Folder } from '../icons/Folder';
import { PersonSquare } from '../icons/PersonSquare';
import styles from './Navbar.module.css';

const Navbar = () => {
  const queryClient = useQueryClient();

  const handleRemoveAllData = () => {
    // removeAllData(queryClient);
    try {
      fetch(`${API_URL}/seed/remove`)
        .then((res) => queryClient.invalidateQueries('projects'))
        .then((res) => queryClient.invalidateQueries('tasks'));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSeedData = async () => {
    // seedData(queryClient);
    try {
      fetch(`${API_URL}/seed/clients`)
        .then((res) => fetch(`${API_URL}/seed/projects`))
        .then((res) => queryClient.invalidateQueries('projects'))
        .then((res) => fetch(`${API_URL}/seed/tasks`))
        .then((res) => queryClient.invalidateQueries('tasks'))
        .then((res) => queryClient.invalidateQueries('clients'));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles['navbar']} data-testid='navbar'>
      <div className={styles['logo']}>
        <span className='bold'>Time</span>
        <span>Track</span>
      </div>

      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles['active-link'] : ''
            }
            // activeClassName='active-link'
            // exact
            to='/'
          >
            <span>
              <ClockHistory />
            </span>
            Timer
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles['active-link'] : ''
            }
            to='/reports'
          >
            <span>
              <FileText />
            </span>
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles['active-link'] : ''
            }
            to='/projects'
          >
            <span>
              <Folder />
            </span>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles['active-link'] : ''
            }
            to='/clients'
          >
            <span>
              <PersonSquare />
            </span>
            Clients
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles['active-link'] : ''
            }
            to='/tags'
          >
            <span>
              <Tags />
            </span>
            Tags
          </NavLink>
        </li>
      </ul>
      <div className={styles['seed-buttons']}>
        <button className={styles['btn-navbar--add']} onClick={handleSeedData}>
          Seed Data
        </button>
        <button
          className={styles['btn-navbar--remove']}
          onClick={handleRemoveAllData}
        >
          Remove All Data
        </button>
      </div>
    </div>
  );
};

export default Navbar;
