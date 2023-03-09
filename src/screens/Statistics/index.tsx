import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
// import { format, parse } from 'date-fns';
import { useTheme } from 'styled-components/native';

import { useCallback, useEffect, useState } from 'react';

import { TouchableOpacity } from 'react-native';

import { DDText } from '@components/DDText';
import { InfoSquare } from '@components/InfoSquare';

import { Container, Content, Header, Icon, ResumeWrapper } from './styles';

type RouteParams = {
  percent: number;
};

export const Statistics = () => {
  const [isLoading, setIsLoading] = useState(false);

  const route = useRoute();
  const { percent } = route.params as RouteParams;
  const theme = useTheme();
  const { navigate } = useNavigation();

  function handleBackButtom() {
    navigate('home');
  }

  return (
    <Container
      bgColor={
        percent >= 60
          ? theme.colors.secondary.light
          : theme.colors.primary.light
      }
    >
      <Header>
        <TouchableOpacity
          style={{
            alignItems: 'flex-start',
            width: '100%',
            paddingHorizontal: 24,
          }}
          onPress={handleBackButtom}
        >
          <Icon
            color={
              percent >= 60
                ? theme.colors.secondary.dark
                : theme.colors.primary.dark
            }
          />
        </TouchableOpacity>
        <DDText
          weight="bold"
          size="xxl"
          color={theme.colors.gray[100]}
          align="center"
        >
          {(percent / 100).toLocaleString('pt-BR', {
            style: 'percent',
            minimumFractionDigits: 2,
          })}
        </DDText>
        <DDText>das refeições dentro da dieta</DDText>
      </Header>
      <Content>
        <DDText
          size="sm"
          color={theme.colors.gray[100]}
          weight="bold"
          style={{ marginBottom: 18 }}
        >
          Estatísticais gerais
        </DDText>
        <InfoSquare
          title="22"
          subTitle="melhor sequência de pratos dentro da dieta"
        />
        <InfoSquare title="109" subTitle="refeições registradas" />

        <ResumeWrapper>
          <InfoSquare
            title="99"
            subTitle="refeições dentro da dieta"
            bgColor={theme.colors.secondary.light}
            style={{ width: '48%', marginRight: 12 }}
          />
          <InfoSquare
            title="10"
            subTitle="refeições fora da dieta"
            bgColor={theme.colors.primary.light}
            style={{ width: '48%' }}
          />
        </ResumeWrapper>
      </Content>
    </Container>
  );
};
