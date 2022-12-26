import axios from 'axios'
import { Octokit } from '@octokit/core'

axios.defaults.withCredentials = true
const API_URL = process.env.API_BASE_URL

export const state = () => ({
  markDown: '',
  designs: [],
  design: {},
})

export const getters = {
  designs: state => {
    return state.designs
  },
  design: state => {
    return state.design
  },
  markDown: state => {
    return state.markDown
  },
}

export const mutations = {
  setDesigns(state, response) {
    state.design = response
  },
  setDesign(state, response) {
    state.design = response
  },
  setMarkDown(state, response) {
    state.markDown = response
  },
}

export const actions = {
  getDesigns: async ({ commit }, argument) => {
    return await axios
      .get(`${API_URL}/users/designs`)
      .then(normalResponse => {
        commit('setDesigns', normalResponse.data)
        return true
      })
      .catch(() => {
        return false
      })
  },
  getDesign: async ({ commit }, argument) => {
    return await axios
      .get(`${API_URL}/designs/${argument.id}`)
      .then(normalResponse => {
        commit('setDesign', normalResponse.data)
        return true
      })
      .catch(() => {
        return false
      })
  },
  postDesign: async ({ commit }, argument) => {
    return await axios
      .post(`${API_URL}/designs`, argument.data)
      .then(normalResponse => {
        commit('setDesign', normalResponse.data)
        return true
      })
      .catch(() => {
        return false
      })
  },
  putDesign: async ({ commit }, argument) => {
    return await axios
      .put(`${API_URL}/designs`, argument.data)
      .then(normalResponse => {
        commit('setDesign', normalResponse.data)
        return true
      })
      .catch(() => {
        return false
      })
  },
  getMarkDown: async ({ commit }, argument) => {
    const octokit = new Octokit({
      auth: process.env.AUTH_TOKEN,
    })
    const res = await octokit.request(process.env.MARK_DOWN_API_BASE_URL, {
      text: argument.data,
    })
    commit('setMarkDown', res.data)
  },
}
