import { PlusCircle } from '../../components/icons/PlusCircle';
import { useState } from 'react';
// import Dialog from '@reach/dialog';
import CreateClientModal from '../../components/CreateClientForm/CreateClientModal';
import ClientsList from '../../components/ClientsList/ClientsList';
import styles from './Clients.module.css';

const Clients = () => {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <div className='Clients'>
      <header className={styles['header']}>
        <h2>Clients</h2>
        <button className='btn btn-primary' onClick={open}>
          <i>
            <PlusCircle size='1rem' />
          </i>
          Add Client
        </button>

        <CreateClientModal showDialog={showDialog} close={close} />
      </header>

      <ClientsList />
    </div>
  );
};

export default Clients;
