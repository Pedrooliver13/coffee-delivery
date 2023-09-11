// Packages
import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;

  .title {
    font-size: ${({ theme }): string => theme.textSizes['title-xs']};
  }

  .forms {
    max-width: 650px;
    width: 100%;

    @media (max-width: ${({ theme }): string => theme.breakpoints.MD}) {
      max-width: 100%;
      padding: 0;
    }

    &--address,
    &--payment {
      padding: 1rem;
      margin-top: 10px;
      background-color: ${({ theme }): string => theme.colors['base-card']};
      background-color: red;
      border-radius: 8px;

      @media (max-width: ${({ theme }): string => theme.breakpoints.MD}) {
        max-width: 100%;
        padding: 0;
      }
    }
  }

  .coffees__selected {
    max-width: 448px;
    width: 100%;

    &--form {
      padding: 10rem;
      margin-top: 10px;
      background-color: ${({ theme }): string => theme.colors['base-card']};
      background-color: ${({ theme }): string => theme.colors['base-card']};
      border-radius: 6px 44px;
    }
  }
`;
