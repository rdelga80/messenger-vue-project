<script>
import { h, computed } from 'vue'

export default {
  name: 'MButton',
  props: {
    bgColor: {
      type: String,
      default: `rgba(19, 73, 94, 0.4)`
    },
    borderColor: {
      type: String,
      default: `rgba(19, 73, 94, 0.5)`
    }
  },

  setup(props, { slots }) {
    const buttonStyles = computed(() => ({
      '--btn-bg-color': props.bgColor,
      '--btn-border-color': props.borderColor
    }))

    return () => h(
      'button',
      {
        class: ['button'],
        style: [buttonStyles.value]
      },
      slots.default()
    )
  }
}
</script>

<style lang="scss">
button.button {
  padding: 4px 12px;
  border: 2px solid var(--btn-border-color);
  border-radius: 5px;
  background-color: var(--btn-bg-color);
}
</style>
