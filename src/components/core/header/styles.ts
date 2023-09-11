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
    position: relative;

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

    &__count {
      position: absolute;
      top: -10px;
      right: -5px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      font-weight: 700;
      background-color: ${({ theme }): string => theme.colors['yellow-dark']};
      color: ${({ theme }): string => theme.colors.white};
      font-size: ${({ theme }): string => theme.textSizes['text-bold-xs']};
    }
  }
`;
