import sanityClient from '~/sanityClient'
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(sanityClient)

export default ({ app }, inject) => {
  inject('urlFor', source => {
    return builder.image(source)
  })
}
