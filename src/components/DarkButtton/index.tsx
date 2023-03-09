import { Plus } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { TouchableOpacityProps } from 'react-native';

import { DDText } from '@components/DDText';

import { Container } from './styles';

type DarkButttonProps = TouchableOpacityProps & {
  title: string;
  showPlusIcon?: boolean;
  onPress: () => void;
};

export const DarkButtton = ({
  title,
  showPlusIcon = false,
  onPress,
  ...rest
}: DarkButttonProps) => {
  const theme = useTheme();

  return (
    <Container onPress={onPress} {...rest}>
      {showPlusIcon && <Plus color={theme.colors.white} size={18} />}
      <DDText
        weight="regular"
        size="sm"
        align="center"
        color={theme.colors.white}
        style={{ marginLeft: showPlusIcon ? 8 : 0 }}
      >
        {title}
      </DDText>
    </Container>
  );
};
