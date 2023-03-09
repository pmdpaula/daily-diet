import { TextProps } from 'react-native';

import theme, { TextSize, TextWeight } from '../../theme';
import { Container } from './styles';

export type DDTextProps = TextProps & {
  weight?: TextWeight;
  size?: TextSize;
  align?: 'left' | 'center' | 'right';
  color?: string;
};

export const DDText = ({
  weight,
  size,
  align,
  color = theme.colors.gray[200],
  children,
  ...rest
}: DDTextProps) => {
  return (
    <Container
      weight={weight}
      size={size}
      align={align}
      color={color}
      {...rest}
    >
      {children}
    </Container>
  );
};
