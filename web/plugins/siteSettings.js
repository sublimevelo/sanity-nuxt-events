import sanityClient from '~/sanityClient'

const query = `{
    "siteSettings": *[_type == "siteSettings"][0]
  }
  `

export default ({ store }) => {
  return sanityClient.fetch(query).then(({ siteSettings }) => {
    store.commit('setSiteSettings', siteSettings)
  })
}
