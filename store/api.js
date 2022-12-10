import axios from 'axios'
import { Octokit } from '@octokit/core'

axios.defaults.withCredentials = true
// const API_URL = 'this.$config.API_BASE_URL'
const API_URL = 'http://localhost:8080'

export const state = () => ({
  // users: [],
  user: [],
  markDown: '',
})

export const getters = {
  markDown: state => {
    return state.markDown
  },
}

export const mutations = {
  setUsers(state, response) {
    console.log(response)
    state.user = response
  },
  setUser(state, response) {
    console.log(response)
    sessionStorage.setItem('user', response[0].name)
    state.user = response
  },
  putUsers(state, response) {
    console.log(response)
    // state.userInfo = response
  },
  setWebEditor(state, response) {
    console.log(response)
  },
  setMarkDown(state, response) {
    state.markDown = response
  },
}

export const actions = {
  register: async ({ commit }, argument) => {
    console.log(argument.data)
    const a = await axios
      .get('https://fridayeditor.click/sanctum/csrf-cookie')
      .then(response => {
        console.log('よし!csrfトークンの初期化に成功したぞ!')
        const ax = axios
          .post(`https://fridayeditor.click/api/users`, argument.data)
          .then(response => {
            console.log(response.data)
            return response.data
          })
          .catch(err => {
            console.log(err.response.data)
            console.log('大変だ!Postアクセスに失敗してしまった!' + err)
          })
        return ax
      })
      .catch(er => {
        console.log(er.headers)
        console.log('csrfトークンの初期化に失敗した!なんということだ!' + er)
      })

    if (a) {
      console.log('data...is...!?')
      console.log(a)
    } else {
      console.log('undefuind')
    }
  },
  postLogin: async ({ commit }, argument) => {
    console.log('headers')
    const a = await axios
      .get('https://fridayeditor.click/sanctum/csrf-cookie')
      .then(response => {
        console.log('よし!csrfトークンの初期化に成功したぞ!')
        const ax = axios
          .post(`https://fridayeditor.click/login`, argument.data)
          .then(response => {
            console.log(response.data)
          })
          .catch(err => {
            console.log('大変だ!Postアクセスに失敗してしまった!' + err)
          })
        return ax
      })
      .catch(er => {
        console.log(er.headers)
        console.log('csrfトークンの初期化に失敗した!なんということだ!' + er)
      })

    if (a) {
      console.log('data...is...!?')
      console.log(a)
    } else {
      console.log('undefuind')
    }
  },
  getUsers: async ({ commit }) => {
    const response = await axios.get(`${API_URL}/users`)
    console.log('response.data')
    console.log(response.data)
    commit('setUser', response.data)
  },
  getUser: async ({ commit }, argument) => {
    const response = await axios.get(`${API_URL}/users/${argument}`)
    console.log(response.data)
  },
  putUser: async ({ commit }, argument) => {
    const response = await axios.put(`${API_URL}/users/${argument}`)
    console.log(response.data)
  },
  delUser: async ({ commit }, argument) => {
    const response = await axios.delete(`${API_URL}/users/${argument}`)
    console.log(response.data)
  },
  putUserPass: async ({ commit }) => {
    const response = await axios.put(`${API_URL}/users/password`)
    console.log(response.data)
  },
  postSearch: async ({ commit }) => {
    const response = await axios.post(`${API_URL}/users/serarch`)
    console.log(response.data)
  },
  getProjects: async ({ commit }) => {
    const response = await axios.get(`${API_URL}/projects`)
    console.log(response.data)
  },
  postProjects: async ({ commit }) => {
    const response = await axios.get(`${API_URL}/projects`)
    console.log(response.data)
  },
  getProjects: async ({ commit }, argument) => {
    const response = await axios.get(`${API_URL}/projects/${argument}`)
    console.log(response.data)
  },
  putProjects: async ({ commit }, argument) => {
    const response = await axios.put(`${API_URL}/projects/${argument}`)
    console.log(response.data)
  },
  delProjects: async ({ commit }, argument) => {
    const response = await axios.delete(`${API_URL}/projects/${argument}`)
    console.log(response.data)
  },
  getMarkDown: async ({ commit }, argument) => {
    const octokit = new Octokit({
      auth: this.$config.AUTH_TOKEN,
    })

    const res = await octokit.request(this.$config.MARK_DOWN_API_BASE_URL, {
      text: argument.data,
    })

    console.log(res)
    commit('setMarkDown', res.data)
  },
}
