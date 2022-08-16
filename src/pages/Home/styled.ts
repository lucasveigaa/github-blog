import styled from "styled-components";

export const Container = styled.main`
  max-width: 54rem;
  margin: 0 auto;
  margin-top: -100px;
`;

export const SubContainer = styled.div`
  margin: 3rem 0;
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
`;
