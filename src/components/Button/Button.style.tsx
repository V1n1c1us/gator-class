import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.blue};
    border-radius: 5px;
    border: none;
    color: ${theme.colors.gradient.primary};
    padding: 10px;
    width: 100%;
  `}
`;
