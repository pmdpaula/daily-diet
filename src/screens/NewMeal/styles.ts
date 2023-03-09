import { ArrowLeft } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { ScrollView } from 'react-native';

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

export const Form = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  width: 100%;
  height: 100%;

  flex: 1;
`;

export const Fields = styled.View`
  flex: 1;
`;

export const ViewRow = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 8px;
`;

export const Icon = styled(ArrowLeft).attrs<IconStyleProps>(({ theme }) => ({
  size: theme.font_size.xl,
}))``;
