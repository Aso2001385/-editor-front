import axios from 'axios'

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
  getUsers: async ({ commit }) => {
    // ユーザーの情報を全て取得
    const response = await axios.get(`${API_URL}/users`)
    console.log(response) // 消す
    // commit('setUsers', response.data)
  },
  getProjectList: async ({ commit }, argument) => {
    const response = await axios.get(`${API_URL}/users/${argument.id}`)
    const user = response.data
    console.log(user) // 消す
    // commit('setUser', user)
  },
}
