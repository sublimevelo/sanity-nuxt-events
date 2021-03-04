import { forEach } from 'lodash'

const socials = {
  li: 'LinkedIn',
  tw: 'Twitter',
  fb: 'Facebook'
}
const expand_socials = []
forEach(socials, function(value, key) {
  expand_socials.push({ value: key, title: value })
})

export default {
  name: 'socialLink',
  title: 'SocialLink',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Link Title',
      options: {
        list: expand_socials
      }
    },
    {
      name: 'url',
      type: 'url',
      title: 'Link URL'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: `${socials[title]}`
      }
    }
  }
}
