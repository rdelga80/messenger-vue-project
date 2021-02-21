<template>
  <ContactCards :contacts="contacts"/>
</template>

<script>
import { useStore } from 'vuex'
import ContactCards from '@/components/contacts/ContactCards.vue'

export default {
  name: 'ContactsList',

  components: { ContactCards },

  setup() {
    const store = useStore()

    return {
      contacts: store.state.contacts.contacts
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  opacity: 1;
}
</style>
