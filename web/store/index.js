export const state = () => ({
  conference: {
    title: 'This is the test title'
  },
  program: {}
})

export const getters = {
  conference(state) {
    return state.conference
  },
  getProgram(state) {
    return state.program
  }
}

export const mutations = {
  setconference(state, info) {
    state.conference = info
  },
  setProgram(state, program) {
    state.program = program
  }
}
