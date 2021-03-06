export default {
  name: 'personReference',
  type: 'object',
  title: 'Person reference',
  fields: [
    {
      type: 'reference',
      name: 'person',
      to: [
        {
          type: 'person'
        }
      ]
    }
  ],
  preview: {
    select: {
      first: 'person.first',
      last: 'person.last',
      image: 'person.image'
    },
    prepare({ first, last, image }) {
      return {
        title: `${first} ${last}`,
        media: image
      }
    }
  }
}
