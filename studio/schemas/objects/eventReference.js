export default {
  name: 'eventReference',
  type: 'object',
  title: 'Event reference',
  fields: [
    {
      type: 'reference',
      name: 'event',
      to: [
        {
          type: 'conference'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'event.name',
      media: 'event.logo.asset'
    }
  }
}
