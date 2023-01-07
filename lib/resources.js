const DEFAULT_STATE = {
  collection: [],
  resource: {},
}

const DEFAULT_GETTER = {
  collection: state => {
    return state.collection
  },
  resource: state => {
    return state.resource
  },
}

const DEFALT_MUTATIONS = {
  setCollection(state, response) {
    state.collection = response
  },
  setResource(state, response) {
    state.resource = response
  },
}

export const crudState = (objects = {}) => {
  return Object.assign(objects, DEFAULT_STATE)
}

export const crudGetters = (objects = {}) => {
  return Object.assign(objects, DEFAULT_GETTER)
}

export const crudMutations = (methods = {}) => {
  return Object.assign(methods, DEFALT_MUTATIONS)
}

export const crudActions = (axios, url, methods = {}) => {
  return Object.assign(methods, {
    gets: async ({ commit }) => {
      return await axios
        .get(url)
        .then(response => {
          commit('setCollection', response.data)
          return true
        })
        .catch(() => {
          return false
        })
    },
    get: async ({ commit }, argument) => {
      return await axios
        .get(`${url}/${argument.id}`)
        .then(response => {
          commit('setResource', response.data)
          return true
        })
        .catch(() => {
          return false
        })
    },
    post: async ({ commit }, argument) => {
      console.log('postの処理が行われている')
      // console.log(argument.data)
      return await axios
        .post(url, argument.data)
        .then(response => {
          console.log('true')
          commit('setResource', response.data)
          return true
        })
        .catch(() => {
          console.log('false')
          return false
        })
    },
    put: async ({ commit }, argument) => {
      return await axios
        .put(`${url}/${argument.id}`, argument.data)
        .then(response => {
          commit('setResource', response.data)
          return true
        })
        .catch(() => {
          return false
        })
    },
    delete: async ({ commit }, argument) => {
      return await axios
        .delete(`${url}/${argument.id}`)
        .then(() => {
          commit('setResource', {})
          return true
        })
        .catch(() => {
          return false
        })
    },
  })
}
