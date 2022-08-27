/* eslint-disable camelcase */
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

interface PropsType {
  title: string
  comments: string
  postDate: string
}

export function PostHeaderInfos({ title, comments, postDate }: PropsType) {
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
      <TitleDescription>{title}</TitleDescription>
      <Navbar>
        <div>
          <FaGithub />
          <span>{userInfo.login}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>{postDate}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>{comments} comentários</span>
        </div>
      </Navbar>
    </Container>
  )
}
