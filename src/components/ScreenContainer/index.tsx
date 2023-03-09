import { ViewProps } from 'react-native';

import theme from '../../theme';
import { Container } from './styles';

type ScreenContainerProps = ViewProps & {
  bgColor?: string;
  children?: React.ReactNode;
};

export const ScreenContainer = ({
  bgColor = theme.colors.gray[700],
  children,
  ...rest
}: ScreenContainerProps) => {
  return (
    <Container bgColor={bgColor} {...rest}>
      {children}
    </Container>
  );
};
