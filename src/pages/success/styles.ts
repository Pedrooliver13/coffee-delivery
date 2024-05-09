// Packages
import styled from 'styled-components';
import { css } from 'styled-components';

interface SuccessPageItemListProps {
  variant: 'purple' | 'base-text' | 'yellow-dark' | 'yellow';
}

export const SuccessContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 3rem;
    gap: 30px;

    @media (max-width: ${theme.breakpoints.LG}) {
      flex-direction: column;
      align-items: center;
      margin-top: 0;
      gap: 50px;
    }

    img {
      max-width: 49.2rem;
      width: 100%;
    }

    header {
      margin-bottom: 2rem;
      line-height: 2;
      font-size: ${theme.textSizes['text-l']};
      color: ${theme.colors['base-subtitle']};

      @media (max-width: ${theme.breakpoints.XL}) {
        display: flex;
        flex-direction: column;
        font-size: ${theme.textSizes['text-s']};
        line-height: 1;
      }

      h1 {
        font-weight: 800;
        font-size: ${theme.textSizes['title-l']};
        font-family: ${theme.fonts.title};
        color: ${theme.colors['yellow-dark']};
        line-height: 1;

        @media (max-width: ${theme.breakpoints.XL}) {
          display: flex;
          flex-direction: column;
          font-size: ${theme.textSizes['text-l']};
        }
      }
    }

    .info {
      display: flex;
      min-width: 52.6rem;
      width: 100%;
      padding: 0.3rem;
      color: ${theme.colors['base-text']};
      background: ${theme.colors['border-rainbow']};
      border-radius: 8px 48px;

      @media (max-width: ${theme.breakpoints.XL}) {
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
        gap: 20px;

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
