import { InputSearchPublications } from "../../components/InputSearchPublications";
import { ProfileContent } from "../../components/ProfileContent";
import { Container } from "./styled";

export function Home() {
  return (
    <Container>
      <ProfileContent />
      <InputSearchPublications />
    </Container>
  );
}
