import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gradient.secondary};
    font-size: 11px;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: #c7c7c7;
    font-size: 14px;
    margin: 20px 20px;
  `}
`;

export const ButtonAdapter = styled.div`
  margin-bottom: 20px;
`;

export const Follow = styled.a`
  ${({ theme }) => css`
    padding: 10px;
    background: ${theme.colors.gradient.primary};
    color: ${theme.colors.white};
    margin-bottom: 20px;
    border-radius: 5px;
  `}
`;
