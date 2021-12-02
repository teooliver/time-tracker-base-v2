import Dialog from '@reach/dialog';
import React, { useState } from 'react';
import { useCreateClient } from '../../hooks/useCreateClient';
import styles from './CreateClientModal.module.css';

const CreateClientModal = ({ showDialog, close }: any) => {
  const [clientName, setClientName] = useState<string>('');

  const createClientMutation = useCreateClient();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleCreateClient = () => {
    createClientMutation.mutate(clientName);
  };

  return (
    <Dialog
      className={styles['client-form-modal']}
      isOpen={showDialog}
      onDismiss={close}
    >
      <h2>Create New Client</h2>
      <form
        className={styles['create-client-form']}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div>
          <input
            placeholder='Client Name'
            name='name'
            id='name'
            type='text'
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>
        <button className='btn btn-primary' onClick={handleCreateClient}>
          Create Client
        </button>
      </form>
      <button className={styles['close-btn']} onClick={close}>
        X
      </button>
    </Dialog>
  );
};

export default CreateClientModal;
