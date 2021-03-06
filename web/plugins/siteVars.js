const rootURL = 'https://leadphilanthropy.com'
const companyName = 'LEAD Philanthropy'
const companyURL = 'https://leadphilanthropy.com'

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('siteVars', () => {
    return {
      rootURL: rootURL,
      companyName: companyName,
      companyURL: companyURL
    }
  })
}
