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
import { computed, onMounted, reactive, ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { modularAction } from '@/assets/js/storeHelpers'
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'ModularInput',
  props: {
    label: String
  },
  setup(props) {
    const store = useStore()
    let uid = ref(''),
        thisState = reactive({
          focused: '',
          name: '',
          label: '',
          value: '',
          type: ''
        })

    watchEffect(uid, thisState)
    
    onMounted(() => {
      uid.value = `input-${uuidv4()}`

      store.dispatch(
        'components/input/initializeState',
        uid.value,
        { root: true }
      )

      modularAction({
        action: 'components/input/setValue',
        args: { type: 'label', value: props.label },
        uid: uid.value
      })
    })

    thisState = computed(() => store.getters['components/input/getThisState'](uid.value))

    const setValue = value => store.dispatch(
      'modularAction',
      {
        action: 'components/input/setValue',
        args: { type: 'value', value },
        uid: uid.value
      }
    )

    return {
      focused: computed(() => thisState?.value?.focused || ''),
      id: () => uid.value,
      label: computed(() => thisState?.value?.label || 'Label'),
      name: computed(() => thisState?.value?.name || ''),
      thisState,
      type: computed(() => thisState?.value?.type || ''),
      value: computed(() => thisState?.value?.value || ''),
      setValue,
      uid
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
