import _cloneDeep from 'lodash/cloneDeep'

const defaultState = {
  contacts: [],
  inputtedContact: {
    name: undefined,
    email: undefined,
    phone: undefined
  }
}

export const state = () => cloneDeep(defaultState)

export const actions = {
  addContact({ commit, dispatch }) {
    setTimeout(() => {
      console.log('contact')
      commit('ADD_CONTACT')

      dispatch('resetInputtedContact')
    }, 2000)
  },
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
  ADD_CONTACT(state) {
    state.contacts.push(state.inputtedContact)
  },
  RESET_INPUTTED_CONTACT(state) {
    state.inputtedContact = cloneDeep(defaultState.inputtedContact)
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
