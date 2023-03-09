import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import React from 'react';

import { Container, Icon, Percent, PercentWrapper, ResumeText } from './styles';

type PercentResumeProps = {
  percent: number;
};

export const PercentResume = ({ percent }: PercentResumeProps) => {
  const theme = useTheme();
  const { navigate } = useNavigation();

  function handleOpenStatistics() {
    navigate('statistics', { percent });
  }

  return (
    <Container isOnDiet={percent >= 60} onPress={handleOpenStatistics}>
      <PercentWrapper>
        <Percent>
          {(percent / 100).toLocaleString('pt-BR', {
            style: 'percent',
            minimumFractionDigits: 2,
          })}
        </Percent>
        <ResumeText>das refeições dentro da dieta</ResumeText>
      </PercentWrapper>

      <Icon
        color={
          percent >= 60
            ? theme.colors.secondary.dark
            : theme.colors.primary.dark
        }
      />
    </Container>
  );
};
