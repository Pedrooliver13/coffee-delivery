// Packages
import styled from 'styled-components';

export const CardCartContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }): string => theme.colors['base-button']};
  gap: 1rem;
  margin-bottom: 2.4rem;

  img {
    width: 64px;
    margin-right: 2rem;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__header {
      display: flex;
      justify-content: space-between;

      &--title {
        font-size: ${({ theme }): string => theme.textSizes['text-m']};
        font-weight: 400;
        color: ${({ theme }): string => theme.colors['base-title']};
      }

      &--price {
        font-size: ${({ theme }): string => theme.textSizes['text-m']};
        font-weight: 600;
        color: ${({ theme }): string => theme.colors['base-text']};
      }
    }

    &__footer {
      display: flex;
      gap: 10px;
    }
  }
`;
