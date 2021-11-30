import { useDeleteClient } from '../../hooks/useDeleteClient';
import { useGetClients } from '../../hooks/useGetClients';
import { XCircle } from '../icons/XCircle';
import styles from './ClientsList.module.css';

const ClientsList = () => {
  const { data: clients, isLoading } = useGetClients();
  const deleteClientMutation = useDeleteClient();

  if (isLoading) {
    <div>Loading</div>;
  }

  return (
    <div className={styles['clients-list']}>
      {clients
        ? clients.map((client) => (
            <div className={styles['client-pill']}>
              <span>{client.name}</span>
              <span onClick={() => deleteClientMutation.mutate(client._id)}>
                <XCircle size='1rem' />
              </span>
            </div>
          ))
        : null}
    </div>
  );
};

export default ClientsList;
