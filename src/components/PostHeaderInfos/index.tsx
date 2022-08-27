import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { FaGithub } from 'react-icons/fa'
import { UserContext } from '../../context/UserContext'

import { Container, Nav, Navbar, TitleDescription } from './styles'

export function PostHeaderInfos() {
  const { userInfo } = useContext(UserContext)

  return (
    <Container>
      <Nav>
        <a href="/">
          <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
        </a>
        <a href="#">
          VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </Nav>
      <TitleDescription>
        JavaScript data types and data structures
      </TitleDescription>
      <Navbar>
        <div>
          <FaGithub />
          <span>{userInfo.login}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>Há 1 dia</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>5 comentários</span>
        </div>
      </Navbar>
    </Container>
  )
}
