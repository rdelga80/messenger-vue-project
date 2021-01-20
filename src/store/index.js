import { createStore } from 'vuex'
import * as contactsStore from './module/contacts'
import * as loadingStore from './module/loading'
import * as sidebarStore from './module/sidebar'
import loadingStatus from './loadingStatus'

const setModule = (module) => {
  return {
    namespaced: true,
    ...module
  }
}

const store = createStore({
  modules: {
    contacts: setModule(contactsStore),
    loading: setModule(loadingStore),
    sidebar: setModule(sidebarStore)
  },
  plugins: [loadingStatus]
})

export default store;
