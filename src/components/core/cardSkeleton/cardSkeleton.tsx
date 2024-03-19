// Packages
import { ReactElement } from 'react';
import ContentLoader from 'react-content-loader';

// Styles
import * as Styled from './styles';

export const CardSkeleton = (): ReactElement => {
  return (
    <Styled.CardSkeletonContainer>
      <ContentLoader
        uniqueKey="card"
        speed={2}
        width={'100%'}
        height={310}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="skeleton"
      >
        <rect
          x="0"
          y="0"
          rx="50%"
          ry="50%"
          width="120"
          height="120"
          className="skeleton__circle"
          // viewBox="0 0 120 0"
        />
        <rect x="15" y="320" rx="3" ry="3" width="135" height="15" />
        <rect x="15" y="350" rx="3" ry="3" width="70" height="15" />
      </ContentLoader>
    </Styled.CardSkeletonContainer>
  );
};
