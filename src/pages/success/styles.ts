// Packages
import styled from 'styled-components';
import { css } from 'styled-components';

interface SuccessPageItemListProps {
  variant: 'purple' | 'base-text' | 'yellow-dark' | 'yellow';
}

export const SuccessContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin-top: 10rem;

    @media (max-width: ${theme.breakpoints.LG}) {
      flex-direction: column;
      align-items: center;
      margin-top: 0;
      gap: 50px;
    }

    img {
      width: 49.2rem;
      object-fit: cover;
    }

    .info {
      display: flex;
      min-width: 52.6rem;
      padding: 0.3rem;
      color: ${theme.colors['base-text']};
      background: ${theme.colors['border-rainbow']};
      border-radius: 6px 44px;

      @media (max-width: ${theme.breakpoints.LG}) {
        flex-direction: column;
        align-items: center;
        padding: 1px;
        min-width: 100%;
      }

      span {
        font-weight: 600;
      }

      &__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        border-radius: 6px 44px;
        padding: 5rem 4rem;
        background-color: ${theme.colors['white']};

        @media (max-width: ${theme.breakpoints.LG}) {
          flex-direction: column;
          min-width: 100%;
          padding: 3rem;
          gap: 20px;
        }
      }
    }
  `}
`;

export const ItemList = styled.li<SuccessPageItemListProps>`
  min-width: 230px;
  max-width: 400px;
  display: flex;
  align-items: center;
  font-size: ${({ theme }): string => theme.textSizes['text-m']};
  gap: 10px;

  @media (max-width: ${({ theme }): string => theme.breakpoints.MD}) {
    font-size: ${({ theme }): string => theme.textSizes['text-s']};
    max-width: 100%;
  }

  .icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${({ variant, theme }): string => theme.colors[variant]};
    color: ${({ theme }): string => theme.colors.white};
    display: flex;
    padding: 0.8rem;
    justify-content: center;
    align-items: center;
  }
`;