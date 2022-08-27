import styled from 'styled-components'

export const Container = styled.header`
  background: ${(props) => props.theme['base-profile']};

  padding: 2rem;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  strong {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 0.75rem;
    color: ${(props) => props.theme.blue};

    &:hover {
      opacity: 0.8;
    }
  }
`

export const TitleDescription = styled.strong`
  font-size: 1.5rem;
`

export const Navbar = styled.nav`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  align-items: center;

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }

  svg {
    margin-right: 0.5rem;
    width: 1.125rem;
    height: 1.125rem;
    color: ${(props) => props.theme['base-label']};
  }
`
