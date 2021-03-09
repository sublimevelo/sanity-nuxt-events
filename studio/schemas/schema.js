// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document types
import service from './documents/service'
import serviceCategory from './documents/serviceCategory'
import person from './documents/person'
import series from './documents/series'
import seriesSession from './documents/seriesSession'
// import events from './documents/event'
// import codeOfConduct from './documents/codeOfConduct'
// import conferenceSession from './documents/conferenceSession'

// Object types
import mainImage from './objects/mainImage'
import socials from './objects/socials'
// import socialLink from './objects/socialLink'
import bioPortableText from './objects/bioPortableText'
import personReference from './objects/personReference'
import venue from './objects/venue'
import schedule from './objects/schedule'
import bodyPortableText from './objects/bodyPortableText'
import seriesSessionReference from './objects/seriesSessionReference'
// import eventReference from './objects/eventReference'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'event',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    service,
    serviceCategory,
    person,
    series,
    seriesSession,
    // conferenceSession,
    // codeOfConduct,
    // events,
    // conference,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    mainImage,
    socials,
    // socialLink,
    bioPortableText,
    personReference,
    venue,
    schedule,
    bodyPortableText,
    seriesSessionReference
    // eventReference,
    // program,
    // scheduleItem,
  ])
})
