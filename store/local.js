export const state = () => ({
  isSetLocal: false,
})

export const mutations = {
  setUsers(state, response) {
    console.log(response)
    state.userInfo = response
  },
}

export const getter = {}

export const actions = {
  setLocal: async ({ commit }, argument) => {},
  getLocal: async ({ commit }, argument) => {},
  delLocal: async ({ commit }, argument) => {},
}
