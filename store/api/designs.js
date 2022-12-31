import axios from 'axios'
import getMD from '@/lib/git-markdown-api'
import { crudState, crudGetters, crudMutations, crudActions } from '@/lib/resources'

axios.defaults.withCredentials = true
const API_URL = `${process.env.API_BASE_URL}/api`

export const state = () =>
  crudState({
    markdown: '',
  })

export const getters = crudGetters({
  markdown: state => {
    return state.markdown
  },
})

export const mutations = crudMutations({
  setMarkDown(state, response) {
    state.markdown = response
  },
})

export const actions = crudActions(axios, `${API_URL}/designs`, {
  getMarkDown: async ({ commit }, argument) => {
    const response = await getMD(argument.data)
    commit('setMarkDown', response)
  },
})
