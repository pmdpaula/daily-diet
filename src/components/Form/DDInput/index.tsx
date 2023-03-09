import { useTheme } from 'styled-components/native';

import { TextInput, TextInputProps } from 'react-native';

import { DDText } from '@components/DDText';

import { Container, Input } from './styles';

type DDInputProps = TextInputProps & {
  title: string;
  placeholder?: string;
  width?: number;
  inputRef?: React.RefObject<TextInput>;
};

export const DDInput = ({
  title,
  placeholder = '',
  width = 100,
  inputRef,
  ...rest
}: DDInputProps) => {
  const { colors } = useTheme();

  return (
    <Container width={width}>
      <DDText size="sm" color={colors.gray[200]} weight="bold">
        {title}
      </DDText>
      <Input placeholder={placeholder} {...rest} ref={inputRef} />
    </Container>
  );
};
