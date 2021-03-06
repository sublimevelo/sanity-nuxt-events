export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('personName', person => {
    return `${person.first} ${person.last}`
  })
}
