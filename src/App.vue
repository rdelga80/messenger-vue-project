<template>
  <div class="container mt-8 grid grid-gap-4 grid-cols-4 h-screen">
    <header class="header p-2 fixed top-0 text-white object-cover w-full">
      Header
    </header>

    <Sidebar/>

    <main class="p-4 text-white col-span-3">
      <router-view/>
    </main>
  </div>
</template>

<script>
import Sidebar from './layout/MSidebar.vue'

export default {
  name: 'app',
  components: { Sidebar }
}
</script>

<style scoped>
.header {
  background-color: rgb(2, 35, 46);
}
</style>
