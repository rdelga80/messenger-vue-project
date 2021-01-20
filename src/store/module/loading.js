const defaultState = {
  addContact: false
}

export const state = () => ({ ...defaultState })

export const actions = {
  setStatus({ commit }, { type, status }) {
    commit('SET_STATUS', { type, status })
  }
}

export const mutations = {
  SET_STATUS(state, { type, status }) {
    state[type] = status
  }
}
