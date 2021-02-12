<template>
  <component
    :is="iconComponent"
    class="icon"/>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  },

  setup(props) {
    return {
      iconComponent: defineAsyncComponent(() =>
        import(`./icons/${props.icon}.vue`)
      )
    }
  }
}
</script>

<style lang="scss" scoped>
svg.icon {
  width: 1rem;
  height: 1rem;
}
</style>