import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray[200]};
  border-radius: 6px;

  /* padding: 0 64px; */
`;
