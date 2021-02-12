<script>
import { h, computed } from 'vue'

export default {
  name: 'MButton',
  props: {
    bgColor: {
      type: String,
      default: `var(--main-green-bg)`
    },
    borderColor: {
      type: String,
      default: `var(--main-green)`
    },
    icon: Boolean
  },

  setup(props, { slots }) {
    const buttonStyles = computed(() => ({
      '--btn-bg-color': props.bgColor,
      '--btn-border-color': props.borderColor
    }))

    const buttonClasses = props.icon ? ['button', 'button-icon'] : ['button']

    return () => h(
      'button',
      {
        class: buttonClasses,
        style: [buttonStyles.value]
      },
      slots.default()
    )
  }
}
</script>

<style lang="scss">
%button-vars {
  --padding-y: 4px;
}

.button-icon {
  --padding-y: 8px;
}

.button {
  @extend %button-vars;

  padding: var(--padding-y) 12px;
  border: 2px solid var(--btn-border-color);
  border-radius: 5px;
  background-color: var(--btn-bg-color);

  &:focus {
    outline: none;
  }
}
</style>
