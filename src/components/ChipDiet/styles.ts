import styled from 'styled-components/native';

type SignalTypeProps = {
  isOnDiet: boolean;
};

export const Container = styled.View`
  /* width: 144px;
  height: 34px; */

  /* flex: 1; */
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray[500]};
  padding: 8px 16px;

  border-radius: 17px;
`;

export const Signal = styled.View<SignalTypeProps>`
  width: 14px;
  height: 14px;

  margin-right: 12px;

  border-radius: 7px;
  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.colors.secondary.dark : theme.colors.primary.dark};
`;
