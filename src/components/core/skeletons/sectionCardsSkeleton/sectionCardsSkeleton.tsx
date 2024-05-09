// Packages
import { ReactElement } from 'react';

// Components
import { CardSkeleton } from 'components/core';

// Styles
import * as Styled from './styles';

export const SectionCardsSkeleton = (): ReactElement => {
  return (
    <Styled.SectionCardsSkeletonContainer>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </Styled.SectionCardsSkeletonContainer>
  );
};
