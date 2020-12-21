import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Container} from './styles';

interface ExitProps {
  onPress(): void;
  theme: object;
}

const Exit: React.FC<ExitProps> = ({onPress, theme}) => {
  return (
    <Container onPress={onPress}>
      <Icon name="x" size={32} style={theme} />
    </Container>
  );
};

export default Exit;
