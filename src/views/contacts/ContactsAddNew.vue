<template>
  <form @submit.prevent="addContact">
    <Input
      label="Enter Name"
      :value="contact.name"
      @input="setContactValue({ type: 'name', value: $event.target.value })"/>

    <Input
      label="Enter Email"
      :value="contact.email"
      @input="setContactValue({ type: 'email', value: $event.target.value })"/>

    <Input
      label="Enter Phone"
      :value="contact.phone"
      @input="setContactValue({ type: 'phone', value: $event.target.value })"/>
    
    <Submit value="Add Contact"/>
  </form>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import Input from '@/components/MInput.vue'
import Submit from '@/components/MSubmit.vue'

export default {
  name: 'AddNew',
  components: {
    Input,
    Submit
  },
  setup() {
    const store = useStore()

    return {
      contact: computed(() => store.state.contacts.inputtedContact),
      contacts: computed(() => store.state.contacts.contacts),
      setContactValue: ({ type, value }) => store.dispatch('contacts/setValue', { type, value }, { root: true }),
      addContact: () => store.dispatch('contacts/addContact', {}, { root: true })
    }
  }
}
</script>

<style>

</style>
