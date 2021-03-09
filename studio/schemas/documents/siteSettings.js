import { MdSettings as icon } from 'react-icons/md'

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site settings',
  icon,
  // __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      name: 'companyName',
      type: 'string',
      title: 'Company name'
    },
    {
      name: 'email',
      type: 'email',
      title: 'Site contact email'
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Site contact phone'
    },
    {
      name: 'siteName',
      type: 'string',
      title: 'Site name'
    },
    {
      name: 'rootURL',
      type: 'url',
      title: 'Root URL for URL generation',
      description: "Don't change this unless you know what you are doing!"
    },
    {
      name: 'debug',
      type: 'boolean',
      title: 'Show debug info in site?',
      description: "Don't change this unless you know what you are doing!"
    }

    // {
    //   name: 'description',
    //   type: 'bodyPortableText',
    //   title: 'Description'
    // },
    // {
    //   name: 'keywords',
    //   type: 'array',
    //   title: 'Keywords',
    //   description: 'Add keywords that describe the series.',
    //   of: [{ type: 'string' }],
    //   options: {
    //     layout: 'tags'
    //   }
    // },
    // {
    //   name: 'image',
    //   type: 'mainImage',
    //   title: 'Event image'
    // },
    // {
    //   name: 'program',
    //   type: 'array',
    //   title: 'Sessions',
    //   description:
    //     'Publish one or more sessions and set a reference to them here. Sessions will automatically be ordered chronologically',
    //   of: [
    //     {
    //       // name: 'session',
    //       type: 'seriesSessionReference',
    //       title: 'Sessions'
    //     }
    //   ]
    // },
    // {
    //   name: 'organizers',
    //   type: 'array',
    //   description: 'Publish one or more persons and set a reference to them here.',
    //   title: 'Organizers',
    //   validation: Rule => Rule.unique().error('You can only have one of a person'),
    //   of: [
    //     {
    //       type: 'reference',
    //       to: [{ type: 'person' }]
    //     }
    //   ]
    // }
  ]
}
