<template>
  <article class="add-new">
    <section class="form">
      <form @submit.prevent="addContact">
        <Input
          ref="name"
          label="Enter Name"
          :value="contact.name"
          @input="setContactValue({ type: 'name', value: $event })"/>

        <Input
          ref="email"
          label="Enter Email"
          :value="contact.email"
          @input="setContactValue({ type: 'email', value: $event })"/>

        <Input
          ref="phone"
          label="Enter Phone"
          :value="contact.phone"
          @input="setContactValue({ type: 'phone', value: $event })"/>
        
        <Submit value="Add Contact"/>
      </form>
    </section>

    <section class="display">
      <ContactsDisplay :contacts="contacts">
        <template #actions>
          <MButton>
            X
          </MButton>

          <MButton>
            O
          </MButton>
        </template>
      </ContactsDisplay>
    </section>
  </article>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import ContactsDisplay from '@/components/contacts/ContactsDisplay.vue'
import Input from '@/components/MInput.vue'
import MButton from '@/components/MButton.vue'
import Submit from '@/components/MSubmit.vue'

export default {
  name: 'AddNew',

  components: {
    ContactsDisplay,
    Input,
    MButton,
    Submit
  },

  setup() {
    const email = ref(null),
          name = ref(null),
          phone = ref(null),
          store = useStore()

    return {
      addContact: () => store.dispatch(
        'contacts/addContact',
        undefined,
        { root: true }
      ),
      contact: computed(() => store.state.contacts.inputtedContact),
      contacts: computed(() => store.state.contacts.contacts),
      email,
      name,
      phone,
      setContactValue: ({ type, value }) => {
        store.dispatch('contacts/setValue', { type, value }, { root: true })
      }
    }
  }
}
</script>

<style scoped>
.add-new {
  display: grid;
  grid-template-columns: minmax(200px, 25%) auto;
  column-gap: 2rem;
}
</style>
