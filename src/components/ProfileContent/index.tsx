import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { UserContext } from "../../context/UserContext";

import {
  AvatarImg,
  BioDescription,
  Container,
  NameDiv,
  Navbar,
  SubContainer,
} from "./styles";

export function ProfileContent() {
  const { userInfo } = useContext(UserContext);

  return (
    <Container>
      <AvatarImg src={userInfo?.avatar_url} />
      <SubContainer>
        <NameDiv>
          <strong>{userInfo?.name}</strong>
          <a href={userInfo?.html_url}>
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </NameDiv>
        <BioDescription>{userInfo?.bio}</BioDescription>
        <Navbar>
          <div>
            <FaGithub />
            <span>{userInfo?.login}</span>
          </div>
          {userInfo?.company && (
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{userInfo?.company}</span>
            </div>
          )}
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{userInfo?.followers}</span>
          </div>
        </Navbar>
      </SubContainer>
    </Container>
  );
}
