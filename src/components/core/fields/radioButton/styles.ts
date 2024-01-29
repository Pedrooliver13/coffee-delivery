// Packages
import styled from 'styled-components';

interface RadioButtonProps {
  checked: boolean;
}

export const RadioButtonContainer = styled.label<RadioButtonProps>`
  display: flex;
  align-items: center;
  gap: 10px;

  min-width: 178px;
  width: 100%;
  padding: 1.6rem;
  font-size: 1.2rem;
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;

  border-radius: 6px;
  color: ${({ theme }) => theme.colors['base-text']};

  border: 1px solid
    ${({ theme, checked }) => (checked ? theme.colors.purple : 'transparent')};

  background-color: ${({ theme, checked }) =>
    checked ? theme.colors['purple-light'] : theme.colors['base-button']};

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`;
