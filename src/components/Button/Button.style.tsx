import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.blue};
    border-radius: 5px;
    border: none;
    color: ${theme.colors.gradient.primary};
    padding: 10px;
    transition: 0.5s;
    width: 100%;
    font-size: ${theme.font.sizes.md};

    &:hover {
      background: ${theme.colors.gray};
    }
  `}
`;
