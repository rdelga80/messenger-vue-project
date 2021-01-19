<template>
  <form @submit.prevent="submitForm">
    <Input
      label="Enter Name"
      :value="contact.name"
      @update:value="setContactValue({ type: 'name', value: $event.target.value })"/>

    <Input
      label="Enter Email"
      :value="contact.email"
      @update:value="setContactValue({ type: 'email', value: $event.target.value })"/>

    <Input
      label="Enter Phone"
      :value="contact.phone"
      @update:value="setContactValue({ type: 'phone', value: $event.target.value })"/>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Input from '../../components/MInput.vue'

export default {
  name: 'AddNew',
  components: { Input },
  computed: mapState({
    contact({ contacts }) { return contacts.inputtedContact}
  }),
  methods: mapActions({
    setContactValue: 'contacts/setValue'
  })
}
</script>

<style>

</style>
