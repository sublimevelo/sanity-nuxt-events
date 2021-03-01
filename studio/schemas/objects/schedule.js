// import { isSameDay } from 'date-fns'
import { add } from 'date-fns'
import { format } from 'date-fns'

const notSameDayErrorMsg =
  'Ensure start and end times are on the same day! Enter multiple schedules for multi-day events.'

export default {
  name: 'schedule',
  type: 'object',
  title: 'Schedule',
  // validation: Rule =>
  //   Rule.custom(schedule => {
  //     if (typeof schedule === 'undefined') {
  //       return true // Allow undefined values
  //     }
  //     return isSameDay(schedule.from, schedule.to) || notSameDayErrorMsg
  //   }),
  fields: [
    {
      name: 'from',
      type: 'datetime',
      title: 'From'
    },
    {
      name: 'duration',
      type: 'number',
      title: 'Duration (in minutes)'
    }
  ],
  preview: {
    select: {
      from: 'from',
      duration: 'duration'
    },
    prepare({ from, to }) {
      const f = format(from, 'MMMM DD, ha')
      const t = format(add(from, { minutes: duration }), 'ha')
      // const t = format(to, 'ha')
      return {
        title: `${f} - ${t}`
      }
    }
  }
}
