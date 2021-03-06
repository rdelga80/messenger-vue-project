import { ref } from 'vue'
import { each } from 'lodash'

const defaultState = {
  focused: false,
  name: '',
  label: '',
  value: '',
  type: 'text'
}

export const state = {}

export const getters = {
  getThisState: (state) => (uid) => {
    return state[uid]
  }
}

export const actions = {
  clearState({ commit }, uid) {
    commit(`CLEAR_STATE`)
  },
  initializeState({ commit }, uid) {
    commit('INITIALIZE_STATE', uid)
  },
  setValue({ commit }, args) {
    commit('SET_VALUE', args)
  }
}

export const mutations = {
  CLEAR_STATE(state, uid) {
    state[uid] = cloneDeep(defaultState)
  },
  INITIALIZE_STATE(state, uid) {
    state[uid] = {}

    each(defaultState, (value, key) => {
      state[uid][key] = value
    })
  },
  SET_VALUE(state, { type, value, uid }) {
    state[uid][type] = value
  }
}
