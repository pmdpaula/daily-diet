import { TextSize, TextWeight } from 'src/theme';

import { TextProps } from 'react-native';

import { Container } from './styles';

export type DDTextProps = TextProps & {
  weight: TextWeight;
  size: TextSize;
  align: 'left' | 'center' | 'right';
  // children: React.ReactNode;
  color?: string;
};

export const DDText = ({
  weight,
  size,
  align,
  color,
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
