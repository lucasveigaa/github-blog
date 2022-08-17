import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { api } from "../../api/axios";

import avatarProfile from "../../assets/avatar.svg";

import {
  AvatarImg,
  BioDescription,
  Container,
  NameDiv,
  Navbar,
  SubContainer,
} from "./styles";

interface UserInfos {
  avatar_url: string;
  bio: string;
  company: null | string;
  name: string;
  followers: number;
  login: string;
  html_url: string;
}

export function ProfileContent() {
  const [userInfo, setUserInfo] = useState<UserInfos>();

  async function getDataUser() {
    const response = await api.get("/users/lucasveigaa");
    const { avatar_url, bio, company, name, followers, login, html_url } = response.data;
    setUserInfo({ avatar_url, bio, company, name, followers, login, html_url });
  }


  useEffect(() => {
    getDataUser();
  }, []);

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
