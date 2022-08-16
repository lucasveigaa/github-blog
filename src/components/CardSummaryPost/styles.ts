import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme["base-post"]};
  border-radius: 10px;

  div {
    margin-bottom: 1.25rem;
    display: flex;
    justify-content: space-between;

    strong {
      margin-right: 1rem;
      font-size: 1.25rem;
      color: ${(props) => props.theme["base-title"]};
    }

    time {
      white-space: nowrap;
      color: ${(props) => props.theme["base-span"]};
      font-size: 0.875rem;
    }
  }
`;


