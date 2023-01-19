export const state = () => ({
  isLoading: false,
  routeName: '/',
  back: false,
})

export const getters = {
  isLoading: state => {
    return state.isLoading
  },
  routeName: state => {
    return state.routeName
  },
  back: state => {
    return state.back
  },
}

export const mutations = {
  setIsLoading(state, response) {
    state.isLoading = response
  },
  setRouteName(state, response) {
    state.routeName = response
  },
  setBack(state, response) {
    state.back = response
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
  back: ({ commit }) => {
    commit('setBack', true)
  },
  backed: ({ commit }) => {
    commit('setBack', false)
  },
}
