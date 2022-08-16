import { CardSummaryPost } from "../../components/CardSummaryPost";
import { InputSearchPublications } from "../../components/InputSearchPublications";
import { ProfileContent } from "../../components/ProfileContent";
import { Container, SubContainer } from "./styled";

export function Home() {
  return (
    <Container>
      <ProfileContent />
      <InputSearchPublications />
      
      <SubContainer>
        <CardSummaryPost />
        <CardSummaryPost />
        <CardSummaryPost />
        <CardSummaryPost />
        <CardSummaryPost />
        <CardSummaryPost />
      </SubContainer>
    </Container>
  );
}
