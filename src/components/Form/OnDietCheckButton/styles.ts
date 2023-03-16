/* eslint-disable indent */
import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

import { OnDietTypeProps } from '.';

type ContainerStylesProps = {
  isActive?: boolean;
  type: OnDietTypeProps;
};

export const Container = styled(TouchableOpacity)<ContainerStylesProps>`
  width: 48%;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* flex: 1; */
  /* background-color: ${({ theme }) => theme.colors.gray[600]}; */
  background-color: ${({ theme, isActive, type }) =>
    isActive && type === 'on'
      ? theme.colors.secondary.light
      : isActive && type === 'out'
      ? theme.colors.primary.light
      : theme.colors.gray[600]};

  border: 1px solid;

  border-color: ${({ theme, isActive, type }) =>
    isActive && type === 'on'
      ? theme.colors.secondary.dark
      : isActive && type === 'out'
      ? theme.colors.primary.dark
      : theme.colors.gray[600]};

  padding: 16px;
  border-radius: 6px;
  margin-top: 8px;
`;

export const Circle = styled.View<ContainerStylesProps>`
  width: 8px;
  height: 8px;

  margin-right: 8px;
  border-radius: 4px;

  background-color: ${({ theme, type }) =>
    type === 'on' ? theme.colors.secondary.dark : theme.colors.primary.dark};
`;
