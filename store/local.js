const KEY = 'localSaveProject'
const SETTER = 'isSetLocalSetter'
export const state = () => ({
  isSetLocal: false,
})

export const mutations = {
  isSetLocalSetter: (state, bool) => {
    console.log('bool is ' + bool)
    state.isSetLocal = bool
    console.log('setter is ' + state.isSetLocal)
  },
}

export const getters = {
  getLocalSaveProject() {
    return JSON.parse(localStorage.getItem(KEY))
  },
  getIsSetLocal: state => {
    console.log('getter is set ' + state.isSetLocal)
    return state.isSetLocal
  },
}

export const actions = {
  setLocalSaveProject({ commit }, argument) {
    localStorage.setItem(KEY, JSON.stringify(argument.data))
    commit(SETTER, true)
  },
  deleteLocalSaveProject({ commit }) {
    localStorage.clear()
    commit(SETTER, false)
  },
  checkLocalSaveProject({ commit }) {
    const item = JSON.parse(localStorage.getItem(KEY))
    if (item) {
      commit(SETTER, true)
    } else {
      commit(SETTER, false)
    }
  },
}
