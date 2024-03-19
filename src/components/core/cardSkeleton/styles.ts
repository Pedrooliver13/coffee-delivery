// Packages
import styled, { css } from 'styled-components';

export const CardSkeletonContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding-top: 0;
    max-width: 256px;
    width: 100%;
    margin-top: 5.4rem;
    border-radius: 6px 36px;
    background-color: ${({ theme }): string => theme.colors.white};
    box-sizing: content-box;

    .skeleton {
      position: relative;
      box-sizing: content-box;
      width: 100%;
      /* border-radius: 50%; */

      &__circle {
        position: absolute;
        top: -2rem;
      }
    }

    @media (max-width: ${theme.breakpoints.MD}) {
      max-width: 100%;
      width: 100%;

      .skeleton {
        width: 100%;
      }
    }
  `}
`;
