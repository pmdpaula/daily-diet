import styled from 'styled-components/native';

type StyleProps = {
  isOnDiet: boolean;
};

export const Container = styled.View`
  width: 100%;

  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 0 24px;
`;

export const Title = styled.Text<StyleProps>`

`;
