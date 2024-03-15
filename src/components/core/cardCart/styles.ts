// Packages
import styled from 'styled-components';

export const CardCartContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 0;
  border-bottom: 1px solid ${({ theme }): string => theme.colors['base-button']};
  gap: 1rem;

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
        font-size: ${({ theme }): string => theme.textSizes['title-xs']};
        font-weight: 400;
        color: ${({ theme }): string => theme.colors['base-title']};
      }
    }
  }
`;
