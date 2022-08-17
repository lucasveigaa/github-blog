import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../api/axios";

interface UserInfoType {
  avatar_url?: string;
  bio?: string;
  company?: null | string;
  name?: string;
  followers?: number;
  login?: string;
  html_url?: string;
}

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextType {
  userInfo: UserInfoType;
}

export const UserContext = createContext({} as UserContextType);

export function UserProvider({ children }: UserProviderProps) {
  const [userInfo, setUserInfo] = useState<UserInfoType>({});

  async function getDataUser() {
    const response = await api.get("/users/lucasveigaa");
    const { avatar_url, bio, company, name, followers, login, html_url } =
      response.data;
    setUserInfo({ avatar_url, bio, company, name, followers, login, html_url });
  }

  useEffect(() => {
    getDataUser();
  }, []);
  return (
    <UserContext.Provider value={{ userInfo }}>{children}</UserContext.Provider>
  );
}
