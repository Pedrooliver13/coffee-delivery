// Packages
import styled from 'styled-components';

// Assets
import BackgroundSection from 'assets/background.svg';

interface HomeItemListProps {
  variant: 'purple' | 'base-text' | 'yellow-dark' | 'yellow';
}

export const SectionHero = styled.section`
  background: url(${BackgroundSection}) center center no-repeat;
  background-size: contain;

  @media (max-width: ${({ theme }): string => theme.breakpoints.MD}) {
    background: none;
  }

  div.content {
    display: flex;
    justify-content: space-between;
    gap: 90px;
    padding-top: 9.4rem;
    padding-bottom: 9.4rem;

    @media (max-width: ${({ theme }): string => theme.breakpoints.LG}) {
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }

    img {
      max-width: 476px;
      width: 100%;
      object-fit: contain;

      @media (max-width: ${({ theme }): string => theme.breakpoints.XL}) {
        max-width: 376px;
        margin-top: 3rem;
      }
    }

    .info {
      &__title {
        color: ${({ theme }): string => theme.colors['base-title']};
        font-family: ${({ theme }): string => theme.fonts.title};
        font-size: ${({ theme }): string => theme.textSizes['title-xl']};
        font-weight: 800;
        line-height: 62.4px;
        margin-bottom: 1.6rem;

        @media (max-width: ${({ theme }): string => theme.breakpoints.MD}) {
          font-size: ${({ theme }): string => theme.textSizes['title-s']};
          align-self: center;
          line-height: 20px;
        }
      }

      &__subtitle {
        color: ${({ theme }): string => theme.colors['base-subtitle']};
        font-size: ${({ theme }): string => theme.textSizes['text-l']};
        line-height: 26px;

        @media (max-width: ${({ theme }): string => theme.breakpoints.MD}) {
          font-size: ${({ theme }): string => theme.textSizes['text-s']};
          align-self: center;
          line-height: 20px;
        }
      }

      &__list {
        margin-top: 5.6rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;

        @media (max-width: ${({ theme }): string => theme.breakpoints.SM}) {
          display: flex;
          flex-direction: column;
          margin-top: 2rem;
        }
      }
    }
  }
`;

export const ItemList = styled.li<HomeItemListProps>`
  min-width: 230px;
  display: flex;
  align-items: center;
  font-size: ${({ theme }): string => theme.textSizes['text-m']};
  gap: 10px;

  @media (max-width: ${({ theme }): string => theme.breakpoints.MD}) {
    font-size: ${({ theme }): string => theme.textSizes['text-s']};
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

export const CoffeeContent = styled.main`
  padding-bottom: 9.4rem;

  .title {
    color: ${({ theme }): string => theme.colors['base-subtitle']};
    font-size: ${({ theme }): string => theme.textSizes['title-l']};
    font-family: ${({ theme }): string => theme.fonts.title};
    font-weight: 800;

    @media (max-width: ${({ theme }): string => theme.breakpoints.MD}) {
      font-size: ${({ theme }): string => theme.textSizes['title-s']};
      text-align: center;
    }
  }

  .coffee-list {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 48px;

    @media (max-width: ${(props): string => props.theme.breakpoints.XL}) {
      justify-content: center;
    }
  }
`;
