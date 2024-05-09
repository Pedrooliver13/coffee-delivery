// Packages
import styled from 'styled-components';

export const SectionCardsSkeletonContainer = styled.section`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 48px;

  @media (max-width: ${(props): string => props.theme.breakpoints.XL}) {
    justify-content: center;
  }
`;
