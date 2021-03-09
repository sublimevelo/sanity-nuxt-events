export const state = () => ({
  siteSettings: {}
})

export const getters = {
  siteSettings(state) {
    return state.siteSettings
  }
}

export const mutations = {
  setSiteSettings(state, info) {
    state.siteSettings = info
  }
}
