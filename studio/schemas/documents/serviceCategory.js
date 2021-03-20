export default {
  name: 'serviceCategory',
  title: 'Service Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Category Title'
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
      name: 'order',
      type: 'number',
      title: 'Category Order',
      description: "The category's order in listings"
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Category image'
    },
    {
      name: 'services',
      type: 'array',
      title: 'Services',
      description: 'Publish one or more services and set a reference to them here.',
      of: [
        {
          type: 'reference',
          to: [{ type: 'service' }]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}
