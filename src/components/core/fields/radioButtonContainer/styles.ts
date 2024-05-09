// Packages
import styled, { css } from 'styled-components';

export const RadioButtonContainer = styled.div`
  ${({ theme }) => css`
    flex: 1;

    .radio__list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;

      @media (max-width: ${theme.breakpoints.SM}) {
        display: flex;
        flex-wrap: wrap;
      }
    }

    .radio__error {
      display: block;
      font-size: ${theme.textSizes['text-s']};
      color: ${theme.colors.red};
      margin-top: 5px;
    }
  `}
`;
