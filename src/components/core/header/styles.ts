// Packages
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const HeaderDashboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  .location {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    line-height: 18.2px;
    gap: 4px;
    border-radius: 6px;
    padding: 0.8rem;
    background-color: ${({ theme }): string => theme.colors['purple-light']};
    color: ${({ theme }): string => theme.colors['purple-dark']};

    svg {
      color: ${({ theme }): string => theme.colors.purple};
    }

    @media (max-width: ${({ theme }): string => theme.breakpoints.MD}) {
      font-size: 1.2rem;
    }
  }

  .cart {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem;
    border: none;
    border-radius: 6px;
    background-color: ${({ theme }): string => theme.colors['yellow-light']};

    svg {
      color: ${({ theme }): string => theme.colors['yellow-dark']};
    }
  }
`;
