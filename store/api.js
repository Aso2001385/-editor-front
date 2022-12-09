import axios from 'axios'
import { Octokit } from '@octokit/core'

axios.defaults.withCredentials = true
const API_URL = 'https://fridayeditor.click/api'

export const state = () => ({
  // users: [],
  user: [],
})

export const mutations = {
  setUsers(state, response) {
    console.log(response)
    state.user = response
  },
  setUser(state, response) {
    console.log('行われているかの確認')
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
  // getTest: async ({ commit }) => {
  //   const response = await axios.get(`${API_URL}/cors/test`)
  //   console.log(response.data) // 消す
  // },
  getUsers: async ({ commit }) => {
    // ユーザーの情報を全て取得
    const response = await axios.get(`${API_URL}/users`)
    console.log('response.data')
    console.log(response.data)
    console.log(response.data[0].email)
    commit('setUser', response.data)
  },
  getMarkDown: async ({ commit }, argument) => {
    console.log(argument)
    const octokit = new Octokit({
      auth: this.$config.AUTH_TOKEN,
    })

    const res = await octokit.request(this.$config.MARK_DOWN_API_BASE_URL, {
      text: argument.data,
    })

    console.log(res)
  },
}
