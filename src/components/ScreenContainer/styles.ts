import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

type ContainerStylesProps = {
  bgColor?: string;
};

export const Container = styled(SafeAreaView)<ContainerStylesProps>`
  width: 100%;

  /* flex: 1; */
  background-color: ${({ bgColor }) => bgColor};
`;
