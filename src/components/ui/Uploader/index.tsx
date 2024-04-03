import React, { useRef, useState } from 'react';
import * as S from './styled';
import Button from '../Button';

interface IUploader extends Omit<React.ComponentProps<'input'>, 'type'> {}

const Uploader: React.FC<IUploader> = (props) => {
  console.log('update');

  const { ...otherProps } = props;
  const [text, setText] = useState('Файл не выбран');

  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputRef.current?.click();
  };
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.currentTarget?.files) {
      setText(e.currentTarget.files[0].name);
    }
    if (props?.onChange) {
      props.onChange(e);
    }
  };

  return (
    <S.Uploader>
      <Button onClick={handleClick}>Выберете файл</Button>
      <S.UploaderText>{text}</S.UploaderText>
      <S.HiidernInput
        ref={inputRef}
        type='file'
        {...otherProps}
        onChange={handleChange}
      />
    </S.Uploader>
  );
};

export default Uploader;
