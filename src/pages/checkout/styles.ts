// Packages
import styled, { css } from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;

  .title {
    color: ${({ theme }): string => theme.colors['base-title']};
    font-size: ${({ theme }): string => theme.textSizes['title-xs']};
    font-weight: 800;
  }

  .forms {
    max-width: 690px;
    width: 100%;

    @media (max-width: ${({ theme }): string => theme.breakpoints.XL}) {
      max-width: 100%;
      padding: 0;
    }

    &__address,
    &__payment {
      display: grid;
      grid-template-columns: 200px 1fr 60px;
      padding: 4rem;
      margin-top: 10px;
      background-color: ${({ theme }): string => theme.colors['base-card']};
      border-radius: 8px;
      gap: 5px 12px;

      @media (max-width: ${({ theme }): string => theme.breakpoints.LG}) {
        max-width: 100%;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 5px;
      }

      .col-span-3 {
        grid-column: span 3;
      }

      .col-span-2 {
        grid-column: span 2 / auto;
      }
    }

    &__address--header,
    &__payment--header {
      display: flex;
      margin-bottom: 3.2rem;
      gap: 8px;

      h1 {
        font-weight: 400;
        font-size: ${(props) => props.theme.textSizes['text-m']};
        color: ${(props) => props.theme.colors['base-subtitle']};
      }

      span {
        font-size: 1.4rem;
        color: ${(props) => props.theme.colors['base-text']};
      }
    }

    &__address--header svg {
      color: ${(props) => props.theme.colors['yellow-dark']};
    }
    &__payment--header svg {
      color: ${(props) => props.theme.colors.purple};
    }

    &__payment--list {
      display: flex;
      justify-content: space-between;
      gap: 5px;

      @media (max-width: ${({ theme }): string => theme.breakpoints.MD}) {
        flex-wrap: wrap;
      }
    }
  }
`;

export const CoffeesSelected = styled.div`
  ${({ theme }) => css`
    max-width: 448px;
    width: 100%;

    @media (max-width: ${theme.breakpoints.XL}) {
      max-width: 100%;
      padding: 0;
    }

    .form {
      display: flex;
      flex-direction: column;
      max-height: 448px;
      padding: 4rem;
      margin-top: 10px;
      background-color: ${theme.colors['base-card']};
      border-radius: 6px 44px;

      &__itens {
        overflow: auto;
        max-height: 200px;
      }

      &__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: ${theme.textSizes['text-s']};
        line-height: 2;

        div {
          display: flex;
          justify-content: space-between;
        }

        &--total {
          font-weight: bold;
          font-size: ${theme.textSizes['text-l']};
        }

        margin-bottom: 1rem;
      }

      &__footer {
        display: flex;
        align-items: flex-end;
        flex: 1;

        &--submit {
          width: 100%;
        }
      }
    }
  `}
`;
