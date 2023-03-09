import { useTheme } from 'styled-components/native';

import { MealProps } from '@screens/Home';

import { DDText } from '@components/DDText';
import { Meal } from '@components/Meal';

import { Container } from './styles';

type DailyDietProps = {
  data?: MealProps[];
  date: string;
};

export const DailyDiet = ({ date }: DailyDietProps) => {
  const theme = useTheme();

  const dateParts = date.split('/');
  const day = dateParts[0];
  const month = dateParts[1];
  const year = dateParts[2].substring(2);

  const formatedDate = day + '.' + month + '.' + year;
  // let formatedDate = new Date(year, month - 1, day).toLocaleString('pt-BR', {
  //   year: '2-digit',
  //   month: '2-digit',
  //   day: '2-digit',
  // });

  return (
    <Container>
      <DDText
        align="left"
        size="xs"
        weight="bold"
        color={theme.colors.gray[100]}
        style={{ marginBottom: 16 }}
      >
        {formatedDate}
      </DDText>

      <Meal isOnDiet={false} name="X-tudo" time="20:00" />
      <Meal isOnDiet={true} name="Sanduíche" time="16:00" />
    </Container>
  );
};
