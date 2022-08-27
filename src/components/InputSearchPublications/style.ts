import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4.5rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    span {
      font-weight: 700;
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    small {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
    }
  }

  input {
    border-radius: 6px;
    width: 100%;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    border: 1px solid ${(props) => props.theme['base-border']};
    padding: 0.75rem 1rem;
  }
`
