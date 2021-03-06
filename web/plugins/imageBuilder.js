import sanityClient from '~/sanityClient'
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(sanityClient)

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('urlFor', source => {
    return builder.image(source)
  })
}
