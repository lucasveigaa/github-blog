/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api/axios'
import { PostContent } from '../../components/PostContent'
import { PostHeaderInfos } from '../../components/PostHeaderInfos'
import { formattedDate } from '../../utils'
import { Container } from './styled'

interface IssueTypes {
  body: string
  title: string
  comments: string
  updated_at: string
}

export function Post() {
  const [issue, setIssue] = useState<IssueTypes>({} as IssueTypes)
  const [postDate, setPostDate] = useState('')
  const { post } = useParams()

  const { body, title, comments } = issue

  useEffect(() => {
    async function getIssue() {
      const response = await api.get(
        `/repos/lucasveigaa/github-blog/issues/${post}`,
      )

      setIssue(response.data)
      setPostDate(formattedDate(response.data.updated_at))
    }

    getIssue()
  }, [post])

  return (
    <Container>
      <PostHeaderInfos title={title} comments={comments} postDate={postDate} />
      <PostContent body={body} />
    </Container>
  )
}
