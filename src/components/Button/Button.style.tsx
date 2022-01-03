import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.blue};
    border-radius: 5px;
    color: ${theme.colors.gradient.primary};
    margin-bottom: 20px;
    padding: 10px;
    width: 100%;
  `}
`;
