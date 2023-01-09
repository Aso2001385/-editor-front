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
  setPage(state, response) {
    const project = state.resource
    project.pages = project.pages.reduce((accumulators, currentValue) => {
      if (response.number === currentValue.number) {
        accumulators.push(response)
      } else {
        accumulators.push(currentValue)
      }
      return accumulators
    }, [])
    project.last = {
      number: response.number,
      contents: response.contents,
      updated_at: response.updated_at,
    }
    console.log('dffffff')
    console.log(project)
    state.resource = project
  },
})

export const actions = crudActions(axios, `${API_URL}/projects`, {
  getMarkdown: async ({ commit }, argument) => {
    const response = await getMD(argument.data)
    commit('setMarkdown', response)
  },
  putPage: async ({ commit }, argument) => {
    return await axios
      .put(`${API_URL}/projects/pages`, argument.data)
      .then(response => {
        commit('setPage', response.data)
        return true
      })
      .catch(() => {
        return false
      })
  },
})
