import axios from 'axios'
import { crudState, crudGetters, crudMutations, crudActions } from '@/lib/resources'

const API_URL = process.env.API_BASE_URL + '/api'
const BASE_URL = process.env.API_BASE_URL

axios.defaults.withCredentials = true

export const state = () =>
  crudState({
    auth: {},
    authFlg: false,
  })

export const getters = crudGetters({
  auth: state => {
    return state.auth
  },
  authFlg: state => {
    return state.authFlg
  },
})

export const mutations = crudMutations({
  setAuth(state, response) {
    sessionStorage.setItem('user', JSON.stringify(response))
    state.authFlg = true
    state.auth = response
  },
})

export const actions = crudActions(axios, `${API_URL}/users`, {
  register: async ({ commit }, argument) => {
    return await axios
      .get(`${BASE_URL}/sanctum/csrf-cookie`)
      .then(async () => {
        return await axios
          .post(`${API_URL}/users`, argument.data)
          .then(response => {
            commit('setAuth', response.data)
            return response.status
          })
          .catch(e => {
            return e.status
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
          .then(response => {
            commit('setAuth', response.data)
            return true
          })
          .catch(err => {
            // 401の場合のみログインページに遷移
            console.log(err.response.status)
            console.log('asdfghjkl;')
            this.$router.push({ path: `/account/login` })
            return err.response.status
          })
      })
      .catch(err => {
        console.log('asdfghjkl;')
        console.log(err)
        return false
      })
  },
  reSendEmail: async ({ commit }, argument) => {
    return await axios
      .get(`${API_URL}/verifications/${argument.email}`)
      .then(response => {
        commit('setAuth', response.data)
        return true
      })
      .catch(err => {
        // 401の場合のみログインページに遷移
        console.log(err.response.status)
        this.$router.push({ path: `/account/login` })
        return false
      })
  },

  postLogin: async ({ commit }, argument) => {
    return await axios
      .get(`${BASE_URL}/sanctum/csrf-cookie`)
      .then(async () => {
        return await axios
          .post(`${BASE_URL}/login`, argument.data)
          .then(response => {
            commit('setAuth', response.data)
            return true
          })
          .catch(err => {
            return err.response.status
          })
      })
      .catch(e => {
        return false
      })
  },

  putUserPass: async ({ commit }, argument) => {
    return await axios
      .put(`${API_URL}/users/password`, argument.data)
      .then(response => {
        commit('setUser', response.data)
        return true
      })
      .catch(() => {
        return false
      })
  },
})
