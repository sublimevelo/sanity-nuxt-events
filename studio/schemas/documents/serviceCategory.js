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
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}

// export default {
//   name: 'socials',
//   title: 'Socials',
//   type: 'array',
//   of: [
//     {
//       type: 'socialLink',
//       title: 'Social Link'
//     }
//   ]
// }
