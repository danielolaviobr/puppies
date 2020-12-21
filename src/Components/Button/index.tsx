import React from 'react';
import {Container, Label} from './styles';

interface ButtonProps {
  children: string;
  onPress(): void;
  theme: object;
}

const Button: React.FC<ButtonProps> = ({children, onPress, theme, ...rest}) => {
  return (
    <Container style={theme} onPress={onPress}>
      <Label>{children}</Label>
    </Container>
  );
};

export default Button;
