// Packages
import { ReactElement } from 'react';

// Styles
import * as Styled from './styles';

export const CardSkeleton = (): ReactElement => {
  return (
    <Styled.CardSkeletonContainer>
      <div className="image" />

      <div className="skeleton__container">
        <div className="texts" />
        <div className="texts" />
      </div>
    </Styled.CardSkeletonContainer>
  );
};
