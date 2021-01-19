const defaultState = {
  inputtedContact: {
    name: undefined,
    email: undefined,
    phone: undefined
  }
}

export const state = () => ({ ...defaultState })

export const actions = {
  resetInputtedContact({ commit }) {
    commit('RESET_INPUTTED_CONTACT')
  },
  resetState({ commit }) {
    commit('RESET_STATE')
  },
  setValue({ commit }, { type, value }) {
    commit('SET_VALUE', { type, value })
  }
}

export const mutations = {
  RESET_INPUTTED_CONTACT(state) {
    state.inputtedContact = { ...defaultState.inputtedContact }
  },
  RESET_STATE(state) {
    defaultState.forEach((stateItem, key) => {
      Vue.set(state, key, stateItem) 
    })
  },
  SET_VALUE(state, { type, value }) {
    state.inputtedContact[type] = value
  }
}
