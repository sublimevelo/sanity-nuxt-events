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
      name: 'blurb',
      type: 'text',
      title: 'Blurb',
      description: 'Describe your event for search engines and social media.'
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Description'
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
          name: 'session',
          type: 'seriesSessionReference',
          title: 'Sessions'
        }
      ]
    },
    // {
    //   name: 'ticket',
    //   type: 'url',
    //   title: 'Ticket link'
    // },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your event.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
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
