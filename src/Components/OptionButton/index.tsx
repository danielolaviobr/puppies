import React from 'react';
import {useTheme} from '../../hooks/theme';
import {Container, Label} from './styles';

interface OptionButtonProps {
  children: string;
  onPress(index: number): void;
  theme: object;
  isAwnser: boolean;
  hasBeenAwnsered: boolean;
}

const OptionButton: React.FC<OptionButtonProps> = ({
  children,
  onPress,
  theme,
  isAwnser,
  hasBeenAwnsered,
  ...rest
}) => {
  const themeHook = useTheme();

  return (
    <Container
      style={[
        theme,
        hasBeenAwnsered
          ? isAwnser
            ? themeHook.theme.correct
            : themeHook.theme.incorrect
          : null,
      ]}
      onPress={onPress}>
      <Label>{children}</Label>
    </Container>
  );
};

export default OptionButton;
