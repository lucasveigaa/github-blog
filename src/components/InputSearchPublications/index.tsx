import { Container } from './style'

interface InputSearchProps {
  handleInputSearch: (query: string) => void
}

export function InputSearchPublications({
  handleInputSearch,
}: InputSearchProps) {
  return (
    <Container>
      <div>
        <span>Publicações</span>
        <small>6 publicações</small>
      </div>
      <input
        onChange={(e) => handleInputSearch(e.target.value)}
        type="text"
        placeholder="Buscar conteúdo"
      />
    </Container>
  )
}
