import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme["base-profile"]};


  display: flex;
  padding: 2rem;
`;

export const SubContainer = styled.div`
  margin-left: 1rem;
`;

export const NameDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  strong {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-title"]};
  }

  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 0.75rem;
    color: ${(props) => props.theme["blue"]};

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const BioDescription = styled.span`
  line-height: 1.6rem;
`;

export const Navbar = styled.nav`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  align-items: center;

  span {
    color: ${(props) => props.theme["base-subtitle"]};
  }

  svg {
    margin-right: 0.5rem;
    width: 1.125rem;
    height: 1.125rem;
    color: ${(props) => props.theme["base-label"]};
  }
`;
