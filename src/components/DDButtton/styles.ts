import styled, { css } from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

type ContainerStyleProps = {
  isDark: boolean;
};

export const Container = styled(TouchableOpacity)<ContainerStyleProps>`
  width: 100%;
  height: 50px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  /*  */
  ${({ theme, isDark }) => css`
    background-color: ${isDark ? theme.colors.gray[200] : theme.colors.white};
    border: ${isDark ? null : `1px solid ${theme.colors.gray[200]}`};
  `}
  border-radius: 6px;

  /* padding: 0 64px; */
`;
