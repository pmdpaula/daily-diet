import styled from 'styled-components/native';

type SignalTypeProps = {
  isOnDiet: boolean;
};

export const Container = styled.View`
  width: 100%;
  height: 50px;

  flex-direction: row;
  /* justify-content: center; */
  align-items: center;

  padding: 12px 14px;
  border: 1px solid ${({ theme }) => theme.colors.gray[500]};
  border-radius: 6px;

  margin-bottom: 8px;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Separator = styled.View`
  width: 1px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.gray[400]};

  margin: 0 12px;
`;

export const Signal = styled.View<SignalTypeProps>`
  width: 14px;
  height: 14px;

  border-radius: 7px;
  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.colors.secondary.medium : theme.colors.primary.medium};
`;
