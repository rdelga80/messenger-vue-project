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
        
        <Submit :value="isEditing ? 'Save Contact' : 'Add Contact'"/>
      </form>
    </section>

    <ContactsDisplay/>
  </article>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import ContactsDisplay from '@/components/contacts/ContactsDisplay.vue'
import Input from '@/components/MInput.vue'
import Submit from '@/components/MSubmit.vue'

export default {
  name: 'AddNew',

  components: {
    ContactsDisplay,
    Input,
    Submit
  },

  setup() {
    const email = ref(null),
          name = ref(null),
          phone = ref(null),
          store = useStore()

    onMounted(() => {
      name.value.focus()
    })

    return {
      addContact: () => store.dispatch(
        'contacts/addContact',
        undefined,
        { root: true }
      ),
      contact: computed(() => store.state.contacts.inputtedContact),
      contacts: computed(() => store.state.contacts.contacts),
      isEditing: computed(() => store.getters['contacts/isEditing']),
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

<style lang="scss" scoped>
.add-new {
  display: grid;
  grid-template-columns: minmax(200px, 25%) auto;
  column-gap: 2rem;
}

.form {
  background-color: rgba(white, 0.4);
  border: 2px solid var(--main-green);
  box-shadow: 2px 2px rgba(black, 0.1);
  color: var(--main-green);
}

:deep input {
  color: var(--main-green-bg);
}
</style>
