// Packages
import styled, { css, CSSProp } from 'styled-components';

// Assets
import BackgroundSection from 'assets/background.svg';

export const HomeContainer = styled.section`
  background: url(${BackgroundSection}) no-repeat;
  background-size: contain;
  width: 100%;
  height: 80vh;
  padding-top: 9.4rem;
`;

export const HomeContent = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    max-width: 100%;
    width: 600px;
  }

  .info {
    width: 58.8rem;

    .title {
      ${({ theme }): CSSProp => css`
        color: ${theme.colors['base-title']};
        font-family: ${theme.fonts.title};
        font-size: ${theme.textSizes['title-xl']};
      `}

      font-weight: 800;
      line-height: 62.4px;
      margin-bottom: 16px;
    }

    .subtitle {
      ${({ theme }): CSSProp => css`
        color: ${theme.colors['base-title']};
        font-size: ${theme.textSizes['text-l']};
        line-height: 26px;
      `}
    }
  }
`;
