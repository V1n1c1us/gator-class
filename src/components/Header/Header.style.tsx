import { FaRegHeart, FaAngleLeft, FaEllipsisV } from 'react-icons/fa';
import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    color: ${theme.colors.secondary};
  `}
`;

export const Options = styled.div`
  svg {
    margin-left: 5px;
  }
`;

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(1px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-1px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(1px, 0, 0);
  }
`;

export const IconArrowLeft = styled(FaAngleLeft)`
  ${({ theme }) => css`
    transition: 0.3s;
    &:hover {
      color: ${theme.colors.white};
    }
  `}
`;

export const IconHeart = styled(FaRegHeart)`
  transition: 0.3s;
  &:hover {
    display: inline-block;
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    color: red;
  }
`;

export const IconElipsiV = styled(FaEllipsisV)`
  ${({ theme }) => css`
    transition: 0.3s;
    &:hover {
      color: ${theme.colors.white};
    }
  `}
`;
