import { PencilSimpleLine, Plus, Trash } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { TouchableOpacityProps } from 'react-native';

import { DDText } from '@components/DDText';

import { Container } from './styles';

type DDButttonProps = TouchableOpacityProps & {
  title: string;
  iconType?: 'add' | 'edit' | 'delete';
  isDark?: boolean;
  onPress: () => void;
};

export const DDButtton = ({
  title,
  iconType,
  isDark = true,
  onPress,
  ...rest
}: DDButttonProps) => {
  const { colors } = useTheme();

  const ButtonIcon = () => {
    if (iconType === 'add') {
      return (
        <Plus
          color={isDark ? colors.white : colors.gray[200]}
          size={18}
          weight="bold"
        />
      );
    }

    if (iconType === 'edit') {
      return (
        <PencilSimpleLine
          color={isDark ? colors.white : colors.gray[200]}
          size={18}
        />
      );
    }

    if (iconType === 'delete') {
      return (
        <Trash
          color={isDark ? colors.white : colors.gray[200]}
          size={18}
          weight="bold"
        />
      );
    }

    return null;
  };

  return (
    <Container onPress={onPress} isDark={isDark} {...rest}>
      {iconType && <ButtonIcon />}
      <DDText
        weight="bold"
        size="sm"
        align="center"
        color={isDark ? colors.white : colors.gray[100]}
        style={{ marginLeft: iconType ? 12 : 0 }}
      >
        {title}
      </DDText>
    </Container>
  );
};
