import React, { ComponentProps } from 'react';
import * as S from './styled';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, outlineTheme, lineTheme } from './theme';

interface IButtonProps extends ComponentProps<'button'> {
  children: string;
  fullWidth?: boolean;
  variant?: 'default' | 'outline' | 'line';
  color?: 'primary' | 'error' | 'info';
}
const Button: React.FC<IButtonProps> = ({
  children,
  fullWidth,
  variant = 'default',
  color = 'primary',
  type = 'button',
  ...otherProps
}) => {
  const getTheme = () => {
    switch (variant) {
      case 'outline':
        return outlineTheme;
      case 'line':
        return lineTheme;
      default:
        return defaultTheme;
    }
  };
  const theme = getTheme();
  return (
    <ThemeProvider theme={theme}>
      <S.ButtonStyle
        $fullWidth={fullWidth}
        {...otherProps}
        color={color}
        type={type}
      >
        {children}
      </S.ButtonStyle>
    </ThemeProvider>
  );
};

export default Button;
