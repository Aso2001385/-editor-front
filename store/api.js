import axios from 'axios'
axios.defaults.withCredentials = true
const API_URL = 'http://localhost:8080/api'

export const state = () => ({
  users: [],
  user: '',
})

export const mutations = {
  setUsers: (state, response) => {
    state.users = response
  },
  setUser: (state, response) => {
    state.user = response
  },
}

export const getters = {
  users: state => {
    return state.users
  },
  user: state => {
    return state.user
  },
}

export const actions = {
  postUserInfo: async ({ commit }, argument) => {
    // ユーザーの情報を持ってこれている
    console.log(argument.user)
    const response = await axios.post(`${API_URL}/users${argument.user}`)
    console.log(response) // 消す
    // commit('setUsers', response.data)
  },
  postLogin: async ({ commit }, argument) => {
    // ユーザーの情報を持ってこれている
    console.log(argument.user)
    const response = await axios.post(`${API_URL}/users${argument.user}`)
    console.log(response) // 消す
    // レスポンスにユーザーidがあるからそれを利用する
    // commit('setUsers', response.data)
  },
  sendLogin: async ({ commit }, argument) => {
    const a = await axios
      .get('http://localhost:8080/sanctum/csrf-cookie')
      .then(response => {
        console.log('よし!csrfトークンの初期化に成功したぞ!')
        const ax = axios
          .post(`http://localhost:8080/login`, argument.data)
          .then(response => {
            console.log(response.data)
            return response.data
          })
          .catch(err => {
            console.log('大変だ!Postアクセスに失敗してしまった!' + err)
          })
        return ax
      })
      .catch(er => {
        console.log('csrfトークンの初期化に失敗した!なんということだ!')
      })

    if (a) {
      console.log('data...is...!?')
      console.log(a)
    } else {
      console.log('undefuind')
    }
  },
  getTest: async ({ commit }) => {
    const response = await axios.get(`${API_URL}/cors/test`)
    console.log(response.data) // 消す
  },
  getUsers: async ({ commit }) => {
    // ユーザーの情報を全て取得
    const response = await axios.get(`${API_URL}/users`)
    console.log(response.data) // 消す
    // commit('setUsers', response.data)
  },
  getProjectList: async ({ commit }, argument) => {
    const response = await axios.get(`${API_URL}/users/${argument.id}`)
    const user = response.data
    console.log(user) // 消す
    // commit('setUser', user)
  },
}
