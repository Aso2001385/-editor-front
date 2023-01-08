export const state = () => ({
  isLoading: false,
  routeName: '/',
})

export const getters = {
  isLoading: state => {
    return state.isLoading
  },
  routeName: state => {
    return state.routeName
  },
}

export const mutations = {
  setIsLoading(state, response) {
    state.isLoading = response
  },
  setRouteName(state, response) {
    state.routeName = response
  },
}

export const actions = {
  loadingStart: ({ commit }) => {
    commit('setIsLoading', true)
  },
  loadingEnd: ({ commit }) => {
    commit('setIsLoading', false)
  },
  setRouteName: ({ commit }, routeName) => {
    commit('setRouteName', routeName)
  },
}
