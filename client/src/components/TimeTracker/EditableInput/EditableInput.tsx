import { FC, useContext, useState } from 'react';
import { TaskContext } from '../../../context/TaskContext';
import styles from './EditableInput.module.css';

interface EditableInputProps {
  // eventName: string;
  // setEventName: Function;
}

const EditableInput: FC<EditableInputProps> = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { task, setTask } = useContext(TaskContext);

  const onKeyUp = (event: any) => {
    if (event.charCode === 13) {
      setIsEditing(false);
    }
  };

  return (
    <div className={styles['EditableInput']}>
      {isEditing ? (
        <input
          autoFocus
          className={styles['event-name-input']}
          type='text'
          value={task.name}
          placeholder='What are you working on?'
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          onSubmit={() => setIsEditing(false)}
          onKeyPress={onKeyUp}
        />
      ) : (
        // Todo: hover::cursor: text;
        <p
          className={styles['event-name-input']}
          onClick={() => setIsEditing(true)}
        >
          {task?.name ? task.name : 'What are you working on?'}
        </p>
      )}
    </div>
  );
};

export default EditableInput;
