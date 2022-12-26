import axios from 'axios'

axios.defaults.withCredentials = true
const API_URL = process.env.API_BASE_URL

export const state = () => ({
  list: [],
  page: {},
  project: [],
})

export const getters = {
  list: state => {
    return state.list
  },
  project: state => {
    return state.project
  },
  page: state => {
    return state.page
  },
}

export const mutations = {
  setProjects(state, response) {
    console.log(response)
    state.list = response
  },
  setProject(state, response) {
    console.log(response)
    state.project = response
  },
  setPage(state, response) {
    state.page = response
  },
}

export const actions = {
  // ユーザーのプロジェクト情報など取得
  // データが取得できていない
  getList: async ({ commit }, argument) => {
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
}
