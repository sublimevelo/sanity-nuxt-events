import { MdBuild as icon } from 'react-icons/md'

export default {
  name: 'service',
  type: 'document',
  title: 'Service',
  icon,
  // __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Service name'
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
      name: 'order',
      type: 'number',
      title: 'Category Order',
      description: "The service's order in listings"
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      description: 'Publish one or more categories and set a reference to them here.',
      to: [{ type: 'serviceCategory' }]
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Service image'
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      description: 'Short version of description used for service listings'
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Description'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'category.title'
    }
    // prepare({ title, category }) {
    //   console.log(category)
    //   return {
    //     title: title,
    //     subtitle: category
    //   }
    // }
  }
}
