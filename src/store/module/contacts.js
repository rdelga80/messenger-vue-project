import { cloneDeep, difference, each, isUndefined } from 'lodash'

const defaultState = {
  contacts: [
    {
      name: 'test',
      email: 'test@test.com',
      phone: '123-456-7890'
    },
    {
      name: 'test2',
      email: 'test@test.com',
      phone: '123-456-7890'
    },
    {
      name: 'test3',
      email: 'test@test.com',
      phone: '123-456-7890'
    }
  ],
  editing: undefined,
  inputtedContact: {
    name: undefined,
    email: undefined,
    phone: undefined
  }
}

export const state = () => cloneDeep(defaultState)

export const getters = {
  isEditing: (state) => !isUndefined(state.editing)
}

export const actions = {
  addContact({ commit, dispatch }) {
    setTimeout(() => {
      commit('ADD_CONTACT')

      dispatch('resetInputtedContact')
    }, 2000)
  },
  deleteContact({ commit }, contact) {
    commit('DELETE_CONTACT', contact)
  },
  editContact({ commit }, { contact, index }) {
    commit('EDIT_CONTACT', { contact, index })
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
    if (!isUndefined(state.editing)) {
      each(state.inputtedContact, (value, key) => {
        state.contacts[state.editing][key] = value
      })

      state.editing = undefined
    } else {
      state.contacts.push(state.inputtedContact)
    }
  },
  DELETE_CONTACT(state, contact) {
    state.contacts = difference(state.contacts, [contact])
  },
  EDIT_CONTACT(state, { contact, index }) {
    each(contact, (value, key) => {
      state.inputtedContact[key] = value
    })

    state.editing = index
  },
  RESET_INPUTTED_CONTACT(state) {
    state.inputtedContact = cloneDeep(defaultState.inputtedContact)
  },
  RESET_STATE(state) {
    defaultState.forEach((stateItem, key) => {
      state[key] = stateItem
    })
  },
  SET_VALUE(state, { type, value }) {
    state.inputtedContact[type] = value
  }
}
