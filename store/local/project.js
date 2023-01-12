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
  get() {
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
    const previews = JSON.parse(localStorage.getItem(PREVIEW_KEY)) ?? {}
    previews[argument.uuid] = argument.preview
    localStorage.setItem(PREVIEW_KEY, JSON.stringify(previews))
  },
  nowEditChange({ commit }, argument) {
    let nowEdit = JSON.parse(localStorage.getItem(KEY))

    console.log(argument)
    if (!nowEdit) {
      nowEdit = argument
    } else {
      nowEdit.project.name = argument.project.name
      nowEdit.project.number = argument.project.number
      nowEdit.page.number = argument.page.number
      nowEdit.page.title = argument.page.title
      nowEdit.page.design_uuid = argument.page.design_uuid
    }

    localStorage.setItem(KEY, JSON.stringify(nowEdit))
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
