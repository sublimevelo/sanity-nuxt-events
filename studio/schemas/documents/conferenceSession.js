import { MdAvTimer as icon } from "react-icons/md";

export default {
  name: 'conferenceSession',
  type: 'document',
  title: 'Event Session',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'day',
      type: 'number',
      title: 'Day',
      description: '1, 2, etc.'
    },
    {
      name: 'duration',
      type: 'number',
      title: 'Duration',
      description: 'Duration (in minutes)'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'persons',
      type: 'array',
      title: 'Persons',
      description: 'Who is responsible for this conferenceSession?',
      of: [
        {
          name: 'person',
          type: 'personReference',
          title: 'Person'
        }
      ]
    },
    {
      name: 'conferenceSessionType',
      type: 'string',
      title: 'Session type',
      options: {
        list: [
          {value: 'keynote', title: 'Keynote'},
          {value: 'talk', title: 'Talk'},
          {value: 'break', title: 'Break'},
          {value: 'panel', title: 'Panel'},
          {value: 'mini', title: 'Mini Session'},
        ]
      }
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Short summary',
      description: 'For previews, social media etc.'
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Description'
    }
  ],
  preview: {
    select: {
      title: 'title',
      conferenceSessionType: 'conferenceSessionType',
      day: 'day',
      person: 'person.name',
      media: 'image'
    },
    prepare ({title, media, day, conferenceSessionType, person}) {
      return {
        title,
        media,
        subtitle: `${conferenceSessionType} (d${day}) ${person ? `- ${person}` : ''}`
      }
    }
  }
}
