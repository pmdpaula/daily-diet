import { useTheme } from 'styled-components/native';

import { DDText } from '@components/DDText';

import { Container, Content, Separator, Signal } from './styles';

type MealProps = {
  isOnDiet: boolean;
  name: string;
  time: string;
};

export const Meal = ({ isOnDiet, name, time }: MealProps) => {
  const theme = useTheme();

  return (
    <Container>
      <Content>
        <DDText
          align="center"
          size="xs"
          weight="bold"
          color={theme.colors.gray[100]}
          // color="#1B1D1E"
        >
          {time}
        </DDText>

        <Separator />

        <DDText align="left" size="xs" weight="regular">
          {name}
        </DDText>
      </Content>
      <Signal isOnDiet={isOnDiet} />
    </Container>
  );
};
