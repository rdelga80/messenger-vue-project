import { createStore } from 'vuex'
import * as contactsStore from './module/contacts'
import * as loadingStore from './module/loading'
import * as sidebarStore from './module/sidebar'
import * as inputStore from './module/components/input'
import loadingStatus from './loadingStatus'
import { actions } from './handleActions'

const setModule = (module) => {
  return {
    namespaced: true,
    ...module
  }
}

const store = createStore({
  actions: actions,
  modules: {
    components: {
      namespaced: true,
      modules: {
        input: setModule(inputStore)
      }
    },
    contacts: setModule(contactsStore),
    loading: setModule(loadingStore),
    sidebar: setModule(sidebarStore)
  },
  plugins: [
    loadingStatus
  ]
})

export default store;
