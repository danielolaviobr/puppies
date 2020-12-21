import React, {useCallback} from 'react';
import Button from '../../Components/Button';
import {useTheme} from '../../hooks/theme';
import {useNavigation} from '@react-navigation/native';
import {BackgroundImage, Container, Title} from './style';
import dog from '../../assets/dog.png';

const Home: React.FC = () => {
  const {theme, switchTheme} = useTheme();
  const navigation = useNavigation();

  const handleStartGame = useCallback(() => {
    navigation.navigate('Game');
  }, []);

  return (
    <Container style={theme.container}>
      <Title style={theme.title}>Welcome to Puppies</Title>
      <Button theme={theme.button} onPress={handleStartGame}>
        Start Game
      </Button>
      <BackgroundImage source={dog} />
      <Button theme={theme.button} onPress={switchTheme}>
        Change Theme
      </Button>
    </Container>
  );
};

export default Home;
