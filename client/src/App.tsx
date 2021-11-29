import { AppRoutes } from './AppRoutes';
import Navbar from './components/Navbar/Navbar';
import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
