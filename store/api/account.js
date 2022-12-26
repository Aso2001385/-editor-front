import axios from 'axios'

axios.defaults.withCredentials = true
const API_URL = process.env.API_BASE_URL
// const API_URL = 'http://localhost:8080'

export const state = () => ({
  user: [],
})

export const getters = {
  user: state => {
    return state.user
  },
}

export const mutations = {
  setUser(state, response) {
    sessionStorage.setItem('user', JSON.stringify(response))
    state.user = response
  },
}

export const actions = {
  register: async ({ commit }, argument) => {
    return await axios
      .get('https://fridayeditor.click/sanctum/csrf-cookie')
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
      .get('https://fridayeditor.click/sanctum/csrf-cookie')
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
    console.log('user.jsはちゃんと動いている')
    return await axios
      .get('https://fridayeditor.click/sanctum/csrf-cookie')
      .then(async () => {
        return await axios
          .post(`https://fridayeditor.click/login`, argument.data)
          .then(normalResponse => {
            console.log('true')
            commit('setUser', normalResponse.data)
            return true
          })
          .catch(() => {
            console.log('false')
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
}
