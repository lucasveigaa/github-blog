import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  height: 300px;
  overflow: hidden;

  div {
    margin-bottom: 1.25rem;
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      margin-right: 1rem;
      height: 130px;

      &:hover {
        opacity: 0.7;
      }
    }

    strong {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
    }

    time {
      white-space: nowrap;
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
    }
  }
`

export const IssueParagraph = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`
