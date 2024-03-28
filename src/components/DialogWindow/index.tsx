import { AnimatePresence } from 'framer-motion';
import React from 'react';
import * as S from './styled';

interface DialogWindowProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const DialogWindow: React.FC<DialogWindowProps> = ({
  open,
  onClose,
  children,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <S.DialogWindow
          onClick={onClose}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
        >
          {children}
        </S.DialogWindow>
      )}
    </AnimatePresence>
  );
};

export default DialogWindow;
