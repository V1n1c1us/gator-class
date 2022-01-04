import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';

export const Button = styled.button<ButtonProps>`
  ${({ theme, bgColor, textColor }) => css`
    background: ${bgColor || theme.colors.blue};
    border-radius: 5px;
    border: none;
    color: ${textColor || theme.colors.gradient.primary};
    cursor: pointer;
    font-size: ${theme.font.sizes.sm};
    padding: 10px;
    transition: 0.5s;
    width: 100%;
    text-transform: uppercase;

    &:hover {
      color: ${textColor || theme.colors.gradient.secondary};
      background: ${theme.colors.gray};
    }
  `}
`;
