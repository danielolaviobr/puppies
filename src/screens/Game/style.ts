import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

export const DogImage = styled.Image`
  min-height: 250px;
  min-width: 250px;
  max-height: 500px;
  max-width: 500px;
  border-radius: 10px;
  margin: 40px;
`;

export const LoadingIndicator = styled.ActivityIndicator`
  min-height: 250px;
  min-width: 250px;
  max-height: 500px;
  max-width: 500px;
  margin: 40px;
`;

export const CongratulationTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;
