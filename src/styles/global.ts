// Packages
import { createGlobalStyle } from 'styled-components';

// Styles
import { Container } from 'styles/container';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props): string => props.theme.colors.yellow}
  }

  body {
    background-color: ${({ theme }): string => theme.colors.background};
    color: ${({ theme }): string => theme.colors['base-text']};
    --webkit-font-smoothing: antialised;
  }
  
  body, input, textarea, button {
    font-weight: 400;
    font-family: ${({ theme }): string => theme.fonts.default};
    font-size: ${({ theme }): string => theme.textSizes['text-m']};
  }

  .container {
    ${Container};
  }
`;
