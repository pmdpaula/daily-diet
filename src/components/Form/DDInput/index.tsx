import { useTheme } from 'styled-components/native';

import { TextInputProps } from 'react-native';

import { DDText } from '@components/DDText';

import { Container, Input } from './styles';

type DDInputProps = TextInputProps & {
  title: string;
  placeholder?: string;
  width?: number;
  readOnly?: boolean;
  // inputRef?: React.RefObject<TextInput>;
};

export const DDInput = ({
  title,
  placeholder = '',
  width = 100,
  readOnly = false,
  // inputRef,
  ...rest
}: DDInputProps) => {
  const { colors } = useTheme();

  return (
    <Container width={width}>
      <DDText size="sm" color={colors.gray[200]} weight="bold">
        {title}
      </DDText>
      <Input
        placeholder={placeholder}
        placeholderTextColor={colors.gray[500]}
        readOnly={readOnly}
        {...rest}
      />
    </Container>
  );
};
