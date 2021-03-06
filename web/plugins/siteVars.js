const rootURL = 'https://leadphilanthropy.com'

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('siteVars', () => {
    return { rootURL: rootURL }
  })
}
