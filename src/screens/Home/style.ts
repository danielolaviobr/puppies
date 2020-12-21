import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

export const Title = styled.Text`
  font-size: 44px;
  font-weight: bold;
  letter-spacing: -3px;
  line-height: 60px;
  z-index: 10;
  margin-top: 90px;
  margin-bottom: 30px;
`;

export const BackgroundImage = styled.Image`
  position: absolute;
  top: -10px;
  left: -10px;
  transform: rotateZ(20deg);
  max-height: 500px;
  max-width: 500px;
  min-height: 250px;
  min-width: 250px;
  z-index: 0;
`;
