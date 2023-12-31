// Packages
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 2.4rem;
  padding-top: 0;
  max-width: 256px;
  min-height: 310px;
  width: 100%;
  margin-top: 5.4rem;
  border-radius: 6px 36px;
  background-color: ${({ theme }): string => theme.colors['base-card']};

  img {
    max-width: 120px;
    margin-top: -2rem;
    align-self: center;
  }

  .tags {
    align-self: center;
    font-size: ${({ theme }): string => theme.textSizes['tag-bold']};
    font-weight: bold;

    span {
      border-radius: 100px;
      background-color: ${({ theme }): string => theme.colors['yellow-light']};
      color: ${({ theme }): string => theme.colors['yellow-dark']};
      padding: 0.4rem 0.8rem;
    }
  }

  .content {
    text-align: center;
    flex-grow: 1;

    h1 {
      line-height: 2;
      font-family: ${({ theme }): string => theme.fonts.title};
      font-size: ${({ theme }): string => theme.textSizes['title-s']};
    }

    p {
      font-size: ${({ theme }): string => theme.textSizes['text-s']};
    }
  }

  .buy {
    max-width: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .counter {
      display: flex;
      justify-content: space-between;
      width: 7.2rem;
      padding: 1rem;
      background-color: ${({ theme }): string => theme.colors['base-button']};
      border-radius: 6px;

      svg {
        color: ${({ theme }): string => theme.colors['purple']};
      }
    }

    &__dashboard {
      display: flex;
      gap: 10px;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 0.8rem;
        border: none;
        border-radius: 6px;
        background-color: ${({ theme }): string => theme.colors['purple-dark']};
        transition: background 0.1s;

        svg {
          color: ${({ theme }): string => theme.colors['white']};
        }

        &:hover {
          background-color: ${({ theme }): string => theme.colors['purple']};
        }
      }
    }

    &__price span {
      font-weight: 800;
      font-family: ${({ theme }): string => theme.fonts.title};
      font-size: ${({ theme }): string => theme.textSizes['title-m']};
      color: ${({ theme }): string => theme.colors['base-text']};
    }
  }
`;
