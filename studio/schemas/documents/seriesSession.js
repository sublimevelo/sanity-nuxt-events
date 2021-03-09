import { MdEvent as icon } from 'react-icons/md'
import { format } from 'date-fns'

export default {
  name: 'seriesSession',
  type: 'document',
  title: 'Series Session',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'sessionType',
      type: 'string',
      title: 'Session type',
      options: {
        list: [
          { value: 'phonathon', title: 'Phonathon' },
          { value: 'ag', title: 'Annual Giving' },
          { value: 'general', title: 'General Fundraising' }
        ]
      }
    },
    {
      name: 'schedule',
      type: 'schedule',
      title: 'Schedule',
      description: 'Start and end times for the event'
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
      description: 'Who is/are responsible for this session?',
      validation: Rule => Rule.unique().error('You can only have one of a person'),
      of: [
        {
          name: 'person',
          type: 'personReference',
          title: 'Person'
        }
      ]
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Short summary',
      description: 'Describe your event for previews, search engines and social media.'
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Description'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describe the series.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
  ],
  orderings: [
    {
      title: 'Session Date, Desc',
      name: 'sessioneDateDesc',
      by: [{ field: 'schedule.from', direction: 'desc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      start: 'schedule.from',
      media: 'image'
    },
    prepare({ title, start, media }) {
      return {
        title: `${title}`,
        media,
        subtitle: `${format(start, 'MMMM DD, ha')}`
      }
    }
  }
}
