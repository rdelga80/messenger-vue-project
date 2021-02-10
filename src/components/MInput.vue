<template>
  <div class="input p-2 flex flex-col w-auto max-w-sm">
    <label
      class="label"
      :for="name">
      {{ label }}
    </label>

    <input
      class="input-field"
      :value="value"
      :name="name"
      :type="type"
      @input="$emit('input', $event.target.value)"/>
  </div>
</template>

<script>
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

  emits: ['input']
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