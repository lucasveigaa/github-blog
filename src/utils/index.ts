import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formattedDate(date: string) {
  return formatDistanceToNow(new Date(date), {
    locale: ptBR,
    addSuffix: true,
  })
}
