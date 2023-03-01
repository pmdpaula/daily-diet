import styled from 'styled-components';

import React, { useState } from 'react';

import { View } from 'react-native';

import { Container, Icon, Percent, PercentWrapper, ResumeText } from './styles';

type PercentResumeProps = {
  percent: number;
};

export const PercentResume = ({ percent }: PercentResumeProps) => {
  return (
    <Container isOnDiet={percent >= 60}>
      <PercentWrapper>
        <Percent>
          {(percent / 100).toLocaleString('pt-BR', {
            style: 'percent',
            minimumFractionDigits: 2,
          })}
        </Percent>
        <ResumeText>das refeições dentro da dieta</ResumeText>
      </PercentWrapper>

      <Icon />
    </Container>
  );
};
