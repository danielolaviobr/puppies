import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import Exit from '../../Components/Exit';
import Next from '../../Components/Next';
import OptionButton from '../../Components/OptionButton';
import {useTheme} from '../../hooks/theme';
import api from '../../services/api';
import {
  CongratulationTitle,
  Container,
  DogImage,
  LoadingIndicator,
} from './style';
import {View} from 'react-native';

type breedOptionsProps = Array<{
  breed: string;
  isAwnser: boolean;
}>;

const Game: React.FC = () => {
  const [selectedBreedImage, setSelectedBreedImage] = useState<string>();
  const [breedOptions, setBreedOptions] = useState<breedOptionsProps>([]);
  const [hasBeenAwnsered, setHasBeenAwnsered] = useState(false);
  const [answerIndex, setAwnserIndex] = useState<number>();
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>();
  const {theme} = useTheme();
  const navigation = useNavigation();

  const handleExit = useCallback(() => {
    navigation.navigate('Home');
  }, []);

  const handleNext = useCallback(() => {
    setHasBeenAwnsered(false);
    setSelectedBreedImage('');
    setBreedOptions([]);
    const index = generateRandomIndex();
    fetchOptionsAndImage(index);
  }, []);

  const handleOptionSelection = useCallback((index) => {
    setSelectedOptionIndex(index);
    setHasBeenAwnsered(true);
  }, []);

  const capitalizeFirstLetter = useCallback((inputString: string) => {
    const words = inputString.split(' ');
    const capitalizedWords = [];
    words.forEach((word: string) => {
      capitalizedWords.push(word[0].toUpperCase() + word.slice(1, word.length));
    });
    return capitalizedWords.join(' ');
  }, []);

  const generateRandomIndex = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
  }, []);

  const fetchOptionsAndImage = useCallback(async (selectedIndex: number) => {
    setAwnserIndex(selectedIndex);
    const response = await api.get('/image/random/4');
    const dogBreeds = response.data.message;
    const selectedImage = dogBreeds[selectedIndex];
    setSelectedBreedImage(selectedImage);
    const capitalizedBreedOptions = dogBreeds.map(
      (breedLink: string, index: number) => {
        const breed = breedLink.split('/')[4].replace('-', ' ');
        const capitalizedBreed = capitalizeFirstLetter(breed);
        return {breed: capitalizedBreed, isAwnser: selectedIndex === index};
      },
    );
    setBreedOptions(capitalizedBreedOptions);
  }, []);

  useEffect(() => {
    const index = generateRandomIndex();
    fetchOptionsAndImage(index);
  }, []);

  return (
    <Container style={theme.container}>
      <Exit theme={theme.icon} onPress={handleExit} />
      <Next theme={theme.icon} onPress={handleNext} />
      {selectedBreedImage ? (
        <DogImage
          source={{
            uri: selectedBreedImage,
          }}
        />
      ) : (
        <LoadingIndicator />
      )}
      {hasBeenAwnsered ? (
        <CongratulationTitle
          style={{
            color: answerIndex === selectedOptionIndex ? '#23CE6B' : '#FF5964',
          }}>
          {answerIndex === selectedOptionIndex
            ? 'Nice, congratulations'
            : 'Ops maybe next time'}
        </CongratulationTitle>
      ) : null}
      {breedOptions ? (
        breedOptions.map((breedOption, index) => {
          return (
            <OptionButton
              key={index}
              theme={theme.button}
              isAwnser={breedOption.isAwnser}
              hasBeenAwnsered={hasBeenAwnsered}
              onPress={() => handleOptionSelection(index)}>
              {breedOption.breed}
            </OptionButton>
          );
        })
      ) : (
        <LoadingIndicator />
      )}
    </Container>
  );
};

export default Game;
