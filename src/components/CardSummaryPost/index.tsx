import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../api/axios'
import { formattedDate } from '../../utils'
import { Container, IssueParagraph } from './styles'

interface IssuesTypes {
  id: string
  body: string
  updated_at: string
  title: string
  number: number
}

interface CardSummaryPostProps {
  inputSearch: string
}

export function CardSummaryPost({ inputSearch }: CardSummaryPostProps) {
  const [issues, setIssues] = useState<IssuesTypes[]>([])

  useEffect(() => {
    async function getIssue() {
      if (inputSearch !== '') {
        const response = await api.get(
          `/search/issues?q=${inputSearch}%20user:lucasveigaa`,
        )
        setIssues(response.data.items)
        return
      }
      const response = await api.get('/repos/lucasveigaa/github-blog/issues')

      setIssues(response.data)
    }

    getIssue()
  }, [inputSearch])
  console.log(issues)

  return (
    <>
      {issues.map((issue: IssuesTypes) => (
        <Container key={issue.id}>
          <div>
            <Link to={`/post/${issue.number.toString()}`}>
              <strong>{issue.title}</strong>
            </Link>
            <time>{formattedDate(issue.updated_at)}</time>
          </div>
          <IssueParagraph>{issue.body}</IssueParagraph>
        </Container>
      ))}
    </>
  )
}
