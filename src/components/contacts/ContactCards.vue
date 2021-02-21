<template>
  <div class="contact-cards">
    <div
      v-for="contact in contacts"
      class="card">
      <div class="name">
        <slot
          :contact="contact"
          name="name">
          {{ contact.name }}
        </slot>
      </div>

      <div class="details">
        <div class="phone">
          <slot
            :contact="contact"
            name="phone">
            {{ contact.phone }}
          </slot>
        </div>

        <div class="email">
          <slot
            :contact="contact"
            name="email">
            {{ contact.email }}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactsCard',

  props: {
    contacts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-cards {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}

.card {
  background: rgba(146, 145, 138, 0.3);
  border: 3px solid var(--main-green);
  box-shadow: 2px 2px 5px rgba(100, 100, 100, 0.3);
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem 2rem;
  margin: {
    left: 15px;
    right: 15px;
  };
  text-align: center;
}

.name {
  color: var(--main-green);
  font-size: 4rem;
  font-weight: 700;
  padding: {
    top: 25px;
    bottom: 25px;
  }
}
</style>