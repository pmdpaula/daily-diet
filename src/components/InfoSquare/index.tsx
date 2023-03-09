import styled from 'styled-components';
import { useTheme } from 'styled-components/native';

import React, { useState } from 'react';

import { ViewProps } from 'react-native';

import { DDText } from '@components/DDText';

import { Container } from './styles';

type InfoSquareProps = ViewProps & {
  title: string;
  subTitle: string;
  bgColor?: string;
};

export const InfoSquare = ({
  title,
  subTitle,
  bgColor = '#EFF0F0',
  ...rest
}: InfoSquareProps) => {
  const theme = useTheme();

  return (
    <Container bgColor={bgColor} {...rest}>
      <DDText
        size="xl"
        color={theme.colors.gray[100]}
        align="center"
        weight="bold"
      >
        {title}
      </DDText>
      <DDText size="sm">{subTitle}</DDText>
    </Container>
  );
};
