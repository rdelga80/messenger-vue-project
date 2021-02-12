<template>
  <div class="input p-2 flex flex-col w-auto max-w-sm">
    <label
      class="label font-bold"
      :for="name">
      {{ label }}
    </label>

    <input
      class="input-field"
      ref="input"
      :value="value"
      :name="name"
      :type="type"
      @input="$emit('input', $event.target.value)"/>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  name: 'MInput',

  props: {
    label: String,
    name: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    value: [String, Number, Date]
  },

  emits: ['input'],

  setup(props) {
    const input = ref('')

    return {
      input,
      focus: () => { input.value.focus() }
    }
  }
}
</script>

<style lang="scss" scoped>
label {
  font-weight: 700;
}

input.input-field {
  background-color: transparent;
  border-bottom: 1px solid var(--main-green);

  &:focus {
    outline: none;
  }
}
</style>