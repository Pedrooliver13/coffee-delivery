// Packages
import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100%;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1.2rem;
  text-transform: uppercase;
  background-color: ${({ theme }): string => theme.colors['yellow']};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;

  transition: background-color 0.3s ease-in-out;

  &:disabled {
    opacity: 0.7;
  }

  &:hover {
    background-color: ${({ theme }): string => theme.colors['yellow-dark']};
  }
`;
