import React, { useEffect, useState } from 'react';
import DialogContainer from '../../containers/DialogContainer';
import Title from '../ui/Title';
import { getAppointCourse, sendAppointCourse } from '../../core/api';
import { useAsyncValue } from 'react-router-dom';
import { IQuestion } from '../../core/types/questions';
import Label from '../ui/Label';
import Checkbox from '../ui/Checkbox';
import Button from '../ui/Button';
import * as S from './styled';
import { IAppointData } from '../../core/types/quize';

interface IEditAppoint {
  onClose: () => void;
}

const EditAppoint: React.FC<IEditAppoint> = ({ onClose }) => {
  const quize = useAsyncValue() as IQuestion;
  const [dataAppoint, setDataAppoint] = useState<IAppointData | null>(null);
  useEffect(() => {
    requestAppointData();
  }, []);
  const requestAppointData = () => {
    getAppointCourse(quize.UID).then((data) => {
      if (data) {
        setDataAppoint(data);
        return;
      }
      onClose();
    });
  };
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const id = e.currentTarget.id as keyof IAppointData;
    setDataAppoint((prevState) => {
      if (prevState) {
        return { ...prevState, [id]: !prevState[id] };
      }
      return prevState;
    });
  };
  const handleSave = () => {
    if (dataAppoint) {
      sendAppointCourse(dataAppoint).then((answer) => {
        if (answer === 'OK') {
          onClose();
        }
      });
    }
  };
  return (
    <DialogContainer>
      <Title>Курс назначен пользователям:</Title>
      <S.EditAppointContent>
        <Label label='Все риелторы' position='right' gap='0.5rem'>
          <Checkbox
            checked={dataAppoint?.allRealtors || false}
            id='allRealtors'
            onChange={handleChange}
          />
        </Label>
        <Label label='Все стажеры' position='right' gap='0.5rem'>
          <Checkbox
            checked={dataAppoint?.allInterns || false}
            id='allInterns'
            onChange={handleChange}
          />
        </Label>
        <Label label='Все РОПЫ' position='right' gap='0.5rem'>
          <Checkbox
            checked={dataAppoint?.allChiefs || false}
            id='allChiefs'
            onChange={handleChange}
          />
        </Label>
      </S.EditAppointContent>
      <S.EditAppointFooter>
        <Button onClick={onClose} variant='outline'>
          Закрыть
        </Button>
        <Button onClick={handleSave}>Сохранить</Button>
      </S.EditAppointFooter>
    </DialogContainer>
  );
};

export default EditAppoint;
