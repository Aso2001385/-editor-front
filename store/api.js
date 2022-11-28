import axios from 'axios'

// const API_URL = 'http://localhost:8080/api'

export const state = () => ({
  users: [],
  userInfo: [],
})

export const mutations = {
  setUsers(state, response) {
    console.log(response)
    state.userInfo = response
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
  async postLogin({ commit }, argument) {
    // ユーザーの情報を持ってこれている
    // console.log(argument.user)
    // const response = await axios.post(`${API_URL}/users${argument.user}`)
    const response = await axios.get(`http://127.0.0.1:4010/users`)
    console.log(response.data)
    const USER = []
    USER.push(response.data[0].id)
    USER.push(response.data[0].name)
    USER.push(response.data[0].email)
    commit('setUsers', USER)
  },
  async userInfoUpdate({ commit }, argument) {
    // const response =  axios.post(`${API_URL}/users${argument.user}`)
    // const response = await axios.put(`http://127.0.0.1:4010/users/274`)
    const response = await '更新完了'
    commit('setUsers', response)
  },
  async sendWebEditor({ commit }, argument) {
    // const response = await axios.get(`http://127.0.0.1:4010/users`)
    const response = await '保存成功しました'
    commit('setWebEditor', response)
  },
}
