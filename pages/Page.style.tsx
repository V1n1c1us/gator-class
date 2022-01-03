import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: linear-gradient(
      180deg,
      ${theme.colors.gradient.primary} 35%,
      ${theme.colors.gradient.secondary} 100%
    );
  `}
`;
