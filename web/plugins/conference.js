// import sanityClient from '~/sanityClient'
import { addMinutes } from 'date-fns'
// import { addDays } from 'date-fns'
var groupBy = require('lodash/groupBy')
// var orderBy = require('lodash/orderBy')


export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('dateCalc', (program, from) => populateWithDates(program, from))
}

function addTimes(conferenceSessions, from) {
    return conferenceSessions.reduce((allSessions, conferenceSession, index) => {
        const prevSession = allSessions[index - 1]
        const fromTime = prevSession
            ? new Date(addMinutes(prevSession.fromTime, prevSession.duration))
            : from
        return allSessions.concat([{ ...conferenceSession, fromTime }])
    }, [])
}

function populateWithDates(program, from) {
  /**
   * Calculates conferenceSession time slot by looping trough all conferenceSessions
   * adding their duration to their start time.
   */

  // group by 'day' so we can do this right!
  program = groupBy(program, 'day')
//   console.log(program)
  
  // show the sorted keys
  const keys = Object.keys(program).sort()

  let daySessions = {}

  for (const key of keys) {
      daySessions[key] = addTimes(program[key], from)
      // console.log(key)
      // console.log(program[key])
  }

  // console.log(daySessions)

//   const schedule = program.reduce((allSessions, conferenceSession, index) => {
//     const prevSession = allSessions[index - 1]
//     const fromTime = prevSession
//       ? new Date(addMinutes(prevSession.fromTime, prevSession.duration))
//       : from
//     return allSessions.concat([{ ...conferenceSession, fromTime }])
//   }, [])
//   console.log( ...program, schedule)
//   return { ...program, schedule }
}

// const query = `{
//   "conference": *[_id == "conference"][0],
//   "program": *[_id == "program"][0] {
//     ...,
//     schedule[] {
//       ...,
//       conferenceSession-> {
//         ...,
//         persons[] {
//           person-> {
//             ...,
//             image {
//               ...,
//               asset->
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `

// export default ({ store }) => {
//   return sanityClient.fetch(query).then(({ conference, program }) => {
//     store.commit('setconference', conference)
//     store.commit(
//       'setProgram',
//       populateWithDates(program, new Date(conference.schedule.from))
//     )
//   })
// }
