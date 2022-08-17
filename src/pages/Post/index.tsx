import { PostContent } from "../../components/PostContent";
import { PostHeaderInfos } from "../../components/PostHeaderInfos";
import { Container } from "./styled";

export function Post() {
  return (
    <Container>
      <PostHeaderInfos />
      <PostContent />
    </Container>
  );
}
