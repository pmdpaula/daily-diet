import { DDText } from '@components/DDText';

import { Container, Message } from './styles';

type ListEmptyProps = {
  message: string;
};

export const ListEmpty = ({ message }: ListEmptyProps) => {
  return (
    <Container>
      {/* <Message>{message}</Message> */}
      <DDText>{message}</DDText>
    </Container>
  );
};
