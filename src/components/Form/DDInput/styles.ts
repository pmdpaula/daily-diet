import styled, { css } from 'styled-components/native';

import { TextInput, TextInputProps } from 'react-native';

type ContainerStylesProps = {
  width: number;
};

export const Container = styled.View<ContainerStylesProps>`
  width: ${({ width }) => width}%;
  padding: 12px 0;
`;

export const Input = styled(TextInput).attrs<TextInputProps>(({ theme }) => ({
  placeholderTextColor: theme.colors.gray[500],
}))`
  /* width: 100%; */

  min-height: 48px;
  max-height: 48px;

  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.md}px;

    /* background-color: ${theme.colors.gray[500]}; */
    color: ${theme.colors.gray[100]};
  `}

  border: 1px solid ${({ theme }) => theme.colors.gray[500]};
  border-radius: 6px;
  margin-top: 4px;
  padding: 14px;
`;
