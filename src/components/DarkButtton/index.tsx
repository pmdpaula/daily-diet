import { Plus } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { DDText } from '@components/DDText';

import { Container } from './styles';

type DarkButttonProps = {
  title: string;
  showPlusIcon?: boolean;
};

export const DarkButtton = ({
  title,
  showPlusIcon = false,
  ...rest
}: DarkButttonProps) => {
  const theme = useTheme();

  return (
    <Container {...rest}>
      {showPlusIcon && <Plus color={theme.colors.white} size={18} />}
      <DDText
        weight="regular"
        size="sm"
        align="left"
        color={theme.colors.white}
        style={{ marginLeft: showPlusIcon ? 8 : 0 }}
      >
        {title}
      </DDText>
    </Container>
  );
};
