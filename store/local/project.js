const KEY = 'localSaveProject'
const PREVIEW_KEY = 'localPreviews'
// const HTMLDATA = 'HtmlFromMarkdown'
export const state = () => ({
  isSet: false,
})

export const getters = {
  isSet: state => {
    return state.isSet
  },
  page() {
    return JSON.parse(localStorage.getItem(KEY))
  },
  previews() {
    return JSON.parse(localStorage.getItem(PREVIEW_KEY))
  },
}

export const mutations = {
  setIsSet: (state, bool) => {
    state.isSet = bool
  },
}

export const actions = {
  save({ commit }, argument) {
    localStorage.setItem(KEY, JSON.stringify(argument.data))
    commit('setIsSet', true)
  },
  putPreview({ commit }, argument) {
    const previews = JSON.parse(localStorage.getItem(PREVIEW_KEY))
    previews[argument.uuid] = argument.preview
    localStorage.setItem(PREVIEW_KEY, JSON.stringify(previews))
  },
  remove({ commit }) {
    localStorage.removeItem(KEY)
    commit('setIsSet', false)
  },
  check({ commit }) {
    if (JSON.parse(localStorage.getItem(KEY))) {
      commit('setIsSet', true)
    } else {
      commit('setIsSet', false)
    }
  },
}
