export default {
  type: 'document',
  name: 'person',
  title: 'Person',
  fields: [
    {
      name: 'first',
      title: 'First Name',
      type: 'string'
    },
    {
      name: 'last',
      title: 'Last Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: doc => `${doc.first}-${doc.last}`,
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage'
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{ type: 'socials' }],
    },
    {
      name: 'role',
      title: 'Roles',
      type: 'array',
      description: 'Only "LEAD" is currently being used',
      of: [{ type: 'string' }],
      options: {
        list: [
          { value: 'internal', title: 'LEAD Employee' },
          { value: 'presenter', title: 'Presenter' },
          { value: 'reference', title: 'Reference' }
        ]
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'institution',
      title: 'Institution',
      type: 'string'
    },
    {
      name: 'bio',
      type: 'bioPortableText',
      title: 'Biography'
    }
  ],
  preview: {
    select: {
      first: 'first',
      last: 'last',
      image: 'image'
    },
    prepare({ first, last, image }) {
      return {
        title: `${first} ${last}`,
        media: image
      }
    }
  }
}
