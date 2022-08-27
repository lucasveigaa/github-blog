import { Container } from './styles'

interface PropsType {
  body: string
}

export function PostContent({ body }: PropsType) {
  return (
    <Container>
      <div>{body}</div>
    </Container>
  )
}
