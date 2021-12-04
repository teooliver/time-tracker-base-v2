import React, { FC, useState } from 'react';
import { Dot } from '../../icons/Dot';
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';
import { IDbTask } from '../../../interfaces/task';
import { calculateTimer } from '../../../utils/timer';
import { ThreeDotsVertical } from '../../icons/ThreeDotsVertical';
import DatePicker from 'react-datepicker';
import CustomDatePickerInput from '../CustomDatePickerInput/CustomDatePickerInput';
import { useDeleteTask } from '../../../hooks/useDeleteTask';
import { useUpdateTask } from '../../../hooks/useUpdateTask';
import '@reach/menu-button/styles.css';
import styles from './EventRow.module.css';

interface Props {
  task: IDbTask;
}

const EventRow: FC<Props> = ({ task }) => {
  const [startDate, setStartDate] = useState(
    task.initial_time ? new Date(task.initial_time) : null
  );

  const [endDate, setEndDate] = useState(
    task.end_time ? new Date(task.end_time) : null
  );

  const deletePostMutation = useDeleteTask();
  const updateTaskMutation = useUpdateTask();

  const endTime = new Date(endDate!).getTime();
  const initialTime = new Date(startDate!).getTime();

  const timeInSeconds: number | null = Math.round(
    (endTime - initialTime) / 1000
  );

  const [hours, minutes, seconds] = calculateTimer(timeInSeconds);

  const handleStartDateChange = (date: Date) => {
    // TODO: DEBOUNCE MUTATE
    setStartDate(date);
    updateTaskMutation.mutate({ ...task, initial_time: date });
  };

  const handleEndDateChange = (date: Date) => {
    // TODO: DEBOUNCE MUTATE
    setEndDate(date);
    updateTaskMutation.mutate({ ...task, end_time: date });
  };

  return (
    <>
      <li className={styles['list-item']}>
        <div className={styles['task']}>
          <span className={styles['task-name']}> {task.name}</span>
          <span
            className={styles['project']}
            style={{ color: task.project_color }}
          >
            {task.project ? (
              <>
                <Dot />
                {task.project}
              </>
            ) : (
              <>
                <Dot />
                No Project
              </>
            )}
          </span>
        </div>
        <div className={styles['rigth-side']}>
          <span className={styles['date-picker']}>
            <DatePicker
              selected={startDate}
              // @ts-ignore
              onChange={(date) => handleStartDateChange(date)}
              timeInputLabel='Time:'
              dateFormat='h:mm aa'
              showTimeInput
              customInput={<CustomDatePickerInput />}
            />
          </span>
          <span>-</span>
          <span className={styles['date-picker']}>
            <DatePicker
              selected={endDate}
              // @ts-ignore
              onChange={(date) => handleEndDateChange(date)}
              timeInputLabel='Time:'
              dateFormat='h:mm aa'
              showTimeInput
              customInput={<CustomDatePickerInput />}
            />
          </span>
          <span className={styles['total']}>
            {hours}:{minutes}:{seconds}
          </span>
          <span className={styles['menu']}>
            <Menu>
              <MenuButton>
                <ThreeDotsVertical />
              </MenuButton>
              <MenuList>
                <MenuItem onSelect={() => deletePostMutation.mutate(task._id!)}>
                  Delete
                </MenuItem>
              </MenuList>
            </Menu>
          </span>
        </div>
      </li>
    </>
  );
};

export default EventRow;
