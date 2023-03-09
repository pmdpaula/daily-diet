import { TouchableOpacityProps } from 'react-native';

import { DDText } from '@components/DDText';

import { Circle, Container } from './styles';

export type IsOnDietTypeProps = 'on' | 'out';

type OnDietCheckButtonProps = TouchableOpacityProps & {
  title: string;
  isActive: boolean;
  type: IsOnDietTypeProps;
};

export const OnDietCheckButton = ({
  title,
  isActive,
  type,
  ...rest
}: OnDietCheckButtonProps) => {
  return (
    <Container isActive={isActive} type={type} {...rest}>
      <Circle type={type} />
      <DDText>{title}</DDText>
    </Container>
  );
};
