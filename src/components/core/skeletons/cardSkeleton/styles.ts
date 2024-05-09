// Packages
import styled, { css, keyframes } from 'styled-components';

const shineAnimation = keyframes`
  0% {
    background-color: hsl(200, 20%, 95%);
  }
  100% {
    background-color: hsl(200, 20%, 80%);
  }
`;

export const CardSkeletonContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding-top: 0;
    padding: 0 15px 0 15px;
    max-width: 256px;
    width: 100%;
    height: 320px;
    margin-top: 5.4rem;
    border-radius: 6px 36px;
    background-color: ${theme.colors['base-card']};

    @media (max-width: ${theme.breakpoints.MD}) {
      max-width: 100%;
      width: 100%;
    }

    .skeleton__container {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 20px;
      padding-bottom: 8rem;
    }

    .image {
      max-width: 130px;
      width: 100%;
      height: 130px;

      margin-top: -2rem;
      border-radius: 50%;

      align-self: center;
      animation: ${shineAnimation} 1s linear infinite alternate;
    }

    .texts {
      width: 100%;
      height: 30px;
      justify-content: flex-end;
      align-items: flex-end;
      animation: ${shineAnimation} 1s linear infinite alternate;
    }
  `}
`;
