import {StyleSheet} from 'react-native';

export const darkTheme = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  button: {
    backgroundColor: '#23CE6B',
  },
  correct: {
    backgroundColor: '#23CE6B',
  },
  incorrect: {
    backgroundColor: '#FF5964',
  },
  title: {
    color: '#fff',
  },
  icon: {
    color: '#fff',
  },
});

export const lightTheme = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#A846A0',
  },
  correct: {
    backgroundColor: '#23CE6B',
  },
  incorrect: {
    backgroundColor: '#FF5964',
  },
  title: {
    color: '#000',
  },
  icon: {
    color: '#000',
  },
});
