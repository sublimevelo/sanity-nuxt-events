import { parseISO } from 'date-fns'
import { format } from 'date-fns'
import { add } from 'date-fns'

export default function sessionDT(from, dur) {
  return `${format(parseISO(from), 'MMMM dd, ha')} - ${format(
    add(parseISO(from), { minutes: dur }),
    'ha'
  )}`
}
