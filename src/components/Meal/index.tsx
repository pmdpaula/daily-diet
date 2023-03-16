import { useTheme } from 'styled-components/native';

import { MealStorageDTO } from '@storage/meal/MealStorageDTO';

import { DDText } from '@components/DDText';

import { Container, Content, Separator, Signal } from './styles';

type MealProps = {
  // isOnDiet: boolean;
  // name: string;
  // time: string;
  data: MealStorageDTO;
};

// export const Meal = ({ isOnDiet, name, time }: MealProps) => {
export const Meal = ({ data }: MealProps) => {
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
          {data.time}
        </DDText>

        <Separator />

        <DDText align="left" size="xs" weight="regular">
          {data.name}
        </DDText>
      </Content>
      <Signal isOnDiet={data.isOnDiet} />
    </Container>
  );
};
