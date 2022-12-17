import axios from 'axios'
import { Octokit } from '@octokit/core'

axios.defaults.withCredentials = true
// const API_URL = 'this.$config.API_BASE_URL'
const API_URL = 'http://localhost:8080'

export const state = () => ({
  // users: [],
  user: [],
  markDown: '',
  projects: [],
  project: {},
  page: {},
})

export const getters = {
  user: state => {
    return state.user
  },
  projects: state => {
    return state.projects
  },
  project: state => {
    return state.project
  },
  page: state => {
    return state.page
  },
  markDown: state => {
    return state.markDown
  },
}

export const mutations = {
  setUser(state, response) {
    sessionStorage.setItem('user', response)
    state.user = response
  },
  projects(state, response) {
    state.projects = response
  },
  project(state, response) {
    state.project = response
  },
  page(state, response) {
    state.page = response
  },
  setMarkDown(state, response) {
    state.markDown = response
  },
}

export const actions = {
  register: async ({ commit }, argument) => {
    return await axios
      .get('https://fridayeditor.click/sanctum/csrf-cookie')
      .then(async () => {
        return await axios
          .post(`https://fridayeditor.click/api/users`, argument.data)
          .then(normalResponse => {
            commit('setUser', argument.data)
            return true
          })
          .catch(() => {
            return false
          })
      })
      .catch(() => {
        return false
      })
  },

  postLogin: async ({ commit }, argument) => {
    return await axios
      .get('https://fridayeditor.click/sanctum/csrf-cookie')
      .then(async () => {
        return await axios
          .post(`https://fridayeditor.click/login`, argument.data)
          .then(normalResponse => {
            commit('setUser', normalResponse.data)
            return true
          })
          .catch(() => {
            return false
          })
      })
      .catch(() => {
        return false
      })
  },
  putUser: async ({ commit }, argument) => {
    return await axios
      .put(`${API_URL}/users`, argument.data)
      .then(normalResponse => {
        commit('setUser', normalResponse.data)
        return true
      })
      .catch(() => {
        return false
      })
  },
  // delUser: async ({ commit }, argument) => {
  //   const response = await axios.delete(`${API_URL}/users/${argument}`)
  //   console.log(response.data)
  // },
  putUserPass: async ({ commit }, argument) => {
    return await axios
      .put(`${API_URL}/users/password`, argument.data)
      .then(normalResponse => {
        commit('setUser', normalResponse.data)
        return true
      })
      .catch(() => {
        return false
      })
  },
  // postSearch: async ({ commit }) => {
  //   const response = await axios.post(`${API_URL}/users/serarch`)
  //   console.log(response.data)
  // },
  getProjects: async ({ commit }) => {
    return await axios
      .get(`${API_URL}/projects`)
      .then(normalResponse => {
        commit('setProjects', normalResponse.data)
        return true
      })
      .catch(() => {
        return false
      })
  },
  postProjects: async ({ commit }, argument) => {
    return await axios
      .post(`${API_URL}/projects`, argument.data)
      .then(normalResponse => {
        commit('setProject', normalResponse.data)
        return true
      })
      .catch(() => {
        return false
      })
  },
  getProject: async ({ commit }, argument) => {
    return await axios
      .get(`${API_URL}/projects/${argument.id}`)
      .then(normalResponse => {
        commit('setProject', normalResponse.data)
        return true
      })
      .catch(() => {
        return false
      })
  },
  putProjects: async ({ commit }, argument) => {
    return await axios
      .put(`${API_URL}/projects`, argument.data)
      .then(normalResponse => {
        commit('setProject', normalResponse.data)
        return true
      })
      .catch(() => {
        return false
      })
  },
  delProjects: async ({ commit }, argument) => {
    return await axios
      .delete(`${API_URL}/projects/${argument}`)
      .then(normalResponse => {
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
