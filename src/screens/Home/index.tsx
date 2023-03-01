import { useTheme } from 'styled-components/native';

import { useState } from 'react';

import { DDText } from '@components/DDText';
import { DailyDiet } from '@components/DailyDiet';
import { DarkButtton } from '@components/DarkButtton';
import { HeaderHome } from '@components/HeaderHome';
import { Meal } from '@components/Meal';
import { PercentResume } from '@components/PercentResume';

import { Container, Content, DietListWrapper } from './styles';

export const Home = () => {
  const [percent, setPercent] = useState(90.86);

  const theme = useTheme();

  return (
    <Container>
      <HeaderHome />
      <PercentResume percent={percent} />

      <Content>
        <DDText
          weight="regular"
          size="md"
          align="left"
          color={theme.colors.gray[100]}
          style={{ marginBottom: 8 }}
        >
          Refeições
        </DDText>
        <DarkButtton title="Nova refeição" showPlusIcon />

        <DietListWrapper>
          <DailyDiet date="12/08/2022" />
        </DietListWrapper>
      </Content>
    </Container>
  );
};
