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
    box-shadow: 0 0px 14px -5px rgb(255 255 255);
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-top: 10px;
  `}
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: 11px;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: 14px;
    margin: 20px 20px;
  `}
`;

export const ButtonAdapter = styled.div`
  margin-bottom: 20px;
`;
