<template>
  <article
    v-for="contact in contacts"
    class="contacts-display">
    <section
      v-for="section in sections"
      :class="['contact', section]">
      <slot
        :name="section"
        :contact="contact">
        {{ contact[section] }}
      </slot>
    </section>
  </article>
</template>

<script>
export default {
  name: 'ContactsDisplay',
  props: {
    contacts: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    return {
      sections: ['actions', 'name', 'email', 'phone']
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts-display {
  border: 2px solid white;
  display: flex;
  max-width: 600px;
  padding: 5px;
  width: 100%;

  .actions {
    flex: 0 1 auto;
    display: flex;
    column-gap: 5px;
  }

  > * {
    align-items: center;
    display: flex;
    flex: 1;
    padding: {
      left: 5px;
      right: 5px;
    }
  }
}
</style>