import { Container } from './style'

export function InputSearchPublications() {
  return (
    <Container>
      <div>
        <span>Publicações</span>
        <small>6 publicações</small>
      </div>
      <input type="text" placeholder="Buscar conteúdo" />
    </Container>
  )
}
