import { ArrowLeft, IconProps } from 'phosphor-react-native';
import styled from 'styled-components/native';

type ContainerStylesProps = {
  bgColor: string;
};

type IconStyleProps = {
  isOnDiet: boolean;
};

export const Container = styled.View<ContainerStylesProps>`
  width: 100%;
  /* height: 100vh; */

  background-color: ${({ bgColor }) => bgColor};
`;

export const Header = styled.View`
  width: 100%;
  height: 200px;

  justify-content: center;
  align-items: center;

  background-color: transparent;

  padding-top: 42px;
`;

export const Icon = styled(ArrowLeft).attrs<IconStyleProps>(({ theme }) => ({
  size: theme.font_size.xl,
}))`
  position: relative;
  /* top: 5px; */
  /* left: 5px; */
`;

export const Content = styled.View`
  /* width: 100%; */
  height: 100%;

  /* flex: 1; */
  align-items: center;
  /* justify-content: center; */

  background-color: ${({ theme }) => theme.colors.gray[700]};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 0 24px;
  padding-top: 36px;
`;

export const ResumeWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;

  flex-wrap: wrap;
  width: 100%;

  /* background-color: transparent; */
`;
