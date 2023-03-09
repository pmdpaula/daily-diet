import styled from 'styled-components/native';

import { View, ViewProps } from 'react-native';

type PercentResumeStyleProps = ViewProps & {
  bgColor: string;
};

export const Container = styled(View)<PercentResumeStyleProps>`
  background-color: ${({ bgColor }) => bgColor};

  width: 100%;
  height: 90px;

  justify-content: space-between;
  align-items: center;

  border-radius: 8px;

  padding: 16px;
  margin: 6px 0;
`;
