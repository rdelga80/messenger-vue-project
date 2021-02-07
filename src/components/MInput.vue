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
      @input="setValue($event.target.value)"/>
  </div>
</template>

<script>
import { computed, getCurrentInstance, onMounted } from 'vue'
import { useStore } from 'vuex'
import { modularAction } from '@/assets/js/storeHelpers'

export default {
  name: 'MInput',
  props: {
    label: String
  },
  setup(props) {
    const store = useStore()
    let uid,
        thisState
    
    onMounted(() => {
      uid = `input-${getCurrentInstance().uid}`

      store.dispatch(
        'components/input/initializeState',
        uid,
        { root: true }
      )

      modularAction({
        action: 'components/input/setValue',
        args: { type: 'label', value: props.label },
        uid
      })
    })

    return {
      focused: computed(() => thisState?.focused || ''),
      id: () => { return uid },
      label: computed(() => thisState?.label || ''),
      name: computed(() => thisState?.name || ''),
      type: computed(() => thisState?.type || ''),
      value: computed(() => thisState?.value || ''),
      thisState: computed(() => store.getters['components/input/getThisState'](uid)),
      setValue: value => modularAction({
        action: 'components/input/setValue',
        args: { type: 'value', value },
        uid
      })
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
