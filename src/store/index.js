import { createStore } from 'vuex'
import * as contactsStore from './module/contacts'
import * as sidebarStore from './module/sidebar'

const store = createStore({
  modules: {
    contacts: {
      namespaced: true,
      ...contactsStore
    },
    sidebar: {
      namespaced: true,
      ...sidebarStore
    }
  }
})

export default store;
