import { DDText } from '@components/DDText';

import { Container, Signal } from './styles';

type ChipDietProps = {
  isOnDiet: boolean;
};

export const ChipDiet = ({ isOnDiet }: ChipDietProps) => {
  return (
    <Container>
      <Signal isOnDiet={isOnDiet} />
      <DDText size="sm">
        {isOnDiet ? 'dentro da dieta' : 'fora da dieta'}
      </DDText>
    </Container>
  );
};
