import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub } from "react-icons/fa";

import avatarProfile from "../../assets/avatar.svg";

import { BioDescription, Container, NameDiv, Navbar, SubContainer } from "./styles";

export function ProfileContent() {
  return (
    <Container>
      <img src={avatarProfile} />
      <SubContainer>
        <NameDiv>
          <strong>Cameron Williamson</strong>
          <a href="#">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </NameDiv>
        <BioDescription>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </BioDescription>
        <Navbar>
          <div>
            <FaGithub />
            <span>cameronwll</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </div>
        </Navbar>
      </SubContainer>
    </Container>
  );
}
