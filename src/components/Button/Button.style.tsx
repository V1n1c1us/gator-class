import styled, { css } from 'styled-components';

export const ButtonAdapter = styled.div`
  margin-bottom: 20px;
`;

export const Button = styled.a`
  ${({ theme }) => css`
    background: ${theme.colors.blue};
    border-radius: 5px;
    color: ${theme.colors.gradient.primary};
    margin-bottom: 20px;
    padding: 10px;
  `}
`;
