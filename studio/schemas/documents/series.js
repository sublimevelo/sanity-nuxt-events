import { MdInfoOutline as icon } from 'react-icons/md'

export default {
  name: 'series',
  type: 'document',
  title: 'Series',
  icon,
  // __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Event name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name'
      }
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
    {
      name: 'image',
      type: 'mainImage',
      title: 'Event image'
    },
    {
      name: 'program',
      type: 'array',
      title: 'Sessions',
      description:
        'Publish one or more sessions and set a reference to them here. Sessions will automatically be ordered chronologically',
      of: [
        {
          // name: 'session',
          type: 'seriesSessionReference',
          title: 'Sessions'
        }
      ]
    },
    {
      name: 'organizers',
      type: 'array',
      description: 'Publish one or more persons and set a reference to them here.',
      title: 'Organizers',
      validation: Rule => Rule.unique().error('You can only have one of a person'),
      of: [
        {
          type: 'reference',
          to: [{ type: 'person' }]
        }
      ]
    }
  ]
}
