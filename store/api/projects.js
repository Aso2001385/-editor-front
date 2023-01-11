import axios from 'axios'
import getMD from '@/lib/git-markdown-api'
import { crudState, crudGetters, crudMutations, crudActions } from '@/lib/resources'

axios.defaults.withCredentials = true
const API_URL = `${process.env.API_BASE_URL}/api`

export const state = () =>
  crudState({
    markdown: '',
    pages: [],
    page: {},
  })

export const getters = crudGetters({
  markdown: state => {
    return state.markdown
  },
  pages: state => {
    return state.pages
  },
  page: state => {
    return state.page
  },
})

export const mutations = crudMutations({
  setMarkdown(state, response) {
    state.markdown = response
  },
  setPages(state, response) {
    state.resource.pages = response
  },
  setPage(state, response) {
    state.page = response
  },
})

export const actions = crudActions(axios, `${API_URL}/projects`, {
  getMarkdown: async ({ commit }, argument) => {
    const response = await getMD(argument.data)
    commit('setMarkdown', response)
  },
  getPage: async ({ commit }, argument) => {
    return await axios
      .get(`${API_URL}/projects/${argument.id}/pages/${argument.number}`)
      .then(response => {
        commit('setPage', response.data)
        return true
      })
      .catch(() => {
        return false
      })
  },
  putPages: async ({ commit }, argument) => {
    return await axios
      .put(`${API_URL}/pages/${argument.id}`, argument.data)
      .then(response => {
        commit('setPages', response.data)
        return true
      })
      .catch(e => {
        console.log(e)
        return false
      })
  },
  putPage: async ({ commit }, argument) => {
    return await axios
      .put(`${API_URL}/pages/${argument.id}`, argument.data)
      .then(response => {
        commit('setPage', response.data)
        return true
      })
      .catch(() => {
        return false
      })
  },
})
