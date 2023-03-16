import { ArrowLeft } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

type ContainerStylesProps = {
  bgColor: string;
};

type IconStyleProps = {
  isOnDiet: boolean;
};

export const Container = styled(SafeAreaView)<ContainerStylesProps>`
  width: 100%;

  flex: 1;

  background-color: ${({ bgColor }) => bgColor};
`;

export const Header = styled.View`
  width: 100%;
  height: 104px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: transparent;

  padding: 0 24px;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;

  background-color: ${({ theme }) => theme.colors.gray[700]};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 24px;
`;

export const ButtonsWrapper = styled.View`
  width: 100%;
  padding: 24px;

  background-color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Icon = styled(ArrowLeft).attrs<IconStyleProps>(({ theme }) => ({
  size: theme.font_size.xl,
}))``;

export const ModalCenter = styled.View`
  width: 100%;

  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: rgba(51, 54, 56, 0.5);
`;

export const ModalWrapper = styled.View`
  width: 90%;
  /* height: 50%; */

  background-color: ${({ theme }) => theme.colors.gray[700]};
  /* flex: 1; */
  justify-content: center;
  /* align-items: center; */

  margin: 24px;
  padding: 24px;
  border-radius: 8px;
`;

export const ModalButtonsWrapper = styled.View`
  width: 50%;
  padding: 24px 18px;

  flex-direction: row;
  /* justify-content: center; */
  /* align-items: center; */
  /* background-color: ${({ theme }) => theme.colors.gray[700]}; */
  background-color: 'blue';
`;
