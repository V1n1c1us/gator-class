import styled, { css } from 'styled-components';
import { ItemProps } from './Item.types';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    color: ${theme.colors.white};
  `}
`;

export const Followers = styled.span`
  ${({ theme }) => css`
    font-size: 11px;
    color: ${theme.colors.gray};
    max-width: 100px;
  `}
`;

export const IconAdapter = styled.div<ItemProps>`
  ${({ theme, hoverColor, color }) => css`
    margin-bottom: 5px;
    font-size: ${theme.font.sizes.xxl};
    transition: 0.3s;
    color: ${color ? color : theme.colors.white};

    &:hover {
      color: ${hoverColor ? hoverColor : theme.colors.gray};
    }
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};
  `}
`;
