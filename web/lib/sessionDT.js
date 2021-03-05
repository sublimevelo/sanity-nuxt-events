import { parseISO } from 'date-fns'
import { format } from 'date-fns'
import { add } from 'date-fns'

export default function sessionDT(
  from,
  dur,
  showYear = false,
  showTime = true
) {
  let df = 'MMM dd'
  let endTime = ''

  if (showYear) {
    df = `${df}, yyyy`
  }

  if (showTime) {
    df = `${df}, ha`
    endTime = ` - ${format(add(parseISO(from), { minutes: dur }), 'ha')}`
  }

  return `${format(parseISO(from), df)}${endTime}`
}
