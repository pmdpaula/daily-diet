// import { TextSize, TextWeight } from 'src/theme';
import styled, { css } from 'styled-components/native';

import { Text } from 'react-native';

import { DDTextProps } from '.';

export const Container = styled(Text)<DDTextProps>`
  /* width: 100%; */

  ${({ theme, weight, size, align, color }) => css`
    height: ${theme.font_size[size] * 1.3}px;
    font-family: ${theme.font_family[weight]};
    font-size: ${theme.font_size[size]}px;
    text-align: ${align};
    color: ${color};
  `}
`;
