import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 56px 0;
  /* margin-bottom: 56px; */
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const UserButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;

  border-width: 2px;
  border-color: #000;
  border-radius: 25px;

  object-fit: fill;
`;

export const Photo = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: 25px;
`;
