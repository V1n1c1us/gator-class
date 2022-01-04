import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  word-break: break-all;
`;

export const AvatarAdapter = styled.div`
  display: flex;
  justify-content: center;
`;

export const Avatar = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.blue};
    border-radius: 50%;
    box-shadow: 0 0px 14px -5px ${theme.colors.white};
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-top: 10px;
    font-weight: ${theme.font.weights.bold};
    font-size: ${theme.font.sizes.xl};
  `}
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xxxs};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    ffont-size: ${theme.font.sizes.sm};
    margin: 20px 20px;
  `}
`;

export const ButtonAdapter = styled.div`
  margin: 0 auto;
  width: 200px;
`;
