<template>
  <aside class="sidebar h-full flex flex-col p-4 text-white">
    <side-bar-item :items="navItems"/>
  </aside>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import SideBarItem from '../components/SidebarItem.vue'

export default {
  name: 'Sidebar',
  components: { SideBarItem },

  setup() {
    const store = useStore()

    return {
      navItems: computed(() => store.state.sidebar.navItems)
    }
  }
}
</script>

<style>
.sidebar {
  background-color: rgb(19, 73, 94);
}
</style>