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
import { computed, getCurrentInstance, onMount } from 'vue'
import { useStore } from 'vuex'
import { handleActions } from '@/store/handleActions'

export default {
  name: 'MInput',
  props: {
    // componentRef: {
    //   type: String,
    //   required: true
    // }
  },
  setup(props) {
    const store = useStore()
    let uid,
        thisState
    
    onMount(() => {
      uid = `input-${getCurrentInstance().uid}`
      store.dispatch(
        'components/input/initializeState',
        uid,
        { root: true }
      )
    })

    return {
      focused: thisState?.focued || '',
      id: () => uid,
      label: thisState?.label || '',
      name: thisState?.name || '',
      type: thisState?.type || '',
      value: thisState?.value || '',
      // thisState: computed(() => store.getters['components/input/getThisState'](uid)),
      setValue: value => store.dispatch(
        'handleActions',
        {
          action: 'components/input/setValue',
          args: { type: 'value', value }
        },
        uid
      )
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
