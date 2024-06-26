// Packages
import styled, { css, DefaultTheme } from 'styled-components';

type variantType = 'primary' | 'secondary';

interface ButtonContainerProps {
  variant: variantType;
}

const variantStyles = (theme: DefaultTheme, variant: variantType) =>
  ({
    primary: css`
      padding: 1.2rem 0.05rem;
      background-color: ${theme.colors['yellow']};
      color: ${theme.colors.white};
      height: auto;

      &:hover:not(:disabled) {
        background-color: ${theme.colors['yellow-dark']};
      }
    `,
    secondary: css`
      font-weight: 400;
      font-size: ${theme.textSizes['text-bold-xs']};
      background-color: ${theme.colors['base-button']};
      color: ${theme.colors['base-text']};

      svg {
        color: ${theme.colors.purple};
      }

      &:hover:not(:disabled) {
        background-color: ${theme.colors['purple-light']};
        border: 1px solid ${theme.colors['purple-dark']};
      }
    `,
  }[variant]);

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({ theme, variant }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 5px;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 1rem;
    text-transform: uppercase;
    border: 1px solid transparent;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s ease 0s;

    ${variantStyles(theme, variant)}

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  `}
`;
