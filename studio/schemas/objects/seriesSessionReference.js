export default {
  name: 'seriesSessionReference',
  type: 'object',
  title: 'Session reference (series)',
  fields: [
    {
      type: 'reference',
      name: 'session',
      to: [
        {
          type: 'seriesSession'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'session.title'
    }
  }
}
