// Packages
import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 68px;

  label {
    font-weight: 800;
    margin: 5px;

    span {
      font-size: 2rem;
    }
  }

  input {
    display: flex;
    padding: 1.2rem;
    align-items: center;
    gap: 4px;
    width: 100%;
    min-height: 5.4rem;
    border: 1px solid ${({ theme }): string => theme.colors['base-button']};
    background-color: ${({ theme }): string => theme.colors['base-input']};
    border-radius: 4px;
    color: ${({ theme }): string => theme.colors['base-text']};

    &::placeholder {
      font-size: 1.6rem;
      font-weight: 400;
      text-transform: capitalize;
      color: ${({ theme }): string => theme.colors['base-label']};
    }

    &:active {
      border-color: ${({ theme }): string => theme.colors['yellow-dark']};
    }
  }

  .error {
    font-size: 1.2rem;
    margin-top: 0.2rem;
    color: ${(props) => props.theme.colors.red};
  }
`;
