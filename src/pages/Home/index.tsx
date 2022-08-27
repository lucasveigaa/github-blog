import { useState } from 'react'
import { CardSummaryPost } from '../../components/CardSummaryPost'
import { InputSearchPublications } from '../../components/InputSearchPublications'
import { ProfileContent } from '../../components/ProfileContent'
import { Container, SubContainer } from './styled'

export function Home() {
  const [inputSearch, setInputSearch] = useState('')

  function handleInputSearch(query: string) {
    setInputSearch(query)
  }

  return (
    <Container>
      <ProfileContent />
      <InputSearchPublications handleInputSearch={handleInputSearch} />

      <SubContainer>
        <CardSummaryPost inputSearch={inputSearch} />
      </SubContainer>
    </Container>
  )
}
