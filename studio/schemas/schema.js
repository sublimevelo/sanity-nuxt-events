// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document types
// import events from './documents/event'
import socialLink from './objects/socialLink'
import socials from './objects/socials'
import conference from './documents/conference'
import series from './documents/series'
import person from './documents/person'
import codeOfConduct from './documents/codeOfConduct'
import conferenceSession from './documents/conferenceSession'
import seriesSession from './documents/seriesSession'

// Object types
import mainImage from './objects/mainImage'
import venue from './objects/venue'
import schedule from './objects/schedule'
import bioPortableText from './objects/bioPortableText'
import bodyPortableText from './objects/bodyPortableText'
import eventReference from './objects/eventReference'
import personReference from './objects/personReference'
import seriesSessionReference from './objects/seriesSessionReference'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'event',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    codeOfConduct,
    // events,
    conference,
    series,
    person,
    venue,
    conferenceSession,
    seriesSession,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    socialLink,
    socials,
    schedule,
    // program,
    // scheduleItem,
    mainImage,
    bioPortableText,
    bodyPortableText,
    eventReference,
    personReference,
    seriesSessionReference
  ])
})
