const debug = true

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('debug', () => {
    return debug
  })
}
