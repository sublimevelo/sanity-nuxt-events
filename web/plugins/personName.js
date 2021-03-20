export default ({ app }, inject) => {
  inject('personName', person => {
    return `${person.first} ${person.last}`
  })
}
