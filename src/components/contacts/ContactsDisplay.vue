<template>
  <article class="contacts-display">
    <section
      v-for="(contact, index) in contacts"
      class="contact">
      <div class="actions">
        <Button
          icon
          @click="deleteContact(contact)">
          <Icon icon="delete"/>
        </Button>

        <Button
          icon
          @click="editContact(contact, index)">
          <Icon icon="edit"/>
        </Button>
      </div>

      <div v-for="section in sections">
        {{ contact[section] }}
      </div>
    </section>
  </article>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Button from '@/components/MButton.vue'
import Icon from '@/components/MIcon.vue'

export default {
  name: 'ContactsDisplay',

  components: {
    Button,
    Icon
  },

  setup() {
    const store = useStore()

    return {
      contacts: computed(() => store.state.contacts.contacts),
      deleteContact: (contact) => store.dispatch(
        'contacts/deleteContact',
        contact
      ),
      editContact: (contact, index) => {
        store.dispatch(
          'contacts/editContact',
          {
            contact,
            index
          }
        )
      },
      sections: ['name', 'email', 'phone']
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts-display {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  row-gap: 5px;
  width: 100%;
}

.contact {
  align-items: center;
  background-color: rgba(white, 0.4);
  box-shadow: 2px 2px rgba(black, 0.1);
  border: 2px solid rgba(19, 73, 94, 0.5);
  display: flex;
  color: slategray;
  padding: 5px;
  width: 100%;

  > * {
    flex: 1;
    padding: {
      left: 5px;
      right: 5px;
    }
  }
}

.actions {
  color: rgba(19, 73, 94, 0.5);
  column-gap: 5px;
  display: flex;
  justify-content: center;
}
</style>