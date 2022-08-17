import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/axios";
import { Container, IssueParagraph } from "./styles";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface IssuesTypes {
  id: string;
  body: string;
  updated_at: string;
  title: string;
  url: string;
}

export function CardSummaryPost() {
  const [issues, setIssues] = useState<IssuesTypes[]>([]);

  function formattedDate(date: string) {
    return formatDistanceToNow(new Date(date), {
      locale: ptBR,
      addSuffix: true,
    });
  }

  useEffect(() => {
    async function getIssue() {
      const response = await api.get("/repos/lucasveigaa/github-blog/issues");

      setIssues(response.data);
    }

    getIssue();
  }, []);

  return (
    <>
      {issues.map((issue: IssuesTypes) => (
        <Container key={issue.id}>
          <div>
            <Link to={issue.url}>
              <strong>{issue.title}</strong>
            </Link>
            <time>{formattedDate(issue.updated_at)}</time>
          </div>
          <IssueParagraph>{issue.body}</IssueParagraph>
        </Container>
      ))}
    </>
  );
}
