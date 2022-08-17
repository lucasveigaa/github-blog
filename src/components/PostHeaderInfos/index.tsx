import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub } from "react-icons/fa";

import { Container, Nav, Navbar, TitleDescription } from "./styles";

export function PostHeaderInfos() {
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
          <span>cameronwll</span>
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
  );
}
