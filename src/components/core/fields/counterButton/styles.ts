// Packages
import styled from 'styled-components';

export const CounterButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 7.2rem;
  padding: 1rem;
  background-color: ${({ theme }): string => theme.colors['base-button']};
  color: ${({ theme }): string => theme.colors['base-title']};
  border-radius: 6px;
  gap: 4px;

  svg {
    cursor: pointer;
    width: 14px;
    color: ${({ theme }): string => theme.colors['purple']};
    user-select: none;
  }
`;
