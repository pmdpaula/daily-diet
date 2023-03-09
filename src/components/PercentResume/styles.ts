import { ArrowUpRight } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

type PercentResumeStyleProps = {
  isOnDiet: boolean;
};

export const Container = styled(TouchableOpacity)<PercentResumeStyleProps>`
  ${({ theme, isOnDiet }) => css`
    background-color: ${isOnDiet
      ? theme.colors.secondary.light
      : theme.colors.primary.light};
  `}

  width: 100%;
  height: 102px;

  /* flex: 1; */
  flex-direction: row;
  /* justify-content: center;
  align-items: center; */

  border-radius: 8px;
`;

export const PercentWrapper = styled.View`
  width: 100%;

  justify-content: center;
  align-items: center;
`;

export const Percent = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.xxl}px;
    color: ${theme.colors.gray[100]};
  `}
`;

export const ResumeText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.sm}px;
    color: ${theme.colors.gray[100]};
  `}
`;

export const Icon = styled(ArrowUpRight).attrs<PercentResumeStyleProps>(
  ({ theme, isOnDiet }) => ({
    // color: isOnDiet ? theme.colors.secondary.dark : theme.colors.primary.dark,
    size: theme.font_size.xl,
  }),
)`
  position: relative;
  top: 5px;
  right: 29px;
`;
