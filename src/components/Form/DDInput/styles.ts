import styled, { css } from 'styled-components/native';

import { TextInput } from 'react-native';

type ContainerStylesProps = {
  width: number;
};

type InputStylesProps = {
  readOnly: boolean;
};

export const Container = styled.View<ContainerStylesProps>`
  width: ${({ width }) => width}%;
  padding: 12px 0;
`;

export const Input = styled(TextInput).attrs<InputStylesProps>(
  ({ theme, readOnly }) => ({
    placeholderTextColor: theme.colors.gray[500],
    // editable: !readOnly,
    backgroundColor: readOnly ? theme.colors.gray[500] : theme.colors.gray[700],
  }),
)<InputStylesProps>`
  /* width: 100%; */

  min-height: 48px;
  max-height: 48px;

  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.md}px;

    color: ${theme.colors.gray[100]};
  `}

  border: 1px solid ${({ theme }) => theme.colors.gray[500]};
  border-radius: 6px;
  margin-top: 4px;
  padding: 14px;
`;
