import React from 'react';
import DialogContainer from '../../containers/DialogContainer';
import Title from '../ui/Title';

interface IEditAppoint {
  onClose: () => void;
}

const EditAppoint: React.FC<IEditAppoint> = ({ onClose }) => {
  return (
    <DialogContainer>
      <Title>
        Курс назначен пользователям: <button onClick={onClose}>x</button>
      </Title>
      <div>
        <label htmlFor='realtors'>
          <input type='checkbox' id='realtors' />
          Все риелторы
        </label>
        <label htmlFor='trainees'>
          <input type='checkbox' id='trainees' />
          Все стажеры
        </label>
        <label htmlFor='managers'>
          <input type='checkbox' id='managers' />
          Все РОПЫ
        </label>
      </div>
    </DialogContainer>
  );
};

export default EditAppoint;
