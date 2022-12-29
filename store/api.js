import axios from 'axios'
import { Octokit } from '@octokit/core'
import { nestClone } from '@/lib/common'

axios.defaults.withCredentials = true
const API_URL = process.env.API_BASE_URL
const BASE_URL = process.env.BASE_URL

export const state = () => ({
  // users: [],
  user: [],
  markDown: '',
  projects: [],
  page: {},
  designs: [],
  design: {},
  project: [],
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
  setUser(state, response) {
    sessionStorage.setItem('user', JSON.stringify(response))
    state.user = response
  },
  setProjects(state, response) {
    console.log('response')
    console.log(response)
    state.projects = response
  },
  setProject(state, response) {
    console.log(response)
    state.project = response
  },
  setPage(state, response) {
    state.page = response
  },
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
  register: async ({ commit }, argument) => {
    return await axios
      .get(`${BASE_URL}/sanctum/csrf-cookie`)
      .then(async () => {
        return await axios
          .post(`${API_URL}/users`, argument.data)
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
  confirmRegister: async ({ commit }, argument) => {
    //  後で変更される
    return await axios
      .get(`${BASE_URL}/sanctum/csrf-cookie`)
      .then(async () => {
        return await axios
          .post(`${API_URL}/verifications`, argument.data)
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
  reSendEmail: async ({ commit }, argument) => {
    return await axios
      .get(`${API_URL}/verifications/${argument.email}`)
      .then(normalResponse => {
        commit('setUser', normalResponse.data)
        return true
      })
      .catch(() => {
        return false
      })
  },

  postLogin: async ({ commit }, argument) => {
    return await axios
      .get(`${BASE_URL}/sanctum/csrf-cookie`)
      .then(async () => {
        return await axios
          .post(`${BASE_URL}/login`, argument.data)
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

  // ユーザーのプロジェクト情報など取得
  // データが取得できていない
  getProjects: async ({ commit }, argument) => {
    return await axios
      .get(`${API_URL}/users/${argument.data}`)
      .then(normalResponse => {
        commit('setProjects', normalResponse.data)
        return true
      })
      .catch(() => {
        return false
      })
  },
  getProject: async ({ commit }, argument) => {
    return await axios
      .get(`${API_URL}/projects/${argument.data}`)
      .then(normalResponse => {
        console.log('成功しているよー')
        commit('setProject', normalResponse.data)
        return true
      })
      .catch(() => {
        console.log('中身を知るよー　エラー')
        return false
      })
  },
  postProject: async ({ commit }, argument) => {
    return await axios
      .post(`${API_URL}/projects`, argument.data)
      .then(normalResponse => {
        console.log('postProjectの確認')
        commit('setProject', normalResponse.data)
        return true
      })
      .catch(() => {
        return false
      })
  },
  putProject: async ({ commit }, argument) => {
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
  getDesigns: async ({ commit }, argument) => {
    console.log('designs')
    return await axios
      .get(`${API_URL}/users/designs`)
      .then(normalResponse => {
        commit('setDesigns', normalResponse.data)
        console.table(nestClone(normalResponse.data))
        return true
      })
      .catch(e => {
        console.log('designs - e')
        console.log(e)
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
  corsTest: async () => {
    return await axios
      .get(`${API_URL}/cors/test`)
      .then(res => {
        console.log('cors')
        console.log(res)
      })
      .catch(e => {
        console.log(e)
      })
  },
  getUsers: async () => {
    return await axios
      .get(`${API_URL}/users`)
      .then(res => {
        console.log('users')
        console.log(res)
      })
      .catch(e => {
        console.log(e)
      })
  },
}
