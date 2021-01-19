<template>
  <div class="input p-2 flex flex-col w-auto max-w-sm">
    <label
      class="label"
      :for="name">
      {{ label }}
    </label>

    <input
      v-model="value"
      class="input-field"
      :name="name"
      :type="type"
      @focus="focused = true"
      @blur="focused = false"/>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'MInput',
  props: {
    name: String,
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text',
      validator: v => ['text', 'date', 'search', 'tel', 'url', 'number'].includes(v)
    },
    value: [String, Number, Date]
  },
  setup(props) {
    let focused = ref(false)

    return {
      focused
    }
  }
}
</script>

<style scoped>
input.input-field {
  background-color: transparent;
  border-bottom: 1px solid white;
}

input.input-field:focus {
  outline: none;
}
</style>
